import type { Education } from "../types/cv";
import { Section } from "./Section";

export function EducationSection({ title, items }: { title: string; items: Education[] }) {
  return <Section title={title}>{items.map((item) => <article className="compact-item" key={item.degree}><div><h3>{item.degree}</h3><p>{item.institution}</p>{item.details && <small>{item.details}</small>}</div><time>{item.period}</time></article>)}</Section>;
}
