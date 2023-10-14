import { Link, Outlet, useNavigate } from "react-router-dom";
import loginImg from "../../img/assets/login.png";
import logo from "../../img/assets/logo.svg";
import Loader from "../InAll/Loader/Loader";
import { useContext, useState } from "react";
import axios from "axios";
import { authContext } from "../../contexts/Auth";
// import to sweet alert
import Swal from "sweetalert2";
const Login = () => {
  let [load, setLoad] = useState(false);
  let navigate = useNavigate();
  let { auth, setAuth } = useContext(authContext);
  let [formInputs, setFormInputs] = useState({
    name: "",
    password: "test1234",
  });
  if (load) {
    return <Loader />;
  }
  async function handleSubmit(e) {
    setLoad(true);
    e.preventDefault();
    // setFormInputs({ ...formInputs, name: "", password: "" });
    let params = {
      email: formInputs.name,
      password: formInputs.password,
    };
    await axios
      .post("https://nutty-yoke-fish.cyclic.app/mg/users/login", params)
      .then(function (response) {
        setLoad(false);
        Swal.fire({
          icon: "success",
          title: "oKay...",
          text: "you Logged in successfully",
        });
        let userInfo = response.data.data.result;
        let token = response.data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userInfo));
        setAuth({ user: userInfo, token: token });
        if (response.data.data.result.role == "مدير") {
          navigate("/mgsystem/dashboard/dailyTaskSend");
        } else if (
          response.data.data.result.role == "مهندس مدني" ||
          response.data.data.result.role == "مشرف" ||
          response.data.data.result.role == "محاسب"
        ) {
          navigate("/mgsystem/dashboard/dailyTask");
        } else if (response.data.data.result.role == "مكتب فني") {
          navigate("/mgsystem/dashboard/weeklyTask");
        }

        // navigate("/mgsystem/dashboard");
      })
      .catch(function (error) {
        setLoad(false);

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "invalid email or password",
        });
      });
  }
  return (
    <>
      <div>
        <div className="flex h-screen">
          <div className="max-w-full mx-auto md:w-[60%] lg:w-1/2 h-full ">
            <div className="container mt-[100px] sm:mt-[50px]">
              <Link to={"/"}>
                <img className="w-[104px] h-[104px] " src={logo} />
              </Link>
              <div className="flex justify-center flex-col items-center mt-[20px]">
                <h2 className="text-[40px] lg:text-[64px] mb-10 font-bold">
                  مرحبا بك <br />
                  في شركة <span className="text-yellow-400">MG</span>
                </h2>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label className="pr-2">الايميل</label>
                    <br />
                    <input
                      value={formInputs.name}
                      onChange={(e) => {
                        setFormInputs({ ...formInputs, name: e.target.value });
                      }}
                      placeholder=" الايميل"
                      type="text"
                      className="w-[360px] focus:outline-[#f5c000] pr-2 h-[38px] mt-2 border border-[#ccc] rounded-lg"
                    />
                  </div>
                  <div className="mt-5 mb-10">
                    <label className="pr-2"> كلمة المرور</label>
                    <br />
                    <input
                      value={formInputs.password}
                      onChange={(e) => {
                        setFormInputs({
                          ...formInputs,
                          password: e.target.value,
                        });
                      }}
                      placeholder=" كلمة المرور "
                      type="text"
                      className="w-[360px] focus:outline-[#f5c000] pr-2 h-[38px] mt-2 border border-[#ccc] rounded-lg"
                    />
                  </div>
                  <button className="w-[360px] transition-all duration-300 hover:bg-yellow-500 h-[49px] px-[101.50px] text-center text-white text-2xl font-bold py-2.5 bg-yellow-400 rounded-[11px] justify-center items-center">
                    تسجيل الدخول
                  </button>
                </form>
              </div>
            </div>
          </div>
          <img
            className="h-full w-0 md:w-[40%] lg:w-1/2 object-cover"
            src={loginImg}
          />
        </div>
      </div>
      {/* <Outlet /> */}
    </>
  );
};

export default Login;
