import { useEffect, useRef, useState } from 'react';

interface TechItem {
  name: string;
  logo: string;
  color: string;
}

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const technologies: TechItem[] = [
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg", color: "from-blue-600 to-blue-400" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg", color: "from-blue-500 to-cyan-400" },
    { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-plain.svg", color: "from-purple-600 to-purple-400" },
    { name: "GitLab CI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-plain.svg", color: "from-orange-600 to-red-500" },
    { name: "OpenStack", logo: "https://www.openstack.org/assets/logo/openstack-logo.png", color: "from-red-600 to-red-400" },
    { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg", color: "from-yellow-600 to-yellow-400" },
    { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg", color: "from-orange-500 to-orange-300" },
    { name: "n8n", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg", color: "from-indigo-600 to-indigo-400" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", color: "from-slate-800 to-slate-600" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg", color: "from-green-600 to-green-400" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg", color: "from-green-500 to-emerald-400" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aws/aws-plain.svg", color: "from-amber-600 to-yellow-500" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-plain.svg", color: "from-blue-500 to-cyan-400" },
    { name: "Ansible", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-plain.svg", color: "from-red-700 to-red-500" },
    { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-plain.svg", color: "from-red-600 to-orange-500" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "from-cyan-500 to-blue-400" },
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Handle mouse parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMouseX((e.clientX - rect.left - rect.width / 2) / 50);
      setMouseY((e.clientY - rect.top - rect.height / 2) / 50);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Add CSS animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotateZ(0deg); }
        50% { transform: translateY(-8px) rotateZ(2deg); }
      }

      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
        50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
      }

      @keyframes shimmer {
        0% { background-position: -1000px 0; }
        100% { background-position: 1000px 0; }
      }

      .tech-card {
        animation: float 3s ease-in-out infinite;
        transform-style: preserve-3d;
      }

      .tech-card:hover {
        animation: float 2s ease-in-out infinite;
      }

      .tech-logo {
        transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
      }

      .tech-card:hover .tech-logo {
        animation: pulse-glow 1.5s ease-in-out infinite;
        filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.8));
      }

      .carousel-container {
        perspective: 1000px;
      }

      .carousel-track {
        transform-style: preserve-3d;
        transition: transform 0.1s linear;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const angle = 360 / technologies.length;
  const radius = 280;

  return (
    <div 
      ref={containerRef}
      className="carousel-container w-full flex items-center justify-center py-12 md:py-16"
      style={{
        perspective: '1000px',
        transform: `rotateX(${mouseY}deg) rotateY(${mouseX}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      <div 
        className="carousel-track relative"
        style={{
          width: '500px',
          height: '500px',
          transformStyle: 'preserve-3d',
          transform: `rotateY(${rotation}deg)`,
        }}
      >
        {technologies.map((tech, index) => {
          const currentAngle = (index * angle) * (Math.PI / 180);
          const x = Math.cos(currentAngle) * radius;
          const z = Math.sin(currentAngle) * radius;

          return (
            <div
              key={tech.name}
              className="tech-card absolute w-28 h-28 flex flex-col items-center justify-center"
              style={{
                transformStyle: 'preserve-3d',
                transform: `
                  rotateY(${index * angle}deg)
                  translateZ(${radius}px)
                  rotateY(-${index * angle}deg)
                `,
                left: '50%',
                top: '50%',
                marginLeft: '-56px',
                marginTop: '-56px',
              }}
            >
              <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-2xl border border-white/20 backdrop-blur-md`}>
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="tech-logo w-12 h-12 object-contain filter drop-shadow-lg"
                  loading="lazy"
                />
              </div>
              <span className="mt-3 text-xs font-semibold text-center whitespace-nowrap text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </div>
          );
        })}
      </div>

      {/* Center indicator */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-24 h-24 rounded-full border-2 border-primary/30 opacity-40" />
        <div className="absolute w-3 h-3 rounded-full bg-gradient-primary animate-pulse" />
      </div>

      {/* Info text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <p className="text-xs text-muted-foreground font-mono">
          Move mouse to explore · Technologies rotate automatically
        </p>
      </div>
    </div>
  );
};

export default TechStack;
