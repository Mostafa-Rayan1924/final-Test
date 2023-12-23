import { Link } from "react-router-dom";
import logo from "../../img/assets/logo.svg";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../InAll/Loader/Loader";
const TaskSend = ({ title, apiUrl }) => {
  let [load, setLoad] = useState(false);
  let [WeeklyInputs, setWeeklyInputs] = useState({
    projectName: "",
    WorkersAndNum: "",
    equipmentsAndNum: "",
    eltawredat: "",
    fileImg: "",
  });
  let handleSubmit = (e) => {
    setLoad(true);
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("ProjectName", WeeklyInputs.projectName);
    formdata.append("Employee", WeeklyInputs.WorkersAndNum);
    formdata.append("Equipments", WeeklyInputs.equipmentsAndNum);
    formdata.append("Supplies", WeeklyInputs.eltawredat);
    formdata.append("file", WeeklyInputs.fileImg);
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .post(
        `https://nutty-yoke-fish.cyclic.app/mg/reports/${apiUrl}`,
        formdata,
        {
          headers: headers,
        }
      )
      .then((res) => {
        setLoad(false);

        Swal.fire({
          icon: "success",
          title: "OKay...",
          text: "Your Report Send Succesfully",
        });
        console.log(res.data);
      })
      .catch((error) => {
        setLoad(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response?.data?.message,
        });
      });
  };
  return (
    <>
      {load && <Loader />}
      <div className="container   lg:mx-2 my-5">
        <Link to={"/"}>
          <img className="hidden lg:block" src={logo} />
        </Link>
        <h2 className="text-yellow-500 text-2xl md:text-4xl lg:text-5xl font-bold my-5">
          {title}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="my-10 flex flex-col justify-center items-center w-[95%]  md:w-[80%]">
          {/* اسم المشروع */}
          <div className="flex  flex-col md:flex-row gap-3 md:items-center justify-between mb-10 pr-5 w-full">
            <label className="w-full lg:w-1/2">اسم المشروع</label>
            <input
              value={WeeklyInputs.projectName}
              onChange={(e) => {
                setWeeklyInputs({
                  ...WeeklyInputs,
                  projectName: e.target.value,
                });
              }}
              className="w-full lg:w-1/2  h-[38px] pr-1.5 py-2 focus:outline-none bg-white rounded-lg border border-neutral-400"
              type="text"
              placeholder="اسم المشروع"
            />
          </div>
          {/* العمال وعددهم */}
          <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between mb-10 pr-5 w-full">
            <label className="w-full lg:w-1/2">العمال وعددهم</label>
            <input
              value={WeeklyInputs.WorkersAndNum}
              onChange={(e) => {
                setWeeklyInputs({
                  ...WeeklyInputs,
                  WorkersAndNum: e.target.value,
                });
              }}
              className=" w-full lg:w-1/2  h-[113px]  pr-1.5  focus:outline-none bg-white rounded-lg border border-neutral-400"
              type=""
              placeholder="العمال وعددهم"
            />
          </div>
          {/* المعدات */}
          <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between mb-10 pr-5 w-full">
            <label className="w-full lg:w-1/2"> نوع المعدات وعددها</label>
            <input
              value={WeeklyInputs.equipmentsAndNum}
              onChange={(e) => {
                setWeeklyInputs({
                  ...WeeklyInputs,
                  equipmentsAndNum: e.target.value,
                });
              }}
              className=" w-full lg:w-1/2  h-[113px]  pr-1.5  focus:outline-none bg-white rounded-lg border border-neutral-400"
              type="text"
              placeholder="نوع المعدات وعددها"
            />
          </div>
          {/* التوريدات */}
          <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between mb-10 pr-5 w-full">
            <label className="w-full lg:w-1/2"> التوريدات</label>
            <input
              value={WeeklyInputs.eltawredat}
              onChange={(e) => {
                setWeeklyInputs({
                  ...WeeklyInputs,
                  eltawredat: e.target.value,
                });
              }}
              className="w-full lg:w-1/2  h-[113px]  pr-1.5  focus:outline-none bg-white rounded-lg border border-neutral-400"
              type="text"
              placeholder="التوريدات"
            />
          </div>
          {/* ارفق ملف */}
          <div className="flex gap-3 md:items-center justify-between mb-10 pr-5 w-full">
            <label className="hidden md:w-1/2 md:flex">ارفق ملف</label>
            <label
              className="w-full md:w-1/2  flex-col md:flex-row cursor-pointer flex items-center justify-center  h-[49px] px-[101.50px] py-2.5 bg-sky-500 rounded-[11px] text-white"
              htmlFor="fileUpload">
              <input
                onChange={(e) => {
                  setWeeklyInputs({
                    ...WeeklyInputs,
                    fileImg: e.target.files[0],
                  });
                }}
                type="file"
                className="hidden"
                id="fileUpload"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none">
                <path
                  d="M9.1875 15.75V5.05312L5.775 8.46562L3.9375 6.5625L10.5 0L17.0625 6.5625L15.225 8.46562L11.8125 5.05312V15.75H9.1875ZM2.625 21C1.90313 21 1.28494 20.7427 0.77044 20.2282C0.25594 19.7137 -0.000872772 19.096 2.22835e-06 18.375V14.4375H2.625V18.375H18.375V14.4375H21V18.375C21 19.0969 20.7428 19.7151 20.2283 20.2296C19.7138 20.7441 19.096 21.0009 18.375 21H2.625Z"
                  fill="white"
                />
              </svg>
            </label>
          </div>
          <div className="">
            <button className="bg-yellow-500  py-3 px-28 rounded-xl text-white font-bold text-2xl w-fit ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TaskSend;
