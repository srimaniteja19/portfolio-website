import { ExternalLink, Linkedin, Github, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t-2 border-purple">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-wrap gap-6 items-center">
          <a
            href="mailto:srimaniteja.ch@gmail.com"
            className="neon-link flex items-center gap-2 uppercase text-sm font-bold"
          >
            <Mail size={18} />
            email
          </a>

          <a
            href="https://www.linkedin.com/in/sri-maniteja-chinnam/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-link flex items-center gap-2 uppercase text-sm font-bold"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://www.github.com/srimaniteja19/"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-link flex items-center gap-2 uppercase text-sm font-bold"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href="https://instagram.com/maniteja.chinnam"
            target="_blank"
            rel="noopener noreferrer"
            className="neon-link flex items-center gap-2 uppercase text-sm font-bold"
          >
            <Instagram size={18} />
            Instagram
          </a>
        </div>

        <div className="text-xs uppercase tracking-wider opacity-70 font-bold">
          Built by Sri Maniteja Chinnam <span className="opacity-50">(Software Engineer)</span>
        </div>
      </div>
    </footer>
  );
}
