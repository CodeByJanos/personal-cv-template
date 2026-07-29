import type { Language } from "../types/cv";
import { Section } from "./Section";

export function LanguagesSection({ title, items }: { title: string; items: Language[] }) {
  return <Section title={title}><ul className="plain-list inline-list">{items.map((item) => <li key={item.name}><strong>{item.name}</strong><span>{item.level}</span></li>)}</ul></Section>;
}
