import { useContext, useState } from "react";
import sendBtn from "../../img/Mg/Vector.png";
import axios from "axios";
import { ConvIdChatContext } from "../../contexts/ConversationId";
const SendMsg = () => {
  let [send, setSend] = useState("");
  let { convId } = useContext(ConvIdChatContext);
  let handleSendMsg = (e) => {
    e.preventDefault();
    // body params for SEND msg
    let params = {
      text: send,
    };
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    if (send !== "") {
      axios
        .post(
          `https://mg-company.cyclic.app/mg/chat/message/${convId}`,
          params,
          {
            headers: headers,
          }
        )
        .then((res) => {
          console.log(res);
          setSend("");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  return (
    <form
      onSubmit={handleSendMsg}
      className="flex justify-between border-t-2 pt-4 mt-auto   items-center gap-3">
      <button>
        <img className="cursor-pointer" src={sendBtn} alt="" />
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
  );
};

export default SendMsg;
