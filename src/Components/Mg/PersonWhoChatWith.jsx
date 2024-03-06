import { useContext } from "react";
import { CurrentChatContext } from "../../contexts/CurrentClickChat";
import back from "../../img/Mg/Back.png";
const PersonWhoChatWith = () => {
  let { currentChat, setCurrentChat } = useContext(CurrentChatContext);
  return (
    <div className="mb-5 border-b pb-4  ">
      <div className="flex items-center justify-between">
        <h2 className="text-xl sm:text-3xl capitalize   ">
          {currentChat.name}
        </h2>
        <img
          src={back}
          className="backInPhone cursor-pointer  w-10"
          onClick={() => setCurrentChat("")}
        />
      </div>
    </div>
  );
};

export default PersonWhoChatWith;
