import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Search, 
  FileText, 
  Menu, 
  X, 
  PhoneCall, 
  ArrowRight,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function Navbar({ onOpenQuote, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Brands', href: '#brands' },
    { name: 'Industries', href: '#industries' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-dark-border py-3 shadow-2xl' 
        : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Company Brand Logo */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-amber-600 flex items-center justify-center shadow-lg shadow-brand-orange/30 group-hover:scale-105 transition-transform duration-300">
              <span className="font-heading font-extrabold text-xl text-white tracking-wider">A</span>
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-brand-orange transition-colors">
                ANNAI <span className="text-brand-orange">ENTERPRISES</span>
              </span>
              <span className="text-[10px] text-gray-400 tracking-wider uppercase font-medium">
                Industrial Supplies & Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Quick Search Button */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 transition-all flex items-center gap-2 text-sm"
              title="Search Catalog (Ctrl+K)"
            >
              <Search className="w-4 h-4 text-brand-orange" />
              <span className="hidden xl:inline text-xs text-gray-400">Search</span>
            </button>

            {/* Quick Call */}
            <a
              href="tel:+919840000000"
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-brand-orange px-3 py-2 rounded-xl border border-white/5 hover:border-brand-orange/30 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
              <span>+91 98400 00000</span>
            </a>

            {/* Request Quote Primary Button */}
            <button
              onClick={onOpenQuote}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange to-amber-600 font-heading font-semibold text-sm text-white shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Get Quote</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-lg bg-white/5 text-gray-300"
            >
              <Search className="w-5 h-5 text-brand-orange" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 text-gray-200 hover:text-white border border-white/10"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-brand-orange" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="sm:hidden bg-brand-dark/95 backdrop-blur-xl border-b border-brand-dark-border overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/5 transition-all"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-brand-orange" />
                </a>
              ))}
              
              <div className="pt-4 border-t border-brand-dark-border flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-orange to-amber-600 font-heading font-bold text-white shadow-lg shadow-brand-orange/30 flex items-center justify-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  <span>Request Instant Quote</span>
                </button>

                <a
                  href="tel:+919363323262"
                  className="w-full py-3 rounded-xl bg-white/5 text-gray-200 font-medium flex items-center justify-center gap-2 border border-white/10"
                >
                  <PhoneCall className="w-4 h-4 text-brand-orange" />
                  <span>Call +91 9363323262</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
