import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const CVDownload = () => {
  const downloadCV = (lang: "en" | "fr") => {
    const fileMap = {
      en: "Nourhene_CHALGHOUMI_EN.pdf",
      fr: "Nourhene_CHALGHOUMI_FR.pdf"
    };
    
    const fileName = fileMap[lang];
    const link = document.createElement("a");
    link.href = `/${fileName}`;
    link.download = fileName;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <FileText size={18} className="text-primary" />
        <h3 className="font-semibold">Download CV</h3>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={() => downloadCV("en")}
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <Download size={16} />
          English (PDF)
        </Button>
        <Button
          onClick={() => downloadCV("fr")}
          variant="outline"
          size="sm"
          className="gap-2"
        >
          <Download size={16} />
          Français (PDF)
        </Button>
      </div>
    </div>
  );
};

export default CVDownload;
