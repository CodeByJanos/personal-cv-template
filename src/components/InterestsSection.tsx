import { Section } from "./Section";

export function InterestsSection({ title, items }: { title: string; items: string[] }) {
  return <Section title={title}><p className="interest-list">{items.join(" · ")}</p></Section>;
}
