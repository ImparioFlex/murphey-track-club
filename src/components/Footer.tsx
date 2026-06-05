import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Coaches", href: "/coaches" },
  { label: "Schedule", href: "/schedule" },
  { label: "Join", href: "/join" },
  { label: "Donate", href: "/donate" },
  { label: "Ed Murphey Classic", href: "/meet" },
];

export default function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/logos/mtc-logo-new.png"
                alt="Murphey Track Club"
                width={64}
                height={64}
                className="h-16 w-16 object-contain"
              />
              <div>
                <p className="text-xl font-extrabold font-heading uppercase text-white leading-none">
                  Murphey Track Club
                </p>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-orange font-body mt-1">
                  Memphis, TN
                </p>
              </div>
            </div>
            <p className="text-gray-400 font-body max-w-sm leading-relaxed text-pretty">
              Keep Our Kids On The Right Track. Youth track &amp; field
              development through coaching, competition, and community. AAU and
              USATF sanctioned.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.instagram.com/murpheytrackclub/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-orange hover:bg-orange hover:text-charcoal transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:agseymour1913@gmail.com"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-orange hover:bg-orange hover:text-charcoal transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:901-828-6745"
                className="w-10 h-10 border border-white/15 flex items-center justify-center text-orange hover:bg-orange hover:text-charcoal transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-bold font-body uppercase tracking-[0.2em] text-orange mb-6">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-bold font-body uppercase tracking-[0.2em] text-orange mb-6">
              Contact
            </h4>
            <div className="space-y-3 text-gray-400 font-body">
              <p>Halle Stadium, Memphis, TN</p>
              <p>Executive Director: Alisa Seymour</p>
              <p>
                <a href="mailto:agseymour1913@gmail.com" className="hover:text-white transition-colors">
                  agseymour1913@gmail.com
                </a>
              </p>
              <p>
                <a href="mailto:eddie@edmurpheyclassic.com" className="hover:text-white transition-colors">
                  eddie@edmurpheyclassic.com
                </a>
              </p>
              <p className="pt-4">
                <Link
                  href="/join"
                  className="text-orange hover:text-white transition-colors font-semibold"
                >
                  Register Your Athlete &rarr;
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400/60 font-body">
            &copy; {new Date().getFullYear()} Murphey Track Club. All rights
            reserved.
          </p>
          <p className="text-sm text-gray-400/60 font-body">
            Site built by{" "}
            <a
              href="https://imparioflex.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-orange transition-colors"
            >
              Impario Flex
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
