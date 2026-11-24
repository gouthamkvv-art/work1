import React from 'react';
import { Crown, Sparkles, MapPin, ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function Hero({ onNavigate, onOpenQuoteModal, onOpenChatbot }) {
  const handleWhatsAppDirect = () => {
    const msg = encodeURIComponent("Hello Royal Prince Caters and Event Management! I would like to enquire about catering services for our upcoming celebration.");
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-center justify-center bg-[#0B1325] overflow-hidden text-white pt-10 pb-16 sm:py-20">
      {/* Background Cinematic Visual */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=85')`,
          filter: 'brightness(0.28) contrast(1.15) saturate(1.1)',
        }}
      />

      {/* Atmospheric Royal Navy & Golden Amber Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1325] via-[#0B1325]/80 to-[#0B1325]/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C59A3F]/15 via-transparent to-[#0B1325]/95" />
      
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-royal-pattern opacity-10 pointer-events-none" />

      {/* Decorative Crown Watermark */}
      <div className="absolute -top-16 -right-16 text-[#C59A3F]/5 pointer-events-none hidden lg:block">
        <Crown className="w-[500px] h-[500px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Location Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-[#C59A3F]/40 text-[#DFBE6F] text-[11px] font-semibold tracking-[0.25em] uppercase mb-6 backdrop-blur-md shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-[#C59A3F]" />
          <span>{COMPANY_INFO.locationDisplay}</span>
        </div>

        {/* Heraldic Crown Accent */}
        <div className="mb-4 inline-flex items-center justify-center p-2.5 rounded-full bg-[#C59A3F]/15 border border-[#C59A3F]/50 shadow-[0_0_25px_rgba(197,154,63,0.25)]">
          <Crown className="w-6 h-6 text-[#DFBE6F]" />
        </div>

        {/* Main Title */}
        <h1 className="flex flex-col items-center justify-center mb-5 w-full">
          <span className="font-['Cinzel'] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.16em] sm:tracking-[0.22em] text-[#FFFFFF] uppercase drop-shadow-md">
            ROYAL PRINCE
          </span>
          <div className="mt-2.5 flex items-center justify-center gap-3 w-full max-w-xl px-2">
            <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C59A3F]/70" />
            <span className="font-['Cinzel'] text-xs sm:text-lg md:text-xl font-medium tracking-[0.22em] text-[#DFBE6F] uppercase">
              CATERS &amp; EVENT MANAGEMENT
            </span>
            <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C59A3F]/70" />
          </div>
        </h1>

        {/* Tagline */}
        <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl md:text-3xl italic text-[#E2E8F0] max-w-2xl mx-auto mb-8 leading-relaxed font-light px-2">
          &ldquo;{COMPANY_INFO.tagline}&rdquo;
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-lg mb-10 sm:mb-12 px-2">
          {/* Primary: Jump to Services Screen */}
          <button
            onClick={() => onNavigate ? onNavigate('services') : null}
            className="w-full sm:w-auto px-7 py-3.5 bg-gold-gradient text-[#0F172A] font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-[0_8px_25px_rgba(197,154,63,0.35)] hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 text-[#0F172A]" />
          </button>

          {/* Secondary: Jump to Quotation Screen */}
          <button
            onClick={() => onNavigate ? onNavigate('contact') : onOpenQuoteModal()}
            className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/15 text-white border border-white/25 hover:border-[#DFBE6F] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl backdrop-blur-sm active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-[#DFBE6F]" />
            <span>Instant Quote</span>
          </button>

          {/* Tertiary: WhatsApp */}
          <button
            onClick={handleWhatsAppDirect}
            className="w-full sm:w-auto px-5 py-3.5 bg-[#10B981]/20 hover:bg-[#10B981]/30 text-[#34D399] border border-[#10B981]/50 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl backdrop-blur-sm active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-[#10B981]" />
            <span>WhatsApp</span>
          </button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-6 border-t border-white/10">
          {COMPANY_INFO.stats.map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xs rounded-xl p-3 sm:p-4 border border-white/10 text-center">
              <span className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#DFBE6F] block">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs text-[#94A3B8] uppercase tracking-wider font-medium mt-0.5 block">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
