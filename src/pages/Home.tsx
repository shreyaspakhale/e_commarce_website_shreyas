import React from 'react';
import { motion } from 'motion/react';
import { useApp } from '../AppContext';
import { ArrowRight, Cpu, Zap, ShieldCheck, Globe, Activity, Terminal, Monitor, MousePointer2 } from 'lucide-react';
import { PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';

export const Home = () => {
  const { setView } = useApp();
  const featured = PRODUCTS.slice(0, 3);

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-pitch-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
            alt="High-end GPU"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-pitch-black via-pitch-black/60 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.05),transparent_50%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-neon-green/10 border border-neon-green/20 text-neon-green text-[10px] font-mono font-bold uppercase tracking-[0.3em] mb-10 shadow-[0_0_15px_rgba(0,255,0,0.1)]">
              <Activity className="w-3 h-3" /> <span>System Status: Optimal</span>
            </div>
            <h1 className="text-7xl md:text-[10rem] font-display font-black leading-[0.8] mb-10 text-white italic uppercase tracking-tighter">
              NEON<br />
              <span className="text-neon-green shadow-[0_0_20px_rgba(0,255,0,0.3)]">CORE.</span>
            </h1>
            <p className="text-lg text-white/50 mb-12 max-w-lg leading-relaxed font-mono">
              High-performance gaming and professional tech gear. Engineered for those who demand absolute precision and cutting-edge aesthetics.
            </p>
            <div className="flex flex-wrap gap-6">
              <button onClick={() => setView('shop')} className="btn-primary flex items-center gap-3 px-12 py-5 text-sm uppercase tracking-widest">
                Access Arsenal <ArrowRight className="w-5 h-5" />
              </button>
              <button className="btn-secondary px-12 py-5 text-sm uppercase tracking-widest">
                Technical Specs
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-16 right-12 hidden lg:flex flex-col gap-12">
          {[
            { label: 'Response Time', value: '0.1ms' },
            { label: 'Refresh Rate', value: '540Hz' },
            { label: 'Core Clock', value: '3.2GHz' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-right border-r-2 border-neon-green pr-6"
            >
              <div className="text-4xl font-display font-black text-white italic">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-neon-green font-mono font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bento Grid Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16 border-b border-white/5 pb-8">
          <div>
            <h2 className="text-5xl font-display font-black mb-4 text-white uppercase italic tracking-tighter">Categories</h2>
            <p className="text-white/40 font-mono text-sm">Select your tactical advantage.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-[800px]">
          <div className="md:col-span-2 md:row-span-2 bento-item group">
            <img src="https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="Graphics" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
              <h3 className="text-4xl font-display font-black text-white mb-4 italic">Graphics</h3>
              <button onClick={() => setView('shop')} className="text-neon-green font-mono text-xs font-bold flex items-center gap-2 hover:gap-4 transition-all">
                EXPLORE_DATABASE <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="md:col-span-2 bento-item group">
            <img src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="Monitors" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
              <h3 className="text-4xl font-display font-black text-white mb-4 italic">Monitors</h3>
              <button onClick={() => setView('shop')} className="text-neon-green font-mono text-xs font-bold flex items-center gap-2 hover:gap-4 transition-all">
                EXPLORE_DATABASE <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="bento-item group">
            <img src="https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="Keyboards" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-display font-black text-white mb-2 italic">Keyboards</h3>
              <button onClick={() => setView('shop')} className="text-neon-green font-mono text-[10px] font-bold flex items-center gap-2 hover:gap-4 transition-all">
                EXPLORE <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
          <div className="bento-item group">
            <img src="https://images.unsplash.com/photo-1625842268584-8f3bf9ff16a0?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="Cabinets" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-display font-black text-white mb-2 italic">Cabinets</h3>
              <button onClick={() => setView('shop')} className="text-neon-green font-mono text-[10px] font-bold flex items-center gap-2 hover:gap-4 transition-all">
                EXPLORE <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16 border-b border-white/5 pb-8">
          <div>
            <h2 className="text-5xl font-display font-black mb-4 text-white uppercase italic tracking-tighter">Elite Arsenal</h2>
            <p className="text-white/40 font-mono text-sm">Our most advanced high-performance hardware.</p>
          </div>
          <button onClick={() => setView('shop')} className="text-neon-green font-mono font-bold flex items-center gap-3 hover:gap-5 transition-all uppercase tracking-widest text-xs">
            View Full Catalog <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Zap, title: 'Ultra Low Latency', desc: 'Proprietary wireless tech with sub-1ms response times for competitive edge.' },
            { icon: ShieldCheck, title: 'Military Grade', desc: 'Built with premium materials and rigorous testing for maximum durability.' },
            { icon: Terminal, title: 'Pro Customization', desc: 'Deep software integration for macros, lighting, and performance tuning.' },
            { icon: Activity, title: 'Real-time Monitoring', desc: 'Built-in sensors and displays for critical system telemetry.' }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-slate-grey border border-white/5 hover:border-neon-green/30 transition-all group"
            >
              <div className="w-14 h-14 bg-pitch-black border border-white/10 flex items-center justify-center mb-6 group-hover:shadow-[0_0_15px_rgba(0,255,0,0.3)] transition-all">
                <feature.icon className="w-6 h-6 text-neon-green" />
              </div>
              <h3 className="text-xl font-display font-bold mb-4 text-white uppercase italic tracking-tight">{feature.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed font-mono">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Smart Recommendation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neon-green p-12 md:p-24 relative overflow-hidden text-black">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-5xl md:text-8xl font-display font-black mb-10 leading-[0.85] uppercase italic tracking-tighter">
              UPGRADE TO<br />
              <span className="text-pitch-black">GOD MODE.</span>
            </h2>
            <p className="text-black/60 mb-12 text-xl font-mono max-w-md font-bold">
              Join the elite tier of gamers and professionals. Experience hardware without limits.
            </p>
            <button onClick={() => setView('shop')} className="bg-pitch-black text-white px-12 py-5 font-mono font-bold hover:bg-slate-grey transition-all uppercase tracking-[0.2em] text-sm">
              Initialize Upgrade
            </button>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
             <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              alt="Tech background"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
