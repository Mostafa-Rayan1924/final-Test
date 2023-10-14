import { Link } from "react-router-dom";
import Btn from "../InAll/Btn";
const Ser1 = ({ title, desc, img }) => {
  return (
    <div className="py-[60px]">
      <div className="container grid  grid-cols-1 lg:grid-cols-2 place-items-center gap-10">
        <div data-aos-duration="1500" data-aos="zoom-in">
          <h2 className="text-[48px] lg:text-[80px] font-bold dark:text-white">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-loose my-4 text-base md:text-[21px]">
            {desc}
          </p>
          <Link to="/contact">
            <Btn title={"تواصل بنا"} />
          </Link>
        </div>
        <img
          data-aos="zoom-in"
          data-aos-duration="1500"
          className="w-[500px] h-auto max-w-full object-cover"
          src={img}
        />
      </div>
    </div>
  );
};

export default Ser1;
