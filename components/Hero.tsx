"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

// Relative heights used to draw the ambient "waveform" behind the headline —
// a nod to audio/video timelines without being a literal logo or icon.
const WAVE_HEIGHTS = [22, 40, 65, 30, 80, 45, 60, 25, 70, 38, 55, 20, 48, 66, 32];

/**
 * Hero
 * The page's opening statement. A dark canvas with a soft red glow, an
 * animated "waveform" motif (nodding to audio/video production), the primary
 * headline, supporting copy, and the two required calls to action.
 */
export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28 md:pt-48 md:pb-36">
      {/* Ambient background: radial glow + floating blurred orbs */}
      <div className="pointer-events-none absolute inset-0 bg-grain-fade" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-primary/20 blur-[100px] animate-float"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 left-[-10%] h-72 w-72 rounded-full bg-ember/10 blur-[100px] animate-float"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mx-auto mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
          AI-powered production, real editors behind it
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Grow Your YouTube Channel
          <br />
          with <span className="text-gradient">Automation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-base text-muted md:text-lg"
        >
          From script to upload, we handle the entire production pipeline —
          so you publish consistently and grow faster, without the burnout.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-glow-red px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="glass glass-hover inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-ink"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Contact Us
          </a>
        </motion.div>

        {/* Ambient waveform motif — purely decorative, hidden from assistive tech */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mx-auto mt-16 flex h-20 max-w-md items-end justify-center gap-1.5"
          aria-hidden="true"
        >
          {WAVE_HEIGHTS.map((h, i) => (
            <span
              key={i}
              className="w-1.5 rounded-full bg-gradient-to-t from-primary/70 to-ember/40 animate-pulse-glow"
              style={{ height: `${h}%`, animationDelay: `${i * 0.12}s` }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
