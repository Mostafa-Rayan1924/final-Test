import heroImg from "../../img/homeImg/house.png";
import okay from "../../img/homeImg/Component 8.svg";

import Btn from "../InAll/Btn";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="lg:h-[80vh]">
      <div className="container h-full flex lg:flex-row flex-col items-center text-center lg:text-start justify-center lg:justify-between  gap-20 lg:gap-5">
        <div
          data-aos-duration="1000"
          data-aos="fade-left"
          className="w-full lg:w-1/2">
          <h1 className="text-[30px] md:text-[50px] lg:text-[60px] font-[700] dark:text-white">
            مرحبا بكم
            <br />
            في شركة <span className="text-yellow-400">MG</span>
          </h1>
          <p className="my-5 text-gray-500 dark:text-white text-[18px] leading-relaxed">
            شركتنا هي خيارك الأمثل لتحقيق المشاريع البنائية بأعلى مستويات الدقة
            والتميز. نحن نجمع بين الخبرة الواسعة والفريق المؤهل والتكنولوجيا
            المتقدمة لتقديم حلول مبتكرة ومتكاملة في مجالات البناء والتشييد.
          </p>
          <Link to="/about">
            <Btn title="قراءه المزيد" />
          </Link>
        </div>
        <div className=" relative">
          <div className="absolute border border-[#666]  w-[200px] md:w-[245px] h-[86px] rounded-[18px]  dark:bg-[#444] dark:text-white bg-white sm:top-0 md:-top-12 lg:-top-20">
            <div className="flex items-center relative">
              <div className="p-3">
                <h2 className="font-bold text-sm md:text-base ">
                  المشاريع المنتهية
                </h2>
                <p className="text-gray-400 text-lg my-2"> مشروع 100+</p>
              </div>
              <img
                className="w-[52px] absolute -left-6 top-1/2 -translate-y-[50%] "
                src={okay}
              />
            </div>
          </div>
          <img
            className="max-w-full w-[609px] h-[348px] object-contain"
            src={heroImg}
          />
          <div className="absolute border border-[#666] w-[200px] md:w-[245px] h-[86px] rounded-[18px] dark:bg-[#444] dark:text-white bg-white left-0 bottom-0 ">
            <div className="flex items-center relative">
              <div className="p-3">
                <h2 className="font-bold text-sm md:text-base ">الخبرة</h2>
                <p className="text-gray-400 text-lg my-2">عشر سنوات +</p>
              </div>
              <img
                className="w-[52px] absolute -left-6 top-1/2 -translate-y-[50%] "
                src={okay}
              />
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Hero;
