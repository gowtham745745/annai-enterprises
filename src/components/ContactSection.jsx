import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  FileText, 
  Clock, 
  CheckCircle2, 
  Send, 
  Building,
  ShieldCheck
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    gst: '',
    category: 'MRO Supplies',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        gst: '',
        category: 'MRO Supplies',
        message: '',
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-widest"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Commercial Enquiry & RFQ</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Get In Touch With <br />
            <span className="text-gradient-orange">ANNAI ENTERPRISES</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base"
          >
            Submit your Bill of Materials (BOM), request a price quote, or locate our central warehouse hub.
          </motion.p>
        </div>

        {/* Contact Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Cards & Business Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card p-6 rounded-3xl border border-white/10 space-y-6 shadow-xl">
              <h3 className="font-heading font-bold text-xl text-white pb-3 border-b border-white/10 flex items-center justify-between">
                <span>Contact Headquarters</span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                  GST Verified
                </span>
              </h3>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-brand-orange/15 text-brand-orange border border-brand-orange/30 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-sm">Industrial Hub Address</div>
                  <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                    1897, GNT Road,Chinnaobulapuram,
                    Gummidipoondi,Thiruvallur,
                    Tamil Nadu – 601201
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-brand-orange/15 text-brand-orange border border-brand-orange/30 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-sm">Sales & Support Helpline</div>
                  <p className="text-xs text-gray-300 mt-1">
                    +91 93633 23262 &bull; +91 80721 98365
                  </p>
                  <p className="text-[11px] text-brand-orange mt-0.5">24/7 Breakdown Dispatch Desk</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-brand-orange/15 text-brand-orange border border-brand-orange/30 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-heading font-bold text-white text-sm">Official Email</div>
                  <p className="text-xs text-gray-300 mt-1">
                    annaienterprises.sk@gmail.com
                  </p>
                </div>
              </div>

              {/* GST & Hours */}
              <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <div className="font-semibold text-gray-400">GSTIN Number</div>
                  <div className="font-mono font-bold text-white mt-0.5">33LYMPS1848B1Z4</div>
                </div>
                <div>
                  <div className="font-semibold text-gray-400">Working Hours</div>
                  <div className="text-gray-200 mt-0.5">Mon - Sat: 9:00 AM - 7:30 PM</div>
                </div>
              </div>

            </div>

            {/* Google Map Mockup / Embed Frame */}
            <div className="rounded-3xl overflow-hidden border border-white/10 h-64 relative group shadow-xl">
              <iframe
                title="ANNAI ENTERPRISES Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.002447953258!2d80.16010000000001!3d13.099100000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA1JzU2LjgnTiA4MMKwMDknMzYuNCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                className="w-full h-full grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl glass-dark border border-white/15 text-xs text-white font-semibold pointer-events-none">
                Ambattur Industrial Estate Hub
              </div>
            </div>

          </div>

          {/* Right Column: Commercial Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
              
              <h3 className="font-heading font-bold text-2xl text-white mb-2">
                Request Commercial Quotation
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mb-8">
                Fill in your product requirements. Our industrial sales team will respond with a formal GST quote within 2 hours.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h4 className="font-heading font-bold text-xl text-white">Quotation Request Received!</h4>
                  <p className="text-sm text-gray-300">
                    Thank you. Reference ID: <strong className="text-brand-orange font-mono">#AE-RFQ-{Math.floor(1000 + Math.random() * 9000)}</strong>. Our commercial desk will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        Company / Plant Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Precision Components Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98400 00000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        GST Number (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="33AAAAA0000A1Z5"
                        value={formData.gst}
                        onChange={(e) => setFormData({ ...formData, gst: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm font-mono focus:outline-none focus:border-brand-orange transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                        Primary Product Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-brand-dark-surface border border-white/10 text-white text-sm focus:outline-none focus:border-brand-orange transition-all"
                      >
                        <option value="MRO Supplies">MRO Supplies</option>
                        <option value="Electrical Products">Electrical Products (Siemens/Schneider)</option>
                        <option value="Pneumatics">Pneumatics (SMC/Festo)</option>
                        <option value="Bearings">Bearings & Units (SKF/FAG)</option>
                        <option value="Safety Products">Safety Products (Karam/3M)</option>
                        <option value="Industrial Automation">Industrial Automation (PLC/VFD)</option>
                        <option value="Hand & Power Tools">Hand & Power Tools</option>
                        <option value="Fasteners & Bolting">Fasteners & Bolting</option>
                        <option value="Hydraulics">Hydraulics</option>
                        <option value="Industrial Chemicals">Industrial Chemicals (Loctite)</option>
                        <option value="Testing Instruments">Testing & Measuring</option>
                        <option value="Turnkey Services">Turnkey Engineering Services / AMC</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                      Requirement Details & Quantities *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please list part numbers, quantities, target specifications, or attach BOM notes..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-orange transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-orange to-amber-600 font-heading font-bold text-white text-base shadow-xl shadow-brand-orange/30 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Submit Request for Quotation</span>
                  </button>

                  <p className="text-[11px] text-gray-400 text-center">
                    🔒 Your company data is strictly protected. We never share RFQ information.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
