//import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectSection from "../components/ProjectSection";
import Footer from "../components/Footer";

import projectData from "../data/projectData";

import "../styles/global.scss";

export default function Home() {
  return (
    <div className="grid-overlay">
      <HeroSection />
      <AboutSection />
      <section id="work">
        {Object.entries(projectData).map(([id, project]) => (
          <ProjectSection key={id} {...project} />
        ))}
      </section>
      <Footer />
    </div>
  );
}
