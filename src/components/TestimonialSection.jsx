import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../data/testimonials';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  MessageSquareQuote
} from 'lucide-react';

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-widest"
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Verified Corporate Endorsements</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Trusted by Procurement Managers <br />
            <span className="text-gradient-orange">& Plant Engineers Nationwide</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base"
          >
            Read how ANNAI ENTERPRISES delivers genuine OEM products, fast emergency supplies, and cost savings.
          </motion.p>
        </div>

        {/* Featured Testimonial Spotlight Slider */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 sm:p-12 rounded-3xl border border-brand-orange/30 shadow-2xl relative overflow-hidden"
          >
            <Quote className="w-16 h-16 text-brand-orange/15 absolute top-6 right-6 pointer-events-none" />

            <div className="flex items-center gap-1 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed font-medium italic mb-8">
              "{current.comment}"
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-heading font-bold text-lg text-white">
                    {current.clientName}
                  </h3>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified Buyer
                  </span>
                </div>
                <div className="text-xs text-gray-400 mt-0.5">
                  {current.designation} &bull; <span className="text-gray-300 font-semibold">{current.company}</span> ({current.city})
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-xl bg-white/5 hover:bg-brand-orange text-gray-300 hover:text-white transition-all border border-white/10"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-xl bg-white/5 hover:bg-brand-orange text-gray-300 hover:text-white transition-all border border-white/10"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Small Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className={`p-6 rounded-2xl border transition-all ${
                t.id === current.id
                  ? 'glass-card border-brand-orange/40 bg-brand-orange/5'
                  : 'bg-white/[0.02] border-white/5 opacity-80 hover:opacity-100'
              }`}
            >
              <div className="flex items-center gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-gray-300 line-clamp-3 mb-4 italic">
                "{t.comment}"
              </p>
              <div className="text-xs font-bold text-white">{t.clientName}</div>
              <div className="text-[11px] text-gray-400">{t.company}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
