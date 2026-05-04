import { Button } from "@/components/ui/button";
import { Download, Award, Image as ImageIcon } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Diploma {
  degree: string;
  school: string;
  year: string;
  filename: string;
  degreeEn?: string;
  schoolEn?: string;
}

const diplomas: Diploma[] = [
  {
    degree: "Diplôme d'Ingénieur en Informatique",
    school: "ESPRIT, Tunis",
    year: "2024",
    filename: "ING-diploma.png",
    degreeEn: "Engineering Degree in Computer Science",
    schoolEn: "ESPRIT, Tunis",
  },
  {
    degree: "Licence en Réseaux & Télécoms",
    school: "ISSAT Mateur",
    year: "2021",
    filename: "licence-diploma.png",
    degreeEn: "Bachelor's Degree in Networks & Telecommunications",
    schoolEn: "ISSAT Mateur",
  },
];

const DiplomaDownload = () => {
  const { language } = useLanguage();

  const downloadDiploma = (filename: string) => {
    const link = document.createElement("a");
    link.href = `/diplomas/${filename}`;
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
        <h3 className="font-semibold text-lg">
          {language === "en" ? "Diplomas" : "Diplômes"}
        </h3>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {diplomas.map((diploma) => (
          <div key={diploma.filename} className="glass rounded-lg overflow-hidden hover:-translate-y-1 transition-all">
            {/* Diploma Image */}
            <div className="relative bg-background/50 aspect-square overflow-hidden">
              <img 
                src={`/diplomas/${diploma.filename}`}
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
                  {language === "en" ? diploma.degreeEn : diploma.degree}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {language === "en" ? diploma.schoolEn : diploma.school} · {diploma.year}
                </p>
              </div>
              <Button
                onClick={() => downloadDiploma(diploma.filename)}
                variant="outline"
                size="sm"
                className="w-full gap-2"
              >
                <Download size={16} />
                {language === "en" ? "Download" : "Télécharger"}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiplomaDownload;
