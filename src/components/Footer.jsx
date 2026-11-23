import React from 'react';
import { Crown, MessageCircle, Phone, Mail, MapPin, Heart, ArrowUp, Truck, User } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import BrandLogo from './BrandLogo';
import { COMPANY_INFO, FOUNDER_INFO } from '../data/siteData';

export default function Footer({ onOpenQuoteModal, onOpenChatbot }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050807] text-[#FDFBF7] border-t-2 border-[#C5A869]/30 pt-14 pb-20 sm:pb-12 relative overflow-hidden">
      {/* Decorative Crown Backdrop */}
      <div className="absolute top-10 right-10 text-[#C5A869]/5 pointer-events-none">
        <Crown className="w-80 h-80" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#C5A869]/15">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <BrandLogo className="w-12 h-12 sm:w-14 sm:h-14" />
            </div>

            <p className="font-['Cormorant_Garamond'] text-lg italic text-[#E8D5A3] mb-3">
              &ldquo;{COMPANY_INFO.tagline}&rdquo;
            </p>

            <p className="text-xs text-[#8A9C94] leading-relaxed mb-4 font-normal">
              Award-standard catering, mobile insulated fleet logistics, and bespoke event management founded and managed by <strong className="text-[#FDFBF7] font-semibold">{FOUNDER_INFO.name}</strong> in Pala, Kottayam District, Kerala.
            </p>

            <div className="flex items-center gap-3">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0D1412] border border-[#C5A869]/40 hover:border-[#C5A869] hover:bg-[#C5A869] hover:text-[#070A09] text-[#C5A869] flex items-center justify-center transition-all shadow-md"
                title="Follow on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0D1412] border border-[#C5A869]/40 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white text-[#25D366] flex items-center justify-center transition-all shadow-md"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-[#25D366] hover:fill-white" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="w-9 h-9 rounded-full bg-[#0D1412] border border-[#C5A869]/40 hover:border-[#C5A869] hover:bg-[#C5A869] hover:text-[#070A09] text-[#C5A869] flex items-center justify-center transition-all shadow-md"
                title="Call Directly"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2">
            <h4 className="font-['Cinzel'] text-xs font-bold uppercase tracking-[0.2em] text-[#C5A869] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#CBD5D0]">
              <li><a href="#about" className="hover:text-[#C5A869] transition-colors">About Us</a></li>
              <li><a href="#founder" className="hover:text-[#C5A869] transition-colors">Johnykutty P.V. (Founder)</a></li>
              <li><a href="#fleet" className="hover:text-[#C5A869] transition-colors">Vehicle Fleet &amp; Logistics</a></li>
              <li><a href="#services" className="hover:text-[#C5A869] transition-colors">Catering Services</a></li>
              <li><a href="#food-collection" className="hover:text-[#C5A869] transition-colors">Signature Food</a></li>
              <li><a href="#gallery" className="hover:text-[#C5A869] transition-colors">Event Gallery</a></li>
              <li><a href="#contact" className="hover:text-[#C5A869] transition-colors">Contact &amp; Map</a></li>
            </ul>
          </div>

          {/* Catering Services List */}
          <div className="lg:col-span-3">
            <h4 className="font-['Cinzel'] text-xs font-bold uppercase tracking-[0.2em] text-[#C5A869] mb-4">
              Catering Offerings
            </h4>
            <ul className="space-y-2 text-xs text-[#CBD5D0]">
              <li><a href="#services" className="hover:text-[#C5A869] transition-colors">Grand Wedding Banquets</a></li>
              <li><a href="#services" className="hover:text-[#C5A869] transition-colors">Authentic Kerala Sadhya (28-dish)</a></li>
              <li><a href="#services" className="hover:text-[#C5A869] transition-colors">Syrian Christian Feasts &amp; Beef Roast</a></li>
              <li><a href="#services" className="hover:text-[#C5A869] transition-colors">Royal Dum Biriyani (Dum Kaima)</a></li>
              <li><a href="#services" className="hover:text-[#C5A869] transition-colors">Live Appam, Dosa &amp; Grill Stations</a></li>
              <li><a href="#services" className="hover:text-[#C5A869] transition-colors">Stage Decor &amp; Floral Arrangements</a></li>
            </ul>
          </div>

          {/* Location & Quick Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-['Cinzel'] text-xs font-bold uppercase tracking-[0.2em] text-[#C5A869] mb-4">
              Pala Hub &amp; Enquiries
            </h4>
            <div className="space-y-3 text-xs text-[#CBD5D0]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A869] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Puthoore Building, Opp. Rasam Restaurant, Pala Road, Kattachira, Kidangoor, Kottayam – 686572
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A869] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`} className="hover:text-[#C5A869] font-bold text-[#E8D5A3]">
                  {COMPANY_INFO.phonePrimary}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href={`https://wa.me/${COMPANY_INFO.whatsappNumber}`} className="hover:text-[#25D366]">
                  WhatsApp: +91 70122 30764
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuoteModal}
                  className="w-full py-2.5 bg-[#0D1412] hover:bg-[#C5A869] text-[#E8D5A3] hover:text-[#070A09] border border-[#C5A869]/50 rounded text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Request A Quotation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location Indicator */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8A9C94] gap-4">
          <div className="text-center sm:text-left">
            <p>
              &copy; {currentYear} <strong className="text-[#FDFBF7]">ROYAL PRINCE CATERS AND EVENT MANAGEMENT</strong>. All Rights Reserved.
            </p>
            <p className="text-[11px] text-[#8A9C94]/80 mt-0.5">
              Founder &amp; MD: Johnykutty P.V. • Pala • Kidangoor • Kottayam • All Kerala.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#C5A869] hover:text-[#FDFBF7] transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
