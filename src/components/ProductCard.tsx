import React from 'react';
import { Product } from '../types';
import { useApp } from '../AppContext';
import { motion } from 'motion/react';
import { ShoppingCart, ArrowUpRight, Zap, Target } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { setView, setSelectedProduct, addToCart, addToComparison, comparisonList } = useApp();
  const isCompared = comparisonList.some(p => p.id === product.id);

  const handleDetails = () => {
    setSelectedProduct(product);
    setView('product');
    window.scrollTo(0, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="tech-card group hover:shadow-[0_0_30px_rgba(0,255,0,0.15)]"
    >
      <div className="relative aspect-square overflow-hidden bg-pitch-black">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.inStock ? (
            <div className="bg-neon-green/90 backdrop-blur-sm px-3 py-1 rounded-none flex items-center gap-1.5 border border-white/10 shadow-[0_0_10px_rgba(0,255,0,0.3)]">
              <Zap className="w-3 h-3 text-black" />
              <span className="text-[10px] font-mono font-bold text-black uppercase tracking-wider">In Stock</span>
            </div>
          ) : (
            <div className="bg-red-600/90 backdrop-blur-sm px-3 py-1 rounded-none flex items-center gap-1.5 border border-white/10">
              <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">Out of Stock</span>
            </div>
          )}
        </div>
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={handleDetails}
            className="p-2 bg-slate-grey/90 backdrop-blur-sm rounded-none opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-neon-green hover:text-black"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => addToComparison(product)}
            className={`p-2 backdrop-blur-sm rounded-none opacity-0 group-hover:opacity-100 transition-all duration-300 ${
              isCompared ? 'bg-neon-green text-black' : 'bg-slate-grey/90 text-white hover:bg-neon-green hover:text-black'
            }`}
            title="Add to Compare"
          >
            <Target className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display font-black text-lg text-white group-hover:text-neon-green transition-colors uppercase italic tracking-tight">
            {product.name}
          </h3>
          <span className="font-mono font-bold text-neon-green">${product.price}</span>
        </div>
        <p className="text-xs text-white/50 line-clamp-2 mb-6 h-8 font-mono">
          {product.description}
        </p>
        
        <div className="grid grid-cols-2 gap-2 mb-6">
          {product.specs.slice(0, 2).map((spec, idx) => (
            <div key={idx} className="bg-white/5 p-2 border border-white/5">
              <span className="block text-[8px] uppercase text-neon-green font-mono font-bold">{spec.label}</span>
              <span className="block text-[10px] text-white font-bold">{spec.value}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleDetails}
            className="flex-1 btn-secondary py-2 text-[10px]"
          >
            Details
          </button>
          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="p-3 bg-neon-green text-black hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] transition-all active:scale-90 disabled:opacity-50 disabled:hover:shadow-none"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
