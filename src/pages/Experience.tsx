import { experiences } from "@/data/portfolio";
import { Building2, MapPin, Calendar } from "lucide-react";

const Experience = () => (
  <section className="container py-12">
    <p className="font-mono text-sm text-primary mb-2">// experience</p>
    <h1 className="font-display text-6xl md:text-7xl font-semibold mb-6 leading-[0.98]">
      My professional <em className="text-gradient">journey</em>.
    </h1>
    <p className="text-muted-foreground max-w-2xl text-lg">
      Engineering roles, internships and the operational chapter at JSK Esports.
    </p>

    <div className="mt-16 relative">
      {/* timeline line */}
      <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

      <div className="space-y-8">
        {experiences.map((e, i) => (
          <div key={e.role + e.company} className="relative pl-16 group">
            {/* node */}
            <div className="absolute left-3 top-7 h-5 w-5 rounded-full bg-background border-2 border-primary glow-primary group-hover:scale-110 transition-transform">
              <span className="absolute inset-1 rounded-full bg-gradient-primary" />
            </div>

            <div className="glass rounded-3xl p-6 md:p-8 hover:border-primary/40 transition-colors">
              <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-3 font-mono">
                <span className="flex items-center gap-1"><Calendar size={12} /> {e.period}</span>
                <span className="flex items-center gap-1"><MapPin size={12} /> {e.location}</span>
                <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary">{e.type}</span>
              </div>
              <h3 className="font-display text-2xl font-bold">{e.role}</h3>
              <p className="text-primary font-semibold mt-1 flex items-center gap-2">
                <Building2 size={16} /> {e.company}
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">{e.description}</p>
              {e.bullets.length > 0 && (
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {e.skills && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.skills.map((s) => (
                    <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition">
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
