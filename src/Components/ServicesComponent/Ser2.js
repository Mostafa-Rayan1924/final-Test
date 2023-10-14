import { Link } from "react-router-dom";
import Btn from "../InAll/Btn";
const Ser2 = ({ title, desc, img }) => {
  return (
    <div className="py-[150px] dark:bg-[#444]  ">
      <div className="container flex items-center justify-between flex-col-reverse lg:flex-row gap-20">
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="w-[500px] h-auto lg:h-[500px] max-w-full object-contain"
          src={img}
        />

        <div
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="w-full lg:w-1/2">
          <h2
            className="text-[48px] lg:text-[80px] dark:text-white
           font-bold">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-loose my-4 text-base md:text-[21px]">
            {desc}
          </p>
          <Link to="/contact">
            <Btn title={"تواصل بنا"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ser2;
