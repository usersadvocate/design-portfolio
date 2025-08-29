import { Link } from "react-router-dom";
import { useDeferredValue } from "react";
import "../styles/components/projectCard.scss";
import EnhancedButton from "./ui/EnhancedButton";

type ProjectCardProps = {
  title: string;
  description: string;
  cover: string;
  year: string;
  scope: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  cover,
  year,
  scope,
  link,
}: ProjectCardProps) {
  // Use deferred value for performance optimization
  const deferredTitle = useDeferredValue(title);
  const deferredDescription = useDeferredValue(description);

  return (
    <Link to={link} className="project-link">
      <section className="project">
        <div className="project__info">
          <h2 className="project__title">{deferredTitle}</h2>
          <p className="project__description">{deferredDescription}</p>
          <p className="project__details">
            <strong>Year:</strong> {year}
          </p>
          <p className="project__details">
            <strong>Scope:</strong> {scope}
          </p>
          <div className="project__button">
            <EnhancedButton>Read case study</EnhancedButton>
          </div>
        </div>
        <div className="project__image">
          <img src={cover} alt={deferredTitle} />
        </div>
      </section>
    </Link>
  );
}
