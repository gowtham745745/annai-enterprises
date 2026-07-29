import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FEATURED_BRANDS } from '../data/brands';
import { 
  Award, 
  Search, 
  CheckCircle2, 
  Globe, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function BrandShowcase({ onOpenQuote }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchBrand, setSearchBrand] = useState('');

  const brandCategories = ['All', 'Bearings', 'Automation', 'Electrical', 'Pneumatics', 'Safety', 'Tools', 'Adhesives'];

  const filteredBrands = FEATURED_BRANDS.filter((brand) => {
    const matchesSearch = brand.name.toLowerCase().includes(searchBrand.toLowerCase()) ||
                          brand.category.toLowerCase().includes(searchBrand.toLowerCase());
    const matchesCat = selectedCategory === 'All' || brand.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCat;
  });

  return (
    <section id="brands" className="py-24 bg-gradient-to-b from-brand-dark-surface via-brand-dark to-brand-dark relative overflow-hidden border-t border-b border-brand-dark-border">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-widest"
          >
            <Award className="w-3.5 h-3.5" />
            <span>Authorized OEM Distribution</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            World-Leading Industrial <br />
            <span className="text-gradient-orange">Brands & Manufacturers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base"
          >
            We partner directly with top global OEMs to supply 100% factory genuine products with complete test certificates.
          </motion.p>
        </div>

        {/* Continuous Infinite Logo Ticker Tape */}
        <div className="mb-16 py-6 bg-white/[0.02] border-y border-white/10 rounded-2xl overflow-hidden relative">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap">
            {FEATURED_BRANDS.concat(FEATURED_BRANDS).map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/5 shrink-0 hover:border-brand-orange/40 transition-all cursor-default"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-brand-orange" />
                <span className="font-heading font-extrabold text-xl text-gray-200 tracking-wider">
                  {b.logoText}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-gray-400 font-semibold">
                  {b.country}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {brandCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-heading font-semibold transition-all shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/25'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search brands..."
              value={searchBrand}
              onChange={(e) => setSearchBrand(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 text-xs focus:outline-none focus:border-brand-orange transition-all"
            />
          </div>

        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBrands.map((brand, idx) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-brand-orange/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="font-heading font-black text-2xl text-white tracking-widest group-hover:text-brand-orange transition-colors">
                    {brand.logoText}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
                    {brand.badge}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                  <Globe className="w-3.5 h-3.5 text-gray-500" />
                  <span>{brand.category} &bull; {brand.country}</span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed mb-4">
                  {brand.description}
                </p>

                {/* Popular For */}
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Key Supply Products:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {brand.popularFor.map((item, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Genuine OEM
                </span>

                <button
                  onClick={onOpenQuote}
                  className="text-xs font-heading font-semibold text-brand-orange hover:text-amber-400 flex items-center gap-1 transition-colors"
                >
                  <span>Inquire Availability</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
