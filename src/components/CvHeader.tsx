import type { CvData } from "../types/cv";
import profileImage from "../assets/profile.jpg";
import { ContactDetails } from "./ContactDetails";

export function CvHeader({ cv }: { cv: CvData }) {
  return (
    <header className="cv-header">
      <div className="identity">
        <img
          className="avatar"
          src={profileImage}
          alt={`${cv.name} profile`}
          width="400"
          height="400"
        />
        <div>
          <p className="eyebrow">{cv.title}</p>
          <h1>{cv.name}</h1>
          <p className="tagline">{cv.tagline}</p>
        </div>
      </div>
      <ContactDetails contacts={cv.contacts} />
    </header>
  );
}
