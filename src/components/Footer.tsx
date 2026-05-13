import { Twitter, Instagram, Globe, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-dark px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
           <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand/20 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-brand rounded-full" />
            </div>
            <span className="font-display font-bold text-lg tracking-tighter">NEBULA-X</span>
          </div>
          <p className="text-[10px] text-white/30 tracking-widest uppercase">© 2026 NEBULA CORPORATION. ALL RIGHTS RESERVED.</p>
        </div>

        <div className="flex items-center gap-8">
           <SocialLink Icon={Twitter} />
           <SocialLink Icon={Instagram} />
           <SocialLink Icon={Globe} />
           <SocialLink Icon={Youtube} />
        </div>

        <div className="flex items-center gap-12 text-[10px] font-bold uppercase tracking-widest text-white/40">
           <a href="#" className="hover:text-brand transition-colors">Privacy</a>
           <a href="#" className="hover:text-brand transition-colors">Terms</a>
           <a href="#" className="hover:text-brand transition-colors">Stores</a>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ Icon }: { Icon: any }) {
  return (
    <a href="#" className="text-white/20 hover:text-brand transition-colors cursor-none clickable focus:outline-none">
      <Icon size={20} />
    </a>
  );
}
