import { useContext, useEffect, useRef, useState } from "react";
import Message from "./Message/Message";
import PersonWhoChatWith from "./PersonWhoChatWith";
import sendBtn from "../../img/Mg/Vector.png";
import { MdDoNotDisturb } from "react-icons/md";
import { CurrentChatContext } from "../../contexts/CurrentClickChat";
import { IoIosNotifications } from "react-icons/io";
import axios from "axios";
import { authContext } from "../../contexts/Auth";
import { ConvIdChatContext } from "../../contexts/ConversationId";
import { io } from "socket.io-client";
const LeftChat = () => {
  let { currentChat } = useContext(CurrentChatContext);
  let { convId, setConvId } = useContext(ConvIdChatContext);
  let ScrollRef = useRef();
  let { auth } = useContext(authContext);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const socket = useRef();
  let [send, setSend] = useState("");
  let [messages, setMessages] = useState([]);
  let [waitMsg, setWaitMsg] = useState(false);
  const [notifications, setNotifications] = useState([]);
  let [openNotificationsBar, setopenNotificationsBar] = useState(false);
  useEffect(() => {
    socket.current?.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);
  //  get messages
  let getMessages = () => {
    if (currentChat !== "") {
      let headers = {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      axios
        .get(`https://mg-company.onrender.com/mg/chat/message/${convId._id}`, {
          headers: headers,
        })
        .then(function (response) {
          setMessages(response.data.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }
  };

  let msgMap = messages.map((item) => {
    return (
      <Message
        key={item?._id}
        own={item?.sender == auth.user._id}
        item={item}
      />
    );
  });
  console.log(notifications);
  // connect to server io and get messages
  useEffect(() => {
    socket.current = io("https://mg-company.onrender.com");

    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
  useEffect(() => {
    arrivalMessage &&
      convId?.members?.includes(auth.user._id) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, convId]);
  useEffect(() => {
    socket.current?.emit("addUser", auth?.user?._id);
    // socket.current?.emit("addUser", currentChat?._id);
  }, [auth]);
  useEffect(() => {
    getMessages();
  }, [convId]);
  //  scroll to the end of the chat
  useEffect(() => {
    ScrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // function to delete all msg
  let handleDeleteAll = () => {
    let confirmMsg = window.confirm("هل انت متاكد من حذف جميع الرسائل");
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    if (confirmMsg) {
      axios
        .delete(
          `https://mg-company.onrender.com/mg/chat/message/deleteallmsg/${convId._id}`,
          {
            headers: headers,
          }
        )
        .then(function (res) {
          setMessages([]);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  //  send msg
  let handleSendMsg = (e) => {
    e.preventDefault();
    setSend("");
    setWaitMsg(true);
    // body params for SEND msg
    let params = {
      text: send,
    };
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const receiverId = convId.members.find(
      (member) => member !== auth.user._id
    );
    socket.current?.emit("sendMessage", {
      senderId: auth.user._id,
      receiverId: receiverId,
      text: send,
    });
    if (send !== "" && send !== null) {
      axios
        .post(
          `https://mg-company.onrender.com/mg/chat/message/${convId._id}`,
          params,
          {
            headers: headers,
          }
        )
        .then((res) => {
          setMessages([...messages, res.data.data]);
          setWaitMsg(false);
        })
        .catch((e) => {
          console.log(e);
        });
      //send notification
      socket.current?.emit("sendNotification", {
        senderName: auth.user.name,
        receiverName: currentChat.name,
        receiverId: currentChat._id,
      });
    }
  };
  // open noti
  let openNotifications = () => {
    if (notifications.length > 0) {
      setopenNotificationsBar((prev) => !prev);
    }
  };
  return (
    <div
      className={`${
        currentChat !== "" ? "flex-col" : "hidden lg:flex flex-col"
      } relative sm:h-[450px] md:h-[550px] overflow-y-scroll gap-5  flex flex-col w-full leftSec p-5`}>
      <div
        onClick={openNotifications}
        className="fixed top-20 left-5 text-yellow-400 ">
        <IoIosNotifications size={40} />
        <div className="absolute top-0 right-0 max-w-[90%] bg-red-600 text-white w-5 h-5 grid place-items-center text-sm rounded-full ">
          {notifications?.length}
        </div>
        {openNotificationsBar ? (
          <div className="messages absolute w-[300px] left-1/2 -translate-x-1/2 divide-y-2  overflow-y-scroll bg-slate-100 max-h-[150px] rounded  p-4 text-black">
            {notifications.map((item) => {
              return (
                <div className="pb-1 my-1">
                  <span className=" font-bold ml-1">{item.senderName}</span>
                  <span>ارسل رساله</span>
                </div>
              );
            })}
            <button
              onClick={() => {
                setNotifications([]);
              }}
              className="bg-yellow-400 p-2 w-full rounded-lg my-2 text-white">
              تم القراءه
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
      {currentChat ? (
        <>
          {/* top chat */}
          <PersonWhoChatWith handleDeleteAllMsg={handleDeleteAll} />

          {/* conversations */}
          {messages.length == 0 ? (
            <h2 className="absolute text-xl  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              لا يوجد رسائل ...
            </h2>
          ) : (
            msgMap
          )}
          {/* area to send message */}
          <div className="mt-auto relative" ref={ScrollRef}>
            {/* <SendMsg /> */}

            <form
              onSubmit={handleSendMsg}
              className="flex justify-between border-t-2 pt-4 mt-auto   items-center gap-3">
              <button>
                {waitMsg ? (
                  <MdDoNotDisturb
                    className="pointer-events-none cursor-not-allowed"
                    size={25}
                  />
                ) : send == "" || send == null ? (
                  ""
                ) : (
                  <img className="cursor-pointer" src={sendBtn} alt="" />
                )}
              </button>
              <input
                value={send}
                onChange={(e) => {
                  setSend(e.target.value);
                }}
                type="text"
                placeholder="اكتب رسالتك ..."
                className="w-[100%]  bg-[#e7e7e7] rounded-lg h-[40px] outline-none pr-4"
              />
            </form>
          </div>
        </>
      ) : (
        <span className="absolute top-[30%] text-6xl  text-center text-gray-400">
          اختر محادثة لبدأ الشات ...
        </span>
      )}
    </div>
  );
};

export default LeftChat;
