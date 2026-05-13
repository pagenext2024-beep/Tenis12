import { motion } from 'motion/react';

const reviews = [
  {
    name: "Alex Rivera",
    role: "Professional Runner",
    text: "The responsiveness is unlike anything I've felt. It's like the ground pushes you back."
  },
  {
    name: "Jordan Chen",
    role: "Sneaker Enthusiast",
    text: "Design meets absolute peak performance. This is the new standard for the industry."
  },
  {
    name: "Elena Petrov",
    role: "Bio-Mechanics Expert",
    text: "Nebula-X aligns perfectly with natural foot kinetics. Truly revolutionary engineering."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-16 tracking-tighter uppercase">
          TRUSTED BY THE <br/><span className="text-brand">ELITE.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card p-12 relative group hover:bg-white/5 transition-colors cursor-none clickable"
            >
              <div className="absolute top-0 right-0 p-8 text-brand/20 group-hover:text-brand transition-colors">
                <span className="text-4xl font-black select-none">"</span>
              </div>
              <p className="text-lg mb-8 leading-relaxed text-white/80 font-medium">
                {review.text}
              </p>
              <div>
                <h4 className="font-bold uppercase tracking-widest text-sm">{review.name}</h4>
                <p className="text-[10px] text-brand/60 uppercase font-mono">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
