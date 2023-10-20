import logo from "../../img/assets/logo.svg";
import menu from "../../img/assets/bars.svg";
import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { Theme } from "../../contexts/themeContext";
const Navbar = () => {
  let { themes, setThemes } = useContext(Theme);
  let [nav, setNav] = useState(false);
  function navActive({ isActive }) {
    return {
      background: isActive
        ? "linear-gradient(0deg, rgba(255, 253, 117, 0.60) 0%, rgba(255, 253, 117, 0.60) 100%), radial-gradient(52.33% 100% at 50% 100%, rgba(255, 253, 117, 0.75) 0%, rgba(255, 255, 255, 0.00) 100%)"
        : "none",
      borderRadius: isActive ? "8px" : "",
      borderBottom: isActive ? "3px solid #ffd12b" : "",
    };
  }
  let handleOpen = () => {
    if (nav) {
      setNav(false);
    } else {
      setNav(true);
    }
  };
  return (
    <header className="py-6 head">
      <div className="container flex items-center justify-between">
        <Link to={"/"}>
          <img
            className="w-[90px] cursor-pointer sm:w-[109px]"
            src={logo}
            alt="logo Mg"
          />
        </Link>
        <ul className="hidden sm:flex items-center gap-[10px]">
          <li>
            <NavLink
              to={"/"}
              style={navActive}
              className={`py-[8px] px-[16px] transition-all duration-300 dark:text-white `}>
              الرئيسية
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/services"}
              style={navActive}
              className={
                "py-[8px] px-[16px] transition-all duration-300 dark:text-white"
              }>
              الخدمات
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/projects"}
              style={navActive}
              className={
                "py-[8px] px-[16px] transition-all duration-300 dark:text-white"
              }>
              المشاريع
            </NavLink>
          </li>

          <li>
            <NavLink
              to={"/about"}
              style={navActive}
              className={
                "py-[8px] px-[16px] transition-all duration-300 dark:text-white"
              }>
              عنا
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              style={navActive}
              className={
                "py-[8px] px-[16px] transition-all duration-300 dark:text-white"
              }>
              اتصل بنا
            </NavLink>
          </li>
        </ul>
        <div
          onClick={handleOpen}
          className="sm:hidden relative cursor-pointer  ">
          {themes ? (
            <svg
              onClick={() => setNav(true)}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="20"
              viewBox="0 0 32 20"
              fill="none">
              <path
                d="M0 20V16.6667H32V20H0ZM0 11.6667V8.33333H32V11.6667H0ZM0 3.33333V0H32V3.33333H0Z"
                fill="white"
              />
            </svg>
          ) : (
            <img onClick={() => setNav(true)} src={menu} alt="menuMobile" />
          )}

          <ul
            className={`fixed z-50 transition-all duration-300 ${
              nav ? "translate-x-[0]" : "translate-x-[-100%]"
            } bg-black/90 text-white top-0 left-0 w-full h-screen grid place-content-center gap-10 text-center `}>
            <span className="text-2xl absolute top-11 right-6 text-center leading-10 transition-all duration-300 cursor-pointer  hover:bg-red-500 text-white bg-yellow-400 w-10 h-10 rounded-full">
              X
            </span>
            <li>
              <NavLink
                to={"/"}
                style={navActive}
                className={"py-[8px] px-[16px] dark:text-white"}>
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/services"}
                style={navActive}
                className={"py-[8px] px-[16px] dark:text-white"}>
                الخدمات
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/projects"}
                style={navActive}
                className={"py-[8px] px-[16px] dark:text-white"}>
                المشاريع
              </NavLink>
            </li>

            <li>
              <NavLink
                to={"/about"}
                style={navActive}
                className={"py-[8px] px-[16px] dark:text-white"}>
                عنا
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                style={navActive}
                className={"py-[8px] px-[16px] dark:text-white"}>
                اتصل بنا
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
