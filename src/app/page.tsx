import Navbar from "@/components/navbar/navbar";
import HomePage from "./main/home/page";
import Footer from "@/components/footer/page";
import TechSlider from "./main/techSlider/page";
import PoweredBy from "./main/poweredBy/page";
import AboutMe from "./main/aboutMe/page";
import Projects from "./main/projects/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutMe />
      <PoweredBy />
      <Projects />
      <TechSlider />
      <Footer />
    </div>
  );
}
