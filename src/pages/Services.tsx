import { services } from "@/data/portfolio";
import { Check } from "lucide-react";

const Services = () => (
  <section className="container py-12">
    <p className="font-mono text-sm text-primary mb-2">// services</p>
    <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
      End-to-end <span className="text-gradient">technical services</span>.
    </h1>
    <p className="text-muted-foreground max-w-2xl text-lg">
      From infrastructure planning and automation to application deployment, monitoring and modern web development.
    </p>

    <div className="mt-16 grid md:grid-cols-2 gap-6">
      {services.map((s) => (
        <div
          key={s.title}
          className="group glass rounded-3xl overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={s.image}
              alt={s.title}
              loading="lazy"
              width={1280}
              height={800}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <h3 className="absolute bottom-4 left-6 right-6 font-display text-2xl font-bold">{s.title}</h3>
          </div>
          <div className="p-6">
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
);

export default Services;
