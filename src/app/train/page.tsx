import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import GrassDivider from "@/components/GrassDivider";
import SectionEyebrow from "@/components/SectionEyebrow";
import FadeIn from "@/components/FadeIn";
import { images } from "@/lib/images";

const schedule = [
  {
    day: "Tuesday",
    session: "Track Workout",
    time: "6:00 AM",
    focus: "Speed, intervals, race-specific sharpening",
  },
  {
    day: "Thursday",
    session: "Tempo Run",
    time: "6:00 AM",
    focus: "Threshold work, sustained efforts, road reps",
  },
  {
    day: "Saturday",
    session: "Long Run",
    time: "7:00 AM",
    focus: "Endurance, progression, marathon-specific work",
  },
  {
    day: "Sunday",
    session: "Recovery Run",
    time: "8:00 AM",
    focus: "Easy miles, community shakeout, conversation pace",
  },
];

const elitePerks = [
  "Direct coaching from Hayden Cox and elite-level programming",
  "Personalized training built around your event and your life",
  "Structured group sessions on track and roads",
  "Official club kit through VS Athletics",
  "Priority placement in camps and club events",
  "Access to the full Grassroots Elite athlete network",
];

const communityPerks = [
  "Group training sessions on track and roads",
  "Access to all Grassroots Elite community events",
  "VS Athletics team store (10% off, 10% back to the club)",
  "Seasonal social runs and race day coordination",
  "A community that actually shows up",
];

export default function TrainPage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-white py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <SectionEyebrow>Training Programs</SectionEyebrow>
            <h1 className="text-[clamp(3.5rem,9vw,8rem)] leading-[0.88] font-extrabold font-heading uppercase text-dark-green mb-8">
              Two Tracks.
              <br />
              <span className="text-forest-green">One Team.</span>
            </h1>
            <p className="text-lg text-slate-600 font-body leading-relaxed max-w-2xl mx-auto">
              Whether you are chasing your first USA Championships qualifier or
              you just want to train with fast, motivated people, there is a
              place for you here. Same track. Same values. Same coaching. The
              difference is the level of commitment and the shape of your goals.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== ELITE TRAINING GROUP ===== */}
      <section className="bg-deep py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <div>
                <SectionEyebrow dark>The Elite Group</SectionEyebrow>
                <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-white leading-[0.92] mb-8">
                  For Athletes
                  <br />
                  Who Are Not
                  <br />
                  <span className="text-electric">Done Yet.</span>
                </h2>
                <div className="space-y-5 text-slate-400 font-body leading-relaxed">
                  <p>
                    The Elite Group is for post-collegiate and open athletes who
                    are serious about competing at the national level. USA
                    Championships qualifiers. Road race podiums. Marathon Trials
                    standards. The kind of goals that require structure,
                    accountability, and a coach who has been there.
                  </p>
                  <p className="text-white font-semibold text-lg">
                    This is not a program you show up to casually. It is a
                    commitment.
                  </p>
                </div>

                <div className="mt-10">
                  <p className="text-xs font-bold tracking-[0.25em] uppercase text-electric font-body mb-5">
                    What You Get
                  </p>
                  <ul className="space-y-3">
                    {elitePerks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-start gap-3 text-slate-400 font-body"
                      >
                        <Check
                          className="w-5 h-5 text-mid-green mt-0.5 shrink-0"
                          strokeWidth={1.5}
                        />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <Link
                    href="/join"
                    className="btn-slide-up-white inline-flex items-center gap-2 px-10 py-4 bg-electric text-dark-green text-base font-bold uppercase tracking-wider font-body"
                  >
                    Apply for Elite <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative h-[520px] overflow-hidden">
                <Image
                  src={images.eliteTrack}
                  alt="Elite athlete training on the track"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/40 via-transparent to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== COMMUNITY SQUAD ===== */}
      <section className="bg-mint py-20 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn className="order-2 lg:order-1">
              <div className="relative h-[520px] overflow-hidden">
                <Image
                  src={images.communityRunners}
                  alt="Community runners training together"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mint/30 via-transparent to-transparent" />
              </div>
            </FadeIn>
            <FadeIn delay={150} className="order-1 lg:order-2">
              <div>
                <SectionEyebrow>The Community Squad</SectionEyebrow>
                <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-dark-green leading-[0.92] mb-8">
                  All Levels.
                  <br />
                  All Welcome.
                  <br />
                  <span className="text-forest-green">No Exceptions.</span>
                </h2>
                <div className="space-y-5 text-slate-600 font-body leading-relaxed">
                  <p>
                    You do not need a qualifying standard. You do not need a
                    college career. You just need to want it. The Community Squad
                    is open to runners of every level. Beginners finding their
                    stride. Competitive age-groupers. Masters athletes. Everyone
                    in between.
                  </p>
                  <p>
                    Community Squad members train alongside the Elite Group.
                    Same track. Same energy. Same coaching culture. You will
                    train harder than you expected, enjoy it more than you
                    planned, and discover that running is always better when you
                    are surrounded by people who mean it.
                  </p>
                  <p className="text-dark-green font-semibold text-lg">
                    No matter your pace, there is a home for you here.
                  </p>
                </div>

                <div className="mt-10">
                  <p className="text-xs font-bold tracking-[0.25em] uppercase text-forest-green font-body mb-5">
                    What You Get
                  </p>
                  <ul className="space-y-3">
                    {communityPerks.map((perk) => (
                      <li
                        key={perk}
                        className="flex items-start gap-3 text-slate-600 font-body"
                      >
                        <Check
                          className="w-5 h-5 text-mid-green mt-0.5 shrink-0"
                          strokeWidth={1.5}
                        />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <Link
                    href="/join"
                    className="btn-slide-up inline-flex items-center gap-2 px-10 py-4 bg-dark-green text-white text-base font-bold uppercase tracking-wider font-body"
                  >
                    Join the Squad <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ===== WEEKLY SCHEDULE ===== */}
      <section className="bg-white py-20 md:py-32 px-6">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16">
              <SectionEyebrow>Weekly Training</SectionEyebrow>
              <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-dark-green leading-[0.92]">
                The Schedule
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="overflow-hidden border border-slate-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-dark-green">
                    <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs font-bold tracking-[0.15em] uppercase text-white font-body">
                      Day
                    </th>
                    <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs font-bold tracking-[0.15em] uppercase text-white font-body">
                      Session
                    </th>
                    <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs font-bold tracking-[0.15em] uppercase text-white font-body hidden md:table-cell">
                      Time
                    </th>
                    <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs font-bold tracking-[0.15em] uppercase text-white font-body hidden lg:table-cell">
                      Focus
                    </th>
                  </tr>
                </thead>
                <tbody className="font-body text-base">
                  {schedule.map((row, i) => (
                    <tr
                      key={row.day}
                      className={`border-t border-slate-200 ${
                        i % 2 === 0 ? "bg-white" : "bg-slate-100"
                      }`}
                    >
                      <td className="px-3 md:px-6 py-3 md:py-5 font-bold text-dark-green font-heading uppercase tracking-wide">
                        {row.day}
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-5 text-slate-600">
                        {row.session}
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-5 text-slate-600 hidden md:table-cell">
                        {row.time}
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-5 text-slate-400 hidden lg:table-cell">
                        {row.focus}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-sm text-slate-400 text-center mt-6 font-body">
              Schedule adjusts seasonally. Join the club to receive the current
              training calendar and any location updates.
            </p>
          </FadeIn>

          <GrassDivider className="mt-16" />
        </div>
      </section>
    </>
  );
}
