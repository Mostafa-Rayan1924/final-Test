import { Link } from "react-router-dom";
import { MainTitle2 } from "../../Components/InAll/MainTitle2";
import img from "../../img/Ourmsg/shamblion.jpg";
import Btn from "../../Components/InAll/Btn";
const HeroPro = () => {
  return (
    <div className="py-[50px]">
      <MainTitle2 title={"اهم المشاريع"} />
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-5 ">
        <div>
          <h2 className="text-black text-[30px] dark:text-white md:text-[42px] font-bold">
            اخر مشاريع <span className="text-yellow-400">شركتنا</span>
          </h2>
          <p className="my-5 leading-loose text-gray-600 dark:text-gray-300">
            مشروع ميدان شامبليون واحد من اقوي المشاريع الاخيره التي تمت في مدينه
            الاسماعيليه بالفتره الاخيره تعاونا مع هيئة قناه السويس... المشروع
            شمل العديد من التطورات المبهره التي قامت بها الشركه علي
            الميدان...حيث قامت الشركه بتوسيعات واضافات ادت الي تحويل المكان من
            حديقه عامه الي حديقه اشبه بالحدائق السياحية واصبحت كمجمع للكافيهات
            والمطاعم.
          </p>
          <Link to={"/about"}>
            <Btn className="mb-10" title="قراءه المزيد" />
          </Link>
        </div>
        <img
          className="max-w-full object-cover h-[400px] md:mt-[-40px] rounded-lg"
          src={img}
        />
      </div>
    </div>
  );
};

export default HeroPro;
