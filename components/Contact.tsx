"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Instagram, Send, CheckCircle2 } from "lucide-react";

const CONTACT_CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@autotube.com",
    href: "mailto:hello@autotube.com",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "+1 (555) 010-2030",
    href: "https://wa.me/15550102030",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@autotube.studio",
    href: "https://instagram.com/autotube.studio",
  },
];

/**
 * Contact
 * Two-column layout: a validated form (name, email, message) on one side,
 * and direct contact channels (email, WhatsApp, Instagram) on the other.
 * Submission is handled client-side with a lightweight success state —
 * wire the onSubmit handler to a real endpoint or service when ready.
 */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Hook this up to your email/CRM endpoint of choice.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative px-6 py-24 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Let&apos;s grow your channel
          </h2>
          <p className="mt-4 text-muted">
            Tell us about your channel and we&apos;ll get back within a day.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="glass rounded-xl2 p-7 lg:col-span-3"
          >
            <div className="mb-5">
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-primary/60"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-primary/60"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about your channel and goals"
                className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-primary/60"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-glow-red px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-[1.02] sm:w-auto"
            >
              {submitted ? (
                <>
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Message sent
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Send Message
                </>
              )}
            </button>
          </motion.form>

          {/* Direct channels */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4 lg:col-span-2"
          >
            {CONTACT_CHANNELS.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover flex items-center gap-4 rounded-xl2 p-5"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-glow-red/15">
                  <channel.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-muted">{channel.label}</span>
                  <span className="block text-sm font-medium text-ink">
                    {channel.value}
                  </span>
                </span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
