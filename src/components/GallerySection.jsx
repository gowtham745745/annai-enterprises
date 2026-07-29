import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_ITEMS } from '../data/gallery';
import { 
  Images, 
  X, 
  ZoomIn, 
  ChevronLeft, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Warehouse', 'Products', 'Factory', 'Projects', 'Clients'];

  const filteredItems = GALLERY_ITEMS.filter(
    (item) => activeFilter === 'All' || item.category === activeFilter
  );

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setSelectedImage(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedImage(GALLERY_ITEMS[prevIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-brand-dark via-brand-dark-surface to-brand-dark relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-semibold uppercase tracking-widest"
          >
            <Images className="w-3.5 h-3.5" />
            <span>Industrial Operations Gallery</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight"
          >
            Our Facility & <span className="text-gradient-orange">Project Showcase</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base"
          >
            Take a visual tour of our central warehousing hub, automation panel workshop, and field project execution.
          </motion.p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-heading font-semibold transition-all ${
                activeFilter === cat
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/30 font-bold'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedImage(item)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer glass-card border border-white/10 shadow-xl h-64"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full glass-dark text-[10px] font-bold text-brand-orange border border-white/15">
                  {item.category}
                </div>

                {/* Zoom Icon Hover */}
                <div className="absolute top-3 right-3 p-2 rounded-xl bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                {/* Bottom Title & Subtitle */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 line-clamp-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Dialog Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          >
            <div className="relative max-w-4xl w-full bg-brand-dark-surface rounded-3xl border border-white/15 overflow-hidden shadow-2xl">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:text-brand-orange transition-colors border border-white/20"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev / Next Arrows */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 text-white hover:text-brand-orange transition-colors border border-white/20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/60 text-white hover:text-brand-orange transition-colors border border-white/20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Preview */}
              <div className="h-[450px] sm:h-[550px] overflow-hidden relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Details Caption */}
              <div className="p-6 bg-brand-dark flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
                <div>
                  <span className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                    {selectedImage.category}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-white">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {selectedImage.description}
                  </p>
                </div>

                <div className="text-xs text-gray-400 font-medium shrink-0">
                  ANNAI ENTERPRISES Official Showcase
                </div>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
