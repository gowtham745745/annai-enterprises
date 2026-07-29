import React, { useState } from 'react';
import ScrollProgressBar from './components/ScrollProgressBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProductCategories from './components/ProductCategories';
import BrandShowcase from './components/BrandShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import IndustriesWeServe from './components/IndustriesWeServe';
import ServicesSection from './components/ServicesSection';
import GallerySection from './components/GallerySection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import SearchModal from './components/SearchModal';
import ProductDetailModal from './components/ProductDetailModal';
import FloatingWidgets from './components/FloatingWidgets';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [defaultQuoteCategory, setDefaultQuoteCategory] = useState('');

  const handleOpenQuote = (categoryTitle = '') => {
    setDefaultQuoteCategory(categoryTitle);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-dark text-gray-100 font-sans selection:bg-brand-orange selection:text-white relative">
      
      {/* Top Scroll Indicator */}
      <ScrollProgressBar />

      {/* Sticky Header Navigation */}
      <Navbar
        onOpenQuote={() => handleOpenQuote('')}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Page Layout Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenQuote={() => handleOpenQuote('')} />

        {/* 2. About Company & Counter Stats */}
        <AboutSection onOpenQuote={() => handleOpenQuote('')} />

        {/* 3. Product Categories */}
        <ProductCategories
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenQuote={() => handleOpenQuote('')}
        />

        {/* 4. Featured OEM Brands Showcase */}
        <BrandShowcase onOpenQuote={() => handleOpenQuote('')} />

        {/* 5. Why Choose Us */}
        <WhyChooseUs onOpenQuote={() => handleOpenQuote('')} />

        {/* 6. Industries We Serve */}
        <IndustriesWeServe onOpenQuote={() => handleOpenQuote('')} />

        {/* 7. Turnkey Engineering Services */}
        <ServicesSection onOpenQuote={() => handleOpenQuote('')} />

        {/* 8. Facility & Operations Gallery */}
        <GallerySection />

        {/* 9. Verified Customer Testimonials */}
        <TestimonialSection />

        {/* 10. Frequently Asked Questions (FAQ) */}
        <FAQSection onOpenQuote={() => handleOpenQuote('')} />

        {/* 11. Contact & Quotation Enquiry Form */}
        <ContactSection />
      </main>

      {/* 12. Corporate Footer */}
      <Footer onOpenQuote={() => handleOpenQuote('')} />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultCategory={defaultQuoteCategory}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectProduct={(product) => setSelectedProduct(product)}
        onOpenQuote={() => handleOpenQuote('')}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenQuote={(categoryTitle) => handleOpenQuote(categoryTitle)}
      />

      {/* Floating Call, WhatsApp & Scroll Widgets */}
      <FloatingWidgets onOpenQuote={() => handleOpenQuote('')} />

    </div>
  );
}
