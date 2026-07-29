import type { PropsWithChildren } from "react";

export function Section({ title, children, className = "" }: PropsWithChildren<{ title: string; className?: string }>) {
  return (
    <section className={`cv-section ${className}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
