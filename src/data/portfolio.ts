import joltImg from "@/assets/projects/jolt-cv.jpg";
import careerImg from "@/assets/projects/careertn.jpg";
import ecomImg from "@/assets/projects/ecommerce.jpg";
import visiImg from "@/assets/projects/visigate.jpg";

import devopsImg from "@/assets/services/devops.jpg";
import monitoringImg from "@/assets/services/monitoring.jpg";
import testingImg from "@/assets/services/testing.jpg";
import mernImg from "@/assets/services/mern.jpg";
import cloudImg from "@/assets/services/cloud.jpg";

export const projects = [
  {
    id: "jolt-cv-platform",
    title: "Jolt CV Platform",
    image: joltImg,
    description:
      "Led a team to build a cloud-native CV platform with JWT-based RBAC, increasing user engagement by 30%.",
    fullDescription:
      "A comprehensive cloud-native CV platform designed to streamline the job application process. Implemented JWT-based role-based access control (RBAC) for secure access management. The platform was containerized with Docker and deployed on OpenStack infrastructure. Key achievements include a 30% increase in user engagement through improved UX and API performance optimization.",
    tags: ["Next.js", "Node.js", "Docker", "OpenStack", "JWT", "React"],
    role: "Lead Engineer",
    duration: "Feb - Aug 2024",
    company: "Eyeotech",
    keyFeatures: [
      "JWT-based authentication and RBAC system",
      "Cloud-native architecture with Docker containers",
      "OpenStack deployment and management",
      "Responsive React frontend",
      "RESTful API with Node.js/Express backend",
      "MongoDB database integration"
    ],
    results: [
      "30% increase in user engagement",
      "Reduced load times by 45%",
      "Implemented zero-downtime deployments"
    ],
    technologies: ["React", "Next.js", "Node.js", "Docker", "Kubernetes", "MongoDB", "JWT"],
  },
  {
    id: "careertn-migration",
    title: "CareerTN Microservices Migration",
    image: careerImg,
    description:
      "Migrated a monolithic career platform to Spring Boot microservices, reducing API latency by 75%.",
    fullDescription:
      "Successfully architected and led the migration of a legacy monolithic application to a modern microservices architecture using Spring Boot. The migration resulted in significant performance improvements, better system scalability, and improved team development velocity. Implemented API Gateway pattern and service discovery using Eureka.",
    tags: ["Spring Boot", "Microservices", "Kubernetes", "API Gateway", "Java"],
    role: "Backend Engineer",
    duration: "Ongoing",
    company: "Eyeotech",
    keyFeatures: [
      "Spring Boot microservices architecture",
      "API Gateway for routing and load balancing",
      "Service-to-service communication via gRPC",
      "Kubernetes orchestration and auto-scaling",
      "Distributed tracing with Jaeger",
      "Event-driven communication with Kafka"
    ],
    results: [
      "75% reduction in API latency",
      "Improved system scalability by 5x",
      "20% improvement in deployment frequency",
      "98% uptime achieved"
    ],
    technologies: ["Spring Boot", "Java", "Kubernetes", "Docker", "Kafka", "PostgreSQL"],
  },
  {
    id: "ecommerce-webapp",
    title: "E-commerce Web App",
    image: ecomImg,
    description:
      "Full-stack MERN e-commerce platform with secure authentication, admin dashboard, and payment integration.",
    fullDescription:
      "A complete MERN stack e-commerce solution featuring a modern, responsive UI, secure user authentication with JWT, comprehensive admin dashboard for inventory management, and integrated payment processing. The application handles complex operations including order management, product catalog, and user profile management.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Stripe"],
    role: "Full-Stack Developer",
    duration: "3 months",
    company: "Personal Project",
    keyFeatures: [
      "User authentication and authorization",
      "Product catalog with advanced filtering",
      "Shopping cart and order management",
      "Admin dashboard for analytics",
      "Stripe payment integration",
      "Responsive design with Tailwind CSS"
    ],
    results: [
      "Reduced checkout time by 40%",
      "Improved conversion rate by 25%",
      "Supporting 10k+ concurrent users"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe API"],
  },
  {
    id: "visigate-platform",
    title: "Visigate — Visit Management",
    image: visiImg,
    description:
      "Visitor management platform with role-based access control (Super Admin, Admin, Agent) for real-time tracking.",
    fullDescription:
      "A comprehensive visitor management system designed for enterprise security and operations teams. Features a sophisticated role-based access control system with three user tiers (Super Admin, Admin, Agent), real-time visitor tracking, check-in/check-out management, and comprehensive reporting capabilities. The platform prioritizes security, user experience, and operational efficiency.",
    tags: ["React", "Node.js", "MongoDB", "RBAC", "Real-time", "Socket.io"],
    role: "Full-Stack Developer",
    duration: "2 months",
    company: "Personal Project",
    keyFeatures: [
      "Three-tier role-based access control",
      "Real-time visitor tracking with WebSockets",
      "Automated check-in/check-out system",
      "Visitor pass generation",
      "Comprehensive reporting and analytics",
      "Mobile-responsive interface"
    ],
    results: [
      "Reduced check-in time from 5 min to 1 min",
      "99.9% system uptime",
      "Managing 500+ daily visitors"
    ],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "Chart.js"],
  },
];

export const services = [
  {
    id: "devops-infrastructure",
    title: "DevOps & Infrastructure",
    image: devopsImg,
    description: "CI/CD pipelines, infrastructure automation, and cloud-native deployments",
    points: [
      "CI/CD pipeline implementation using GitLab CI/CD and Jenkins",
      "Infrastructure automation with Terraform and Ansible",
      "Cloud-native and on-premises deployments (OpenStack, AWS, Azure, Proxmox, vSphere)",
      "Containerization and orchestration with Docker and Kubernetes",
    ],
  },
  {
    id: "cloud-monitoring",
    title: "Cloud Monitoring & Reliability",
    image: monitoringImg,
    description: "Comprehensive monitoring, alerting, and SLA tracking",
    points: [
      "Monitoring with Prometheus, Grafana, ELK Stack and Zabbix",
      "Custom alert systems for performance and health checks",
      "Log aggregation and visualization for proactive issue detection",
      "Uptime tracking and SLA reporting",
    ],
  },
  {
    id: "testing-automation",
    title: "Testing & Automation",
    image: testingImg,
    description: "Comprehensive testing strategies and automation frameworks",
    points: [
      "Automated unit and integration testing for APIs and microservices",
      "Pipeline-integrated testing coverage (e.g., Jest, Mocha, Pytest)",
      "Load testing and performance optimization",
      "End-to-end testing with Selenium and Cypress",
    ],
  },
  {
    id: "mern-development",
    title: "MERN Stack Development",
    image: mernImg,
    description: "Full-stack web application development with modern tooling",
    points: [
      "Build responsive UIs with React.js and modern tooling",
      "Create secure backend APIs using Node.js and Express",
      "Design schemas with MongoDB and Mongoose",
      "Integrate JWT-based authentication and role access",
    ],
  },
  {
    id: "cloud-architecture",
    title: "Cloud Architecture Consulting",
    image: cloudImg,
    description: "Strategic cloud infrastructure design and optimization",
    points: [
      "Architecture review and migration planning to cloud platforms",
      "Cost optimization and right-sizing recommendations",
      "Security best practices and compliance",
      "Disaster recovery and high-availability strategies",
    ],
  },
];

export const hobbies = [
  {
    role: "Esports Team Coordinator",
    company: "JSK Esports",
    type: "Part-time · Hybrid",
    location: "Tunisia",
    period: "Oct 2024 — Present",
    description:
      "Coordinating one of Tunisia's leading esports organizations across operations, communication, player management and competitive performance across multiple games.",
    bullets: [
      "Coordinated daily esports team operations: practice schedules, scrim planning and tournament participation across multiple titles",
      "Main communication bridge between 15+ players, coaching staff, sponsors and external tournament organizers",
      "Organized and supervised 20+ scrims and official matches with flawless execution and compliance",
      "Managed technical infrastructure: gaming PCs, Discord servers, streaming setup, OBS configuration and network connectivity",
      "Led community growth initiatives increasing social media presence by 1,800+ followers and engagement by 40%",
      "Contributed to team strategy discussions, roster decisions and operational improvements",
      "Ensured 100% compliance with tournament rules, schedules and competitive integrity standards",
      "Supported tournament organization and player coaching on meta analysis and competitive standards"
    ],
    skills: ["Esports Management", "Team Coordination", "Event Organization", "Community Growth", "Technical Support", "Strategic Planning"],
    achievements: [
      { stat: "20+", label: "Scrims supervised" },
      { stat: "15+", label: "Active players" },
      { stat: "1.8k+", label: "Community growth" },
      { stat: "12", label: "Tournaments organized" }
    ]
  },
];

export const experiences = [
  {
    role: "DevOps Engineer",
    company: "Eyeotech",
    type: "Full-time",
    location: "Tunisia",
    period: "Sep 2024 — Present",
    description: "Implemented GitLab CI pipelines, reducing deployment time by 50%. Managed Kubernetes clusters and maintained 98% uptime across infrastructure.",
    bullets: [
      "Built and maintained GitLab CI/CD pipelines reducing deployment time by 50%",
      "Managed Kubernetes clusters with 98% uptime",
      "Automated infrastructure with Terraform and Ansible",
    ],
    skills: ["GitLab CI/CD", "Kubernetes", "Docker", "Terraform"],
  },
  {
    role: "PFE Intern — Platform Development",
    company: "Eyeotech",
    type: "Internship",
    location: "Tunisia",
    period: "Feb — Aug 2024",
    description: "Built a cloud-native CV platform using Next.js and Node.js, containerized with Docker and deployed on OpenStack.",
    bullets: [],
    skills: ["Next.js", "Node.js", "Docker", "OpenStack"],
  },
  {
    role: "System Optimization Intern",
    company: "Focus",
    type: "Internship",
    location: "Tunisia",
    period: "Jul — Sep 2021",
    description: "Boosted system efficiency by 20% using Harbor and vROps. Managed virtual environments to optimize resource allocation.",
    bullets: [],
    skills: ["Harbor", "vROps", "Virtualization"],
  },
  {
    role: "Remote Monitoring Intern",
    company: "OEP",
    type: "Internship",
    location: "Tunisia",
    period: "Apr — Jun 2021",
    description: "Deployed monitoring solutions reducing downtime by 15%. Configured alert systems for critical infrastructure health.",
    bullets: [],
    skills: ["Monitoring", "Alerting"],
  },
  {
    role: "IT Support Intern",
    company: "Leoni Mateur",
    type: "Internship",
    location: "Tunisia",
    period: "Aug — Sep 2020",
    description: "Reduced network issues by 25% and supported over 50 end-users through technical troubleshooting.",
    bullets: [],
    skills: ["IT Support", "Networking"],
  },
  {
    role: "Service Improvement Intern",
    company: "Tunisie Telecom",
    type: "Internship",
    location: "Tunisia",
    period: "Jul — Sep 2019",
    description: "Improved service quality processes and contributed to telecom infrastructure analysis.",
    bullets: [],
    skills: ["Telecom", "Process improvement"],
  },
];

export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "SQL", "Bash"],
  "DevOps & Cloud": ["Docker", "Kubernetes", "Terraform", "Ansible", "GitLab CI/CD", "Jenkins", "OpenStack", "Azure", "AWS"],
  "Monitoring": ["Prometheus", "Grafana", "ELK", "Zabbix"],
  "Web & Frameworks": ["React", "Next.js", "Node.js", "Express", "Spring Boot", "MongoDB"],
  "Automation": ["n8n", "Make", "Workflow automation"],
};

export const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
  { name: "Microsoft Azure Fundamentals (AZ-900)", issuer: "Microsoft", year: "2023" },
  { name: "Docker & Kubernetes Essentials", issuer: "Linux Foundation", year: "2023" },
  { name: "GitLab CI/CD Specialist", issuer: "GitLab", year: "2024" },
  { name: "n8n Workflow Automation", issuer: "n8n.io", year: "2025" },
  { name: "Prometheus & Grafana Monitoring", issuer: "CNCF", year: "2024" },
];

export const education = [
  {
    school: "ESPRIT — École Sup. Privée d'Ingénierie et de Technologies",
    degree: "Diplôme d'Ingénieur — Génie Logiciel & Cloud",
    period: "2021 — 2024",
    location: "Tunis, Tunisia",
  },
];

export const testimonials = [
  {
    quote: "Nourhene rebuilt our deployment pipeline from scratch — what used to take hours now ships in minutes. Rare blend of rigor and speed.",
    name: "Tech Lead",
    role: "Eyeotech",
  },
  {
    quote: "Beyond a coordinator, she's the operational backbone of JSK Esports. Players, sponsors and staff all run smoother because of her work.",
    name: "Team Manager",
    role: "JSK Esports",
  },
  {
    quote: "She delivered our n8n automation suite ahead of schedule and with documentation we actually understood. Highly recommended.",
    name: "Product Owner",
    role: "Independent client",
  },
];

export const faqs = [
  { q: "What kind of projects do you take on?", a: "Cloud-native infrastructure, CI/CD pipelines, n8n automations and full-stack MERN/Next.js apps. I also advise teams on observability and reliability." },
  { q: "Do you work remotely?", a: "Yes — I work remotely worldwide and on-site within Tunisia. Most engagements run async with weekly syncs." },
  { q: "What is your typical engagement length?", a: "From 2-week sprints for focused automations to multi-month engineering retainers for platform & DevOps work." },
  { q: "Can you collaborate with my existing team?", a: "Absolutely. I integrate with your existing repos, board and rituals — Git/GitLab, Jira/Linear, Slack/Discord." },
];
