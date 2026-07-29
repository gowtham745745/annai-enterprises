import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/services';
import { 
  Truck, 
  ShoppingBag, 
  Cpu, 
  FileCheck, 
  Wrench, 
  HardHat, 
  Lightbulb, 
  Headphones,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export default function ServicesSection({ onOpenQuote }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Truck': return Truck;
      case 'ShoppingBag': return ShoppingBag;
      case 'Cpu': return Cpu;
      case 'FileCheck': return FileCheck;
      case 'Wrench': return Wrench;
      case 'HardHat': return HardHat;
      case 'Lightbulb': return Lightbulb;
      case 'Headphones': return Headphones;
      default: return Wrench;
    }
  };

  return (
    <section id="services" className="py-24 bg-brand-dark relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-widest"
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Turnkey Engineering Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            End-to-End <span className="text-gradient-orange">Industrial Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base"
          >
            From turnkey procurement and automation retrofits to preventive AMCs and on-site engineering assistance.
          </motion.p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((srv, idx) => {
            const IconComp = getIcon(srv.iconName);
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 rounded-3xl border border-white/10 hover:border-brand-orange/40 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-brand-orange/15 text-brand-orange border border-brand-orange/30 flex items-center justify-center group-hover:scale-110 transition-transform mb-5 shadow-inner">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-brand-orange transition-colors mb-2">
                    {srv.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    {srv.shortDesc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {srv.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <button
                    onClick={onOpenQuote}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-brand-orange text-gray-300 hover:text-white font-heading font-semibold text-xs border border-white/10 transition-all flex items-center justify-center gap-2 group/btn"
                  >
                    <span>Request Service Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
