import { hobbies } from "@/data/portfolio";
import { Building2, MapPin, Calendar, Gamepad2, Trophy, Users, Headphones, Radio, ShieldCheck, Sparkles } from "lucide-react";
import arenaImg from "@/assets/hobbies/esports-arena.jpg";
import trophyImg from "@/assets/hobbies/tournament.jpg";
import teamImg from "@/assets/hobbies/team-coord.jpg";
import controllerImg from "@/assets/hobbies/community.jpg";

const stats = [
  { value: "20+", label: "Scrims supervised" },
  { value: "12", label: "Official tournaments" },
  { value: "1.8k+", label: "Community growth" },
  { value: "98%", label: "Match readiness" },
];

const pillars = [
  { icon: Gamepad2, label: "Competitive Gaming", desc: "Esports culture, meta analysis & competitive standards" },
  { icon: Trophy, label: "Tournaments", desc: "Organizing, supervising & ensuring smooth execution" },
  { icon: Users, label: "Community", desc: "Players, fans, partners & social brand growth" },
  { icon: Headphones, label: "Streaming Setup", desc: "OBS, Discord, mics & connectivity troubleshooting" },
  { icon: Radio, label: "Broadcasting", desc: "Live coverage and tournament communication" },
  { icon: ShieldCheck, label: "Compliance", desc: "Tournament rules, schedules & competitive integrity" },
];

const Hobbies = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${arenaImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="container relative py-20 md:py-28">
        <p className="font-mono text-sm text-primary mb-3">// hobbies & passions</p>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02] max-w-4xl">
          Beyond the code — <span className="text-gradient">esports & community</span>.
        </h1>
        <p className="text-muted-foreground max-w-2xl text-lg mt-5">
          Outside engineering, I dedicate my time to esports operations, community building and
          competitive gaming culture with one of Tunisia's leading organizations.
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-2xl p-5">
              <div className="font-display text-3xl font-bold text-gradient">{s.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured photo collage */}
    <section className="container py-12">
      <div className="grid md:grid-cols-3 gap-4 md:gap-6">
        <div className="md:col-span-2 relative rounded-3xl overflow-hidden gradient-border noise group">
          <img
            src={teamImg}
            alt="Esports team coordination control room"
            loading="lazy"
            width={1280}
            height={832}
            className="w-full h-[280px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-0 p-6 md:p-8">
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/30">
              Operations
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold mt-3">Behind the scenes</h3>
            <p className="text-muted-foreground mt-2 max-w-md">
              Coordinating practice schedules, scrims and live matches with players & coaches.
            </p>
          </div>
        </div>

        <div className="relative rounded-3xl overflow-hidden gradient-border noise group">
          <img
            src={trophyImg}
            alt="Esports tournament trophy on stage"
            loading="lazy"
            width={1024}
            height={1024}
            className="w-full h-[280px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <div className="absolute bottom-0 p-6">
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-secondary/15 text-secondary border border-secondary/30">
              Tournaments
            </span>
            <h3 className="font-display text-xl font-bold mt-3">Compete. Win. Repeat.</h3>
          </div>
        </div>
      </div>
    </section>

    {/* Pillars grid */}
    <section className="container py-12">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="font-mono text-sm text-primary">// what I focus on</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">Six pillars of esports work</h2>
        </div>
        <Sparkles className="text-primary hidden md:block" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pillars.map((p) => (
          <div key={p.label} className="glass rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-1 transition-all">
            <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 grid place-items-center mb-4">
              <p.icon className="text-primary" size={20} />
            </div>
            <h3 className="font-display font-bold text-lg">{p.label}</h3>
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Role detail with side image */}
    <section className="container py-12">
      {hobbies.map((e) => (
        <div key={e.role} className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <div className="relative rounded-3xl overflow-hidden gradient-border">
              <img
                src={controllerImg}
                alt="Neon esports controller"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="font-mono text-xs text-primary">JSK ESPORTS</div>
                <div className="font-display text-2xl font-bold mt-1">Tunisia · Hybrid</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 glass rounded-3xl p-6 md:p-8">
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4 font-mono">
              <span className="flex items-center gap-1"><Calendar size={12} /> {e.period}</span>
              <span className="flex items-center gap-1"><MapPin size={12} /> {e.location}</span>
              <span className="px-2 py-0.5 rounded-md bg-primary/10 text-primary border border-primary/20">{e.type}</span>
            </div>
            <h3 className="font-display text-3xl font-bold">{e.role}</h3>
            <p className="text-primary font-semibold mt-1 flex items-center gap-2">
              <Building2 size={16} /> {e.company}
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">{e.description}</p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {e.bullets.map((b, i) => (
                <div key={b} className="flex gap-3 p-3 rounded-xl bg-muted/40 border border-border/60">
                  <span className="font-mono text-xs text-primary shrink-0 w-6">0{i + 1}</span>
                  <span className="text-sm text-muted-foreground leading-relaxed">{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border/60">
              <div className="text-xs font-mono text-muted-foreground mb-3">// SKILLS</div>
              <div className="flex flex-wrap gap-2">
                {e.skills.map((s) => (
                  <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  </>
);

export default Hobbies;
