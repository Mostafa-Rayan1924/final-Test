import { useContext } from "react";
import { CurrentChatContext } from "../../contexts/CurrentClickChat";
import back from "../../img/Mg/Back.png";
import axios from "axios";
const PersonWhoChatWith = ({ handleDeleteAllMsg }) => {
  let handleDeleteAll = () => {
    handleDeleteAllMsg();
  };
  let { currentChat, setCurrentChat } = useContext(CurrentChatContext);
  return (
    <div className="mb-5 border-b pb-4  ">
      <div className="flex items-center justify-between gap-2">
        <h2 className=" sm:text-3xl capitalize   ">{currentChat.name}</h2>
        <div onClick={handleDeleteAll} className="flex items-center gap-2">
          <button className="hover:bg-red-500 hover:text-white rounded-xl cursor-pointer transition-all duration-200  text-red-500 px-3 sm:px-6 py-[6px] border-2 border-red-500">
            حذف الرسائل
          </button>
          <img
            src={back}
            className="backInPhone cursor-pointer  w-10"
            onClick={() => setCurrentChat("")}
          />
        </div>
      </div>
    </div>
  );
};

export default PersonWhoChatWith;
