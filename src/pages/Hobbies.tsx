import { hobbies } from "@/data/portfolio";
import { Building2, MapPin, Calendar, Gamepad2, Trophy, Users } from "lucide-react";

const Hobbies = () => (
  <section className="container py-12">
    <p className="font-mono text-sm text-primary mb-2">// hobbies & passions</p>
    <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 leading-[1.05]">
      Beyond the code — <span className="text-gradient">esports & community</span>.
    </h1>
    <p className="text-muted-foreground max-w-2xl text-lg">
      Outside engineering, I dedicate my time to esports operations, community building and competitive gaming culture.
    </p>

    <div className="grid sm:grid-cols-3 gap-4 mt-10">
      {[
        { icon: Gamepad2, label: "Competitive Gaming", desc: "Esports culture & meta" },
        { icon: Trophy, label: "Tournaments", desc: "Organizing & coordinating" },
        { icon: Users, label: "Community", desc: "Players, fans & partners" },
      ].map((h) => (
        <div key={h.label} className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors">
          <h.icon className="text-primary mb-3" />
          <h3 className="font-display font-bold">{h.label}</h3>
          <p className="text-sm text-muted-foreground mt-1">{h.desc}</p>
        </div>
      ))}
    </div>

    <div className="mt-12 space-y-8">
      {hobbies.map((e) => (
        <div key={e.role} className="glass rounded-3xl p-6 md:p-8 hover:border-primary/40 transition-colors">
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
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {e.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="text-primary mt-1.5 h-1 w-1 rounded-full bg-primary shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {e.skills.map((s) => (
              <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-md bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition">
                {s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Hobbies;
