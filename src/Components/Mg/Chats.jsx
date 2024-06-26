import RightChat from "./RightChat";
import LeftChat from "./LeftChat";
const Chats = () => {
  return (
    <div className="container py-[50px] ">
      <h2 className="text-yellow-500 font-bold text-center mb-10 text-6xl">
        المحادثات
      </h2>
      <div className="  rounded-lg w-full border border-[#ccc] flex">
        <RightChat />
        <LeftChat />
      </div>
    </div>
  );
};

export default Chats;
