import { useEffect, useRef, useState } from 'react';

interface TechItem {
  name: string;
  logo: string;
  gradient: string;
}

const TechStack = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const technologies: TechItem[] = [
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg", gradient: "from-blue-600 to-blue-400" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg", gradient: "from-blue-500 to-cyan-400" },
    { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-plain.svg", gradient: "from-purple-600 to-purple-400" },
    { name: "GitLab CI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-plain.svg", gradient: "from-orange-600 to-red-500" },
    { name: "OpenStack", logo: "https://www.openstack.org/assets/logo/openstack-logo.png", gradient: "from-red-600 to-orange-500" },
    { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg", gradient: "from-yellow-500 to-orange-400" },
    { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg", gradient: "from-orange-500 to-yellow-400" },
    { name: "n8n", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg", gradient: "from-indigo-600 to-purple-500" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", gradient: "from-slate-800 to-slate-600" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg", gradient: "from-green-600 to-emerald-500" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg", gradient: "from-green-500 to-teal-400" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aws/aws-plain.svg", gradient: "from-amber-600 to-yellow-500" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-plain.svg", gradient: "from-blue-600 to-cyan-500" },
    { name: "Ansible", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-plain.svg", gradient: "from-red-700 to-red-500" },
    { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-plain.svg", gradient: "from-red-600 to-orange-500" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", gradient: "from-cyan-600 to-blue-500" },
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

      @keyframes shimmer {
        0%, 100% {
          filter: brightness(1);
        }
        50% {
          filter: brightness(1.2);
        }
      }

      .carousel-inner {
        animation: autoScroll 30s linear infinite;
      }

      .carousel-inner:hover {
        animation-play-state: paused;
      }

      .tech-card {
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        background: linear-gradient(135deg, var(--gradient-from), var(--gradient-to));
        position: relative;
        overflow: hidden;
      }

      .tech-card::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3), transparent 70%);
        transform: translateX(-100%);
        animation: shine 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }

      .tech-card:hover::before {
        animation: shine 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }

      @keyframes shine {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(100%);
        }
      }

      .tech-card:hover {
        transform: translateY(-8px) scale(1.05);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      }

      .tech-logo {
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        transition: transform 0.3s ease;
      }

      .tech-card:hover .tech-logo {
        transform: scale(1.1) rotate(5deg);
      }

      .tech-label {
        transition: all 0.3s ease;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      .tech-card:hover .tech-label {
        color: #fff;
        font-weight: bold;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-r from-background via-background/80 to-background">
      <div 
        className="py-8 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="carousel-inner flex gap-4 will-change-transform">
          {displayTechnologies.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="tech-card flex flex-shrink-0 flex-col items-center justify-center gap-3 px-6 py-4 rounded-xl shadow-lg cursor-pointer backdrop-blur"
              style={{
                '--gradient-from': `rgb(${index % 2 === 0 ? '59, 130, 246' : '168, 85, 247'})`,
                '--gradient-to': `rgb(${index % 3 === 0 ? '34, 197, 94' : index % 3 === 1 ? '249, 115, 22' : '59, 130, 246'})`,
              } as React.CSSProperties}
              title={tech.name}
            >
              <div className="relative">
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="tech-logo h-10 w-10 object-contain"
                  loading="lazy"
                />
              </div>
              <span className="tech-label text-xs font-semibold text-white text-center leading-tight whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlays for smooth fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
    </div>
  );
};

export default TechStack;
