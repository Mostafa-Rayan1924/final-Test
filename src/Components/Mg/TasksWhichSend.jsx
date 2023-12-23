import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../InAll/Loader/Loader";
import Filter from "./Filter";
import GetAllReports from "../Mg/GetAllReports";

const TasksWhichSend = ({ title, apiUrl, filterTask }) => {
  // getReportDaily
  //   getReportWeekly
  //   filter=> dailyDay
  //   filter => weeklyDay
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
      .get(`https://nutty-yoke-fish.cyclic.app/mg/reports/${apiUrl}`, {
        headers: headers,
      })
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
  function handleFilter(e) {
    let params = {
      date: e.target.value,
    };
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .post(
        `https://nutty-yoke-fish.cyclic.app/mg/reports/${filterTask}`,
        params,
        {
          headers: headers,
        }
      )
      .then((res) => {
        setAllTasksGet(res.data.data.result);
        //
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
        <Filter
          inpDate={inpDate}
          handleFilter={handleFilter}
          getAllTasks={getAllReports}
          setInpDate={setInpDate}
        />
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 ">
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
