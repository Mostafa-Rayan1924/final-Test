import { useEffect, useState } from "react";
import logo from "../../img/assets/logo.svg";
import axios from "axios";
import Filter from "../Mg/Filter";
import { Link } from "react-router-dom";
import Loader from "../InAll/Loader/Loader";
import GetMyReview from "./GetMyReview";
// import handleFilter from "../Filter";
const AllReview = ({}) => {
  let [allReviews, setAllReviews] = useState([]);
  let [inpDate, setInpDate] = useState("");
  let [load, setLoad] = useState(false);
  let allReviewsMap = allReviews?.map((item, index) => {
    return <GetMyReview key={index} item={item} />;
  });

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
  // function handleFilter(e) {
  //   let headers = {
  //     authorization: `Bearer ${localStorage.getItem("token")}`,
  //   };
  //   axios
  //     .get(
  //       `https://mg-company.onrender.com/mg/task/getTaskDay?date=${e.target.value}`,
  //       {
  //         headers: headers,
  //       }
  //     )
  //     .then((res) => {
  //       setAllReviews(res.data.data.result);
  //       //
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  // }

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
        {/* بحث بالتاريخ
        <div className="flex items-center gap-4 mb-10 flex-wrap">
          <Filter
            inpDate={inpDate}
            setInpDate={setInpDate}
            handleFilter={handleFilter}
            getAllTasks={getAllTasks}
          />
        </div> */}
        <div className="grid grid-cols-1 mt-10   gap-4">
          {allReviews.length == 0 ? (
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
