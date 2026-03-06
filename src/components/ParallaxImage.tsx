"use client";

import { useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
}

export default function ParallaxImage({ src, alt, className = "", objectPosition = "center" }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  // Use scroll event for smooth parallax
  if (typeof window !== "undefined") {
    // This runs on mount via the ref callback approach below
  }

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div
        ref={(el) => {
          (imgRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
          if (!el) return;
          const container = el.parentElement;
          if (!container) return;

          const onScroll = () => {
            const rect = container.getBoundingClientRect();
            const windowH = window.innerHeight;
            const progress = (windowH - rect.top) / (windowH + rect.height);
            const clamped = Math.max(0, Math.min(1, progress));
            const offset = (clamped - 0.5) * 80;
            el.style.transform = `translate3d(0, ${offset}px, 0)`;
          };

          window.addEventListener("scroll", onScroll, { passive: true });
          onScroll();

          // Cleanup on unmount via MutationObserver trick
          const observer = new MutationObserver(() => {
            if (!document.contains(el)) {
              window.removeEventListener("scroll", onScroll);
              observer.disconnect();
            }
          });
          observer.observe(document.body, { childList: true, subtree: true });
        }}
        className="absolute -top-20 -bottom-20 left-0 right-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className={`object-cover ${className}`}
          style={{ objectPosition }}
        />
      </div>
    </div>
  );
}
