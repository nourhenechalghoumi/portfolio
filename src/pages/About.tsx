import profile from "@/assets/profile.jpg";
import { Download, GraduationCap, MapPin, Briefcase, Languages, Sparkles } from "lucide-react";

const About = () => (
  <>
    <section className="container py-12">
      <p className="font-mono text-sm text-primary mb-2">// about me</p>
      <h1 className="font-display text-5xl md:text-6xl font-bold leading-[1.05]">
        A builder at the <span className="text-gradient">intersection</span> of cloud, code & community.
      </h1>
    </section>

    <section className="container grid lg:grid-cols-3 gap-10 py-10">
      <div className="lg:col-span-1">
        <div className="sticky top-28">
          <div className="glass rounded-3xl p-3">
            <img src={profile} alt="Nourhene Chalghoumi" className="rounded-2xl w-full aspect-square object-cover" width={500} height={500} />
          </div>
          <div className="mt-6 space-y-3 text-sm">
            <p className="flex items-center gap-2 text-muted-foreground"><MapPin size={16} className="text-primary" /> Bizerte, Tunisia</p>
            <p className="flex items-center gap-2 text-muted-foreground"><Briefcase size={16} className="text-primary" /> Cloud & DevOps Engineer</p>
            <p className="flex items-center gap-2 text-muted-foreground"><Languages size={16} className="text-primary" /> Arabic · French · English</p>
          </div>
          <a
            href="/cv-nourhene-chalghoumi-fr.pdf"
            download
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg hover:scale-105 transition-transform"
          >
            <Download size={18} /> Télécharger mon CV
          </a>
        </div>
      </div>

      <div className="lg:col-span-2 space-y-8 text-lg leading-relaxed text-muted-foreground">
        <p>
          I'm <span className="text-foreground font-semibold">Nourhene Chalghoumi</span>, a Cloud & DevOps Engineer based in Tunisia. I've spent the last few years engineering reliable infrastructure, shipping production-grade web platforms, and helping teams move faster through automation.
        </p>
        <p>
          At <span className="text-foreground font-semibold">Eyeotech</span>, I build CI/CD pipelines, run Kubernetes clusters and maintain 98% uptime across our environments. I also led the engineering of <span className="text-foreground">Jolt</span>, a cloud-native CV platform deployed on OpenStack.
        </p>
        <p>
          Outside of pure engineering, I'm the <span className="text-primary font-semibold">Esports Team Coordinator at JSK Esports</span> — one of Tunisia's most active esports organizations. I coordinate scrims, tournaments, communication, technical setup and brand growth across our community.
        </p>
        <p>
          I love working at the seam between systems and people — whether that's automating a deployment with n8n and Terraform, or coordinating a roster across timezones for a tournament weekend.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 pt-4">
          <div className="glass rounded-2xl p-6">
            <GraduationCap className="text-primary mb-3" />
            <h3 className="font-display font-bold text-foreground">Engineering Degree</h3>
            <p className="text-sm mt-1">ESPRIT — Software & Cloud Engineering</p>
          </div>
          <div className="glass rounded-2xl p-6">
            <Briefcase className="text-primary mb-3" />
            <h3 className="font-display font-bold text-foreground">5+ years</h3>
            <p className="text-sm mt-1">Across DevOps, full-stack & operations</p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
