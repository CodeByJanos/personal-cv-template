import type { Certification } from "../types/cv";
import { Section } from "./Section";

export function CertificationsSection({ title, items }: { title: string; items: Certification[] }) {
  return (
    <Section title={title}>
      <ul className="plain-list">
        {items.map((item) => (
          <li key={item.name}>
            <strong>{item.name}</strong>
            <span>{[item.issuer, item.year].filter(Boolean).join(" · ")}</span>
            {item.details && <span>{item.details}</span>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
