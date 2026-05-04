import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Download, Sparkles, Zap, Shield, Cpu, Cloud, GitBranch, Workflow, Quote, Star } from "lucide-react";
import profile from "@/assets/profile.jpg";
import { skills, projects, services, testimonials } from "@/data/portfolio";

const stack = ["Kubernetes", "Docker", "Terraform", "GitLab CI", "OpenStack", "Prometheus", "Grafana", "n8n", "Next.js", "Node.js", "MongoDB", "AWS", "Azure", "Ansible", "Jenkins", "React"];

const Home = () => {
  return (
    <>
      {/* HERO — editorial split */}
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 -z-10 grid-bg opacity-[0.12]" />
        <div className="absolute -top-40 left-1/3 -z-10 w-[700px] h-[700px] rounded-full bg-primary/15 blur-[140px]" />
        <div className="absolute top-40 right-0 -z-10 w-[500px] h-[500px] rounded-full bg-secondary/15 blur-[140px]" />

        <div className="container pt-12 pb-20 md:pt-20 md:pb-28">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 animate-fade-up order-2 lg:order-1">
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-mono text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  <span className="relative h-2 w-2 rounded-full bg-primary" />
                </span>
              </span>

              <h1 className="mt-6 font-display text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight">
                Cloud,<br />
                <em className="text-gradient not-italic">code</em> &amp;<br />
                <span className="italic font-light">community.</span>
              </h1>

              <p className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed">
                I'm <span className="text-foreground font-medium">Nourhene Chalghoumi</span> — a Cloud &amp; DevOps engineer
                building reliable infrastructure, modern web apps and n8n automations. Currently coordinating{" "}
                <span className="text-primary">JSK Esports</span> and engineering at{" "}
                <span className="text-primary">Eyeotech</span>.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/projects" className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-[0_8px_30px_-8px_hsl(var(--primary)/0.7)] hover:shadow-[0_14px_44px_-8px_hsl(var(--primary)/0.9)] transition-all hover:-translate-y-0.5 shine">
                  Explore work
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </Link>
                <a href="/cv-nourhene-chalghoumi-fr.pdf" download className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-semibold hover:text-primary hover:-translate-y-0.5 transition-all">
                  <Download size={18} /> CV (FR)
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 font-semibold text-muted-foreground hover:text-foreground transition-colors">
                  Contact <ArrowUpRight size={16} />
                </Link>
              </div>

              <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
                {[
                  { n: "5+", l: "Years experience" },
                  { n: "20+", l: "Projects shipped" },
                  { n: "98%", l: "Avg uptime" },
                ].map((s) => (
                  <div key={s.l} className="border-l border-primary/40 pl-4">
                    <div className="font-display text-4xl md:text-5xl font-semibold text-gradient">{s.n}</div>
                    <div className="text-xs text-muted-foreground mt-1 leading-tight">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-8 rounded-full conic-glow animate-spin-slow opacity-40" />
                <div className="absolute -inset-2 bg-gradient-primary opacity-25 blur-3xl rounded-full" />

                <div className="relative rounded-[2rem] overflow-hidden glass p-1.5 noise">
                  <img src={profile} alt="Nourhene Chalghoumi" className="rounded-[1.6rem] w-72 h-80 md:w-80 md:h-96 object-cover" width={400} height={480} />
                </div>

                
                
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass rounded-full px-4 py-2 flex items-center gap-2 text-xs font-mono whitespace-nowrap">
                  <Sparkles size={14} className="text-primary" /> Open to work
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative border-t border-border/60 bg-card/30 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="marquee py-5">
            {[...stack, ...stack].map((s, i) => (
              <span key={i} className="font-mono text-sm text-muted-foreground whitespace-nowrap flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/60" /> {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="container py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <h2 className="font-display text-5xl md:text-6xl font-semibold max-w-2xl leading-[1.05]">
              Services for <em className="text-gradient">modern teams</em>
            </h2>
          </div>
          <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            All services <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Cloud, title: "Cloud & DevOps", desc: "CI/CD, IaC, Kubernetes orchestration and zero-downtime deploys." },
            { icon: Workflow, title: "n8n Automation", desc: "Custom self-hosted workflows wiring APIs, AI and your stack." },
            { icon: Shield, title: "Monitoring & SRE", desc: "Prometheus, Grafana, alerting and SLA-grade reliability." },
            { icon: Cpu, title: "MERN Development", desc: "Production React/Node apps with secure auth and clean APIs." },
            { icon: Zap, title: "Performance Tuning", desc: "Latency reduction, microservices migration and cost optimization." },
            { icon: GitBranch, title: "Cloud Consulting", desc: "Architecture review, migration plans and disaster recovery." },
          ].map((s) => (
            <div key={s.title} className="group relative glass rounded-3xl p-6 hover:-translate-y-1 transition-all">
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-primary/10 to-secondary/5 -z-10" />
              <div className="h-12 w-12 grid place-items-center rounded-2xl bg-gradient-primary text-primary-foreground mb-5 group-hover:scale-110 transition-transform">
                <s.icon size={20} />
              </div>
              <h3 className="font-grotesk text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="container py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <h2 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05]">Featured <em className="text-gradient">Projects</em></h2>
          </div>
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
            See all <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((p, i) => (
            <Link key={p.title} to="/projects" className="group relative glass rounded-3xl overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1">
              <div className="relative h-60 overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" width={1280} height={800} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <span className="absolute top-4 left-4 text-[11px] font-mono text-primary bg-background/80 backdrop-blur px-2.5 py-1 rounded-full border border-primary/30">
                  0{i + 1} · {p.role}
                </span>
                <span className="absolute top-4 right-4 h-9 w-9 grid place-items-center rounded-full bg-background/80 backdrop-blur border border-border opacity-0 group-hover:opacity-100 group-hover:rotate-0 -rotate-45 transition-all">
                  <ArrowUpRight size={16} className="text-primary" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags?.slice(0, 4).map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-muted text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="container py-24">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl font-semibold max-w-2xl mx-auto leading-[1.05]">
            A simple process,<br /><em className="text-gradient">obsessive execution</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-5 relative">
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
          {[
            { n: "01", t: "Discover", d: "We map your goals, constraints and current stack." },
            { n: "02", t: "Design", d: "Architecture, automation flows and clean specs." },
            { n: "03", t: "Build", d: "Iterative delivery with CI/CD and live previews." },
            { n: "04", t: "Operate", d: "Monitoring, SLAs and continuous improvement." },
          ].map((p) => (
            <div key={p.n} className="relative glass rounded-3xl p-6">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-background border border-primary/40 text-primary font-mono font-bold text-sm mb-4 relative z-10">{p.n}</div>
              <h3 className="font-grotesk text-lg font-bold mb-1.5">{p.t}</h3>
              <p className="text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container py-24">
        <div className="mb-12">
          <h2 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05]">What people <em className="text-gradient">say</em></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure key={t.name} className="glass rounded-3xl p-7 flex flex-col">
              <Quote className="text-primary mb-4" size={28} />
              <blockquote className="text-foreground/90 leading-relaxed flex-1">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-5 border-t border-border/60 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <div className="flex gap-0.5 text-primary">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="container py-24">
        <div className="mb-12">
          <h2 className="font-display text-5xl md:text-6xl font-semibold leading-[1.05]">Tools I use <em className="text-gradient">daily</em></h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skills).map(([cat, items]) => (
            <div key={cat} className="glass rounded-2xl p-6 hover:border-primary/40 transition-colors">
              <h3 className="font-grotesk font-semibold text-lg mb-4 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {cat}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="text-xs font-mono px-3 py-1.5 rounded-lg bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-20">
        <div className="relative glass rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial -z-10" />
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-gradient-primary opacity-10 blur-3xl -z-10" />
          <h2 className="font-display text-4xl md:text-6xl font-semibold max-w-3xl mx-auto leading-[1.05]">
            Have a project? <em className="text-gradient">Let's build it.</em>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
            DevOps pipelines, full-stack apps, n8n automations — drop me a line and let's see what we can ship together.
          </p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-8 py-3.5 font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.7)] hover:scale-105 transition-transform shine">
            Start a conversation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
