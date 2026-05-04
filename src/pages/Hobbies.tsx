import { hobbies } from "@/data/portfolio";
import { Building2, MapPin, Calendar, Gamepad2, Trophy, Users, Headphones, Radio, ShieldCheck, Sparkles, Facebook, Twitter, Instagram } from "lucide-react";
import arenaImg from "@/assets/hobbies/esports-arena.jpg";
import trophyImg from "@/assets/hobbies/tournament.jpg";
import teamImg from "@/assets/hobbies/team-coord.jpg";
import controllerImg from "@/assets/hobbies/community.jpg";

const stats = [
  { value: "20+", label: "Scrims supervised" },
  { value: "10", label: "Official tournaments" },
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
        <h1 className="font-display text-6xl md:text-8xl font-semibold leading-[0.95] max-w-4xl">
          Beyond the code — <em className="text-gradient">esports &amp; community</em>.
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

    {/* Featured photo gallery */}
    <section className="container py-12">
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">JSK Esports Journey</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {/* Large featured image */}
        <div className="col-span-2 md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden gradient-border noise group">
          <img
            src={teamImg}
            alt="JSK Esports team"
            loading="lazy"
            width={1280}
            height={1024}
            className="w-full h-[240px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/30">
              Operations
            </span>
            <h3 className="font-display text-xl md:text-2xl font-bold mt-3">Team Operations</h3>
            <p className="text-xs md:text-sm text-muted-foreground mt-2">
              Coordinating daily esports operations
            </p>
          </div>
        </div>

        {/* Trophy/Achievement image */}
        <div className="col-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden gradient-border noise group">
          <img
            src={trophyImg}
            alt="Esports tournament trophy"
            loading="lazy"
            width={800}
            height={800}
            className="w-full h-[120px] md:h-[190px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
            <h3 className="font-display text-sm md:text-base font-bold">Tournaments</h3>
          </div>
        </div>

        {/* Community/Social image */}
        <div className="col-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden gradient-border noise group">
          <img
            src={controllerImg}
            alt="JSK Esports community"
            loading="lazy"
            width={800}
            height={800}
            className="w-full h-[120px] md:h-[190px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
            <h3 className="font-display text-sm md:text-base font-bold">Community</h3>
          </div>
        </div>

        {/* Arena image */}
        <div className="col-span-1 relative rounded-2xl md:rounded-3xl overflow-hidden gradient-border noise group">
          <img
            src={arenaImg}
            alt="Esports arena"
            loading="lazy"
            width={800}
            height={800}
            className="w-full h-[120px] md:h-[190px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
            <h3 className="font-display text-sm md:text-base font-bold">Esports</h3>
          </div>
        </div>

        {/* Side text */}
        <div className="col-span-1 md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden glass p-4 md:p-6 flex flex-col justify-between">
          <div>
            <span className="text-xs font-mono text-primary">JSK ESPORTS</span>
            <h3 className="font-display text-xl md:text-2xl font-bold mt-3">One of Tunisia's leading esports organizations</h3>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground mt-4">
            Coordinating teams, tournaments, community growth and competitive excellence.
          </p>
        </div>
      </div>
    </section>

    {/* Pillars grid */}
    <section className="container py-12">
      <div className="flex items-end justify-between mb-8">
        <div>
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
              <div className="grid grid-cols-4 gap-3 mb-6">
                {e.achievements && e.achievements.map((a) => (
                  <div key={a.label} className="glass rounded-xl p-3 text-center">
                    <div className="font-display text-2xl font-bold text-gradient">{a.stat}</div>
                    <div className="text-xs text-muted-foreground mt-1">{a.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border/60">
              <div className="flex flex-wrap gap-2">
                {e.skills.map((s) => (
                  <span key={s} className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border/60">
              <h4 className="font-display font-bold mb-4">Follow JSK Esports</h4>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/JSKesports/photos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-all hover:-translate-y-0.5"
                >
                  <Facebook size={18} />
                  <span className="text-sm font-semibold">Facebook</span>
                </a>
                <a
                  href="https://x.com/JSK_Esports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-all hover:-translate-y-0.5"
                >
                  <Twitter size={18} />
                  <span className="text-sm font-semibold">Twitter</span>
                </a>
                <a
                  href="https://www.instagram.com/jsk.esport/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50 transition-all hover:-translate-y-0.5"
                >
                  <Instagram size={18} />
                  <span className="text-sm font-semibold">Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  </>
);

export default Hobbies;
