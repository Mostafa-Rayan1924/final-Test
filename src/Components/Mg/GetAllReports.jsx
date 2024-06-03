import React from "react";
const GetAllReports = ({ item }) => {
  // Filter out empty arrays
  const filteredEmployees = item.Employee.filter(
    (ele) => ele && Object.keys(ele).length > 0
  );
  const filteredEquipments = item.Equipments.filter(
    (ele) => ele && Object.keys(ele).length > 0
  );
  const filteredSupplies = item.Supplies.filter(
    (ele) => ele && Object.keys(ele).length > 0
  );
  console.log(item);
  return (
    <div className="shadow  bg-slate-50 transition-all duration-300 border-[4px] border-transparent mb-10 hover:border-b-sky-400 p-6 rounded-lg">
      <div className="flex md:items-center flex-col md:flex-row gap-2 flex-wrap justify-between border-b-2 mb-5 pb-4">
        <div className="flex flex-wrap justify-between gap-4 items-center">
          <h2 className="md:md:text-xl">الشخص المسؤول </h2>
          <p className="text-[#666666B2] font-bold">{item.CreatedBy?.name}</p>
        </div>
        <div className="flex flex-wrap justify-between gap-4 items-center">
          <h2 className="md:text-xl">التاريخ</h2>
          <p className="text-[#666666B2] font-bold">{item.Date}</p>
        </div>
        <div className="flex flex-wrap justify-between gap-4 items-center">
          <h2 className="md:text-xl">اسم المشروع</h2>
          <p className="text-[#666666B2] font-bold">{item?.ProjectName}</p>
        </div>
      </div>

      {/* Employees */}
      <div className="mb-5">
        {filteredEmployees.map((ele) => (
          <div key={ele.id} className="mb-5 border-b pb-2">
            <h2 className="text-xl md:text-[40px] text-center mb-[20px]">
              العمال
            </h2>
            <div className="flex mb-5 justify-between gap-4 items-center flex-wrap">
              <p className="text-[#666666B2] font-bold text-lg mb-2">
                <span className="text-black">نوع العمال :</span> {ele.type}
              </p>
              <p className="text-[#666666B2] font-bold text-lg mb-2">
                <span className="text-black"> عدد العمال :</span> {ele.number}
              </p>
            </div>
            <div className="w-full">
              <h2 className="md:text-xl mb-2">الاعمال التي قاموا بها</h2>
              <p className="text-[#666666B2] font-bold text-[18px]">
                {ele.workDid}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* End Employees */}

      {/* Equipments */}
      <div className="mb-5">
        {filteredEquipments.map((ele) => (
          <div key={ele.id} className="mb-5 border-b pb-2">
            <h2 className="text-xl md:text-[40px] text-center mb-[20px]">
              المعدات
            </h2>
            <div className="flex mb-5 justify-between gap-4 items-center flex-wrap">
              <p className="text-[#666666B2] font-bold mb-2 text-lg">
                <span className="text-black">نوع المعده :</span> {ele.type}
              </p>
              <p className="text-[#666666B2] font-bold mb-2 text-lg">
                <span className="text-black">العدد :</span> {ele.amount}
              </p>
              <p className="text-[#666666B2] font-bold mb-2 text-lg">
                <span className="text-black"> اسم السائق :</span>{" "}
                {ele.namedDriver}
              </p>
            </div>

            <div className="w-full">
              <h2 className="md:text-xl mb-2">الاعمال التي قاموا بها</h2>
              <p className="text-[#666666B2] font-bold text-[18px]">
                {ele.workDid}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* End Equipments */}

      {/* Supplies */}
      <div className="mb-5">
        {filteredSupplies.map((ele) => (
          <div key={ele.id} className="mb-5 border-b pb-2">
            <h2 className="text-xl md:text-[40px] text-center mb-[20px]">
              التوريدات
            </h2>
            <div className="flex mb-5 justify-between gap-4 items-center flex-wrap">
              <p className="text-[#666666B2] font-bold mb-2 text-lg">
                <span className="text-black"> اسم المورد :</span> {ele.name}
              </p>
              <p className="text-[#666666B2] font-bold mb-2 text-lg">
                <span className="text-black">نوع التوريد :</span> {ele.type}
              </p>
              <p className="text-[#666666B2] font-bold mb-2 text-lg">
                <span className="text-black">العدد :</span> {ele.number}
              </p>
              <p className="text-[#666666B2] font-bold mb-2 text-lg">
                <span className="text-black">رقم السيارة :</span>{" "}
                {ele.carNumber}
              </p>
            </div>

            <div className="w-full">
              <h2 className="md:text-xl mb-2">الاعمال التي قاموا بها</h2>
              <p className="text-[#666666B2] text-[18px]">{ele.supplies}</p>
            </div>
          </div>
        ))}
      </div>
      {item.suppliesFile && (
        <div className="flex flex-wrap items-center my-5 justify-between  border-b pb-4 ">
          <h2 className="md:text-xl">تنزيل ملفات التوريدات</h2>
          <a
            target="_blank"
            className="bg-sky-500 px-6 py-2 text-white rounded-lg"
            download={"file"}
            href={item.suppliesFile}>
            تنزيل الملفات
          </a>
        </div>
      )}
      {/* End Supplies */}

      {/* Work Delivered */}
      <div className="flex flex-wrap justify-between gap-4 border-b pb-2 items-center mb-5">
        <h2 className="md:text-xl">الاعمال التي تم انجازها وتسلمها</h2>
        <p className="text-[#666666B2] font-bold">
          {item.WorkDelivered !== "" ? item.WorkDelivered : "لا يوجد"}
        </p>
      </div>
      {/* End Work Delivered */}

      {/* Work Completed */}
      <div className="flex flex-wrap justify-between gap-4 border-b pb-2 items-center mb-5">
        <h2 className="md:text-xl">الاعمال التي تم انجازها </h2>

        <p className="text-[#666666B2] font-bold">
          {item.WorkCompleted !== "" ? item.WorkCompleted : "لا يوجد"}
        </p>
      </div>
      {/* End Work Completed */}

      {/* Internal Obstacles */}
      <div className="flex flex-wrap justify-between gap-4 border-b pb-2 items-center mb-5">
        <h2 className="md:text-xl">المعوقات الداخلية </h2>
        <p className="text-[#666666B2] font-bold">
          {item.InternalObstacles !== "" ? item.InternalObstacles : "لا يوجد"}
        </p>
      </div>
      {/* End Internal Obstacles */}

      {/* External Obstacles */}
      <div className="flex flex-wrap justify-between gap-4 border-b pb-2 items-center mb-5">
        <h2 className="md:text-xl">المعوقات الخارجية </h2>
        <p className="text-[#666666B2] font-bold">
          {item.ExternalObstacles !== "" ? item.ExternalObstacles : "لا يوجد"}
        </p>
      </div>
      {/* End External Obstacles */}

      {/* Requirements */}
      <div className="flex flex-wrap justify-between gap-4 border-b pb-2 items-center mb-5">
        <h2 className="md:text-xl">المتطلبات</h2>
        <p className="text-[#666666B2] font-bold">
          {item.Requirements !== "" ? item.Requirements : "لا يوجد"}
        </p>
      </div>
      {/* End Requirements */}

      {item.files && (
        <div className="flex flex-wrap items-center justify-between">
          <h2 className="md:text-xl">تنزيل الملفات</h2>
          <a
            target="_blank"
            className="bg-sky-500 px-6 py-2 text-white rounded-lg"
            download={"file"}
            href={item.files}>
            تنزيل الملفات
          </a>
        </div>
      )}
    </div>
  );
};

export default GetAllReports;
