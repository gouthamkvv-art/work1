import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Clock, Calendar, Truck, User, ChevronRight, Sparkles } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import BrandLogo from './BrandLogo';
import { COMPANY_INFO } from '../data/siteData';

export default function Navbar({ onOpenQuoteModal, onOpenChatbot }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
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
    { name: "About Us", href: "#about", desc: "Our heritage & standards" },
    { name: "Catering Services", href: "#services", desc: "Weddings, sadhya & banquets" },
    { name: "The Founder", href: "#founder", desc: "Johnykutty P.V. profile" },
    { name: "Vehicle Fleet", href: "#fleet", desc: "Insulated thermal transport" },
    { name: "Gastronomy", href: "#food-collection", desc: "Signature food collection" },
    { name: "Event Gallery", href: "#gallery", desc: "Real celebration photos" },
    { name: "Why Royal Prince", href: "#why-us", desc: "Our 6 pillars of excellence" },
    { name: "Contact & Location", href: "#contact", desc: "Pala hub & Google map" },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 150);
  };

  return (
    <>
      {/* Top Haute Horlogerie Utility Bar - optimized for mobile wrapping */}
      <div className="bg-[#050807] text-[#CBD5D0] text-[10px] sm:text-[11px] py-1.5 sm:py-2 px-3 sm:px-4 border-b border-[#C5A869]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 sm:gap-4 truncate">
            <span className="flex items-center gap-1.5 text-[#C5A869] shrink-0">
              <MapPin className="w-3 h-3 text-[#C5A869]" />
              <span className="font-semibold tracking-[0.16em] sm:tracking-[0.22em] text-[#E8D5A3]">
                PALA | KOTTAYAM | KERALA
              </span>
            </span>
            <span className="hidden md:inline-block text-[#C5A869]/40">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-[#8A9C94]">
              <Clock className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>{COMPANY_INFO.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <a 
              href={COMPANY_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden xs:flex items-center gap-1 text-[#CBD5D0] hover:text-[#C5A869] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C5A869]" />
              <span className="hidden sm:inline font-medium">@royalprincecatering</span>
            </a>
            <span className="hidden xs:inline text-[#C5A869]/40">•</span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#25D366] hover:text-[#FDFBF7] transition-colors font-bold text-[10px] sm:text-[11px]"
            >
              <MessageCircle className="w-3 h-3 fill-[#25D366]" />
              <span>{COMPANY_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Ultra-Luxury Floating Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#070A09]/95 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.85)] py-2.5 sm:py-3 border-b border-[#C5A869]/25' 
            : 'bg-[#090E0C] py-3 sm:py-4 border-b border-[#C5A869]/15'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Authentic Brand Logo */}
            <a href="#" className="flex items-center focus:outline-none">
              <BrandLogo className="w-10 h-10 sm:w-12 sm:h-12" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center space-x-7">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-[#CBD5D0] hover:text-[#C5A869] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-gradient-to-r after:from-[#C5A869] after:to-[#E8D5A3] hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenQuoteModal}
                className="px-4 py-2.5 text-xs font-bold tracking-widest uppercase text-[#070A09] bg-gradient-to-r from-[#FFF1CD] via-[#DFCA96] to-[#C5A869] rounded hover:shadow-[0_0_20px_rgba(197,168,105,0.35)] hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                Instant Quotation
              </button>

              <button
                onClick={onOpenChatbot}
                className="px-3.5 py-2.5 text-xs font-semibold tracking-wider text-[#FDFBF7] bg-[#0D1412] hover:bg-[#121C18] border border-[#C5A869]/40 hover:border-[#C5A869] rounded flex items-center gap-2 transition-all duration-300 cursor-pointer group shadow-sm"
                title="Open WhatsApp Chat Assistant"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
                <span className="hidden md:inline font-bold text-[#E8D5A3]">7012230764</span>
              </button>
            </div>

            {/* Mobile Actions: Quote Pill & Big Tap Hamburger */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={onOpenQuoteModal}
                className="px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#070A09] bg-gradient-to-r from-[#DFCA96] to-[#C5A869] rounded shadow active:scale-95 transition-all"
              >
                Get Quote
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 text-[#FDFBF7] hover:text-[#C5A869] rounded-lg border border-[#C5A869]/30 bg-[#0D1412] active:scale-90 transition-all focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#C5A869]" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Full-Screen Mobile Navigation Overlay Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden fixed inset-0 top-[96px] z-50 bg-[#070A09]/98 backdrop-blur-2xl flex flex-col justify-between border-t border-[#C5A869]/30 overflow-y-auto animate-fadeIn pb-24">
            <div className="px-5 py-6 space-y-1">
              <div className="text-[10px] uppercase tracking-[0.3em] text-[#C5A869] font-bold pb-3 border-b border-[#C5A869]/20 flex items-center justify-between">
                <span>Royal Experience Navigation</span>
                <Sparkles className="w-3.5 h-3.5 text-[#C5A869]" />
              </div>

              <div className="divide-y divide-[#C5A869]/10 pt-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full py-3.5 text-left flex items-center justify-between group active:bg-[#0D1412] rounded-lg px-2 transition-all cursor-pointer"
                  >
                    <div>
                      <span className="block font-['Cinzel'] text-sm sm:text-base font-bold text-[#FDFBF7] group-hover:text-[#C5A869] transition-colors tracking-wide">
                        {link.name}
                      </span>
                      <span className="block text-[11px] text-[#8A9C94] mt-0.5">
                        {link.desc}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#C5A869]/60 group-hover:text-[#C5A869] group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Drawer Bottom CTAs */}
            <div className="px-5 py-4 border-t border-[#C5A869]/20 bg-[#050807] space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3.5 text-center text-xs font-extrabold uppercase tracking-widest text-[#070A09] bg-gradient-to-r from-[#FFF1CD] via-[#DFCA96] to-[#C5A869] rounded-xl shadow-lg active:scale-98 transition-all"
              >
                Request Custom Quotation
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="py-3 text-center text-xs font-bold uppercase tracking-wider text-[#CBD5D0] bg-[#0D1412] border border-[#C5A869]/30 rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A869]" />
                  <span>Call Direct</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Royal Prince Caters! I would like to make an enquiry.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] rounded-xl flex items-center justify-center gap-1.5 active:scale-95 transition-all shadow"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <div className="pt-1 text-center text-[10px] text-[#8A9C94]">
                <span>Puthoore Building, Pala Road, Kidangoor, Kottayam</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
