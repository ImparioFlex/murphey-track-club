import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Clock } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";
import FadeIn from "@/components/FadeIn";

const trainingSchedule = [
  { day: "Monday", time: "5:30 PM – 7:00 PM", location: "Halle Stadium", focus: "Speed & technique development" },
  { day: "Tuesday", time: "5:30 PM – 7:00 PM", location: "Halle Stadium", focus: "Event-specific training" },
  { day: "Thursday", time: "5:30 PM – 7:00 PM", location: "Halle Stadium", focus: "Endurance & conditioning" },
];

const competitions = [
  { date: "Jun 1–5", event: "Shelby Metro Track & Field Camp", location: "Halle Stadium", type: "Camp" },
  { date: "Jun 6", event: "Fast & the Furious Invitational", location: "Bartlett HS", type: "Invitational" },
  { date: "Jun 13", event: "USATF TN Association Championships", location: "Bartlett HS", type: "Championship" },
  { date: "Jun 18", event: "Orange & White Inter Squad Meet", location: "Halle Stadium", type: "Club" },
  { date: "Jun 24–27", event: "USATF Youth Championships", location: "Huntsville, AL", type: "National" },
  { date: "Jul 10–12", event: "USATF JO Region Championships", location: "Collierville HS", type: "Regional" },
  { date: "Jul 18–20", event: "U20 USATF Championships", location: "Eugene, OR", type: "National" },
  { date: "Jul 27 – Aug 2", event: "USATF Junior Olympics Championships", location: "Cerritos, CA", type: "National" },
];

function TypeBadge({ type }: { type: string }) {
  const colors: Record<string, string> = {
    Camp: "bg-orange/10 text-orange",
    Invitational: "bg-charcoal/10 text-charcoal",
    Championship: "bg-orange text-white",
    Club: "bg-cream-dark text-charcoal",
    Regional: "bg-orange-dark/10 text-orange-dark",
    National: "bg-charcoal text-white",
  };
  return (
    <span className={`inline-block px-2.5 py-0.5 text-xs font-bold tracking-wider uppercase ${colors[type] || "bg-gray-100 text-gray-500"}`}>
      {type}
    </span>
  );
}

export default function SchedulePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="bg-white pt-24 md:pt-32 pb-16 md:pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <SectionEyebrow>2026 Season</SectionEyebrow>
            <h1 className="text-[clamp(3rem,8vw,7rem)] leading-[0.88] font-extrabold font-heading uppercase text-charcoal mb-8">
              Training &amp;
              <br />
              <span className="text-orange">Competition</span>
            </h1>
            <p className="text-lg text-gray-700 font-body leading-relaxed max-w-2xl mx-auto">
              Season begins June 1st. Three training sessions per week at Halle
              Stadium, plus competitions from local invitationals to the USATF
              Junior Olympics.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== WEEKLY TRAINING ===== */}
      <section className="bg-cream py-20 md:py-28 px-6">
        <div className="mx-auto max-w-4xl">
          <FadeIn>
            <div className="text-center mb-10 md:mb-16">
              <SectionEyebrow>Weekly Training</SectionEyebrow>
              <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-charcoal leading-[0.92]">
                Practice Schedule
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="overflow-hidden border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="bg-charcoal">
                    <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs font-bold tracking-[0.15em] uppercase text-white font-body">Day</th>
                    <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs font-bold tracking-[0.15em] uppercase text-white font-body">Time</th>
                    <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs font-bold tracking-[0.15em] uppercase text-white font-body hidden md:table-cell">Location</th>
                    <th className="px-3 md:px-6 py-3 md:py-4 text-left text-xs font-bold tracking-[0.15em] uppercase text-white font-body hidden lg:table-cell">Focus</th>
                  </tr>
                </thead>
                <tbody className="font-body text-base">
                  {trainingSchedule.map((row, i) => (
                    <tr key={row.day} className={`border-t border-gray-200 ${i % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
                      <td className="px-3 md:px-6 py-3 md:py-5 font-bold text-charcoal font-heading uppercase tracking-wide">{row.day}</td>
                      <td className="px-3 md:px-6 py-3 md:py-5 text-gray-700 font-semibold">{row.time}</td>
                      <td className="px-3 md:px-6 py-3 md:py-5 text-gray-500 hidden md:table-cell">
                        <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {row.location}</span>
                      </td>
                      <td className="px-3 md:px-6 py-3 md:py-5 text-gray-500 hidden lg:table-cell">{row.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-gray-500 font-body">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange" /> Season starts June 1st
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 text-orange" /> 5:30 PM – 7:00 PM
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange" /> Halle Stadium, Memphis
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== COMPETITION CALENDAR ===== */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <SectionEyebrow>Competitions</SectionEyebrow>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-charcoal leading-[0.92] mb-12">
              2026 Competition Calendar
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {competitions.map((comp, i) => (
              <FadeIn key={comp.event} delay={i * 40}>
                <div className="border border-gray-200 p-4 md:p-6 hover:border-orange/40 transition-colors flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                  <div className="shrink-0 w-28">
                    <p className="font-bold text-orange font-heading uppercase text-lg tracking-wide">
                      {comp.date}
                    </p>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-extrabold font-heading uppercase text-charcoal">
                      {comp.event}
                    </h3>
                    <p className="text-sm text-gray-500 font-body inline-flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> {comp.location}
                    </p>
                  </div>
                  <div className="shrink-0">
                    <TypeBadge type={comp.type} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-charcoal py-16 md:py-24 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold font-heading uppercase text-white leading-[0.92] mb-6">
              Ready To
              <br />
              <span className="text-gradient">Compete?</span>
            </h2>
            <p className="text-lg text-gray-400 font-body max-w-xl mx-auto mb-12 leading-relaxed">
              Register your athlete today. $100 covers USATF membership, club
              uniform, and access to all training and competitions.
            </p>
            <Link
              href="/join"
              className="btn-slide-up-white inline-flex items-center gap-2 px-10 py-4 bg-orange text-charcoal text-base font-bold uppercase tracking-wider font-body"
            >
              Register Now <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
