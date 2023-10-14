const PeopleBox = ({ item }) => {
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-duration="1000"
      className="bg-white dark:bg-[#444] shadow p-6 rounded-2xl relative mt-10 transition-all duration-300 border-2 border-transparent hover:border-[#75caff]  ">
      <div className="border-b">
        <img
          className="w-[68px] h-[68px] object-cover rounded-full absolute -top-10 left-5"
          src={item.icon}
        />
        <h2 className="text-[#A5A5A5]  text-[22px] my-3">{item.desc}</h2>
      </div>
      <div className="mt-5 dark:text-white">
        <h3 className="mb-2">{item.name}</h3>
        <h4>{item.job}</h4>
      </div>
    </div>
  );
};

export default PeopleBox;
