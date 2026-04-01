import React from 'react';
import { ShoppingBag, Menu, X, Cpu, Search, Zap } from 'lucide-react';
import { useApp } from '../AppContext';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const { setView, cart, setIsCartOpen, view } = useApp();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-pitch-black/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => setView('home')}
          >
            <div className="bg-neon-green p-2 rounded-none transition-all group-hover:shadow-[0_0_15px_rgba(0,255,0,0.5)]">
              <Cpu className="w-6 h-6 text-black" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-display font-black tracking-tighter text-white italic">NEON CORE</span>
              <span className="text-[10px] font-mono text-neon-green tracking-[0.3em] uppercase">Tech Gear</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['home', 'shop'].map((item) => (
              <button
                key={item}
                onClick={() => setView(item as any)}
                className={`text-xs font-mono uppercase tracking-widest transition-all relative group ${
                  view === item ? 'text-neon-green' : 'text-white/60 hover:text-neon-green'
                }`}
              >
                {item}
                <span className={`absolute -bottom-2 left-0 h-[2px] bg-neon-green transition-all duration-300 ${
                  view === item ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="p-2 text-white/60 hover:text-neon-green transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="relative p-2 text-white/60 hover:text-neon-green transition-colors group"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingBag className="w-5 h-5" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0, y: 10 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0, y: 10 }}
                    className="absolute -top-1 -right-1 bg-neon-green text-black text-[10px] font-bold w-5 h-5 rounded-none flex items-center justify-center shadow-[0_0_10px_rgba(0,255,0,0.5)]"
                  >
                    <span>{cartCount}</span>
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
