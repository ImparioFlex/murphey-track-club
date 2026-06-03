"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="bg-cream border-t border-gray-200 pt-6 pb-16 md:pb-20 px-6">
      <div className="flex justify-center mb-10">
        <Image
          src="/logos/mtc-logo-new.png"
          alt=""
          width={80}
          height={80}
          className="w-16 md:w-20 h-auto"
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-orange font-body mb-4">
          Stay in the Loop
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading uppercase text-charcoal leading-[0.92] mb-4">
          Don&apos;t Miss a Meet.
        </h2>
        <p className="text-gray-700 font-body leading-relaxed max-w-xl mx-auto mb-10">
          Competition updates, clinic announcements, registration deadlines, and
          club news. One email. No spam.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-charcoal text-white font-body font-semibold">
            You&apos;re in. Welcome to the club.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 px-5 py-4 border border-gray-200 bg-white text-base font-body focus:outline-none focus:ring-2 focus:ring-orange/30 focus:border-orange"
            />
            <button
              type="submit"
              className="btn-slide-up px-8 py-4 bg-charcoal text-white text-sm font-bold uppercase tracking-wider font-body flex items-center justify-center gap-2 shrink-0"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
