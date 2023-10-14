import { useState } from "react";

const AccordionBox = ({ head, body }) => {
  let [acc, setAcc] = useState(false);
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-duration="1000"
      onClick={() => setAcc((prev) => !prev)}
      className="bg-[#F5C000] rounded-[15px] p-4 px-6 cursor-pointer">
      <div className="flex justify-between items-center gap-5 text-black  ">
        <h3 className="text-[17px] md:text-[25px] font-[700]">{head}</h3>
        <span className="text-[48px] -mt-1 cursor-pointer font-bold">
          {acc ? "-" : "+"}
        </span>
      </div>
      <div
        className={`mt-5 text-black  md:text-[19px] ${
          acc ? "block" : "hidden"
        }`}>
        {body}
      </div>
    </div>
  );
};

export default AccordionBox;
