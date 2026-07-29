import React from 'react';
import { motion } from 'framer-motion';
import { INDUSTRIES } from '../data/industries';
import { 
  Factory, 
  Flame, 
  Zap, 
  Car, 
  Utensils, 
  Building2, 
  Wrench, 
  FlaskConical, 
  Pill, 
  Shirt, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export default function IndustriesWeServe({ onOpenQuote }) {
  // Map icon names to Lucide Icon components
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Factory': return Factory;
      case 'Flame': return Flame;
      case 'Zap': return Zap;
      case 'Car': return Car;
      case 'Utensils': return Utensils;
      case 'Building2': return Building2;
      case 'Wrench': return Wrench;
      case 'FlaskConical': return FlaskConical;
      case 'Pill': return Pill;
      case 'Shirt': return Shirt;
      default: return Factory;
    }
  };

  return (
    <section id="industries" className="py-24 bg-gradient-to-b from-brand-dark via-brand-dark-surface to-brand-dark relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-widest"
          >
            <Factory className="w-3.5 h-3.5" />
            <span>Industrial Sector Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Industries <span className="text-gradient-orange">We Serve</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base"
          >
            Delivering specialized industrial equipment, compliance PPE, and engineering support for core industrial sectors.
          </motion.p>
        </div>

        {/* 10 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const IconComponent = getIcon(ind.iconName);
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 5) * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-brand-orange/40 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-brand-orange/15 text-brand-orange border border-brand-orange/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-brand-orange transition-colors" />
                  </div>

                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-brand-orange transition-colors mb-2">
                    {ind.name}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                    Key Supplies:
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {ind.keyProducts.map((kp, i) => (
                      <span
                        key={i}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-gray-300 border border-white/5"
                      >
                        {kp}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 text-[11px] font-semibold text-brand-orange">
                    ✔ {ind.stat}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
