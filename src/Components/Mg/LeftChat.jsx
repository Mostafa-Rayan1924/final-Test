import { useContext, useEffect, useRef, useState } from "react";
import Message from "./Message/Message";
import PersonWhoChatWith from "./PersonWhoChatWith";
import sendBtn from "../../img/Mg/Vector.png";
import { FaAngleDoubleUp } from "react-icons/fa";
import { MdDoNotDisturb } from "react-icons/md";
import { CurrentChatContext } from "../../contexts/CurrentClickChat";
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
    }
  };

  // up btn
  let handleUp = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        className={`${
          currentChat !== "" ? "flex-col" : "hidden lg:flex flex-col"
        } relative sm:h-[450px] md:h-[550px] overflow-y-scroll gap-5  flex flex-col w-full leftSec p-5`}>
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
                <span
                  onClick={handleUp}
                  className=" bg-green-500 block lg:hidden cursor-pointer grid place-items-center text-white w-8 h-8 rounded">
                  <FaAngleDoubleUp />
                </span>
              </form>
            </div>
          </>
        ) : (
          <span className="absolute top-[30%] text-6xl  text-center text-gray-400">
            اختر محادثة لبدأ الشات ...
          </span>
        )}
      </div>
    </>
  );
};

export default LeftChat;
