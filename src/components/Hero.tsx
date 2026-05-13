import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
// @ts-ignore
import sneakerImg from './Tenis1.png';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sneakerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // Sneaker Float Animation
      gsap.to(".sneaker-float", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });

      mm.add("(min-width: 768px)", () => {
        // Desktop Animations
        const tl = gsap.timeline();
        
        tl.from(".bg-text", {
          scale: 1.5,
          opacity: 0,
          duration: 2.5,
          ease: "expo.out"
        })
        .from(sneakerRef.current, {
          x: 200,
          y: 100,
          rotate: 30,
          scale: 0.5,
          opacity: 0,
          duration: 1.8,
          ease: "elastic.out(1, 0.75)"
        }, "-=2")
        .from(".hero-content-item", {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power4.out"
        }, "-=1");

        // Advanced Scroll FX
        gsap.to(sneakerRef.current, {
          y: 150,
          rotateX: -15,
          rotateY: 30,
          rotateZ: 5,
          scale: 1.15,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });
      });

      mm.add("(max-width: 767px)", () => {
        // Mobile Animations
        const tl = gsap.timeline();
        
        tl.from(".bg-text", {
          scale: 1.2,
          opacity: 0,
          duration: 2,
          ease: "expo.out"
        })
        .from(sneakerRef.current, {
          y: 50,
          scale: 0.8,
          opacity: 0,
          duration: 1.5,
          ease: "power3.out"
        }, "-=1.5")
        .from(".hero-content-item", {
          y: 30,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power4.out"
        }, "-=0.8");

        // Simpler Scroll FX for mobile performance/space
        gsap.to(sneakerRef.current, {
          y: 80,
          scale: 1.05,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });
      });

      // Parallax on Scroll (Common)
      gsap.to(".bg-text", {
        y: -150,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Velocity based dynamic tilt
      ScrollTrigger.create({
        onUpdate: (self) => {
          const velocity = self.getVelocity();
          const tilt = velocity / 200;
          gsap.to(".sneaker-float", {
             rotation: tilt * 0.2,
             overwrite: "auto",
             duration: 0.5,
             ease: "power2.out"
          });
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Text */}
      <div className="bg-text absolute inset-0 flex items-center justify-center whitespace-nowrap pointer-events-none select-none">
        <h1 className="text-[35vw] font-black tracking-tighter leading-none text-white/[0.03]">
          NEBULA
        </h1>
      </div>

      {/* Sneaker Wrapper */}
      <div 
        ref={sneakerRef}
        className="relative z-10 w-full max-w-[80%] md:max-w-4xl px-4 md:px-8 perspective-1000"
      >
        <div className="sneaker-float will-change-transform transform-gpu">
          <img 
            src={sneakerImg} 
            alt="NEBULA-X Sneaker" 
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,224,255,0.2)] md:drop-shadow-[0_40px_100px_rgba(0,224,255,0.3)] filter contrast-110 saturate-125 will-change-transform transform-gpu"
          />
        </div>
        
        {/* Glow Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[50%] bg-brand/10 blur-[60px] md:blur-[120px] -z-10 rounded-full animate-pulse" />
      </div>

      {/* Hero Overlay UI */}
      <div className="absolute inset-0 z-20 pointer-events-none p-6 md:p-12 flex flex-col justify-between">
        <div className="flex justify-between items-start">
           <div className="hero-content-item flex flex-col gap-1">
              <span className="text-[10px] font-mono text-brand">STRICTLY_RESERVED</span>
              <span className="text-[10px] font-mono opacity-40">2026_FALL_COLLECTION</span>
           </div>
           <div className="hero-content-item text-right hidden sm:block">
              <span className="text-[10px] font-bold tracking-[0.5em] text-white/40 uppercase">Scroll to Experience</span>
           </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 pointer-events-auto text-center md:text-left">
          <div className="max-w-md">
            <div className="hero-content-item mb-2">
               <span className="inline-block px-3 py-1 bg-brand text-dark text-[10px] font-black uppercase tracking-widest rounded-sm">Global Launch 01.01</span>
            </div>
            <h2 ref={headlineRef} className="hero-content-item text-5xl md:text-8xl font-black leading-none mb-4 md:mb-6 uppercase">
              Run the<br/>Future.
            </h2>
            <p className="hero-content-item text-xs md:text-sm text-white/40 leading-relaxed max-w-sm mx-auto md:mx-0">
              Gravity is just a suggestion. The NEBULA-X Series 1 introduces the first Bio-Kinetic propulsion system ever integrated into sportswear.
            </p>
          </div>

          <div className="hero-content-item">
            <MagneticButton>
              <button className="group flex items-center gap-4 md:gap-6 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] bg-white text-dark px-8 md:px-10 py-4 md:py-6 rounded-none hover:bg-brand transition-all cursor-none clickable shadow-2xl">
                Pre-Order Now <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* Animated Lines */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden">
        <motion.div 
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="w-1/3 h-full bg-brand/50"
        />
      </div>
    </section>
  );
}
