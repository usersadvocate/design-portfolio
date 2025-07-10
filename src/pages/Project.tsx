import { useParams } from "react-router-dom";
import projectData from "../data/projectData";
import "../styles/components/projectLayout.scss";

export default function Project() {
  const { id } = useParams();

  const project =
    id && id in projectData
      ? projectData[id as keyof typeof projectData]
      : null;

  if (!project) return <div>Project not found</div>;

  return (
    <section className="project-layout grid-overlay">
      <h1>{project.title}</h1>
      <img src={project.cover} alt={project.title} />
      <div className="details-grid">
      <h3 className="details">{project.background}</h3>
      <h3 className="details">{project.solution}</h3>
      <h3 className="details">{project.role}</h3>
      </div>
      <div className="details-grid">
      <h3 className="details">{project.lessons}</h3>
      <h3 className="details">{project.outcome}</h3>
      </div>
    </section>
  );
}
