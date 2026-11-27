import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import FoodShowcase from './components/FoodShowcase';
import Gallery from './components/Gallery';
import WhyUs from './components/WhyUs';
import Testimonials from './components/Testimonials';
import EnquiryBooking from './components/EnquiryBooking';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import WhatsAppChatbot from './components/WhatsAppChatbot';
import LightboxModal from './components/LightboxModal';
import QuotationModal from './components/QuotationModal';
import MobileBottomBar from './components/MobileBottomBar';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

export const SCREENS = [
  { id: 'home', label: 'Home', subtitle: 'Royal Welcome' },
  { id: 'about', label: 'About Us', subtitle: 'Heritage & Leadership' },
  { id: 'services', label: 'Services', subtitle: 'Banquet Offerings' },
  { id: 'menu', label: 'Menu', subtitle: 'Signature Gastronomy' },
  { id: 'gallery', label: 'Gallery', subtitle: 'Celebration Moments' },
  { id: 'why-us', label: 'Why Us', subtitle: 'Pillars of Excellence' },
  { id: 'reviews', label: 'Reviews', subtitle: 'Client Testimonials' },
  { id: 'contact', label: 'Quotation & Contact', subtitle: 'Bookings & Location' },
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedGalleryItem, setSelectedGalleryItem] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Sync with URL hash on mount and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      const match = SCREENS.find(s => s.id === hash);
      if (match) {
        setCurrentScreen(match.id);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (screenId) => {
    setCurrentScreen(screenId);
    window.location.hash = screenId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentIndex = SCREENS.findIndex(s => s.id === currentScreen);
  const prevScreen = currentIndex > 0 ? SCREENS[currentIndex - 1] : null;
  const nextScreen = currentIndex < SCREENS.length - 1 ? SCREENS[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-[#FAF7F0] text-[#292521] flex flex-col font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#C6A15B] selection:text-[#101010] pb-16 md:pb-0">
      {/* 1. Sticky Navigation with Screen Tabs */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={navigateTo}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenChatbot={() => setIsChatbotOpen(true)}
      />

      <main className="flex-1 flex flex-col">
        {/* Active Screen Container with Smooth Fade-in */}
        <div key={currentScreen} className="flex-1 animate-fadeIn">
          {currentScreen === 'home' && (
            <Hero
              onNavigate={navigateTo}
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
              onOpenChatbot={() => setIsChatbotOpen(true)}
            />
          )}

          {currentScreen === 'about' && (
            <AboutUs
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
              onNavigate={navigateTo}
            />
          )}

          {currentScreen === 'services' && (
            <Services
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
              onNavigate={navigateTo}
            />
          )}

          {currentScreen === 'menu' && (
            <FoodShowcase
              onSelectImage={(item) => setSelectedGalleryItem(item)}
              onOpenChatbot={() => setIsChatbotOpen(true)}
              onNavigate={navigateTo}
            />
          )}

          {currentScreen === 'gallery' && (
            <Gallery
              onSelectImage={(item) => setSelectedGalleryItem(item)}
              onNavigate={navigateTo}
            />
          )}

          {currentScreen === 'why-us' && (
            <WhyUs
              onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
              onNavigate={navigateTo}
            />
          )}

          {currentScreen === 'reviews' && (
            <Testimonials
              onNavigate={navigateTo}
            />
          )}

          {currentScreen === 'contact' && (
            <div>
              <EnquiryBooking />
              <ContactLocation />
            </div>
          )}
        </div>

        {/* Screen Bottom Navigation Bar (Previous Screen / Next Screen) - Matte Black #101010 */}
        <div className="bg-[#101010] border-t border-b border-[#C6A15B]/30 py-4 px-4 sm:px-8 shadow-inner">
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            {/* Previous Button */}
            {prevScreen ? (
              <button
                onClick={() => navigateTo(prevScreen.id)}
                className="flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl bg-[#292521] border border-[#C6A15B]/40 hover:border-[#C6A15B] text-[#F3E8D0] text-xs font-bold transition-all shadow-sm cursor-pointer group"
              >
                <ArrowLeft className="w-4 h-4 text-[#C6A15B] group-hover:-translate-x-0.5 transition-transform" />
                <div className="text-left hidden sm:block">
                  <span className="text-[10px] text-[#F3E8D0]/60 block font-normal">Previous</span>
                  <span>{prevScreen.label}</span>
                </div>
                <span className="sm:hidden">Back</span>
              </button>
            ) : (
              <div />
            )}

            {/* Screen Position Pill */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xs font-semibold text-[#F3E8D0]/70">
                Screen <span className="text-[#DFBE6F] font-bold">{currentIndex + 1}</span> of {SCREENS.length}
              </span>
              <div className="hidden md:flex items-center gap-1.5 ml-2">
                {SCREENS.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => navigateTo(s.id)}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${
                      idx === currentIndex 
                        ? 'w-6 bg-[#C6A15B] shadow-[0_0_8px_rgba(198,161,91,0.5)]' 
                        : 'w-1.5 bg-[#3D3732] hover:bg-[#C6A15B]/60'
                    }`}
                    title={s.label}
                  />
                ))}
              </div>
            </div>

            {/* Next Button */}
            {nextScreen ? (
              <button
                onClick={() => navigateTo(nextScreen.id)}
                className="btn-royal-gold flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl text-[#101010] text-xs font-bold transition-all shadow-gold-button cursor-pointer group"
              >
                <div className="text-right hidden sm:block">
                  <span className="text-[10px] text-[#101010]/70 block font-normal">Next Screen</span>
                  <span>{nextScreen.label}</span>
                </div>
                <span className="sm:hidden">Next</span>
                <ArrowRight className="w-4 h-4 text-[#101010] group-hover:translate-x-0.5 transition-transform" />
              </button>
            ) : (
              <button
                onClick={() => navigateTo('home')}
                className="flex items-center gap-2 px-3.5 sm:px-5 py-2.5 rounded-xl bg-[#292521] border border-[#C6A15B]/40 hover:border-[#C6A15B] text-[#F3E8D0] text-xs font-bold transition-all shadow-sm cursor-pointer"
              >
                <span>Back to Home</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenChatbot={() => setIsChatbotOpen(true)}
      />

      {/* Floating WhatsApp Quick Action Widget */}
      <WhatsAppChatbot
        isOpen={isChatbotOpen}
        setIsOpen={setIsChatbotOpen}
      />

      {/* High-Resolution Image Lightbox Modal */}
      <LightboxModal
        item={selectedGalleryItem}
        onClose={() => setSelectedGalleryItem(null)}
      />

      {/* Quick Quotation Modal */}
      <QuotationModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileBottomBar
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        onOpenChatbot={() => setIsChatbotOpen(true)}
        onNavigate={navigateTo}
      />
    </div>
  );
}
