import { useEffect, useRef, useState } from 'react';

interface TechItem {
  name: string;
  logo: string;
}

const TechStack = () => {
  const [isHovered, setIsHovered] = useState(false);

  const technologies: TechItem[] = [
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" },
    { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-plain.svg" },
    { name: "GitLab CI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-plain.svg" },
    { name: "OpenStack", logo: "https://blog.mingdao.com/wp-content/uploads/2020/10/2.png" },
    { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg" },
    { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg" },
    { name: "n8n", logo: "https://cdn.raiolanetworks.com/blog/wp-content/uploads/n8n.png?width=599&height=599" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-plain.svg" },
    { name: "Ansible", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-original.svg" },
    { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-plain.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  ];

  // Duplicate array for seamless infinite scroll
  const displayTechnologies = [...technologies, ...technologies];

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes autoScroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      .carousel-inner {
        animation: autoScroll 40s linear infinite;
      }

      .carousel-inner:hover {
        animation-play-state: paused;
      }

      .tech-card {
        transition: all 0.3s ease;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      .tech-card:hover {
        transform: translateY(-6px);
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.2);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
      }

      .tech-logo {
        transition: transform 0.3s ease;
        opacity: 0.8;
      }

      .tech-card:hover .tech-logo {
        transform: scale(1.1);
        opacity: 1;
      }

      .tech-label {
        transition: all 0.3s ease;
        opacity: 0.7;
      }

      .tech-card:hover .tech-label {
        opacity: 1;
        color: #fff;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="w-full relative overflow-hidden">
      <div 
        className="py-6 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="carousel-inner flex gap-6 will-change-transform">
          {displayTechnologies.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="tech-card flex flex-shrink-0 flex-col items-center justify-center gap-3 px-5 py-4 rounded-lg backdrop-blur cursor-pointer"
              title={tech.name}
            >
              <img 
                src={tech.logo} 
                alt={tech.name}
                className="tech-logo h-9 w-9 object-contain"
                loading="lazy"
              />
              <span className="tech-label text-xs font-medium text-center leading-tight whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default TechStack;
