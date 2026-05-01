import { experiences } from "@/data/portfolio";
import { Building2, MapPin, Calendar } from "lucide-react";

const Experience = () => (
  <section className="container py-12">
    <p className="font-mono text-sm text-primary mb-2">// experience</p>
    <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
      My professional <span className="text-gradient">journey</span>.
    </h1>
    <p className="text-muted-foreground max-w-2xl text-lg">
      Engineering roles, internships and the operational chapter at JSK Esports.
    </p>

    <div className="mt-16 relative">
      {/* timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

      <div className="space-y-12">
        {experiences.map((e, i) => (
          <div key={e.role + e.company} className={`relative grid md:grid-cols-2 gap-6 ${i % 2 === 0 ? "" : "md:[&>div]:col-start-2"}`}>
            <div
              className={`glass rounded-3xl p-6 md:p-8 ml-12 md:ml-0 ${
                i % 2 === 0 ? "md:mr-12 md:text-right" : "md:ml-12"
              }`}
            >
              <div className={`flex flex-wrap gap-3 text-xs text-muted-foreground mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                <span className="flex items-center gap-1"><Calendar size={12} /> {e.period}</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> {e.location}</span>
              </div>
              <h3 className="font-display text-2xl font-bold">{e.role}</h3>
              <p className="text-primary font-semibold mt-1 flex items-center gap-2 md:justify-inherit">
                <Building2 size={16} /> {e.company} <span className="text-muted-foreground font-normal">· {e.type}</span>
              </p>
              <p className="mt-4 text-muted-foreground">{e.description}</p>
              {e.bullets.length > 0 && (
                <ul className={`mt-4 space-y-2 text-sm text-muted-foreground ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  {e.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
              )}
              {e.skills && (
                <div className={`mt-5 flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  {e.skills.map((s) => (
                    <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* node */}
            <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 h-4 w-4 rounded-full bg-gradient-primary glow-primary ring-4 ring-background" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
