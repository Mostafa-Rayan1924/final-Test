import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

const GetMyReview = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="mb-10 shadow p-4  rounded-lg transition-all duration-300 bg-slate-100 border-b-4 border-b-transparent hover:border-sky-500 ">
        <div className="flex justify-between flex-wrap mb-5">
          <h3 className=" text-black text-2xl font-bold ">صاحب التقييم :</h3>
          <div className=" text-stone-500 text-lg  leading-loose">
            {item.manager?.name}
          </div>
        </div>
        <div className="flex justify-between flex-wrap mb-5">
          <h3 className=" text-black text-2xl font-bold ">الي :</h3>
          <div className=" text-stone-500 text-lg  leading-loose">
            {item.user.name}
          </div>
        </div>
        <div className="flex justify-between flex-wrap mb-5">
          <h3 className=" text-black text-2xl font-bold "> التاريخ :</h3>
          <div className=" text-stone-500 text-lg  leading-loose">
            {item.createdAt.slice(0, 10)}
          </div>
        </div>
        <div className="flex justify-between flex-wrap mb-5">
          <h3 className=" text-black text-2xl font-bold ">التقييم :</h3>
          <p className="text-stone-500 text-lg font-bold">{item.title}</p>
        </div>
        <div className="flex justify-between flex-wrap mb-5">
          <h3 className=" text-black text-2xl font-bold "> التقيم من (5) :</h3>
          <p className="text-gold-500 text-lg flex items-center font-bold">
            {[...Array(item.rating)].map((item) => {
              return <FaStar size={30} color="gold" />;
            })}
          </p>
        </div>
      </div>
    </>
  );
};

export default GetMyReview;
