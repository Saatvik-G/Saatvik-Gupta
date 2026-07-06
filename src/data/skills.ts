export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const SKILL_GROUPS: SkillCategory[] = [
  {
    title: "Cloud & Architecture",
    description: "Designing scalable, secure, and reliable virtual systems.",
    skills: ["Amazon Web Services (AWS)", "Google Cloud Platform", "Cloud Computing", "Solutions Architecture", "Cloud Infrastructure"],
  },
  {
    title: "AI & Machine Learning",
    description: "Training model architectures and integrating intelligence.",
    skills: ["Artificial Intelligence", "Machine Learning", "Generative AI", "Google Cloud AI", "LLM Architecture", "BERT Fine-Tuning", "Prompt Engineering"],
  },
  {
    title: "Data Science & Analytics",
    description: "Processing list data streams and building calculations.",
    skills: ["Data Science", "Data Analytics", "Python", "Pandas", "NumPy", "Chart.js", "Data Visualization", "Data Storytelling", "Predictive Modeling", "SQL"],
  },
  {
    title: "Cybersecurity & Privacy",
    description: "Auditing compliance and protecting digital operations.",
    skills: ["Cybersecurity", "Penetration Testing", "Incident Response", "Security Awareness", "AI Privacy Engineering"],
  },
  {
    title: "Software Engineering",
    description: "Building modern APIs and pipelines.",
    skills: ["JavaScript", "HTML5", "CSS3", "REST API", "Apache Kafka", "GitHub Actions", "Software Testing", "Data Modeling"],
  },
];
