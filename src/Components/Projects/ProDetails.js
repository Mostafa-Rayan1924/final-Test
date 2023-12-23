import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Arrow from "../InAll/Arrow";
import Navbar from "../InAll/Navbar";
import Footer from "../InAll/Footer";
import Mode from "../InAll/Mode";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
const ProDetails = () => {
  let [pro, setPro] = useState({});
  let { proid } = useParams();
  let nav = useNavigate();
  let getProById = () => {
    axios
      .get(`https://mg-company.cyclic.app/mg/project/${proid}`)
      .then(function (response) {
        setPro(response.data.data.result);
        console.log(response.data.data.result);
      })
      .catch(function (error) {
        nav("/projects/asf/nice");
      });
  };
  const controller = new AbortController();
  useEffect(() => {
    getProById();
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div>
      <Navbar />
      <Mode />
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-4  py-[100px]">
        <div className="mt-[50px]">
          <h2 className="font-bold text-xl dark:text-white lg:text-3xl">
            اسم المشروع : {pro.projectName}
          </h2>
          <h3 className="my-5 text-xl dark:text-white lg:text-2xl">
            الفئة : {pro.section}
          </h3>
          <p className="text-[#f5c000] text-xl lg:text-2xl font-bold">
            مدير المشروع : {pro.engineer?.name}
          </p>
          <h3 className="text-gray-500 my-5 text-xl lg:text-3xl">
            الموقع : {pro.location}
          </h3>
        </div>
        <div>
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper swipe">
            {pro.images?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="relative group  w-[454px] h-[454px]  rounded-lg  ">
                    <img className="rounded-lg" src={`${item && item}`} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <h2 className="text-center dark:text-white   mt-[-30px] font-bold">
            المشاريع قبل و بعد التنفيذ
          </h2>
        </div>
      </div>
      <Arrow />

      <Footer />
    </div>
  );
};

export default ProDetails;
