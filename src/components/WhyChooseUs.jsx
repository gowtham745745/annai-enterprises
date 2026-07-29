import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  DollarSign, 
  Truck, 
  Headphones, 
  Users, 
  Warehouse, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

export default function WhyChooseUs({ onOpenQuote }) {
  const reasons = [
    {
      title: "Genuine OEM Products",
      icon: ShieldCheck,
      description: "100% guaranteed authentic industrial supplies directly sourced from manufacturers with original test certificates.",
      badge: "Zero Counterfeit Guarantee",
      color: "from-orange-500/20 to-amber-500/10"
    },
    {
      title: "Competitive Bulk Pricing",
      icon: DollarSign,
      description: "Direct OEM distribution allows us to offer transparent, highly competitive tier pricing for factory BOMs.",
      badge: "Volume Discounts",
      color: "from-emerald-500/20 to-teal-500/10"
    },
    {
      title: "Quick PAN-India Delivery",
      icon: Truck,
      description: "Robust logistics infrastructure providing 24-hour dispatch for ex-stock items and express door delivery.",
      badge: "Express Logistics",
      color: "from-blue-500/20 to-cyan-500/10"
    },
    {
      title: "Technical Engineering Support",
      icon: Headphones,
      description: "Qualified electrical and mechanical engineers on call to help you size equipment, select alternatives, and program drives.",
      badge: "Dedicated Engineers",
      color: "from-purple-500/20 to-pink-500/10"
    },
    {
      title: "15+ Yrs Industry Veterans",
      icon: Users,
      description: "Deep domain expertise in plant operations, MRO requirements, power plants, and industrial automation standards.",
      badge: "Proven Expertise",
      color: "from-amber-500/20 to-orange-500/10"
    },
    {
      title: "25,000 Sq.Ft Central Inventory",
      icon: Warehouse,
      description: "Massive stocking bay housing over 500+ product categories, ensuring immediate fulfillment for emergency breakdowns.",
      badge: "Ex-Stock Availability",
      color: "from-red-500/20 to-orange-500/10"
    }
  ];

  return (
    <section className="py-24 bg-brand-dark relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-widest"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose ANNAI ENTERPRISES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Your Most Reliable Industrial <br />
            <span className="text-gradient-orange">Procurement Advantage</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base"
          >
            We eliminate supply chain friction for industrial plants with uncompromising authenticity, speed, and technical depth.
          </motion.p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className={`glass-card p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${item.color} hover:border-brand-orange/40 transition-all flex flex-col justify-between group shadow-xl`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-brand-orange/15 text-brand-orange border border-brand-orange/30 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                      <IconComp className="w-7 h-7" />
                    </div>

                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/10 text-brand-orange border border-white/10">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-brand-orange transition-colors mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 rounded-3xl glass-dark border border-brand-orange/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-heading font-bold text-xl text-white">
              Need a Custom Industrial Supply Agreement or AMC?
            </h3>
            <p className="text-sm text-gray-300">
              Speak directly with our senior industrial procurement managers for contract terms and volume pricing.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-amber-600 font-heading font-bold text-white shadow-xl shadow-brand-orange/30 hover:scale-[1.02] transition-all text-sm shrink-0"
          >
            Request B2B Meeting
          </button>
        </div>

      </div>
    </section>
  );
}
