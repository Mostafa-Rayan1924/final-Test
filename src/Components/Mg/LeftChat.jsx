import { useContext, useEffect, useRef, useState } from "react";
import Message from "./Message/Message";
import PersonWhoChatWith from "./PersonWhoChatWith";
import SendMsg from "./SendMsg";
import { CurrentChatContext } from "../../contexts/CurrentClickChat";
import axios from "axios";
import { authContext } from "../../contexts/Auth";
import { ConvIdChatContext } from "../../contexts/ConversationId";

const LeftChat = () => {
  let { currentChat } = useContext(CurrentChatContext);
  let { convId } = useContext(ConvIdChatContext);
  let ScrollRef = useRef();
  let { auth } = useContext(authContext);
  let [messages, setMessages] = useState([]);
  let msgMap = messages.map((item) => {
    return (
      <Message key={item._id} own={item.sender == auth.user._id} item={item} />
    );
  });
  useEffect(() => {
    if (currentChat !== "") {
      let headers = {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      axios
        .get(`https://mg-company.cyclic.app/mg/chat/message/${convId}`, {
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
  }, [convId]);
  useEffect(() => {
    ScrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div
      className={`${
        currentChat !== "" ? "flex-col" : "hidden lg:flex flex-col"
      } relative sm:h-[450px] md:h-[550px] overflow-y-scroll gap-5    flex flex-col w-full leftSec p-5`}>
      {currentChat ? (
        <>
          {/* top chat */}
          <PersonWhoChatWith />

          {/* conversations */}
          {messages.length == 0 ? (
            <h2 className="absolute text-xl   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              لا يوجد رسائل ...
            </h2>
          ) : (
            msgMap
          )}
          {/* area to send message */}
          <div className="mt-auto" ref={ScrollRef}>
            <SendMsg />
          </div>
        </>
      ) : (
        <span className="absolute top-[10%] text-6xl  text-center text-gray-400">
          اختر محادثة لبدأ الشات ...
        </span>
      )}
    </div>
  );
};

export default LeftChat;
