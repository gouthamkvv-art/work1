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
      {/* Top Royal Utility Bar */}
      <div className="bg-[#0B1325] text-[#E2E8F0] text-[11px] py-2 px-4 border-b border-[#C59A3F]/30 transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-3">
          <div className="flex items-center gap-3 sm:gap-6 truncate">
            <span className="flex items-center gap-1.5 text-[#DFBE6F] font-semibold tracking-wider shrink-0 text-[10px] sm:text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#C59A3F]" />
              <span>PALA | KOTTAYAM | KERALA</span>
            </span>
            <span className="hidden md:inline-block text-[#C59A3F]/40">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-[#94A3B8]">
              <Clock className="w-3.5 h-3.5 text-[#C59A3F]" />
              <span>{COMPANY_INFO.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a 
              href={COMPANY_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-[#CBD5E1] hover:text-[#DFBE6F] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C59A3F]" />
              <span className="font-medium text-[11px]">@royalprincecatering</span>
            </a>
            <span className="hidden sm:inline text-[#C59A3F]/40">•</span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#10B981] hover:text-[#34D399] transition-colors font-bold text-[11px]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#10B981]" />
              <span>{COMPANY_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar with 8 Screen Tabs */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(15,23,42,0.06)] border-b border-[#EADFC7] py-2.5 sm:py-3' 
            : 'bg-[#FBF9F5]/90 backdrop-blur-sm border-b border-[#EADFC7]/80 py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Brand Logo - Clicking leads to Home screen */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 text-left cursor-pointer"
            >
              <BrandLogo className="w-9 h-9 sm:w-11 sm:h-11" lightVariant={false} />
            </button>

            {/* Desktop 8-Screen Tabs */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = currentScreen === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-gold-gradient text-[#0F172A] font-bold shadow-xs'
                        : 'text-[#475569] hover:text-[#0F172A] hover:bg-[#F7F4EE]'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <a
                href={`tel:${COMPANY_INFO.phonePrimary}`}
                className="px-3 py-1.5 rounded-xl text-xs font-semibold text-[#0F172A] border border-[#CBD5E1] hover:border-[#C59A3F] hover:bg-[#F7F4EE] transition-all flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#C59A3F]" />
                <span className="hidden xl:inline">Call Us</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#0F172A] bg-gold-gradient hover:brightness-105 active:scale-98 transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Get Quote</span>
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex sm:hidden items-center gap-1.5">
              <button
                onClick={onOpenQuoteModal}
                className="px-2.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-[#0F172A] bg-gold-gradient shadow-xs"
              >
                Quote
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="p-2 rounded-xl text-[#0F172A] hover:bg-[#F7F4EE] border border-[#EADFC7] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#C59A3F]" /> : <Menu className="w-5 h-5 text-[#0F172A]" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu (8 Screens) */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex flex-col justify-end sm:hidden animate-fadeIn"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div 
            className="bg-white rounded-t-3xl p-6 border-t border-[#EADFC7] shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#F0E9DA] mb-4">
              <BrandLogo className="w-8 h-8" showText={true} lightVariant={false} />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full bg-[#F7F4EE] text-[#475569]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-1 mb-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#9E7628] px-2 mb-1">
                Explore Screens
              </span>
              {navLinks.map((link, idx) => {
                const isActive = currentScreen === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between p-3 rounded-xl text-left font-semibold text-xs sm:text-sm transition-all ${
                      isActive 
                        ? 'bg-gold-gradient text-[#0F172A] font-bold shadow-xs' 
                        : 'text-[#1E293B] hover:bg-[#F7F4EE]'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive ? 'bg-black/10' : 'bg-slate-100 text-slate-500'}`}>
                        0{idx + 1}
                      </span>
                      <span>{link.name}</span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#0F172A]' : 'text-[#94A3B8]'}`} />
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#F0E9DA]">
              <a
                href={`tel:${COMPANY_INFO.phonePrimary}`}
                className="p-3 rounded-xl border border-[#CBD5E1] text-[#0F172A] font-bold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#C59A3F]" />
                <span>Call Us</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="p-3 rounded-xl bg-gold-gradient text-[#0F172A] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>Quotation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
