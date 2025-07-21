import { Link } from "react-router-dom";
import "../styles/components/projectSection.scss";

type ProjectSectionProps = {
  title: string;
  description: string;
  cover: string;
  year: string;
  scope: string;
  link: string;
};

export default function ProjectSection({
  title,
  description,
  cover,
  year,
  scope,
  link,
}: ProjectSectionProps) {
  return (
    <Link to={link} className="project-link">
      <section className="project">
        <div>
          <h2 className="project__title">{title}</h2>
          <p className="project__description">{description}</p>
          <p className="project__details">
            <strong>Year:</strong> {year}
          </p>
          <p className="project__details">
            <strong>Scope:</strong> {scope}
          </p>
        </div>
        <div className="project__image">
          <img src={cover} alt={title} />
        </div>
      </section>
    </Link>
  );
}
