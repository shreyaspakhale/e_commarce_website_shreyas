import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../data';
import { ProductCard } from '../components/ProductCard';
import { SlidersHorizontal, Search, Terminal, Cpu } from 'lucide-react';

export const Shop = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['all', 'mouse', 'monitor', 'cabinet', 'graphics', 'keyboard'];

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-10">
          <div className="bg-slate-grey p-8 border border-white/5">
            <div className="flex items-center gap-3 mb-8 text-neon-green">
              <SlidersHorizontal className="w-5 h-5" />
              <h3 className="font-mono font-bold uppercase tracking-widest text-xs">Tactical_Filters</h3>
            </div>
            
            <div className="space-y-10">
              <div>
                <h4 className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-6">Category_Selection</h4>
                <div className="flex flex-col gap-3">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`text-left px-4 py-2 text-xs font-mono transition-all border ${
                        activeCategory === cat 
                          ? 'bg-neon-green text-black border-neon-green font-bold' 
                          : 'text-white/60 border-white/5 hover:border-neon-green/30 hover:text-white'
                      }`}
                    >
                      {cat.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] mb-6">Smart_Features</h4>
                <div className="space-y-4">
                  {['RGB Sync', 'Mechanical Switches', 'Form Factor'].map((filter) => (
                    <label key={filter} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-4 h-4 border border-white/20 group-hover:border-neon-green transition-colors flex items-center justify-center">
                        <div className="w-2 h-2 bg-neon-green opacity-0 group-hover:opacity-20 transition-opacity" />
                      </div>
                      <span className="text-xs font-mono text-white/60 group-hover:text-white transition-colors">{filter}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="flex-1 space-y-12">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-slate-grey p-6 border border-white/5">
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 group-focus-within:text-neon-green transition-colors" />
              <input
                type="text"
                placeholder="SEARCH_DATABASE..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-pitch-black border border-white/10 pl-12 pr-6 py-3 text-xs font-mono text-white focus:outline-none focus:border-neon-green/50 transition-all"
              />
            </div>
            <div className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
              Showing {filteredProducts.length} Assets Found
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: "circOut" }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-32 border border-dashed border-white/10 bg-white/5">
              <Terminal className="w-12 h-12 text-neon-green/20 mx-auto mb-6" />
              <p className="text-white/40 font-mono uppercase tracking-widest">No matching assets found in database.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
