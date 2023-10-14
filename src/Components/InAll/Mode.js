import { useContext, useEffect } from "react";
import { Theme } from "../../contexts/themeContext";
import sun from "../../img/assets/moon.png";
import moon from "../../img/assets/sun.png";

const Mode = () => {
  let { themes, setThemes } = useContext(Theme);

  useEffect(() => {
    themes
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  }, [themes]);

  return (
    <div
      onClick={() => setThemes((prev) => !prev)}
      className="fixed  h-10 w-10 bg-[#f5c000] text-white rounded-full text-center leading-10 cursor-pointer z-50 left-3 sm:left-10  ">
      {themes ? (
        <img className="p-2" src={sun} />
      ) : (
        <img className="p-2" src={moon} />
      )}
    </div>
  );
};

export default Mode;
