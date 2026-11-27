import React from 'react';
import { Crown, Sparkles, ShieldCheck, HeartHandshake, Clock, Award, CheckCircle, Truck, ArrowRight, Calendar } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/siteData';

export default function WhyUs({ onOpenQuoteModal, onNavigate }) {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Award: Award,
    Truck: Truck,
    HeartHandshake: HeartHandshake,
    Clock: Clock,
    Sparkles: Sparkles
  };

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#292521] text-[#FAF7F0] relative overflow-hidden border-b border-[#C6A15B]/30">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-royal-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101010] border border-[#C6A15B]/40 text-[#DFBE6F] text-[11px] font-bold tracking-[0.25em] uppercase mb-3 shadow-md">
            <Crown className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>The Royal Standard</span>
          </div>
          
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F0] mb-3">
            Why Choose Royal Prince?
          </h2>
          <div className="w-20 h-1 bg-[#C6A15B] mx-auto mb-4 rounded-full" />
          
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl italic text-[#F3E8D0]/80 max-w-2xl mx-auto">
            On your most cherished celebration, there is no compromise. We bring flawless precision, sacred hospitality, and authentic flavors to every plate.
          </p>
        </div>

        {/* 6 Value Cards Grid (Matte Black #101010 Cards on Dark Espresso Background) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Crown;
            return (
              <div
                key={idx}
                className="bg-[#101010] rounded-2xl p-6 sm:p-7 border border-[#C6A15B]/30 hover:border-[#C6A15B] shadow-lg hover:shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#292521] border border-[#C6A15B]/40 flex items-center justify-center text-[#DFBE6F] group-hover:scale-110 group-hover:border-[#C6A15B] transition-all duration-300 mb-5 shadow-xs">
                    <IconComp className="w-6 h-6 text-[#DFBE6F]" />
                  </div>

                  <h3 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#FAF7F0] group-hover:text-[#DFBE6F] transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F3E8D0]/75 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#C6A15B]/20 flex items-center gap-2 text-[11px] text-[#F3E8D0]/60">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>Central Travancore Certified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Booking Strip - Matte Black #101010 Card */}
        <div className="bg-[#101010] rounded-2xl border border-[#C6A15B]/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left shadow-xl">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#DFBE6F] block mb-1">
              Advance Event Scheduling
            </span>
            <h3 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#FAF7F0]">
              Reserve Your Celebration Date in Advance
            </h3>
            <p className="text-xs sm:text-sm text-[#F3E8D0]/75 mt-0.5">
              Popular wedding dates across Kottayam District book up months ahead. Inquire today to guarantee your date.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate ? onNavigate('reviews') : null}
              className="px-5 py-3 rounded-xl bg-[#292521] border border-[#C6A15B]/40 hover:border-[#C6A15B] text-[#F3E8D0] font-bold text-xs uppercase tracking-wider shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>See Reviews</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" />
            </button>
            <button
              onClick={() => onNavigate ? onNavigate('contact') : onOpenQuoteModal()}
              className="btn-royal-gold px-6 py-3 rounded-xl text-[#101010] font-bold text-xs uppercase tracking-wider shadow-gold-button shrink-0 cursor-pointer flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#101010]" />
              <span>Get Quotation</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
