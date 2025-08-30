import { useEffect } from "react";
//import { Link } from "react-router-dom";
import HeroSection from "../components/layout/HeroSection";
import HomeAboutSection from "../components/HomeAboutSection";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/layout/Footer";

import projectData from "../data/mainProjects";

import "../styles/global.scss";

interface HomeProps {
  scrollTo?: string;
}

export default function Home({ scrollTo }: HomeProps) {
  useEffect(() => {
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollTo]);

  return (
    <div className="grid-overlay">
      <HeroSection />
      <HomeAboutSection />
      <section id="work">
        {Object.entries(projectData).map(([id, project]) => (
          <ProjectCard key={id} {...project} />
        ))}
      </section>
      <Footer />
    </div>
  );
}
