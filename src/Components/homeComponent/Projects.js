import { Link } from "react-router-dom";
import shambl from "../../img/swiperImg/شامبليون.jpg";
import img2 from "../../img/swiperImg/التوسعه.jpg";
import img3 from "../../img/swiperImg/diafa3.jpg";
import img4 from "../../img/swiperImg/التينه.jpg";
import img5 from "../../img/swiperImg/العبور.jpg";
import img6 from "../../img/swiperImg/ضيافه1.jpg";

import Btn from "../InAll/Btn";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import MainTitle from "../InAll/MainTitle";
// end swiper
const lastProjects = () => {
  return (
    <div className="py-[100px]">
      <MainTitle title={"المشاريع الاخيرة"} />
      <Swiper
        breakpoints={{
          // when window width is >= 600px
          320: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 150,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div className="relative group  w-[454px] h-[454px]  rounded-lg  overflow-hidden ">
            <img className="w-full h-full " src={shambl} />
            <div className="absolute w-full h-full bg-black/40 z-50 transition-all duration-300 top-0 left-0 opacity-0 group-hover:opacity-[1]">
              <div className="absolute bottom-10 right-6">
                <h2 className="text-white font-bold mb-3 text-right">
                  ميدان شامبليون
                </h2>
                <Link to="/projects">
                  <Btn title={"مشاريعنا"} />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group  w-[454px] h-[454px]  rounded-lg  overflow-hidden ">
            <img className="w-full h-full " src={img2} />
            <div className="absolute w-full h-full bg-black/40 z-50 transition-all duration-300 top-0 left-0 opacity-0 group-hover:opacity-[1]">
              <div className="absolute bottom-10 right-6">
                <h2 className="text-white font-bold mb-3 text-right">
                  التوسعه الجنوبيه لقناه السويس
                </h2>
                <Link to="/projects">
                  <Btn title={"مشاريعنا"} />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group  w-[454px] h-[454px]  rounded-lg  overflow-hidden ">
            <img className="w-full h-full " src={img3} />
            <div className="absolute w-full h-full bg-black/40 z-50 transition-all duration-300 top-0 left-0 opacity-0 group-hover:opacity-[1]">
              <div className="absolute bottom-10 right-6">
                <h2 className="text-white font-bold mb-3 text-right">
                  فيلا ضيافه 3
                </h2>
                <Link to="/projects">
                  <Btn title={"مشاريعنا"} />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group  w-[454px] h-[454px]  rounded-lg  overflow-hidden ">
            <img className="w-full h-full " src={img4} />
            <div className="absolute w-full h-full bg-black/40 z-50 transition-all duration-300 top-0 left-0 opacity-0 group-hover:opacity-[1]">
              <div className="absolute bottom-10 right-6">
                <h2 className="text-white font-bold mb-3 text-right">التينه</h2>
                <Link to="/projects">
                  <Btn title={"مشاريعنا"} />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group  w-[454px] h-[454px]  rounded-lg  overflow-hidden ">
            <img className="w-full h-full " src={img5} />
            <div className="absolute w-full h-full bg-black/40 z-50 transition-all duration-300 top-0 left-0 opacity-0 group-hover:opacity-[1]">
              <div className="absolute bottom-10 right-6">
                <h2 className="text-white font-bold mb-3 text-right">
                  استراحة العبور
                </h2>
                <Link to="/projects">
                  <Btn title={"مشاريعنا"} />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group  w-[454px] h-[454px]  rounded-lg  overflow-hidden ">
            <img className="w-full h-full " src={img6} />
            <div className="absolute w-full h-full bg-black/40 z-50 transition-all duration-300 top-0 left-0 opacity-0 group-hover:opacity-[1]">
              <div className="absolute bottom-10 right-6">
                <h2 className="text-white font-bold mb-3 text-right">
                  فيلا ضيافه 1
                </h2>
                <Link to="/projects">
                  <Btn title={"مشاريعنا"} />
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default lastProjects;
