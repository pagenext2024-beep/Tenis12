import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// @ts-ignore
import sneaker1 from './Tenis1.png';
// @ts-ignore
import sneaker2 from './tenis2.png';
// @ts-ignore
import sneaker3 from './tenis3.png';

gsap.registerPlugin(ScrollTrigger);

export default function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sneakerContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        // Desktop Timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=450%",
            pin: true,
            scrub: 2,
          }
        });

        // Set initial states
        gsap.set(".sneaker-frame:not(.img-1)", { autoAlpha: 0, scale: 0.8, y: 50 });
        gsap.set(".spec-1, .spec-2, .spec-3", { autoAlpha: 0 });

        // Global Idle Floating Animation - Separated from scroll logic
        gsap.to(".sneaker-img", {
          y: "+=15",
          rotation: "2",
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
            each: 0.5,
            repeat: -1,
            yoyo: true
          }
        });

        // Stage 1: Sneaker 1 moves left, Spec 1 appears (RIGHT)
        tl.to(".img-1", {
          scale: 1.1,
          rotateY: -35,
          rotateZ: 10,
          x: "-35%",
          duration: 4,
          ease: "expo.inOut"
        })
        .to(".spec-1", { autoAlpha: 1, x: 0, duration: 2.5, ease: "power3.out" }, "-=2.5")
        
        // Stage 2: Swap to Sneaker 2, move right, Spec 2 appears (LEFT)
        .to(".spec-1", { autoAlpha: 0, x: 80, duration: 2, ease: "power4.in" })
        .to(".img-1", { autoAlpha: 0, scale: 0.5, y: 150, rotateX: 30, duration: 2.5, ease: "expo.inOut" }, "-=2")
        .fromTo(".img-2", 
          { autoAlpha: 0, scale: 0.5, y: -150, rotateX: -30 },
          { autoAlpha: 1, scale: 1.1, y: 0, rotateX: 0, duration: 2.5, ease: "expo.inOut", immediateRender: false }, 
          "-=2"
        )
        .to(".img-2", {
          rotateY: 35,
          rotateZ: -10,
          x: "35%",
          duration: 4,
          ease: "expo.inOut"
        }, "-=1")
        .to(".spec-2", { autoAlpha: 1, x: 0, duration: 2.5, ease: "power3.out" }, "-=3")

        // Stage 3: Swap to Sneaker 3, move left, Spec 3 appears (RIGHT)
        .to(".spec-2", { autoAlpha: 0, x: -80, duration: 2, ease: "power4.in" })
        .to(".img-2", { autoAlpha: 0, scale: 0.5, y: 150, rotateX: 30, duration: 2.5, ease: "expo.inOut" }, "-=2")
        .fromTo(".img-3",
          { autoAlpha: 0, scale: 0.5, y: -150, rotateX: -30 },
          { autoAlpha: 1, scale: 1.1, y: 0, rotateX: 0, duration: 2.5, ease: "expo.inOut", immediateRender: false },
          "-=2"
        )
        .to(".img-3", {
          rotateY: 0,
          rotateZ: 0,
          x: "0%",
          scale: 1.5,
          duration: 5,
          ease: "expo.out",
          filter: "brightness(1.2) contrast(1.1)"
        })
        .to(".spec-3", { autoAlpha: 1, x: 0, duration: 3, ease: "power3.out" }, "-=4.5")
        .to(".bg-overlay-text", {
          scale: 1.7,
          opacity: 1,
          duration: 4,
          ease: "expo.inOut"
        }, "-=4");


        // Progress bar animation
        tl.to(".scroll-progress-bar", {
          height: "100%",
          ease: "none",
          duration: tl.duration()
        }, 0);
      });

      mm.add("(max-width: 767px)", () => {
        // Mobile Timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "+=400%",
            pin: true,
            scrub: 1.5,
          }
        });

        // Set initial states
        gsap.set(".sneaker-frame:not(.img-1)", { autoAlpha: 0, scale: 0.7, y: 30 });
        gsap.set(".spec-1, .spec-2, .spec-3", { autoAlpha: 0, y: 50 });

        // Global Idle Floating for Mobile - Separated from scroll logic
        gsap.to(".sneaker-img", {
          y: "+=10",
          rotation: "1.5",
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: {
            each: 0.6,
            repeat: -1,
            yoyo: true
          }
        });

        // Stage 1: Sneaker 1 tilts, Spec 1 appears
        tl.to(".img-1", {
          scale: 1.05,
          y: "-5%",
          rotateX: 10,
          duration: 3,
          ease: "expo.inOut"
        })
        .to(".spec-1", { autoAlpha: 1, y: 0, duration: 1.5, ease: "power3.out" }, "-=1.5")
        
        // Stage 2: Swap to Sneaker 2, Spec 2
        .to(".spec-1", { autoAlpha: 0, y: -20, duration: 1.2, ease: "power3.in" })
        .to(".img-1", { autoAlpha: 0, scale: 0.5, y: 50, duration: 1.2, ease: "expo.inOut" }, "-=1.2")
        .fromTo(".img-2",
          { autoAlpha: 0, scale: 0.5, y: -50 },
          { autoAlpha: 1, scale: 1.05, y: "-5%", duration: 1.5, ease: "expo.inOut", immediateRender: false },
          "-=1.2"
        )
        .to(".spec-2", { autoAlpha: 1, y: 0, duration: 1.5, ease: "power3.out" }, "-=0.5")

        // Stage 3: Swap to Sneaker 3, Spec 3
        .to(".spec-2", { autoAlpha: 0, y: -20, duration: 1.2, ease: "power3.in" })
        .to(".img-2", { autoAlpha: 0, scale: 0.5, y: 50, duration: 1.2, ease: "expo.inOut" }, "-=1.2")
        .fromTo(".img-3",
          { autoAlpha: 0, scale: 0.5, y: -50 },
          { autoAlpha: 1, scale: 1.1, x: "0%", y: "5%", duration: 2, ease: "expo.out", immediateRender: false },
          "-=1.2"
        )
        .to(".spec-3", { autoAlpha: 1, y: 0, duration: 2, ease: "power3.out" }, "-=1.5")


        .to(".bg-overlay-text", {
          scale: 1.2,
          opacity: 0.5,
          duration: 2,
          ease: "power2.inOut"
        }, "-=2");
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Dynamic Background Text (Moved here to be behind) */}
      <div className="bg-overlay-text absolute inset-0 flex flex-col items-center justify-center text-[20vw] font-black text-white/[0.05] select-none pointer-events-none leading-none opacity-0 scale-50">
        <span>KINETIC</span>
        <span>ENERGY</span>
      </div>

      <div className="relative z-10 w-full max-w-7xl px-8 flex items-center justify-center h-full">
        {/* Detail Callouts */}
        <div className="absolute inset-0 z-40 pointer-events-none">
          {/* Spec 1 */}
          <div className="spec-1 absolute top-[65%] md:top-[20%] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-[10%] w-full max-w-[280px] md:max-w-xs text-center md:text-right px-4 bg-black/60 md:bg-black/40 backdrop-blur-xl py-6 rounded-lg border border-white/10 shadow-2xl">
             <div className="flex flex-col items-center md:items-end">
                <span className="text-[8px] md:text-[10px] font-mono text-brand mb-1 md:mb-2 tracking-widest">[ SYSTEM_01 ]</span>
                <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 uppercase leading-tight text-white drop-shadow-md">Aerodynamic<br className="hidden md:block"/>Shell</h3>
                <p className="text-[10px] md:text-xs text-white leading-relaxed uppercase font-medium">
                  A revolutionary structure that reduces drag by 14%, crafted from a single piece of graphene-infused mesh.
                </p>
                <div className="w-12 h-[1px] bg-brand mt-4 md:mt-6" />
             </div>
          </div>

          {/* Spec 2 */}
          <div className="spec-2 absolute top-[65%] md:top-[40%] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[10%] w-full max-w-[280px] md:max-w-xs text-center md:text-left px-4 bg-black/60 md:bg-black/40 backdrop-blur-xl py-6 rounded-lg border border-white/10 shadow-2xl">
             <div className="flex flex-col items-center md:items-start">
                <span className="text-[8px] md:text-[10px] font-mono text-brand mb-1 md:mb-2 tracking-widest">[ SYSTEM_02 ]</span>
                <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 uppercase leading-tight text-white drop-shadow-md">Reactive<br className="hidden md:block"/>Pulse Core</h3>
                <p className="text-[10px] md:text-xs text-white leading-relaxed uppercase font-medium">
                  Dual-density foam with micro-vacuum chambers that store kinetic energy and release it upon heel strike.
                </p>
                <div className="w-12 h-[1px] bg-brand mt-4 md:mt-6" />
             </div>
          </div>

          {/* Spec 3 */}
          <div className="spec-3 absolute top-[65%] md:top-[60%] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-[10%] w-full max-w-[280px] md:max-w-xs text-center md:text-right px-4 bg-black/60 md:bg-black/40 backdrop-blur-xl py-6 rounded-lg border border-white/10 shadow-2xl">
             <div className="flex flex-col items-center md:items-end">
                <span className="text-[8px] md:text-[10px] font-mono text-brand mb-1 md:mb-2 tracking-widest">[ SYSTEM_03 ]</span>
                <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 uppercase leading-tight text-white drop-shadow-md">Thermal<br className="hidden md:block"/>Regulation</h3>
                <p className="text-[10px] md:text-xs text-white leading-relaxed uppercase font-medium">
                  Integrated carbon fiber vents that actively channel heat away from the core during high-intensity movement.
                </p>
                <div className="w-12 h-[1px] bg-brand mt-4 md:mt-6" />
             </div>
          </div>
        </div>

        {/* Central Sneaker Stack */}
        <div ref={sneakerContainerRef} className="relative w-full max-w-[90%] md:max-w-5xl flex items-center justify-center will-change-transform">
          <div className="sneaker-frame img-1 absolute w-full h-auto z-10">
            <img src={sneaker1} alt="Sneaker 1" loading="eager" className="sneaker-img w-full h-auto drop-shadow-[0_0_80px_rgba(0,224,255,0.15)] md:drop-shadow-[0_0_120px_rgba(0,224,255,0.15)]" />
          </div>
          <div className="sneaker-frame img-2 absolute w-full h-auto z-10">
            <img src={sneaker2} alt="Sneaker 2" loading="eager" className="sneaker-img w-full h-auto drop-shadow-[0_0_80px_rgba(0,224,255,0.15)] md:drop-shadow-[0_0_120px_rgba(0,224,255,0.15)]" />
          </div>
          <div className="sneaker-frame img-3 absolute w-full h-auto z-10">
            <img src={sneaker3} alt="Sneaker 3" loading="eager" className="sneaker-img w-full h-auto drop-shadow-[0_0_80px_rgba(0,224,255,0.15)] md:drop-shadow-[0_0_120px_rgba(0,224,255,0.15)]" />
          </div>
          
          {/* Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand/5 blur-[150px] -z-10 rounded-full" />
        </div>
      </div>

      {/* Progress Line */}
      <div className="absolute left-12 top-1/2 -translate-y-1/2 h-1/2 w-[1px] bg-white/10">
        <div className="absolute top-0 left-0 w-full bg-brand h-0 scroll-progress-bar" />
      </div>
    </section>
  );
}
