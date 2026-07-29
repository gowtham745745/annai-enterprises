import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Package, Award, ArrowRight } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/products';
import { FEATURED_BRANDS } from '../data/brands';

export default function SearchModal({ isOpen, onClose, onSelectProduct, onOpenQuote }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const matchedCategories = PRODUCT_CATEGORIES.filter((cat) =>
    cat.title.toLowerCase().includes(query.toLowerCase()) ||
    cat.description.toLowerCase().includes(query.toLowerCase()) ||
    cat.popularItems.some((item) => item.toLowerCase().includes(query.toLowerCase()))
  );

  const matchedBrands = FEATURED_BRANDS.filter((brand) =>
    brand.name.toLowerCase().includes(query.toLowerCase()) ||
    brand.category.toLowerCase().includes(query.toLowerCase()) ||
    brand.popularFor.some((item) => item.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-20 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-2xl w-full bg-brand-dark-surface rounded-3xl border border-brand-orange/30 shadow-2xl overflow-hidden"
        >
          {/* Search Input Bar */}
          <div className="p-4 border-b border-white/10 flex items-center gap-3">
            <Search className="w-5 h-5 text-brand-orange ml-2" />
            <input
              type="text"
              autoFocus
              placeholder="Search bearings, PLCs, pneumatics, SKF, Siemens, 3M..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-white text-base placeholder-gray-500 focus:outline-none"
            />
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Results List */}
          <div className="max-h-96 overflow-y-auto p-4 space-y-6">
            
            {/* Categories Results */}
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Package className="w-3.5 h-3.5 text-brand-orange" /> Product Categories ({matchedCategories.length})
              </div>
              
              <div className="space-y-2">
                {matchedCategories.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => {
                      onClose();
                      onSelectProduct(cat);
                    }}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-orange/40 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <img src={cat.image} alt={cat.title} className="w-10 h-10 rounded-lg object-cover" />
                      <div>
                        <div className="font-heading font-bold text-sm text-white group-hover:text-brand-orange transition-colors">
                          {cat.title}
                        </div>
                        <div className="text-xs text-gray-400">{cat.tagline}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>

            {/* Brands Results */}
            <div>
              <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-brand-orange" /> Featured Brands ({matchedBrands.length})
              </div>

              <div className="grid grid-cols-2 gap-2">
                {matchedBrands.map((b) => (
                  <div
                    key={b.name}
                    onClick={() => {
                      onClose();
                      onOpenQuote();
                    }}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-orange/40 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <div className="font-heading font-extrabold text-sm text-white group-hover:text-brand-orange">
                        {b.name}
                      </div>
                      <div className="text-[10px] text-gray-400">{b.category}</div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-brand-orange/20 text-brand-orange font-semibold">
                      {b.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="p-3 bg-brand-dark border-t border-white/5 text-center text-xs text-gray-500">
            Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-gray-300 font-mono">ESC</kbd> to close
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
