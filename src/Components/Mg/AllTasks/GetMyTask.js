import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import Loader from "../../InAll/Loader/Loader";

const GetMyTask = ({ makeDone, item, managerTasks }) => {
  let [load, setLoad] = useState(false);
  let [doneClick, setDoneClick] = useState(false);
  function handleDone() {
    setLoad(true);
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(`https://mg-company.cyclic.app/mg/users/doneTask/${item.id}`, {
        headers: headers,
      })
      .then((res) => {
        setLoad(false);

        setDoneClick(true);
        Swal.fire({
          icon: "success",
          title: "OKay...",
          text: "Your Task Completed Succesfully",
        });
      })
      .catch((error) => {
        setLoad(false);
        Swal.fire({
          icon: "error",
          title: "OKay...",
          text: error.response?.data?.message,
        });
      });
  }

  return (
    <>
      <div className="mb-10 shadow p-4  rounded-lg transition-all duration-300 bg-slate-100 border-b-4 border-b-transparent hover:border-sky-500 ">
        <div className="flex justify-between flex-wrap mb-5">
          <h3 className=" text-black text-2xl font-bold ">المدير :</h3>
          <div className=" text-stone-500 text-lg  leading-loose">
            {item.CreatedBy?.name}
          </div>
        </div>
        <div className="flex justify-between flex-wrap mb-5">
          <h3 className=" text-black text-2xl font-bold ">المهمة :</h3>
          <div className=" text-stone-500 text-lg  leading-loose">
            {item.task}
          </div>
        </div>
        <div className="flex justify-between flex-wrap mb-5">
          <h3 className=" text-black text-2xl font-bold ">التاريخ :</h3>
          <p className="text-stone-400 text-lg font-normal">{item.Date}</p>
        </div>
        <div className="flex justify-between flex-wrap mb-5">
          <h3 className=" text-black text-2xl font-bold ">اسم المشروع :</h3>
          <p className="text-stone-400 text-lg font-normal">
            {item.projectName}
          </p>
        </div>
        {/* show button for user to make task done */}
        {makeDone ? (
          <>
            <div className="flex justify-between flex-wrap mb-5">
              <h3 className=" text-black text-2xl font-bold ">اكمل المهمة :</h3>
              <button
                disabled={doneClick ? true : false}
                className={
                  doneClick
                    ? "bg-green-500   px-3 py-1 rounded font-bold  text-white  "
                    : "bg-yellow-400  px-3 py-1 rounded font-bold  text-white   "
                }
                onClick={handleDone}>
                {load ? "يتم ارسال الرد ..." : "انهيت المهمة"}
              </button>
            </div>
          </>
        ) : (
          ""
        )}
        {/* show p for manager to show status of task and the user who reach that task*/}
        {managerTasks ? (
          <>
            <div className="flex justify-between flex-wrap mb-5">
              <h3 className=" text-black text-2xl font-bold ">الي:</h3>
              <p className="text-stone-400 text-lg font-normal">
                {item.user?.name}
              </p>
            </div>
            <div className="flex justify-between flex-wrap mb-5">
              <h3 className=" text-black text-2xl font-bold "> الحالة:</h3>
              <p
                className={
                  item.compelete == false
                    ? "text-red-500 font-bold"
                    : "text-green-500 font-bold"
                }>
                {item.compelete == false ? "غير مكتمل " : "اكتمل"}
              </p>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default GetMyTask;
