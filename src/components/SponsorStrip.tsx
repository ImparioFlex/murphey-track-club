import Image from "next/image";

const sponsors = [
  { name: "First Horizon Foundation", logo: "/logos/sponsors/first-horizon.png" },
  { name: "Ally Bank", logo: "/logos/sponsors/ally.png" },
  { name: "City of Memphis", logo: "/logos/sponsors/city-of-memphis.jpg" },
  { name: "McNeal McDonnell Foundation", logo: "/logos/sponsors/mcneal-mcdonnell.png" },
  { name: "USATF", logo: "/logos/sponsors/usatf.png" },
  { name: "Raymond James", logo: "/logos/sponsors/raymond-james.png" },
  { name: "City Auto", logo: "/logos/sponsors/city-auto.jpeg" },
  { name: "Lexus of Memphis", logo: "/logos/sponsors/lexus-of-memphis.jpg" },
  { name: "ATL", logo: "/logos/sponsors/atl.png" },
  { name: "Labry", logo: "/logos/sponsors/labry.png" },
  { name: "Jim Keras Automotive", logo: "/logos/sponsors/jim-keras.png" },
];

export default function SponsorStrip() {
  return (
    <section className="border-y border-gray-200 py-10 md:py-14 px-6 overflow-hidden bg-white">
      <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 text-center mb-8 font-body">
        Proudly Supported By
      </p>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...sponsors, ...sponsors].map((sponsor, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center mx-6 md:mx-10 shrink-0"
              style={{ width: 120, height: 60 }}
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={120}
                height={60}
                className="object-contain max-h-[50px] w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
