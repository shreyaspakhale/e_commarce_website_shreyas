import React, { useState } from 'react';
import { useApp } from '../AppContext';
import { motion } from 'motion/react';
import { 
  CreditCard, 
  Truck, 
  ShieldCheck, 
  ArrowLeft, 
  CheckCircle2,
  Lock,
  Zap,
  Activity,
  Cpu
} from 'lucide-react';

export const Checkout = () => {
  const { cart, setView } = useApp();
  const [step, setStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = () => {
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="max-w-xl mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          className="w-24 h-24 bg-neon-green rounded-none flex items-center justify-center mx-auto mb-10 shadow-[0_0_20px_rgba(0,255,0,0.4)]"
        >
          <CheckCircle2 className="w-12 h-12 text-black" />
        </motion.div>
        <h1 className="text-5xl font-display font-black mb-6 text-white uppercase italic tracking-tighter">Order Authorized</h1>
        <p className="text-white/50 mb-12 font-mono text-sm leading-relaxed">
          Transaction successful. Your high-performance gear is being provisioned for deployment. Expect a transmission confirmation shortly.
        </p>
        <button onClick={() => setView('home')} className="btn-primary px-12 py-5 uppercase tracking-widest text-xs">
          Return to Command Center
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <button 
        onClick={() => setView('shop')}
        className="flex items-center gap-3 text-white/50 hover:text-neon-green transition-all mb-16 font-mono text-xs uppercase tracking-widest group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" /> <span>Return to Arsenal</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Checkout Form */}
        <div className="lg:col-span-8 space-y-16">
          <div className="flex items-center gap-6 mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-4">
                <div className={`w-10 h-10 flex items-center justify-center text-xs font-mono font-bold transition-all ${
                  step >= s ? 'bg-neon-green text-black shadow-[0_0_15px_rgba(0,255,0,0.4)]' : 'bg-white/5 text-white/30 border border-white/5'
                }`}>
                  <span>{s}</span>
                </div>
                <span className={`text-[10px] font-mono font-bold uppercase tracking-[0.2em] transition-all ${
                  step >= s ? 'text-white' : 'text-white/20'
                }`}>
                  {s === 1 ? 'Logistics' : s === 2 ? 'Transaction' : 'Finalize'}
                </span>
                {s < 3 && <div className="w-12 h-px bg-white/10" />}
              </div>
            ))}
          </div>

          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
              <h2 className="text-3xl font-display font-black flex items-center gap-4 text-white uppercase italic tracking-tighter">
                <Truck className="w-8 h-8 text-neon-green" /> Logistics Protocol
              </h2>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono font-bold uppercase text-neon-green tracking-widest">Operator_First_Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-pitch-black border border-white/10 rounded-none text-sm font-mono text-white focus:outline-none focus:border-neon-green/50" placeholder="ENTER_DATA" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono font-bold uppercase text-neon-green tracking-widest">Operator_Last_Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-pitch-black border border-white/10 rounded-none text-sm font-mono text-white focus:outline-none focus:border-neon-green/50" placeholder="ENTER_DATA" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-mono font-bold uppercase text-neon-green tracking-widest">Deployment_Address</label>
                <input type="text" className="w-full px-5 py-4 bg-pitch-black border border-white/10 rounded-none text-sm font-mono text-white focus:outline-none focus:border-neon-green/50" placeholder="STREET_LOCATION" />
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono font-bold uppercase text-neon-green tracking-widest">Sector_City</label>
                  <input type="text" className="w-full px-5 py-4 bg-pitch-black border border-white/10 rounded-none text-sm font-mono text-white focus:outline-none focus:border-neon-green/50" placeholder="CITY" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono font-bold uppercase text-neon-green tracking-widest">Region_State</label>
                  <input type="text" className="w-full px-5 py-4 bg-pitch-black border border-white/10 rounded-none text-sm font-mono text-white focus:outline-none focus:border-neon-green/50" placeholder="STATE" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono font-bold uppercase text-neon-green tracking-widest">Postal_Code</label>
                  <input type="text" className="w-full px-5 py-4 bg-pitch-black border border-white/10 rounded-none text-sm font-mono text-white focus:outline-none focus:border-neon-green/50" placeholder="ZIP" />
                </div>
              </div>
              <button onClick={() => setStep(2)} className="btn-primary w-full py-5 text-sm uppercase tracking-widest">Proceed to Transaction</button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
              <h2 className="text-3xl font-display font-black flex items-center gap-4 text-white uppercase italic tracking-tighter">
                <CreditCard className="w-8 h-8 text-neon-green" /> Transaction Details
              </h2>
              <div className="bg-neon-green/10 p-6 border border-neon-green/20 flex items-center gap-4 mb-10">
                <Lock className="w-5 h-5 text-neon-green" />
                <p className="text-xs text-neon-green font-mono font-bold uppercase tracking-widest">All transmissions are encrypted via 256-bit protocol.</p>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-mono font-bold uppercase text-neon-green tracking-widest">Card_Identifier</label>
                <input type="text" placeholder="0000 0000 0000 0000" className="w-full px-5 py-4 bg-pitch-black border border-white/10 rounded-none text-sm font-mono text-white focus:outline-none focus:border-neon-green/50" />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-mono font-bold uppercase text-neon-green tracking-widest">Expiry_Data</label>
                  <input type="text" placeholder="MM/YY" className="w-full px-5 py-4 bg-pitch-black border border-white/10 rounded-none text-sm font-mono text-white focus:outline-none focus:border-neon-green/50" />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-mono font-bold uppercase text-neon-green tracking-widest">Security_Key</label>
                  <input type="text" placeholder="123" className="w-full px-5 py-4 bg-pitch-black border border-white/10 rounded-none text-sm font-mono text-white focus:outline-none focus:border-neon-green/50" />
                </div>
              </div>
              <div className="flex gap-6">
                <button onClick={() => setStep(1)} className="btn-secondary flex-1 py-5 text-sm uppercase tracking-widest">Previous</button>
                <button onClick={() => setStep(3)} className="btn-primary flex-1 py-5 text-sm uppercase tracking-widest">Review Order</button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-10">
              <h2 className="text-3xl font-display font-black flex items-center gap-4 text-white uppercase italic tracking-tighter">
                <ShieldCheck className="w-8 h-8 text-neon-green" /> Final Verification
              </h2>
              <div className="space-y-6">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-center py-6 border-b border-white/5">
                    <div className="flex items-center gap-6">
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-none object-cover border border-white/10" referrerPolicy="no-referrer" />
                      <div>
                        <p className="font-display font-bold text-white uppercase italic">{item.name}</p>
                        <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="font-mono font-bold text-neon-green">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="flex gap-6">
                <button onClick={() => setStep(2)} className="btn-secondary flex-1 py-5 text-sm uppercase tracking-widest">Previous</button>
                <button onClick={handlePlaceOrder} className="btn-primary flex-1 py-5 text-sm uppercase tracking-widest">Finalize Acquisition - ${total.toFixed(2)}</button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white/5 p-10 border border-white/10 sticky top-32 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-5 -mr-10 -mt-10">
              <Activity className="w-40 h-40 text-neon-green" />
            </div>
            <h3 className="text-2xl font-display font-black mb-10 text-white uppercase italic tracking-tighter">Summary</h3>
            <div className="space-y-6 mb-10 font-mono text-sm">
              <div className="flex justify-between text-white/60">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Logistics</span>
                <span className="text-neon-green font-bold tracking-widest">FREE_DEPLOY</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Estimated_Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="h-px bg-white/10 my-6" />
              <div className="flex justify-between text-2xl font-display font-black text-white italic uppercase tracking-tighter">
                <span>Total</span>
                <span className="text-neon-green shadow-[0_0_15px_rgba(0,255,0,0.2)]">${total.toFixed(2)}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[10px] font-mono font-bold text-neon-green uppercase tracking-widest">
                <Zap className="w-4 h-4" />
                <span>Priority processing enabled</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
