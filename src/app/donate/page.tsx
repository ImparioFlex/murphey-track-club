import { Heart, CreditCard, Mail as MailIcon } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import FadeIn from "@/components/FadeIn";

export default function DonatePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-white pt-24 md:pt-32 pb-16 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <SectionEyebrow>Support</SectionEyebrow>
            <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-extrabold font-heading uppercase text-charcoal tracking-tight leading-[0.9]">
              Invest In
              <br />
              <span className="text-orange">Our Youth</span>
            </h1>
            <p className="text-gray-700 font-body text-xl leading-relaxed mt-8 max-w-3xl mx-auto text-pretty">
              Every dollar goes directly to local youth programs — coaching,
              equipment, competition fees, and free clinics for Memphis kids.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== DONATION OPTIONS ===== */}
      <section className="bg-cream py-20 md:py-28 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="border border-gray-200 border-t-4 border-t-orange bg-white p-6 md:p-10 h-full flex flex-col">
                <CreditCard className="w-10 h-10 text-orange mb-6" strokeWidth={1.5} />
                <h2 className="font-heading font-extrabold text-2xl uppercase tracking-wide text-charcoal mb-3">
                  Individual Donation
                </h2>
                <p className="text-sm text-gray-500 font-body uppercase tracking-wider font-semibold mb-4">
                  Up to $5,000
                </p>
                <p className="text-gray-700 font-body leading-relaxed mb-8 text-pretty">
                  Support youth track &amp; field in Memphis with a one-time
                  donation. A 3% processing fee applies to online donations.
                </p>
                <div className="mt-auto">
                  <a
                    href="https://square.link/u/wj3oJYoY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-slide-up-dark bg-orange text-charcoal w-full px-8 py-4 text-base font-bold uppercase tracking-wider font-body text-center block"
                  >
                    Donate Online
                  </a>
                  <p className="text-xs text-gray-500 font-body text-center mt-3">
                    Processed securely via Square
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="border border-gray-200 border-t-4 border-t-charcoal bg-white p-6 md:p-10 h-full flex flex-col">
                <Heart className="w-10 h-10 text-charcoal mb-6" strokeWidth={1.5} />
                <h2 className="font-heading font-extrabold text-2xl uppercase tracking-wide text-charcoal mb-3">
                  Corporate Sponsorship
                </h2>
                <p className="text-sm text-gray-500 font-body uppercase tracking-wider font-semibold mb-4">
                  $10,000+
                </p>
                <p className="text-gray-700 font-body leading-relaxed mb-8 text-pretty">
                  Become a sponsor of the Ed Murphey Classic and Murphey Track
                  Club. Contact Eddie Murphey directly for sponsorship packages.
                </p>
                <div className="mt-auto space-y-4">
                  <a
                    href="mailto:eddie@edmurpheyclassic.com"
                    className="btn-slide-up bg-charcoal text-white w-full px-8 py-4 text-base font-bold uppercase tracking-wider font-body text-center flex items-center justify-center gap-2"
                  >
                    <MailIcon className="w-4 h-4" /> Contact Eddie
                  </a>
                  <p className="text-xs text-gray-500 font-body text-center">
                    eddie@edmurpheyclassic.com &bull; 901-828-6745
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* ===== MAIL A CHECK ===== */}
          <FadeIn delay={200}>
            <div className="mt-12 bg-white border border-gray-200 p-6 md:p-10">
              <h3 className="text-xl font-extrabold font-heading uppercase text-charcoal mb-4">
                Donate by Mail
              </h3>
              <p className="text-gray-700 font-body leading-relaxed mb-4">
                Make checks payable to <strong className="text-charcoal">Ed Murphey Classic</strong> and mail to:
              </p>
              <div className="bg-cream p-4 md:p-6 font-body text-charcoal font-semibold">
                Ed Murphey Classic<br />
                PO Box 770001<br />
                Memphis, TN 38177
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== ALTERNATIVE CTA ===== */}
      <section className="bg-white py-16 md:py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <p className="text-gray-700 font-body leading-relaxed mb-6 text-pretty">
              Not ready to donate? There are other ways to support the club.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/join"
                className="btn-slide-up inline-flex items-center gap-2 px-8 py-3 bg-charcoal text-white text-sm font-bold uppercase tracking-wider font-body"
              >
                Register an Athlete
              </a>
              <a
                href="https://www.instagram.com/murpheytrackclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider font-body text-charcoal hover:text-orange transition-colors"
              >
                Follow on Instagram →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
