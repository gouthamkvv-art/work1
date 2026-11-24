import React from 'react';
import { Crown, MessageCircle, Phone, MapPin, ArrowUp } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import BrandLogo from './BrandLogo';
import { COMPANY_INFO, FOUNDER_INFO } from '../data/siteData';

export default function Footer({ onNavigate, onOpenQuoteModal, onOpenChatbot }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (screenId) => {
    if (onNavigate) {
      onNavigate(screenId);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1325] text-[#CBD5E1] border-t border-[#C59A3F]/30 pt-14 pb-20 sm:pb-12 relative overflow-hidden">
      {/* Decorative Crown Backdrop */}
      <div className="absolute top-10 right-10 text-white/5 pointer-events-none">
        <Crown className="w-80 h-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <button 
              onClick={() => handleNav('home')}
              className="mb-4 text-left cursor-pointer"
            >
              <BrandLogo className="w-11 h-11 sm:w-12 sm:h-12" lightVariant={true} />
            </button>

            <p className="font-['Cormorant_Garamond'] text-lg italic text-[#DFBE6F] mb-3">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </p>

            <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
              Premier wedding catering, temperature-controlled fleet logistics, and bespoke event management founded and directed by <strong className="text-white font-semibold">{FOUNDER_INFO.name}</strong> in Pala, Kottayam District, Kerala.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:border-[#DFBE6F] hover:bg-[#C59A3F] hover:text-[#0B1325] text-[#DFBE6F] flex items-center justify-center transition-all shadow-sm"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:border-[#10B981] hover:bg-[#10B981] hover:text-white text-[#34D399] flex items-center justify-center transition-all shadow-sm"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-[#34D399] hover:fill-white" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="w-9 h-9 rounded-full bg-white/10 border border-white/20 hover:border-[#DFBE6F] hover:bg-[#C59A3F] hover:text-[#0B1325] text-[#DFBE6F] flex items-center justify-center transition-all shadow-sm"
                title="Call Directly"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-['Cinzel'] text-xs font-bold uppercase tracking-[0.2em] text-[#DFBE6F] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#CBD5E1]">
              <li><button onClick={() => handleNav('home')} className="hover:text-[#DFBE6F] transition-colors cursor-pointer text-left">Home</button></li>
              <li><button onClick={() => handleNav('about')} className="hover:text-[#DFBE6F] transition-colors cursor-pointer text-left">Our Heritage</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-[#DFBE6F] transition-colors cursor-pointer text-left">Catering Services</button></li>
              <li><button onClick={() => handleNav('menu')} className="hover:text-[#DFBE6F] transition-colors cursor-pointer text-left">Signature Food</button></li>
              <li><button onClick={() => handleNav('gallery')} className="hover:text-[#DFBE6F] transition-colors cursor-pointer text-left">Event Gallery</button></li>
              <li><button onClick={() => handleNav('why-us')} className="hover:text-[#DFBE6F] transition-colors cursor-pointer text-left">Why Royal Prince</button></li>
              <li><button onClick={() => handleNav('reviews')} className="hover:text-[#DFBE6F] transition-colors cursor-pointer text-left">Testimonials</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-[#DFBE6F] transition-colors cursor-pointer text-left">Quotation &amp; Map</button></li>
            </ul>
          </div>

          {/* Catering Services List */}
          <div className="lg:col-span-3">
            <h4 className="font-['Cinzel'] text-xs font-bold uppercase tracking-[0.2em] text-[#DFBE6F] mb-4">
              Catering Offerings
            </h4>
            <ul className="space-y-2 text-xs text-[#CBD5E1]">
              <li><button onClick={() => handleNav('services')} className="hover:text-[#DFBE6F] transition-colors cursor-pointer text-left">Grand Wedding Banquets</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-[#DFBE6F] transition-colors cursor-pointer text-left">Authentic Kerala Sadhya (28-dish)</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-[#DFBE6F] transition-colors cursor-pointer text-left">Central Travancore Beef Roast</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-[#DFBE6F] transition-colors cursor-pointer text-left">Royal Dum Biriyani (Dum Kaima)</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-[#DFBE6F] transition-colors cursor-pointer text-left">Live Appam, Dosa &amp; Tawa Stalls</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-[#DFBE6F] transition-colors cursor-pointer text-left">Stage Decor &amp; Floral Design</button></li>
            </ul>
          </div>

          {/* Location & Quick Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-['Cinzel'] text-xs font-bold uppercase tracking-[0.2em] text-[#DFBE6F] mb-4">
              Pala Hub &amp; Enquiries
            </h4>
            <div className="space-y-3 text-xs text-[#CBD5E1]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C59A3F] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Puthoore Building, Opp. Rasam Restaurant, Pala Road, Kidangoor, Kottayam – 686572
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C59A3F] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-[#DFBE6F] font-bold text-white">
                  {COMPANY_INFO.phonePrimary}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#34D399] shrink-0" />
                <a href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`} className="hover:text-[#34D399]">
                  WhatsApp: +91 70122 30764
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('contact')}
                  className="w-full py-2.5 bg-gold-gradient text-[#0B1325] rounded-xl text-xs font-bold uppercase tracking-wider transition-all hover:brightness-105 shadow-md cursor-pointer"
                >
                  Request A Quotation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location Indicator */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-4">
          <div className="text-center sm:text-left">
            <p>
              &copy; {currentYear} <strong className="text-white">ROYAL PRINCE CATERS AND EVENT MANAGEMENT</strong>. All Rights Reserved.
            </p>
            <p className="text-[11px] text-[#64748B] mt-0.5">
              Founder &amp; MD: Johnykutty P.V. • Pala • Kottayam District • All Kerala.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#DFBE6F] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
