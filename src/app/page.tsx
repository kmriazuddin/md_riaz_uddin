import Navbar from "@/components/navbar/navbar";
import HomePage from "./home/page";
import Footer from "@/components/footer/page";
import TechSlider from "./techSlider/page";
import PoweredBy from "./poweredBy/page";
import AboutMe from "./aboutMe/page";
import Projects from "./projects/page";
import Certificate from "./certificate/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutMe />
      <TechSlider />
      <Projects />
      <Certificate />
      <PoweredBy />
      <Footer />
    </div>
  );
}
