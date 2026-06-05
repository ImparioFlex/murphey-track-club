"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Coaches", href: "/coaches" },
  { label: "Schedule", href: "/schedule" },
  { label: "Donate", href: "/donate" },
  { label: "Ed Murphey Classic", href: "/meet" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b transition-all duration-300 ${
          scrolled ? "border-gray-200 shadow-sm" : "border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <Image
                src="/logos/mtc-logo-new.png"
                alt="Murphey Track Club"
                width={56}
                height={56}
                className="h-12 w-12 object-contain"
                priority
              />
              <div className="hidden sm:block">
                <p className="text-lg font-extrabold font-heading uppercase text-charcoal leading-none tracking-wide">
                  Murphey Track Club
                </p>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-orange font-body">
                  Memphis, TN
                </p>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-bold tracking-wide uppercase font-body transition-all border-b-2 ${
                      isActive
                        ? "border-orange text-charcoal"
                        : "border-transparent text-charcoal hover:border-orange/40 hover:text-charcoal-mid"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/join"
                className="btn-slide-up ml-4 px-6 py-2.5 bg-charcoal text-white text-sm font-bold tracking-wide uppercase font-body"
              >
                Join the Club
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-charcoal"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col">
          <div className="flex items-center justify-between px-6 h-20 border-b border-gray-200">
            <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
              <Image
                src="/logos/mtc-logo-new.png"
                alt="Murphey Track Club"
                width={48}
                height={48}
                className="h-10 w-10 object-contain"
              />
              <span className="text-lg font-extrabold font-heading uppercase text-charcoal">MTC</span>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-charcoal"
              aria-label="Close menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-2xl md:text-3xl font-extrabold font-heading uppercase tracking-wide transition-colors ${
                    isActive
                      ? "text-orange"
                      : "text-charcoal hover:text-charcoal-mid"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/join"
              onClick={() => setMobileOpen(false)}
              className="btn-slide-up mt-4 px-10 py-4 bg-charcoal text-white text-xl font-bold uppercase font-heading tracking-wider"
            >
              Join the Club
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
