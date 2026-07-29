import type { CvData } from "../types/cv";
import { CertificationsSection } from "./CertificationsSection";
import { CvHeader } from "./CvHeader";
import { EducationSection } from "./EducationSection";
import { ExperienceSection } from "./ExperienceSection";
import { HighlightsSection } from "./HighlightsSection";
import { InterestsSection } from "./InterestsSection";
import { LanguagesSection } from "./LanguagesSection";
import { ProfessionalSummary } from "./ProfessionalSummary";
import { ProjectsSection } from "./ProjectsSection";
import { SkillsSection } from "./SkillsSection";

export function CvDocument({ cv }: { cv: CvData }) {
  return (
    <main className="cv-paper" aria-label={`${cv.name} CV`}>
      <CvHeader cv={cv} />
      <div className="cv-body">
        <div className="main-column">
          <ProfessionalSummary title={cv.labels.summary} summary={cv.summary} />
          <HighlightsSection title={cv.labels.highlights} highlights={cv.highlights} />
          <ExperienceSection title={cv.labels.experience} items={cv.experience} />
          <ProjectsSection title={cv.labels.projects} items={cv.projects} />
        </div>
        <aside className="side-column">
          <SkillsSection title={cv.labels.skills} skills={cv.skills} />
          <EducationSection title={cv.labels.education} items={cv.education} />
          <CertificationsSection title={cv.labels.certifications} items={cv.certifications} />
          <LanguagesSection title={cv.labels.languages} items={cv.languages} />
          <InterestsSection title={cv.labels.interests} items={cv.interests} />
        </aside>
      </div>
    </main>
  );
}
