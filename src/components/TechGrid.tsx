import { motion } from 'motion/react';
import { Shield, Zap, Wind, Target } from 'lucide-react';

const features = [
  {
    title: "Quantum Stability",
    desc: "Integrated lateral stabilizers designed for extreme lateral force resistance.",
    icon: Shield,
    className: "md:col-span-2 md:row-span-2 bg-brand/5",
  },
  {
    title: "Velocity Tuned",
    desc: "Optimized for maximum energy return during high-speed transitions.",
    icon: Zap,
    className: "bg-white/5",
  },
  {
    title: "Atmospheric Flow",
    desc: "Micro-ventilation system that adapts to movement intensity.",
    icon: Wind,
    className: "bg-white/5",
  },
  {
    title: "Precision Fit",
    desc: "Bio-adaptive lacing system that provides a second-skin feel.",
    icon: Target,
    className: "md:col-span-2 bg-white/5",
  }
];

export default function TechGrid() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
        <div>
           <span className="text-brand text-xs font-bold uppercase tracking-widest mb-4 block">Core Infrastructure</span>
           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">BEYOND THE<br/>SPECIFICATION.</h2>
        </div>
        <p className="max-w-xs text-white/40 text-sm leading-relaxed">
           Every element of the NEBULA-X is engineered to push the boundaries of what a performance sneaker can deliver. No compromises.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`group p-8 md:p-12 relative overflow-hidden glass-card rounded-3xl ${feature.className} cursor-none clickable`}
          >
            <feature.icon className="w-8 h-8 text-brand mb-8 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
            <p className="text-sm text-white/50 leading-relaxed max-w-[240px]">{feature.desc}</p>
            
            {/* Absolute element */}
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
               <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                  <div className="w-2 h-2 bg-brand rounded-full animate-ping" />
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
