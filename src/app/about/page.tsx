import Image from "next/image";
import Link from "next/link";
import GrassDivider from "@/components/GrassDivider";
import SectionEyebrow from "@/components/SectionEyebrow";
import FadeIn from "@/components/FadeIn";
import { images } from "@/lib/images";
import { ArrowRight, Sun, TreePine, Users, Building2, Instagram, Mail, Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[50vh] md:h-[70vh] min-h-[400px] md:min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={images.greenville}
          alt="Greenville, South Carolina"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 px-6 pb-20 max-w-6xl mx-auto w-full">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-electric mb-6 font-body">
            Our Story
          </p>
          <h1 className="text-[clamp(4rem,10vw,9rem)] leading-[0.88] font-extrabold font-heading uppercase text-white">
            Who We Are
          </h1>
        </div>
      </section>

      {/* ===== STORY SECTION ===== */}
      <section className="bg-white py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Left column — big statement */}
            <FadeIn className="lg:col-span-5">
              <SectionEyebrow>The Mission</SectionEyebrow>
              <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-dark-green leading-[0.92] mb-8">
                Built for
                <br />
                the Athlete
                <br />
                Who Isn&apos;t
                <br />
                <span className="text-forest-green">Done Yet.</span>
              </h2>
              <div className="flex gap-8 md:gap-12 mt-8 md:mt-12">
                <div>
                  <p className="stat-number text-4xl md:text-5xl text-dark-green">10+</p>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 font-body mt-2">
                    Years Coaching
                  </p>
                </div>
                <div>
                  <p className="stat-number text-4xl md:text-5xl text-dark-green">50+</p>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-slate-400 font-body mt-2">
                    Trials Qualifiers
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Right column — prose */}
            <FadeIn delay={100} className="lg:col-span-7">
              <div className="space-y-6 text-slate-600 font-body leading-relaxed text-lg">
                <p className="text-dark-green font-semibold text-xl">
                  Your college eligibility expired. Your dream didn&apos;t.
                </p>
                <p>
                  Grassroots Elite was born from a simple belief: the best running
                  of your life does not have to end when the NCAA chapter closes.
                  For too many athletes, the final college race feels like the
                  finish line. The structure disappears. The team dissolves. The
                  fire quietly goes out.
                </p>
                <p>
                  We exist to prove that wrong.
                </p>
                <p>
                  We are a track and distance running club based in Greenville,
                  SC. Built for the athlete who is knocking on the door, chasing
                  qualifying standards, stacking mileage, and refusing to let the
                  dream go quiet. We are also built for the everyday runner who
                  wants to train in a fast, supportive environment and be part of
                  something that actually matters.
                </p>
                <p>
                  From the sub-elite targeting their first USA Championships
                  appearance to the age-grouper running their best decade,
                  Grassroots Elite is a community where ambition is celebrated at
                  every level. No matter your event, your age group, or your
                  timeline. There is a home for you here.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <GrassDivider className="py-4" />

      {/* ===== WHY GREENVILLE ===== */}
      <section className="bg-mint py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionEyebrow>Home Base</SectionEyebrow>
            <h2 className="text-4xl md:text-7xl font-extrabold font-heading uppercase text-dark-green leading-[0.88] mb-6">
              Why Greenville.
            </h2>
            <p className="text-lg text-slate-600 font-body leading-relaxed max-w-2xl mb-12 md:mb-20">
              Ask any runner who has trained here and you will get the same
              answer: once you run in Greenville, you do not want to leave.
              This is where PRs happen.
            </p>
          </FadeIn>

          {/* Image grid */}
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 mb-16 md:mb-24">
              <div className="relative overflow-hidden h-72 md:h-80">
                <Image
                  src={images.trail}
                  alt="Swamp Rabbit Trail"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative overflow-hidden h-72 md:h-80">
                <Image
                  src={images.mountains}
                  alt="Blue Ridge foothills near Greenville"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="relative overflow-hidden h-72 md:h-80">
                <Image
                  src={images.greenville}
                  alt="Downtown Greenville"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </FadeIn>

          {/* 2x2 grid of subpoints */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                Icon: Sun,
                title: "The Weather",
                stat: "220+",
                statLabel: "sunny days/year",
                text: "Winters that rarely see snow. Spring and fall deliver near-perfect conditions. Even summer yields to early mornings that runners across the country envy.",
              },
              {
                Icon: TreePine,
                title: "The Trails",
                stat: "22mi",
                statLabel: "Swamp Rabbit Trail",
                text: "One of the finest training corridors in the Southeast. Furman campus loops, Paris Mountain elevation, and a rolling road grid built for tempos and long runs.",
              },
              {
                Icon: Users,
                title: "The Community",
                stat: "100+",
                statLabel: "races nearby",
                text: "The Greenville Track Club, founded in 1972, hosts events year-round. Local stores run weekly group runs. Atlanta, Charlotte, Raleigh are all a morning&apos;s drive.",
              },
              {
                Icon: Building2,
                title: "The City",
                stat: "34",
                statLabel: "median age",
                text: "Vibrant downtown. Incredible food scene. Affordable cost of living. The metro is approaching a million people. Your training partners are everywhere.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 50}>
                <div className="bg-white border border-slate-200 p-6 md:p-8 lg:p-10 h-full group hover:bg-mint-dark hover:border-mid-green/30 transition-all duration-300 overflow-visible">
                  <div className="flex items-center gap-4 mb-6">
                    <item.Icon className="w-8 h-8 md:w-10 md:h-10 text-electric shrink-0" strokeWidth={1.2} />
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-mid-green/40 via-electric/20 to-transparent" />
                    <div className="text-right shrink-0 pr-3">
                      <p className="text-3xl font-extrabold font-heading italic text-gradient leading-none pr-[0.15em]">
                        {item.stat}
                      </p>
                      <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-slate-400 font-body mt-1">
                        {item.statLabel}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-xl font-extrabold font-heading uppercase text-dark-green mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 font-body leading-relaxed text-base">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COACH HAYDEN COX ===== */}
      <section className="bg-deep py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <FadeIn className="lg:col-span-2">
              <div className="relative h-[520px] overflow-hidden">
                <Image
                  src={images.coach}
                  alt="Head Coach Hayden Cox"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-electric/30 via-transparent to-transparent" />
              </div>
              <div className="flex items-center gap-4 mt-6">
                <a
                  href="https://instagram.com/grassrootseliterunning"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/15 flex items-center justify-center text-electric hover:bg-electric hover:text-dark-green transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="mailto:hayden@grassrootselite.com"
                  className="w-12 h-12 border border-white/15 flex items-center justify-center text-electric hover:bg-electric hover:text-dark-green transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href="tel:+18005551234"
                  className="w-12 h-12 border border-white/15 flex items-center justify-center text-electric hover:bg-electric hover:text-dark-green transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={100} className="lg:col-span-3">
              <SectionEyebrow dark>Head Coach</SectionEyebrow>
              <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-white leading-[0.92] mb-3">
                Hayden Cox
              </h2>
              <p className="text-electric font-body font-medium text-base mb-10">
                Coach. Attorney. Announcer. Builder.
              </p>
              <div className="space-y-5 text-slate-400 font-body leading-relaxed">
                <p>
                  Hayden Cox does not fit a single mold. That is exactly what
                  makes him exceptional at what he does.
                </p>
                <p>
                  A USATF Level I Certified coach with over a decade of
                  experience at the high school, NCAA Division I, and elite club
                  levels, his resume speaks for itself. His athletes include
                  Krissy Gear (American Record Holder in the Road Mile at 4:23.96,
                  World #1 in the 800m), the Railroad Athletics Women&apos;s Team
                  (2024 USATF Cross Country National Champions), and dozens of
                  Olympic Trials qualifiers across the marathon, track, and roads.
                </p>
                <p>
                  But credentials only tell part of the story. Hayden is also a
                  practicing attorney, a race announcer at top U.S. meets, and an
                  active volunteer on the USATF Men&apos;s Long Distance Running
                  Committee. He brings all of it into how he coaches: the
                  analytical discipline, the public communication, the
                  institutional knowledge of the sport.
                </p>
                <p>
                  His philosophy is built around the individual. Not a program you
                  adapt to, but a program built around you. Your event, your life,
                  your ceiling. He is known for finding the missing percentage
                  points that take athletes from strong to unstoppable, without
                  burning them out in the process.
                </p>
              </div>

            </FadeIn>
          </div>

          {/* Blockquote */}
          <FadeIn>
            <blockquote className="mt-12 md:mt-20 border-l-2 border-electric pl-5 md:pl-8 lg:pl-12 max-w-4xl">
              <p className="text-2xl md:text-3xl font-heading font-bold text-white/90 leading-snug italic">
                &ldquo;When you have real community, real coaching, and real
                belief in what&apos;s possible, the ceiling just keeps rising.
                Sometimes the athlete is the last one to see it. That is what
                great teammates and great coaching are for.&rdquo;
              </p>
              <cite className="block mt-6 text-sm text-electric font-body font-semibold not-italic tracking-wide uppercase">
                Hayden Cox
              </cite>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      <GrassDivider className="py-4 bg-white" />

      {/* ===== BOTTOM CTA ===== */}
      <section className="bg-dark-green py-16 md:py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-white leading-[0.92] mb-6">
              Your Best Miles
              <br />
              Are Still Ahead.
            </h2>
            <p className="text-lg text-white/60 font-body leading-relaxed max-w-xl mx-auto mb-12">
              Whether you are chasing an Olympic Trials qualifier or your first
              sub-20 5K, there is a lane for you here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/join"
                className="btn-slide-up-white px-10 py-4 bg-electric text-dark-green text-base font-bold uppercase tracking-wider font-body inline-flex items-center gap-2"
              >
                Join the Club <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/train"
                className="btn-slide-up-white px-10 py-4 border-2 border-white text-white text-base font-bold uppercase tracking-wider font-body"
              >
                See Training Options
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
