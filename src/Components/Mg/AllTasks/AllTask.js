import { useEffect, useState } from "react";
import logo from "../../../img/assets/logo.svg";
import axios from "axios";
import GetMyTask from "./GetMyTask";
import Filter from "../Filter";
import { Link } from "react-router-dom";
import Loader from "../../InAll/Loader/Loader";

// import handleFilter from "../Filter";
const AllTask = ({ managerTasks }) => {
  let [allTasks, setAllTasks] = useState([]);
  let [inpDate, setInpDate] = useState("");
  let [load, setLoad] = useState(false);
  let allTaskMap = allTasks.map((item, index) => {
    return <GetMyTask key={index} managerTasks={true} item={item} />;
  });
  function getTasksByStatus(status) {
    setLoad(true);
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(
        `https://mg-company.onrender.com/mg/task/getTaskStatus?status=${status}`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        setLoad(false);

        setAllTasks(res.data?.data.result);
      })
      .catch((error) => {
        setLoad(false);
        console.log(error.response?.data?.message);
      });
  }
  let getAllTasks = () => {
    setLoad(true);
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get("https://mg-company.onrender.com/mg/task/getTask", {
        headers: headers,
      })
      .then((res) => {
        setLoad(false);
        setAllTasks(res.data.data.result);
      })
      .catch((error) => {
        setLoad(false);
        console.log(error);
      });
  };
  useEffect(() => {
    getAllTasks();
  }, []);
  // filter function
  function handleFilter(e) {
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(
        `https://mg-company.cyclic.app/mg/task/getTaskDay?date=${e.target.value}`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        setAllTasks(res.data.data.result);
        //
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  return (
    <>
      {load ? <Loader /> : ""}
      <div className="pt-[30px]    mb-5 container ">
        <Link to={"/"}>
          <img className="lg:block hidden" src={logo} />
        </Link>
        <h2 className="my-10 text-yellow-400 text-3xl lg:text-5xl font-bold ">
          جميع الطلبات
        </h2>

        <div className="flex items-center gap-4 mb-10 flex-wrap">
          <Filter
            inpDate={inpDate}
            setInpDate={setInpDate}
            handleFilter={handleFilter}
            getAllTasks={getAllTasks}
          />
          <div className="flex  items-center justify-center md:justify-start flex-1 gap-2 ">
            <button
              onClick={() => {
                getTasksByStatus("true");
              }}
              className="bg-green-500 transition-all duration-200 hover:bg-green-600 font-bold w-full sm:w-fit  text-white rounded p-2">
              مكتمل
            </button>
            <button
              onClick={() => {
                getTasksByStatus("false");
              }}
              className="bg-red-500 transition-all duration-200 hover:bg-red-600 font-bold w-full sm:w-fit  text-white rounded p-2">
              غير مكتمل
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-10   gap-4">
          {allTasks.length == 0 ? (
            <h1 className="font-bold text-3xl text-center mt-5">
              لا يوجد طلبات
            </h1>
          ) : (
            allTaskMap
          )}
        </div>
      </div>
    </>
  );
};

export default AllTask;
