import Image from "next/image";
import Link from "next/link";
import { Zap, Users, Mountain, ArrowRight } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import SponsorStrip from "@/components/SponsorStrip";
import CTABanner from "@/components/CTABanner";
import FadeIn from "@/components/FadeIn";
import { images } from "@/lib/images";

const stats = [
  { number: "30+", label: "ATHLETES", sub: "Elite and community runners" },
  { number: "12", label: "OTQ / NATIONAL QUALIFIERS", sub: "And counting" },
  { number: "1", label: "MISSION", sub: "Keep the dream alive post-college" },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src={images.hero}
          alt="Runners on the track at dawn"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-dark-green/80" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-sm md:text-base font-bold tracking-[0.25em] uppercase text-electric mb-8 font-body">
            Greenville, SC Running Club
          </p>
          <h1 className="text-[clamp(4rem,10vw,9rem)] leading-[0.88] font-extrabold font-heading uppercase text-white mb-8">
            Show Up.
            <br />
            Run Hard.
            <br />
            <span className="text-gradient">Belong.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-body max-w-2xl mx-auto mb-12 leading-relaxed">
            Elite coaching from a coach of American Record holders and national
            champions. A community that actually shows up. Based in one of the
            South&apos;s fastest-growing running cities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/join"
              className="btn-slide-up-white px-10 py-4 bg-electric text-dark-green text-base font-bold uppercase tracking-wider font-body"
            >
              Join the Club
            </Link>
            <Link
              href="/about"
              className="btn-slide-up-white px-10 py-4 border-2 border-white text-white text-base font-bold uppercase tracking-wider font-body"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-dark-green py-10 md:py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-4 md:px-8">
                <p className="stat-number text-4xl md:text-6xl text-electric">
                  {stat.number}
                </p>
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/60 font-body mt-3">
                  {stat.label}
                </p>
                <p className="text-sm text-white/40 font-body mt-1">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT WE ARE ===== */}
      <section className="bg-white py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="max-w-3xl">
              <SectionEyebrow>Why Grassroots Elite</SectionEyebrow>
              <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-dark-green leading-[0.92] mb-8">
                Not a Joggers&apos; Club.
                <br />
                A Running Team.
              </h2>
              <p className="text-lg text-slate-600 font-body leading-relaxed max-w-2xl">
                This is for people who set their alarm before sunrise because they
                have something to prove. People who want world-class coaching,
                teammates who push them, and a city that makes training feel like
                living.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-12 md:mt-20 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {[
              {
                icon: Zap,
                title: "Elite-Level Coaching",
                text: "Your coach has coached a World #1, American Record holders, and dozens of Olympic Trials qualifiers. Same coach. Your plan.",
              },
              {
                icon: Users,
                title: "Community That Shows Up",
                text: "Tuesday track. Thursday tempo. Saturday long run. This is not a group text. This is a team that meets at 6am because they want to be there.",
              },
              {
                icon: Mountain,
                title: "Greenville, SC",
                text: "220+ sunny days. The Swamp Rabbit Trail. Furman's campus. Paris Mountain. A city that runs, surrounded by a region that races.",
              },
            ].map((item) => (
              <FadeIn key={item.title} className="h-full">
                <div className="p-6 md:p-10 lg:p-12 hover:bg-mint transition-colors duration-300 h-full">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-mid-green mb-4 md:mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-extrabold font-heading uppercase text-dark-green mb-4">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 font-body leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE STORY ===== */}
      <section className="bg-mint py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div>
                <SectionEyebrow>The Story</SectionEyebrow>
                <h2 className="text-4xl md:text-5xl font-extrabold font-heading uppercase text-dark-green leading-[0.92] mb-8">
                  Your Best
                  <br />
                  Miles Are
                  <br />
                  <span className="text-forest-green">Still Ahead.</span>
                </h2>
                <div className="space-y-5 text-slate-600 font-body leading-relaxed">
                  <p>
                    For so many athletes, the final college race feels like the end.
                    The structure disappears. The team dissolves. And the dream
                    quietly fades.
                  </p>
                  <p className="text-dark-green font-semibold text-lg">
                    Grassroots Elite exists to prove that wrong.
                  </p>
                  <p>
                    We are for the runner who is not done yet. The one still
                    chasing standards, still stacking mileage, still refusing to let
                    the fire go out. And we are for the everyday runner who wants
                    to train in a fast, supportive environment and be part of
                    something real.
                  </p>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 mt-8 text-forest-green font-semibold font-body hover:gap-3 transition-all"
                >
                  Read the full story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src={images.storyPhoto}
                  alt="Runner at sunset"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== FEATURED ATHLETES ===== */}
      <section className="bg-white py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16">
              <div>
                <SectionEyebrow>Athletes</SectionEyebrow>
                <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-dark-green leading-[0.92]">
                  Real People.
                  <br />
                  Real PRs.
                </h2>
              </div>
              <Link
                href="/athletes"
                className="mt-6 md:mt-0 inline-flex items-center gap-2 text-forest-green font-semibold font-body hover:gap-3 transition-all"
              >
                Meet the team <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Marcus Delray",
                event: "5K / 10K",
                stat: "14:42 to 13:51",
                image: images.marcus,
              },
              {
                name: "Claire Whitmore",
                event: "Marathon",
                stat: "Olympic Trials Qualifier",
                image: images.claire,
              },
              {
                name: "Jonah Parrish",
                event: "Steeplechase",
                stat: "Cut from college. Top-15 at USATFs.",
                image: images.jonah,
              },
            ].map((athlete, i) => (
              <FadeIn key={athlete.name} delay={i * 100}>
                <Link href="/athletes" className="group block">
                  <div className="relative h-96 overflow-hidden bg-slate-100">
                    <Image
                      src={athlete.image}
                      alt={athlete.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-electric/30 via-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-xs font-bold tracking-[0.2em] uppercase text-electric font-body">
                        {athlete.event}
                      </p>
                      <h3 className="text-2xl font-extrabold font-heading uppercase text-white mt-1">
                        {athlete.name}
                      </h3>
                      <p className="text-sm text-white/70 font-body mt-1">
                        {athlete.stat}
                      </p>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COACH ===== */}
      <section className="bg-deep py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
            <FadeIn className="lg:col-span-2">
              <div className="relative h-[480px] overflow-hidden">
                <Image
                  src={images.coach}
                  alt="Coach Hayden Cox"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-electric/30 via-transparent to-transparent" />
              </div>
            </FadeIn>
            <FadeIn delay={100} className="lg:col-span-3">
              <SectionEyebrow dark>Head Coach</SectionEyebrow>
              <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-white leading-[0.92] mb-8">
                Hayden Cox
              </h2>
              <div className="space-y-5 text-slate-400 font-body leading-relaxed">
                <p>
                  Hayden has coached a World #1, American Record holders, USATF
                  Cross Country National Champions, and dozens of Olympic Trials
                  qualifiers. With over a decade at the high school, NCAA
                  Division I, and elite club levels, he brings a rare combination
                  of analytical precision and genuine care to every training plan.
                </p>
                <blockquote className="border-l-2 border-electric pl-4 md:pl-6 text-lg text-white/80 italic">
                  &ldquo;When you have real community, real coaching, and real
                  belief in what&apos;s possible, the ceiling just keeps
                  rising.&rdquo;
                </blockquote>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 mt-8 text-electric font-semibold font-body hover:gap-3 transition-all"
              >
                Full bio <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== GEAR CALLOUT ===== */}
      <section className="bg-white py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <div>
                <SectionEyebrow>Official Gear</SectionEyebrow>
                <h2 className="text-4xl md:text-5xl font-extrabold font-heading uppercase text-dark-green leading-[0.92] mb-8">
                  Rep the Club.
                  <br />
                  Support the Mission.
                </h2>
                <p className="text-slate-600 font-body leading-relaxed mb-4">
                  Official Grassroots Elite kit through VS Athletics. Shop
                  through our link and get 10% off everything. Another 10% goes
                  straight back to the club.
                </p>
                <p className="text-dark-green font-semibold font-body">
                  You are not just buying gear. You are part of the team.
                </p>
                <a
                  href="https://vsathletics.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-slide-up inline-flex items-center gap-2 mt-8 px-10 py-4 bg-dark-green text-white text-base font-bold uppercase tracking-wider font-body"
                >
                  Shop the Store <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative h-96 overflow-hidden bg-slate-100">
                <Image
                  src={images.gear}
                  alt="Running gear and apparel"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== SPONSORS ===== */}
      <SponsorStrip />

      {/* ===== BOTTOM CTA ===== */}
      <CTABanner />
    </>
  );
}
