import jskImg from "@/assets/projects/jsk-esports.jpg";
import joltImg from "@/assets/projects/jolt-cv.jpg";
import careerImg from "@/assets/projects/careertn.jpg";
import ecomImg from "@/assets/projects/ecommerce.jpg";
import visiImg from "@/assets/projects/visigate.jpg";

import devopsImg from "@/assets/services/devops.jpg";
import monitoringImg from "@/assets/services/monitoring.jpg";
import testingImg from "@/assets/services/testing.jpg";
import mernImg from "@/assets/services/mern.jpg";
import cloudImg from "@/assets/services/cloud.jpg";
import n8nImg from "@/assets/services/n8n.jpg";

export const projects = [
  {
    title: "JSK Esports — Official Website",
    image: jskImg,
    description:
      "Designed and shipped the official website for JSK Esports, featuring team rosters, tournament calendars, live match coverage and sponsor visibility. Built for performance and a strong brand identity.",
    tags: ["Next.js", "Tailwind", "CMS", "Performance"],
    role: "Web Developer & Coordinator",
    link: "#",
  },
  {
    title: "Jolt CV Platform",
    image: joltImg,
    description:
      "Led a team to build a cloud-native CV platform with JWT-based RBAC, increasing user engagement by 30%. Containerized with Docker and deployed on OpenStack.",
    tags: ["Next.js", "Node.js", "Docker", "OpenStack", "JWT"],
    role: "Lead Engineer",
  },
  {
    title: "CareerTN Microservices Migration",
    image: careerImg,
    description:
      "Migrated a monolithic career platform to a Spring Boot microservices architecture, reducing API latency by 75% and improving scalability and team velocity.",
    tags: ["Spring Boot", "Microservices", "Kubernetes", "API Gateway"],
    role: "Backend Engineer",
  },
  {
    title: "E-commerce Web App",
    image: ecomImg,
    description:
      "Built a full-stack MERN e-commerce platform with secure user authentication, admin dashboard, product management and shopping cart with Stripe-style checkout.",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    role: "Full-Stack Developer",
  },
  {
    title: "Visigate — Visit Management",
    image: visiImg,
    description:
      "Comprehensive visitor management platform with role-based access control (Super Admin, Admin, Agent) for enhanced security and real-time visitor tracking.",
    tags: ["React", "Node.js", "RBAC", "Real-time"],
    role: "Full-Stack Developer",
  },
];

export const services = [
  {
    title: "DevOps & Infrastructure",
    image: devopsImg,
    points: [
      "CI/CD pipeline implementation using GitLab CI/CD and Jenkins",
      "Infrastructure automation with Terraform and Ansible",
      "Cloud-native and on-premises deployments (OpenStack, AWS, Azure, Proxmox, vSphere)",
      "Containerization and orchestration with Docker and Kubernetes",
    ],
  },
  {
    title: "N8N Workflow Automation",
    image: n8nImg,
    points: [
      "Design and deploy custom n8n workflows to automate repetitive business tasks",
      "Integrate APIs, databases, CRM, email and Slack into unified pipelines",
      "Self-hosted n8n on Docker / Kubernetes with secure credentials management",
      "AI-powered automations (LLMs, scraping, data enrichment, reports)",
    ],
  },
  {
    title: "Cloud Monitoring & Reliability",
    image: monitoringImg,
    points: [
      "Monitoring with Prometheus, Grafana, ELK Stack and Zabbix",
      "Custom alert systems for performance and health checks",
      "Log aggregation and visualization for proactive issue detection",
      "Uptime tracking and SLA reporting",
    ],
  },
  {
    title: "MERN Stack Development",
    image: mernImg,
    points: [
      "Build responsive UIs with React.js and modern tooling",
      "Create secure backend APIs using Node.js and Express",
      "Design schemas with MongoDB and Mongoose",
      "Integrate JWT-based authentication and role access",
    ],
  },
  {
    title: "Testing & Automation",
    image: testingImg,
    points: [
      "Automated unit and integration testing for APIs and microservices",
      "Pipeline-integrated testing coverage (Jest, Mocha, Vitest)",
      "Load testing and performance optimization",
      "End-to-end testing strategies",
    ],
  },
  {
    title: "Cloud Architecture Consulting",
    image: cloudImg,
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
    period: "Oct 2024 — Present · 1 yr 8 mos",
    description:
      "Coordinating one of Tunisia's leading esports organizations across operations, communication and competitive performance.",
    bullets: [
      "Coordinated daily esports team operations: practice schedules, match planning and tournament participation",
      "Acted as the main communication bridge between players, coaching staff and external partners",
      "Organized and supervised scrims, official matches and competitive events with smooth execution",
      "Supported technical setup and troubleshooting (gaming environments, Discord, streaming tools, connectivity)",
      "Collaborated on community management and brand growth, increasing visibility across social platforms",
      "Contributed to team strategy discussions and operational improvements",
      "Ensured compliance with tournament rules, schedules and competitive standards",
    ],
    skills: ["Management", "Esports Operations", "Communication", "Event Coordination", "Community"],
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
  {
    school: "IPEIB — Institut Préparatoire aux Études d'Ingénieurs",
    degree: "Cycle préparatoire — Mathématiques-Physique",
    period: "2019 — 2021",
    location: "Bizerte, Tunisia",
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
