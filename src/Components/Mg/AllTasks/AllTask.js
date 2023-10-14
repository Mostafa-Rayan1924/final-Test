import { useEffect, useState } from "react";
import logo from "../../../img/assets/logo.svg";
import axios from "axios";
import GetMyTask from "./GetMyTask";
import Filter from "../Filter";
import { Link } from "react-router-dom";
// import handleFilter from "../Filter";
const AllTask = ({ managerTasks }) => {
  let [allTasks, setAllTasks] = useState([]);
  let [inpDate, setInpDate] = useState("");

  let allTaskMap = allTasks.map((item, index) => {
    return <GetMyTask key={index} managerTasks={true} item={item} />;
  });
  let getAllTasks = () => {
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get("https://nutty-yoke-fish.cyclic.app/mg/task/getTask", {
        headers: headers,
      })
      .then((res) => {
        setAllTasks(res.data.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getAllTasks();
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
      .post("https://nutty-yoke-fish.cyclic.app/mg/task/getTaskDay", params, {
        headers: headers,
      })
      .then((res) => {
        setAllTasks(res.data.data.result);
        //
      })
      .catch((error) => {
        console.log(error.response?.data?.message);
      });
  }

  return (
    <div className="pt-[30px]  md:mx-6  mb-5 container ">
      <Link to={"/"}>
        <img className="md:block hidden" src={logo} />
      </Link>
      <h2 className="my-10 text-yellow-400 text-3xl lg:text-5xl font-bold ">
        جميع الطلبات
      </h2>

      <Filter
        inpDate={inpDate}
        handleFilter={handleFilter}
        getAllTasks={getAllTasks}
        setInpDate={setInpDate}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">{allTaskMap}</div>
    </div>
  );
};

export default AllTask;
