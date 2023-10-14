import { Link } from "react-router-dom";
import Btn from "../InAll/Btn";
const Project = ({ item }) => {
  return (
    <div className="shadow rounded-xl overflow-hidden dark:shadow-md dark:shadow-[#444] transition-all duration-300 hover:-translate-y-2.5">
      <img
        src={`${item.imageCover}`}
        className="max-w-full h-[255px] w-[340px]"
      />
      <div className="p-3">
        <h2 className="my-4 dark:text-white">{item.projectName}</h2>
        <h3 className="dark:text-white">
          المدير المسؤول : {item.engineer.name}
        </h3>
        <p className="my-4 text-gray-500">الفئة :{item.section}</p>
        <Link className="pb-4 block" to={`/projects/${item._id}`}>
          <Btn title={"تفاصيل المشروع"} />
        </Link>
      </div>
    </div>
  );
};

export default Project;
