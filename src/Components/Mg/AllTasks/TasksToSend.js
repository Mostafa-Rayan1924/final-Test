import { useEffect, useState } from "react";
import logo from "../../../img/assets/logo.svg";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../../InAll/Loader/Loader";
import { Link } from "react-router-dom";
const TasksToSend = ({ makeDone = false }) => {
  let [load, setLoad] = useState(false);
  let [taskInfo, setTaskInfo] = useState({
    taskData: "",
    taskProjectName: "",
    taskToWho: "",
    taskToWhoName: "",
  });
  let [dataName, setDataName] = useState([]);

  // get data to fill on selcet box of nameds
  function handleData(e) {
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(
        `https://mg-company.onrender.com/mg/task/findRole?userRole=${e.target.value}`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        setDataName(res.data.Data);
        console.log(res.data.Data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setLoad(true);
    let params = {
      projectName: taskInfo.taskProjectName,
      task: taskInfo.taskData,
      userName: taskInfo.taskToWhoName,
    };
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .post("https://mg-company.onrender.com/mg/task/createTask", params, {
        headers: headers,
      })
      .then((res) => {
        setLoad(false);
        Swal.fire({
          icon: "success",
          title: "OKay...",
          text: "Your Task Send Succesfully",
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
      {load && <Loader />}
      <div className="pt-[30px] md:mx-5    max-w-[880px]  mb-5 container lg:ml-40 ">
        <Link to={"/"}>
          <img className="md:block hidden" src={logo} />
        </Link>
        <h2 className="my-10 text-yellow-400 text-3xl lg:text-5xl font-bold ">
          ارسال الطلبات
        </h2>
        {/* filter */}

        {/* task */}
        <form onSubmit={handleSubmit}>
          <div className="flex  flex-col gap-4">
            <h3 className=" text-black text-2xl font-bold ">المهمة :</h3>
            <textarea
              placeholder="اكتب مهمتك"
              value={taskInfo.taskData}
              onChange={(e) => {
                setTaskInfo({ ...taskInfo, taskData: e.target.value });
              }}
              className="w-full  h-[121px] resize-none focus:outline-none pr-1.5 py-2 bg-white rounded-lg border border-neutral-400"></textarea>
          </div>
          <div className="flex justify-between md:flex-row gap-4 flex-wrap my-10">
            <h3 className=" text-black text-2xl font-bold ">اسم المشروع :</h3>
            <input
              value={taskInfo.taskProjectName}
              onChange={(e) => {
                setTaskInfo({ ...taskInfo, taskProjectName: e.target.value });
              }}
              className="text-stone-400 text-lg font-normal w-full  h-[40px] focus:outline-none  pr-1.5 py-2 bg-white rounded-lg border border-neutral-400"
              placeholder="اسم المشروع"
            />
          </div>
          <div className="flex justify-between md:flex-row gap-4 flex-wrap mb-5">
            <h3 className=" text-black text-2xl font-bold ">الفئة:</h3>
            <select
              value={taskInfo.taskToWho}
              onChange={(e) => {
                setTaskInfo({ ...taskInfo, taskToWho: e.target.value });
              }}
              onInput={handleData}
              className="text-stone-400 text-lg font-normal  w-[200px] h-[38px] focus:outline-none  pr-1.5  bg-white rounded-lg border border-neutral-400">
              <option className="hidden cursor-not-allowed">اختار الفئة</option>
              <option>مهندس مدني</option>
              <option>مشرف</option>
              <option>محاسب</option>
              <option>مكتب فني</option>
            </select>
          </div>
          {taskInfo.taskToWho ? (
            <>
              <div className="flex justify-between md:flex-row gap-4 flex-wrap mb-5">
                <h3 className=" text-black text-2xl font-bold ">الاسم:</h3>
                <select
                  value={taskInfo.taskToWhoName}
                  onChange={(e) => {
                    setTaskInfo({ ...taskInfo, taskToWhoName: e.target.value });
                  }}
                  className="text-stone-400 text-lg font-normal md:mx-0  w-[200px] h-[38px] focus:outline-none  pr-1.5 bg-white rounded-lg border border-neutral-400">
                  <option className="hidden cursor-not-allowed">
                    اختار الاسم
                  </option>
                  {dataName.map((item, index) => {
                    return <option key={item.name}>{item.name}</option>;
                  })}
                </select>
              </div>
            </>
          ) : (
            ""
          )}
          <button className="bg-yellow-400 my-10 mx-auto block  text-white text-center rounded-lg font-bold text-2xl w-[280px] h-[49px]">
            ارسال
          </button>
        </form>
      </div>
    </>
  );
};
{
}
export default TasksToSend;
