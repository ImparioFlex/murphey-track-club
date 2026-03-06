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
    <section className="bg-mint border-t border-slate-200 pt-6 pb-16 md:pb-20 px-6">
      {/* Grass logo */}
      <div className="flex justify-center mb-10">
        <Image
          src="/logos/grassroots-square.png"
          alt=""
          width={80}
          height={80}
          className="w-16 md:w-20 h-auto"
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-forest-green font-body mb-4">
          Stay in the Loop
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold font-heading uppercase text-dark-green leading-[0.92] mb-4">
          Don&apos;t Miss a Mile.
        </h2>
        <p className="text-slate-600 font-body leading-relaxed max-w-xl mx-auto mb-10">
          Race results, camp announcements, new athlete profiles, merch drops,
          and exclusive deals from our partners. One email. No spam. Just the
          good stuff.
        </p>

        {submitted ? (
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-dark-green text-white font-body font-semibold">
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
              className="flex-1 px-5 py-4 border border-slate-200 bg-white text-base font-body focus:outline-none focus:ring-2 focus:ring-mid-green/30 focus:border-mid-green"
            />
            <button
              type="submit"
              className="btn-slide-up px-8 py-4 bg-dark-green text-white text-sm font-bold uppercase tracking-wider font-body flex items-center justify-center gap-2 shrink-0"
            >
              Subscribe <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
