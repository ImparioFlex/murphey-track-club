import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Calendar, MapPin, Trophy, ExternalLink } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import FadeIn from "@/components/FadeIn";
import { images } from "@/lib/images";

export const metadata: Metadata = {
  title: "Ed Murphey Classic | Murphey Track Club",
};

const highlights = [
  { stat: "#1", label: "IN THE WORLD", sub: "Ranked in its category" },
  { stat: "$50K", label: "Prize Money", sub: "Top male & female" },
  { stat: "350+", label: "OLYMPIC ATHLETES", sub: "Hosted since 2017" },
];

export default function MeetPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pb-20 md:pb-28">
        <Image
          src={images.racePack}
          alt="Track competition"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-charcoal/80" />
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <p className="text-sm md:text-base font-bold tracking-[0.25em] uppercase text-orange mb-6 font-body">
            July 10–11, 2026 &bull; University of Memphis
          </p>
          <h1 className="text-[clamp(3rem,9vw,8rem)] leading-[0.88] font-extrabold font-heading uppercase text-white mb-8">
            The Ed Murphey
            <br />
            <span className="text-gradient">Classic</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 font-body max-w-2xl mx-auto mb-12 leading-relaxed">
            The final stop on the inaugural USATF Tour. World-class athletes,
            $50K in prize money, and the Beale Street Murphey Mile. Memphis&apos;s
            premier track &amp; field event — now in its 10th year.
          </p>
          <a
            href="https://edmurpheyclassic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-slide-up-white inline-flex items-center gap-2 px-10 py-4 bg-orange text-charcoal text-base font-bold uppercase tracking-wider font-body"
          >
            Visit EdMurpheyClassic.com <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="bg-charcoal py-10 md:py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/10">
            {highlights.map((stat) => (
              <div key={stat.label} className="text-center px-4 md:px-8">
                <p className="stat-number text-4xl md:text-6xl text-orange">{stat.stat}</p>
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-white/60 font-body mt-3">{stat.label}</p>
                <p className="text-sm text-white/40 font-body mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DETAILS ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn>
              <div>
                <SectionEyebrow>Event Details</SectionEyebrow>
                <h2 className="text-4xl md:text-5xl font-extrabold font-heading uppercase text-charcoal leading-[0.92] mb-8">
                  Two Days Of
                  <br />
                  World-Class
                  <br />
                  <span className="text-orange">Track &amp; Field.</span>
                </h2>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-gray-700 font-body">
                    <Calendar className="w-5 h-5 text-orange flex-shrink-0" strokeWidth={1.5} />
                    <span><strong>Friday July 10 &amp; Saturday July 11, 2026</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 font-body">
                    <MapPin className="w-5 h-5 text-orange flex-shrink-0" strokeWidth={1.5} />
                    <span><strong>University of Memphis</strong>, Memphis, TN</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 font-body">
                    <Trophy className="w-5 h-5 text-orange flex-shrink-0" strokeWidth={1.5} />
                    <span>Featured Athlete: <strong>Ryan Crouser</strong> (3x Olympic Champion)</span>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700 font-body leading-relaxed">
                  <p>
                    The Ed Murphey Classic has grown from a local track meet into
                    one of the most anticipated events in American track &amp;
                    field. In 2026, it joins the inaugural USATF Tour alongside
                    Los Angeles, Philadelphia, Portland, Tucson, and eight other
                    cities.
                  </p>
                  <p>
                    The weekend features elite competition, the iconic Beale
                    Street Murphey Mile, live music, food trucks, beer vendors,
                    merchandise, and a trackside after-party.
                  </p>
                  <p className="text-charcoal font-semibold">
                    ALL proceeds go to local youth programs through the Murphey
                    Track Club.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <div className="space-y-6">
                <div className="border border-gray-200 p-6 md:p-8 hover:border-orange/40 transition-colors">
                  <h3 className="text-lg font-extrabold font-heading uppercase text-charcoal mb-2">
                    Beale Street Murphey Mile
                  </h3>
                  <p className="text-gray-700 font-body leading-relaxed">
                    A one-mile race through the heart of downtown Memphis on
                    legendary Beale Street. Open to runners of all levels.
                  </p>
                  <a
                    href="https://bealestmile.raceroster.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-bold uppercase tracking-wider font-body text-orange hover:text-orange-dark transition-colors"
                  >
                    Register <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="border border-gray-200 p-6 md:p-8 hover:border-orange/40 transition-colors">
                  <h3 className="text-lg font-extrabold font-heading uppercase text-charcoal mb-2">
                    Get Tickets
                  </h3>
                  <p className="text-gray-700 font-body leading-relaxed">
                    Experience world-class track &amp; field live. Tickets
                    available through EventBrite.
                  </p>
                  <a
                    href="https://www.eventbrite.com/e/2026-murphey-classic-tickets-tickets-1985999729653"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-bold uppercase tracking-wider font-body text-orange hover:text-orange-dark transition-colors"
                  >
                    Buy Tickets <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <div className="border border-gray-200 p-6 md:p-8 hover:border-orange/40 transition-colors">
                  <h3 className="text-lg font-extrabold font-heading uppercase text-charcoal mb-2">
                    Volunteer
                  </h3>
                  <p className="text-gray-700 font-body leading-relaxed">
                    Help make the Ed Murphey Classic happen. Volunteers are the
                    backbone of this event.
                  </p>
                  <a
                    href="https://www.givepulse.com/event/836308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 text-sm font-bold uppercase tracking-wider font-body text-orange hover:text-orange-dark transition-colors"
                  >
                    Sign Up <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== SPONSORS ===== */}
      <section className="bg-cream py-16 md:py-20 px-6">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="text-center">
              <SectionEyebrow>2026 Sponsors</SectionEyebrow>
              <h2 className="text-3xl md:text-5xl font-extrabold font-heading uppercase text-charcoal leading-[0.92] mb-8">
                Thank You To Our Partners.
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { name: "First Horizon", logo: "/logos/sponsors/first-horizon.png" },
                  { name: "Ally", logo: "/logos/sponsors/ally.png" },
                  { name: "City of Memphis", logo: "/logos/sponsors/city-of-memphis.jpg" },
                  { name: "USATF", logo: "/logos/sponsors/usatf.png" },
                  { name: "Raymond James", logo: "/logos/sponsors/raymond-james.png" },
                  { name: "City Auto", logo: "/logos/sponsors/city-auto.jpeg" },
                  { name: "Lexus of Memphis", logo: "/logos/sponsors/lexus-of-memphis.jpg" },
                  { name: "McNeal McDonnell Foundation", logo: "/logos/sponsors/mcneal-mcdonnell.png" },
                ].map((sponsor) => (
                  <div key={sponsor.name} className="bg-white border border-gray-200 p-4 flex items-center justify-center h-20">
                    <Image
                      src={sponsor.logo}
                      alt={sponsor.name}
                      width={140}
                      height={60}
                      className="object-contain max-h-[50px] w-auto"
                    />
                  </div>
                ))}
              </div>
              <a
                href="https://edmurpheyclassic.com/sponsors"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-orange font-semibold font-body hover:gap-3 transition-all"
              >
                View all 80+ sponsors <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
