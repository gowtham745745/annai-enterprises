import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, PhoneCall, ArrowUp, FileText } from 'lucide-react';

export default function FloatingWidgets({ onOpenQuote }) {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello ANNAI ENTERPRISES! I would like to inquire about industrial product availability and request a quotation."
  );

  return (
    <>
      {/* Floating Action Buttons Column (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        
        {/* Back to Top */}
        <AnimatePresence>
          {showTopBtn && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={scrollToTop}
              className="p-3.5 rounded-full bg-brand-dark-surface/90 text-gray-300 hover:text-white border border-white/20 shadow-xl backdrop-blur-md hover:border-brand-orange transition-all"
              title="Back to Top"
            >
              <ArrowUp className="w-5 h-5 text-brand-orange" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Call Now Floating */}
        <a
          href="tel:+919363323262"
          className="p-3.5 rounded-full bg-brand-dark-surface/90 text-white border border-white/20 shadow-xl backdrop-blur-md hover:border-brand-orange hover:scale-110 transition-all flex items-center justify-center group"
          title="Call Industrial Sales Desk"
        >
          <PhoneCall className="w-5 h-5 text-brand-orange group-hover:animate-pulse" />
        </a>

        {/* WhatsApp Direct Connect Floating */}
        <a
          href={`https://wa.me/919363323262?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl hover:scale-110 transition-all flex items-center justify-center group"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>

      </div>

      {/* Sticky Bottom Bar for Mobile Devices */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-brand-dark/95 backdrop-blur-md border-t border-brand-dark-border p-3 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href="tel:+919363323262"
          className="flex-1 py-2.5 rounded-xl bg-white/10 text-white font-heading font-semibold text-xs flex items-center justify-center gap-2 border border-white/10"
        >
          <PhoneCall className="w-4 h-4 text-brand-orange" />
          <span>Call Us</span>
        </a>

        <button
          onClick={onOpenQuote}
          className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-brand-orange to-amber-600 text-white font-heading font-bold text-xs shadow-lg flex items-center justify-center gap-2"
        >
          <FileText className="w-4 h-4" />
          <span>Get Quote</span>
        </button>
      </div>
    </>
  );
}
