import { Link } from "react-router-dom";
import img from "../../img/assets/contact.jpg";
import img2 from "../../img/assets/whatsapp_2504957.png";
import img3 from "../../img/assets/instagram_1409946.png";
import img4 from "../../img/assets/facebook_2504903.png";

const Contactsec = () => {
  return (
    <div className="py-[70px]">
      <div className="container grid grid-cols-1  lg:grid-cols-2 gap-5 ">
        <div
          data-aos="zoom-in-down"
          data-aos-duration="1500"
          className="mt-[50px]">
          <div>
            <h2 className="font-bold text-5xl mb-5 dark:text-white">مكاتبنا</h2>
            <p className=" sm:text-xl text-sm font-bold sm:font-normal dark:text-gray-400">
              <i className="fa fa-location-dot ml-3 text-[#5bbaf4] "></i>
              مكتب الاسماعيلية : ارض المزادات خلف صيدلية امنية شعبان
            </p>
            <p className=" my-5 sm:text-xl text-sm font-bold sm:font-normal dark:text-gray-400">
              <i className="fa fa-location-dot ml-3 text-[#5bbaf4] "></i>
              مكتب السويس : السويس
            </p>
            <p className=" sm:text-xl text-sm font-bold sm:font-normal dark:text-gray-400">
              <i className="fa fa-location-dot ml-3 text-[#5bbaf4] "></i>
              مكتب بورسعيد : بورسعيد
            </p>
          </div>
          <h2 className="font-bold text-5xl my-5 dark:text-white">تجدنا</h2>
          <div className="flex items-center gap-3">
            <Link to={"https://wa.me/+201014338884"} target="_blank">
              <img
                className="transition-all duration-300 hover:w-[35px] hover:h-[35px] w-[30px] h-[30px]"
                src={img2}
              />
              {/* <i className="fa-brands border-2 border-green-500 fa-whatsapp bg-white w-[50px] h-[50px] leading-[50px] text-2xl text-green-500 font-bold transition-all duration-300 rounded-full text-center hover:text-white hover:bg-green-500"></i> */}
            </Link>

            <Link
              to={"https://www.instagram.com/sayed.ahmed.3/"}
              target="_blank">
              <img
                className="w-[30px] h-[30px] transition-all duration-300 hover:w-[35px] hover:h-[35px]"
                src={img3}
              />

              {/* <i className="fa-brands border-2 border-rose-600 fa-instagram bg-white w-[50px] h-[50px] leading-[50px] text-2xl text-rose-600 font-bold transition-all duration-300 rounded-full text-center mx-3 hover:text-white hover:bg-rose-600"></i> */}
            </Link>
            <Link
              target="_blank"
              to={"https://www.facebook.com/profile.php?id=100088140300841"}>
              <img
                className="w-[30px] h-[30px] transition-all duration-300 hover:w-[35px] hover:h-[35px]"
                src={img4}
              />

              {/* <i className="fa-brands border-2 border-blue-500 fa-facebook-f bg-white w-[50px] h-[50px] leading-[50px] text-2xl text-blue-500 font-bold transition-all duration-300 rounded-full text-center hover:text-white hover:bg-blue-500"></i> */}
            </Link>
          </div>
        </div>
        <img src={img} />
      </div>
    </div>
  );
};

export default Contactsec;
