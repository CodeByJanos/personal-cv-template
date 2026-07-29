import { Section } from "./Section";

export function SkillsSection({ title, skills }: { title: string; skills: Record<string, string[]> }) {
  return (
    <Section title={title}>
      <dl className="skill-list">
        {Object.entries(skills).map(([category, items]) => <div key={category}><dt>{category}</dt><dd>{items.join(" · ")}</dd></div>)}
      </dl>
    </Section>
  );
}
