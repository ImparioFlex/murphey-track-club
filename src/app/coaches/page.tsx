import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import FadeIn from "@/components/FadeIn";

const coaches = [
  {
    name: "Alisa Seymour",
    role: "Executive Director & Head Coach",
    email: "agseymour1913@gmail.com",
    featured: true,
  },
  { name: "Kevaughn Griffith", role: "Site Lead — Halle Stadium" },
  { name: "Morris Williams", role: "Assistant Coach" },
  { name: "Devon Dillard", role: "Assistant Coach" },
  { name: "Sam Jones", role: "Assistant Coach" },
  { name: "Pamela Smith", role: "Assistant Coach" },
  { name: "Sam Henderson", role: "Assistant Coach" },
  { name: "Marina Simpson", role: "Assistant Coach" },
  { name: "Nick Blackwell", role: "Assistant Coach" },
  { name: "Quintel Cooks", role: "Assistant Coach" },
];

export default function CoachesPage() {
  const headCoach = coaches[0];
  const siteLead = coaches[1];
  const assistants = coaches.slice(2);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-white pt-24 md:pt-32 pb-16 md:pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <SectionEyebrow>The Team</SectionEyebrow>
            <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[0.88] font-extrabold font-heading uppercase text-charcoal mb-8">
              Our Coaching
              <br />
              <span className="text-orange">Staff</span>
            </h1>
            <p className="text-lg text-gray-700 font-body leading-relaxed max-w-2xl mx-auto">
              Ten dedicated coaches committed to developing the next generation
              of track &amp; field athletes in Memphis. Training Monday, Tuesday,
              and Thursday at Halle Stadium.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== HEAD COACH ===== */}
      <section className="bg-deep py-20 md:py-28 px-6">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 bg-charcoal-mid rounded-full flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-extrabold font-heading text-orange">
                  AS
                </span>
              </div>
              <SectionEyebrow dark>Executive Director &amp; Head Coach</SectionEyebrow>
              <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-white leading-[0.92] mb-6 md:mb-8">
                {headCoach.name}
              </h2>
              <p className="text-gray-400 font-body leading-relaxed max-w-2xl mx-auto mb-8 md:mb-10">
                Alisa Seymour was hired as Executive Director and Head Coach in
                March 2023, bringing the Murphey Track Club to life. Under her
                leadership, the club has grown from its founding into a
                competitive force in youth track &amp; field across the Memphis
                region and beyond.
              </p>
              {headCoach.email && (
                <a
                  href={`mailto:${headCoach.email}`}
                  className="inline-flex items-center gap-2 text-orange font-semibold font-body hover:text-orange-light transition-colors"
                >
                  <Mail className="w-4 h-4" /> {headCoach.email}
                </a>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== SITE LEAD ===== */}
      <section className="bg-cream py-16 md:py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="w-24 h-24 bg-charcoal rounded-full flex items-center justify-center shrink-0">
                <span className="text-2xl font-extrabold font-heading text-orange">KG</span>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange font-body mb-2">
                  Site Lead — Halle Stadium
                </p>
                <h3 className="text-3xl md:text-4xl font-extrabold font-heading uppercase text-charcoal">
                  {siteLead.name}
                </h3>
                <p className="text-gray-700 font-body mt-2">
                  Oversees day-to-day operations and training at the club&apos;s
                  home base, Halle Stadium.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== ASSISTANT COACHES ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionEyebrow>Assistant Coaches</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading uppercase text-charcoal leading-[0.92] mb-10 md:mb-14">
              The Squad Behind The Squad.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {assistants.map((coach, i) => (
              <FadeIn key={coach.name} delay={i * 60}>
                <div className="border border-gray-200 p-5 md:p-6 hover:border-orange/40 hover:bg-cream transition-all duration-300 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-lg font-extrabold font-heading text-charcoal">
                      {coach.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-lg font-extrabold font-heading uppercase text-charcoal">
                    {coach.name}
                  </h3>
                  <p className="text-xs font-semibold tracking-[0.1em] uppercase text-gray-500 font-body mt-1">
                    {coach.role}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-charcoal py-16 md:py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-white leading-[0.92] mb-6">
              Ready To
              <br />
              <span className="text-gradient">Join The Team?</span>
            </h2>
            <p className="text-lg text-gray-400 font-body max-w-xl mx-auto mb-12 leading-relaxed">
              Registration is open for elementary, middle, and high school
              athletes. $100 covers your USATF membership and club uniform.
            </p>
            <Link
              href="/join"
              className="btn-slide-up-white inline-flex items-center gap-2 px-10 py-4 bg-orange text-charcoal text-base font-bold uppercase tracking-wider font-body"
            >
              Register Now <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
