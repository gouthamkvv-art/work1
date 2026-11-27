import React from 'react';
import { Crown, Sparkles, Award, ShieldCheck, HeartHandshake, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { FOUNDER_INFO, COMPANY_INFO } from '../data/siteData';

export default function Founder({ onOpenChatbot }) {
  const handleTalkToFounder = () => {
    const text = encodeURIComponent(
      `Hello Royal Prince Caters! I would like to consult with Managing Director Johnykutty P.V. regarding catering and arrangements for our upcoming celebration.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="founder" className="py-16 sm:py-24 bg-[#101010] text-[#FAF7F0] relative overflow-hidden border-b border-[#C6A15B]/30">
      {/* Ambient Lighting & Royal Grid Background */}
      <div className="absolute inset-0 bg-royal-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#292521] border border-[#C6A15B]/40 text-[#DFBE6F] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4 shadow-inner">
            <Crown className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Visionary Leadership</span>
          </div>
          
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F0] mb-3 sm:mb-4">
            Meet the Founder &amp; Director
          </h2>
          <div className="w-20 h-1 bg-[#C6A15B] mx-auto mb-4 sm:mb-5 rounded-full" />
          
          <p className="font-['Cormorant_Garamond'] text-base sm:text-xl italic text-[#F3E8D0]/80 max-w-2xl mx-auto font-normal">
            &ldquo;A great feast is not created in a boardroom; it is born from deep passion, pristine ingredients, and genuine respect for every guest.&rdquo;
          </p>
        </div>

        {/* Editorial Magazine Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Founder Portrait with Luxury Gold Hairline Matting */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#C6A15B]/50 shadow-2xl z-10 group">
              <img
                src={FOUNDER_INFO.image}
                alt={`${FOUNDER_INFO.name} - Founder of Royal Prince Caters`}
                className="w-full h-80 sm:h-96 md:h-[500px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-black/30" />

              {/* Bottom Inset Tag */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-5 rounded-xl bg-[#292521]/95 backdrop-blur-md border border-[#C6A15B]/50 shadow-xl">
                <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#DFBE6F] uppercase font-bold block mb-0.5">
                  Founder &amp; Managing Director
                </span>
                <h3 className="font-['Cinzel'] text-lg sm:text-2xl font-bold text-[#FAF7F0]">
                  {FOUNDER_INFO.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-[#F3E8D0]/80 mt-0.5 sm:mt-1">
                  Pala, Kottayam District, Kerala
                </p>
              </div>
            </div>

            {/* Experience Medallion */}
            <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 bg-[#292521] border-2 border-[#C6A15B] text-[#C6A15B] rounded-full w-20 h-20 sm:w-24 sm:h-24 flex flex-col items-center justify-center p-2 text-center shadow-2xl z-20">
              <span className="font-['Cinzel'] font-black text-lg sm:text-xl leading-none text-[#DFBE6F]">25+</span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-semibold text-[#FAF7F0] mt-0.5">Years Craft</span>
            </div>
          </div>

          {/* Founder Philosophy & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-5 sm:mb-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#DFBE6F] font-bold block mb-2">
                Executive Profile
              </span>
              <h3 className="font-['Cinzel'] text-xl sm:text-3xl md:text-4xl font-bold text-[#FAF7F0] leading-tight mb-3 sm:mb-4">
                The Heritage &amp; Vision of Johnykutty P.V.
              </h3>
              <p className="text-sm sm:text-base text-[#F3E8D0]/80 leading-relaxed font-normal mb-4 sm:mb-6">
                {FOUNDER_INFO.bio}
              </p>
            </div>

            {/* Large Luxury Quote Callout */}
            <blockquote className="bg-[#292521] border-l-2 border-[#C6A15B] p-4 sm:p-6 rounded-r-xl mb-6 sm:mb-8 shadow-xl relative border-y border-r border-[#C6A15B]/20">
              <p className="font-['Cormorant_Garamond'] text-base sm:text-xl italic text-[#FAF7F0] leading-relaxed">
                &ldquo;{FOUNDER_INFO.quote}&rdquo;
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-[#F3E8D0]/70">
                <span className="font-['Cinzel'] font-semibold text-[#DFBE6F]">— Johnykutty P.V.</span>
                <span className="text-[10px] tracking-widest text-[#C6A15B] uppercase">Managing Director</span>
              </div>
            </blockquote>

            {/* Core Leadership Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {FOUNDER_INFO.pillars.map((pillar, idx) => (
                <div key={idx} className="bg-[#292521] p-4 rounded-xl border border-[#C6A15B]/25 hover:border-[#C6A15B] transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#101010] border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B] mb-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                  </div>
                  <h4 className="font-['Cinzel'] text-xs font-bold uppercase tracking-wider text-[#FAF7F0] mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] text-[#F3E8D0]/75 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Connect Action */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={handleTalkToFounder}
                className="btn-royal-gold w-full sm:w-auto px-7 py-3.5 text-[#101010] font-bold text-xs uppercase tracking-widest rounded-xl shadow-gold-button flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#101010]" />
                <span>Consult with Johnykutty P.V.</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#292521] hover:bg-[#3D3732] text-[#FAF7F0] border border-[#C6A15B]/40 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <span>Direct Line: {COMPANY_INFO.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
