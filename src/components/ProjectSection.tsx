import "../styles/components/project.scss";

type ProjectSectionProps = {
  title: string;
  description: string;
  imageSrc: string;
  years: string;
  scope: string;
};

export default function ProjectSection({
  title,
  description,
  imageSrc,
  years,
  scope,
}: ProjectSectionProps) {
  return (
    <section className="project">
      <div>
        <h2 className="project__title">{title}</h2>
        <p className="project__description">{description}</p>
        <p className="project__details">
          <strong>Years:</strong> {years}
        </p>
        <p className="project__details">
          <strong>Scope:</strong> {scope}
        </p>
      </div>
      <div className="project__image">
        <img src={imageSrc} alt={title} />
      </div>
    </section>
  );
}
