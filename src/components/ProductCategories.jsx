import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '../data/products';
import { 
  Package, 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  SlidersHorizontal,
  ExternalLink
} from 'lucide-react';

export default function ProductCategories({ onSelectProduct, onOpenQuote }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrandFilter, setSelectedBrandFilter] = useState('All');

  // Extract all unique brand names for quick filtering
  const allBrands = ['All', 'SKF', 'Siemens', 'Schneider Electric', 'SMC', 'Festo', '3M', 'Loctite', 'Karam', 'Stanley'];

  const filteredCategories = PRODUCT_CATEGORIES.filter((cat) => {
    const matchesQuery = 
      cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.popularItems.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesBrand = 
      selectedBrandFilter === 'All' || 
      cat.brandsAvailable.some(b => b.toLowerCase().includes(selectedBrandFilter.toLowerCase()));

    return matchesQuery && matchesBrand;
  });

  return (
    <section id="products" className="py-24 bg-brand-dark relative overflow-hidden">
      
      {/* Glow highlight background accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-widest"
            >
              <Package className="w-3.5 h-3.5" />
              <span>Comprehensive Product Portfolio</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
            >
              Industrial Equipment & <br />
              <span className="text-gradient-orange">MRO Product Categories</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-base"
            >
              Browse our 12 major industrial categories supplying high-performance components, tools, and consumables.
            </motion.p>
          </div>

          {/* Search & Filter Bar */}
          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1 sm:w-72">
              <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search categories or products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-orange transition-all"
              />
            </div>
          </div>
        </div>

        {/* Brand Filter Pill Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 shrink-0 mr-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-brand-orange" /> Filter Brand:
          </span>
          {allBrands.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrandFilter(brand)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium shrink-0 transition-all ${
                selectedBrandFilter === brand
                  ? 'bg-brand-orange text-white shadow-md shadow-brand-orange/30 font-semibold'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 p-8 glass-card rounded-2xl border border-white/10">
            <Package className="w-12 h-12 text-gray-500 mx-auto mb-3" />
            <h3 className="text-lg font-heading font-bold text-white">No Categories Found</h3>
            <p className="text-sm text-gray-400 mt-1">Try adjusting your search query or brand filter.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedBrandFilter('All'); }}
              className="mt-4 px-4 py-2 rounded-xl bg-brand-orange text-white text-xs font-semibold"
            >
              Reset Search Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredCategories.map((category, idx) => (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-brand-orange/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
                >
                  <div>
                    {/* Card Media Header */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-surface via-brand-dark-surface/40 to-transparent" />

                      {/* Top Item Count Tag */}
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass-dark border border-white/15 text-[11px] font-heading font-bold text-brand-orange shadow-lg">
                        {category.itemCount}
                      </div>

                      {/* Category Title & Tagline overlay */}
                      <div className="absolute bottom-4 left-5 right-5">
                        <span className="text-[10px] font-bold tracking-widest text-brand-orange uppercase">
                          {category.tagline}
                        </span>
                        <h3 className="font-heading font-bold text-xl text-white mt-0.5 group-hover:text-brand-orange transition-colors">
                          {category.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">
                        {category.description}
                      </p>

                      {/* Popular Product Items Chips */}
                      <div>
                        <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider mb-2">
                          Key Supply Line Items:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {category.popularItems.slice(0, 3).map((item, i) => (
                            <span
                              key={i}
                              className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5 font-medium"
                            >
                              {item}
                            </span>
                          ))}
                          {category.popularItems.length > 3 && (
                            <span className="text-xs px-2 py-1 rounded-md bg-brand-orange/10 text-brand-orange font-semibold">
                              +{category.popularItems.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Brands Available */}
                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
                        <span>Brands:</span>
                        <span className="font-semibold text-gray-200">
                          {category.brandsAvailable.join(', ')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions Footer */}
                  <div className="p-6 pt-0 flex items-center gap-3">
                    <button
                      onClick={() => onSelectProduct(category)}
                      className="flex-1 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white font-heading font-semibold text-xs border border-white/10 hover:border-brand-orange/40 transition-all flex items-center justify-center gap-1.5 group/btn"
                    >
                      <span>Explore Specs</span>
                      <ExternalLink className="w-3.5 h-3.5 text-brand-orange group-hover/btn:scale-110 transition-transform" />
                    </button>

                    <button
                      onClick={onOpenQuote}
                      className="py-3 px-4 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-heading font-semibold text-xs shadow-md shadow-brand-orange/20 transition-all flex items-center justify-center gap-1 shrink-0"
                      title="Request Quote for category"
                    >
                      <span>Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

      </div>
    </section>
  );
}
