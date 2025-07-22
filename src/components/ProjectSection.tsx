import { Link } from "react-router-dom";
import { PlainButton } from "../components/PlainButton";
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
        <div className="project__info">
          <h2 className="project__title">{title}</h2>
          <p className="project__description">{description}</p>
          <p className="project__details">
            <strong>Year:</strong> {year}
          </p>
          <p className="project__details">
            <strong>Scope:</strong> {scope}
          </p>
          <div className="project__button">
            <PlainButton label="Read case study" />
          </div>
        </div>
        <div className="project__image">
          <img src={cover} alt={title} />
        </div>
      </section>
    </Link>
  );
}
