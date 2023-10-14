import { MainTitle2 } from "../InAll/MainTitle2";
import ServBox from "../homeComponent/ServBox";
import serv1 from "../../img/servHome/serv1.svg";
import serv2 from "../../img/servHome/serv2.svg";
import serv3 from "../../img/servHome/serv3.svg";
import serv4 from "../../img/servHome/serv4.svg";
const ServicesAbout = () => {
  let servicesElements = [
    {
      id: 1,
      icon: serv1,
      title: "خدمات البناء",
      desc: "نتولى تنفيذ جميع مراحل البناء والتشييد باتقان ومهارة عالية. من الأساسات والهياكل الخرسانية إلى التركيبات الكهربائية والسباكة، نحرص على تنفيذ كل جزء من المشروع بأعلى معايير الجودة ",
    },
    {
      id: 2,
      icon: serv2,
      title: "ادارة البناء",
      desc: "شركتنا للمقاولات توفر خدمات ادارة البناء الشاملة، حيث نقوم بتنسيق وإدارة جميع جوانب المشروع للتأكد من تنفيذه بنجاح وفقًا للمواصفات المطلوبة",
    },
    {
      id: 3,
      icon: serv3,
      title: "انشاءات عامة",
      desc: "نحن متخصصون في بناء المباني السكنية والتجارية بمختلف المقاييس والأحجام. سواء كنتم تخططون لبناء فيلا سكنية، مجمع سكني، مبنى تجاري، أو مركز تسوق، فإننا نقوم بتنفيذ جميع مراحل البناء بدءًا من الأساسات وصولاً إلى التشطيبات النهائية",
    },
    {
      id: 4,
      icon: serv4,
      title: "انشاءات بحريه",
      desc: "نقوم بتصميم وبناء المرافئ والموانئ بجميع المرافق المطلوبة، بما في ذلك أرصفة الشحن والتفريغ، والأحواض الجافة والرطبة، والأنظمة الأمنية والإضاءة، والمنشآت الإدارية. نحن نلتزم بتنفيذ المشاريع بأعلى معايير الجودة والأمان وفقًا للمعايير البحرية المطلوبة",
    },
  ];
  let servMap = servicesElements.map((item) => {
    return <ServBox key={item.id} item={item} />;
  });
  return (
    <div className="py-[100px]">
      <MainTitle2 title={"لما نحن"} />
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-20">
        {servMap}
      </div>
    </div>
  );
};

export default ServicesAbout;
