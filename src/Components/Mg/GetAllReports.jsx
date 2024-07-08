const GetAllReports = ({ item }) => {
  // Filter out empty arrays
  const filteredEmployees = item.Employee.filter(
    (ele) => ele && Object.keys(ele).length != ""
  );
  const filteredEquipments = item.Equipments.filter(
    (ele) => ele && Object.keys(ele).length > 0
  );
  const filteredSupplies = item.Supplies.filter(
    (ele) => ele && Object.keys(ele).length > 0
  );
  let handlePrint = () => {
    const printContents = document.getElementById("report-content")?.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();
    document.body.innerHTML = originalContents;
    window.location.reload();
  };
  return (
    <div
      id="report-content"
      className="shadow  odd:bg-slate-50 even:bg-blue-50 transition-all duration-300 border-[4px] border-transparent mb-10 hover:border-b-sky-400 p-6 rounded-lg">
      <div className="flex md:items-center flex-col md:flex-row gap-4 md:gap-2 flex-wrap justify-between border-b-2 mb-5 pb-4">
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
            <div className="flex flex-col sm:flex-row mb-5 justify-between gap-4 sm:items-center flex-wrap">
              <p className="text-[#666666B2] flex justify-between font-bold text-lg mb-2">
                <span className="text-black">نوع العمال :</span> {ele.type}
              </p>
              <p className="text-[#666666B2] font-bold flex justify-between text-lg mb-2">
                <span className="text-black"> عدد العمال :</span> {ele.number}
              </p>
              <p className="text-[#666666B2] font-bold flex justify-between text-lg mb-2">
                <span className="text-black"> سعر اليومية :</span>
                {ele.price}
              </p>
              <p className="text-[#666666B2] font-bold flex justify-between text-lg mb-2">
                <span className="text-black"> اجمالي سعر اليوميات :</span>
                {ele.number !== null && ele.price !== null
                  ? Number(ele.number * ele.price)
                  : 0}
              </p>
            </div>
            <div className="w-full">
              <h2 className="md:text-xl mb-2">الاعمال التي قاموا بها</h2>
              <p className="text-[#666666B2] break-words font-bold text-[18px]">
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
            <div className="flex flex-col sm:flex-row mb-5 justify-between gap-4 sm:items-center flex-wrap">
              <p className="text-[#666666B2] flex justify-between font-bold mb-2 text-lg">
                <span className="text-black">نوع المعده :</span> {ele.type}
              </p>

              <p className="text-[#666666B2] flex justify-between font-bold mb-2 text-lg">
                <span className="text-black"> اجمالي سعر المعده :</span>
                {ele.price}
              </p>
              <p className="text-[#666666B2] flex justify-between font-bold mb-2 text-lg">
                <span className="text-black">كمية الغاز :</span> {ele.amount}
              </p>
              <p className="text-[#666666B2] flex justify-between font-bold mb-2 text-lg">
                <span className="text-black"> اسم السائق :</span>
                {ele.namedDriver}
              </p>
            </div>

            <div className="w-full">
              <h2 className="md:text-xl mb-2 break-words">
                الاعمال التي قاموا بها
              </h2>
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
            <div className="flex flex-col sm:flex-row mb-5 justify-between gap-4 sm:items-center flex-wrap">
              {/* <p className="text-[#666666B2] font-bold mb-2 text-lg">
                <span className="text-black"> اسم المورد :</span> {ele.name}
              </p> */}
              <p className="text-[#666666B2] flex justify-between font-bold mb-2 text-lg">
                <span className="text-black">نوع التوريد :</span> {ele.type}
              </p>
              <p className="text-[#666666B2] flex justify-between font-bold mb-2 text-lg">
                <span className="text-black">العدد :</span> {ele.number}
              </p>
              <p className="text-[#666666B2] flex justify-between font-bold mb-2 text-lg">
                <span className="text-black">رقم السيارة :</span>{" "}
                {ele.carNumber}
              </p>
            </div>

            <div className="w-full">
              <h2 className="md:text-xl mb-2 break-words">
                الاعمال التي قاموا بها
              </h2>
              <p className="text-[#666666B2] text-[18px]">{ele.supplies}</p>
            </div>
          </div>
        ))}
      </div>
      {item.suppliesFile && (
        <div className="flex flex-wrap items-center my-5 gap-2 justify-between  border-b pb-4 ">
          <h2 className="text-md md:text-xl">تنزيل ملفات التوريدات</h2>
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
        <p className="text-[#666666B2] font-bold break-words">
          {item.WorkDelivered !== "" ? item.WorkDelivered : "لا يوجد"}
        </p>
      </div>
      {/* End Work Delivered */}

      {/* Work Completed */}
      <div className="flex flex-wrap justify-between gap-4 border-b pb-2 items-center mb-5">
        <h2 className="md:text-xl">الاعمال التي تم انجازها </h2>

        <p className="text-[#666666B2] font-bold break-words">
          {item.WorkCompleted !== "" ? item.WorkCompleted : "لا يوجد"}
        </p>
      </div>
      {/* End Work Completed */}

      {/* Internal Obstacles */}
      <div className="flex flex-wrap justify-between gap-4 border-b pb-2 items-center mb-5">
        <h2 className="md:text-xl">المعوقات الداخلية </h2>
        <p className="text-[#666666B2] font-bold break-words">
          {item.InternalObstacles !== "" ? item.InternalObstacles : "لا يوجد"}
        </p>
      </div>
      {/* End Internal Obstacles */}

      {/* External Obstacles */}
      <div className="flex flex-wrap justify-between gap-4 border-b pb-2 items-center mb-5">
        <h2 className="md:text-xl">المعوقات الخارجية </h2>
        <p className="text-[#666666B2] font-bold break-words">
          {item.ExternalObstacles !== "" ? item.ExternalObstacles : "لا يوجد"}
        </p>
      </div>
      {/* End External Obstacles */}

      {/* Requirements */}
      <div className="flex flex-wrap justify-between gap-4 border-b pb-2 items-center mb-5">
        <h2 className="md:text-xl">المتطلبات</h2>
        <p className="text-[#666666B2] font-bold break-words">
          {item.Requirements !== "" ? item.Requirements : "لا يوجد"}
        </p>
      </div>
      {/* End Requirements */}

      {item.files && (
        <div className="flex flex-wrap gap-2 items-center justify-between">
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
      <button
        className="w-[200px] hover:bg-black hover:text-white transition-all duration-300 mx-auto rounded-lg text-white bg-yellow-400 mt-5 block py-2 text-2xl "
        onClick={handlePrint}>
        اطبع
      </button>
    </div>
  );
};
export default GetAllReports;
