"use client";

import { useState } from "react";
import { Menu, X, PlayCircle } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

/**
 * Navbar
 * Sticky, translucent top bar with in-page anchor links. Collapses into a
 * simple slide-down menu on mobile. Kept minimal to match the brief's
 * "compact and elegant" direction.
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-[3px] left-0 right-0 z-50 border-b border-white/5 bg-canvas/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <PlayCircle className="h-6 w-6 text-primary" aria-hidden="true" />
          AutoTube
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-glow-red px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-105 md:inline-block"
        >
          Get Started
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="flex flex-col gap-1 border-t border-white/5 bg-canvas/95 px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 text-sm text-muted hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block rounded-full bg-glow-red px-5 py-2 text-sm font-semibold text-white"
            >
              Get Started
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
