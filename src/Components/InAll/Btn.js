import { Link } from "react-router-dom";

const Btn = ({ title }) => {
  return (
    <button className="w-[183.04px] h-[40.51px] transition-all duration-300 bg-yellow-400 rounded-[10px] font-bold text-white hover:bg-yellow-500">
      {title}
    </button>
  );
};

export default Btn;
