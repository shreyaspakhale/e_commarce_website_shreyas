/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './AppContext';
import { Navbar } from './components/Navbar';
import { CartDrawer } from './components/CartDrawer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { Checkout } from './pages/Checkout';
import { SpecComparison } from './components/SpecComparison';
import { Footer } from './components/Footer';
import { motion, AnimatePresence } from 'motion/react';

const AppContent = () => {
  const { view } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-pitch-black text-white selection:bg-neon-green selection:text-black">
      <Navbar />
      <CartDrawer />
      <SpecComparison />
      
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {view === 'home' && <Home />}
            {view === 'shop' && <Shop />}
            {view === 'product' && <ProductDetail />}
            {view === 'checkout' && <Checkout />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
