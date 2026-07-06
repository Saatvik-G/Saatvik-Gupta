export interface Certification {
  title: string;
  issuer: string;
  date: string;
  category: "Cloud" | "AI & ML" | "Data" | "Software Eng" | "Cybersecurity";
}

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Google Cloud Generative AI Leader: ML Lifecycle & Google Cloud Tools",
    issuer: "Infosys Springboard",
    date: "June 2026",
    category: "AI & ML"
  },
  {
    title: "Data Analysis with Python (300 hrs)",
    issuer: "freeCodeCamp",
    date: "April 2026",
    category: "Data"
  },
  {
    title: "Tata GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    date: "February 2026",
    category: "Data"
  },
  {
    title: "JPMorgan Chase Software Engineering Job Simulation",
    issuer: "Forage",
    date: "January 2026",
    category: "Software Eng"
  },
  {
    title: "British Airways Data Science Job Simulation",
    issuer: "Forage",
    date: "July 2026",
    category: "Data"
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    issuer: "Forage",
    date: "June 2026",
    category: "Data"
  },
  {
    title: "AWS Solutions Architecture Job Simulation",
    issuer: "Forage",
    date: "January 2026",
    category: "Cloud"
  },
  {
    title: "Goldman Sachs Operations Job Simulation",
    issuer: "Forage",
    date: "January 2026",
    category: "Software Eng"
  },
  {
    title: "AIGP: AI Privacy Engineering, Sensitive Data & Controller Obligations",
    issuer: "Infosys Springboard",
    date: "June 2026",
    category: "Cybersecurity"
  },
  {
    title: "AI Fundamentals: Foundations for Understanding AI",
    issuer: "IBM SkillsBuild",
    date: "June 2026",
    category: "AI & ML"
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco Networking Academy",
    date: "February 2026",
    category: "Data"
  },
  {
    title: "Commonwealth Bank Introduction to Cybersecurity",
    issuer: "Forage",
    date: "April 2026",
    category: "Cybersecurity"
  },
  {
    title: "Quantium Software Engineering Job Simulation",
    issuer: "Forage",
    date: "June 2026",
    category: "Software Eng"
  },
  {
    title: "Innovating with Google Cloud AI",
    issuer: "Google Cloud",
    date: "February 2026",
    category: "AI & ML"
  },
  {
    title: "Wells Fargo Software Engineering Job Simulation",
    issuer: "Forage",
    date: "July 2026",
    category: "Software Eng"
  },
  {
    title: "AWS Internship Training",
    issuer: "Internship Studio",
    date: "April 2026",
    category: "Cloud"
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "August 2025",
    category: "Data"
  }
];
