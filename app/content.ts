export const profile = {
  name: "Elysia Trocio",
  title: "Data Analyst · Applied Mathematics @ UC Irvine",
  tagline: "I turn messy datasets into decisions people can act\u00A0on.",
  summary:
    "Applied Mathematics (Data Science) student at UC Irvine with a Computer Science minor. I've built scoring models for sponsorship ROI, analyzed income-prediction datasets, and shipped a full-stack web app with an 11-person team. I'm looking for data analyst / data science internships where I can pair rigorous analysis with clear storytelling.",
  email: "etrocio@uci.edu",
  linkedin: "https://www.linkedin.com/in/elysiatrocio/",
  github: "https://github.com/elysiaa-t",
  resumeUrl: "/Elysia_Trocio_Resume.pdf",
  location: "Irvine, CA",
};

export const stats = [
  { value: "2×", label: "Award-winning team projects" },
  { value: "$5K+", label: "Budget managed & reconciled" },
  { value: "11", label: "Person dev team shipped with" },
  { value: "20+", label: "One-on-one tutoring sessions" },
];

export type Project = {
  title: string;
  org: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
  outcome?: string;
  tags: string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "NASCAR Sponsorship ROI Model",
    org: "NY Racing (Extern)",
    role: "Data Analyst",
    period: "Jul 2026 – Sep 2026",
    summary:
      "Estimated sponsorship visibility ROI across a full Cup Series season and ranked opportunities by exposure efficiency.",
    bullets: [
      "Collected public race results, sponsorship exposure metrics, and media data using Python, web scraping, and API integrations.",
      "Built a weighted scoring model combining race performance, social media engagement, and media mentions.",
      "Delivered a sponsorship strategy report with publication-quality visualizations identifying the highest-value targets.",
    ],
    outcome: "Data-driven strategy recommendation delivered to NY Racing",
    tags: ["Python", "Web Scraping", "APIs", "Scoring Model", "Data Visualization"],
    featured: true,
  },
  {
    title: "Predicting Income Outcomes",
    org: "Data@UCI Mentorship",
    role: "Data Analyst",
    period: "Jan 2026 – Mar 2026",
    summary:
      "Evaluated whether demographic and socioeconomic variables could predict income outcomes in a 2015 adult income dataset.",
    bullets: [
      "Worked in a team of five over nine weeks under mentorship from a UCSD Data Science graduate student.",
      "Cleaned and explored the dataset, tested predictive relationships, and translated findings into clear takeaways.",
      "Produced and presented a research presentation summarizing methodology and results.",
    ],
    outcome: "First Runner-Up, Best Overall Project (of 7 teams)",
    tags: ["Python", "EDA", "Statistics", "Predictive Analysis", "Presentation"],
    featured: true,
  },
  {
    title: "PinoyPort",
    org: "FUSIONCon Project",
    role: "Developer",
    period: "Nov 2025 – May 2026",
    summary:
      "Full web application for tracking Filipino restaurants, built over an academic year with an 11-person team of developers and designers.",
    bullets: [
      "Built responsive UI components from Figma designs using TypeScript, Tailwind CSS, and Next.js.",
      "Developed account features with Supabase and integrated the Google Maps API for restaurant tracking.",
      "Collaborated across 7 developers and 4 designers using GitHub for version control and reviews.",
    ],
    outcome: "Won “Best User Experience” among 5 competing teams",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Supabase", "Google Maps API"],
  },
];

export const skillGroups = [
  {
    name: "Data & Analytics",
    description: "Core toolkit for analysis, modeling, and reporting.",
    skills: [
      "Python",
      "SQL",
      "Tableau",
      "Power BI",
      "Excel",
      "Google Analytics",
      "MATLAB",
      "Web Scraping & APIs",
      "Probability & Statistics",
    ],
  },
  {
    name: "Engineering",
    description: "Building the products that surface the data.",
    skills: [
      "TypeScript / JavaScript",
      "Next.js",
      "Tailwind CSS",
      "Supabase",
      "Firebase",
      "Google Maps API",
      "Git & GitHub",
    ],
  },
  {
    name: "Communication",
    description: "Making findings land with any audience.",
    skills: [
      "Data Storytelling",
      "Research Presentations",
      "PowerPoint",
      "Math Tutoring",
      "Content Creation",
      "Adobe Premiere Pro",
    ],
  },
];

export type Experience = {
  org: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    org: "Hack at UCI",
    role: "Logistical Organizer",
    period: "Apr 2026 – Present",
    bullets: [
      "Coordinate participant recruitment, mentor outreach, and event logistics for ZotHacks 2026, a beginner-friendly hackathon.",
      "Helped run a day-long hackathon at VenusHacks, supporting participant engagement and on-site coordination.",
    ],
  },
  {
    org: "Edupark Tutor",
    role: "Mathematics Tutor",
    period: "Oct 2025 – Present",
    bullets: [
      "Led 20+ one-on-one sessions, adapting lesson plans on the spot to each student's learning style and materials.",
      "Taught across mathematics disciplines from trigonometry and statistics to AP Calculus BC.",
    ],
  },
  {
    org: "Filipinx Undergraduate Scientist-Engineers",
    role: "Treasury Intern",
    period: "Jan 2026 – May 2026",
    bullets: [
      "Selected as 1 of 13 interns from 40+ applicants to support finances for two projects, a 350+ member paid membership program, fundraisers, and reimbursements.",
      "Oversaw $5,000+ in retreat expenditures across two events for leadership and 70+ club members.",
    ],
  },
  {
    org: "Kits and Kaboodles",
    role: "President",
    period: "Apr 2022 – May 2025",
    bullets: [
      "Led fundraising and service initiatives that raised $1,000+ for hospital charities and produced 200+ care packages.",
      "Secured an $800 NASSP Student Service Grant by developing and presenting the organization's community-service initiative.",
    ],
  },
];

export const education = {
  school: "University of California, Irvine",
  college: "School of Physical Sciences",
  degree: "B.S. Applied Mathematics, Concentration in Data Science",
  minor: "Minor in Computer Science",
  graduation: "Expected June 2029",
  gpa: "3.41 GPA",
  coursework: ["Python for Data Science (Math 10)", "Probability (Math 130A)"],
};

export const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
