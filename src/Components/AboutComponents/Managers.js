import b1 from "../../img/aboutImg/b1.webp";
import b2 from "../../img/aboutImg/avatar-06.png";
import b3 from "../../img/aboutImg/avatar-05.png";
import PeopleBox from "./PeopleBox";
import { MainTitle2 } from "../InAll/MainTitle2";

const Managers = () => {
  let ManagerInfo = [
    {
      id: 1,
      name: "م/ سيد احمد",
      job: "مدير الشركه بالاسماعيلية",
      desc: "خريج جامعة قناه السويس وذو خبره واسعة في المجال",
      icon: b2,
    },
    {
      id: 2,
      name: "م/ بلال متولي",
      job: "مدير الشركة ببورسعيد",
      desc: "مهندس بلال من المديرين صغار السن ذو الكفاءه العالية",
      icon: b1,
    },
    {
      id: 3,
      name: "م/ احمد سمير",
      job: "مدير الشركة بالسويس",
      desc: "هو المدير الاكبر بالشركة وصاحب الخبره العالية",
      icon: b3,
    },
  ];
  let ManagerMap = ManagerInfo.map((item) => {
    return <PeopleBox key={item.id} item={item} />;
  });
  return (
    <div className="py-[100px]">
      <MainTitle2 title={"المدراء"} />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ManagerMap}
      </div>
    </div>
  );
};

export default Managers;
