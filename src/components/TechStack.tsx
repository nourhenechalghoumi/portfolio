import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TechItem {
  name: string;
  logo: string;
  color: string;
}

const TechStack = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const technologies: TechItem[] = [
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg", color: "bg-blue-600/10" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg", color: "bg-blue-400/10" },
    { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-plain.svg", color: "bg-purple-600/10" },
    { name: "GitLab CI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-plain.svg", color: "bg-orange-600/10" },
    { name: "OpenStack", logo: "https://www.openstack.org/assets/logo/openstack-logo.png", color: "bg-red-600/10" },
    { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg", color: "bg-yellow-600/10" },
    { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg", color: "bg-orange-500/10" },
    { name: "n8n", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg", color: "bg-indigo-600/10" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", color: "bg-slate-700/10" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg", color: "bg-green-600/10" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg", color: "bg-green-500/10" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aws/aws-plain.svg", color: "bg-amber-600/10" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-plain.svg", color: "bg-blue-500/10" },
    { name: "Ansible", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-plain.svg", color: "bg-red-700/10" },
    { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-plain.svg", color: "bg-red-600/10" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "bg-cyan-600/10" },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Add CSS animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes slideIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-8px);
        }
      }

      @keyframes glow {
        0%, 100% {
          box-shadow: 0 0 0 rgba(59, 130, 246, 0);
        }
        50% {
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
      }

      .tech-card {
        animation: slideIn 0.5s ease-out forwards;
      }

      .tech-card:hover {
        animation: float 2s ease-in-out infinite;
      }

      .tech-logo-box {
        transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .tech-card:hover .tech-logo-box {
        animation: glow 1.5s ease-in-out infinite;
      }

      .carousel-btn {
        transition: all 0.3s ease;
      }

      .carousel-btn:hover {
        transform: scale(1.1);
        box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
      }

      .carousel-btn:active {
        transform: scale(0.95);
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="w-full">
      <style>{`
        .tech-card:nth-child(1) { animation-delay: 0.05s; }
        .tech-card:nth-child(2) { animation-delay: 0.1s; }
        .tech-card:nth-child(3) { animation-delay: 0.15s; }
        .tech-card:nth-child(4) { animation-delay: 0.2s; }
        .tech-card:nth-child(5) { animation-delay: 0.25s; }
        .tech-card:nth-child(6) { animation-delay: 0.3s; }
        .tech-card:nth-child(7) { animation-delay: 0.35s; }
        .tech-card:nth-child(8) { animation-delay: 0.4s; }
        .tech-card:nth-child(9) { animation-delay: 0.45s; }
        .tech-card:nth-child(10) { animation-delay: 0.5s; }
        .tech-card:nth-child(11) { animation-delay: 0.55s; }
        .tech-card:nth-child(12) { animation-delay: 0.6s; }
        .tech-card:nth-child(13) { animation-delay: 0.65s; }
        .tech-card:nth-child(14) { animation-delay: 0.7s; }
        .tech-card:nth-child(15) { animation-delay: 0.75s; }
        .tech-card:nth-child(16) { animation-delay: 0.8s; }
      `}</style>

      <div className="relative group">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-2 scroll-smooth scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="tech-card flex flex-shrink-0 flex-col items-center gap-2 p-3 rounded-lg glass hover:border-primary/50 transition-all duration-300 cursor-pointer"
              title={tech.name}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className={`tech-logo-box ${tech.color} rounded-lg p-3 h-12 w-12 flex items-center justify-center border border-transparent hover:border-primary/30`}>
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="h-8 w-8 object-contain transition-transform duration-300 hover:scale-110"
                  loading="lazy"
                />
              </div>
              <span className={`text-xs font-medium text-center leading-tight whitespace-nowrap transition-colors duration-300 ${hoveredTech === tech.name ? 'text-primary font-semibold' : 'text-muted-foreground'}`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={() => scroll('left')}
          className="carousel-btn absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:shadow-lg"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="carousel-btn absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-gradient-to-l from-primary to-primary/80 text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 hover:shadow-lg"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TechStack;
