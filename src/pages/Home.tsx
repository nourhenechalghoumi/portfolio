import { Link } from "react-router-dom";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import profile from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { skills, projects, experiences } from "@/data/portfolio";

const Home = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }}
        />
        <div className="absolute inset-0 -z-10 grid-bg opacity-20" />

        <div className="container py-12 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-primary">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Available for new projects · 2026
              </span>
              <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                Hi, I'm <span className="text-gradient">Nourhene</span>
                <br />
                Cloud & DevOps
                <br />
                Engineer.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl">
                I design and operate <span className="text-foreground">cloud-native systems</span>, automate everything that breathes, and build <span className="text-foreground">modern web experiences</span>. Currently coordinating <span className="text-primary">JSK Esports</span> and engineering at <span className="text-primary">Eyeotech</span>.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg hover:scale-105 transition-transform"
                >
                  View Projects
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
                <a
                  href="/cv-nourhene-chalghoumi-fr.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-xl glass px-6 py-3 font-semibold hover:text-primary transition-colors"
                >
                  <Download size={18} />
                  Télécharger CV (FR)
                </a>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
                {[
                  { n: "5+", l: "Years experience" },
                  { n: "20+", l: "Projects shipped" },
                  { n: "98%", l: "Uptime maintained" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="font-display text-3xl font-bold text-gradient">{s.n}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative animate-float">
                <div className="absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
                <div className="relative rounded-[2rem] overflow-hidden glass p-2 glow-primary">
                  <img
                    src={profile}
                    alt="Nourhene Chalghoumi"
                    className="rounded-[1.5rem] w-72 h-72 md:w-96 md:h-96 object-cover"
                    width={400}
                    height={400}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-3 flex items-center gap-2 text-sm font-mono">
                  <Sparkles size={16} className="text-primary" /> Open to work
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="container py-20">
        <div className="text-center mb-12">
          <p className="font-mono text-sm text-primary mb-2">// stack</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Tools I work with daily</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors">
              <h3 className="font-display font-semibold text-lg mb-4">{cat}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="container py-20">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="font-mono text-sm text-primary mb-2">// selected work</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">Featured Projects</h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            See all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((p) => (
            <Link
              key={p.title}
              to="/projects"
              className="group glass rounded-3xl overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  width={1280}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <div className="relative glass rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial -z-10" />
          <h2 className="font-display text-3xl md:text-5xl font-bold max-w-3xl mx-auto">
            Have a project in mind? <span className="text-gradient">Let's build it.</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            From DevOps pipelines to full-stack apps and n8n automations — I'd love to hear about it.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg hover:scale-105 transition-transform"
          >
            Start a conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
