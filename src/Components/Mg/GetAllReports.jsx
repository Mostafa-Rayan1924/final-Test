const GetAllReports = ({ item }) => {
  console.log(item.Supplies);
  return (
    <div className="shadow bg-slate-50 transition-all duration-300 border-[4px] border-transparent mb-10  hover:border-b-sky-400 p-6 rounded-lg">
      <div className="flex flex-wrap justify-between gap-4 items-center border-b pb-2 mb-5">
        <h2 className="md:md:text-xl">الشخص المسؤول </h2>
        <p className="text-[#666666B2]">{item.CreatedBy?.name}</p>
      </div>
      <div className="flex flex-wrap justify-between gap-4 border-b pb-2 items-center mb-5">
        <h2 className="md:text-xl">التاريخ</h2>
        <p className="text-[#666666B2]">{item.Date}</p>
      </div>
      <div className="flex flex-wrap justify-between gap-4 border-b pb-2 items-center mb-5">
        <h2 className="md:text-xl">اسم المشروع</h2>
        <p className="text-[#666666B2]">{item.ProjectName}</p>
      </div>
      {/*  ألعمال */}
      <div className="mb-5 ">
        {item.Employee.map((ele) => {
          return (
            <div key={ele.id} className="mb-5 border-b   pb-2">
              <h2 className="mb-2.5 md:text-xl"> العمال </h2>

              <div className="flex mb-5 justify-between items-center flex-wrap">
                <p className="text-[#666666B2] text-lg">
                  نوع العمال : {ele.type}
                </p>
                <p className="text-[#666666B2] text-lg">
                  عدد العمال : {ele.number}
                </p>
              </div>
              <div className="w-full ">
                <h2 className="md:text-xl">الاعمال التي قاموا بها</h2>
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
              <h2 className="mb-2.5 md:text-xl"> المعدات </h2>

              <div className="flex mb-5 justify-between items-center flex-wrap">
                <p className="text-[#666666B2] text-lg">
                  اسم المعده : {ele.name}
                </p>
                <p className="text-[#666666B2] text-lg">
                  نوع المعده : {ele.type}
                </p>
                <p className="text-[#666666B2] text-lg">العدد : {ele.amount}</p>
                <p className="text-[#666666B2] text-lg">
                  اسم السائق : {ele.namedDriver}
                </p>
              </div>
              <div className="w-full ">
                <h2 className="md:text-xl">الاعمال التي قاموا بها</h2>
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
              <h2 className="mb-2.5 md:text-xl"> التوريدات </h2>

              <div className="flex mb-5 justify-between items-center flex-wrap">
                <p className="text-[#666666B2] text-lg">
                  اسم المورد : {ele.name}
                </p>
                <p className="text-[#666666B2] text-lg">
                  نوع التوريد : {ele.type}
                </p>
                <p className="text-[#666666B2] text-lg">العدد : {ele.number}</p>
                <p className="text-[#666666B2] text-lg">
                  رقم السيارة : {ele.carNumber}
                </p>
              </div>
              <div className="w-full ">
                <h2 className="md:text-xl">الاعمال التي قاموا بها</h2>
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
