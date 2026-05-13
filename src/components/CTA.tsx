import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative py-24 md:py-48 flex flex-col items-center justify-center overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[80vw] h-[80vw] border border-white/5 rounded-full animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[60vw] h-[60vw] border border-brand/10 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-brand text-xs font-bold uppercase tracking-[0.4em] mb-8 block"
        >
          Limited Global Access
        </motion.span>
        
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-9xl font-bold tracking-tighter leading-none mb-12"
        >
          STEP INTO <br/>
          <span className="text-glow text-transparent bg-clip-text bg-gradient-to-r from-brand to-white/10">THE FUTURE.</span>
        </motion.h2>

        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           whileInView={{ scale: 1, opacity: 1 }}
           className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="group px-12 py-6 bg-brand text-dark font-black uppercase text-sm tracking-widest rounded-full hover:bg-white transition-all cursor-none clickable flex items-center gap-4">
             Join Waitlist <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </button>
          
          <button className="px-12 py-6 border border-white/20 text-white font-bold uppercase text-sm tracking-widest rounded-full hover:border-white transition-all cursor-none clickable">
             Collection Details
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-0 w-full px-6 md:px-12 flex items-center justify-between pointer-events-none">
         <div className="text-[10px] text-white/20 font-mono">SERIES_1 // 2026</div>
         <div className="text-[10px] text-white/20 font-mono">NEBULA_CORP // TOKYO</div>
      </div>
    </section>
  );
}
