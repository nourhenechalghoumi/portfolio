import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border/50 mt-32">
    <div className="container py-12">
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <div>
          <Link to="/" className="font-display text-xl font-bold">
            Nourhene<span className="text-primary">.</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Cloud & DevOps Engineer crafting reliable infrastructure and modern web experiences.
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Navigate</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Connect</h4>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/nourhene-chalghoumi/" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-xl glass hover:text-primary hover:scale-110 transition" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://github.com/nourhenechalghoumi" target="_blank" rel="noreferrer" className="h-10 w-10 grid place-items-center rounded-xl glass hover:text-primary hover:scale-110 transition" aria-label="GitHub"><Github size={18} /></a>
            <a href="mailto:nourhene.chalgoumi@esprit.tn" className="h-10 w-10 grid place-items-center rounded-xl glass hover:text-primary hover:scale-110 transition" aria-label="Email"><Mail size={18} /></a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground flex items-center gap-2"><MapPin size={14} /> Bizerte, Tunisia</p>
        </div>
      </div>
      <div className="pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Nourhene Chalghoumi. All rights reserved.</p>
        <p className="font-mono">Built with passion in Tunisia.</p>
      </div>
    </div>
  </footer>
);
