"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SectionEyebrow from "@/components/SectionEyebrow";
import { Users, Award, CalendarDays } from "lucide-react";

export default function JoinPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const inputClasses =
    "w-full px-4 py-3 border border-slate-200 text-base font-body focus:outline-none focus:ring-2 focus:ring-mid-green/30 focus:border-mid-green";

  return (
    <>
      {/* ===== HERO TEXT ===== */}
      <section className="bg-white pt-24 md:pt-32 pb-16 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <SectionEyebrow>Get Involved</SectionEyebrow>
            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-extrabold font-heading uppercase text-dark-green tracking-tight leading-[0.9]">
              Your Next Chapter
              <br />
              Starts Now
            </h1>
            <p className="text-slate-600 font-body text-lg leading-relaxed mt-8 max-w-2xl mx-auto">
              Three paths. One community. Whether you are chasing a national
              title, looking for training partners, or ready to level up at camp,
              there is a place for you here.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== THREE PATH CARDS ===== */}
      <section className="bg-white pb-20 md:pb-32 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8 max-w-7xl mx-auto items-start">
          {/* Card 1 — Community Squad */}
          <FadeIn delay={0}>
            <div className="border border-slate-200 border-t-2 border-t-mid-green bg-white p-6 md:p-10 flex flex-col">
              <Users
                className="w-10 h-10 text-mid-green mb-6"
                strokeWidth={1.5}
              />
              <h2 className="font-heading font-extrabold text-2xl uppercase tracking-wide text-dark-green mb-3">
                Community Squad
              </h2>
              <p className="text-slate-600 font-body text-base leading-relaxed mb-8">
                Open to all levels. Show up, work hard, belong. No application
                needed. Just bring your shoes and your commitment.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 mt-auto">
                <input
                  type="text"
                  placeholder="Full Name"
                  className={inputClasses}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className={inputClasses}
                />
                <input
                  type="text"
                  placeholder="City"
                  className={inputClasses}
                />
                <input
                  type="text"
                  placeholder="Running Background"
                  className={inputClasses}
                />
                <input
                  type="text"
                  placeholder="How did you hear about us?"
                  className={inputClasses}
                />
                <button
                  type="submit"
                  className="btn-slide-up bg-dark-green text-white w-full px-8 py-4 text-sm font-bold uppercase tracking-wider font-body mt-2"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </FadeIn>

          {/* Card 2 — Elite Group */}
          <FadeIn delay={100}>
            <div className="border border-slate-200 border-t-2 border-t-electric bg-white p-6 md:p-10 flex flex-col">
              <Award
                className="w-10 h-10 text-electric mb-6"
                strokeWidth={1.5}
              />
              <h2 className="font-heading font-extrabold text-2xl uppercase tracking-wide text-dark-green mb-3">
                Elite Group
              </h2>
              <p className="text-slate-600 font-body text-base leading-relaxed mb-8">
                For post-collegiate and open athletes with serious competitive
                goals. Applications are reviewed personally by Coach Hayden.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 mt-auto">
                <input
                  type="text"
                  placeholder="Full Name"
                  className={inputClasses}
                />
                <input
                  type="email"
                  placeholder="Email"
                  className={inputClasses}
                />
                <input
                  type="text"
                  placeholder="Event(s)"
                  className={inputClasses}
                />
                <input
                  type="text"
                  placeholder="Current PRs"
                  className={inputClasses}
                />
                <input
                  type="text"
                  placeholder="College / post-collegiate history"
                  className={inputClasses}
                />
                <input
                  type="text"
                  placeholder="Goals"
                  className={inputClasses}
                />
                <textarea
                  placeholder="Why Grassroots Elite?"
                  rows={3}
                  className={inputClasses}
                />
                <button
                  type="submit"
                  className="btn-slide-up-white bg-electric text-dark-green w-full px-8 py-4 text-sm font-bold uppercase tracking-wider font-body mt-2"
                >
                  Apply Now
                </button>
              </form>
            </div>
          </FadeIn>

          {/* Card 3 — Sign Up for a Camp */}
          <FadeIn delay={200}>
            <div className="border border-slate-200 border-t-2 border-t-forest-green bg-white p-6 md:p-10 flex flex-col">
              <CalendarDays
                className="w-10 h-10 text-forest-green mb-6"
                strokeWidth={1.5}
              />
              <h2 className="font-heading font-extrabold text-2xl uppercase tracking-wide text-dark-green mb-3">
                Sign Up for a Camp
              </h2>
              <p className="text-slate-600 font-body text-base leading-relaxed mb-8">
                Join us for one of our annual camps. Whether you are an elite
                competitor or running your first group workout, there is a camp
                built for you.
              </p>
              <div className="mt-auto">
                <Link
                  href="/camps"
                  className="btn-slide-up border-2 border-dark-green text-dark-green w-full px-8 py-4 text-sm font-bold uppercase tracking-wider font-body text-center block"
                >
                  View Camps
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== IMPARIO FLEX SPONSOR NOTE ===== */}
      <section className="bg-slate-100 py-16 px-6">
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm text-slate-400 font-body leading-relaxed">
              Grassroots Elite is proudly supported by{" "}
              <a
                href="https://imparioflex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-forest-green hover:underline"
              >
                Impario Flex
              </a>
              , a technology and automation agency specializing in web
              development, CRM automation, and digital systems for businesses
              ready to grow.
            </p>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
