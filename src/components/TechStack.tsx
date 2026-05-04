import { 
  Kubernetes, 
  Docker, 
  Cloud, 
  GitBranch, 
  Monitor, 
  LineChart, 
  Database, 
  Code2, 
  Zap,
  Shield,
  Box,
  Workflow
} from "lucide-react";

interface TechItem {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const TechStack = () => {
  const technologies: TechItem[] = [
    { name: "Kubernetes", icon: <Kubernetes className="w-full h-full" />, color: "bg-blue-600/20" },
    { name: "Docker", icon: <Docker className="w-full h-full" />, color: "bg-blue-400/20" },
    { name: "Terraform", icon: <Box className="w-full h-full" />, color: "bg-purple-600/20" },
    { name: "GitLab CI", icon: <GitBranch className="w-full h-full" />, color: "bg-orange-600/20" },
    { name: "OpenStack", icon: <Cloud className="w-full h-full" />, color: "bg-red-600/20" },
    { name: "Prometheus", icon: <Monitor className="w-full h-full" />, color: "bg-yellow-600/20" },
    { name: "Grafana", icon: <LineChart className="w-full h-full" />, color: "bg-orange-500/20" },
    { name: "n8n", icon: <Workflow className="w-full h-full" />, color: "bg-indigo-600/20" },
    { name: "Next.js", icon: <Code2 className="w-full h-full" />, color: "bg-slate-700/20" },
    { name: "Node.js", icon: <Zap className="w-full h-full" />, color: "bg-green-600/20" },
    { name: "MongoDB", icon: <Database className="w-full h-full" />, color: "bg-green-500/20" },
    { name: "AWS", icon: <Cloud className="w-full h-full" />, color: "bg-amber-600/20" },
    { name: "Azure", icon: <Cloud className="w-full h-full" />, color: "bg-blue-500/20" },
    { name: "Ansible", icon: <Workflow className="w-full h-full" />, color: "bg-red-700/20" },
    { name: "Jenkins", icon: <Shield className="w-full h-full" />, color: "bg-red-600/20" },
    { name: "React", icon: <Code2 className="w-full h-full" />, color: "bg-cyan-600/20" },
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
            <div className={`${tech.color} rounded-lg p-3 h-10 w-10 flex items-center justify-center text-primary/80`}>
              {tech.icon}
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
