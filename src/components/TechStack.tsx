import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TechItem {
  name: string;
  logo: string;
  color: string;
}

const TechStack = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const technologies: TechItem[] = [
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg", color: "bg-blue-600" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg", color: "bg-blue-400" },
    { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-plain.svg", color: "bg-purple-600" },
    { name: "GitLab CI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-plain.svg", color: "bg-orange-600" },
    { name: "OpenStack", logo: "https://www.openstack.org/assets/logo/openstack-logo.png", color: "bg-red-600" },
    { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg", color: "bg-yellow-600" },
    { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg", color: "bg-orange-500" },
    { name: "n8n", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg", color: "bg-indigo-600" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", color: "bg-slate-900" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg", color: "bg-green-600" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg", color: "bg-green-500" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aws/aws-plain.svg", color: "bg-amber-600" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-plain.svg", color: "bg-blue-500" },
    { name: "Ansible", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-plain.svg", color: "bg-red-700" },
    { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-plain.svg", color: "bg-red-600" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "bg-cyan-500" },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 240;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="w-full py-4">
      <div className="relative group/carousel">
        {/* Main Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2 scroll-smooth scrollbar-hide"
        >
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group flex flex-shrink-0 flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5"
              title={tech.name}
            >
              {/* Logo Container */}
              <div className={`relative w-14 h-14 rounded-lg ${tech.color} flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:scale-110 group-hover:-rotate-6`}>
                {/* Shine effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className="h-8 w-8 object-contain filter drop-shadow-sm relative z-10"
                  loading="lazy"
                />
              </div>

              {/* Label */}
              <span className="text-xs font-semibold text-center leading-tight whitespace-nowrap opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-foreground opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110 active:scale-95"
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} />
        </button>
        
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-foreground opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110 active:scale-95"
          aria-label="Scroll right"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Gradient fade indicators */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background via-background/50 to-transparent pointer-events-none rounded-l-lg" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background via-background/50 to-transparent pointer-events-none rounded-r-lg" />
    </div>
  );
};

export default TechStack;
