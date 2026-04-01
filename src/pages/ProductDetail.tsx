import React, { useState } from 'react';
import { useApp } from '../AppContext';
import { PRODUCTS, REVIEWS } from '../data';
import { StarRating } from '../components/StarRating';
import { ProductCard } from '../components/ProductCard';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Zap,
  Plus,
  Minus,
  MessageSquarePlus,
  Activity,
  Cpu,
  Terminal
} from 'lucide-react';

export const ProductDetail = () => {
  const { selectedProduct, setView, addToCart } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [showReviewForm, setShowReviewForm] = useState(false);

  if (!selectedProduct) {
    setView('shop');
    return null;
  }

  const productReviews = REVIEWS.filter(r => r.productId === selectedProduct.id);
  const avgRating = productReviews.reduce((acc, r) => acc + r.rating, 0) / productReviews.length || 0;

  const relatedProducts = PRODUCTS.filter(p => selectedProduct.relatedIds.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <button 
        onClick={() => setView('shop')}
        className="flex items-center gap-3 text-white/50 hover:text-neon-green transition-all mb-16 group font-mono text-xs uppercase tracking-widest"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-2" /> 
        <span>Return to Arsenal</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
        {/* Product Image */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="aspect-square rounded-none overflow-hidden bg-pitch-black border border-white/5 relative group"
        >
          <img 
            src={selectedProduct.image} 
            alt={selectedProduct.name} 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-pitch-black/60 to-transparent pointer-events-none" />
          <div className="absolute top-6 left-6 bg-neon-green px-4 py-1 shadow-[0_0_15px_rgba(0,255,0,0.4)]">
            <span className="text-[10px] font-mono font-bold text-black uppercase tracking-widest">Elite Grade</span>
          </div>
        </motion.div>

        {/* Product Info */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <div className="flex items-center gap-3 mb-6">
            <StarRating rating={avgRating} />
            <span className="text-xs font-mono text-white/40 tracking-widest">[{productReviews.length} LOGS]</span>
          </div>
          
          <h1 className="text-6xl font-display font-black mb-4 text-white uppercase italic tracking-tighter">{selectedProduct.name}</h1>
          <p className="text-4xl font-mono font-bold text-neon-green mb-10 shadow-[0_0_15px_rgba(0,255,0,0.2)] inline-block">${selectedProduct.price}</p>
          
          <p className="text-white/60 text-lg leading-relaxed mb-12 font-mono border-l-2 border-neon-green pl-6 italic">
            {selectedProduct.description}
          </p>

          <div className="grid grid-cols-2 gap-6 mb-12">
            {selectedProduct.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-xs text-white/80 font-mono">
                <Zap className="w-3 h-3 text-neon-green" />
                {feature}
              </div>
            ))}
          </div>

          <div className="bg-white/5 p-8 mb-12 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 -mr-8 -mt-8">
              <Activity className="w-32 h-32 text-neon-green" />
            </div>
            <div className="flex items-center gap-3 mb-8">
              <Cpu className="w-5 h-5 text-neon-green" />
              <h3 className="font-mono font-bold text-neon-green uppercase tracking-widest">Technical Specifications</h3>
            </div>
            <div className="grid grid-cols-2 gap-y-8 gap-x-12">
              {selectedProduct.specs.map((spec, idx) => (
                <div key={idx}>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neon-green font-mono font-bold mb-2">{spec.label}</p>
                  <p className="text-xl font-display font-bold text-white italic">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-6 mb-16">
            <div className="flex items-center bg-white/5 border border-white/10 px-6">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 text-white/60 hover:text-neon-green">
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-12 text-center font-mono font-bold text-white">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-2 text-white/60 hover:text-neon-green">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <button 
              onClick={() => addToCart(selectedProduct)}
              className="flex-1 btn-primary flex items-center justify-center gap-3 text-sm uppercase tracking-widest"
            >
              <ShoppingBag className="w-5 h-5" /> <span>Initialize Acquisition</span>
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10">
            {[
              { icon: Truck, label: 'Global Deployment' },
              { icon: ShieldCheck, label: 'Lifetime Warranty' },
              { icon: RotateCcw, label: '30 Day Recalibration' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-3 text-center">
                <item.icon className="w-5 h-5 text-neon-green" />
                <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-white/40">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Frequently Bought Together */}
      <section className="mb-32">
        <div className="flex items-center gap-4 mb-16 border-b border-white/10 pb-8">
          <div className="w-10 h-10 bg-neon-green/20 flex items-center justify-center">
            <Plus className="w-5 h-5 text-neon-green" />
          </div>
          <h2 className="text-4xl font-display font-black text-white uppercase italic tracking-tighter">Combat Synergy</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {relatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section>
        <div className="flex justify-between items-center mb-16 border-b border-white/10 pb-8">
          <h2 className="text-4xl font-display font-black text-white uppercase italic tracking-tighter">Field Reports</h2>
          <button 
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="btn-secondary text-xs flex items-center gap-3 px-8 py-3"
          >
            <MessageSquarePlus className="w-4 h-4" /> <span>Submit Intel</span>
          </button>
        </div>

        {showReviewForm && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 p-10 border border-white/10 mb-20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 opacity-5">
              <Terminal className="w-64 h-64 text-neon-green" />
            </div>
            <h3 className="text-2xl font-display font-bold mb-10 text-white uppercase italic tracking-tighter">Transmission Initialization</h3>
            <div className="space-y-8 relative z-10">
              <div>
                <label className="block text-[10px] font-mono font-bold text-neon-green uppercase tracking-widest mb-4">Rating_Scale</label>
                <StarRating rating={5} interactive size={28} />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-mono font-bold text-neon-green uppercase tracking-widest mb-3">Operator_Name</label>
                  <input type="text" className="w-full px-5 py-4 bg-pitch-black border border-white/10 rounded-none text-sm font-mono text-white focus:outline-none focus:border-neon-green/50" placeholder="IDENTIFY_YOURSELF" />
                </div>
                <div>
                  <label className="block text-[10px] font-mono font-bold text-neon-green uppercase tracking-widest mb-3">Comm_Link</label>
                  <input type="email" className="w-full px-5 py-4 bg-pitch-black border border-white/10 rounded-none text-sm font-mono text-white focus:outline-none focus:border-neon-green/50" placeholder="EMAIL@DOMAIN.COM" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-mono font-bold text-neon-green uppercase tracking-widest mb-3">Transmission_Data</label>
                <textarea rows={4} className="w-full px-5 py-4 bg-pitch-black border border-white/10 rounded-none text-sm font-mono text-white focus:outline-none focus:border-neon-green/50" placeholder="ENTER_FIELD_OBSERVATIONS..." />
              </div>
              <button className="btn-primary px-12 py-4 text-sm uppercase tracking-widest">Broadcast Intel</button>
            </div>
          </motion.div>
        )}

        <div className="space-y-10">
          {productReviews.length === 0 ? (
            <p className="text-white/40 italic font-mono text-center py-20 border border-dashed border-white/10">No field reports available for this asset.</p>
          ) : (
            productReviews.map(review => (
              <div key={review.id} className="bg-white/5 p-10 border border-white/5 hover:border-white/10 transition-all">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="font-display font-bold text-xl text-white uppercase italic tracking-tighter">{review.userName}</h4>
                    <div className="mt-2">
                      <StarRating rating={review.rating} size={14} />
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">{review.date}</span>
                </div>
                <p className="text-white/60 leading-relaxed font-mono text-sm italic border-l border-neon-green pl-6">{review.comment}</p>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
};
