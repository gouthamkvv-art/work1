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
    <section id="founder" className="py-28 bg-[#070A09] text-[#FDFBF7] relative overflow-hidden border-b border-[#C5A869]/20">
      {/* Ambient Lighting & Royal Grid Background */}
      <div className="absolute inset-0 bg-royal-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#C5A869]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#0E2921]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1412] border border-[#C5A869]/40 text-[#E8D5A3] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4 shadow-inner">
            <Crown className="w-3.5 h-3.5 text-[#C5A869]" />
            <span>Visionary Leadership</span>
          </div>
          
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FDFBF7] mb-4">
            Meet the Founder &amp; Director
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C5A869] mx-auto mb-5" />
          
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl italic text-[#E8D5A3] max-w-2xl mx-auto font-normal">
            &ldquo;A great feast is not created in a boardroom; it is born from deep passion, pristine ingredients, and genuine respect for every guest.&rdquo;
          </p>
        </div>

        {/* Editorial Magazine Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Founder Portrait with Luxury Gold Hairline Matting */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border-2 border-[#C5A869]/50 shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 group">
              <img
                src={FOUNDER_INFO.image}
                alt={`${FOUNDER_INFO.name} - Founder of Royal Prince Caters`}
                className="w-full h-[520px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A09] via-transparent to-black/30" />

              {/* Bottom Inset Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#0D1412]/95 backdrop-blur-md border border-[#C5A869]/40 shadow-xl">
                <span className="text-[10px] tracking-[0.25em] text-[#C5A869] uppercase font-bold block mb-0.5">
                  Founder &amp; Managing Director
                </span>
                <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#FDFBF7]">
                  {FOUNDER_INFO.name}
                </h3>
                <p className="text-[11px] text-[#8A9C94] mt-1">
                  Pala, Kottayam District, Kerala
                </p>
              </div>
            </div>

            {/* Floating Experience Medallion */}
            <div className="absolute -top-5 -left-5 bg-[#0D1412] border-2 border-[#C5A869] text-[#C5A869] rounded-full w-24 h-24 flex flex-col items-center justify-center p-2 text-center shadow-2xl z-20 hidden sm:flex">
              <span className="font-['Cinzel'] font-black text-xl leading-none text-[#E8D5A3]">25+</span>
              <span className="text-[9px] uppercase tracking-wider font-semibold text-[#FDFBF7] mt-0.5">Years Craft</span>
            </div>

            {/* Backing Gold Matting Geometry */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C5A869]/25 rounded-xl pointer-events-none -z-0" />
          </div>

          {/* Founder Philosophy & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.3em] text-[#C5A869] font-bold block mb-2">
                Executive Profile
              </span>
              <h3 className="font-['Cinzel'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#FDFBF7] leading-tight mb-4">
                The Heritage &amp; Vision of Johnykutty P.V.
              </h3>
              <p className="text-sm sm:text-base text-[#CBD5D0] leading-relaxed font-normal mb-6">
                {FOUNDER_INFO.bio}
              </p>
            </div>

            {/* Large Luxury Quote Callout */}
            <blockquote className="bg-[#0D1412] border-l-2 border-[#C5A869] p-6 rounded-r-xl mb-8 shadow-xl relative border-y border-r border-[#C5A869]/15">
              <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl italic text-[#E8D5A3] leading-relaxed">
                &ldquo;{FOUNDER_INFO.quote}&rdquo;
              </p>
              <div className="mt-3 flex items-center justify-between text-xs text-[#8A9C94]">
                <span className="font-['Cinzel'] font-semibold text-[#FDFBF7]">— Johnykutty P.V.</span>
                <span className="text-[10px] tracking-widest text-[#C5A869] uppercase">Managing Director</span>
              </div>
            </blockquote>

            {/* Core Leadership Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {FOUNDER_INFO.pillars.map((pillar, idx) => (
                <div key={idx} className="bg-[#0D1412] p-4 rounded-xl border border-[#C5A869]/20 hover:border-[#C5A869]/50 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-[#070A09] border border-[#C5A869]/40 flex items-center justify-center text-[#C5A869] mb-2.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-['Cinzel'] text-xs font-bold uppercase tracking-wider text-[#FDFBF7] mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-[11px] text-[#8A9C94] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Connect Action */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleTalkToFounder}
                className="px-7 py-3.5 bg-gradient-to-r from-[#FFF1CD] via-[#DFCA96] to-[#C5A869] text-[#070A09] font-extrabold text-xs uppercase tracking-widest rounded shadow-xl hover:shadow-[0_0_25px_rgba(197,168,105,0.35)] hover:scale-105 transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#070A09]" />
                <span>Consult with Johnykutty P.V.</span>
              </button>

              <a
                href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="px-6 py-3.5 bg-[#0D1412] hover:bg-[#121C18] text-[#FDFBF7] border border-[#C5A869]/40 rounded text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
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
