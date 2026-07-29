import type { Experience } from "../types/cv";
import { Section } from "./Section";

export function ExperienceSection({ title, items }: { title: string; items: Experience[] }) {
  return (
    <Section title={title}>
      <div className="timeline">
        {items.map((item) => (
          <article className="timeline-item" key={`${item.company}-${item.role}`}>
            <div className="item-heading">
              <div><h3>{item.role}</h3><p className="company">{item.company} · {item.location}</p></div>
              <time>{item.period}</time>
            </div>
            {item.summary && <p className="item-summary">{item.summary}</p>}
            <ul>{item.achievements.map((achievement) => <li key={achievement}>{achievement}</li>)}</ul>
            <p className="tech-line"><strong>Tech:</strong> {item.technologies.join(" · ")}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
