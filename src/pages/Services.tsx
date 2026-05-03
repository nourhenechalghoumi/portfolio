import { services, faqs } from "@/data/portfolio";
import { Check, ArrowUpRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Services = () => (
  <>
    <section className="container py-12 md:py-16">
      <p className="font-mono text-sm text-primary mb-2">// services</p>
      <h1 className="font-display text-6xl md:text-7xl font-semibold mb-6 leading-[0.98]">
        End-to-end<br /><em className="text-gradient">technical services</em>
      </h1>
      <p className="text-muted-foreground max-w-2xl text-lg">
        From infrastructure planning and automation to deployment, monitoring and modern web development — delivered with operational rigor and an obsession for clean execution.
      </p>
    </section>

    {/* Pricing-style packages */}
    <section className="container pb-12">
      <div className="grid md:grid-cols-3 gap-5 mb-16">
        {[
          { name: "Sprint", price: "From €1.5k", duration: "1–2 weeks", desc: "A focused engagement: one automation, one pipeline, one issue solved.", features: ["Discovery call", "Implementation", "Documentation", "1 week support"] },
          { name: "Project", price: "From €5k", duration: "1–2 months", desc: "End-to-end delivery: a full DevOps setup, a web app or an automation suite.", features: ["Architecture & specs", "Iterative delivery", "CI/CD + monitoring", "Handover & training"], featured: true },
          { name: "Retainer", price: "Custom", duration: "Ongoing", desc: "Embed with your team as a part-time engineer or operations partner.", features: ["Weekly syncs", "On-call SLAs", "Roadmap planning", "Async collaboration"] },
        ].map((p) => (
          <div key={p.name} className={`relative glass rounded-3xl p-7 ${p.featured ? "border-primary/60 shadow-[0_20px_60px_-20px_hsl(var(--primary)/0.4)]" : ""}`}>
            {p.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-mono px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground">
                MOST POPULAR
              </span>
            )}
            <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
            <div className="mt-3 font-display text-3xl font-bold text-gradient">{p.price}</div>
            <div className="text-xs font-mono text-muted-foreground mt-1">{p.duration}</div>
            <p className="text-sm text-muted-foreground mt-4">{p.desc}</p>
            <ul className="mt-5 space-y-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm">
                  <Check size={16} className="text-primary shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="container pb-12">
      <h2 className="font-display text-4xl md:text-5xl font-semibold mb-10">All <em className="text-gradient">capabilities</em></h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div key={s.title} className="group relative glass rounded-3xl overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1">
            <div className="relative h-52 overflow-hidden">
              <img src={s.image} alt={s.title} loading="lazy" width={1280} height={800} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <span className="absolute top-4 left-4 text-[11px] font-mono text-primary bg-background/80 backdrop-blur px-2.5 py-1 rounded-full border border-primary/30">
                Service · 0{i + 1}
              </span>
              <h2 className="absolute bottom-4 left-6 right-6 font-display text-2xl font-semibold drop-shadow">{s.title}</h2>
            </div>
            <div className="p-7">
              <ul className="space-y-3">
                {s.points.map((pt) => (
                  <li key={pt} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-0.5 h-5 w-5 grid place-items-center rounded-md bg-primary/10 text-primary shrink-0">
                      <Check size={12} />
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* FAQ */}
    <section className="container py-16">
      <div className="grid lg:grid-cols-3 gap-10">
        <div>
          <p className="font-mono text-sm text-primary mb-2">// faq</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold leading-[1.05]">Frequently <em className="text-gradient">asked</em></h2>
          <p className="text-muted-foreground mt-4">Anything else? <Link to="/contact" className="text-primary underline-offset-4 hover:underline">Just ask</Link>.</p>
        </div>
        <div className="lg:col-span-2 glass rounded-3xl p-2 md:p-4">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`f-${i}`} className="border-b border-border/60 last:border-0">
                <AccordionTrigger className="text-left font-grotesk font-semibold px-4 py-5 hover:text-primary hover:no-underline">
                  <span className="flex items-center gap-3"><HelpCircle size={16} className="text-primary shrink-0" />{f.q}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="container py-16">
      <div className="relative glass rounded-[2rem] p-10 md:p-14 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="absolute inset-0 bg-gradient-radial -z-10 opacity-70" />
        <div>
          <h3 className="font-display text-3xl md:text-4xl font-semibold">Need something <em className="text-gradient">custom?</em></h3>
          <p className="text-muted-foreground mt-2">Tell me about your stack and what you'd like to build or fix.</p>
        </div>
        <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3.5 font-semibold text-primary-foreground shadow-lg hover:scale-105 transition-transform shine">
          Start a project <ArrowUpRight size={18} />
        </Link>
      </div>
    </section>
  </>
);

export default Services;
