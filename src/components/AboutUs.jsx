import React from 'react';
import { Crown, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake, Award, Truck, MessageCircle } from 'lucide-react';
import { COMPANY_INFO, FOUNDER_INFO } from '../data/siteData';

export default function AboutUs({ onOpenQuoteModal, onNavigate }) {
  const handleTalkToFounder = () => {
    const text = encodeURIComponent(
      `Hello Royal Prince Caters! I would like to consult with Managing Director Johnykutty P.V. regarding catering and arrangements for our upcoming celebration.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  const corePillars = [
    {
      icon: Award,
      title: "Generational Heritage Taste",
      desc: "Authentic Central Travancore flavors using stone-ground spices, cold-pressed oils, and fresh farm ingredients."
    },
    {
      icon: Crown,
      title: "Direct Founder Supervision",
      desc: "Johnykutty P.V. personally reviews every menu, portion calculation, and banquet execution with meticulous care."
    },
    {
      icon: Truck,
      title: "Insulated Thermal Fleet",
      desc: "Our private fleet of temperature-controlled logistics vans locks in kitchen-fresh steam anywhere in Kerala."
    },
    {
      icon: ShieldCheck,
      title: "Spotless Hygiene & Etiquette",
      desc: "Sanitized commercial preparation and courteous uniformed stewards trained in classical banquet etiquette."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF7F0] text-[#292521] relative overflow-hidden border-b border-[#C6A15B]/30">
      {/* Subtle Luxury Pattern */}
      <div className="absolute inset-0 bg-royal-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8D0] border border-[#C6A15B]/40 text-[#9E7628] text-[11px] font-bold tracking-[0.25em] uppercase mb-3 shadow-xs">
            <Crown className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Our Heritage &amp; Leadership</span>
          </div>

          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold text-[#101010] tracking-tight mb-3">
            {COMPANY_INFO.aboutHeading}
          </h2>
          <div className="w-20 h-1 bg-[#C6A15B] mx-auto mb-4 rounded-full" />
          
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl italic text-[#292521]/80 max-w-2xl mx-auto">
            &ldquo;Rooted in Pala, Central Travancore—where hospitality is sacred and every guest is treated like royalty.&rdquo;
          </p>
        </div>

        {/* Unified 2-Column Story: Founder & Heritage Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Founder Portrait with Luxury Gold Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#FAF7F0] rounded-2xl overflow-hidden border border-[#C6A15B]/40 shadow-royal group">
              <div className="relative h-80 sm:h-96 md:h-[420px] overflow-hidden">
                <img
                  src={FOUNDER_INFO.image}
                  alt={`${FOUNDER_INFO.name} - Founder of Royal Prince Caters`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/85 via-black/20 to-transparent" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#292521]/95 backdrop-blur-md border border-[#C6A15B]/50 shadow-lg text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] tracking-wider text-[#DFBE6F] uppercase font-bold block">
                        Founder &amp; Managing Director
                      </span>
                      <h3 className="font-['Cinzel'] text-lg sm:text-xl font-bold text-[#FAF7F0]">
                        {FOUNDER_INFO.name}
                      </h3>
                      <p className="text-xs text-[#F3E8D0]/80 mt-0.5">
                        Pala, Kottayam District, Kerala
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#101010] border border-[#C6A15B]/50 flex items-center justify-center shrink-0">
                      <Crown className="w-5 h-5 text-[#DFBE6F]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Founder's Direct Quote */}
              <div className="p-5 sm:p-6 bg-[#F3E8D0] border-t border-[#C6A15B]/30">
                <p className="font-['Cormorant_Garamond'] text-sm sm:text-base italic text-[#292521] leading-relaxed">
                  &ldquo;{FOUNDER_INFO.quote}&rdquo;
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#9E7628]">
                    25+ Years of Dedicated Service
                  </span>
                  <button
                    onClick={handleTalkToFounder}
                    className="text-xs font-bold text-[#101010] hover:text-[#9E7628] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Speak with Director</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & 4 Core Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#101010] mb-3">
                Over Two Decades of Culinary Distinction in Kerala
              </h3>
              <p className="text-sm sm:text-base text-[#292521]/85 leading-relaxed mb-4">
                Founded by <strong className="text-[#101010]">Johnykutty P.V.</strong>, Royal Prince Caters and Event Management has grown into one of Central Travancore’s most trusted catering institutions. From grand multi-course wedding feasts and authentic 28-dish Kerala Sadhyas on plantain leaves, to live interactive cooking stations and bespoke event stage decor, our focus is uncompromising perfection.
              </p>
              <p className="text-sm sm:text-base text-[#292521]/85 leading-relaxed">
                We operate our own dedicated fleet of temperature-insulated vehicles dispatched straight from Pala, guaranteeing every meal arrives steaming hot, impeccably fresh, and right on schedule anywhere across Kottayam, Ernakulam, and all of Kerala.
              </p>
            </div>

            {/* 4 Pillars Grid (Champagne #F3E8D0 Cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {corePillars.map((pillar, i) => {
                const IconComponent = pillar.icon;
                return (
                  <div 
                    key={i} 
                    className="p-4 rounded-xl bg-[#F3E8D0]/80 border border-[#C6A15B]/35 shadow-xs hover:border-[#C6A15B] hover:shadow-royal transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#FAF7F0] border border-[#C6A15B]/40 flex items-center justify-center mb-2.5">
                      <IconComponent className="w-4.5 h-4.5 text-[#9E7628]" />
                    </div>
                    <h4 className="font-['Cinzel'] text-sm font-bold text-[#101010] mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#292521]/80 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Action Strip */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onNavigate ? onNavigate('services') : onOpenQuoteModal()}
                className="btn-royal-gold px-6 py-3 rounded-xl text-xs uppercase tracking-wider shadow-gold-button flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Catering Services</span>
                <Sparkles className="w-4 h-4 text-[#101010]" />
              </button>
              <a
                href={`tel:${COMPANY_INFO.phonePrimary}`}
                className="text-xs font-semibold text-[#292521]/80 hover:text-[#101010] flex items-center gap-1.5 transition-colors"
              >
                <span>Direct Inquiry:</span>
                <span className="font-bold text-[#101010]">{COMPANY_INFO.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
