import { useEffect, useState } from "react";
import logo from "../../img/assets/logo.svg";
import axios from "axios";
import Filter from "../Mg/Filter";
import { Link } from "react-router-dom";
import Loader from "../InAll/Loader/Loader";
import GetMyReview from "./GetMyReview";
import { AllnamesByRole } from "../dataOfSelectBox";

// import handleFilter from "../Filter";
const AllReview = ({ showFilterByName = true, apiFilterByName }) => {
  let [allReviews, setAllReviews] = useState([]);
  let [inpDate, setInpDate] = useState("");
  let [load, setLoad] = useState(false);
  // maping in names to filter by it
  let [selectNameToFilter, setSelectNameToFilter] = useState("");
  let allReviewsMap = allReviews?.map((item, index) => {
    return <GetMyReview key={index} item={item} />;
  });
  let [namesByRole, setNamesByRole] = useState([]);

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
  let getAllReviews = () => {
    setLoad(true);
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get("https://mg-company.onrender.com/mg/review/getall", {
        headers: headers,
      })
      .then((res) => {
        setLoad(false);
        setAllReviews(res.data.data);
      })
      .catch((error) => {
        setLoad(false);
        console.log(error);
      });
  };
  useEffect(() => {
    getAllReviews();
  }, []);
  // filter function
  function handleFilter(e) {
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(
        `https://mg-company.onrender.com/mg/review/getall?date=${e.target.value}`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        console.log(res.data.data);
        setAllReviews(res.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  function handleFilterByName() {
    setLoad(true);
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(
        `https://mg-company.onrender.com/mg/review/getall?userName=${selectNameToFilter}`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        setLoad(false);
        setAllReviews(res.data.data);
      })
      .catch((error) => {
        setLoad(false);
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
          جميع التقيمات
        </h2>
        <div className="flex items-center gap-4 mb-10 flex-wrap"></div>
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
            setInpDate={setInpDate}
            handleFilter={handleFilter}
            getAllTasks={getAllReviews}
          />
        </div>
        <div className="grid grid-cols-1 mt-10   gap-4">
          {allReviews?.length == 0 ? (
            <h1 className="font-bold text-3xl text-center mt-5">
              لا يوجد تقيمات
            </h1>
          ) : (
            allReviewsMap
          )}
        </div>
      </div>
    </>
  );
};

export default AllReview;
