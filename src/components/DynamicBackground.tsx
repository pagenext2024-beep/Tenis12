import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function DynamicBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background color shift
      gsap.to(bgRef.current, {
        backgroundColor: "#0a0a0f", // Deep midnight blue
        scrollTrigger: {
          trigger: "main",
          start: "top top",
          end: "30% top",
          scrub: true,
        }
      });

      gsap.to(bgRef.current, {
        backgroundColor: "#0f0505", // Deep dark red
        scrollTrigger: {
          trigger: "main",
          start: "60% top",
          end: "90% top",
          scrub: true,
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={bgRef}
      className="fixed inset-0 -z-20 bg-dark transition-colors duration-1000"
    />
  );
}
