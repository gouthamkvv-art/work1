import React from 'react';
import { Crown, Sparkles, ShieldCheck, UtensilsCrossed, HeartHandshake, Clock, Award, CheckCircle, Truck } from 'lucide-react';
import { WHY_CHOOSE_US, COMPANY_INFO } from '../data/siteData';

export default function WhyUs({ onOpenQuoteModal }) {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Award: Award,
    Truck: Truck,
    HeartHandshake: HeartHandshake,
    Clock: Clock,
    Sparkles: Sparkles
  };

  const romanNumerals = ["I", "II", "III", "IV", "V", "VI"];

  return (
    <section id="why-us" className="py-28 bg-[#090E0C] text-[#FDFBF7] relative overflow-hidden border-b border-[#C5A869]/20">
      {/* Background Motifs */}
      <div className="absolute inset-0 bg-royal-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A869]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1412] border border-[#C5A869]/40 text-[#E8D5A3] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4 shadow-sm">
            <Crown className="w-3.5 h-3.5 text-[#C5A869]" />
            <span>The Royal Prince Difference</span>
          </div>
          
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FDFBF7] mb-4">
            Why Choose Royal Prince?
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C5A869] mx-auto mb-6" />
          
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl italic text-[#CBD5D0] max-w-2xl mx-auto font-normal">
            We understand that on your wedding day or milestone anniversary, there is zero room for error. We treat your guests with the utmost reverence.
          </p>
        </div>

        {/* 6 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Crown;
            return (
              <div
                key={idx}
                className="bg-[#0D1412] rounded-xl p-8 border border-[#C5A869]/20 hover:border-[#C5A869] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.95)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Roman Numeral Backdrop Accent */}
                <span className="absolute top-4 right-4 font-['Cinzel'] text-4xl font-extrabold text-[#C5A869]/10 select-none group-hover:text-[#C5A869]/25 transition-colors">
                  {romanNumerals[idx]}
                </span>

                <div>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#070A09] to-[#0D1412] border border-[#C5A869]/50 flex items-center justify-center text-[#C5A869] group-hover:scale-110 group-hover:bg-[#C5A869] group-hover:text-[#070A09] transition-all duration-300 mb-6 shadow-md">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <h3 className="font-['Cinzel'] text-lg font-bold text-[#FDFBF7] group-hover:text-[#E8D5A3] transition-colors mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#CBD5D0] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#C5A869]/15 flex items-center gap-2 text-[11px] text-[#8A9C94]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#C5A869]" />
                  <span>Verified Standard in Central Travancore</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Heritage Trust Strip */}
        <div className="bg-[#0D1412] rounded-xl border border-[#C5A869]/40 p-8 sm:p-10 text-center max-w-4xl mx-auto backdrop-blur-sm shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A869] font-bold block mb-1">
                Central Kerala Catering Guarantee
              </span>
              <p className="text-sm sm:text-base text-[#FDFBF7] font-medium">
                Punctual thermal fleet delivery, spotless hygiene standards &amp; founder supervision.
              </p>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="px-7 py-3.5 bg-gradient-to-r from-[#FFF1CD] via-[#DFCA96] to-[#C5A869] text-[#070A09] text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 shadow hover:scale-105 shrink-0 cursor-pointer"
            >
              Book For Your Date
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
