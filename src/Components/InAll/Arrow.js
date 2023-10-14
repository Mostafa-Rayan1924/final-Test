import { useEffect, useRef } from "react";
import arrow from "../../img/assets/arrowup.jpg";
const Arrow = () => {
  let arrowRef = useRef();
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 500) {
        arrowRef.current.style.opacity = "1";
      } else {
        arrowRef.current.style.opacity = "0";
      }
    };
  }, []);
  function goUp() {
    window.scrollTo({
      top: "0",
      behavior: "smooth",
    });
  }
  return (
    <img
      src={arrow}
      onClick={goUp}
      ref={arrowRef}
      className="fixed  p-2 rotate-[-90deg] font-bold z-50 w-[40px] hover:-translate-y-2.5 bg-yellow-400 grid place-items-center text-white h-[40px] right-10 bottom-10 cursor-pointer rounded-full transition duration-300 opacity-0"
    />
  );
};

export default Arrow;
