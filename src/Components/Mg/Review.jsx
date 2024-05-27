import { useEffect, useState } from "react";
import logo from "../../img/assets/logo.svg";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../InAll/Loader/Loader";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
const Review = () => {
  let [load, setLoad] = useState(false);
  let [idOfPerson, setIdOfPerson] = useState(null);
  let [reviewInfo, setReviewInfo] = useState({
    title: "",
    reviewToWho: [],
    reviewToWhoName: "",
    rating: null,
  });
  let [hover, setHover] = useState(null);
  useEffect(() => {
    reviewInfo?.reviewToWho?.filter((item) => {
      if (item.name == reviewInfo.reviewToWhoName) {
        setIdOfPerson(item._id);
      }
    });
  }, [reviewInfo?.reviewToWho, reviewInfo?.reviewToWhoName]);
  // get data to fill on selcet box of nameds
  function handleData(e) {
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(
        `https://mg-company.onrender.com/mg/task/findRole?userRole=${e.target.value}`,
        {
          headers: headers,
        }
      )
      .then((res) => {
        setReviewInfo({ ...reviewInfo, reviewToWho: res.data.Data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setLoad(true);
    let params = {
      // هتتغير بناءا علي مسلم
      title: reviewInfo.title,
      rating: reviewInfo.rating,
    };
    let headers = {
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .post(
        `https://mg-company.onrender.com/mg/review/createone/${idOfPerson}`,
        params,
        {
          headers: headers,
        }
      )
      .then((res) => {
        console.log(res.data);
        setLoad(false);
        Swal.fire({
          icon: "success",
          title: "OKay...",
          text: "Your Review Send Succesfully",
        });
        setReviewInfo({
          ...reviewInfo,
          title: "",
          rating: 0,
          reviewToWho: [],
          reviewToWhoName: "",
        });
      })
      .catch((error) => {
        setLoad(false);
        Swal.fire({
          icon: "error",
          title: "OKay...",
          text: error.response?.data?.message,
        });
      });
  }
  return (
    <>
      {load && <Loader />}
      <div className="pt-[30px] md:mx-5    max-w-[880px]  mb-5 container lg:ml-40 ">
        <Link to={"/"}>
          <img className="md:block hidden" src={logo} />
        </Link>
        <h2 className="my-10 text-yellow-400 text-3xl lg:text-5xl font-bold ">
          ارسال التقيمات
        </h2>
        <div className="flex justify-between md:flex-row gap-4 flex-wrap mb-5">
          <h3 className=" text-black text-2xl font-bold ">الفئة:</h3>
          <select
            value={reviewInfo.taskToWho}
            onChange={(e) => {
              setReviewInfo({ ...reviewInfo, taskToWho: e.target.value });
            }}
            onInput={handleData}
            className="text-stone-400 text-lg font-normal  w-[200px] h-[38px] focus:outline-none  pr-1.5  bg-white rounded-lg border border-neutral-400">
            <option className="hidden cursor-not-allowed">اختار الفئة</option>
            <option>مهندس مدني</option>
            <option>مشرف</option>
            <option>محاسب</option>
            <option>مكتب فني</option>
          </select>
        </div>
        {reviewInfo.reviewToWho ? (
          <>
            <div className="flex justify-between md:flex-row gap-4 flex-wrap mb-5">
              <h3 className=" text-black text-2xl font-bold ">الاسم:</h3>
              <select
                value={reviewInfo.reviewToWhoName}
                onChange={(e) => {
                  setReviewInfo({
                    ...reviewInfo,
                    reviewToWhoName: e.target.value,
                  });
                }}
                className="text-stone-400 text-lg font-normal md:mx-0  w-[200px] h-[38px] focus:outline-none  pr-1.5 bg-white rounded-lg border border-neutral-400">
                <option className="hidden cursor-not-allowed">
                  اختار الاسم
                </option>
                {reviewInfo.reviewToWho.map((item, index) => {
                  return <option key={item.name}>{item.name}</option>;
                })}
              </select>
            </div>
          </>
        ) : (
          ""
        )}
        {/* task */}
        <form onSubmit={handleSubmit}>
          <div className="flex  flex-col gap-4">
            <h3 className=" text-black text-2xl font-bold ">التقييم :</h3>
            <textarea
              placeholder="اكتب تقيمك"
              value={reviewInfo.title}
              onChange={(e) => {
                setReviewInfo({ ...reviewInfo, title: e.target.value });
              }}
              className="w-full  h-[121px] resize-none focus:outline-none pr-1.5 py-2 bg-white rounded-lg border border-neutral-400"></textarea>
          </div>
          <div className="flex justify-between md:flex-row gap-4 flex-wrap my-5">
            <h3 className=" text-black text-2xl font-bold ">تقيمك :</h3>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((star, index) => {
                let rate = index + 1;

                return (
                  <>
                    <label>
                      <input
                        onChange={(e) => {
                          setReviewInfo({
                            ...reviewInfo,
                            rating: rate,
                          });
                        }}
                        value={rate}
                        type="radio"
                        name="rating"
                        className="hidden"
                      />
                      <FaStar
                        color={
                          rate <= (hover || reviewInfo.rating)
                            ? "#ffc107"
                            : "#e4e5e9"
                        }
                        onMouseEnter={() => setHover(rate)}
                        onMouseLeave={() => setHover(null)}
                        className="cursor-pointer"
                        size={50}
                      />
                    </label>
                  </>
                );
              })}
            </div>
          </div>
          {/* التقييم بالنجوم */}
          <button className="bg-yellow-400 my-10 mx-auto block  text-white text-center rounded-lg font-bold text-2xl w-[280px] h-[49px]">
            ارسال
          </button>
        </form>
      </div>
    </>
  );
};

export default Review;
