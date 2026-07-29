import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/faqs';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  MessageSquare,
  Sparkles
} from 'lucide-react';

export default function FAQSection({ onOpenQuote }) {
  const [openId, setOpenId] = useState(1);
  const [faqSearch, setFaqSearch] = useState('');

  const toggleFaq = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <section className="py-24 bg-gradient-to-b from-brand-dark-surface via-brand-dark to-brand-dark relative overflow-hidden border-t border-brand-dark-border">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-widest"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Procurement & Technical FAQ</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Frequently Asked <span className="text-gradient-orange">Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base"
          >
            Find instant answers regarding OEM authenticity, GST invoicing, shipping SLAs, and custom BOM quotations.
          </motion.p>
        </div>

        {/* FAQ Search Bar */}
        <div className="max-w-xl mx-auto mb-10 relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. GST, SKF, Warranty, Shipping)..."
            value={faqSearch}
            onChange={(e) => setFaqSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-brand-orange transition-all"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`glass-card rounded-2xl border transition-all overflow-hidden ${
                  isOpen ? 'border-brand-orange/40 bg-white/[0.04]' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-semibold text-base sm:text-lg text-white"
                >
                  <span>{faq.question}</span>
                  <div className={`p-2 rounded-xl transition-transform duration-300 ${
                    isOpen ? 'bg-brand-orange text-white rotate-180' : 'bg-white/5 text-gray-400'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <MessageSquare className="w-6 h-6 text-brand-orange" />
            <div className="text-left">
              <div className="font-heading font-bold text-white text-sm">Have a specific technical question?</div>
              <div className="text-xs text-gray-400">Our engineering sales desk is online to assist.</div>
            </div>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-5 py-2.5 rounded-xl bg-brand-orange text-white font-heading font-semibold text-xs shadow-md"
          >
            Ask Our Engineers
          </button>
        </div>

      </div>
    </section>
  );
}
