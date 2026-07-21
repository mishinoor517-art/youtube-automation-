import { Instagram, Mail, MessageSquare, PlayCircle } from "lucide-react";

const QUICK_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { icon: Mail, href: "mailto:hello@autotube.com", label: "Email" },
  { icon: MessageSquare, href: "https://wa.me/15550102030", label: "WhatsApp" },
  { icon: Instagram, href: "https://instagram.com/autotube.studio", label: "Instagram" },
];

/**
 * Footer
 * Closes the page with the brand mark, quick in-page navigation, social
 * icons, and a copyright line. Kept to a single compact row on desktop.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-bold">
          <PlayCircle className="h-5 w-5 text-primary" aria-hidden="true" />
          AutoTube
        </a>

        <ul className="flex gap-6">
          {QUICK_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm text-muted transition-colors hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="glass glass-hover flex h-9 w-9 items-center justify-center rounded-full"
            >
              <social.icon className="h-4 w-4 text-muted" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-muted">
        © {year} AutoTube. All rights reserved.
      </p>
    </footer>
  );
}
