import { useContext } from "react";
import { CurrentChatContext } from "../../contexts/CurrentClickChat";
import axios from "axios";
import { ConvIdChatContext } from "../../contexts/ConversationId";

const Person = ({ item }) => {
  let random = Math.floor(Math.random() * 400);
  let { currentChat, setCurrentChat } = useContext(CurrentChatContext);
  let { convId, setConvId } = useContext(ConvIdChatContext);
  let handleConv = () => {
    setCurrentChat(item);
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(`https://mg-company.cyclic.app/mg/chat/conv/${item._id}`, {
        headers: headers,
      })
      .then(function (response) {
        setConvId(response.data.data._id);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  return (
    <div
      onClick={handleConv}
      className="flex items-center  gap-4 mb-3 p-2   cursor-pointer transition-all duration-300 hover:bg-slate-100">
      <img
        className="w-[60px] h-[60px] object-cover rounded-full"
        src={`https://picsum.photos/${random}/300`}
        alt=""
      />
      <h2 className="text-main sm:text-lg">{item.name}</h2>
    </div>
  );
};

export default Person;
