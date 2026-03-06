"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  objectPosition?: string;
  speed?: number;
}

export default function ParallaxImage({ src, alt, className = "", objectPosition = "center", speed = 0.3 }: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const windowH = window.innerHeight;
      // 0 when section enters bottom of viewport, 1 when it leaves the top
      const progress = (windowH - rect.top) / (windowH + rect.height);
      const clamped = Math.max(0, Math.min(1, progress));
      // Shift from -speed*50 to +speed*50 pixels
      const offset = (clamped - 0.5) * speed * 100;
      inner.style.transform = `translate3d(0, ${offset}px, 0)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div ref={innerRef} className="absolute -top-16 -bottom-16 left-0 right-0 will-change-transform">
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
