import type { Project } from "../types/cv";
import { Section } from "./Section";

export function ProjectsSection({
  title,
  items,
}: {
  title: string;
  items: Project[];
}) {
  return (
    <Section title={title}>
      <div className="project-grid">
        {items.map((project) => (
          <article className="project timeline-item" key={project.name}>
            <h3>{project.href ? <a href={project.href}>{project.name}</a> : project.name}</h3>
            <p>{project.description}</p>
            <p className="tech-line">
              {Object.values(project.technologies).flat().join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
