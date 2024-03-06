import { useEffect, useState } from "react";
import logo from "../../../img/assets/logo.svg";
import axios from "axios";
import GetMyTask from "./GetMyTask";
import { Link } from "react-router-dom";
import Loader from "../../InAll/Loader/Loader";

const TasksToMake = ({ makeDone = true }) => {
  let [load, setLoad] = useState(true);
  let [dataOfMyTask, setDataOfMyTask] = useState([]);
  let dataOfMyTaskMaping = dataOfMyTask.map((item, index) => {
    return <GetMyTask makeDone={makeDone} key={index} item={item} />;
  });

  useEffect(() => {
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get("https://mg-company.cyclic.app/mg/users/myTask", {
        headers: headers,
      })
      .then((res) => {
        setLoad(false);
        setDataOfMyTask(res.data.data.result);
      })
      .catch((error) => {
        setLoad(false);
        console.log(error.response?.data?.message);
      });
  }, []);
  return (
    <>
      {load ? <Loader /> : ""}
      <div className="py-[30px] sm:mr-[60px] sm:max-w-[600px] md:max-w-[800px] mb-5 mx-auto container ">
        <Link to={"/"}>
          <img className="lg:block hidden" src={logo} />
        </Link>
        <h2 className="my-10 text-yellow-400 text-3xl lg:text-5xl font-bold ">
          استقبال الطلبات
        </h2>
        {/* task */}
        <div className="grid grid-cols-1   ">
          {dataOfMyTask.length == 0 ? (
            <h1 className="text-4xl">لا يوجد طلبات الان</h1>
          ) : (
            dataOfMyTaskMaping
          )}
        </div>
      </div>
    </>
  );
};

export default TasksToMake;
