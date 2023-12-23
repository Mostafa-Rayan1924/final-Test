import React from "react";

const GetAllReports = ({ item }) => {
  return (
    <div className="shadow bg-slate-50 transition-all duration-300 border-[4px] border-transparent  hover:border-b-sky-400 p-6 rounded-lg">
      <div className="flex flex-wrap justify-between gap-4 items-center mb-5">
        <h2>الشخص المسؤول </h2>
        <p className="text-[#666666B2]">{item.CreatedBy?.name}</p>
      </div>
      <div className="flex flex-wrap justify-between gap-4 items-center mb-5">
        <h2>التاريخ</h2>
        <p className="text-[#666666B2]">{item.Date}</p>
      </div>
      <div className="flex flex-wrap justify-between gap-4 items-center mb-5">
        <h2>اسم المشروع</h2>
        <p className="text-[#666666B2]">{item.ProjectName}</p>
      </div>
      <div className="flex flex-wrap justify-between gap-4 items-center mb-5">
        <h2> نوع العمال وعددهم</h2>
        <p className="text-[#666666B2]">{item.Employee}</p>
      </div>
      <div className="flex flex-wrap justify-between gap-4 items-center mb-5">
        <h2>المعدات</h2>
        <p className="text-[#666666B2] leading-loose">{item.Equipments}</p>
      </div>
      <div className="flex flex-wrap justify-between gap-4 items-center mb-5">
        <h2>التوريدات</h2>
        <p className="text-[#666666B2] leading-loose">{item.Supplies}</p>
      </div>
      {item.file ? (
        <>
          <div className="flex flex-wrap items-center justify-between ">
            <h2>تنزيل الملف</h2>
            <a
              className="bg-sky-500 px-6 py-2 text-white rounded-lg"
              download="file"
              href={item.file}>
              تنزيل الملف
            </a>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default GetAllReports;
