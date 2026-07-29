import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Award, 
  Users, 
  Package, 
  Layers, 
  ShieldCheck, 
  Check, 
  FileText,
  TrendingUp
} from 'lucide-react';

export default function AboutSection({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('legacy');

  const stats = [
    { value: "15+", label: "Years Experience", subtext: "Serving Indian Industries Since 2011", icon: Award },
    { value: "500+", label: "Products", subtext: "Comprehensive MRO & Electrical Catalog", icon: Package },
    { value: "100+", label: "Brands", subtext: "Direct OEM Authorized Stockist", icon: Layers },
    { value: "5000+", label: "Satisfied Customers", subtext: "Plants, Factories & OEMs Nationwide", icon: Users },
  ];

  const tabContents = {
    legacy: {
      title: "15+ Years of Engineering & Industrial Supply Leadership",
      description: "Founded with a commitment to uncompromised quality and technical integrity, ANNAI ENTERPRISES has grown into one of South India's premier B2B industrial suppliers. We bridge the gap between world-leading equipment manufacturers and industrial plants across India.",
      bullets: [
        "Single-source partner for MRO consumables, bearings, pneumatics, & automation",
        "Direct authorization from global brands including Siemens, SKF, Festo & 3M",
        "Dedicated technical engineering support desk for BOM verification",
        "Streamlined B2B procurement with tax-compliant GST invoicing"
      ]
    },
    quality: {
      title: "Zero-Defect Quality Assurance & Traceability",
      description: "In industrial manufacturing, even a single counterfeit bearing or substandard circuit breaker can cause catastrophic plant shutdown. At ANNAI ENTERPRISES, 100% of our inventory undergoes rigorous quality verification.",
      bullets: [
        "Manufacturer Test Certificates (MTC) provided with every batch",
        "100% genuine products directly sourced from verified factory channels",
        "Strict ESD & climate-controlled warehousing for sensitive electronics",
        "Complete serial batch tracking and warranty back-up support"
      ]
    },
    promise: {
      title: "Our Engineering & Supply Chain Promise",
      description: "We understand that speed, pricing transparency, and technical precision are paramount for procurement managers and plant engineers.",
      bullets: [
        "Guaranteed 24-hour dispatch for ex-stock items",
        "Transparent, competitive volume tier pricing for factory BOMs",
        "Custom annual stocking agreements (AMC) to mitigate supply risk",
        "On-site installation and automation programming consultation"
      ]
    }
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-brand-dark via-brand-dark-surface to-brand-dark relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-widest"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>About ANNAI ENTERPRISES</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight"
          >
            Engineering Excellence & <br />
            <span className="text-gradient-orange">Unmatched Industrial Supply</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base sm:text-lg"
          >
            Empowering manufacturing plants, OEMs, power facilities, and infrastructure contractors with genuine industrial equipment and turnkey engineering solutions.
          </motion.p>
        </div>

        {/* Main Content Grid: Image + Interactive Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Industrial Facility Showcase Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                alt="ANNAI ENTERPRISES Industrial Operations"
                className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent" />

              {/* Floating Quality Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-dark border border-white/15 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-brand-orange text-white shadow-lg">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-white text-sm">ISO Certified Industrial Supplier</div>
                    <div className="text-xs text-gray-300">100% Factory Genuine Guarantee</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent Decorative Backdrop Frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-orange/30 rounded-3xl -z-10 hidden sm:block" />
          </motion.div>

          {/* Right Column: Tabbed Content Navigation */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Tab Switches */}
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <button
                onClick={() => setActiveTab('legacy')}
                className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-xs sm:text-sm font-heading font-semibold transition-all ${
                  activeTab === 'legacy'
                    ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Our Legacy
              </button>

              <button
                onClick={() => setActiveTab('quality')}
                className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-xs sm:text-sm font-heading font-semibold transition-all ${
                  activeTab === 'quality'
                    ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Quality Policy
              </button>

              <button
                onClick={() => setActiveTab('promise')}
                className={`flex-1 min-w-[120px] py-3 px-4 rounded-xl text-xs sm:text-sm font-heading font-semibold transition-all ${
                  activeTab === 'promise'
                    ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                Our Promise
              </button>
            </div>

            {/* Tab Description Body */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <h3 className="font-heading font-bold text-2xl text-white">
                {tabContents[activeTab].title}
              </h3>
              <p className="text-gray-300 text-base leading-relaxed">
                {tabContents[activeTab].description}
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {tabContents[activeTab].bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="p-1 rounded-md bg-brand-orange/20 text-brand-orange mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 font-medium">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Action Quote Button */}
            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-amber-600 font-heading font-semibold text-white shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/40 hover:scale-[1.02] transition-all flex items-center gap-2 text-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Partner With ANNAI ENTERPRISES</span>
              </button>
            </div>

          </div>

        </div>

        {/* Animated Statistics Counter Cards (15+, 500+, 100+, 5000+) */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const IconComp = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-brand-orange/40 transition-all shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/15 text-brand-orange border border-brand-orange/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <TrendingUp className="w-4 h-4 text-emerald-400 opacity-60" />
                </div>

                <div className="font-heading font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
                  <span className="text-gradient-orange">{stat.value}</span>
                </div>
                
                <div className="font-heading font-bold text-base text-gray-200 mt-1">
                  {stat.label}
                </div>
                
                <div className="text-xs text-gray-400 mt-1">
                  {stat.subtext}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
