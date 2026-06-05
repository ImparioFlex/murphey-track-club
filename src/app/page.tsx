import Image from "next/image";
import Link from "next/link";
import { Trophy, Users, Heart, ArrowRight, Calendar, MapPin } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import SponsorStrip from "@/components/SponsorStrip";
import CTABanner from "@/components/CTABanner";
import InstagramFeed from "@/components/InstagramFeed";
import FadeIn from "@/components/FadeIn";
import { images } from "@/lib/images";

const stats = [
  { number: "250+", label: "ATHLETES", sub: "Across 3 training sites" },
  { number: "2023", label: "EST.", sub: "Memphis, Tennessee" },
  { number: "2", label: "NATIONAL CHAMPIONS", sub: "Plus 20+ qualifiers & NCAA signees" },
];

const schedule = [
  { date: "Jun 1-5", event: "Shelby Metro T&F Camp", location: "Halle Stadium" },
  { date: "Jun 6", event: "Fast & Furious Invitational", location: "Bartlett HS" },
  { date: "Jun 13", event: "USATF TN Championships", location: "Bartlett HS" },
  { date: "Jun 18", event: "Orange & White Inter Squad", location: "Halle Stadium" },
  { date: "Jun 24-27", event: "USATF Youth Championships", location: "Huntsville, AL" },
  { date: "Jul 10-12", event: "USATF JO Region Championships", location: "Collierville HS" },
  { date: "Jul 18-20", event: "U20 USATF Championships", location: "Eugene, OR" },
  { date: "Jul 27 - Aug 2", event: "USATF Junior Olympics Championships", location: "Cerritos, CA" },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pb-20 md:pb-28 -mt-20 pt-20">
        <Image
          src={images.hero}
          alt="Youth athletes racing on the track"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-charcoal/90" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="flex justify-center mb-8">
            <Image
              src="/logos/mtc-logo-new.png"
              alt="MTC Logo"
              width={120}
              height={120}
              className="w-24 md:w-32 h-auto"
            />
          </div>
          <p className="text-sm md:text-base font-bold tracking-[0.25em] uppercase text-orange mb-6 font-body">
            Memphis, TN &bull; AAU &amp; USATF Sanctioned
          </p>
          <h1 className="text-[clamp(2.5rem,7vw,6rem)] leading-[0.92] font-extrabold font-heading uppercase text-white mb-8">
            Keeping Our Kids
            <br />
            <span className="text-gradient">On The Right Track</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-body max-w-3xl mx-auto mb-12 leading-relaxed text-pretty">
            No-cost track and field coaching and team experience for Memphis
            and area middle and high school athletes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/join"
              className="btn-slide-up-white px-10 py-4 bg-orange text-charcoal text-base font-bold uppercase tracking-wider font-body"
            >
              Register Your Athlete
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
      <section className="bg-charcoal py-10 md:py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center px-4 md:px-8">
                <p className="stat-number text-4xl md:text-6xl text-orange">
                  {stat.number}
                </p>
                <p className="text-sm md:text-base font-bold tracking-[0.25em] uppercase text-white/80 font-body mt-3">
                  {stat.label}
                </p>
                <p className="text-base md:text-lg text-white/60 font-body mt-1">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THREE PILLARS ===== */}
      <section className="bg-white py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <div className="max-w-3xl">
              <SectionEyebrow>Why Murphey Track Club</SectionEyebrow>
              <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-charcoal leading-[0.92] mb-6 md:mb-10">
                More Than
                <br />
                A Track Club.
              </h2>
              <p className="text-xl text-gray-700 font-body leading-relaxed max-w-3xl text-pretty">
                We develop young athletes through structured coaching,
                competitive opportunities, and a community that believes every
                kid deserves a chance to discover what they are capable of.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-12 md:mt-20 border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            {[
              {
                icon: Trophy,
                title: "Competition",
                text: "From local invitationals to USATF Junior Olympics. Our athletes compete at every level, from Shelby County to the national stage in California.",
                link: "/schedule",
                cta: "See Schedule",
              },
              {
                icon: Users,
                title: "Coaching",
                text: "10 dedicated coaches led by Executive Director Alisa Seymour. Structured training Monday, Tuesday, and Thursday at Halle Stadium.",
                link: "/coaches",
                cta: "Meet the Coaches",
              },
              {
                icon: Heart,
                title: "Community",
                text: "All proceeds go to local youth programs. Free coaching clinics, donated team tents to 16 schools, and the MSCS Summer Metro Camp.",
                link: "/about",
                cta: "Our Impact",
              },
            ].map((item) => (
              <FadeIn key={item.title} className="h-full">
                <div className="p-6 md:p-10 lg:p-12 hover:bg-cream transition-colors duration-300 h-full flex flex-col">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-orange mb-4 md:mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl font-extrabold font-heading uppercase text-charcoal mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-body leading-relaxed mb-6">
                    {item.text}
                  </p>
                  <Link
                    href={item.link}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider font-body text-charcoal hover:text-orange transition-colors"
                  >
                    {item.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSTAGRAM FEED ===== */}
      <InstagramFeed />

      {/* ===== THE MISSION ===== */}
      <section className="bg-cream py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div>
                <SectionEyebrow>The Mission</SectionEyebrow>
                <h2 className="text-4xl md:text-5xl font-extrabold font-heading uppercase text-charcoal leading-[0.92] mb-6 md:mb-10">
                  Every Kid
                  <br />
                  Deserves A
                  <br />
                  <span className="text-orange">Starting Line.</span>
                </h2>
                <div className="space-y-6 text-gray-700 font-body leading-relaxed">
                  <p>
                    The Murphey Track Club was established in 2023 to serve
                    youth athletes in Memphis and surrounding areas. We hold
                    membership with both the Amateur Athletic Union (AAU) and
                    USA Track &amp; Field (USATF).
                  </p>
                  <p className="text-charcoal font-semibold text-lg">
                    ALL proceeds from merchandise, concessions, registration
                    fees, and tickets go to LOCAL YOUTH PROGRAMS.
                  </p>
                  <p>
                    From free coaching clinics to donated team tents for Shelby
                    County schools, everything we do is designed to give young
                    athletes the structure, coaching, and competitive
                    opportunities they need to succeed.
                  </p>
                </div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 mt-8 text-orange font-semibold font-body hover:gap-3 transition-all"
                >
                  Read the full story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative h-[500px] overflow-hidden">
                <Image
                  src={images.storyPhoto}
                  alt="Youth athlete training"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== UPCOMING COMPETITIONS ===== */}
      <section className="bg-white py-20 md:py-32 px-6">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16">
              <SectionEyebrow>2026 Season</SectionEyebrow>
              <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-charcoal leading-[0.92] text-balance">
                Upcoming Competitions
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-charcoal">
                    <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs font-bold tracking-[0.15em] uppercase text-white font-body">
                      Date
                    </th>
                    <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs font-bold tracking-[0.15em] uppercase text-white font-body">
                      Event
                    </th>
                    <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs font-bold tracking-[0.15em] uppercase text-white font-body hidden md:table-cell">
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body text-base">
                  {schedule.map((row, i) => (
                    <tr
                      key={row.event}
                      className={`border-t border-gray-200 ${
                        i % 2 === 0 ? "bg-white" : "bg-gray-100"
                      }`}
                    >
                      <td className="px-3 md:px-6 py-3 md:py-5 font-bold text-orange-dark font-heading uppercase tracking-wide whitespace-nowrap">
                        {row.date}
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-5 text-charcoal font-semibold">
                        {row.event}
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-5 text-gray-500 hidden md:table-cell">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {row.location}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="text-center mt-8">
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 text-orange font-semibold font-body hover:gap-3 transition-all"
              >
                See full schedule <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== TRAINING INFO ===== */}
      <section className="bg-deep py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <SectionEyebrow dark>Training</SectionEyebrow>
              <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-white leading-[0.92] mb-6 md:mb-10">
                Halle Stadium.
                <br />
                Three Days
                <br />
                <span className="text-gradient">A Week.</span>
              </h2>
              <div className="space-y-6 text-gray-400 font-body leading-relaxed">
                <p className="text-pretty">
                  Training runs Monday, Tuesday, and Thursday from 5:30 PM to
                  7:00 PM at Halle Stadium. Season begins June 1st.
                </p>
                <p className="text-white font-semibold text-lg text-pretty">
                  $100 competition fee covers USATF membership and club uniform.
                </p>
                <p className="text-pretty">
                  Open to elementary, middle, and high school athletes in
                  Memphis and the surrounding areas.
                </p>
              </div>
              <div className="flex items-center gap-6 mt-10">
                <div className="flex items-center gap-2 text-orange-light font-body">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">Mon / Tue / Thu</span>
                </div>
                <div className="flex items-center gap-2 text-orange-light font-body">
                  <MapPin className="w-5 h-5" />
                  <span className="font-semibold">Halle Stadium</span>
                </div>
              </div>
              <div className="mt-10">
                <Link
                  href="/join"
                  className="btn-slide-up-white inline-flex items-center gap-2 px-10 py-4 bg-orange text-charcoal text-base font-bold uppercase tracking-wider font-body"
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative h-[520px] overflow-hidden">
                <Image
                  src={images.heroTrack}
                  alt="Athletes training at Halle Stadium"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent" />
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
