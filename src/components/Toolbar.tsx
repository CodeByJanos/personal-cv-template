import { Languages, Printer } from "lucide-react";
import type { CvLabels, Locale } from "../types/cv";

export function Toolbar({ locale, labels, onLocaleChange }: { locale: Locale; labels: CvLabels; onLocaleChange: (locale: Locale) => void }) {
  return (
    <nav className="toolbar" aria-label="CV controls">
      <div className="language-control">
        <Languages aria-hidden="true" />
        <span>{labels.language}</span>
        <div className="segmented" role="group" aria-label={labels.language}>
          {(["hu", "en"] as const).map((code) => <button key={code} className={locale === code ? "active" : ""} onClick={() => onLocaleChange(code)} aria-pressed={locale === code}>{code.toUpperCase()}</button>)}
        </div>
      </div>
      <button className="print-button" onClick={() => window.print()}><Printer aria-hidden="true" />{labels.print}</button>
    </nav>
  );
}
