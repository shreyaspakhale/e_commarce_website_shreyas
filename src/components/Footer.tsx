import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Github, Twitter, Instagram, Youtube, Mail, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-pitch-black border-t border-white/5 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-neon-green p-2">
                <Cpu className="w-6 h-6 text-black" />
              </div>
              <span className="text-2xl font-display font-black tracking-tighter text-white italic uppercase">NEON CORE</span>
            </div>
            <p className="text-sm text-white/40 font-mono leading-relaxed">
              Engineering the next generation of digital dominance. High-performance hardware for the elite tier.
            </p>
            <div className="flex gap-6">
              {[Twitter, Instagram, Youtube, Github].map((Icon, i) => (
                <a key={i} href="#" className="text-white/40 hover:text-neon-green transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-[0.3em] mb-10">Arsenal_Categories</h4>
            <ul className="space-y-4 text-sm font-mono text-white/40">
              {['Mice', 'Keyboards', 'Monitors', 'Cabinets', 'Graphics'].map((item) => (
                <li key={item}><a href="#" className="hover:text-neon-green transition-colors">[{item}]</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-[0.3em] mb-10">Support_Database</h4>
            <ul className="space-y-4 text-sm font-mono text-white/40">
              {['Technical Specs', 'Firmware Updates', 'Warranty Logs', 'Contact Support'].map((item) => (
                <li key={item}><a href="#" className="hover:text-neon-green transition-colors">[{item}]</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-[0.3em] mb-10">Newsletter_Link</h4>
            <p className="text-sm text-white/40 font-mono mb-8">Receive critical updates and elite gear drops.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="EMAIL@DOMAIN.COM" 
                className="w-full bg-slate-grey border border-white/10 px-6 py-4 text-xs font-mono text-white focus:outline-none focus:border-neon-green/50 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-neon-green hover:bg-neon-green hover:text-black transition-all">
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="absolute inset-0 border border-neon-green/0 group-focus-within:border-neon-green/30 pointer-events-none transition-all" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-16 border-t border-white/5 text-[10px] font-mono text-white/20 uppercase tracking-widest">
          <p>© 2026 NEON CORE TECH. ALL SYSTEMS OPERATIONAL.</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-white/40">Privacy_Protocol</a>
            <a href="#" className="hover:text-white/40">Terms_Of_Engagement</a>
            <a href="#" className="hover:text-white/40">Cookie_Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
