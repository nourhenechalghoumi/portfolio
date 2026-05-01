import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
    window.location.href = `mailto:nourhene.chalgoumi@esprit.tn?subject=${encodeURIComponent("Portfolio contact from " + name)}&body=${body}`;
    toast.success("Opening your email client…");
    setTimeout(() => setSubmitting(false), 800);
  };

  return (
    <section className="container py-12">
      <p className="font-mono text-sm text-primary mb-2">// contact</p>
      <h1 className="font-display text-5xl md:text-6xl font-bold mb-4">
        Let's <span className="text-gradient">get in touch</span>.
      </h1>
      <p className="text-muted-foreground max-w-2xl text-lg">
        Have a project, an opportunity, or just want to say hi? Drop me a message.
      </p>

      <div className="mt-12 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {[
            { icon: Mail, label: "Email", value: "nourhene.chalgoumi@esprit.tn", href: "mailto:nourhene.chalgoumi@esprit.tn" },
            { icon: Phone, label: "Phone", value: "+216 58 939 003", href: "tel:+21658939003" },
            { icon: MapPin, label: "Location", value: "Bizerte, Tunisia" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="flex items-start gap-4 glass rounded-2xl p-5 hover:border-primary/40 transition-colors"
            >
              <span className="h-11 w-11 grid place-items-center rounded-xl bg-gradient-primary text-primary-foreground shrink-0">
                <c.icon size={20} />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{c.label}</p>
                <p className="font-semibold mt-0.5">{c.value}</p>
              </div>
            </a>
          ))}

          <div className="glass rounded-2xl p-5">
            <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Socials</p>
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/in/nourhene-chalghoumi/" target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center rounded-xl bg-muted hover:bg-primary/10 hover:text-primary transition" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href="https://github.com/nourhenechalghoumi" target="_blank" rel="noreferrer" className="h-11 w-11 grid place-items-center rounded-xl bg-muted hover:bg-primary/10 hover:text-primary transition" aria-label="GitHub"><Github size={18} /></a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-3 glass rounded-3xl p-6 md:p-8 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Your name</label>
              <input id="name" name="name" required className="w-full rounded-xl bg-input border border-border px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="Jane Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Your email</label>
              <input id="email" name="email" type="email" required className="w-full rounded-xl bg-input border border-border px-4 py-3 outline-none focus:border-primary transition-colors" placeholder="jane@company.com" />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">Your message</label>
            <textarea id="message" name="message" rows={6} required className="w-full rounded-xl bg-input border border-border px-4 py-3 outline-none focus:border-primary transition-colors resize-none" placeholder="Tell me about your project…" />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg hover:scale-105 transition-transform disabled:opacity-60"
          >
            <Send size={18} /> {submitting ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
