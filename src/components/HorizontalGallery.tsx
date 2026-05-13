import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1200",
  "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&q=80&w=1200"
];

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const scrollWidth = containerRef.current!.scrollWidth - window.innerWidth;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${scrollWidth * 1.5}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });

      tl.to(containerRef.current, {
        x: -scrollWidth,
        ease: "none",
      });

      // Skew effect on scroll velocity
      ScrollTrigger.create({
        onUpdate: (self) => {
          const skew = self.getVelocity() / 300;
          gsap.to(".gallery-card", {
             skewX: skew,
             overwrite: true,
             duration: 0.5,
             ease: "power2.out"
          });
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen overflow-hidden bg-black flex flex-col relative">
      <div className="w-full px-8 md:px-12 pt-32 pb-12 z-20 flex justify-between items-end shrink-0">
         <div className="overflow-hidden">
            <h2 className="text-4xl md:text-8xl font-black tracking-tighter uppercase leading-tight">
              PROVING<br/><span className="text-brand">GROUNDS.</span>
            </h2>
         </div>
         <div className="max-w-xs text-right hidden md:block">
            <p className="text-[10px] text-white/30 uppercase tracking-widest leading-loose">
              Tested in the most demanding urban environments. Nebula-X provides total adaptive response across all terrains.
            </p>
         </div>
      </div>
      
      <div className="flex-1 flex items-center overflow-hidden">
        <div ref={containerRef} className="flex items-center gap-16 px-12 h-fit">
        {images.map((src, idx) => (
          <div key={idx} className="gallery-card relative h-[55vh] aspect-[16/10] flex-shrink-0 group overflow-hidden bg-white/5">
            <img 
              src={src} 
              alt={`Nebula Gallery ${idx}`} 
              className="w-full h-full object-cover transition-all duration-1000 scale-110 group-hover:scale-100"
            />
            {/* HUD Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <div className="flex justify-between items-start">
                  <div className="px-2 py-1 bg-brand text-dark text-[8px] font-black uppercase tracking-widest">Active_Scan</div>
                  <div className="text-white/40 text-[8px] font-mono">COORD_88.12.04</div>
               </div>
               <div className="bg-dark/80 backdrop-blur-md p-6 border-l-2 border-brand">
                  <span className="text-[10px] text-brand font-bold mb-2 block uppercase tracking-widest">Environment_Data</span>
                  <p className="text-xl font-bold uppercase tracking-tight">HIGH VELOCITY_TEST</p>
               </div>
            </div>
          </div>
        ))}

        <div className="flex-shrink-0 w-screen h-full flex items-center justify-center">
            <div className="relative group clickable cursor-none p-24">
               <h3 className="text-8xl md:text-[20vw] font-black tracking-tighter opacity-5 transition-opacity group-hover:opacity-20 leading-none">THE_FUTURE</h3>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-brand/20 w-48 h-48 rounded-full flex items-center justify-center animate-pulse">
               </div>
            </div>
        </div>
      </div>
    </div>
  </section>
  );
}
