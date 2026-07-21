"use client";

import { motion } from "framer-motion";
import {
  PenLine,
  Mic,
  Clapperboard,
  Image as ImageIcon,
  Search,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    icon: PenLine,
    title: "Script Writing",
    description: "Hook-driven scripts written for your niche and pacing.",
  },
  {
    icon: Mic,
    title: "AI Voice Over",
    description: "Natural-sounding narration in the tone your channel needs.",
  },
  {
    icon: Clapperboard,
    title: "Video Editing",
    description: "Clean cuts, captions, and pacing built to hold attention.",
  },
  {
    icon: ImageIcon,
    title: "Thumbnail Design",
    description: "High-contrast thumbnails designed to win the click.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Titles, tags, and descriptions tuned for discovery.",
  },
  {
    icon: LayoutDashboard,
    title: "Channel Management",
    description: "Upload scheduling and channel upkeep, handled for you.",
  },
];

/**
 * Services
 * A 6-card grid presenting each production service as a glass card with an
 * icon, title, and one-line description. Cards reveal with a staggered
 * fade-up as they scroll into view.
 */
export default function Services() {
  return (
    <section id="services" className="relative px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Everything your channel needs
          </h2>
          <p className="mt-4 text-muted">
            One team covering the full production pipeline, end to end.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="glass glass-hover rounded-xl2 p-7"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-glow-red/15">
                <service.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
