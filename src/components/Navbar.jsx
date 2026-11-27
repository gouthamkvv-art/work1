import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Clock, Calendar, Sparkles, ChevronRight } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import BrandLogo from './BrandLogo';
import { COMPANY_INFO } from '../data/siteData';

export default function Navbar({ currentScreen, onNavigate, onOpenQuoteModal, onOpenChatbot }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "services", name: "Services" },
    { id: "menu", name: "Menu" },
    { id: "gallery", name: "Gallery" },
    { id: "why-us", name: "Why Us" },
    { id: "reviews", name: "Reviews" },
    { id: "contact", name: "Contact & Quote" },
  ];

  const handleNavClick = (screenId) => {
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(screenId);
    }
  };

  return (
    <>
      {/* Top Royal Utility Bar - Matte Black with Royal Gold Accents */}
      <div className="bg-[#101010] text-[#F3E8D0] text-[11px] py-2 px-4 border-b border-[#C6A15B]/25 transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-3">
          <div className="flex items-center gap-3 sm:gap-6 truncate">
            <span className="flex items-center gap-1.5 text-[#DFBE6F] font-semibold tracking-wider shrink-0 text-[10px] sm:text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>PALA | KOTTAYAM | KERALA</span>
            </span>
            <span className="hidden md:inline-block text-[#C6A15B]/40">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-[#F3E8D0]/70">
              <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>{COMPANY_INFO.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a 
              href={COMPANY_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-[#F3E8D0]/80 hover:text-[#C6A15B] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span className="font-medium text-[11px]">@royalprincecatering</span>
            </a>
            <span className="hidden sm:inline text-[#C6A15B]/40">•</span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#34D399] hover:text-[#10B981] transition-colors font-bold text-[11px]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#10B981]" />
              <span className="text-[#F3E8D0] font-semibold">{COMPANY_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar - Matte Black with Royal Gold Borders & Lighting */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#101010]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.6)] border-b border-[#C6A15B]/35 py-2.5 sm:py-3' 
            : 'bg-[#101010]/90 backdrop-blur-sm border-b border-[#C6A15B]/25 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Brand Logo - Clicking leads to Home screen */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left cursor-pointer focus:outline-none"
              aria-label="Royal Prince Home"
            >
              <BrandLogo className="w-9 h-9 sm:w-11 sm:h-11" lightVariant={true} />
            </button>

            {/* Desktop 8-Screen Tabs */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#292521]/60 p-1 rounded-full border border-[#C6A15B]/20 backdrop-blur-xs">
              {navLinks.map((link) => {
                const isActive = currentScreen === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-gold-gradient text-[#101010] font-bold shadow-[0_2px_12px_rgba(198,161,91,0.35)]'
                        : 'text-[#F3E8D0]/80 hover:text-[#DFBE6F] hover:bg-[#292521]'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                href={`tel:${COMPANY_INFO.phonePrimary}`}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-[#F3E8D0] bg-[#292521] border border-[#C6A15B]/40 hover:border-[#C6A15B] hover:text-[#C6A15B] transition-all flex items-center gap-1.5 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span className="hidden xl:inline">Call Us</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="btn-royal-gold px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-[#101010] flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#101010]" />
                <span>Get Quote</span>
              </button>
            </div>

            {/* Mobile Hamburger & Quick Quote */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={onOpenQuoteModal}
                className="btn-royal-gold px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-[#101010]"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 rounded-xl bg-[#292521] text-[#F3E8D0] hover:text-[#C6A15B] border border-[#C6A15B]/40 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#C6A15B]" /> : <Menu className="w-5 h-5 text-[#F3E8D0]" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (8 Screens) - Dark Espresso & Matte Black */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col justify-end sm:hidden animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="bg-[#101010] rounded-t-3xl p-6 border-t border-[#C6A15B]/50 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#C6A15B]/25 mb-4">
              <BrandLogo className="w-8 h-8" showText={true} lightVariant={true} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full bg-[#292521] text-[#F3E8D0] border border-[#C6A15B]/30"
              >
                <X className="w-5 h-5 text-[#C6A15B]" />
              </button>
            </div>

            <div className="flex flex-col gap-1.5 mb-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#C6A15B] px-2 mb-1">
                Explore Royal Prince Screens
              </span>
              {navLinks.map((link, idx) => {
                const isActive = currentScreen === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between p-3 rounded-xl text-left font-semibold text-xs transition-all ${
                      isActive 
                        ? 'bg-gold-gradient text-[#101010] font-bold shadow-md' 
                        : 'text-[#F3E8D0] hover:bg-[#292521] hover:text-[#C6A15B] border border-transparent hover:border-[#C6A15B]/20'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-[#101010]/20 text-[#101010]' : 'bg-[#292521] text-[#C6A15B] border border-[#C6A15B]/30'}`}>
                        0{idx + 1}
                      </span>
                      <span>{link.name}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#101010]' : 'text-[#C6A15B]'}`} />
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#C6A15B]/25">
              <a
                href={`tel:${COMPANY_INFO.phonePrimary}`}
                className="p-3 rounded-xl bg-[#292521] border border-[#C6A15B]/40 text-[#F3E8D0] font-bold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C6A15B]" />
                <span>Call Us</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="p-3 rounded-xl bg-gold-gradient text-[#101010] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#101010]" />
                <span>Quotation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
