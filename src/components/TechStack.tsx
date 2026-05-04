import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TechItem {
  name: string;
  logo: string;
  color: string;
}

const TechStack = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="w-full">
      <div className="relative group">
        <div
          ref={scrollRef}
          className="flex gap-3 overflow-x-auto pb-2 scroll-smooth scrollbar-hide"
          style={{ scrollBehavior: 'smooth' }}
        >
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-shrink-0 flex-col items-center gap-2 p-3 rounded-lg glass hover:border-primary/50 hover:-translate-y-1 transition-all"
              title={tech.name}
            >
              <div className={`${tech.color} rounded-lg p-3 h-12 w-12 flex items-center justify-center`}>
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="h-8 w-8 object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-xs font-medium text-center leading-tight whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
        {/* Carousel Controls */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 p-2 rounded-full bg-gradient-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 p-2 rounded-full bg-gradient-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity z-10"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default TechStack;
