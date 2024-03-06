import { Link } from "react-router-dom";
import logo from "../../img/assets/logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../InAll/Loader/Loader";
import Workers from "./Workers";
import Eltawredat from "./Eltawredat";
import Equipments from "./Equipments";
const TaskSend = ({ title, apiUrl }) => {
  let [load, setLoad] = useState(false);
  // to get all projects
  let [proName, setProName] = useState("");
  let [projects, setProjects] = useState([]);
  // to get all   workers
  let [workers, setWorkers] = useState([
    {
      iddd: 1,
      type: "",
      number: "",
      workDid: "",
    },
  ]);
  // to get all   tawredat
  let [tawredat, setTawerdat] = useState([
    {
      iddd: 1,
      name: "",
      type: "",
      number: 0,
      carNumber: "",
      supplies: "",
    },
  ]);
  // to get all   tawredat
  let [equipments, setEquipments] = useState([
    {
      iddd: 1,
      name: "",
      type: "",
      amount: "",
      namedDriver: "",
      workDid: "",
    },
  ]);

  // الاعمال التي تم انجازها وتسلمها
  let [okAndDone, setOkAndDone] = useState("");
  // الاعمال التي تم انجازها
  let [ok, setOk] = useState("");
  // المعوقات
  let [Iobstacles, setIObstacles] = useState("");
  let [Eobstacles, setEObstacles] = useState("");
  // reqiurments
  let [reqiurments, setReqiurments] = useState("");
  //  file
  let [file, setFile] = useState("");
  // maping boxes which have select box and + elements
  let workersMap = workers.map((item) => {
    return <Workers item={item} workers={workers} setWorkers={setWorkers} />;
  });
  let tawredatMap = tawredat.map((item) => {
    return (
      <Eltawredat item={item} tawredat={tawredat} setTawerdat={setTawerdat} />
    );
  });
  let equipmentsMap = equipments.map((item) => {
    return (
      <Equipments
        item={item}
        equipments={equipments}
        setEquipments={setEquipments}
      />
    );
  });

  let handleSubmit = (e) => {
    setLoad(true);
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("ProjectName", proName);
    formdata.append("Equipments", JSON.stringify(equipments));
    formdata.append("Supplies", JSON.stringify(tawredat));
    formdata.append("Employee", JSON.stringify(workers));
    formdata.append("WorkCompleted", ok);
    formdata.append("WorkDelivered", okAndDone);
    formdata.append("InternalObstacles", Iobstacles);
    formdata.append("ExternalObstacles", Eobstacles);
    formdata.append("Requirements", reqiurments);
    formdata.append("file", file);

    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .post(`https://mg-company.cyclic.app/mg/reports/${apiUrl}`, formdata, {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data);
        setLoad(false);

        Swal.fire({
          icon: "success",
          title: "OKay...",
          text: "Your Report Send Succesfully",
        });
      })
      .catch((error) => {
        setLoad(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response?.data?.message,
        });
      });
    setProName("");
    // setProjects("");
    setOkAndDone("");
    setOk("");
    setIObstacles("");
    setReqiurments("");
    setFile("");
  };
  // get names of project
  useEffect(() => {
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(`https://nutty-yoke-fish.cyclic.app/mg/project/`, {
        headers: headers,
      })
      .then((res) => {
        setProjects(res.data.data.result);
      })
      .catch((error) => {
        console.log(error.response?.data?.message);
      });
  }, []);

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

          <div className="flex   flex-col md:flex-row gap-3 md:items-center justify-between mb-10  w-full">
            <label className="w-full lg:w-1/2">اسم المشروع</label>
            <select
              value={proName}
              onChange={(e) => {
                setProName(e.target.value);
              }}
              className="w-full lg:w-1/2  h-[38px] pr-1.5 py-2 focus:outline-none bg-white rounded-lg border border-neutral-400"
              type="text"
              placeholder="اسم المشروع">
              <option className="hidden">اختر المشروع</option>
              {projects.map((item) => {
                return (
                  <>
                    <option key={item.projectName}>{item.projectName}</option>
                  </>
                );
              })}
            </select>
          </div>
          {/*  ألعمال */}
          <div className="relative w-full">{workersMap}</div>
          {/* التوريدات */}
          {tawredatMap}
          {/* المعدات */}
          {equipmentsMap}
          {/* الاعمال اللي تم انجازها وتسليمها */}
          <div className="flex-col flex  mb-10  w-full">
            <label className="w-full mb-5">
              الاعمال التي تم انجازها وتسلمها
            </label>
            <input
              value={okAndDone}
              onChange={(e) => {
                setOkAndDone(e.target.value);
              }}
              className=" w-full mx-auto mb-10  h-[150px]  pr-1.5  focus:outline-none bg-white rounded-lg border border-neutral-400"
              type="text"
              placeholder="الاعمال التي تم انجازها وتسلمها"
            />
          </div>
          {/* الاعمال اللي تم انجازها  */}
          <div className="flex-col flex  mb-10  w-full">
            <label className="w-full mb-5">الاعمال التي تم انجازها</label>
            <input
              value={ok}
              onChange={(e) => {
                setOk(e.target.value);
              }}
              className=" w-full mx-auto mb-10  h-[150px]  pr-1.5  focus:outline-none bg-white rounded-lg border border-neutral-400"
              type="text"
              placeholder="الاعمال التي تم انجازها "
            />
          </div>
          {/*   المعوقات الداخلية  */}
          <div className="flex-col flex  mb-10  w-full">
            <label className="w-full mb-5">
              المعوقات الداخلية (داخل الشركة)
            </label>
            <input
              value={Iobstacles}
              onChange={(e) => {
                setIObstacles(e.target.value);
              }}
              className=" w-full mx-auto mb-10  h-[150px]  pr-1.5  focus:outline-none bg-white rounded-lg border border-neutral-400"
              type="text"
              placeholder="المعوقات الداخلية "
            />
          </div>
          {/*   المعوقات الخارجية  */}
          <div className="flex-col flex  mb-10  w-full">
            <label className="w-full mb-5">
              المعوقات الخارجية (خارج الشركة)
            </label>
            <input
              value={Eobstacles}
              onChange={(e) => {
                setEObstacles(e.target.value);
              }}
              className=" w-full mx-auto mb-10  h-[150px]  pr-1.5  focus:outline-none bg-white rounded-lg border border-neutral-400"
              type="text"
              placeholder=" المعوقات الخارجية "
            />
          </div>
          {/*   المتطلبات   */}
          <div className="flex-col flex  mb-10  w-full">
            <label className="w-full mb-5">المتطلبات</label>
            <input
              value={reqiurments}
              onChange={(e) => {
                setReqiurments(e.target.value);
              }}
              className=" w-full mx-auto mb-10  h-[150px]  pr-1.5  focus:outline-none bg-white rounded-lg border border-neutral-400"
              type="text"
              placeholder="المتطلبات"
            />
          </div>
          {/* ارفق ملف */}
          <div className="flex gap-3 md:items-center justify-between mb-10  w-full">
            <label className="hidden md:w-1/2 md:flex">ارفق ملف</label>
            <label
              className="w-full md:w-1/2  flex-col md:flex-row cursor-pointer flex items-center justify-center  h-[49px] px-[101.50px] py-2.5 bg-sky-500 rounded-[11px] text-white"
              htmlFor="fileUpload">
              <input
                onChange={(e) => {
                  setFile(e.target.files[0]);
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
