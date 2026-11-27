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
    <footer className="bg-[#101010] text-[#F3E8D0] border-t border-[#C6A15B]/30 pt-14 pb-20 sm:pb-12 relative overflow-hidden">
      {/* Decorative Crown Backdrop */}
      <div className="absolute top-10 right-10 text-[#C6A15B]/5 pointer-events-none">
        <Crown className="w-80 h-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#C6A15B]/20">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <button 
              onClick={() => handleNav('home')}
              className="mb-4 text-left cursor-pointer focus:outline-none"
            >
              <BrandLogo className="w-11 h-11 sm:w-12 sm:h-12" lightVariant={true} />
            </button>

            <p className="font-['Cormorant_Garamond'] text-lg italic text-[#DFBE6F] mb-3">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </p>

            <p className="text-xs text-[#F3E8D0]/70 leading-relaxed mb-5">
              Premier wedding catering, temperature-controlled fleet logistics, and bespoke event management founded and directed by <strong className="text-[#FAF7F0] font-semibold">{FOUNDER_INFO.name}</strong> in Pala, Kottayam District, Kerala.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#292521] border border-[#C6A15B]/40 hover:border-[#DFBE6F] hover:bg-[#C6A15B] hover:text-[#101010] text-[#DFBE6F] flex items-center justify-center transition-all shadow-sm"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#292521] border border-[#10B981]/50 hover:border-[#10B981] hover:bg-[#10B981] hover:text-white text-[#34D399] flex items-center justify-center transition-all shadow-sm"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-[#34D399] hover:fill-white" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="w-9 h-9 rounded-full bg-[#292521] border border-[#C6A15B]/40 hover:border-[#DFBE6F] hover:bg-[#C6A15B] hover:text-[#101010] text-[#DFBE6F] flex items-center justify-center transition-all shadow-sm"
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
            <ul className="space-y-2 text-xs text-[#F3E8D0]/80">
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
            <ul className="space-y-2 text-xs text-[#F3E8D0]/80">
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
            <div className="space-y-3 text-xs text-[#F3E8D0]/85">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Puthoore Building, Opp. Rasam Restaurant, Pala Road, Kidangoor, Kottayam – 686572
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-[#DFBE6F] font-bold text-[#FAF7F0]">
                  {COMPANY_INFO.phonePrimary}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#10B981] shrink-0" />
                <a href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`} className="hover:text-[#34D399] font-medium">
                  WhatsApp: +91 70122 30764
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('contact')}
                  className="btn-royal-gold w-full py-2.5 rounded-xl text-[#101010] text-xs uppercase tracking-wider shadow-gold-button cursor-pointer"
                >
                  Request A Quotation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location Indicator */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F3E8D0]/60 gap-4">
          <div className="text-center sm:text-left">
            <p>
              &copy; {currentYear} <strong className="text-[#FAF7F0]">ROYAL PRINCE CATERS AND EVENT MANAGEMENT</strong>. All Rights Reserved.
            </p>
            <p className="text-[11px] text-[#F3E8D0]/50 mt-0.5">
              Founder &amp; MD: Johnykutty P.V. • Pala • Kottayam District • All Kerala.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#DFBE6F] hover:text-[#FAF7F0] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C6A15B]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
