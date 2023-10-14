import { Link } from "react-router-dom";
import face from "../../img/assets/facebook_2504903.png";
import whats from "../../img/assets/whatsapp_2504957.png";
import insta from "../../img/assets/instagram_1409946.png";
import email from "../../img/assets/email.svg";
import phone from "../../img/assets/phone.svg";
import logo from "../../img/assets/logo.svg";
const Footer = () => {
  return (
    <footer className="bg-[#333] text-white pt-8 ">
      <div className="container flex flex-col md:flex-row  md:justify-between pb-20 ">
        <img
          className="w-[70px] h-[70px] mx-auto md:mx-0 mb-6 md:w-[170px] md:h-[170px]"
          src={logo}
        />
        <ul className="flex items-center gap-3 justify-center">
          <li>
            <Link to={"https://wa.me/+201014338884"} target="_blank">
              <img
                className="w-[32px] h-[32px] transition-all duration-300 hover:w-[40px] hover:h-[40px]"
                src={whats}
              />
            </Link>
          </li>
          <li>
            <Link
              to={"https://www.instagram.com/sayed.ahmed.3/"}
              target="_blank">
              <img
                className="w-[32px] h-[32px] transition-all duration-300 hover:w-[40px] hover:h-[40px]"
                src={insta}
              />
            </Link>
          </li>
          <li>
            <Link
              target="_blank"
              to={"https://www.facebook.com/profile.php?id=100088140300841"}>
              <img
                className="w-[32px] h-[32px] transition-all duration-300 hover:w-[40px] hover:h-[40px]"
                src={face}
              />
            </Link>
          </li>
        </ul>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center pb-10">
        <div>
          <h2 className="text-[32px] font-bold mb-5 lg:pr-2  border-b-2 lg:border-b-transparent lg:border-r-2 w-fit border-[#ffdf69]  mx-auto">
            تواصل معانا
          </h2>
          <div className="flex justify-center lg:justify-end">
            <span className="font-bold">mgcompany53@gmail.com</span>
            <img className="mr-1" src={email} />
          </div>
          <div className="flex justify-center lg:justify-end mt-2">
            <span className="font-bold">1014338884</span>
            <img className="mr-1" src={phone} />
          </div>
        </div>
        <div>
          <h2 className="text-[32px] font-bold mb-5 lg:pr-2 lg:border-b-transparent  border-b-2 lg:border-r-2 w-fit border-[#ffdf69]  mx-auto">
            مكان العمل
          </h2>
          <div>
            <span className="font-bold">
              العنوان : ارض المزادات خلف صيدلية امنية شعبان
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-[32px] font-bold mb-5 lg:pr-2 lg:border-b-transparent  border-b-2 lg:border-r-2 w-fit border-[#ffdf69]  mx-auto">
            الخدمات
          </h2>
          <ul className="flex flex-col items-center md:ml-12  gap-[10px]">
            <li>
              <Link
                to={"/"}
                className={
                  "py-[8px] px-[16px] transition-all duration-200 hover:text-[#ffdf69]"
                }>
                الرئيسية
              </Link>
            </li>
            <li>
              <Link
                to={"/services"}
                className={
                  "py-[8px] px-[16px] transition-all duration-200 hover:text-[#ffdf69]"
                }>
                الخدمات
              </Link>
            </li>
            <li>
              <Link
                to={"/projects"}
                className={
                  "py-[8px] px-[16px] transition-all duration-200 hover:text-[#ffdf69]"
                }>
                المشاريع
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className={
                  "py-[8px] px-[16px] transition-all duration-200 hover:text-[#ffdf69]"
                }>
                عنا
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className={
                  "py-[8px] px-[16px] transition-all duration-200 hover:text-[#ffdf69]"
                }>
                اتصل بنا
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
