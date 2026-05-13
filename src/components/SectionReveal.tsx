import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SectionReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y: 100,
        filter: "blur(20px)",
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return <div ref={ref}>{children}</div>;
}
