import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CVDownload = () => {
  const { language } = useLanguage();

  const downloadCV = (lang: "en" | "fr") => {
    const fileName = lang === "en" 
      ? "CV_Nourhene_Chalgoumi_EN.txt"
      : "CV_Nourhene_Chalgoumi_FR.txt";
    
    const link = document.createElement("a");
    link.href = `//${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-semibold">Download CV</h3>
      <div className="flex gap-2">
        <Button
          onClick={() => downloadCV("en")}
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <Download size={16} />
          English
        </Button>
        <Button
          onClick={() => downloadCV("fr")}
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <Download size={16} />
          Français
        </Button>
      </div>
    </div>
  );
};

export default CVDownload;
