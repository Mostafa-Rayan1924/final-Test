const HeroOther = ({ tit, desc }) => {
  return (
    <div
      data-aos="zoom-in-down"
      data-aos-duration="1000"
      className={`container heroAbout h-[300px] py-[75px]  lg:h-[560px] lg:w-auto relative text-white before:absolute before:top-0 before:left-0 before:rounded-xl before:w-full before:h-full before:bg-black/30 before:z-10`}>
      <div className="absolute z-30 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center w-[90%]">
        <h2 className="text-[40px] lg:text-[80px] font-bold">{tit}</h2>
        <p className="mt-3 text-[22px]">{desc}</p>
      </div>
    </div>
  );
};

export default HeroOther;
