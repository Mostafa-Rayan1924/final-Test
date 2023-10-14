import { useState, useEffect } from "react";
import { MainTitle2 } from "../../Components/InAll/MainTitle2";
import axios from "axios";
import Project from "./Project";
import Loader from "../InAll/Loader/Loader";
const ProjectsParent = () => {
  let [projects, setProjects] = useState([]);
  let [load, setLoad] = useState(true);
  let [active, setActive] = useState("all");
  const controller = new AbortController();
  function getAllPro() {
    axios
      .get("https://mg-company.cyclic.app/mg/project/")
      .then(function (response) {
        // console.log(response.data);
        setLoad(false);
        setProjects(response.data.data.result);
      })
      .catch(function (error) {
        setLoad(false);
      });
  }
  useEffect(() => {
    getAllPro();
    return () => {
      controller.abort();
    };
  }, []);
  let projectsMap = projects.map((item) => {
    return <Project key={item._id} item={item} />;
  });
  if (load) {
    return <Loader />;
  }
  function handleFilter(id) {
    setLoad(true);
    setActive(id);
    axios
      .get(`https://mg-company.cyclic.app/mg/project/getProjectCat/${id}`)
      .then(function (response) {
        console.log(response.data.data.result);
        setLoad(false);
        setProjects(response.data.data.result);
      })
      .catch(function (error) {
        setLoad(false);
      });
  }

  return (
    <div className="py-[100px]">
      <MainTitle2 title={"اجدد المشاريع"} />
      <div className="container flex items-center justify-center gap-10 cursor-pointer  my-20">
        <span
          className={
            active == "all"
              ? "text-[#f5c000]  font-bold"
              : "dark:text-white text-sm"
          }
          onClick={() => {
            setActive("all");
            getAllPro();
          }}>
          الكل
        </span>
        <span
          id="Public-constructions"
          className={
            active == "Public-constructions"
              ? "text-[#f5c000]  font-bold"
              : "dark:text-white text-sm"
          }
          onClick={(e) => {
            handleFilter(e.target.id);
          }}>
          انشاءات عامة
        </span>
        <span
          className={
            active == "Marine-constructions"
              ? "text-[#f5c000]  font-bold"
              : "dark:text-white text-sm"
          }
          onClick={(e) => {
            handleFilter(e.target.id);
          }}
          id="Marine-constructions">
          انشاءات بحرية
        </span>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.length == 0 ? (
          <h2 className="text-center text-2xl dark:text-white">
            ... يتم التحميل الان
          </h2>
        ) : (
          projectsMap
        )}
      </div>
    </div>
  );
};

export default ProjectsParent;
