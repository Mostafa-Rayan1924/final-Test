import { useEffect, useState } from "react";
import GetReport from "./GetReport";
import axios from "axios";
import Swal from "sweetalert2";
import Filter from "../Filter";

const DailyTaskSend = () => {
  let [WeeklyTaskget, setWeeklyTaskGet] = useState([]);
  let [inpDate, setInpDate] = useState("");

  let WeeklyReportsMap = WeeklyTaskget.map((item) => {
    return <GetReport key={item._id} item={item} />;
  });
  function getAllWeeklyReports() {
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get("https://nutty-yoke-fish.cyclic.app/mg/reports/getReportWeekly", {
        headers: headers,
      })
      .then((res) => {
        setWeeklyTaskGet(res.data.data.result);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response?.data?.message,
        });
      });
  }
  useEffect(() => {
    getAllWeeklyReports();
  }, []);
  // filter function
  function handleFilter(e) {
    let params = {
      date: e.target.value,
    };
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .post("https://nutty-yoke-fish.cyclic.app/mg/reports/weeklyDay", params, {
        headers: headers,
      })
      .then((res) => {
        setWeeklyTaskGet(res.data.data.result);
        //
      })
      .catch((error) => {
        console.log(error.response?.data?.message);
      });
  }

  return (
    <div className="py-[50px] container">
      <h2 className="text-yellow-400 container font-bold text-3xl md:text-4xl px-5 mb-10">
        الموقف الاسبوعي المرسل
      </h2>
      <Filter
        inpDate={inpDate}
        handleFilter={handleFilter}
        getAllTasks={getAllWeeklyReports}
        setInpDate={setInpDate}
      />
      <div className=" md:mx-4 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {WeeklyTaskget.length == 0 ? (
          <h1>لا يوجد مواقف الان</h1>
        ) : (
          WeeklyReportsMap
        )}
      </div>
    </div>
  );
};

export default DailyTaskSend;
