import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ShieldCheck, ArrowRight, FileText, Layers, Award } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onOpenQuote }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-3xl w-full bg-brand-dark-surface rounded-3xl border border-brand-orange/30 shadow-2xl overflow-hidden my-8"
        >
          {/* Header Banner */}
          <div className="relative h-64 overflow-hidden">
            <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark-surface via-brand-dark-surface/60 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:text-brand-orange transition-colors border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest px-3 py-1 rounded-full bg-black/60 border border-brand-orange/30">
                {product.tagline}
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-2">
                {product.title}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6">
            
            <p className="text-sm text-gray-300 leading-relaxed">
              {product.description}
            </p>

            {/* Specifications Grid */}
            <div>
              <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-orange" /> Key Technical Specifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {product.specifications.map((spec, i) => (
                  <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[11px] text-gray-400 font-semibold">{spec.label}</div>
                    <div className="text-xs text-white font-bold mt-0.5">{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Items */}
            <div>
              <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-brand-orange" /> Standard Supply Lines
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.popularItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-300 p-2 rounded-lg bg-white/5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Brands Authorized */}
            <div className="p-4 rounded-2xl bg-brand-dark border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Available Brands:
                </div>
                <div className="font-heading font-bold text-white text-base mt-0.5">
                  {product.brandsAvailable.join(' • ')}
                </div>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenQuote(product.title);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-brand-orange to-amber-600 font-heading font-bold text-white shadow-lg text-xs hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                <span>Request Quote For Category</span>
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
