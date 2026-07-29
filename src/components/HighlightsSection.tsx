import { Section } from "./Section";

export function HighlightsSection({ title, highlights }: { title: string; highlights: string[] }) {
  return <Section title={title}><ul className="highlights">{highlights.map((item) => <li key={item}>{item}</li>)}</ul></Section>;
}
