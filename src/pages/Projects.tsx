import { useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags ?? [])));

const Projects = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const visible = filter ? projects.filter((p) => p.tags?.includes(filter)) : projects;

  return (
    <section className="container py-12">
      <h1 className="font-display text-6xl md:text-7xl font-semibold mb-6 leading-[0.98]">
        Things I've <em className="text-gradient">built &amp; shipped</em>.
      </h1>
      <p className="text-muted-foreground max-w-2xl text-lg">
        A selection of projects spanning cloud-native platforms, microservices, full-stack apps and infrastructure automation.
      </p>

      {/* Filters */}
      <div className="mt-10 flex flex-wrap gap-2">
        <button
          onClick={() => setFilter(null)}
          className={`text-xs font-mono px-3 py-1.5 rounded-full border transition ${!filter ? "bg-gradient-primary text-primary-foreground border-transparent" : "border-border text-muted-foreground hover:text-foreground"}`}
        >
          All ({projects.length})
        </button>
        {allTags.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`text-xs font-mono px-3 py-1.5 rounded-full border transition ${filter === t ? "bg-gradient-primary text-primary-foreground border-transparent" : "border-border text-muted-foreground hover:text-foreground"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-14 grid md:grid-cols-2 gap-6">
        {visible.map((p, i) => (
          <Link key={p.id} to={`/projects/${p.id}`}>
            <article className="group relative glass rounded-3xl overflow-hidden hover:border-primary/40 transition-all hover:-translate-y-1 cursor-pointer h-full">
              <div className="relative h-64 overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" width={1280} height={800} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <span className="absolute top-4 left-4 text-[11px] font-mono text-primary bg-background/80 backdrop-blur px-2.5 py-1 rounded-full border border-primary/30">
                  0{i + 1} · {p.role}
                </span>
                <div className="absolute top-4 right-4 h-10 w-10 grid place-items-center rounded-full bg-background/80 backdrop-blur border border-border group-hover:bg-primary group-hover:text-primary-foreground transition">
                  <ArrowUpRight size={16} />
                </div>
              </div>
              <div className="p-7">
                <h2 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{p.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tags?.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-muted text-muted-foreground">{t}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                  View Details <ArrowUpRight size={14} />
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
