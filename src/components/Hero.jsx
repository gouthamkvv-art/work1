import React from 'react';
import { Crown, Sparkles, MapPin, ArrowRight, MessageCircle, Eye, ChevronDown, Award, Truck } from 'lucide-react';
import { COMPANY_INFO, FOUNDER_INFO } from '../data/siteData';

export default function Hero({ onOpenQuoteModal, onOpenChatbot }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 70;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppDirect = () => {
    const msg = encodeURIComponent("Hello Royal Prince Caters and Event Management! I would like to enquire about catering services for our upcoming celebration.");
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section className="relative min-h-[90vh] sm:min-h-[94vh] flex items-center justify-center bg-[#070A09] overflow-hidden text-[#FDFBF7] pt-8 pb-16 sm:py-20">
      {/* Background Cinematic Visual */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform motion-safe:animate-pulse transition-transform duration-10000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=85')`,
          filter: 'brightness(0.24) contrast(1.25) saturate(1.1)',
        }}
      />

      {/* Atmospheric Obsidian Noir & Champagne Glow Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070A09] via-[#09120F]/85 to-[#070A09]/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C5A869]/10 via-[#070A09]/70 to-[#070A09]" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-royal-pattern opacity-25 pointer-events-none" />

      {/* Watermark Crown Heraldic Insignia */}
      <div className="absolute -top-24 -right-24 text-[#C5A869]/5 pointer-events-none hidden lg:block">
        <Crown className="w-[640px] h-[640px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Editorial Subtitle Pill */}
        <div className="inline-flex items-center gap-1.5 sm:gap-2.5 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#0D1412]/90 border border-[#C5A869]/40 text-[#E8D5A3] text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-6 sm:mb-8 shadow-xl backdrop-blur-md max-w-full truncate">
          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C5A869] shrink-0" />
          <span className="truncate">{COMPANY_INFO.locationDisplay}</span>
        </div>

        {/* Heraldic Crown Accent */}
        <div className="mb-3 sm:mb-4 inline-flex items-center justify-center p-2.5 sm:p-3.5 rounded-full bg-gradient-to-b from-[#C5A869]/20 via-[#0D1412] to-transparent border border-[#C5A869]/50 shadow-[0_0_30px_rgba(197,168,105,0.15)]">
          <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-[#C5A869]" />
        </div>

        {/* Majestic Company Highlight */}
        <h1 className="flex flex-col items-center justify-center mb-5 sm:mb-6 w-full">
          <span className="font-['Cinzel'] text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.14em] sm:tracking-[0.24em] text-[#FDFBF7] uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            ROYAL PRINCE
          </span>
          <div className="mt-2 sm:mt-3 flex items-center justify-center gap-2 sm:gap-3 w-full max-w-2xl px-2">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A869]/60 hidden xs:block" />
            <span className="font-['Cinzel'] text-[11px] xs:text-sm sm:text-2xl md:text-3xl font-medium tracking-[0.18em] sm:tracking-[0.3em] text-[#E8D5A3] uppercase drop-shadow-md py-1">
              CATERS AND EVENT MANAGEMENT
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A869]/60 hidden xs:block" />
          </div>
        </h1>

        {/* Tagline */}
        <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl md:text-3xl italic text-[#E8D5A3] max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal px-2">
          &ldquo;{COMPANY_INFO.tagline}&rdquo;
        </p>

        {/* Action Buttons: Responsive Full-Width on Mobile */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full max-w-xl mb-10 sm:mb-14 px-2">
          {/* 1. Explore Our Services */}
          <button
            onClick={() => scrollTo('services')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#FFF1CD] via-[#DFCA96] to-[#C5A869] text-[#070A09] font-extrabold text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-[0_10px_30px_rgba(197,168,105,0.25)] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* 2. View Our Gallery */}
          <button
            onClick={() => scrollTo('gallery')}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#0D1412]/90 hover:bg-[#121C18] text-[#FDFBF7] border border-[#C5A869]/40 hover:border-[#C5A869] font-semibold text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-lg active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer backdrop-blur-sm"
          >
            <Eye className="w-4 h-4 text-[#C5A869]" />
            <span>View Gallery</span>
          </button>

          {/* 3. WhatsApp Enquiry (7012230764) */}
          <button
            onClick={handleWhatsAppDirect}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-2xl active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
            <span>WhatsApp</span>
          </button>
        </div>

        {/* Trust Badges Strip with Founder & Fleet */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-6 w-full max-w-4xl pt-6 sm:pt-8 border-t border-[#C5A869]/20 text-center">
          <div className="p-3 sm:p-4 rounded-xl bg-[#0D1412]/80 border border-[#C5A869]/20 backdrop-blur-xs">
            <div className="text-lg sm:text-2xl font-bold font-['Cinzel'] text-[#E8D5A3]">1,500+</div>
            <div className="text-[9px] sm:text-[11px] text-[#8A9C94] uppercase tracking-wider mt-0.5">Events Catered</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-[#0D1412]/80 border border-[#C5A869]/20 backdrop-blur-xs">
            <div className="text-lg sm:text-2xl font-bold font-['Cinzel'] text-[#E8D5A3] truncate">Johnykutty P.V.</div>
            <div className="text-[9px] sm:text-[11px] text-[#8A9C94] uppercase tracking-wider mt-0.5">Founder Leadership</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-[#0D1412]/80 border border-[#C5A869]/20 backdrop-blur-xs">
            <div className="text-lg sm:text-2xl font-bold font-['Cinzel'] text-[#E8D5A3]">Insulated Fleet</div>
            <div className="text-[9px] sm:text-[11px] text-[#8A9C94] uppercase tracking-wider mt-0.5">Zero-Delay Delivery</div>
          </div>
          <div className="p-3 sm:p-4 rounded-xl bg-[#0D1412]/80 border border-[#C5A869]/20 backdrop-blur-xs">
            <div className="text-lg sm:text-2xl font-bold font-['Cinzel'] text-[#E8D5A3]">4.9 ★</div>
            <div className="text-[9px] sm:text-[11px] text-[#8A9C94] uppercase tracking-wider mt-0.5">Client Love</div>
          </div>
        </div>

        {/* Scroll Indicator Down */}
        <button 
          onClick={() => scrollTo('about')} 
          aria-label="Scroll to About section"
          className="mt-8 sm:mt-12 text-[#C5A869]/60 hover:text-[#C5A869] animate-bounce transition-colors cursor-pointer"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </section>
  );
}
