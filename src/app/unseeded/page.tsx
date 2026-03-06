"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Play, ArrowRight, Youtube, Search } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const episodes = [
  {
    number: 6,
    title: "The Teacher Who Ran 2:18",
    guest: "Sam Okafor",
    event: "Marathon",
    thumbnail: "/images/unseeded/runner-male-singlet.png",
    duration: "42 min",
    date: "Feb 2026",
    description:
      "Sam was a mid-pack D2 runner who didn't touch a starting line for three years after college. A random half marathon changed everything. Now he's running 2:18 and teaching seventh-grade math. Hayden and Sam talk about the moment he realized he was faster than he ever thought possible.",
    quote: "My college coach texted me after Houston and said 'Where was this guy four years ago?' I told him this guy didn't exist four years ago.",
    href: "#",
  },
  {
    number: 5,
    title: "No Ride Home",
    guest: "Gabbie Jennings",
    event: "10K / Half Marathon",
    thumbnail: "/images/unseeded/runner-gabbie.png",
    duration: "38 min",
    date: "Jan 2026",
    description:
      "Gabbie drove nine hours to her first USA Championships with no hotel booked and no return ticket. She finished 22nd, slept in her car, and drove home the next morning for a Monday shift at the coffee shop. This is what unseeded looks like.",
    quote: "I didn't have a tent at the meet. I didn't have a massage therapist. I had a foam roller in my trunk and a playlist. That was enough.",
    href: "#",
  },
  {
    number: 4,
    title: "XC Champs: The Team Nobody Picked",
    guest: "Grassroots Elite Women",
    event: "Cross Country",
    thumbnail: "/images/unseeded/team-xc-champs.png",
    duration: "51 min",
    date: "Dec 2025",
    description:
      "The Grassroots Elite women showed up to USATF Cross Country Nationals as an afterthought. They left with the team title. Hayden sits down with the whole squad to break down the race, the tears at the finish, and what it means to win as a group that nobody saw coming.",
    quote: "We looked at the seed list and we weren't on it. Literally. They misspelled our name in the program. That was the last time anyone got our name wrong.",
    href: "#",
  },
  {
    number: 3,
    title: "51 Seconds",
    guest: "Marcus Delray",
    event: "5K / 10K",
    thumbnail: "/images/athlete-marcus.jpg",
    duration: "36 min",
    date: "Nov 2025",
    description:
      "Marcus dropped 51 seconds off his 5K PR in two years with Grassroots Elite. But this episode isn't really about the time. It's about the two years he spent training alone after college, the morning he almost quit for good, and the Tuesday workout that changed his mind.",
    quote: "I showed up to practice that first day and nobody asked me what my PR was. They just said 'You warming up or what?' That was it. I was in.",
    href: "#",
  },
  {
    number: 2,
    title: "Between Hurdle 7 and 8",
    guest: "Darius Brooks",
    event: "400m Hurdles",
    thumbnail: "/images/athlete-darius.jpg",
    duration: "44 min",
    date: "Oct 2025",
    description:
      "Darius was cut from his college team and told he didn't have the talent for the next level. One stride pattern adjustment later, he's the fastest 400m hurdler in the Upstate. Hayden breaks down the technical change live on air and Darius talks about proving people wrong.",
    quote: "The coach who cut me is still coaching. I'm still running. One of us made the right call.",
    href: "#",
  },
  {
    number: 1,
    title: "Pilot: Why Unseeded?",
    guest: "Hayden Cox",
    event: "Introduction",
    thumbnail: "/images/hayden-casual.png",
    duration: "28 min",
    date: "Sep 2025",
    description:
      "The one that started it all. Hayden explains why he created Unseeded, why the post-collegiate running landscape is broken, and why the best stories in the sport are coming from athletes nobody is paying attention to. Raw, honest, and the mission statement for everything that follows.",
    quote: "There are hundreds of athletes at USA Championships every year who drove themselves there, paid their own entry, and have no logo on their chest. Those are my people.",
    href: "#",
  },
];

export default function UnseededPage() {
  const [search, setSearch] = useState("");

  const filteredEpisodes = episodes.filter((ep) => {
    if (!search.trim()) return true;
    const q = search.toLowerCase();
    return (
      ep.title.toLowerCase().includes(q) ||
      ep.guest.toLowerCase().includes(q) ||
      ep.event.toLowerCase().includes(q) ||
      ep.description.toLowerCase().includes(q)
    );
  });

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-deep pt-20 md:pt-24 pb-16 md:pb-20 px-6 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <FadeIn>
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/unseeded/logo.png"
                alt="Unseeded"
                width={500}
                height={400}
                className="w-64 md:w-80 lg:w-96 h-auto mb-8"
              />
              <p className="text-lg md:text-xl text-slate-300 font-body leading-relaxed max-w-2xl mb-3">
                Stories from athletes who made it to the national stage without a
                shoe deal, without a training group, and sometimes without a ride
                home.
              </p>
              <p className="text-base text-slate-400 font-body max-w-xl mb-10">
                Hosted by Hayden Cox. New episodes weekly.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="#"
                  className="btn-slide-up inline-flex items-center gap-3 px-8 py-4 bg-dark-green text-white text-sm font-bold uppercase tracking-wider font-body"
                >
                  <Youtube className="w-5 h-5" />
                  Watch on YouTube
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="px-5 py-3 border border-white/20 text-white text-sm font-bold uppercase tracking-wider font-body hover:border-electric hover:text-electric transition-colors"
                  >
                    Apple Podcasts
                  </a>
                  <a
                    href="#"
                    className="px-5 py-3 border border-white/20 text-white text-sm font-bold uppercase tracking-wider font-body hover:border-electric hover:text-electric transition-colors"
                  >
                    Spotify
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== LATEST EPISODE FEATURE ===== */}
      <section className="bg-dark-green py-14 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-electric font-body mb-6">
              Latest Episode
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <a href={episodes[0].href} className="group block relative aspect-video overflow-hidden bg-black">
                <Image
                  src={episodes[0].thumbnail}
                  alt={episodes[0].title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-electric/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-dark-green ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-bold tracking-wider uppercase text-white/60 font-body">
                    EP {episodes[0].number} &middot; {episodes[0].duration}
                  </span>
                </div>
              </a>
              <div>
                <span className="inline-block px-3 py-1 bg-electric/10 border border-electric/20 text-electric text-xs font-bold tracking-wider uppercase font-body mb-4">
                  EP {episodes[0].number} &middot; {episodes[0].date}
                </span>
                <h2 className="text-3xl md:text-4xl font-extrabold font-heading uppercase text-white leading-[0.92] mb-2">
                  {episodes[0].title}
                </h2>
                <p className="text-sm text-electric font-body font-semibold mb-4">
                  with {episodes[0].guest} &middot; {episodes[0].event}
                </p>
                <p className="text-slate-300 font-body leading-relaxed mb-6">
                  {episodes[0].description}
                </p>
                <blockquote className="border-l-2 border-electric pl-5 mb-8">
                  <p className="text-white/80 font-body italic leading-relaxed">
                    &ldquo;{episodes[0].quote}&rdquo;
                  </p>
                </blockquote>
                <a
                  href={episodes[0].href}
                  className="btn-slide-up inline-flex items-center gap-2 px-8 py-3 bg-dark-green border border-white/20 text-white text-sm font-bold uppercase tracking-wider font-body"
                >
                  Watch Episode <Play className="w-4 h-4" fill="currentColor" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== ALL EPISODES ===== */}
      <section className="bg-white py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-forest-green font-body mb-4">
                  All Episodes
                </p>
                <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-dark-green leading-[0.88]">
                  The Archive
                </h2>
              </div>
              <a
                href="#"
                className="mt-4 md:mt-0 inline-flex items-center gap-2 text-forest-green font-semibold font-body hover:gap-3 transition-all"
              >
                Subscribe on YouTube <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search episodes by guest, event, or topic..."
              className="w-full pl-12 pr-5 py-4 border border-slate-200 bg-white text-base font-body focus:outline-none focus:ring-2 focus:ring-mid-green/30 focus:border-mid-green"
            />
          </div>

          <div className="space-y-0 divide-y divide-slate-200 border-t border-b border-slate-200">
            {filteredEpisodes.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-slate-400 font-body text-lg">No episodes found for &ldquo;{search}&rdquo;</p>
              </div>
            ) : filteredEpisodes.map((ep, i) => (
              <FadeIn key={ep.number} delay={i * 60}>
                <a
                  href={ep.href}
                  className="group grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8 py-8 hover:bg-mint/50 transition-colors px-4 -mx-4"
                >
                  {/* Thumbnail */}
                  <div className="md:col-span-3 relative aspect-video md:aspect-[4/3] overflow-hidden bg-slate-100">
                    <Image
                      src={ep.thumbnail}
                      alt={ep.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-10 h-10 rounded-full bg-electric/90 flex items-center justify-center">
                        <Play className="w-4 h-4 text-dark-green ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-black/70 text-white text-xs font-body font-bold">
                      {ep.duration}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="md:col-span-9 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold tracking-wider uppercase text-slate-400 font-body">
                        EP {ep.number}
                      </span>
                      <span className="text-xs text-slate-300">&middot;</span>
                      <span className="text-xs text-slate-400 font-body">
                        {ep.date}
                      </span>
                      <span className="text-xs text-slate-300">&middot;</span>
                      <span className="inline-block px-2 py-0.5 bg-slate-100 text-slate-500 text-xs font-bold tracking-wider uppercase font-body rounded-sm">
                        {ep.event}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-extrabold font-heading uppercase text-dark-green group-hover:text-forest-green transition-colors mb-1">
                      {ep.title}
                    </h3>
                    <p className="text-sm font-semibold text-forest-green font-body mb-2">
                      with {ep.guest}
                    </p>
                    <p className="text-slate-500 font-body text-sm leading-relaxed line-clamp-2 max-w-2xl">
                      {ep.description}
                    </p>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* ===== THE MISSION ===== */}
      <section className="bg-mint py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-forest-green font-body mb-4">
                  Why Unseeded
                </p>
                <h2 className="text-3xl md:text-5xl font-extrabold font-heading uppercase text-dark-green leading-[0.88] mb-6">
                  The Best Stories
                  <br />
                  Start in the
                  <br />
                  <span className="text-forest-green">Unseeded Heat.</span>
                </h2>
                <div className="space-y-4 text-slate-600 font-body leading-relaxed">
                  <p>
                    Every year, hundreds of athletes toe the line at USA
                    Championships who drove themselves there, paid their own entry
                    fee, and have zero logos on their kit.
                  </p>
                  <p>
                    They work full-time jobs. They train before sunrise. They don&apos;t
                    have agents or physios or altitude camps. They have alarm clocks
                    and a refusal to be done.
                  </p>
                  <p className="text-dark-green font-semibold">
                    Unseeded is their show.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/unseeded/runner-gabbie.png"
                    alt="Grassroots athlete racing"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-electric/20 via-transparent to-transparent" />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden mt-8">
                  <Image
                    src="/images/unseeded/runner-male-singlet.png"
                    alt="Grassroots athlete racing"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-electric/20 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== BEEN UNSEEDED? CTA ===== */}
      <section className="relative py-16 md:py-24 px-6 overflow-hidden">
        <Image
          src="/images/unseeded/team-xc-champs.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark-green/85" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-white leading-[0.92] mb-6">
              Been Unseeded?
              <br />
              <span className="text-gradient">Tell Us Your Story.</span>
            </h2>
            <p className="text-lg text-white/60 font-body max-w-xl mx-auto mb-12 leading-relaxed">
              If you&apos;ve made it to a USA Championships, World Championships, or
              Olympic Trials without a contract, we want to hear from you. Every
              story matters.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:unseeded@grassrootselite.com"
                className="btn-slide-up-white inline-flex items-center gap-2 px-10 py-4 bg-electric text-dark-green text-base font-bold uppercase tracking-wider font-body"
              >
                Share Your Story <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/join"
                className="btn-slide-up-white px-10 py-4 border-2 border-white text-white text-base font-bold uppercase tracking-wider font-body"
              >
                Join Grassroots Elite
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
