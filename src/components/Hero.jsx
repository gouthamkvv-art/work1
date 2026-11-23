import React from 'react';
import { Crown, Sparkles, MapPin, ArrowRight, MessageCircle, Eye, ChevronDown, Award, Truck } from 'lucide-react';
import { COMPANY_INFO, FOUNDER_INFO } from '../data/siteData';

export default function Hero({ onOpenQuoteModal, onOpenChatbot }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppDirect = () => {
    const msg = encodeURIComponent("Hello Royal Prince Caters and Event Management! I would like to enquire about catering services for our upcoming celebration.");
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section className="relative min-h-[94vh] flex items-center justify-center bg-[#070A09] overflow-hidden text-[#FDFBF7]">
      {/* Background Cinematic Visual with Ultra-Luxury Foreign Editorial Grading */}
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
      
      {/* Delicate Gold Geometric Pattern */}
      <div className="absolute inset-0 bg-royal-pattern opacity-25 pointer-events-none" />

      {/* Watermark Crown Heraldic Insignia */}
      <div className="absolute -top-24 -right-24 text-[#C5A869]/5 pointer-events-none hidden lg:block">
        <Crown className="w-[640px] h-[640px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        {/* Editorial Subtitle Pill */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#0D1412]/90 border border-[#C5A869]/40 text-[#E8D5A3] text-xs font-semibold tracking-[0.3em] uppercase mb-8 shadow-2xl backdrop-blur-md">
          <MapPin className="w-3.5 h-3.5 text-[#C5A869]" />
          <span>{COMPANY_INFO.locationDisplay}</span>
        </div>

        {/* Official Brand Crest Emblem */}
        <div className="mb-6 inline-flex items-center justify-center p-1.5 rounded-full bg-gradient-to-b from-[#C5A869]/40 via-[#0D1412] to-transparent border border-[#C5A869]/60 shadow-[0_0_35px_rgba(197,168,105,0.25)] hover:scale-105 transition-transform duration-300">
          <img
            src="/logo.png"
            alt="Royal Prince Catering Official Emblem"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-contain filter drop-shadow-xl"
          />
        </div>

        {/* Majestic Company Highlight */}
        <h1 className="flex flex-col items-center justify-center mb-6">
          <span className="font-['Cinzel'] text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.24em] text-[#FDFBF7] uppercase drop-shadow-[0_12px_30px_rgba(0,0,0,0.9)]">
            ROYAL PRINCE
          </span>
          <div className="mt-3 flex items-center justify-center gap-3 w-full max-w-2xl">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C5A869]/60" />
            <span className="font-['Cinzel'] text-base sm:text-2xl md:text-3xl font-medium tracking-[0.3em] text-[#E8D5A3] uppercase drop-shadow-md py-1">
              CATERS AND EVENT MANAGEMENT
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C5A869]/60" />
          </div>
        </h1>

        {/* Tagline */}
        <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl md:text-3xl italic text-[#E8D5A3] max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
          &ldquo;{COMPANY_INFO.tagline}&rdquo;
        </p>

        {/* Three Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 w-full max-w-2xl mb-14">
          {/* 1. Explore Our Services */}
          <button
            onClick={() => scrollTo('services')}
            className="px-7 sm:px-8 py-4 bg-gradient-to-r from-[#FFF1CD] via-[#DFCA96] to-[#C5A869] text-[#070A09] font-extrabold text-xs sm:text-sm uppercase tracking-widest rounded shadow-[0_10px_30px_rgba(197,168,105,0.25)] hover:shadow-[0_15px_40px_rgba(197,168,105,0.4)] hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <span>Explore Our Services</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* 2. View Our Gallery */}
          <button
            onClick={() => scrollTo('gallery')}
            className="px-7 sm:px-8 py-4 bg-[#0D1412]/90 hover:bg-[#121C18] text-[#FDFBF7] border border-[#C5A869]/40 hover:border-[#C5A869] font-semibold text-xs sm:text-sm uppercase tracking-widest rounded shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer backdrop-blur-sm"
          >
            <Eye className="w-4 h-4 text-[#C5A869]" />
            <span>View Our Gallery</span>
          </button>

          {/* 3. WhatsApp Enquiry (7012230764) */}
          <button
            onClick={handleWhatsAppDirect}
            className="px-7 sm:px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs sm:text-sm uppercase tracking-widest rounded shadow-2xl hover:shadow-[#25D366]/40 hover:scale-105 transition-all duration-300 flex items-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
            <span>WhatsApp Enquiry</span>
          </button>
        </div>

        {/* Trust Badges Strip with Founder & Fleet */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl pt-8 border-t border-[#C5A869]/20 text-center">
          <div className="p-4 rounded-xl bg-[#0D1412]/80 border border-[#C5A869]/20 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl font-bold font-['Cinzel'] text-[#E8D5A3]">1,500+</div>
            <div className="text-[10px] sm:text-[11px] text-[#8A9C94] uppercase tracking-wider mt-0.5">Events Catered</div>
          </div>
          <div className="p-4 rounded-xl bg-[#0D1412]/80 border border-[#C5A869]/20 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl font-bold font-['Cinzel'] text-[#E8D5A3]">Johnykutty P.V.</div>
            <div className="text-[10px] sm:text-[11px] text-[#8A9C94] uppercase tracking-wider mt-0.5">Founder Leadership</div>
          </div>
          <div className="p-4 rounded-xl bg-[#0D1412]/80 border border-[#C5A869]/20 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl font-bold font-['Cinzel'] text-[#E8D5A3]">Insulated Fleet</div>
            <div className="text-[10px] sm:text-[11px] text-[#8A9C94] uppercase tracking-wider mt-0.5">Zero-Delay Logistics</div>
          </div>
          <div className="p-4 rounded-xl bg-[#0D1412]/80 border border-[#C5A869]/20 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl font-bold font-['Cinzel'] text-[#E8D5A3]">4.9 ★</div>
            <div className="text-[10px] sm:text-[11px] text-[#8A9C94] uppercase tracking-wider mt-0.5">Client Rating</div>
          </div>
        </div>

        {/* Scroll Indicator Down */}
        <button 
          onClick={() => scrollTo('about')} 
          aria-label="Scroll to About section"
          className="mt-12 text-[#C5A869]/60 hover:text-[#C5A869] animate-bounce transition-colors cursor-pointer"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
