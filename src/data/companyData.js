export const companyData = {
  name: "Micro Soar Technologies",
  shortName: "Macrosoar",
  tagline: "Architecting Next-Generation Digital Realities",
  description: "We are an elite software innovation foundry crafting enterprise platforms, autonomous AI systems, and high-velocity cloud infrastructures for tomorrow's market leaders.",
  stats: [
    { value: 120, suffix: "+", label: "Completed Projects", description: "Delivered on-time worldwide" },
    { value: 99.8, suffix: "%", label: "Client Satisfaction", description: "Consistently rated 5-stars" },
    { value: 15, suffix: "M+", label: "Active Users Served", description: "Across global deployed apps" },
    { value: 24, suffix: "/7", label: "Mission-Critical Support", description: "Guaranteed SLA uptime" }
  ],
  services: [
    {
      id: "ai-systems",
      title: "Autonomous AI & Intelligent Systems",
      icon: "Cpu",
      description: "Harness LLM orchestration, predictive analytics, computer vision, and cognitive neural networks engineered to automate enterprise workflows.",
      features: ["Custom LLM Agent Pipelines", "Predictive Machine Learning", "Real-time Neural Analysis", "Enterprise AI Governance"],
      gradient: "from-cyan-500/20 to-blue-600/20",
      accent: "text-cyan-400"
    },
    {
      id: "cloud-engineering",
      title: "Cloud Infrastructure & DevOps",
      icon: "Cloud",
      description: "Zero-downtime, hyper-scalable cloud architectures built on Kubernetes, AWS, and GCP with automated CI/CD and multi-region resilience.",
      features: ["Kubernetes Microservices", "Terraform Infrastructure as Code", "Global CDN & Low-Latency Routing", "Edge Compute Workloads"],
      gradient: "from-blue-500/20 to-indigo-600/20",
      accent: "text-blue-400"
    },
    {
      id: "fullstack-platforms",
      title: "Next-Gen Web & Mobile Platforms",
      icon: "Globe",
      description: "Ultra-responsive, high-performance web applications and native cross-platform mobile experiences with sleek 60fps micro-interactions.",
      features: ["React 19 & Next.js Platforms", "Cross-Platform Mobile Apps", "GraphQL & High-Throughput APIs", "Progressive Web Apps (PWA)"],
      gradient: "from-indigo-500/20 to-purple-600/20",
      accent: "text-indigo-400"
    },
    {
      id: "cyber-security",
      title: "Zero-Trust & Cyber Defense",
      icon: "ShieldCheck",
      description: "Fortify digital assets with enterprise-grade Zero-Trust architectures, cryptographically secure audit logs, and continuous automated pentesting.",
      features: ["Zero-Trust Architecture", "SOC2 & GDPR Compliance", "Vulnerability & Threat Modeling", "Continuous Security Scanning"],
      gradient: "from-purple-500/20 to-pink-600/20",
      accent: "text-purple-400"
    },
    {
      id: "fintech-blockchain",
      title: "FinTech & Distributed Systems",
      icon: "Boxes",
      description: "Institutional-grade financial engines, real-time algorithmic settlement pipelines, smart contract protocols, and asset tokenization.",
      features: ["High-Frequency Settlement Engines", "Smart Contract Engineering", "Multi-Currency Liquidity Gateways", "Audit & Fault-Tolerant ledgers"],
      gradient: "from-pink-500/20 to-rose-600/20",
      accent: "text-pink-400"
    },
    {
      id: "product-design",
      title: "Spatial & Futuristic UI/UX Design",
      icon: "Sparkles",
      description: "Design languages that captivate. Ergonomic interaction models, dark-mode first design systems, 3D product visualizations, and fluid motion design.",
      features: ["Interactive Design Systems", "3D & Canvas Experiences", "Micro-interaction Choreography", "Comprehensive Usability Labs"],
      gradient: "from-cyan-500/20 to-emerald-600/20",
      accent: "text-emerald-400"
    }
  ],
  projects: [
    {
      id: "nexus-ai",
      title: "Nexus Core AI Platform",
      category: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      description: "A real-time cognitive enterprise platform monitoring multi-datacenter telemetries and predicting operational anomalies 48 hours in advance.",
      tech: ["React", "Python", "PyTorch", "TailwindCSS", "FastAPI"],
      metrics: "99.98% Anomaly Detection Rate",
      liveUrl: "https://macrosoar.com"
    },
    {
      id: "orbit-fintech",
      title: "Orbital Global Liquidity Engine",
      category: "Fintech & Web3",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80",
      description: "High-frequency cross-border transaction network processing over 120,000 TPS with sub-second finality and quantum-resistant cryptography.",
      tech: ["Rust", "TypeScript", "Next.js", "Docker", "Zero-Knowledge"],
      metrics: "120K+ Transactions / Sec",
      liveUrl: "https://macrosoar.com"
    },
    {
      id: "vortex-cloud",
      title: "Vortex Spatial Digital Twin",
      category: "Enterprise Cloud & 3D",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      description: "Interactive real-time 3D simulation platform for automated smart factories, connecting thousands of IoT edge nodes with millisecond telemetry.",
      tech: ["Three.js", "React 19", "Go", "WebSockets", "Kubernetes"],
      metrics: "3.4ms Real-time Latency",
      liveUrl: "https://macrosoar.com"
    },
    {
      id: "synapse-health",
      title: "Synapse MedTech Ecosystem",
      category: "Healthcare & AI",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80",
      description: "HIPAA-compliant diagnostic intelligence system assisting oncologists with neural image segmentation and personalized patient treatment pathways.",
      tech: ["React Native", "Node.js", "TensorFlow", "PostgreSQL", "AWS"],
      metrics: "140+ Hospital Implementations",
      liveUrl: "https://macrosoar.com"
    }
  ],
  technologies: [
    { name: "React 19", category: "Frontend", level: "98%", icon: "Atom" },
    { name: "TypeScript", category: "Language", level: "96%", icon: "Code2" },
    { name: "Next.js", category: "Framework", level: "95%", icon: "Layers" },
    { name: "Python / AI", category: "Intelligence", level: "94%", icon: "Brain" },
    { name: "Kubernetes", category: "DevOps", level: "92%", icon: "Server" },
    { name: "Node.js", category: "Backend", level: "95%", icon: "Terminal" },
    { name: "Rust", category: "Systems", level: "88%", icon: "Cpu" },
    { name: "Tailwind CSS", category: "Styling", level: "99%", icon: "Palette" },
    { name: "PostgreSQL", category: "Database", level: "93%", icon: "Database" },
    { name: "AWS Cloud", category: "Cloud", level: "94%", icon: "Cloud" },
    { name: "GraphQL", category: "API", level: "91%", icon: "Share2" },
    { name: "Docker", category: "Containers", level: "95%", icon: "Box" }
  ],
  whyChooseUs: [
    {
      title: "Speed to Market with High Velocity",
      description: "Our battle-tested continuous delivery pipelines turn intricate product architectures into deployed production applications up to 3x faster.",
      icon: "Zap"
    },
    {
      title: "Obsession with Code Quality & Scale",
      description: "Every line of software undergoes rigorous automated testing, static analysis, and cryptographic security benchmarking before merging.",
      icon: "CheckCircle2"
    },
    {
      title: "Elite Multidisciplinary Engineers",
      description: "Work directly with top-tier product architects, AI researchers, and cloud veterans who proactively solve architectural bottlenecks.",
      icon: "Award"
    },
    {
      title: "Transparent & Agile Partnership",
      description: "Weekly milestone demonstrations, shared asynchronous dashboards, and continuous progress visibility with zero hidden complexities.",
      icon: "Clock"
    }
  ],
  testimonials: [
    {
      quote: "Micro Soar Technologies elevated our enterprise stack from legacy friction to a blindingly fast, AI-augmented powerhouse. Their speed and design finesse are unrivaled in the industry.",
      author: "Marcus Vance",
      title: "Chief Technology Officer",
      company: "Apex Global FinCorp",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
      rating: 5
    },
    {
      quote: "The team delivered our autonomous analytics portal two weeks ahead of schedule. The user interface looks like it was plucked right out of 2030, and client engagement jumped 180%.",
      author: "Elena Rostova",
      title: "VP of Product Engineering",
      company: "Hyperion Dynamics",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=250&q=80",
      rating: 5
    },
    {
      quote: "Their mastery of microservices and real-time cloud architectures resolved our scaling hurdles during Black Friday traffic surges without a single second of downtime.",
      author: "David Chen",
      title: "Founder & CEO",
      company: "OmniCart Commerce",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
      rating: 5
    }
  ]
};
