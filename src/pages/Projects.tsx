import { projects } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

const Projects = () => (
  <section className="container py-12">
    <p className="font-mono text-sm text-primary mb-2">// projects</p>
    <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
      Things I've <span className="text-gradient">built & shipped</span>.
    </h1>
    <p className="text-muted-foreground max-w-2xl text-lg">
      A selection of projects spanning cloud-native platforms, microservices, full-stack apps and esports.
    </p>

    <div className="mt-16 space-y-24">
      {projects.map((p, i) => (
        <article
          key={p.title}
          className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-primary opacity-20 blur-3xl rounded-full group-hover:opacity-40 transition-opacity" />
            <div className="relative glass rounded-3xl overflow-hidden p-2">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={1280}
                height={800}
                className="rounded-2xl w-full aspect-[4/3] object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
          <div>
            <p className="font-mono text-xs text-primary mb-2">// 0{i + 1} · {p.role}</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{p.title}</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">{p.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-lg glass text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                className="mt-6 inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold"
              >
                Visit project <ExternalLink size={16} />
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
