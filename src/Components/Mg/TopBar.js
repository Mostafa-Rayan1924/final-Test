import logo from "../../img/assets/logo.svg";
import bars from "../../img/assets/bars.svg";
import { useContext, useState } from "react";
import imgProfile from "../../img/aboutImg/avatar-05.png";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/Auth";
import Swal from "sweetalert2";
import ShowElements from "./ShowElements";

const TopBar = () => {
  let { auth, setAuth } = useContext(authContext);
  let [side, setSide] = useState(false);
  let nav = useNavigate();
  function handleLogOut() {
    let confirmLogout = window.confirm("are you sure");
    if (confirmLogout) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      Swal.fire({
        icon: "success",
        title: "oKay...",
        text: "you Logged out successfully",
      });
      nav("/mgsystem/login");
    }
  }
  return (
    <header
      onClick={() => {
        if (side) {
          setSide(false);
        }
      }}>
      <div className="container flex  items-center justify-between">
        <img src={logo} />
        <div>
          <img
            className="cursor-pointer"
            onClick={() => setSide(true)}
            src={bars}
          />
          <div
            className={`transition-all duration-300 fixed top-0 ${
              side ? "left-0" : "left-[-100%]"
            } flex items-center justify-center flex-col  w-[100%] h-screen bg-black/90`}>
            <span className="text-center cursor-pointer   text-2xl leading-10 w-10 h-10 bg-[#ffd53e] text-white rounded-full absolute top-10 right-6">
              X
            </span>
            <img
              className="max-w-full w-16 h-16 bg-black rounded-[16px] object-cover"
              src={imgProfile}
            />
            <h2 className="text-white text-2xl mt-3 mb-1 font-bold">
              {auth.user?.name}
            </h2>
            <p className="text-gray-600">{auth.user?.role}</p>

            <h3 className="text-stone-500 my-5 ">{auth.user?.email}</h3>
            <h3 className="text-white  hidden lg:flex  font-bold my-5">
              القائمه الرئيسية
            </h3>
            <h3 className="text-white pr-2 flex lg:hidden  font-bold my-5">
              القائمه
            </h3>

            <ShowElements />

            <button
              onClick={handleLogOut}
              className="px-6 py-2 bg-red-500 text-white rounded-xl my-20">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
