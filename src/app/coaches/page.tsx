import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import FadeIn from "@/components/FadeIn";

const assistants = [
  { name: "Morris Williams", role: "Assistant Coach" },
  { name: "Devon Dillard", role: "Assistant Coach" },
  { name: "Sam Jones", role: "Assistant Coach" },
  { name: "Pamela Smith", role: "Assistant Coach" },
  { name: "Sam Henderson", role: "Assistant Coach" },
  { name: "Marina Simpson", role: "Assistant Coach" },
  { name: "Quintel Cooks", role: "Assistant Coach" },
];

export default function CoachesPage() {
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
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn>
              <div>
                <div className="flex items-center gap-5 mb-8">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0">
                    <Image
                      src="/images/coach-seymour.jpg"
                      alt="Alisa Seymour"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <SectionEyebrow dark>Executive Director &amp; Head Coach</SectionEyebrow>
                    <h2 className="text-3xl md:text-5xl font-extrabold font-heading uppercase text-white leading-[0.92]">
                      Alisa Seymour
                    </h2>
                  </div>
                </div>
                <p className="text-sm text-orange-light font-body font-medium tracking-wider uppercase mb-8">
                  Head Track Coach, Collierville HS &bull; USTFCCCA National Coach of the Year
                </p>
                <div className="space-y-4 text-gray-400 font-body leading-relaxed">
                  <p>
                    Hired as Executive Director and Head Coach in March 2023,
                    bringing the Murphey Track Club to life. A former track &amp;
                    field athlete at the University of Memphis, she holds a degree
                    in Journalism and two Masters degrees in Education.
                  </p>
                  <p>
                    At Collierville High School, she led the program to
                    back-to-back Class AAA state championships (2024, 2025) and
                    was named the 2025 USTFCCCA National High School Girls Track
                    &amp; Field Coach of the Year — the first from Tennessee.
                  </p>
                  <p>
                    Under her leadership, the Murphey Track Club has produced 20+
                    national qualifiers, 2 national champions, and NCAA signees
                    in just two seasons.
                  </p>
                </div>
                <a
                  href="mailto:agseymour1913@gmail.com"
                  className="inline-flex items-center gap-2 mt-8 text-orange font-semibold font-body hover:text-orange-light transition-colors"
                >
                  <Mail className="w-4 h-4" /> agseymour1913@gmail.com
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="lg:mt-16">
                <blockquote className="border-l-2 border-orange pl-6 md:pl-8">
                  <p className="text-2xl md:text-3xl font-heading text-white/90 leading-snug italic">
                    &ldquo;Growing up in the inner city and participating in the
                    youth track program played a pivotal role in shaping me into
                    the person I am today. I hope to be a catalyst in providing
                    this opportunity to other children just like me.&rdquo;
                  </p>
                </blockquote>
                <div className="mt-10 grid grid-cols-2 gap-6">
                  <div>
                    <p className="stat-number text-3xl md:text-4xl text-orange">20+</p>
                    <p className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 font-body mt-2">National Qualifiers</p>
                  </div>
                  <div>
                    <p className="stat-number text-3xl md:text-4xl text-orange">2</p>
                    <p className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 font-body mt-2">National Champions</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== KEY STAFF ===== */}
      <section className="bg-cream py-16 md:py-24 px-6">
        <div className="mx-auto max-w-5xl space-y-10 md:space-y-12">
          <FadeIn>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/images/coach-griffith.png"
                  alt="Kevaughn Griffith"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange font-body mb-2">
                  Site Lead — Halle Stadium
                </p>
                <h3 className="text-3xl md:text-4xl font-extrabold font-heading uppercase text-charcoal">
                  Kevaughn Griffith
                </h3>
                <p className="text-gray-700 font-body mt-3 leading-relaxed max-w-xl">
                  Two-time TSSAA state champion in the 110m hurdles at White
                  Station High School. Competed Division I at the University of
                  South Carolina. Now oversees day-to-day operations and training
                  at Halle Stadium.
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="border-t border-gray-200" />

          <FadeIn delay={100}>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                <Image
                  src="/images/coach-blackwell.webp"
                  alt="Nick Blackwell"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange font-body mb-2">
                  Throws Coach — MUS / Hutchison
                </p>
                <h3 className="text-3xl md:text-4xl font-extrabold font-heading uppercase text-charcoal">
                  Nick Blackwell
                </h3>
                <p className="text-gray-700 font-body mt-3 leading-relaxed max-w-xl">
                  14 years of coaching experience specializing in throws. Has
                  produced 5 state qualifiers and a state decathlon champion. Also
                  brings 14 years of football coaching, with 9 athletes placed at
                  NCAA Division I, II, and III programs.
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
