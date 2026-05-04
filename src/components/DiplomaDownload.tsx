import { Button } from "@/components/ui/button";
import { Download, Award } from "lucide-react";

interface Diploma {
  degree: string;
  school: string;
  year: string;
  filename: string;
}

const diplomas: Diploma[] = [
  {
    degree: "Engineering Degree in Computer Science",
    school: "ESPRIT, Tunis",
    year: "2024",
    filename: "ING-diploma.png",
  },
  {
    degree: "Bachelor's Degree in Networks & Telecommunications",
    school: "ISSAT Mateur",
    year: "2021",
    filename: "licence-diploma.png",
  },
];

const DiplomaDownload = () => {
  const downloadDiploma = (filename: string) => {
    const link = document.createElement("a");
    link.href = `/${filename}`;
    link.download = filename;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Award size={20} className="text-primary" />
        <h3 className="font-semibold text-lg">Diplomas</h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {diplomas.map((diploma) => (
          <div key={diploma.filename} className="glass rounded-lg overflow-hidden hover:-translate-y-1 transition-all">
            {/* Diploma Image */}
            <div className="relative bg-background/50 aspect-square overflow-hidden">
              <img 
                src={`/${diploma.filename}`}
                alt={diploma.degree}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            </div>
            
            {/* Diploma Info */}
            <div className="p-4 space-y-3">
              <div>
                <h4 className="font-semibold text-foreground">
                  {diploma.degree}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {diploma.school} · {diploma.year}
                </p>
              </div>
              <Button
                onClick={() => downloadDiploma(diploma.filename)}
                variant="outline"
                size="sm"
                className="w-full gap-2"
              >
                <Download size={16} />
                Download
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiplomaDownload;
