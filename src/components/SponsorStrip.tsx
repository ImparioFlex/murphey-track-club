import Image from "next/image";
import Link from "next/link";

const sponsors = [
  {
    name: "VS Athletics",
    href: "https://vsathletics.com",
    logo: "/logos/partners/vs-athletics.png",
  },
  {
    name: "Greenville Rec",
    href: "https://greenvillerec.com",
    logo: "/logos/partners/greenville-rec.png",
  },
  {
    name: "Impario Flex",
    href: "https://imparioflex.com",
    logo: "/logos/partners/impario-flex.png",
  },
];

export default function SponsorStrip() {
  return (
    <section className="border-y border-slate-200 py-16 px-6">
      <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-400 text-center mb-10 font-body">
        Our Partners
      </p>
      <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 lg:gap-24 max-w-4xl mx-auto">
        {sponsors.map((s) => (
          <Link
            key={s.name}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="relative h-10 w-36 opacity-40 group-hover:opacity-80 transition-opacity grayscale group-hover:grayscale-0">
              <Image
                src={s.logo}
                alt={s.name}
                fill
                className="object-contain"
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
