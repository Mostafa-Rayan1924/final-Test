import { useContext } from "react";
import imgProfile from "../../img/aboutImg/avatar-05.png";
import { authContext } from "../../contexts/Auth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ShowElementsforLargeScreen from "./ShowElementsforLargeScreen";
import axios from "axios";
const Sidebar = () => {
  let nav = useNavigate();
  let { auth, setAuth } = useContext(authContext);
  function handleLogOut() {
    let confirmLogout = window.confirm("are you sure");
    if (confirmLogout) {
      axios
        .get("https://nutty-yoke-fish.cyclic.app/mg/users/logout")
        .then((res) => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          Swal.fire({
            icon: "success",
            title: "oKay...",
            text: "you Logged out successfully",
          });
        })
        .catch((error) => {
          console.log(error);
        });
      nav("/", { replace: true });
    }
  }
  // h-screen  fixed   w-[270px] flex flex-col text-center md:text-start bg-yellow-400
  return (
    <div className="h-screen w-[20%] fixed  flex flex-col  text-center md:text-start bg-yellow-400">
      <div className="py-[100px]  lg:px-6">
        <img
          className="max-w-full md:w-20 md:h-20 lg:w-24 lg:h-24  bg-black rounded-[16px] object-cover"
          src={imgProfile}
        />
        <h2 className="text-white mt-3 mb-1 font-bold">
          مرحبا : {auth.user?.name}
        </h2>
        <p className="text-gray-600">( {auth.user?.role} )</p>
        <h3 className="text-white  hidden lg:flex  font-bold my-5">
          القائمه الرئيسية
        </h3>
        <h3 className="text-white pr-2 flex lg:hidden  font-bold my-5">
          القائمه
        </h3>
        <ShowElementsforLargeScreen />
        <button
          onClick={handleLogOut}
          className="px-6 py-2 bg-red-500 text-white rounded-xl my-20">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
