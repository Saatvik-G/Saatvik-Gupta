export interface Project {
  name: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
  category: "Full-Stack" | "AI & Data Science" | "Utilities";
  status?: "Shipped" | "In-Progress";
  roadmap?: string;
}

export const PROJECTS: Project[] = [
  {
    name: "EcoTrace — Carbon Footprint Platform",
    description: "A personal carbon footprint tracking platform built with HTML/CSS/JS. Features an interactive dashboard, activity logging, Chart.js analytics, AI coaching, and offline caching via localStorage.",
    tags: ["HTML5", "CSS3", "JavaScript", "Chart.js", "localStorage"],
    githubUrl: "https://github.com/Saatvik-G/Carbon-Footprint-Awareness-Platform",
    liveUrl: "https://saatvik-g.github.io/Carbon-Footprint-Awareness-Platform/",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    category: "Utilities",
    status: "Shipped"
  },
  {
    name: "Task Tracker Board",
    description: "An interactive task workspace with columns, categorization, status toggles, priority tags, and statistics dashboards. Keeps data synced locally for seamless client-side planning.",
    tags: ["HTML5", "CSS3", "JavaScript", "localStorage"],
    githubUrl: "https://github.com/Saatvik-G/Task-Tracker.git",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    category: "Utilities",
    status: "Shipped"
  },
  {
    name: "Jack&Trades",
    description: "An AI ecosystem for cross-disciplinary discovery, currently being actively built with Next.js, TypeScript, Tailwind CSS, and the Gemini API, following a six-phase roadmap.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Gemini API"],
    githubUrl: "https://github.com/Saatvik-G/Jack-Trades.git",
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    category: "Full-Stack",
    status: "In-Progress",
    roadmap: "Phase 1: Architecture Development"
  },
  {
    name: "EchoVerse (Music Recommendation)",
    description: "An AI-powered music recommendation app (no audio playback) using the Last.fm API, MusicBrainz, and the OpenAI API, being built in three sequential phases.",
    tags: ["OpenAI API", "Last.fm API", "MusicBrainz API", "Next.js"],
    githubUrl: "https://github.com/Saatvik-G/Music-Recommendation.git",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    category: "AI & Data Science",
    status: "In-Progress",
    roadmap: "Phase 1: API Integrations"
  },
  {
    name: "Plagiarism Checker",
    description: "An algorithm-driven text analysis tool calculating document similarity ratios using TF-IDF vectorization and cosine similarity to compare multiple files and flag similarities.",
    tags: ["Python", "NLTK", "Flask", "NLP"],
    githubUrl: "https://github.com/Saatvik-G/Plagiarism-Checker",
    gradient: "from-red-500/20 via-amber-500/10 to-transparent",
    category: "Utilities",
    status: "Shipped"
  },
  {
    name: "Mean-Variance-Std Dev Calculator",
    description: "A mathematical statistics tool built with NumPy that converts array streams into 3x3 matrices, calculating values of mean, variance, standard deviation, max, min, and sum across rows and columns.",
    tags: ["Python", "NumPy", "Data Science"],
    githubUrl: "https://github.com/Saatvik-G/Mean-Variance-St.-Deviation-Calculator",
    gradient: "from-yellow-500/20 via-orange-500/10 to-transparent",
    category: "Utilities",
    status: "Shipped"
  },
  {
    name: "Cryptographic Encoder-Decoder",
    description: "A security utility program implementing customizable cryptography keys to encode and decode sensitive text messages, keeping calculations local and secure.",
    tags: ["Python", "Cryptography", "Security"],
    githubUrl: "https://github.com/Saatvik-G/Encoder-Decoder",
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    category: "Utilities",
    status: "Shipped"
  },
  {
    name: "Random Password Generator",
    description: "A high-security client-side web utility that generates cryptographically secure, randomized keys. Users can customize length, caps, numbers, and symbols.",
    tags: ["HTML5", "CSS3", "JavaScript", "Security"],
    githubUrl: "https://github.com/Saatvik-G/Random-Password-Generator",
    gradient: "from-fuchsia-500/20 via-pink-500/10 to-transparent",
    category: "Utilities",
    status: "Shipped"
  },
  {
    name: "Snake-Water-Gun Game",
    description: "An interactive game of Snake-Water-Gun featuring a gameplay session loop, score statistics tracking, and interactive computer selection rules.",
    tags: ["Python", "Algorithms", "Game Dev"],
    githubUrl: "https://github.com/Saatvik-G/Snake-Water-Gun-Game",
    gradient: "from-green-500/20 via-emerald-500/10 to-transparent",
    category: "Utilities",
    status: "Shipped"
  }
];
