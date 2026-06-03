"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";

const posts = [
  { src: "/images/emc/team-photo.jpg", alt: "Murphey Track Club team under the tent" },
  { src: "/images/emc/emc-2019-09.jpg", alt: "Elite women racing at the Ed Murphey Classic" },
  { src: "/images/emc/emc-2019-01.jpg", alt: "Pro athlete meeting a young fan" },
  { src: "/images/emc/emc-2019-07.jpg", alt: "Youth runners sprinting at competition" },
  { src: "/images/emc/school-donation-3.jpg", alt: "Community outreach at local school" },
  { src: "/images/emc/emc-2019-11.jpg", alt: "Elite women's distance race" },
  { src: "/images/emc/emc-2019-06.jpg", alt: "Athletes posing after competition" },
  { src: "/images/emc/emc-2019-08.jpg", alt: "DJ performing at the Ed Murphey Classic" },
];

export default function InstagramFeed() {
  return (
    <section className="bg-charcoal py-16 md:py-20">
      <div className="text-center mb-10 md:mb-14 px-6">
        <a
          href="https://www.instagram.com/murpheytrackclub/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 group"
        >
          <Instagram className="w-7 h-7 md:w-8 md:h-8 text-orange group-hover:text-orange-light transition-colors" />
          <span className="text-2xl md:text-3xl font-heading uppercase text-white group-hover:text-orange-light transition-colors">
            @murpheytrackclub
          </span>
        </a>
        <p className="text-gray-400 font-body mt-3 text-sm md:text-base">
          Follow us for training updates, meet results, and community highlights
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-1.5">
        {posts.map((post, i) => (
          <a
            key={i}
            href="https://www.instagram.com/murpheytrackclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative aspect-square overflow-hidden group"
          >
            <Image
              src={post.src}
              alt={post.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-8 md:mt-10 px-6">
        <a
          href="https://www.instagram.com/murpheytrackclub/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-slide-up-white inline-flex items-center gap-2 px-8 py-3 border-2 border-orange text-orange text-sm font-bold uppercase tracking-wider font-body"
        >
          <Instagram className="w-4 h-4" /> Follow on Instagram
        </a>
      </div>
    </section>
  );
}
