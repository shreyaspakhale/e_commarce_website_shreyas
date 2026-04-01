import React from 'react';
import { useApp } from '../AppContext';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRightLeft, Zap, Cpu, ShieldCheck, Activity } from 'lucide-react';

export const SpecComparison = () => {
  const { comparisonList, removeFromComparison } = useApp();

  if (comparisonList.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="bg-slate-grey/95 backdrop-blur-xl border border-neon-green/30 p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] pointer-events-auto"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="bg-neon-green p-2">
                <ArrowRightLeft className="w-4 h-4 text-black" />
              </div>
              <h3 className="font-display font-black text-white uppercase tracking-tight">Spec Comparison</h3>
              <span className="text-[10px] font-mono text-neon-green/60 uppercase tracking-widest">[{comparisonList.length}/2 Assets Loaded]</span>
            </div>
            {comparisonList.length === 2 && (
              <div className="text-[10px] font-mono text-neon-green animate-pulse uppercase tracking-widest">Analysis Complete</div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {comparisonList.map((product, idx) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative group"
                >
                  <button 
                    onClick={() => removeFromComparison(product.id)}
                    className="absolute -top-2 -right-2 z-10 p-1 bg-red-600 text-white rounded-none hover:bg-red-700 transition-colors"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  
                  <div className="flex gap-6 items-start bg-pitch-black/50 p-4 border border-white/5">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-20 h-20 object-cover border border-white/10"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-bold text-sm text-white truncate uppercase italic">{product.name}</h4>
                      <p className="text-neon-green font-mono font-bold text-xs mb-3">${product.price}</p>
                      
                      <div className="grid grid-cols-1 gap-2">
                        {product.specs.map((spec, i) => (
                          <div key={i} className="flex justify-between text-[9px] font-mono border-b border-white/5 pb-1">
                            <span className="text-white/40 uppercase">{spec.label}</span>
                            <span className="text-neon-green font-bold">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {comparisonList.length < 2 && (
              <div className="border border-dashed border-white/10 flex flex-col items-center justify-center p-8 bg-white/5">
                <div className="w-10 h-10 border border-white/10 flex items-center justify-center mb-3 opacity-20">
                  <Plus className="w-5 h-5 text-white" />
                </div>
                <p className="text-[9px] font-mono text-white/30 uppercase tracking-widest">Add another asset to compare</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Plus = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
  </svg>
);
