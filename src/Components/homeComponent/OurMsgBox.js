import { Link } from "react-router-dom";
import Btn from "../InAll/Btn";
const OurMsgBox = ({ msg, desc, img, btn = false }) => {
  return (
    <div
      className={`container mb-20 flex flex-col text-center lg:text-start lg:flex-row  gap-10`}>
      <div
        data-aos-duration="1000"
        data-aos="fade-left"
        className="w-full lg:w-1/2">
        <h2 className="font-bold text-[36px] dark:text-white">{msg}</h2>
        <p className="my-4 text-[15px] lg:text-[17px] text-gray-600 leading-relaxed mx-auto max-w-[549px] dark:text-gray-300">
          {desc}
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src={img}
          className="h-[410px] mb-3 p-5 border-2 rounded-lg max-w-full object-cover mx-auto "></img>
        <Link to={"/about"}>{btn ? <Btn title={"قراءه المزيد"} /> : ""}</Link>
      </div>
    </div>
  );
};

export default OurMsgBox;
