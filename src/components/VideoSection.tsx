import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(videoWrapperRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "top center",
          scrub: 1
        }
      });

      gsap.to(".video-text", {
        x: (i) => i % 2 === 0 ? -100 : 100,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden bg-dark">
      {/* Background Marquee */}
      <div className="absolute inset-0 flex flex-col justify-center gap-8 pointer-events-none opacity-[0.02]">
        <div className="video-text whitespace-nowrap text-[20vw] font-black leading-none">NEBULA-X NEBULA-X NEBULA-X</div>
        <div className="video-text whitespace-nowrap text-[20vw] font-black leading-none self-end">SENSORIAL EXPERIENCE</div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={videoWrapperRef} className="relative aspect-video rounded-3xl overflow-hidden group border border-white/5 shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1600" 
            alt="Product Teaser" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
            <button className="w-24 h-24 bg-brand rounded-full flex items-center justify-center text-dark hover:scale-110 transition-transform cursor-none clickable shadow-[0_0_50px_rgba(0,224,255,0.4)]">
              <Play size={32} fill="currentColor" />
            </button>
          </div>

          <div className="absolute bottom-12 left-12">
            <span className="text-[10px] text-brand font-bold uppercase tracking-[0.4em] mb-4 block">Teaser 01 // 2026</span>
            <h3 className="text-4xl font-bold tracking-tighter uppercase">THE VISCERAL<br/>RESPONSE.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
