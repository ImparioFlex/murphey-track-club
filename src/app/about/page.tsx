import Image from "next/image";
import Link from "next/link";
import SectionEyebrow from "@/components/SectionEyebrow";
import FadeIn from "@/components/FadeIn";
import { images } from "@/lib/images";
import { ArrowRight, School, Gift, Users, Trophy } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[50vh] md:h-[70vh] min-h-[400px] md:min-h-[500px] flex items-end overflow-hidden">
        <Image
          src={images.trackRace}
          alt="Track athletes competing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="relative z-10 px-6 pb-20 max-w-6xl mx-auto w-full">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-orange mb-6 font-body">
            Our Story
          </p>
          <h1 className="text-[clamp(4rem,10vw,9rem)] leading-[0.88] font-extrabold font-heading uppercase text-white">
            Who We Are
          </h1>
        </div>
      </section>

      {/* ===== STORY ===== */}
      <section className="bg-white py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <FadeIn className="lg:col-span-5">
              <SectionEyebrow>The Mission</SectionEyebrow>
              <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-charcoal leading-[0.92] mb-6 md:mb-10">
                Keep Our
                <br />
                Kids On The
                <br />
                <span className="text-orange">Right Track.</span>
              </h2>
              <div className="flex gap-8 md:gap-12 mt-8 md:mt-12">
                <div>
                  <p className="stat-number text-4xl md:text-5xl text-charcoal">2023</p>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 font-body mt-2">
                    Founded
                  </p>
                </div>
                <div>
                  <p className="stat-number text-4xl md:text-5xl text-charcoal">16+</p>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 font-body mt-2">
                    Schools Served
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={100} className="lg:col-span-7">
              <div className="space-y-6 text-gray-700 font-body leading-relaxed text-lg">
                <p className="text-charcoal font-semibold text-xl">
                  Every kid in Memphis deserves a coach, a team, and a reason
                  to believe in themselves.
                </p>
                <p>
                  The Murphey Track Club was established in 2023 as part of the
                  Ed Murphey Classic&apos;s commitment to youth development in
                  Memphis and surrounding areas. Named after Ed Murphey —
                  1955-1957 SEC Mile Champion — the club carries forward a
                  legacy of excellence in track &amp; field.
                </p>
                <p>
                  We hold membership with both the Amateur Athletic Union (AAU)
                  and USA Track &amp; Field (USATF), providing our athletes with
                  access to sanctioned competition at the local, regional, and
                  national level.
                </p>
                <p>
                  Under the leadership of Executive Director and Head Coach
                  Alisa Seymour, the club serves elementary, middle, and high
                  school athletes with structured training three days a week at
                  Halle Stadium.
                </p>
                <p className="text-charcoal font-semibold">
                  ALL proceeds from merchandise, concessions, registration fees,
                  and tickets go directly to local youth programs.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY IMPACT ===== */}
      <section className="bg-cream py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionEyebrow>Community Impact</SectionEyebrow>
            <h2 className="text-4xl md:text-7xl font-extrabold font-heading uppercase text-charcoal leading-[0.88] mb-4 md:mb-6">
              Beyond The Track.
            </h2>
            <p className="text-lg text-gray-700 font-body leading-relaxed max-w-2xl mb-14 md:mb-20">
              Track &amp; field is the vehicle. Youth empowerment is the
              destination. Here&apos;s how we give back.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                Icon: School,
                title: "Tent Donations",
                stat: "16",
                statLabel: "schools received tents",
                text: "Branded track & field tents distributed to Shelby County schools including Booker T Washington High, Douglass K8, Hamilton High, Oakhaven High, and more.",
              },
              {
                Icon: Gift,
                title: "Free Clinics",
                stat: "2nd",
                statLabel: "annual clinic",
                text: "Free coaching clinics open to all young athletes in Memphis. Guest speakers, hands-on instruction, and mentorship from experienced coaches.",
              },
              {
                Icon: Users,
                title: "Summer Metro Camp",
                stat: "MSCS",
                statLabel: "partnership",
                text: "Partnership with Memphis-Shelby County Schools to host the Summer Metro Camp, introducing track & field to students across the district.",
              },
              {
                Icon: Trophy,
                title: "National Competition",
                stat: "JOs",
                statLabel: "USATF Junior Olympics",
                text: "Our athletes compete from local invitationals all the way to the USATF Junior Olympics Championships, building character through competition.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 50}>
                <div className="bg-white border border-gray-200 p-6 md:p-8 lg:p-10 h-full group hover:bg-cream-dark hover:border-orange/30 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <item.Icon className="w-8 h-8 md:w-10 md:h-10 text-orange shrink-0" strokeWidth={1.2} />
                    <div className="h-[2px] flex-1 bg-gradient-to-r from-orange/40 via-orange-light/20 to-transparent" />
                    <div className="text-right shrink-0 pr-3">
                      <p className="text-3xl font-extrabold font-heading italic text-gradient leading-none pr-[0.15em]">
                        {item.stat}
                      </p>
                      <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 font-body mt-1">
                        {item.statLabel}
                      </p>
                    </div>
                  </div>
                  <h3 className="text-xl font-extrabold font-heading uppercase text-charcoal mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-body leading-relaxed text-base">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ED MURPHEY LEGACY ===== */}
      <section className="bg-deep py-20 md:py-32 px-6">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <SectionEyebrow dark>The Legacy</SectionEyebrow>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-white leading-[0.92] mb-4">
              Ed Murphey
            </h2>
            <p className="text-orange-light font-body font-medium text-base mb-10 md:mb-12">
              1955–1957 SEC Mile Champion
            </p>
            <div className="space-y-5 text-gray-400 font-body leading-relaxed">
              <p>
                The Ed Murphey Classic — now entering its 10th year — honors
                the legacy of a true champion. A three-time SEC Mile Champion,
                Ed Murphey dedicated his life to the sport of track &amp; field
                and to the community of Memphis.
              </p>
              <p>
                What started as a track meet has grown into a movement. The Ed
                Murphey Classic is now the final stop on the inaugural USATF
                Tour, joining Los Angeles, Philadelphia, Portland, Tucson, and
                eight other cities. It features $50,000 in prize money and
                attracts world-class athletes including Ryan Crouser — 3-time
                Olympic Champion and World Record holder.
              </p>
              <p>
                The Murphey Track Club extends that legacy to the next
                generation — ensuring that every young athlete in Memphis has
                access to the coaching, competition, and community that Ed
                Murphey believed in.
              </p>
            </div>

            <blockquote className="mt-12 md:mt-16 border-l-2 border-orange pl-5 md:pl-8">
              <p className="text-2xl md:text-3xl font-heading font-bold text-white/90 leading-snug italic">
                &ldquo;The track doesn&apos;t care where you come from.
                It only cares how hard you&apos;re willing to work.&rdquo;
              </p>
            </blockquote>
          </FadeIn>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section className="bg-charcoal py-16 md:py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-white leading-[0.92] mb-6">
              Be Part Of
              <br />
              The Movement.
            </h2>
            <p className="text-lg text-white/60 font-body leading-relaxed max-w-xl mx-auto mb-12">
              Whether you register an athlete, volunteer your time, or support
              with a donation — you are helping build the future of track &amp;
              field in Memphis.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/join"
                className="btn-slide-up-white px-10 py-4 bg-orange text-charcoal text-base font-bold uppercase tracking-wider font-body inline-flex items-center gap-2"
              >
                Register Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/donate"
                className="btn-slide-up-white px-10 py-4 border-2 border-white text-white text-base font-bold uppercase tracking-wider font-body"
              >
                Donate
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
