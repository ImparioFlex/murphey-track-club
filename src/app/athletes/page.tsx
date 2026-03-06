"use client";

import { useState, useRef, useEffect, Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, X as CloseIcon, ArrowRight, ExternalLink, Quote } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import { images } from "@/lib/images";


function useColumns() {
  const [cols, setCols] = useState(4);
  useEffect(() => {
    const update = () => setCols(window.innerWidth >= 1024 ? 4 : 2);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return cols;
}

const athletes = [
  {
    name: "Marcus Delray",
    event: "5K / 10K",
    hometown: "Columbia, SC",
    image: images.marcus,
    collegePR: { label: "College PR", value: "14:42", sub: "D1" },
    grassrootsPR: {
      label: "Grassroots Elite",
      value: "13:51",
      sub: "51s PR drop",
    },
    bio: [
      "Marcus showed up to his first Grassroots practice with a pair of beat-up racing flats and a quiet determination that Hayden spotted immediately. He didn\u2019t say much. He just ran. And it was clear there was something left in the tank.",
      "Two years of training alone after college had slowly drained something out of the sport. Running had started to feel like something he did in spite of everything, not because of it. It wasn\u2019t his legs that needed developing. It was his belief.",
      "The community changed that. People who got up for 6am workouts not because they had to, but because they wanted to. That energy is contagious. It made Marcus want to be better every single day.",
      "In the spring of his second year with Grassroots, Marcus crossed the finish line at the USATF Outdoor Championships with a 13:51. A personal best by over fifty seconds. He called his college coach from the infield. They both cried.",
    ],
    quote:
      "I didn\u2019t realize how much I needed to be around people who understood it. This sport is lonely without that.",
    socials: { instagram: "#", twitter: "#" },
  },
  {
    name: "Claire Whitmore",
    event: "Marathon",
    hometown: "Asheville, NC",
    image: images.claire,
    collegePR: { label: "College PR (Half)", value: "1:22", sub: "D3" },
    grassrootsPR: {
      label: "Grassroots Elite",
      value: "2:37:08",
      sub: "Olympic Trials Qualifier",
    },
    bio: [
      'Claire found Grassroots Elite through a flyer at a local running store. She almost didn\u2019t come to the first practice. "I thought it was for serious athletes," she laughs. "I didn\u2019t think I qualified."',
      "Three years later, she is one of the most serious athletes in the room. Hayden saw what Claire couldn\u2019t see in herself. A long, efficient stride. A quiet mental toughness that most runners spend years building. She\u2019d had it all along. She just needed structure, community, and a coach who wouldn\u2019t let her settle.",
      "The Olympic Trials qualifier didn\u2019t come without cost. A stress reaction in her foot in year two took four months of training and nearly broke her spirit. What kept her going wasn\u2019t just Hayden\u2019s programming. It was the Community Squad showing up to her first race back with handmade signs.",
    ],
    quote:
      "This place saved running for me. And running saved a lot more than that.",
    socials: { instagram: "#", twitter: "#" },
  },
  {
    name: "Jonah Parrish",
    event: "Steeplechase / 1500m",
    hometown: "Greenville, SC",
    image: images.jonah,
    collegePR: {
      label: "College PR (Steeple)",
      value: "9:14",
      sub: "D1 Walk-On",
    },
    grassrootsPR: {
      label: "Grassroots Elite",
      value: "8:41",
      sub: "Top-15 Nationals",
    },
    bio: [
      "Getting cut from his college team was the worst day of Jonah\u2019s athletic life. It turns out it was also one of the best things that ever happened to him.",
      "A Greenville native, Jonah knew about Hayden through the local running community. He reached out with nothing to lose. Just an email saying he wanted to get better. He didn\u2019t know if that was enough to matter.",
      "It was. Hayden recognized what had been overlooked: a technically sound water jump, a dangerous kick, and the kind of chip-on-shoulder motivation that cannot be coached. What could be coached was everything else. Pacing strategy. Lactate threshold work. Periodization.",
      "Two years later, Jonah ran 8:41 at a USATF sanctioned meet and earned a top-15 finish at the national championships. He still lives in Greenville. He still helps lead Tuesday track sessions for the Community Squad.",
    ],
    quote:
      "I just sent an email saying I wanted to get better. I didn\u2019t know if that was enough. Turns out it was everything.",
    socials: { instagram: "#" },
  },
  {
    name: "Priya Nanduri",
    event: "Mile / 1500m",
    hometown: "Charlotte, NC",
    image: images.priya,
    collegePR: { label: "College PR (Mile)", value: "4:52", sub: "D1" },
    grassrootsPR: { label: "Grassroots Elite", value: "4:31" },
    bio: [
      "Priya didn\u2019t run for two years after college. Not a mile. Not a fun run. Nothing. The sport had taken more than it gave, and she was done.",
      "What brought her back was something she still can\u2019t fully explain. A long commute, a podcast about a comeback story, and a quiet voice telling her she wasn\u2019t finished. She found Grassroots Elite online that afternoon.",
      "They figured it out. Slowly, deliberately. More recovery than she expected. More laughter than she planned for. Running became something Priya loved again. Not because of times or qualifiers, but because of the people at 6am on Tuesday who made her laugh before they made her hurt.",
      'The 4:31 mile came in her second full year with Grassroots. She texted Hayden immediately. His response: "I knew. Now let\u2019s go get 4:25."',
    ],
    quote:
      "I told Hayden upfront that I wasn\u2019t sure I even liked running anymore. He told me that was fine. That we\u2019d figure it out together.",
    socials: { instagram: "#", twitter: "#" },
  },
  {
    name: "Elijah Torres",
    event: "800m / 1500m",
    hometown: "Atlanta, GA",
    image: images.elijah,
    collegePR: { label: "College PR (800m)", value: "1:52.4", sub: "D1" },
    grassrootsPR: {
      label: "Grassroots Elite",
      value: "1:47.8",
      sub: "USA Championships Semi",
    },
    bio: [
      "Elijah was the kind of college athlete who always seemed one race away from a breakthrough. A hamstring pull at conference. A fall at regionals. Talent was never the question. Timing was.",
      "After graduation he moved to Atlanta and tried to train alone. Six months in, the motivation was gone. A former teammate who\u2019d joined Grassroots told him to drive down to Greenville for a Tuesday session. Just one.",
      "That Tuesday turned into every Tuesday. Elijah made the three-hour round trip for months before finally relocating. Hayden restructured his training completely. Less volume, more specificity. More rest than Elijah thought he deserved. The results spoke for themselves.",
      "His 1:47.8 at the USATF Outdoor Championships punched a ticket to the semifinal. Standing on the track at Hayward Field, surrounded by the best in the country, he knew he belonged.",
    ],
    quote:
      "I drove three hours each way for a Tuesday workout. That should tell you everything about what this group does to you.",
    socials: { instagram: "#", twitter: "#" },
  },
  {
    name: "Sam Okafor",
    event: "Marathon",
    hometown: "Raleigh, NC",
    image: images.sam,
    collegePR: {
      label: "College PR (10K)",
      value: "30:22",
      sub: "D2",
    },
    grassrootsPR: {
      label: "Grassroots Elite",
      value: "2:18:41",
      sub: "Boston Qualifier",
    },
    bio: [
      "Sam never considered himself a competitive runner. He ran cross country in college because his roommate needed someone to split gas on the way to meets. He was always mid-pack. Content, but never hungry.",
      "Something shifted in his late twenties. He ran a local half marathon on a whim and the clock read 1:12. A friend said that was fast. Sam didn\u2019t believe it until he looked up qualifying standards.",
      "He found Grassroots Elite through Instagram and signed up for the Community Squad. Within three months, Hayden had moved him to the Elite track. The marathon build was methodical. 18 weeks of the most structured training Sam had ever done.",
      "His 2:18 at Houston was not just a personal best. It was a statement. A D2 mid-packer running times that would have won most college conferences. Sam cried at mile 24. Not from pain. From disbelief.",
    ],
    quote:
      "I never thought I was talented enough for this. Hayden showed me that talent is just the starting line.",
    socials: { instagram: "#" },
  },
  {
    name: "Ava Chen",
    event: "10K / Half Marathon",
    hometown: "Charleston, SC",
    image: images.ava,
    collegePR: {
      label: "College PR (5K)",
      value: "17:14",
      sub: "D1",
    },
    grassrootsPR: {
      label: "Grassroots Elite",
      value: "33:02",
      sub: "10K PR",
    },
    bio: [
      "Ava graduated with All-Conference honors and a body that was falling apart. Years of overtraining had left her with chronic IT band issues and a complicated relationship with running. She took a year off. Then two.",
      "When she came back, she came back differently. No GPS watch for the first three months. No pace targets. Just running for the sake of running. Hayden supported that fully. He told her the fitness would come back when she was ready to chase it.",
      "She was ready by spring. The progression was startling. 35-minute 10K in March. 34:10 in May. Then 33:02 at the Peachtree Road Race in Atlanta on the Fourth of July, in 85-degree heat, running the final mile with a grin on her face.",
      "Ava now mentors newer athletes who arrive at Grassroots carrying the same kind of baggage she did. Burned out. Skeptical. Hoping someone will tell them it\u2019s not too late.",
    ],
    quote:
      "I had to learn how to love running again before I could get fast again. This place taught me both.",
    socials: { instagram: "#", twitter: "#" },
  },
  {
    name: "Darius Brooks",
    event: "400m Hurdles",
    hometown: "Spartanburg, SC",
    image: images.darius,
    collegePR: {
      label: "College PR (400H)",
      value: "52.8",
      sub: "D1",
    },
    grassrootsPR: {
      label: "Grassroots Elite",
      value: "50.14",
      sub: "USA Championships Qualifier",
    },
    bio: [
      "Darius is the loudest person at every practice and the quietest person in the blocks. That contradiction is what makes him special.",
      "A Spartanburg native, he drove to Greenville three times a week during his final college season to work with Hayden on race tactics. His college coach didn\u2019t mind. The results were undeniable. His senior year PR of 52.8 became a stepping stone, not a ceiling.",
      "After graduation, Darius went all in. He moved to Greenville, got a job that let him train in the mornings, and committed to a full Olympic cycle with Grassroots. The hurdles are technical enough that small improvements compound. Hayden refined his stride pattern between hurdles 7 and 8. That single adjustment dropped almost a full second.",
      "His 50.14 at the USATF qualifier made him the fastest 400m hurdler to come out of the Upstate in a decade. He is currently training for the next Trials cycle with his eyes on something bigger.",
    ],
    quote:
      "Hayden fixed one thing between hurdle 7 and 8. One thing. It changed my entire career.",
    socials: { instagram: "#", twitter: "#" },
  },
];

export default function AthletesPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [displayIndex, setDisplayIndex] = useState(0);
  const detailRefs = useRef<(HTMLDivElement | null)[]>([]);
  const cols = useColumns();

  useEffect(() => {
    if (selected !== null) {
      setDisplayIndex(selected);
    }
  }, [selected]);

  useEffect(() => {
    if (selected !== null) {
      const row = Math.floor(selected / cols);
      setTimeout(() => {
        detailRefs.current[row]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 200);
    }
  }, [selected, cols]);

  const toggle = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  const isOpen = selected !== null;
  const athlete = athletes[displayIndex];
  const displayRow = Math.floor(displayIndex / cols);

  // Chunk athletes into rows
  const rows: (typeof athletes)[] = [];
  for (let i = 0; i < athletes.length; i += cols) {
    rows.push(athletes.slice(i, i + cols));
  }

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-mint pt-28 md:pt-32 pb-20 md:pb-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <Image
              src="/logos/grassroots-elite-logo.png"
              alt="Grassroots Elite"
              width={500}
              height={500}
              className="w-72 md:w-96 lg:w-[28rem] h-auto mx-auto mb-10"
            />
            <p className="text-lg md:text-xl text-slate-600 font-body leading-relaxed max-w-2xl mx-auto mb-4">
              A post-collegiate competitive team chasing qualifying standards,
              national championships, and Olympic Trials berths. Coached by
              Hayden Cox in Greenville, SC.
            </p>
            <p className="text-base text-slate-400 font-body leading-relaxed max-w-xl mx-auto mb-10">
              Membership is by application only. Committed athletes with
              competitive goals and a coachable mindset.
            </p>
            <Link
              href="/join"
              className="btn-slide-up inline-flex items-center gap-2 px-10 py-4 bg-dark-green text-white text-base font-bold uppercase tracking-wider font-body"
            >
              Apply to Join <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== ATHLETES HEADING ===== */}
      <section className="bg-white pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-forest-green font-body mb-4">
              The Roster
            </p>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-dark-green leading-[0.88]">
              Meet the Athletes
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* ===== CARD GRID WITH ROW-BASED EXPAND ===== */}
      <section className="bg-white pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {rows.map((row, rowIndex) => {
            const isRowActive =
              isOpen && Math.floor(selected! / cols) === rowIndex;
            const hasContent = isRowActive || displayRow === rowIndex;

            return (
              <Fragment key={rowIndex}>
                {/* Card row */}
                <div
                  className={`grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 ${
                    rowIndex > 0 ? "mt-3 md:mt-5" : ""
                  }`}
                >
                  {row.map((a, colIndex) => {
                    const i = rowIndex * cols + colIndex;
                    return (
                      <FadeIn key={a.name} delay={i * 60}>
                        <button
                          onClick={() => toggle(i)}
                          className={`w-full text-left group cursor-pointer transition-all duration-300 ${
                            selected === i
                              ? "ring-2 ring-electric ring-offset-2"
                              : ""
                          }`}
                        >
                          <div className="relative aspect-[3/4] bg-slate-100 overflow-hidden">
                            <Image
                              src={a.image}
                              alt={a.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t from-electric/30 via-electric/5 to-transparent transition-opacity duration-500 ${
                              selected === i ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                            }`} />
                          </div>
                          <div className="pt-4 pb-3">
                            <h3 className="text-base md:text-xl font-extrabold font-heading uppercase text-dark-green group-hover:underline underline-offset-4 decoration-2 decoration-electric transition-all">
                              {a.name}
                            </h3>
                            <div className="flex items-center justify-between mt-1">
                              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-slate-400 font-body">
                                {a.event}
                              </p>
                              <ArrowRight
                                className={`w-4 h-4 transition-all duration-300 ${
                                  selected === i
                                    ? "rotate-90 text-electric"
                                    : "opacity-0 group-hover:opacity-100 text-slate-400"
                                }`}
                              />
                            </div>
                          </div>
                        </button>
                      </FadeIn>
                    );
                  })}
                </div>

                {/* Detail slot for this row */}
                <div
                  ref={(el) => {
                    detailRefs.current[rowIndex] = el;
                  }}
                  className="grid transition-[grid-template-rows] duration-500"
                  style={{
                    gridTemplateRows: isRowActive ? "1fr" : "0fr",
                    transitionTimingFunction:
                      "cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                >
                  <div className="overflow-hidden">
                    {hasContent && (
                      <div className="bg-mint border-y border-slate-200 mt-3 md:mt-5">
                        <div className="max-w-6xl mx-auto py-8 md:py-14 lg:py-20 px-4 md:px-6">
                          {/* Close button */}
                          <div className="flex justify-end mb-6 md:mb-8">
                            <button
                              onClick={() => setSelected(null)}
                              className="p-2 hover:bg-white/60 transition-colors cursor-pointer"
                              aria-label="Close"
                            >
                              <CloseIcon className="w-5 h-5 text-slate-500" />
                            </button>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                            {/* LEFT — Identity, Stats, Socials */}
                            <div className="lg:col-span-4">
                              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-forest-green font-body mb-3">
                                {athlete.event}
                              </p>
                              <h2 className="text-4xl md:text-5xl font-extrabold font-heading uppercase text-dark-green leading-[0.92] mb-2">
                                {athlete.name
                                  .split(" ")
                                  .map((word, wi) => (
                                    <span key={wi}>
                                      {word}
                                      {wi === 0 && <br />}
                                    </span>
                                  ))}
                              </h2>
                              <p className="text-base text-slate-400 font-body mb-6">
                                {athlete.hometown}
                              </p>

                              <div className="w-16 h-0.5 bg-electric mb-8" />

                              {/* Stats */}
                              <div className="flex gap-8 md:gap-10 mb-8">
                                <div>
                                  <p className="text-xs font-bold tracking-[0.15em] uppercase text-slate-400 font-body mb-1">
                                    {athlete.collegePR.label}
                                  </p>
                                  <p className="stat-number text-4xl text-slate-400">
                                    {athlete.collegePR.value}
                                  </p>
                                  {athlete.collegePR.sub && (
                                    <p className="text-sm text-slate-400 font-body mt-1">
                                      {athlete.collegePR.sub}
                                    </p>
                                  )}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <Image
                                      src="/logos/grassroots-elite-logo.png"
                                      alt=""
                                      width={24}
                                      height={24}
                                      className="w-6 h-6 object-contain"
                                    />
                                    <p className="text-xs font-bold tracking-[0.15em] uppercase text-mid-green font-body">
                                      {athlete.grassrootsPR.label}
                                    </p>
                                  </div>
                                  <p className="stat-number text-4xl text-dark-green">
                                    {athlete.grassrootsPR.value}
                                  </p>
                                  {athlete.grassrootsPR.sub && (
                                    <p className="text-sm text-mid-green font-body mt-1">
                                      {athlete.grassrootsPR.sub}
                                    </p>
                                  )}
                                </div>
                              </div>

                              {/* Social icons */}
                              <div className="flex gap-3">
                                {athlete.socials.instagram && (
                                  <a
                                    href={athlete.socials.instagram}
                                    aria-label="Instagram"
                                    className="w-10 h-10 border border-slate-200 bg-white flex items-center justify-center hover:border-electric hover:text-electric transition-colors text-slate-500"
                                  >
                                    <Instagram className="w-4 h-4" />
                                  </a>
                                )}
                                {athlete.socials.twitter && (
                                  <a
                                    href={athlete.socials.twitter}
                                    aria-label="Twitter"
                                    className="w-10 h-10 border border-slate-200 bg-white flex items-center justify-center hover:border-electric hover:text-electric transition-colors text-slate-500"
                                  >
                                    <Twitter className="w-4 h-4" />
                                  </a>
                                )}
                              </div>
                            </div>

                            {/* RIGHT — Bio + Quote */}
                            <div className="lg:col-span-8">
                              <div className="space-y-5 text-slate-600 font-body leading-relaxed">
                                {athlete.bio.map((paragraph, pi) => (
                                  <p key={pi}>{paragraph}</p>
                                ))}
                              </div>

                              <blockquote className="mt-8 md:mt-10 border-l-2 border-electric pl-4 md:pl-6 lg:pl-8">
                                <p className="text-lg md:text-xl font-heading font-bold text-dark-green leading-snug italic">
                                  &ldquo;{athlete.quote}&rdquo;
                                </p>
                              </blockquote>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Fragment>
            );
          })}
        </div>
      </section>

      {/* ===== LATEST RESULTS ===== */}
      <section className="bg-mint py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-forest-green font-body mb-4">
              Race Results
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-dark-green leading-[0.88]">
                Latest Results
              </h2>
              <a
                href="#"
                className="mt-4 md:mt-0 inline-flex items-center gap-2 text-forest-green font-semibold font-body hover:gap-3 transition-all"
              >
                Full results archive <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>

          {/* Race 1 */}
          <FadeIn>
            <div className="bg-white border border-slate-200 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-4 border-b border-slate-200 bg-slate-100/50">
                <div>
                  <h3 className="text-lg font-extrabold font-heading uppercase text-dark-green">
                    USATF Distance Classic
                  </h3>
                  <p className="text-sm text-slate-400 font-body">
                    February 22, 2026 &middot; Los Angeles, CA
                  </p>
                </div>
                <a href="#" className="mt-2 sm:mt-0 text-sm text-forest-green font-semibold font-body hover:underline inline-flex items-center gap-1">
                  Full Results <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-100 text-xs font-bold tracking-[0.15em] uppercase text-slate-400 font-body">
                      <th className="px-3 md:px-6 py-3 w-16">Place</th>
                      <th className="px-3 md:px-6 py-3">Athlete</th>
                      <th className="px-3 md:px-6 py-3 hidden sm:table-cell">Event</th>
                      <th className="px-3 md:px-6 py-3 text-right">Time</th>
                      <th className="px-3 md:px-6 py-3 text-right hidden sm:table-cell">Note</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-sm">
                    <tr className="border-b border-slate-100 bg-electric/5">
                      <td className="px-3 md:px-6 py-3 font-bold text-dark-green">3rd</td>
                      <td className="px-3 md:px-6 py-3 font-bold text-dark-green flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric inline-block" />
                        Marcus Delray
                      </td>
                      <td className="px-3 md:px-6 py-3 text-slate-500 hidden sm:table-cell">5,000m</td>
                      <td className="px-3 md:px-6 py-3 text-right font-bold text-dark-green stat-number text-base">13:51</td>
                      <td className="px-3 md:px-6 py-3 text-right hidden sm:table-cell"><span className="inline-block px-2.5 py-0.5 bg-dark-green text-white text-xs font-bold tracking-wider uppercase rounded-sm">PR</span></td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-electric/5">
                      <td className="px-3 md:px-6 py-3 font-bold text-dark-green">7th</td>
                      <td className="px-3 md:px-6 py-3 font-bold text-dark-green flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric inline-block" />
                        Priya Nanduri
                      </td>
                      <td className="px-3 md:px-6 py-3 text-slate-500 hidden sm:table-cell">1 Mile</td>
                      <td className="px-3 md:px-6 py-3 text-right font-bold text-dark-green stat-number text-base">4:31</td>
                      <td className="px-3 md:px-6 py-3 text-right hidden sm:table-cell"><span className="inline-block px-2.5 py-0.5 bg-dark-green text-white text-xs font-bold tracking-wider uppercase rounded-sm">PR</span></td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-electric/5">
                      <td className="px-3 md:px-6 py-3 font-bold text-dark-green">12th</td>
                      <td className="px-3 md:px-6 py-3 font-bold text-dark-green flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric inline-block" />
                        Elijah Torres
                      </td>
                      <td className="px-3 md:px-6 py-3 text-slate-500 hidden sm:table-cell">800m</td>
                      <td className="px-3 md:px-6 py-3 text-right font-bold text-dark-green stat-number text-base">1:48.2</td>
                      <td className="px-3 md:px-6 py-3 text-right hidden sm:table-cell"><span className="inline-block px-2.5 py-0.5 bg-slate-200 text-slate-600 text-xs font-bold tracking-wider uppercase rounded-sm">SB</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          {/* Race 2 */}
          <FadeIn delay={100}>
            <div className="bg-white border border-slate-200 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-4 border-b border-slate-200 bg-slate-100/50">
                <div>
                  <h3 className="text-lg font-extrabold font-heading uppercase text-dark-green">
                    Houston Marathon
                  </h3>
                  <p className="text-sm text-slate-400 font-body">
                    January 18, 2026 &middot; Houston, TX
                  </p>
                </div>
                <a href="#" className="mt-2 sm:mt-0 text-sm text-forest-green font-semibold font-body hover:underline inline-flex items-center gap-1">
                  Full Results <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-100 text-xs font-bold tracking-[0.15em] uppercase text-slate-400 font-body">
                      <th className="px-3 md:px-6 py-3 w-16">Place</th>
                      <th className="px-3 md:px-6 py-3">Athlete</th>
                      <th className="px-3 md:px-6 py-3 hidden sm:table-cell">Event</th>
                      <th className="px-3 md:px-6 py-3 text-right">Time</th>
                      <th className="px-3 md:px-6 py-3 text-right hidden sm:table-cell">Note</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-sm">
                    <tr className="border-b border-slate-100 bg-electric/5">
                      <td className="px-3 md:px-6 py-3 font-bold text-dark-green">18th</td>
                      <td className="px-3 md:px-6 py-3 font-bold text-dark-green flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric inline-block" />
                        Sam Okafor
                      </td>
                      <td className="px-3 md:px-6 py-3 text-slate-500 hidden sm:table-cell">Marathon</td>
                      <td className="px-3 md:px-6 py-3 text-right font-bold text-dark-green stat-number text-base">2:18:41</td>
                      <td className="px-3 md:px-6 py-3 text-right hidden sm:table-cell"><span className="inline-block px-2.5 py-0.5 bg-dark-green text-white text-xs font-bold tracking-wider uppercase rounded-sm">PR</span></td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-electric/5">
                      <td className="px-3 md:px-6 py-3 font-bold text-dark-green">31st</td>
                      <td className="px-3 md:px-6 py-3 font-bold text-dark-green flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric inline-block" />
                        Claire Whitmore
                      </td>
                      <td className="px-3 md:px-6 py-3 text-slate-500 hidden sm:table-cell">Marathon</td>
                      <td className="px-3 md:px-6 py-3 text-right font-bold text-dark-green stat-number text-base">2:37:08</td>
                      <td className="px-3 md:px-6 py-3 text-right hidden sm:table-cell"><span className="inline-block px-2.5 py-0.5 bg-electric text-dark-green text-xs font-bold tracking-wider uppercase rounded-sm">OTQ</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>

          {/* Race 3 */}
          <FadeIn delay={200}>
            <div className="bg-white border border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-6 py-4 border-b border-slate-200 bg-slate-100/50">
                <div>
                  <h3 className="text-lg font-extrabold font-heading uppercase text-dark-green">
                    Furman Elite Invitational
                  </h3>
                  <p className="text-sm text-slate-400 font-body">
                    January 10, 2026 &middot; Greenville, SC
                  </p>
                </div>
                <a href="#" className="mt-2 sm:mt-0 text-sm text-forest-green font-semibold font-body hover:underline inline-flex items-center gap-1">
                  Full Results <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-100 text-xs font-bold tracking-[0.15em] uppercase text-slate-400 font-body">
                      <th className="px-3 md:px-6 py-3 w-16">Place</th>
                      <th className="px-3 md:px-6 py-3">Athlete</th>
                      <th className="px-3 md:px-6 py-3 hidden sm:table-cell">Event</th>
                      <th className="px-3 md:px-6 py-3 text-right">Time</th>
                      <th className="px-3 md:px-6 py-3 text-right hidden sm:table-cell">Note</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-sm">
                    <tr className="border-b border-slate-100 bg-electric/5">
                      <td className="px-3 md:px-6 py-3 font-bold text-dark-green">1st</td>
                      <td className="px-3 md:px-6 py-3 font-bold text-dark-green flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric inline-block" />
                        Darius Brooks
                      </td>
                      <td className="px-3 md:px-6 py-3 text-slate-500 hidden sm:table-cell">400m Hurdles</td>
                      <td className="px-3 md:px-6 py-3 text-right font-bold text-dark-green stat-number text-base">50.14</td>
                      <td className="px-3 md:px-6 py-3 text-right hidden sm:table-cell"><span className="inline-block px-2.5 py-0.5 bg-dark-green text-white text-xs font-bold tracking-wider uppercase rounded-sm">PR</span></td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-electric/5">
                      <td className="px-3 md:px-6 py-3 font-bold text-dark-green">2nd</td>
                      <td className="px-3 md:px-6 py-3 font-bold text-dark-green flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric inline-block" />
                        Jonah Parrish
                      </td>
                      <td className="px-3 md:px-6 py-3 text-slate-500 hidden sm:table-cell">Steeplechase</td>
                      <td className="px-3 md:px-6 py-3 text-right font-bold text-dark-green stat-number text-base">8:44</td>
                      <td className="px-3 md:px-6 py-3 text-right hidden sm:table-cell"><span className="inline-block px-2.5 py-0.5 bg-slate-200 text-slate-600 text-xs font-bold tracking-wider uppercase rounded-sm">SB</span></td>
                    </tr>
                    <tr className="border-b border-slate-100 bg-electric/5">
                      <td className="px-3 md:px-6 py-3 font-bold text-dark-green">4th</td>
                      <td className="px-3 md:px-6 py-3 font-bold text-dark-green flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric inline-block" />
                        Ava Chen
                      </td>
                      <td className="px-3 md:px-6 py-3 text-slate-500 hidden sm:table-cell">10,000m</td>
                      <td className="px-3 md:px-6 py-3 text-right font-bold text-dark-green stat-number text-base">33:18</td>
                      <td className="px-3 md:px-6 py-3 text-right hidden sm:table-cell"><span className="inline-block px-2.5 py-0.5 bg-slate-200 text-slate-600 text-xs font-bold tracking-wider uppercase rounded-sm">SB</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== COACH'S NOTE ===== */}
      <section className="bg-deep py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-4 flex md:flex-col items-center md:items-start gap-5">
                <div className="relative w-28 h-28 md:w-44 md:h-44 rounded-full overflow-hidden shrink-0 ring-2 ring-electric/20">
                  <Image
                    src="/images/hayden-casual.png"
                    alt="Coach Hayden Cox"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-electric font-body mb-1">
                    Coach&apos;s Note
                  </p>
                  <p className="text-white font-heading font-extrabold text-2xl uppercase">
                    Hayden Cox
                  </p>
                  <p className="text-slate-400 font-body text-sm mt-1">
                    Head Coach
                  </p>
                </div>
              </div>
              <div className="md:col-span-8">
                <Quote className="w-8 h-8 text-electric/30 mb-4" />
                <div className="space-y-5 text-slate-300 font-body leading-relaxed text-lg">
                  <p>
                    Good few weeks for the group. We spent most of January in a heavy
                    aerobic block and honestly some of these early-season marks caught me
                    off guard in the best way.
                  </p>
                  <p>
                    Marcus dropped a 13:51 on legs that were supposed to be tired. Priya
                    ran 4:31 with a negative split, which is the race we&apos;ve been
                    working toward for months. Sam went 2:18 at Houston in his first
                    real marathon build. That one hit different. He called me from the
                    finish line and neither of us could talk for a minute.
                  </p>
                  <p>
                    Darius opened with a 50.1 in the hurdles at Furman, which is absurd
                    for January. We made one adjustment to his stride pattern between
                    7 and 8 and it unlocked something. Claire&apos;s OTQ speaks for itself.
                  </p>
                  <p className="text-white font-semibold">
                    Outdoor season is where this gets real. The fitness is there. Now
                    we race.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-sm text-slate-400 font-body">
                    Updated February 28, 2026
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== BOTTOM CTA — with background image for texture ===== */}
      <section className="relative py-16 md:py-24 px-6 overflow-hidden">
        <Image
          src="/images/race-pack.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-dark-green/85" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-white leading-[0.92] mb-6">
              Your Chapter
              <br />
              <span className="text-gradient">Starts Here</span>
            </h2>
            <p className="text-lg text-white/60 font-body max-w-xl mx-auto mb-12 leading-relaxed">
              Every athlete on this page started with the same thing. A decision
              to show up. That&apos;s all it takes.
            </p>
            <Link
              href="/join"
              className="btn-slide-up-white inline-flex items-center gap-2 px-12 py-4 bg-electric text-dark-green text-base font-bold uppercase tracking-wider font-body"
            >
              Apply to Join <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
