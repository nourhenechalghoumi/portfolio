import { services } from "@/data/portfolio";
import { Check, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => (
  <>
    <section className="container py-12">
      <p className="font-mono text-sm text-primary mb-2">// services</p>
      <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 leading-[1.05]">
        End-to-end <span className="text-gradient">technical services</span>.
      </h1>
      <p className="text-muted-foreground max-w-2xl text-lg">
        From infrastructure planning and automation to deployment, monitoring and modern web development — delivered with operational rigor.
      </p>
    </section>

    <section className="container pb-12">
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <div key={s.title} className="group relative glass rounded-3xl overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1">
            <div className="relative h-52 overflow-hidden">
              <img src={s.image} alt={s.title} loading="lazy" width={1280} height={800} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <span className="absolute top-4 left-4 text-[11px] font-mono text-primary bg-background/80 backdrop-blur px-2.5 py-1 rounded-full border border-primary/30">
                Service · 0{i + 1}
              </span>
              <h2 className="absolute bottom-4 left-6 right-6 font-display text-2xl font-bold drop-shadow">{s.title}</h2>
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

    {/* CTA */}
    <section className="container py-16">
      <div className="relative glass rounded-[2rem] p-10 md:p-14 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="absolute inset-0 bg-gradient-radial -z-10 opacity-70" />
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-bold">Need something custom?</h3>
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
