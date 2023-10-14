import { useEffect, useState } from "react";
import GetReport from "./GetReport";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../../InAll/Loader/Loader";
import Filter from "../Filter";

const DailyTaskSend = () => {
  let [dailyTaskget, setDailyTaskGet] = useState([]);
  let [inpDate, setInpDate] = useState("");

  let DailyReportsMap = dailyTaskget.map((item) => {
    return <GetReport key={item._id} item={item} />;
  });
  function getAllDailyReports() {
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get("https://nutty-yoke-fish.cyclic.app/mg/reports/getReportDaily", {
        headers: headers,
      })
      .then((res) => {
        setDailyTaskGet(res.data.data.result);
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
    getAllDailyReports();
  }, []);
  function handleFilter(e) {
    let params = {
      date: e.target.value,
    };
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .post("https://nutty-yoke-fish.cyclic.app/mg/reports/dailyDay", params, {
        headers: headers,
      })
      .then((res) => {
        setDailyTaskGet(res.data.data.result);
        //
      })
      .catch((error) => {
        console.log(error.response?.data?.message);
      });
  }
  return (
    <div className="py-[50px]  container">
      <h2 className="text-yellow-400 container font-bold text-3xl md:text-4xl px-5 mb-10">
        الموقف التنفيذي المرسل
      </h2>
      <Filter
        inpDate={inpDate}
        handleFilter={handleFilter}
        getAllTasks={getAllDailyReports}
        setInpDate={setInpDate}
      />
      <div className="md:mx-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
        {dailyTaskget.length == 0 ? (
          <h1 className="text-4xl">لا يوجد مواقف الان</h1>
        ) : (
          DailyReportsMap
        )}
      </div>
    </div>
  );
};

export default DailyTaskSend;
