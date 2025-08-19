import { useParams } from "react-router-dom";
import projectData from "../data/projectData";
import "../styles/components/projectLayout.scss";
import FooterNav from "../components/FooterNav";

export default function Project() {
  const { id } = useParams();

  const project =
    id && id in projectData
      ? projectData[id as keyof typeof projectData]
      : null;

  if (!project) return <div>Project not found</div>;

  const firstGroup = ["background", "solution", "role"];
  const secondGroup = ["lessons", "outcome"];

  const renderSectionGroup = (ids: string[]) => (
    <div className="project-sections-grid">
      {project.sections
        .filter((section) => ids.includes(section.id))
        .map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="project-section-card"
          >
            <h3 className="project-section-card__title">{section.title}</h3>
            <p className="project-section-card__content">{section.content}</p>
          </section>
        ))}
    </div>
  );

  const renderBodySections = () => {
    if (!project.bodySections?.length) return null;
    return (
      <div className="project-body">
        {project.bodySections.map((section, index) => (
          <section key={index} className="project-body-section">
            <div className="project-body-section__text">
              <h3 className="project-body-section__title">{section.title}</h3>
              <p
                className="project-body-section__description"
                dangerouslySetInnerHTML={{ __html: section.description }}
              />
            </div>
            {section.image && (
              <img
                src={section.image}
                alt={section.title}
                className="project-body-section__image"
              />
            )}
          </section>
        ))}
      </div>
    );
  };

  return (
    <>
      <section className="project-layout grid-overlay">
        <h1>{project.title}</h1>
        <img src={project.cover} alt={project.title} />

        {/* Background + Solution + Role */}
        {renderSectionGroup(firstGroup)}

        {/* Body sections go here */}
        {renderBodySections()}

        {/* Lessons + Outcome */}
        {renderSectionGroup(secondGroup)}
      </section>
      <FooterNav />
    </>
  );
}
