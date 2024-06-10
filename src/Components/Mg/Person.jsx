import { useContext, useEffect, useState } from "react";
import { CurrentChatContext } from "../../contexts/CurrentClickChat";
import axios from "axios";
import { ConvIdChatContext } from "../../contexts/ConversationId";
import Loader from "../InAll/Loader/Loader";

const Person = ({ item }) => {
  let random = Math.floor(Math.random() * 400);
  let [load, setLoad] = useState(false);

  let { currentChat, setCurrentChat } = useContext(CurrentChatContext);

  let { convId, setConvId } = useContext(ConvIdChatContext);
  let handleConv = () => {
    setCurrentChat(item);
    setLoad(true);
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(`https://mg-company.onrender.com/mg/chat/conv/${item._id}`, {
        headers: headers,
      })
      .then(function (response) {
        // حط دي بقي عشان تجيب منها ال members اللي في اخر use useEffect
        setConvId(response.data.data);
        setLoad(false);
      })
      .catch(function (error) {
        setLoad(false);
        // handle error
        console.log(error);
      });
  };
  return (
    <>
      {load && <Loader />}
      <div
        onClick={handleConv}
        className={`flex items-center  ${
          currentChat?._id == item._id ? "bg-slate-200 rounded-lg" : ""
        }  gap-4 mb-3 p-2   cursor-pointer transition-all duration-300 hover:bg-slate-200 hover:rounded-lg`}>
        <img
          className="w-[60px] h-[60px] object-cover rounded-full"
          src={`https://picsum.photos/${random}/300`}
          alt=""
        />
        <h2 className="text-main sm:text-lg">{item.name}</h2>
      </div>
    </>
  );
};

export default Person;
