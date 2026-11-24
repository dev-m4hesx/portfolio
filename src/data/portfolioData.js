export const personalInfo = {
  name: "MAHESH RAJ",
  greeting: "Hello, I'm",
  roles: "UX/UI DESIGNER & BACKEND ARCHITECT",
  subroles: "UX/UI DESIGNER • BACKEND ENGINEER • DIGITAL CREATOR",
  bio: "I design and build stylish, user-focused digital experiences that combine pixel-perfect visual craft with resilient, scalable backend engineering. Passionate about sleek interfaces, event-driven microservices, and details that make a profound difference.",
  status: "AVAILABLE FOR FREELANCE & CONTRACT",
  statusWorldwide: "AVAILABLE WORLDWIDE",
  sparkleText: "Turning complex backend systems into powerful, intuitive digital experiences.",
  heroPortrait: "/mahesh-cutout-rim.png",
  stats: [
    { value: "2", label: "YEARS OF EXPERIENCE" },
    { value: "21+", label: "PROJECTS COMPLETED" },
    { value: "99.9%", label: "SYSTEM UPTIME RELIABILITY" },
    { value: "20+", label: "HAPPY CLIENTS" }
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science & Interaction Design",
      institution: "Binus University / Tech Institute",
      period: "2019 - 2023"
    },
    {
      degree: "Google Professional UI/UX Certification",
      institution: "Google Career Certificates",
      period: "2023"
    },
    {
      degree: "Distributed Systems & Cloud Architecture",
      institution: "AWS Certified Solutions Architect",
      period: "2024"
    }
  ],
  skills: {
    design: [
      "Web Design", "UI/UX Design", "Figma", "Framer",
      "Design Systems", "Prototyping", "User Research", "Adobe Suite"
    ],
    backend: [
      "Node.js / Express", "Python / FastAPI", "PostgreSQL", "Redis Caching",
      "REST & GraphQL APIs", "Microservices", "Docker / K8s", "Database Optimization"
    ],
    frontend: [
      "React.js", "TypeScript", "Tailwind CSS", "GSAP / Framer Motion",
      "Next.js", "State Management", "Web Vitals", "Accessibility (a11y)"
    ]
  },
  processSteps: [
    {
      number: "01",
      iconName: "Search",
      title: "DISCOVER & AUDIT",
      description: "Deconstructing core user mental models, technical constraints, business requirements, and edge cases."
    },
    {
      number: "02",
      iconName: "Compass",
      title: "SYSTEM ARCHITECTURE",
      description: "Planning database schemas, API contracts, domain boundaries, and wireframe user journeys."
    },
    {
      number: "03",
      iconName: "PenTool",
      title: "HIGH-FIDELITY DESIGN",
      description: "Crafting atmospheric design tokens, micro-interactions, responsive layouts, and typographic rhythm."
    },
    {
      number: "04",
      iconName: "Code2",
      title: "FULL-STACK DEVELOPMENT",
      description: "Building fast, type-safe frontends paired with resilient, containerized backend services."
    },
    {
      number: "05",
      iconName: "Send",
      title: "DELIVER & OPTIMIZE",
      description: "Automated end-to-end testing, CI/CD pipeline deployment, load testing, and continuous polish."
    }
  ],
  philosophy: {
    quote: "Good design is not just how it looks, but how it works — and scales seamlessly under real-world loads.",
    author: "Mahesh Raj",
    ctaText: "LET'S CREATE SOMETHING GREAT TOGETHER."
  },
  contact: {
    email: "mahesxraj@gmail.com",
    gmailComposeUrl: "https://mail.google.com/mail/?view=cm&fs=1&to=mahesxraj@gmail.com&su=Project%20Inquiry%20for%20Mahesh%20Raj",
    website: "www.maheshraj.com",
    github: {
      username: "dev-m4hesx",
      url: "https://github.com/dev-m4hesx"
    },
    location: "Jakarta, Indonesia • Worldwide Remote",
    instagram: {
      handle: "@m4.hex_",
      url: "https://instagram.com/m4.hex_",
      followers: "14.8K",
      postsCount: "128",
      bio: "Crafting intuitive UX/UI design & scalable backend architectures. Sharing design systems & engineering tips.",
      recentPosts: [
        {
          id: 1,
          type: "UI Concept",
          title: "Dark Minimalist FinTech Dashboard",
          likes: "1,240",
          imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
          tag: "Figma • UI/UX"
        },
        {
          id: 2,
          type: "Backend Flow",
          title: "Distributed Payment Orchestration Engine",
          likes: "980",
          imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
          tag: "Architecture • Go"
        },
        {
          id: 3,
          type: "Design System",
          title: "Tokenized Crimson & Onyx Component Kit",
          likes: "1,520",
          imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
          tag: "Tokens • CSS"
        },
        {
          id: 4,
          type: "Interaction",
          title: "Smooth Kinetic Drawer & Elastic Hover",
          likes: "2,110",
          imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
          tag: "Motion • GSAP"
        }
      ]
    }
  }
};

export const projectsData = [
  {
    id: "01",
    title: "VELOCE BIKES",
    subtitle: "E-COMMERCE WEBSITE",
    category: "Full-Stack",
    description: "An ultra-sleek, aerodynamic digital storefront for custom high-end carbon bicycles. Powered by a decoupled Node.js/PostgreSQL inventory sync service with sub-50ms query latency and interactive 360-degree configurator.",
    image: "/project-veloce.jpg",
    tags: ["UI/UX", "E-Commerce", "Node.js", "PostgreSQL", "Web3D"],
    role: "Lead Product Designer & Backend Architect",
    deliverables: ["Full Design System", "High-Fidelity 3D Configurator", "Event-Driven Order Queue", "Stripe Integration"],
    metrics: "+148% Conversion Rate, 42ms p95 API Latency",
    liveUrl: "https://velocebikes.demo",
    githubUrl: "https://github.com/rayhan/veloce-platform"
  },
  {
    id: "02",
    title: "WOODCRAFT",
    subtitle: "FURNITURE WEBSITE",
    category: "UI/UX",
    description: "Architectural e-commerce for artisanal Scandinavian furniture. Focused on deliberate spatial layout, editorial typography hierarchy, and a lightning-fast headless backend delivering zero cumulative layout shifts.",
    image: "/project-woodcraft.jpg",
    tags: ["Design System", "Editorial UX", "Headless CMS", "Micro-Interactions"],
    role: "UX Researcher & Design Director",
    deliverables: ["User Journey Wireframes", "Component Library", "Sub-second Page Speeds", "Custom Checkout Flow"],
    metrics: "100/100 Lighthouse Performance, 3.2x Time on Site",
    liveUrl: "https://woodcraft-artisans.demo",
    githubUrl: "https://github.com/rayhan/woodcraft-experience"
  },
  {
    id: "03",
    title: "URBANIC",
    subtitle: "FASHION MAGAZINE",
    category: "Full-Stack",
    description: "A bold, dark-brutalist fashion editorial platform. Pairs high-contrast typography with a high-throughput video/image transcoding pipeline on Cloudflare Workers and AWS S3.",
    image: "/project-urbanic.jpg",
    tags: ["Dark Brutalism", "Kinetic Typography", "Video Pipeline", "AWS S3 / Edge"],
    role: "UX/UI Designer & Cloud Engineer",
    deliverables: ["Editorial Layouts", "Automated Image Transcoding", "Dynamic Reader Analytics", "Dark Mode Theming"],
    metrics: "8.4M Monthly Active Reads, 60fps Smooth Scroll",
    liveUrl: "https://urbanic-magazine.demo",
    githubUrl: "https://github.com/rayhan/urbanic-platform"
  },
  {
    id: "04",
    title: "NEXUS PAY",
    subtitle: "FINTECH ENGINE & ARCHITECTURE",
    category: "Backend",
    description: "Mission-critical financial infrastructure with double-entry cryptographic ledger and instant fraud anomaly detection. Designed with high-density data visualizations that simplify complex transaction chains.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
    tags: ["Distributed Systems", "FinTech UI", "Go / Python", "Kafka", "Data Viz"],
    role: "Principal Systems Designer",
    deliverables: ["PCI-DSS Compliant Gateway", "Real-Time Transaction Stream", "High-Density Analytics UX", "Tokenized Webhooks"],
    metrics: "99.999% Service Uptime, 25k TPS Throughput",
    liveUrl: "https://nexuspay-systems.demo",
    githubUrl: "https://github.com/rayhan/nexus-fintech"
  }
];
