import { authContext } from "../../../contexts/Auth";
import Select from "react-select";
import { Link } from "react-router-dom";
import logo from "../../../img/assets/logo.svg";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../../InAll/Loader/Loader";
const MohasebTaskToSend = ({ title }) => {
  let [load, setLoad] = useState(false);
  let [projects, setProjects] = useState([]);
  let [ProjectDescription, setProjectDescription] = useState("");
  let [file, setFile] = useState([]);
  let [proName, setProName] = useState("");
  let { auth, setAuth } = useContext(authContext);
  const uniqueOptions = [...new Set(projects)].map((option) => ({
    value: option.name,
    label: option.name,
  }));
  // Custom styles
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "0.5rem",
      border: "1px solid #ccc",
      backgroundColor: "white",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#888",
      },
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "0.5rem",
      zIndex: 20,
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#ddd"
        : state.isFocused
        ? "#eee"
        : "white",
      color: "black",
      "&:hover": {
        backgroundColor: "#f0f0f0",
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#888",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "black",
    }),
  };
  const getProjects = () => {
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    //
    axios
      .get(
        `
        ${
          JSON.parse(localStorage.getItem("user"))?.role == "محاسب" ||
          JSON.parse(localStorage.getItem("user"))?.role == "مكتب فني"
            ? "https://mg-company.onrender.com/mg/listProject/"
            : `https://mg-company.onrender.com/mg/listProject/?location=${
                JSON.parse(localStorage.getItem("user")).location
              }`
        }`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setProjects(res.data.data.result);
      })
      .catch((error) => {
        console.log(error.response?.data?.message);
      });
  };

  useEffect(() => {
    getProjects();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoad(true);
    let formdata = new FormData();
    formdata.append("ProjectName", proName.value);
    formdata.append("ProjectDescription", ProjectDescription);
    if (file !== null) {
      for (let i = 0; i < file.length; i++) {
        formdata.append(`files`, file[i]);
      }
    }

    // let headers = {
    //   authorization: `Bearer ${localStorage.getItem("token")}`,
    // };
    // axios
    //   .post(`https://mg-company.onrender.com/mg/reports/${apiUrl}`, formdata, {
    //     headers: headers,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     setLoad(false);
    //     Swal.fire({
    //       icon: "success",
    //       title: "OKay...",
    //       text: "تم ارسال التقرير بنجاح",
    //     });
    //     resetFields();
    //   })
    //   .catch((error) => {
    //     setLoad(false);
    //     Swal.fire({
    //       icon: "error",
    //       title: "Oops...",
    //       text: error.response?.data?.message,
    //     });
    //   });
  };
  return (
    <div className=" overflow-hidden">
      {load && <Loader />}
      <div className="container   lg:mx-2 mt-5 mb-10">
        <Link to={"/"}>
          <img className="hidden lg:block" src={logo} />
        </Link>
        <h2 className="text-yellow-500 text-2xl md:text-4xl lg:text-5xl font-bold my-5">
          الموقف اليومي للمحاسبين
        </h2>
        <form className="mt-10 flex flex-col justify-center items-center w-[95%]  md:w-[80%]">
          {/* اسم المشروع */}
          <div className="flex   flex-col md:flex-row gap-3 md:items-center justify-between mb-10  w-full">
            <label className="w-full lg:w-1/2">اسم المشروع</label>
            <Select
              options={uniqueOptions}
              placeholder="اسم المشروع"
              isSearchable
              value={proName}
              styles={customStyles}
              className="w-full lg:w-1/2  h-[38px] pr-1.5 "
              onChange={setProName}
            />
          </div>
          <div className="flex   flex-col md:flex-row gap-3 md:items-center justify-between mb-10  w-full">
            <label className="w-full lg:w-1/2"> اضف عنوان تفصيلي</label>
            <input
              className="w-full lg:w-1/2  h-[38px] pr-1.5 py-2 focus:outline-none bg-white rounded-lg border border-neutral-400"
              value={ProjectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              placeholder="اضف عنوان تفصيلي"
              type="text"
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
                  setFile(e.target.files);
                }}
                type="file"
                className="hidden"
                id="fileUpload"
                multiple
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
        </form>
        <button
          onClick={handleSubmit}
          className="bg-yellow-500  py-3 px-28 rounded-xl mx-auto block text-white font-bold text-2xl w-fit ">
          إرسال
        </button>
      </div>
    </div>
  );
};

export default MohasebTaskToSend;
