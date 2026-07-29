import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  FileText, 
  Send, 
  CheckCircle2, 
  Plus, 
  Minus, 
  Building2, 
  ShieldCheck,
  Package
} from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../data/products';

export default function QuoteModal({ isOpen, onClose, defaultCategory }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    gst: '',
    category: defaultCategory || 'MRO Supplies',
    quantity: 1,
    unit: 'Pieces',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        gst: '',
        category: 'MRO Supplies',
        quantity: 1,
        unit: 'Pieces',
        notes: '',
      });
    }, 4000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative max-w-2xl w-full bg-brand-dark-surface rounded-3xl border border-brand-orange/30 shadow-2xl overflow-hidden my-8"
        >
          {/* Top Header */}
          <div className="p-6 bg-gradient-to-r from-brand-orange to-amber-600 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl leading-tight">Request Commercial Quotation</h3>
                <p className="text-xs text-orange-100">ANNAI ENTERPRISES Fast Response Desk</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-6 sm:p-8 space-y-6">
            
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="font-heading font-bold text-2xl text-white">Quotation Request Submitted!</h4>
                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Thank you! Your reference code is <span className="font-mono text-brand-orange font-bold">#RFQ-AE-{Math.floor(1000 + Math.random() * 9000)}</span>. Our sales engineer will email your formal GST quote shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Category Selection */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Product Category Required *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white text-sm focus:outline-none focus:border-brand-orange transition-all"
                  >
                    {PRODUCT_CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.title}>
                        {cat.title} ({cat.tagline})
                      </option>
                    ))}
                    <option value="Custom Turnkey Engineering Service">Custom Turnkey Engineering Service / AMC</option>
                  </select>
                </div>

                {/* Quantity & Units */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Estimated Quantity
                    </label>
                    <div className="flex items-center rounded-xl bg-brand-dark border border-white/10 overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, quantity: Math.max(1, formData.quantity - 1) })}
                        className="p-3 text-gray-400 hover:text-white hover:bg-white/5"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 1 })}
                        className="w-full text-center bg-transparent text-white font-bold text-sm focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, quantity: formData.quantity + 1 })}
                        className="p-3 text-gray-400 hover:text-white hover:bg-white/5"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Packing Unit
                    </label>
                    <select
                      value={formData.unit}
                      onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-white/10 text-white text-sm focus:outline-none focus:border-brand-orange transition-all"
                    >
                      <option value="Pieces">Pieces / Units</option>
                      <option value="Boxes">Boxes / Cartons</option>
                      <option value="Meters">Meters / Tubing</option>
                      <option value="Liters">Liters / Barrels</option>
                      <option value="BOM Project">Entire Plant BOM</option>
                    </select>
                  </div>
                </div>

                {/* Company & Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Engineering Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Corporate Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98400 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                {/* Notes / Part Numbers */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5">
                    Part Numbers or Target Specifications
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter specific part numbers (e.g. SKF 6205-2RS, Siemens 3RT2026-1BB40), target delivery date, or special instructions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-brand-dark border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-orange to-amber-600 font-heading font-bold text-white shadow-xl shadow-brand-orange/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 text-base"
                >
                  <Send className="w-5 h-5" />
                  <span>Submit Instant RFQ</span>
                </button>

              </form>
            )}

          </div>

          {/* Bottom Footer Note */}
          <div className="px-6 py-3 bg-brand-dark border-t border-white/5 flex items-center justify-between text-xs text-gray-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4" /> 100% Genuine Certified
            </span>
            <span>ANNAI ENTERPRISES Commercial Desk</span>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
