const ServBox = ({ item }) => {
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-duration="1000"
      className="sBox max-w-[550px] [300px] rounded-[22px] p-6 dark:bg-white">
      <div className="flex items-start gap-5">
        <img className="mt-2" src={item.icon} />
        <div>
          <h2 className="mb-4  text-[30px] lg:text-[36px] font-bold ">
            {" "}
            {item.title}
          </h2>
          <p className="text-black text-sm  sm:text-base  leading-relaxed max-w-[380px] ">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServBox;
