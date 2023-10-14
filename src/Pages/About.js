import Managers from "../Components/AboutComponents/Managers";
import ServicesAbout from "../Components/AboutComponents/ServicesAbout";
import AboutContactUs from "../Components/AboutComponents/AboutContactUs";
import HeroOther from "../Components/InAll/HeroOther";
import Testimonials from "../Components/AboutComponents/Testimonials";
import Navbar from "../Components/InAll/Navbar";
import Mode from "../Components/InAll/Mode";
import Arrow from "../Components/InAll/Arrow";
import Footer from "../Components/InAll/Footer";
const About = () => {
  return (
    <div>
      <Navbar />
      <Mode />
      <Arrow />
      <HeroOther
        tit={"عن الشركة"}
        desc={
          " هدف شركتنا تحقيق رؤية العملاء وتقديم مشاريع عالية الجودة ومبتكرة."
        }
      />
      <ServicesAbout />
      <Managers />
      {/* <Testimonials /> */}
      <AboutContactUs />
      <Footer />
    </div>
  );
};

export default About;
