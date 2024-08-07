import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../InAll/Loader/Loader";
import Filter from "./Filter";
import GetAllReports from "../Mg/GetAllReports";
import { AllnamesByRole } from "../dataOfSelectBox";
import { useLocation } from "react-router-dom";
const TasksWhichSend = ({
  title,
  apiUrl,
  filterTask,
  apiFilterByName,
  cat,
  showFilterByName = true,
}) => {
  // maping in names to filter by it
  let [selectNameToFilter, setSelectNameToFilter] = useState("");
  let [namesByRole, setNamesByRole] = useState([]);
  let location = useLocation();

  const fetchUsers = () => {
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get("https://mg-company.onrender.com/mg/users/getUser", {
        headers: headers,
      })
      .then((res) => {
        setNamesByRole(res.data.Data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  // get users by role

  let [allTasksGet, setAllTasksGet] = useState([]);
  let [inpDate, setInpDate] = useState("");
  let [load, setLoad] = useState(false);
  let DailyReportsMap = allTasksGet.map((item) => {
    return <GetAllReports key={item._id} item={item} />;
  });
  function getAllReports() {
    setLoad(true);
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(
        `https://mg-company.onrender.com/mg/reports/${apiUrl}?category=${cat}`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        setLoad(false);
        setAllTasksGet(res.data.data.result);
      })
      .catch((error) => {
        setLoad(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response?.data?.message,
        });
      });
  }
  useEffect(() => {
    getAllReports();
  }, []);

  function handleFilterByName() {
    setLoad(true);
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(
        `https://mg-company.onrender.com/mg/reports/${apiFilterByName}?userName=${selectNameToFilter}`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        setLoad(false);
        setAllTasksGet(res.data.data.result);
      })
      .catch((error) => {
        setLoad(false);
        console.log(error.response);
      });
  }
  // filter by date
  function handleFilter(e) {
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(
        `https://mg-company.onrender.com/mg/reports/${filterTask}?date=${e.target.value}`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        let arr = [];
        if (location.pathname.includes("WeeklyTaskSend")) {
          res.data.data.result.filter((item) => {
            return item.CreatedBy.role == "مكتب فني" ? arr.push(item) : arr;
          });
        } else {
          res.data.data.result.filter((item) => {
            return item.CreatedBy.role !== "مكتب فني" ? arr.push(item) : arr;
          });
        }
        setAllTasksGet(arr);
      })
      .catch((error) => {
        console.log(error.response?.data?.message);
      });
  }
  return (
    <>
      {load ? <Loader /> : ""}
      <div className="py-[50px]  container">
        <h2 className="text-yellow-400 container font-bold text-2xl md:text-4xl px-5 mb-10">
          {title}
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          {showFilterByName ? (
            <>
              <h3 className="font-bold">ابحث بالاسم</h3>
              <select
                value={selectNameToFilter}
                onChange={(e) => {
                  setSelectNameToFilter(e.target.value);
                }}
                className="border-2 border-[#ffd53e] w-full sm:w-fit px-10 py-1 rounded-xl focus:outline-none">
                {namesByRole.map((item) => {
                  return (
                    <>
                      <option key={item} className="hidden">
                        اختر الاسم
                      </option>
                      <option>{item.name}</option>
                    </>
                  );
                })}
              </select>
              <button
                className="bg-yellow-400 font-bold w-full sm:w-fit  text-white rounded p-2"
                onClick={handleFilterByName}>
                ابحث
              </button>
            </>
          ) : (
            ""
          )}
          <Filter
            inpDate={inpDate}
            handleFilter={handleFilter}
            getAllTasks={getAllReports}
            setInpDate={setInpDate}
          />
        </div>

        <div className=" grid grid-cols-1 mt-10  gap-4 ">
          {allTasksGet.length == 0 ? (
            <h1 className="text-4xl text-center">لا يوجد مواقف الان</h1>
          ) : (
            DailyReportsMap
          )}
        </div>
      </div>
    </>
  );
};

export default TasksWhichSend;
