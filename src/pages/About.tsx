import profile from "@/assets/profile.jpg";
import { Download, GraduationCap, MapPin, Briefcase, Languages, Award, Calendar, Mail, Phone } from "lucide-react";
import { certifications, education } from "@/data/portfolio";

const values = [
  { t: "Reliability first", d: "Systems that survive Friday at 5pm. SLAs aren't aspirations — they're contracts." },
  { t: "Automate the boring", d: "If it runs more than twice, it deserves a pipeline or an n8n workflow." },
  { t: "Build with care", d: "Documentation, observability and rollback strategies are not afterthoughts." },
  { t: "People over process", d: "Whether it's a roster or a dev team, communication unblocks everything." },
];

const About = () => (
  <>
    <section className="container py-12 md:py-16">
      <p className="font-mono text-sm text-primary mb-2">// about me</p>
      <h1 className="font-display text-6xl md:text-8xl font-semibold leading-[0.95]">
        At the <em className="text-gradient">intersection</em><br />
        of cloud, code &amp; community.
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
            <p className="flex items-center gap-2 text-muted-foreground"><Briefcase size={16} className="text-primary" /> Cloud &amp; DevOps Engineer</p>
            <p className="flex items-center gap-2 text-muted-foreground"><Languages size={16} className="text-primary" /> Arabic · French · English</p>
            <p className="flex items-center gap-2 text-muted-foreground"><Mail size={16} className="text-primary" /> nourhene.chalgoumi@esprit.tn</p>
            <p className="flex items-center gap-2 text-muted-foreground"><Phone size={16} className="text-primary" /> +216 58 939 003</p>
          </div>
          <a
            href="/cv-nourhene-chalghoumi-fr.pdf"
            download
            className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg hover:scale-105 transition-transform"
          >
            <Download size={18} /> Télécharger CV (FR)
          </a>
        </div>
      </div>

      <div className="lg:col-span-2 space-y-8 text-lg leading-relaxed text-muted-foreground">
        <p className="text-2xl text-foreground/90 font-display italic leading-snug">
          "I build systems people can trust — and teams that ship like they mean it."
        </p>
        <p>
          I'm <span className="text-foreground font-semibold">Nourhene Chalghoumi</span>, a Cloud &amp; DevOps Engineer based in Tunisia. I've spent the last few years engineering reliable infrastructure, shipping production-grade web platforms, and helping teams move faster through automation.
        </p>
        <p>
          At <span className="text-foreground font-semibold">Eyeotech</span>, I build CI/CD pipelines, run Kubernetes clusters and maintain 98% uptime across our environments. I also led the engineering of <span className="text-foreground">Jolt</span>, a cloud-native CV platform deployed on OpenStack, and migrated CareerTN from monolith to microservices reducing API latency by 75%.
        </p>
        <p>
          Outside of pure engineering, I'm the <span className="text-primary font-semibold">Esports Team Coordinator at JSK Esports</span> — one of Tunisia's most active esports organizations. I coordinate scrims, tournaments, communication, technical setup and brand growth across our community.
        </p>
        <p>
          I love working at the seam between systems and people — whether that's automating a deployment with n8n and Terraform, or coordinating a roster across timezones for a tournament weekend.
        </p>

        {/* Values */}
        <div className="pt-6">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-6">What I value</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.t} className="glass rounded-2xl p-6">
                <h3 className="font-grotesk font-bold text-foreground mb-2">{v.t}</h3>
                <p className="text-sm leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="pt-6">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <GraduationCap className="text-primary" /> Education
          </h2>
          <div className="space-y-4">
            {education.map((e) => (
              <div key={e.school} className="glass rounded-2xl p-6">
                <div className="flex flex-wrap gap-3 text-xs font-mono text-muted-foreground mb-2">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {e.period}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {e.location}</span>
                </div>
                <h3 className="font-grotesk font-bold text-foreground">{e.degree}</h3>
                <p className="text-sm mt-1 text-primary">{e.school}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="pt-6">
          <h2 className="font-display text-3xl font-semibold text-foreground mb-6 flex items-center gap-3">
            <Award className="text-primary" /> Certifications
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {certifications.map((c) => (
              <div key={c.name} className="glass rounded-xl p-4 flex items-start gap-3">
                <div className="h-9 w-9 shrink-0 grid place-items-center rounded-lg bg-primary/10 text-primary">
                  <Award size={16} />
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{c.name}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{c.issuer} · {c.year}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  </>
);

export default About;
