import { AtSign, Github, Linkedin, MapPin, Phone } from "lucide-react";
import type { ContactItem } from "../types/cv";

const icons = { email: AtSign, phone: Phone, location: MapPin, linkedin: Linkedin, github: Github, web: AtSign };

export function ContactDetails({ contacts }: { contacts: ContactItem[] }) {
  return (
    <address className="contact-list">
      {contacts.map((contact) => {
        const Icon = icons[contact.kind];
        const content = <><Icon aria-hidden="true" /><span>{contact.value}</span></>;
        return contact.href
          ? <a key={contact.kind} href={contact.href} aria-label={`${contact.label}: ${contact.value}`}>{content}</a>
          : <span key={contact.kind}>{content}</span>;
      })}
    </address>
  );
}
