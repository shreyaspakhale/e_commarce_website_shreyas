import React from 'react';
import { X, Plus, Minus, Trash2, ArrowRight, ShoppingBag, Zap, Cpu } from 'lucide-react';
import { useApp } from '../AppContext';
import { motion, AnimatePresence } from 'motion/react';

export const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, setView } = useApp();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-pitch-black/80 backdrop-blur-md z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-slate-grey z-[70] shadow-2xl flex flex-col border-l border-white/5"
          >
            <div className="p-8 border-b border-white/5 flex justify-between items-center bg-pitch-black/50">
              <div className="flex items-center gap-3">
                <div className="bg-neon-green p-1.5 shadow-[0_0_10px_rgba(0,255,0,0.3)]">
                  <Cpu className="w-4 h-4 text-black" />
                </div>
                <h2 className="text-xl font-display font-black text-white uppercase italic tracking-tighter">Tactical_Cart</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)} 
                className="p-2 text-white/50 hover:text-neon-green transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-white/20 space-y-6">
                  <ShoppingBag className="w-16 h-16 opacity-10" />
                  <p className="font-mono text-xs uppercase tracking-widest">Inventory_Empty</p>
                  <button 
                    onClick={() => { setIsCartOpen(false); setView('shop'); }}
                    className="btn-secondary text-[10px] px-8 py-3 uppercase tracking-[0.2em]"
                  >
                    Initialize_Arsenal
                  </button>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="w-24 h-24 bg-white/5 border border-white/10 rounded-none overflow-hidden flex-shrink-0 relative">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-neon-green/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                      <div>
                        <h3 className="font-display font-bold text-white uppercase italic tracking-tight truncate">{item.name}</h3>
                        <p className="text-sm text-neon-green font-mono font-bold mt-1">${item.price}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center bg-white/5 border border-white/10">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1.5 text-white/50 hover:text-neon-green transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-[10px] font-mono font-bold w-8 text-center text-white">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1.5 text-white/50 hover:text-neon-green transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-white/20 hover:text-red-600 transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-8 border-t border-white/5 bg-pitch-black/80 backdrop-blur-xl">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-[0.3em]">Total_Value</span>
                  <span className="text-2xl font-display font-black text-neon-green italic shadow-[0_0_15px_rgba(0,255,0,0.2)]">${total.toFixed(2)}</span>
                </div>
                <button 
                  onClick={() => { setView('checkout'); setIsCartOpen(false); }}
                  className="w-full btn-primary py-5 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-xs"
                >
                  Authorize_Transaction <ArrowRight className="w-4 h-4" />
                </button>
                <div className="flex items-center justify-center gap-2 mt-6 text-[9px] font-mono font-bold text-neon-green uppercase tracking-widest opacity-50">
                  <Zap className="w-3 h-3" />
                  <span>Secure_Encrypted_Transmission</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
