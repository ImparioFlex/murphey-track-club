import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-dark-green py-32 px-6 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-extrabold font-heading uppercase text-white leading-[0.9] mb-8">
          The Club
          <br />
          <span className="text-gradient">Is Open</span>
        </h2>
        <p className="text-xl text-slate-400 font-body max-w-xl mx-auto mb-12">
          Whether you are chasing a national qualifier or just finding your people,
          take the first step.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/join"
            className="btn-slide-up-white w-full sm:w-auto px-10 py-4 bg-electric text-dark-green text-base font-bold uppercase tracking-wider font-body text-center"
          >
            Join the Squad
          </Link>
          <Link
            href="/join"
            className="btn-slide-up-white w-full sm:w-auto px-10 py-4 border-2 border-white text-white text-base font-bold uppercase tracking-wider font-body text-center"
          >
            Apply for Elite
          </Link>
        </div>
      </div>
    </section>
  );
}
