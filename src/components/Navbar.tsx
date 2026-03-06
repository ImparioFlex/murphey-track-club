"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Train", href: "/train" },
  { label: "Grassroots Elite", href: "/athletes" },
  { label: "Camps", href: "/camps" },
  { label: "Gear", href: "/gear" },
  { label: "Unseeded", href: "/unseeded" },
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
          scrolled ? "border-slate-200 shadow-sm" : "border-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logos/grassroots-wordmark.png"
                alt="Grassroots"
                width={220}
                height={70}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-4 py-2 text-sm font-bold tracking-wide uppercase font-body transition-all border-b-2 ${
                      isActive
                        ? "border-electric text-dark-green"
                        : "border-transparent text-dark-green hover:border-mid-green/40 hover:text-forest-green"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/join"
                className="btn-slide-up ml-4 px-6 py-2.5 bg-dark-green text-white text-sm font-bold tracking-wide uppercase font-body"
              >
                Join the Movement
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-dark-green"
              aria-label="Open menu"
            >
              <Menu className="w-7 h-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col">
          <div className="flex items-center justify-between px-6 h-20 border-b border-slate-200">
            <Link href="/" onClick={() => setMobileOpen(false)}>
              <Image
                src="/logos/grassroots-wordmark.png"
                alt="Grassroots"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 text-dark-green"
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
                      ? "text-electric"
                      : "text-dark-green hover:text-forest-green"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/join"
              onClick={() => setMobileOpen(false)}
              className="btn-slide-up mt-4 px-10 py-4 bg-dark-green text-white text-xl font-bold uppercase font-heading tracking-wider"
            >
              Join the Movement
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
