import { useEffect, useState } from "react";
import { CvDocument } from "./components/CvDocument";
import { Toolbar } from "./components/Toolbar";
import { cvEn } from "./content/cv.en";
import { cvHu } from "./content/cv.hu";
import type { Locale } from "./types/cv";

const content = { hu: cvHu, en: cvEn };

export default function App() {
  const [locale, setLocale] = useState<Locale>(() => (localStorage.getItem("cv-locale") as Locale) || "hu");
  const cv = content[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = `${cv.name} — ${cv.title}`;
    localStorage.setItem("cv-locale", locale);
  }, [locale, cv]);

  return (
    <div className="app-shell">
      <Toolbar locale={locale} labels={cv.labels} onLocaleChange={setLocale} />
      <CvDocument cv={cv} />
      <p className="print-hint">{locale === "hu" ? "Tipp: a nyomtatási ablakban válaszd a „Mentés PDF-ként” lehetőséget." : "Tip: choose “Save as PDF” in the print dialog."}</p>
    </div>
  );
}
