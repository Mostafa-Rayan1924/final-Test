import { Link } from "react-router-dom";
import logo from "../../../img/assets/logo.svg";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
const DailyTask = () => {
  let [dailyInputs, setDailyInputs] = useState({
    projectName: "",
    WorkersAndNum: "",
    equipmentsAndNum: "",
    eltawredat: "",
    fileImg: "",
  });
  let handleSubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("ProjectName", dailyInputs.projectName);
    formdata.append("Employee", dailyInputs.WorkersAndNum);
    formdata.append("Equipments", dailyInputs.equipmentsAndNum);
    formdata.append("Supplies", dailyInputs.eltawredat);
    formdata.append("file", dailyInputs.fileImg);
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .post(
        "https://nutty-yoke-fish.cyclic.app/mg/reports/createReportDaily",
        formdata,
        {
          headers: headers,
        }
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "OKay...",
          text: "Your Report Send Succesfully",
        });
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response?.data?.message,
        });
      });
  };
  return (
    <div className="container md:mx-5 lg:mx-0 my-5">
      <Link to={"/"}>
        <img className="hidden md:block" src={logo} />
      </Link>
      <h2 className="text-yellow-500  text-xl md:text-3xl lg:text-5xl font-bold my-5">
        الموقف التنفيذي اليومي
      </h2>
      <form
        onSubmit={handleSubmit}
        className="my-10 flex flex-col justify-center items-center w-[80%]">
        <div className="flex  flex-col md:flex-row gap-3 md:items-center justify-between mb-10 pr-5 w-full">
          <label>اسم المشروع</label>
          <input
            value={dailyInputs.projectName}
            onChange={(e) => {
              setDailyInputs({ ...dailyInputs, projectName: e.target.value });
            }}
            className="max-w-[360px]  md:pl-[250px] h-[38px] pr-1.5 py-2 focus:outline-none bg-white rounded-lg border border-neutral-400"
            type="text"
            placeholder="اسم المشروع"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between mb-10 pr-5 w-full">
          <label>العمال وعددهم</label>
          <input
            value={dailyInputs.WorkersAndNum}
            onChange={(e) => {
              setDailyInputs({ ...dailyInputs, WorkersAndNum: e.target.value });
            }}
            className="w-[291px] md:w-[360px] h-[113px]  pr-1.5  focus:outline-none bg-white rounded-lg border border-neutral-400"
            type=""
            placeholder="العمال وعددهم"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between mb-10 pr-5 w-full">
          <label> نوع المعدات وعددها</label>
          <input
            value={dailyInputs.equipmentsAndNum}
            onChange={(e) => {
              setDailyInputs({
                ...dailyInputs,
                equipmentsAndNum: e.target.value,
              });
            }}
            className="w-[291px] md:w-[360px] h-[113px]  pr-1.5  focus:outline-none bg-white rounded-lg border border-neutral-400"
            type="text"
            placeholder="نوع المعدات وعددها"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between mb-10 pr-5 w-full">
          <label> التوريدات</label>
          <input
            value={dailyInputs.eltawredat}
            onChange={(e) => {
              setDailyInputs({
                ...dailyInputs,
                eltawredat: e.target.value,
              });
            }}
            className="w-[291px] md:w-[360px] h-[113px]  pr-1.5  focus:outline-none bg-white rounded-lg border border-neutral-400"
            type="text"
            placeholder="التوريدات"
          />
        </div>
        <div className="flex gap-3 md:items-center justify-between mb-10 pr-5 w-full">
          <label className="hidden md:flex">ارفق ملف</label>
          <label
            className="w-[295px] flex-col md:flex-row cursor-pointer flex items-center justify-center  h-[49px] px-[101.50px] py-2.5 bg-sky-500 rounded-[11px] text-white"
            htmlFor="fileUpload">
            <input
              onChange={(e) => {
                setDailyInputs({
                  ...dailyInputs,
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
        <button className="text-center w-[280px] cursor-pointer mx-auto block h-[49px] px-[101.50px] py-2.5 bg-yellow-500 rounded-[11px] text-white text-2xl font-bold font-['Tajawal']">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DailyTask;
