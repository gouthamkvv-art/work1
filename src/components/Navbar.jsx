import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, MapPin, Clock, Calendar, Truck, User } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import BrandLogo from './BrandLogo';
import { COMPANY_INFO } from '../data/siteData';

export default function Navbar({ onOpenQuoteModal, onOpenChatbot }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "The Founder", href: "#founder" },
    { name: "Vehicle Fleet", href: "#fleet" },
    { name: "Gastronomy", href: "#food-collection" },
    { name: "Gallery", href: "#gallery" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Haute Horlogerie Utility Bar */}
      <div className="bg-[#050807] text-[#CBD5D0] text-[11px] py-2 px-4 border-b border-[#C5A869]/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-[#C5A869]">
              <MapPin className="w-3.5 h-3.5 text-[#C5A869]" />
              <span className="font-semibold tracking-[0.22em] text-[#E8D5A3]">{COMPANY_INFO.locationDisplay}</span>
            </span>
            <span className="hidden md:inline-block text-[#C5A869]/40">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-[#8A9C94]">
              <Clock className="w-3.5 h-3.5 text-[#C5A869]" />
              <span>{COMPANY_INFO.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={COMPANY_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#CBD5D0] hover:text-[#C5A869] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C5A869]" />
              <span className="hidden sm:inline font-medium tracking-wide">@royalprincecatering</span>
            </a>
            <span className="text-[#C5A869]/40">•</span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#E8D5A3] hover:text-[#FDFBF7] transition-colors font-bold tracking-wide"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
              <span>WhatsApp: {COMPANY_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Ultra-Luxury Floating Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#070A09]/95 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.8)] py-3 border-b border-[#C5A869]/25' 
            : 'bg-[#090E0C] py-4 border-b border-[#C5A869]/15'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Authentic Brand Logo */}
            <a href="#" className="flex items-center focus:outline-none">
              <BrandLogo className="w-12 h-12 sm:w-14 sm:h-14" />
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

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={onOpenQuoteModal}
                className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#070A09] bg-[#C5A869] rounded"
              >
                Quote
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#FDFBF7] hover:text-[#C5A869] focus:outline-none transition-colors"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#070A09] border-b border-[#C5A869]/30 px-6 py-6 animate-fadeIn shadow-2xl">
            <div className="flex flex-col space-y-4">
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#C5A869] font-bold pb-2 border-b border-[#C5A869]/20">
                Menu Directory
              </div>
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm font-semibold uppercase tracking-wider text-[#CBD5D0] hover:text-[#C5A869] py-1 transition-colors cursor-pointer flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[#C5A869] text-xs">→</span>
                </button>
              ))}

              <div className="pt-4 border-t border-[#C5A869]/20 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full py-3 text-center text-xs font-bold uppercase tracking-widest text-[#070A09] bg-gradient-to-r from-[#DFCA96] to-[#C5A869] rounded shadow-md"
                >
                  Request A Quotation
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Royal Prince Caters! I would like to make an enquiry.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba59] rounded flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>WhatsApp: {COMPANY_INFO.phonePrimary}</span>
                </a>

                <div className="pt-2 text-center text-[11px] text-[#8A9C94]">
                  <span>Puthoore Building, Pala Road, Kidangoor, Kottayam</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
