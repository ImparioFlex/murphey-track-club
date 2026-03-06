import Image from "next/image";
import Link from "next/link";
import { CalendarDays, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import GrassDivider from "@/components/GrassDivider";
import SectionEyebrow from "@/components/SectionEyebrow";
import FadeIn from "@/components/FadeIn";
import { images } from "@/lib/images";

const eliteIncludes = [
  "5 days of structured training (track, tempo, strength, recovery)",
  "Daily coaching sessions with Hayden Cox",
  "Video gait analysis and individual feedback",
  "Nutrition and recovery programming",
  "2 group dinners + athlete social events",
  "Official Grassroots Elite camp kit via VS Athletics",
  "Greenville Parks and Recreation facility access",
];

const communityIncludes = [
  "2-day coached running clinic",
  "Running form and technique sessions",
  "Group runs on the Swamp Rabbit Trail",
  "Q&A with Hayden Cox and Grassroots Elite athletes",
  "Greenville Parks facility access",
  "Community cookout Saturday evening",
];

export default function CampsPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-deep py-24 md:py-40 px-6 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="mx-auto max-w-5xl text-center relative z-10">
          <FadeIn>
            <SectionEyebrow dark>Summer 2025</SectionEyebrow>
            <h1 className="text-[clamp(3.5rem,9vw,8rem)] leading-[0.88] font-extrabold font-heading uppercase text-white mt-6 mb-8">
              Train Here.
              <br />
              <span className="text-gradient">Remember This</span>
              <br />
              Forever.
            </h1>
            <p className="text-lg md:text-xl text-slate-400 font-body max-w-2xl mx-auto leading-relaxed">
              Two camps. Two ways in. One for serious competitors ready to
              level up. One for the whole community to come together around the
              sport we love. Both sell out every year.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== ELITE DEVELOPMENT CAMP ===== */}
      <section className="bg-white py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div>
                <SectionEyebrow>Elite Development Camp</SectionEyebrow>
                <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-dark-green leading-[0.92] mb-8">
                  Five Days.
                  <br />
                  One Focus.
                  <br />
                  Your Breakthrough.
                </h2>

                <div className="space-y-3 mb-10">
                  <div className="flex items-center gap-3 text-slate-600 font-body">
                    <CalendarDays className="w-5 h-5 text-mid-green flex-shrink-0" strokeWidth={1.5} />
                    <span className="font-semibold">July 14 &ndash; 18, 2025</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 font-body">
                    <MapPin className="w-5 h-5 text-mid-green flex-shrink-0" strokeWidth={1.5} />
                    <span>Greenville, SC</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 font-body">
                    <Users className="w-5 h-5 text-mid-green flex-shrink-0" strokeWidth={1.5} />
                    <span>Application-based. <strong className="text-dark-green">Limited to 24 athletes.</strong></span>
                  </div>
                </div>

                <p className="text-slate-600 font-body leading-relaxed mb-8">
                  This is not a weekend fun run. This is five days of focused,
                  elite-level training alongside athletes who are chasing real
                  goals. Daily sessions with Hayden Cox. Video analysis.
                  Nutrition programming. Two group dinners where the
                  conversations are just as valuable as the workouts. Limited
                  spots. Every year sells out.
                </p>

                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-dark-green font-body mb-4">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3 mb-10">
                  {eliteIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-600 font-body leading-relaxed">
                      <span className="text-mid-green mt-0.5 text-lg leading-none">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-200 pt-8">
                  <p className="stat-number text-4xl md:text-6xl text-dark-green mb-1">
                    $595
                  </p>
                  <p className="text-sm text-slate-400 font-body uppercase tracking-wider font-semibold mb-8">
                    Per Athlete
                  </p>

                  <Link
                    href="/join"
                    className="btn-slide-up inline-flex items-center gap-2 px-10 py-4 bg-dark-green text-white text-base font-bold uppercase tracking-wider font-body"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="relative h-[600px] overflow-hidden">
                <Image
                  src={images.heroTrack}
                  alt="Athletes training on the track"
                  fill
                  className="object-cover"
                />
                {/* Urgency badge */}
                <div className="absolute top-0 right-0 bg-electric text-dark-green px-6 py-3">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] font-body">
                    Only 24 Spots
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <GrassDivider />

      {/* ===== COMMUNITY CAMP ===== */}
      <section className="bg-mint py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn className="order-2 lg:order-1">
              <div className="relative h-[600px] overflow-hidden">
                <Image
                  src={images.communityRunners}
                  alt="Community runners on the trail"
                  fill
                  className="object-cover"
                />
                {/* Urgency badge */}
                <div className="absolute top-0 left-0 bg-forest-green text-white px-6 py-3">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] font-body">
                    Open Enrollment
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={150} className="order-1 lg:order-2">
              <div>
                <SectionEyebrow>Community Camp</SectionEyebrow>
                <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-dark-green leading-[0.92] mb-8">
                  The Weekend
                  <br />
                  You&apos;ll Talk
                  <br />
                  About All Year.
                </h2>

                <div className="space-y-3 mb-10">
                  <div className="flex items-center gap-3 text-slate-600 font-body">
                    <CalendarDays className="w-5 h-5 text-forest-green flex-shrink-0" strokeWidth={1.5} />
                    <span className="font-semibold">August 9 &ndash; 10, 2025</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 font-body">
                    <MapPin className="w-5 h-5 text-forest-green flex-shrink-0" strokeWidth={1.5} />
                    <span>Greenville, SC</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600 font-body">
                    <Clock className="w-5 h-5 text-forest-green flex-shrink-0" strokeWidth={1.5} />
                    <span>All ages 12+. All abilities. Families welcome.</span>
                  </div>
                </div>

                <p className="text-slate-600 font-body leading-relaxed mb-8">
                  Two days of coached running, trail runs on the Swamp Rabbit,
                  form clinics, a Q&A with Hayden and Grassroots Elite athletes,
                  and a Saturday evening cookout that turns strangers into
                  training partners. Bring your family. Bring your crew. Last
                  year&apos;s camp filled up in 11 days.
                </p>

                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-dark-green font-body mb-4">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3 mb-10">
                  {communityIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-600 font-body leading-relaxed">
                      <span className="text-forest-green mt-0.5 text-lg leading-none">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-dark-green/10 pt-8">
                  <div className="flex items-baseline gap-6 mb-1">
                    <div>
                      <p className="stat-number text-4xl md:text-6xl text-dark-green">
                        $95
                      </p>
                      <p className="text-sm text-slate-400 font-body uppercase tracking-wider font-semibold">
                        Per Person
                      </p>
                    </div>
                    <div className="text-slate-300 text-3xl font-heading">/</div>
                    <div>
                      <p className="stat-number text-4xl md:text-6xl text-dark-green">
                        $150
                      </p>
                      <p className="text-sm text-slate-400 font-body uppercase tracking-wider font-semibold">
                        Per Family
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/join"
                      className="btn-slide-up inline-flex items-center gap-2 px-10 py-4 bg-forest-green text-white text-base font-bold uppercase tracking-wider font-body"
                    >
                      Register Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="bg-dark-green py-20 md:py-32 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="mx-auto max-w-3xl text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-white leading-[0.92] mb-6">
              Can&apos;t Make It
              <br />
              <span className="text-gradient">This Year?</span>
            </h2>
            <p className="text-lg text-slate-400 font-body max-w-xl mx-auto mb-10 leading-relaxed">
              Join the club and be the first to know when camp registration
              opens. Members get early access before spots go public.
            </p>
            <Link
              href="/join"
              className="btn-slide-up-white inline-flex items-center gap-2 px-10 py-4 bg-electric text-dark-green text-base font-bold uppercase tracking-wider font-body"
            >
              Join the Club <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
