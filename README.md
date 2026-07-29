# Personal CV Template

A modern, bilingual and ATS-compatible personal CV built with React and
TypeScript. The layout is optimised for A4 printing and uses the browser's
native print functionality, producing PDFs with selectable text instead of
image-based pages.

This repository contains one carefully designed personal résumé rather than a
general-purpose CV builder. All content is stored locally in TypeScript files;
the application does not require a database, authentication service, backend or
external CMS.

## Live version

[https://codebyjanos.github.io/personal-cv-template/](https://codebyjanos.github.io/personal-cv-template/)

## Features

- Hungarian and English CV content
- Instant language switching
- A4-optimised screen and print layout
- Native PDF export through `window.print()`
- Selectable, searchable text in exported PDFs
- Semantic, ATS-readable document structure
- Responsive screen layout
- Print-specific page margins and page-break handling
- Completely local operation
- Separate content, types and presentation components

## Technology stack

- [Vite](https://vite.dev/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- Native browser printing with `@media print` and `@page`

## Getting started

### Requirements

- Node.js 20 or newer
- npm

### Installation

```bash
git clone https://github.com/CodeByJanos/personal-cv-template.git
cd personal-cv-template
npm install
npm run dev
```

Open the local URL printed by Vite, usually
[http://localhost:5173](http://localhost:5173).

## Available commands

```bash
npm run dev      # Start the local development server
npm run build    # Type-check and create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Editing the CV

The résumé content is separated from the React components:

- Hungarian content: `src/content/cv.hu.ts`
- English content: `src/content/cv.en.ts`
- Shared data types: `src/types/cv.ts`
- Profile image: `src/assets/profile.jpg`
- Visual and print styles: `src/index.css`

Keep both language files structurally aligned when adding or removing
experience, projects, skills or contact details.

## PDF export

Use the **Save as PDF** or **Mentés PDF-ként** button in the toolbar. It calls
the browser's native `window.print()` function.

Recommended print settings:

- Destination: **Save as PDF**
- Paper size: **A4**
- Scale: **100%**
- Margins: **None** or browser default when CSS page margins are respected
- Background graphics: **Enabled**
- Headers and footers: **Disabled**

Disabling browser headers and footers removes the local URL, print date and
page title from the exported document.

Because the PDF is generated through native browser printing, its text remains
selectable, searchable and readable by applicant tracking systems.

## Language support

The toolbar switches between Hungarian and English without reloading the page.
The selected language is saved in browser local storage and restored on the
next visit. The document language and browser title are also updated
automatically.

## Project structure

```text
src/
├── assets/
│   └── profile.jpg
├── components/
│   ├── CertificationsSection.tsx
│   ├── ContactDetails.tsx
│   ├── CvDocument.tsx
│   ├── CvHeader.tsx
│   ├── EducationSection.tsx
│   ├── ExperienceSection.tsx
│   ├── HighlightsSection.tsx
│   ├── InterestsSection.tsx
│   ├── LanguagesSection.tsx
│   ├── ProfessionalSummary.tsx
│   ├── ProjectsSection.tsx
│   ├── Section.tsx
│   ├── SkillsSection.tsx
│   └── Toolbar.tsx
├── content/
│   ├── cv.en.ts
│   └── cv.hu.ts
├── types/
│   └── cv.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Screenshot

Repository screenshots belong in:

```text
docs/screenshots/
```

The suggested main preview filename is
`docs/screenshots/cv-preview.png`. See the directory's README for the
recommended capture settings.

## ATS considerations

- CV information is rendered as real HTML text.
- Standard semantic headings, lists, articles and contact links are used.
- Content follows a predictable reading order.
- Important technologies and responsibilities are included as text.
- No canvas or image-based PDF generation is used.

## Privacy

This repository contains personal contact information and a profile image.
Review both language files and `src/assets/profile.jpg` before creating a public
fork or reusing the template.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.
