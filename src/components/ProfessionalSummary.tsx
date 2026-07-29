import { Section } from "./Section";

export function ProfessionalSummary({ title, summary }: { title: string; summary: string }) {
  return <Section title={title}><p className="summary">{summary}</p></Section>;
}
