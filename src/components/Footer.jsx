import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Facebook, 
  Twitter, 
  Youtube,
  CheckCircle2
} from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  return (
    <footer className="bg-brand-dark-surface border-t border-brand-dark-border text-gray-400 relative overflow-hidden">
      
      {/* Upper CTA Banner */}
      <div className="border-b border-brand-dark-border py-12 bg-gradient-to-r from-brand-orange/10 via-brand-dark to-brand-orange/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-heading font-extrabold text-2xl text-white">
              Ready to Upgrade Your Industrial Supply Chain?
            </div>
            <p className="text-sm text-gray-300">
              Get genuine OEM industrial products, fast dispatch, and dedicated engineering support today.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-brand-orange to-amber-600 font-heading font-bold text-white shadow-xl shadow-brand-orange/30 hover:scale-105 transition-all flex items-center gap-2 text-sm shrink-0"
          >
            <span>Get Instant Commercial Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-amber-600 flex items-center justify-center shadow-lg text-white font-heading font-black text-xl">
                A
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-tight text-white">
                  ANNAI <span className="text-brand-orange">ENTERPRISES</span>
                </span>
                <span className="text-[10px] text-gray-400 tracking-wider uppercase">
                  Industrial Supplies & Engineering Solutions
                </span>
              </div>
            </a>

            <p className="text-xs text-gray-300 leading-relaxed pr-6">
              ANNAI ENTERPRISES is India's leading industrial supplier of MRO consumables, electrical products, pneumatics, safety PPE, bearings, tools, and automation systems. Trusted by over 5000+ manufacturing plants nationwide.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>ISO Certified & 100% Genuine Guarantee</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2.5 rounded-xl bg-white/5 hover:bg-brand-orange text-gray-300 hover:text-white transition-colors" title="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 hover:bg-brand-orange text-gray-300 hover:text-white transition-colors" title="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 hover:bg-brand-orange text-gray-300 hover:text-white transition-colors" title="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 hover:bg-brand-orange text-gray-300 hover:text-white transition-colors" title="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-xs">
              {['Home', 'About Company', 'Products Catalog', 'Featured Brands', 'Industries We Serve', 'Engineering Services', 'Operations Gallery', 'Contact Us'].map((item, idx) => (
                <li key={idx}>
                  <a href={`#${item.toLowerCase().split(' ')[0]}`} className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
                    <span className="text-brand-orange text-[10px]">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Product Lines */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Product Lines
            </h3>
            <ul className="space-y-2.5 text-xs">
              {['MRO Supplies', 'Siemens & Schneider Electrical', 'SMC & Festo Pneumatics', 'SKF & FAG Bearings', 'Karam Safety PPE', 'Industrial Automation PLCs', 'Taparia & Stanley Tools', 'Loctite Engineering Adhesives'].map((item, idx) => (
                <li key={idx}>
                  <a href="#products" className="hover:text-brand-orange transition-colors flex items-center gap-1.5">
                    <span className="text-brand-orange text-[10px]">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
              Industrial Insights
            </h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Subscribe to receive new OEM catalog updates, pricing alerts, and technical datasheets.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to ANNAI ENTERPRISES updates!"); }} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Enter corporate email..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-brand-orange"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-brand-orange hover:bg-brand-orange-hover text-white font-heading font-semibold text-xs transition-colors"
              >
                Subscribe Newsletter
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Sub-footer Copyright */}
      <div className="border-t border-brand-dark-border py-6 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">ANNAI ENTERPRISES</strong>. All Rights Reserved. Designed for Global Industrial Standards.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Supply</a>
            <a href="#" className="hover:text-gray-300 transition-colors">GST Compliance</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
