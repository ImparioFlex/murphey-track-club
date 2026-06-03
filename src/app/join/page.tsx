import Link from "next/link";
import { Check, Calendar, MapPin, DollarSign, ArrowRight } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import FadeIn from "@/components/FadeIn";

const includes = [
  "USATF membership",
  "Club uniform",
  "Coaching 3 days per week at Halle Stadium",
  "Access to all sanctioned competitions",
  "Free coaching clinics",
  "Part of a supportive team community",
];

export default function JoinPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-white pt-24 md:pt-32 pb-16 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <SectionEyebrow>Get Involved</SectionEyebrow>
            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-extrabold font-heading uppercase text-charcoal tracking-tight leading-[0.9]">
              Register Your
              <br />
              <span className="text-orange">Athlete</span>
            </h1>
            <p className="text-gray-700 font-body text-lg leading-relaxed mt-8 max-w-2xl mx-auto">
              Open to elementary, middle, and high school athletes in Memphis
              and surrounding areas. Season begins June 1st at Halle Stadium.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== REGISTRATION DETAILS ===== */}
      <section className="bg-cream py-20 md:py-28 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <FadeIn>
              <div>
                <SectionEyebrow>Registration Details</SectionEyebrow>
                <h2 className="text-4xl md:text-5xl font-extrabold font-heading uppercase text-charcoal leading-[0.92] mb-6 md:mb-10">
                  One Fee.
                  <br />
                  Everything
                  <br />
                  <span className="text-orange">Included.</span>
                </h2>

                <div className="border-t border-gray-200 pt-8 mb-10">
                  <p className="stat-number text-5xl md:text-7xl text-charcoal mb-1">
                    $100
                  </p>
                  <p className="text-sm text-gray-500 font-body uppercase tracking-wider font-semibold">
                    Competition Fee
                  </p>
                </div>

                <div className="space-y-3 mb-10">
                  <div className="flex items-center gap-3 text-gray-700 font-body">
                    <Calendar className="w-5 h-5 text-orange flex-shrink-0" strokeWidth={1.5} />
                    <span>Season begins <strong className="text-charcoal">June 1st</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 font-body">
                    <MapPin className="w-5 h-5 text-orange flex-shrink-0" strokeWidth={1.5} />
                    <span><strong className="text-charcoal">Halle Stadium</strong>, Memphis, TN</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 font-body">
                    <DollarSign className="w-5 h-5 text-orange flex-shrink-0" strokeWidth={1.5} />
                    <span>Covers USATF membership + club uniform</span>
                  </div>
                </div>

                <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-charcoal font-body mb-4">
                  What&apos;s Included
                </h3>
                <ul className="space-y-3 mb-10">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700 font-body leading-relaxed">
                      <Check className="w-5 h-5 text-orange mt-0.5 shrink-0" strokeWidth={1.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="border border-gray-200 border-t-4 border-t-orange bg-white p-6 md:p-10">
                <h3 className="font-heading font-extrabold text-2xl uppercase tracking-wide text-charcoal mb-3">
                  Register Now
                </h3>
                <p className="text-gray-700 font-body text-base leading-relaxed mb-8">
                  Click below to fill out the registration form. You&apos;ll
                  need your athlete&apos;s information and a parent/guardian
                  contact.
                </p>

                <a
                  href="https://forms.gle/dubjb5PDAmhicW2U7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-slide-up-dark bg-orange text-charcoal w-full px-8 py-4 text-base font-bold uppercase tracking-wider font-body text-center block mb-4"
                >
                  Register Now
                </a>

                <p className="text-sm text-gray-500 font-body text-center">
                  You&apos;ll be taken directly to the registration form.
                </p>

                <div className="mt-10 pt-8 border-t border-gray-200">
                  <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-charcoal font-body mb-4">
                    Questions?
                  </h4>
                  <div className="space-y-2 text-gray-700 font-body">
                    <p>
                      <strong className="text-charcoal">Alisa Seymour</strong> (Executive Director)
                    </p>
                    <p>
                      <a href="mailto:agseymour1913@gmail.com" className="text-orange hover:underline">
                        agseymour1913@gmail.com
                      </a>
                    </p>
                    <p className="pt-2">
                      <strong className="text-charcoal">Eddie Murphey</strong> (Founder)
                    </p>
                    <p>
                      <a href="mailto:eddie@edmurpheyclassic.com" className="text-orange hover:underline">
                        eddie@edmurpheyclassic.com
                      </a>
                    </p>
                    <p>
                      <a href="tel:901-828-6745" className="text-orange hover:underline">
                        901-828-6745
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== GEAR ===== */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <SectionEyebrow>Official Gear</SectionEyebrow>
            <h2 className="text-3xl md:text-5xl font-extrabold font-heading uppercase text-charcoal leading-[0.92] mb-6">
              Rep The Club.
            </h2>
            <p className="text-gray-700 font-body leading-relaxed max-w-xl mx-auto mb-8">
              Hoodies, hats, travel mugs, and more. All proceeds support local
              youth programs.
            </p>
            <a
              href="https://edmurpheyclassic.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-slide-up inline-flex items-center gap-2 px-10 py-4 bg-charcoal text-white text-base font-bold uppercase tracking-wider font-body"
            >
              Shop the Store <ArrowRight className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
