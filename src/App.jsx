import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Founder from './components/Founder';
import FleetLogistics from './components/FleetLogistics';
import Services from './components/Services';
import FoodShowcase from './components/FoodShowcase';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import InstagramFeed from './components/InstagramFeed';
import EnquiryBooking from './components/EnquiryBooking';
import Testimonials from './components/Testimonials';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import WhatsAppChatbot from './components/WhatsAppChatbot';
import LightboxModal from './components/LightboxModal';
import QuotationModal from './components/QuotationModal';

export default function App() {
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#070A09] text-[#CBD5D0] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#C5A869] selection:text-[#070A09]">
      {/* Top Navigation */}
      <Navbar
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenChatbot={() => setIsChatbotOpen(true)}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
          onOpenChatbot={() => setIsChatbotOpen(true)}
        />

        {/* 2. About Royal Prince Section */}
        <AboutUs
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* 3. The Founder & Managing Director: Johnykutty P.V. */}
        <Founder
          onOpenChatbot={() => setIsChatbotOpen(true)}
        />

        {/* 4. The Royal Vehicle Fleet & Mobile Logistics */}
        <FleetLogistics
          onOpenChatbot={() => setIsChatbotOpen(true)}
        />

        {/* 5. Our Services Section */}
        <Services
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* 6. Food Experience - Signature Collection */}
        <FoodShowcase
          onSelectImage={(item) => setSelectedGalleryItem(item)}
          onOpenChatbot={() => setIsChatbotOpen(true)}
        />

        {/* 7. Our Work - Instagram Inspired Gallery */}
        <Gallery
          onSelectImage={(item) => setSelectedGalleryItem(item)}
        />

        {/* 8. Why Royal Prince? */}
        <WhyUs
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />

        {/* 9. Instagram Showcase (@royalprincecatering) */}
        <InstagramFeed />

        {/* 10. Customer Enquiry and Quotation Form */}
        <EnquiryBooking />

        {/* 11. Customer Testimonials */}
        <Testimonials />

        {/* 12. Contact and Location */}
        <ContactLocation
          onOpenChatbot={() => setIsChatbotOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenChatbot={() => setIsChatbotOpen(true)}
      />

      {/* Interactive WhatsApp Floating Chatbot on every page */}
      <WhatsAppChatbot
        isOpen={isChatbotOpen}
        setIsOpen={setIsChatbotOpen}
      />

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />

      {/* Instant Quotation Modal */}
      <QuotationModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
