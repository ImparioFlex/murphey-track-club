import Image from "next/image";
import { ExternalLink } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionEyebrow from "@/components/SectionEyebrow";
import { images } from "@/lib/images";

const products = [
  {
    image: images.singlet,
    name: "GRE Race Singlet",
    description: "The official competition kit. Light, fast, unmistakable.",
    href: "https://vsathletics.com",
  },
  {
    image: images.shorts,
    name: "Club Training Short",
    description: "Built for mileage. Built for the group. Built to last.",
    href: "https://vsathletics.com",
  },
  {
    image: images.jacket,
    name: "Grassroots Quarter-Zip",
    description: "Warm up. Cool down. Rep the club everywhere in between.",
    href: "https://vsathletics.com",
  },
];

export default function GearPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-white py-20 md:py-32 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <FadeIn>
            <SectionEyebrow>VS Athletics Partnership</SectionEyebrow>
            <h1 className="text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] font-extrabold font-heading text-dark-green uppercase tracking-tight mt-4">
              Official Kit
            </h1>
            <p className="mt-8 text-slate-600 font-body leading-relaxed text-lg max-w-2xl mx-auto">
              Every piece of Grassroots Elite gear is made by VS Athletics and available
              exclusively through our team store. This is what the club wears. On the
              track, on the roads, at the line.
            </p>
            <p className="mt-4 text-slate-400 font-body text-base">
              Look fast. Run faster.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== DEAL CALLOUT ===== */}
      <section className="px-6 pb-20 md:pb-32">
        <FadeIn>
          <div className="mx-auto max-w-3xl border-2 border-electric bg-mint p-6 md:p-10 lg:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold font-heading text-dark-green uppercase tracking-tight leading-tight">
              10% Off for You.
              <br />
              10% Back to the Club.
            </h2>
            <div className="flex justify-center my-6">
              <Image
                src="/logos/grassroots-wordmark.png"
                alt="Grassroots"
                width={240}
                height={70}
                className="h-14 md:h-16 w-auto"
              />
            </div>
            <p className="text-slate-600 font-body leading-relaxed text-base max-w-xl mx-auto mb-8">
              Every purchase through our team store saves you money and funds
              the club directly. Gear, training apparel, race kits. It all counts.
              Shop through our link every time.
            </p>
            <a
              href="https://vsathletics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-slide-up inline-flex items-center gap-2 px-10 py-4 bg-dark-green text-white text-base font-bold uppercase tracking-wider font-body"
            >
              Shop Now <ExternalLink size={16} strokeWidth={1.5} />
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ===== PRODUCT GRID ===== */}
      <section className="bg-slate-100 py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <FadeIn>
            <SectionEyebrow>The Collection</SectionEyebrow>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-dark-green uppercase tracking-tight mt-4 mb-16">
              Rep the Club
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <FadeIn key={product.name} delay={i * 100}>
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-sharp block group h-full"
                >
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-extrabold text-dark-green text-xl uppercase tracking-wide">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 font-body text-sm mt-2 leading-relaxed">
                      {product.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-4 text-forest-green font-body text-sm font-bold uppercase tracking-wider">
                      Shop Now
                      <ExternalLink size={14} strokeWidth={1.5} />
                    </span>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SHOP CTA ===== */}
      <section className="bg-dark-green py-20 md:py-32 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <SectionEyebrow dark>Grassroots Elite x VS Athletics</SectionEyebrow>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-white uppercase tracking-tight mt-4 mb-6">
              Shop the Store
            </h2>
            <p className="text-slate-400 font-body leading-relaxed text-base max-w-xl mx-auto mb-10">
              The full collection. Race singlets, training gear, club apparel.
              Your purchase supports the athletes and the mission.
            </p>
            <a
              href="https://vsathletics.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-slide-up-white inline-flex items-center gap-2 bg-electric text-dark-green px-10 py-4 text-base font-bold uppercase tracking-wider font-body"
            >
              Shop the Grassroots Elite Team Store
              <ExternalLink size={16} strokeWidth={1.5} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ===== PARTNER NOTE ===== */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <p className="text-slate-400 font-body text-sm leading-relaxed">
              VS Athletics is a performance apparel brand built for athletes who are
              still in the fight. As the official gear partner of Grassroots Elite, they
              provide our competition kit, training gear, and club apparel. Every order
              through our store gives members 10% off and sends 10% back to support the
              club. It is the right brand for athletes like ours.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
