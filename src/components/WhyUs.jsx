import React from 'react';
import { Crown, Sparkles, ShieldCheck, HeartHandshake, Clock, Award, CheckCircle, Truck, ArrowRight } from 'lucide-react';
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
    <section id="why-us" className="py-16 sm:py-24 bg-white text-[#1E293B] relative overflow-hidden border-b border-[#EADFC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCF8EE] border border-[#C59A3F]/30 text-[#9E7628] text-[11px] font-bold tracking-[0.25em] uppercase mb-3 shadow-xs">
            <Crown className="w-3.5 h-3.5 text-[#C59A3F]" />
            <span>The Royal Standard</span>
          </div>
          
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] mb-3">
            Why Choose Royal Prince?
          </h2>
          <div className="w-20 h-1 bg-[#C59A3F] mx-auto mb-4 rounded-full" />
          
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl italic text-[#526071] max-w-2xl mx-auto">
            On your most cherished celebration, there is no compromise. We bring flawless precision, sacred hospitality, and authentic flavors to every plate.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Crown;
            return (
              <div
                key={idx}
                className="bg-[#FBF9F5] rounded-2xl p-6 sm:p-7 border border-[#EADFC7] hover:border-[#C59A3F] shadow-xs hover:shadow-royal-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#EADFC7] flex items-center justify-center text-[#9E7628] group-hover:scale-110 group-hover:bg-[#FCF8EE] group-hover:border-[#C59A3F] transition-all duration-300 mb-5 shadow-xs">
                    <IconComp className="w-6 h-6 text-[#9E7628]" />
                  </div>

                  <h3 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#9E7628] transition-colors mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#526071] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#EADFC7] flex items-center gap-2 text-[11px] text-[#64748B]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#059669]" />
                  <span>Central Travancore Certified Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Booking Strip */}
        <div className="bg-[#FCF8EE] rounded-2xl border border-[#EADFC7] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#0F172A]">
              Reserve Your Celebration Date in Advance
            </h3>
            <p className="text-xs sm:text-sm text-[#526071] mt-0.5">
              Popular wedding dates across Kottayam District book up months ahead. Inquire today to guarantee your date.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate ? onNavigate('reviews') : null}
              className="px-5 py-3 rounded-xl bg-white border border-[#EADFC7] hover:border-[#C59A3F] text-[#0F172A] font-bold text-xs uppercase tracking-wider shadow-xs transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>See Reviews</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C59A3F]" />
            </button>
            <button
              onClick={() => onNavigate ? onNavigate('contact') : onOpenQuoteModal()}
              className="px-6 py-3 rounded-xl bg-gold-gradient text-[#0F172A] font-bold text-xs uppercase tracking-wider shadow-sm hover:brightness-105 active:scale-98 transition-all shrink-0 cursor-pointer flex items-center gap-2"
            >
              <span>Get Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
