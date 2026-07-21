"use client";

import { motion } from "framer-motion";
import { Zap, Gem, Users, Wallet, type LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Turnarounds built around your upload schedule, not ours.",
  },
  {
    icon: Gem,
    title: "Premium Quality",
    description: "Every asset reviewed before it reaches your channel.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Editors and strategists who live inside the algorithm.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    description: "Plans that scale with your channel, not against it.",
  },
];

/**
 * Features ("Why Choose Us")
 * A 4-card grid highlighting the studio's core differentiators. Uses the
 * same glass-card language as Services for visual consistency, on a slightly
 * tinted surface to separate the section rhythm.
 */
export default function Features() {
  return (
    <section id="why-us" className="relative px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Why creators choose us
          </h2>
          <p className="mt-4 text-muted">
            The details that keep channels consistent and growing.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass glass-hover rounded-xl2 p-6 text-center"
            >
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-glow-red/15">
                <feature.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-display text-base font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
