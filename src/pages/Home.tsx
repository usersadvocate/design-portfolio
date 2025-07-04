//import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer";
import "../styles/global.scss";

export default function Home() {
  return (
    <div className="grid-overlay">
      <HeroSection />
      <AboutSection />
      <ProjectSection
        title="BOM Portal"
        description="Creating a procurement tool on a cloud platform from scratch"
        years="2023"
        scope="Product Market Fit"
        imageSrc="/images/BOM.png"
      />
      <ProjectSection
        title="Continuous Discovery"
        description="Framework on how to continuously validate and improve products to meet customer needs"
        years="2022"
        scope="User Research"
        imageSrc="/images/Discovery.png"
      />
      <ProjectSection
        title="Plego"
        description="Team work on scalability of the design system"
        years="2022"
        scope="Design system"
        imageSrc="/images/Plego.png"
      />
      <Footer />
    </div>
  );
}
