import { Button } from "@/components/ui/button";
import { Download, Award } from "lucide-react";
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
    filename: "diplome-ingenieur-esprit-2024.pdf",
    degreeEn: "Engineering Degree in Computer Science",
    schoolEn: "ESPRIT, Tunis",
  },
  {
    degree: "Licence en Réseaux & Télécoms",
    school: "ISSAT Mateur",
    year: "2021",
    filename: "diplome-bachelor-issat-2021.pdf",
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
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Award size={20} className="text-primary" />
        <h3 className="font-semibold text-lg">
          {language === "en" ? "Diplomas" : "Diplômes"}
        </h3>
      </div>
      <div className="space-y-3">
        {diplomas.map((diploma) => (
          <div key={diploma.filename} className="glass rounded-lg p-4 flex items-start justify-between gap-4">
            <div className="flex-1">
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
              className="gap-2 shrink-0"
            >
              <Download size={16} />
              {language === "en" ? "Download" : "Télécharger"}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiplomaDownload;
