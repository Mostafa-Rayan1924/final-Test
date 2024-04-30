const GetAllReports = ({ item }) => {
  return (
    <div className="shadow bg-slate-50 transition-all duration-300 border-[4px] border-transparent mb-10  hover:border-b-sky-400 p-6 rounded-lg">
      <div className="flex md:items-center flex-col md:flex-row gap-2 flex-wrap justify-between border-b-2 mb-5 pb-4 ">
        <div className="flex flex-wrap justify-between gap-4 items-center   ">
          <h2 className="md:md:text-xl">الشخص المسؤول </h2>
          <p className="text-[#666666B2]">{item.CreatedBy?.name}</p>
        </div>
        <div className="flex flex-wrap justify-between gap-4   items-center ">
          <h2 className="md:text-xl">التاريخ</h2>
          <p className="text-[#666666B2]">{item.Date}</p>
        </div>
        <div className="flex flex-wrap justify-between gap-4   items-center ">
          <h2 className="md:text-xl">اسم المشروع</h2>
          <p className="text-[#666666B2]">{item?.ProjectName}</p>
        </div>
      </div>
      {/*  ألعمال */}
      <div className="mb-5 ">
        {item.Employee.map((ele) => {
          return (
            <div key={ele.id} className="mb-5 border-b   pb-2">
              <h2 className="text-xl md:text-[40px] text-center mb-[20px]">
                {" "}
                العمال{" "}
              </h2>

              <div className="flex mb-5 justify-between gap-4  items-center flex-wrap">
                <p className="text-[#666666B2] text-lg mb-2">
                  <span className="text-black">نوع العمال :</span> {ele.type}
                </p>
                <p className="text-[#666666B2] text-lg mb-2">
                  <span className="text-black"> عدد العمال :</span> {ele.number}
                </p>
              </div>
              <div className="w-full ">
                <h2 className="md:text-xl mb-2">الاعمال التي قاموا بها</h2>
                <p className="text-[#666666B2] text-[18px]">{ele.workDid}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* نهاية العمال */}
      {/* المعدات */}
      <div className="mb-5">
        {item.Equipments.map((ele) => {
          return (
            <div key={ele.id} className="mb-5 border-b   pb-2">
              <h2 className="text-xl md:text-[40px] text-center mb-[20px]">
                المعدات{" "}
              </h2>

              <div className="flex mb-5 justify-between gap-4 items-center flex-wrap">
                <p className="text-[#666666B2] mb-2 text-lg ">
                  <span className="text-black">اسم المعده : </span> {ele.name}
                </p>
                <p className="text-[#666666B2]  mb-2  text-lg">
                  <span className="text-black">نوع المعده :</span> {ele.type}
                </p>
                <p className="text-[#666666B2]  mb-2  text-lg">
                  <span className="text-black">العدد :</span> {ele.amount}
                </p>
                <p className="text-[#666666B2]  mb-2  text-lg">
                  <span className="text-black"> اسم السائق :</span>{" "}
                  {ele.namedDriver}
                </p>
              </div>
              <div className="w-full ">
                <h2 className="md:text-xl mb-2">الاعمال التي قاموا بها</h2>
                <p className="text-[#666666B2] text-[18px]">{ele.workDid}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* نهاية المعدات */}
      {/* التوريدات */}
      <div className="mb-5">
        {item.Supplies.map((ele) => {
          return (
            <div key={ele.id} className="mb-5 border-b   pb-2">
              <h2 className="text-xl md:text-[40px] text-center mb-[20px]">
                التوريدات{" "}
              </h2>

              <div className="flex mb-5 justify-between gap-4 items-center flex-wrap">
                <p className="text-[#666666B2]  mb-2  text-lg">
                  <span className="text-black"> اسم المورد :</span> {ele.name}
                </p>
                <p className="text-[#666666B2]  mb-2  text-lg">
                  <span className="text-black">نوع التوريد :</span> {ele.type}
                </p>
                <p className="text-[#666666B2]  mb-2  text-lg">
                  <span className="text-black">العدد :</span> {ele.number}
                </p>
                <p className="text-[#666666B2]  mb-2  text-lg">
                  <span className="text-black">رقم السيارة :</span>{" "}
                  {ele.carNumber}
                </p>
              </div>
              <div className="w-full ">
                <h2 className="md:text-xl mb-2">الاعمال التي قاموا بها</h2>
                <p className="text-[#666666B2] text-[18px]">{ele.supplies}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* نهاية التوريدات */}
      {/* الاعمال التي تم انجازها وتسلمها */}
      <div className="flex flex-wrap justify-between gap-4 border-b pb-2 items-center mb-5">
        <h2 className="md:text-xl">الاعمال التي تم انجازها وتسلمها</h2>
        <p className="text-[#666666B2]">{item.WorkDelivered}</p>
      </div>
      {/* نهاية الاعمال التي تم انجازها وتسلمها   */}
      {/* الاعمال التي تم انجازها  */}
      <div className="flex flex-wrap justify-between gap-4 border-b pb-2 items-center mb-5">
        <h2 className="md:text-xl">الاعمال التي تم انجازها </h2>
        <p className="text-[#666666B2]">{item.WorkCompleted}</p>
      </div>
      {/* نهاية الاعمال التي تم انجازها    */}
      {/* المعوقات */}
      <div className="flex flex-wrap justify-between gap-4 border-b pb-2 items-center mb-5">
        <h2 className="md:text-xl">المعوقات الداخلية </h2>
        <p className="text-[#666666B2]">{item.InternalObstacles}</p>
      </div>
      {/* المعوقات   */}
      {/* المعوقات */}
      <div className="flex flex-wrap justify-between gap-4 border-b pb-2 items-center mb-5">
        <h2 className="md:text-xl">المعوقات الخارجية </h2>
        <p className="text-[#666666B2]">{item.ExternalObstacles}</p>
      </div>
      {/* المعوقات   */}
      {/* المتطلبات */}
      <div className="flex flex-wrap justify-between gap-4 border-b pb-2 items-center mb-5">
        <h2 className="md:text-xl">المتطلبات</h2>
        <p className="text-[#666666B2]">{item.Requirements}</p>
      </div>
      {/* المتطلبات   */}
      {item.file ? (
        <>
          <div className="flex flex-wrap items-center justify-between ">
            <h2 className="md:text-xl">تنزيل الملف</h2>
            <a
              target="_blank"
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
