import { useParams, useNavigate } from "react-router-dom";
import { projects } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project not found</h1>
          <Button onClick={() => navigate("/projects")}>Back to Projects</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate("/projects")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-xl mb-8 shadow-lg"
          />
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
          
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div>
              <p className="text-sm text-muted-foreground">Role</p>
              <p className="font-semibold">{project.role}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Company</p>
              <p className="font-semibold">{project.company}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Duration</p>
              <p className="font-semibold">{project.duration}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Team</p>
              <p className="font-semibold">3-5 people</p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {project.fullDescription}
          </p>
        </div>

        {/* Tags */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.keyFeatures.map((feature, idx) => (
              <Card key={idx} className="p-4 border border-border">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground">{feature}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Results & Impact */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {project.results.map((result, idx) => (
              <Card key={idx} className="p-6 border border-primary/20 bg-primary/5">
                <p className="text-center font-semibold text-foreground">{result}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 mb-12">
          <Button size="lg" className="gap-2">
            <Github className="w-4 h-4" />
            View Source Code
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
