import { motion } from 'motion/react';
import { ShoppingCart, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-8"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center">
          <div className="w-4 h-4 bg-dark rounded-full" />
        </div>
        <span className="font-display font-bold text-xl tracking-tighter">NEBULA-X</span>
      </div>

      <div className="hidden md:flex items-center gap-12 text-xs font-semibold tracking-widest uppercase text-white/60">
         <a href="#" className="hover:text-white transition-colors">Performance</a>
         <a href="#" className="hover:text-white transition-colors">Technology</a>
         <a href="#" className="hover:text-white transition-colors">Archive</a>
         <a href="#" className="hover:text-white transition-colors">Identity</a>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-white/80 hover:text-white transition-colors">
          <ShoppingCart size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-brand rounded-full" />
        </button>
        <button className="md:hidden p-2 text-white/80 hover:text-white transition-colors">
          <Menu size={20} />
        </button>
        <button className="hidden md:block px-6 py-2 bg-white text-dark text-xs font-bold uppercase tracking-widest rounded-full hover:bg-brand transition-colors cursor-none clickable">
          Reserve Now
        </button>
      </div>
    </motion.nav>
  );
}
