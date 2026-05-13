import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: "expo.inOut",
            onComplete
          });
        }
      });

      tl.to(".loader-bar", {
        scaleX: 1,
        duration: 2,
        ease: "power4.inOut"
      })
      .to(".loader-text", {
        y: -20,
        opacity: 0,
        stagger: 0.1,
        duration: 0.5
      });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] bg-dark flex flex-col items-center justify-center gap-8">
      <div className="overflow-hidden">
        <div className="loader-text flex items-center gap-4">
           <div className="w-8 h-8 rounded-full border-2 border-brand border-t-transparent animate-spin" />
           <span className="font-display font-black text-2xl tracking-[0.5em] text-white">INITIALIZING_NEBULA</span>
        </div>
      </div>
      
      <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
        <div className="loader-bar absolute top-0 left-0 w-full h-full bg-brand origin-left scale-x-0" />
      </div>

      <div className="absolute bottom-12 flex gap-12 text-[8px] font-mono text-white/20 tracking-widest">
         <span>PROTOCOL_X11</span>
         <span>AUTH_VERIFIED</span>
         <span>SYNCING_BIOMETRICS</span>
      </div>
    </div>
  );
}
