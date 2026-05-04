interface TechItem {
  name: string;
  logo: string;
  color: string;
}

const TechStack = () => {
  const technologies: TechItem[] = [
    { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg", color: "bg-blue-600/10" },
    { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg", color: "bg-blue-400/10" },
    { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-plain.svg", color: "bg-purple-600/10" },
    { name: "GitLab CI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-plain.svg", color: "bg-orange-600/10" },
    { name: "OpenStack", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openstack/openstack-plain.svg", color: "bg-red-600/10" },
    { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg", color: "bg-yellow-600/10" },
    { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg", color: "bg-orange-500/10" },
    { name: "n8n", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg", color: "bg-indigo-600/10" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", color: "bg-slate-700/10" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg", color: "bg-green-600/10" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg", color: "bg-green-500/10" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg", color: "bg-amber-600/10" },
    { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-plain.svg", color: "bg-blue-500/10" },
    { name: "Ansible", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ansible/ansible-plain.svg", color: "bg-red-700/10" },
    { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-plain.svg", color: "bg-red-600/10" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", color: "bg-cyan-600/10" },
  ];

  return (
    <div className="w-full">
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="group relative flex flex-col items-center gap-2 p-3 rounded-lg glass hover:border-primary/50 hover:-translate-y-1 transition-all"
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
            <span className="text-xs font-medium text-center leading-tight max-w-full truncate">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
