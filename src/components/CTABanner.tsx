import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-charcoal py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-extrabold font-heading uppercase text-white leading-[0.9] mb-6 md:mb-10">
          Keep Our Kids
          <br />
          <span className="text-gradient">On The Right Track</span>
        </h2>
        <p className="text-xl text-gray-400 font-body max-w-xl mx-auto mb-12 md:mb-14">
          Register your athlete today and give them the coaching, community, and
          competition they deserve.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/join"
            className="btn-slide-up-white w-full sm:w-auto px-10 py-4 bg-orange text-charcoal text-base font-bold uppercase tracking-wider font-body text-center"
          >
            Register Now
          </Link>
          <Link
            href="/donate"
            className="btn-slide-up-white w-full sm:w-auto px-10 py-4 border-2 border-white text-white text-base font-bold uppercase tracking-wider font-body text-center"
          >
            Support the Club
          </Link>
        </div>
      </div>
    </section>
  );
}
