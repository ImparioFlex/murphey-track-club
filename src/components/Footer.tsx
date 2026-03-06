import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Train", href: "/train" },
  { label: "Athletes", href: "/athletes" },
  { label: "Camps", href: "/camps" },
  { label: "Gear", href: "/gear" },
  { label: "Join", href: "/join" },
];

export default function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Image
              src="/logos/grassroots-wordmark.png"
              alt="Grassroots"
              width={320}
              height={90}
              className="h-14 md:h-20 lg:h-24 w-auto brightness-0 invert mb-6"
            />
            <p className="text-slate-400 font-body max-w-sm leading-relaxed">
              Elite coaching, real community, and the best miles of your life.
              Based in Greenville, SC.
            </p>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold font-body uppercase tracking-[0.2em] text-electric mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold font-body uppercase tracking-[0.2em] text-electric mb-6">
              Connect
            </h4>
            <div className="space-y-3 text-slate-400 font-body">
              <p>Greenville, SC</p>
              <p>Head Coach: Hayden Cox</p>
              <p className="pt-4">
                <Link
                  href="/join"
                  className="text-electric hover:text-white transition-colors font-semibold"
                >
                  Join the Club &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400/60 font-body">
            &copy; {new Date().getFullYear()} Grassroots Elite. All rights
            reserved.
          </p>
          <p className="text-sm text-slate-400/60 font-body">
            Site built by{" "}
            <a
              href="https://imparioflex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-electric transition-colors"
            >
              Impario Flex
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
