import Accordion from "../Components/homeComponent/Accordion";
import Ads from "../Components/homeComponent/Ads";
import Hero from "../Components/homeComponent/Hero";
import OurMsg from "../Components/homeComponent/OurMsg";
import Services from "../Components/homeComponent/Services";
import Projects from "../Components/homeComponent/Projects";
import Navbar from "../Components/InAll/Navbar";
import Mode from "../Components/InAll/Mode";
import Arrow from "../Components/InAll/Arrow";
import Footer from "../Components/InAll/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Mode />
      <Arrow />
      <Hero />
      <Ads />
      <OurMsg />
      <Services />
      <Projects />
      <Accordion />
      <Footer />
    </div>
  );
};

export default Home;
