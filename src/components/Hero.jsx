import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Truck, 
  CheckCircle2, 
  Cpu, 
  Cog, 
  Zap, 
  Sparkles,
  ChevronDown
} from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const floatingCards = [
    {
      brand: "SIEMENS",
      title: "PLC & Automation",
      subtitle: "S7-1500 Controller",
      icon: Cpu,
      status: "In Stock",
      color: "from-blue-500/20 to-cyan-500/10"
    },
    {
      brand: "SKF",
      title: "Precision Bearings",
      subtitle: "Spherical Roller Series",
      icon: Cog,
      status: "Genuine OEM",
      color: "from-amber-500/20 to-orange-500/10"
    },
    {
      brand: "SMC",
      title: "Pneumatic Valves",
      subtitle: "5/2 Solenoid System",
      icon: Zap,
      status: "Fast Supply",
      color: "from-emerald-500/20 to-teal-500/10"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-brand-dark">
      
      {/* Ambient background glows and mesh grid pattern */}
      <div className="absolute inset-0 bg-gradient-industrial pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Industrial background image backdrop with dark gradient blend */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-luminosity" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-brand-orange/30 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-brand-orange animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-200">
                India's Trusted B2B Industrial Supply Partner
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.12]"
            >
              Powering Industries with <br className="hidden sm:inline" />
              <span className="text-gradient-orange">Reliable Engineering</span> Solutions
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed"
            >
              <strong className="text-white font-semibold">ANNAI ENTERPRISES</strong> delivers end-to-end industrial equipment, MRO consumables, electrical switchgear, pneumatics, SKF bearings, safety gear, and Industry 4.0 automation systems across India.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href="#products"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-orange to-amber-600 font-heading font-bold text-white shadow-xl shadow-brand-orange/30 hover:shadow-brand-orange/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 text-base group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenQuote}
                className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 text-white font-heading font-semibold border border-white/15 hover:border-brand-orange/40 backdrop-blur-md transition-all flex items-center justify-center gap-2 text-base"
              >
                <span>Request Commercial Quote</span>
              </button>
            </motion.div>

            {/* Key Quick Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-gray-400 font-medium"
            >
              <span className="flex items-center gap-1.5 text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-brand-orange" /> Authorized Stockist
              </span>
              <span className="flex items-center gap-1.5 text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-brand-orange" /> Same-Day Dispatch
              </span>
              <span className="flex items-center gap-1.5 text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-brand-orange" /> 100% Tax Compliant GST
              </span>
            </motion.div>

          </div>

          {/* Right Floating Product Showcase Cards */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Background Decorative Ring */}
            <div className="absolute w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full border border-white/10 animate-spin-slow pointer-events-none" />

            <div className="w-full max-w-md space-y-4 relative z-10">
              {floatingCards.map((card, idx) => {
                const IconComponent = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 + idx * 0.15 }}
                    whileHover={{ scale: 1.03, x: 5 }}
                    className={`glass-card p-5 rounded-2xl border border-white/10 bg-gradient-to-r ${card.color} shadow-2xl relative overflow-hidden backdrop-blur-xl`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center text-brand-orange shadow-inner">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold uppercase tracking-widest text-brand-orange">
                              {card.brand}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                              {card.status}
                            </span>
                          </div>
                          <h3 className="font-heading font-bold text-white text-base mt-0.5">
                            {card.title}
                          </h3>
                          <p className="text-xs text-gray-400">
                            {card.subtitle}
                          </p>
                        </div>
                      </div>
                      
                      <div className="hidden sm:block">
                        <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}

              {/* Floating Live Stock Status Pill */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="glass-card px-4 py-3 rounded-xl border border-brand-orange/30 flex items-center justify-between text-xs text-gray-300"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-semibold text-white">Central Warehouse Hub</span>
                </div>
                <span className="text-gray-400">Over 500+ Product Lines</span>
              </motion.div>
            </div>

          </div>

        </div>
      </div>

      {/* Trust Badges Strip below Hero */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-12 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-brand-orange/15 text-brand-orange border border-brand-orange/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading font-bold text-white text-sm">Premium Quality</div>
              <div className="text-xs text-gray-400">100% Certified OEM</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-brand-orange/15 text-brand-orange border border-brand-orange/20">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading font-bold text-white text-sm">15+ Years Experience</div>
              <div className="text-xs text-gray-400">Engineering Expertise</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-brand-orange/15 text-brand-orange border border-brand-orange/20">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading font-bold text-white text-sm">Genuine Products</div>
              <div className="text-xs text-gray-400">Full Test Certificates</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-brand-orange/15 text-brand-orange border border-brand-orange/20">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <div className="font-heading font-bold text-white text-sm">PAN India Supply</div>
              <div className="text-xs text-gray-400">Fast Express Logistics</div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
