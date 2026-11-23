import React from 'react';
import { Crown, Sparkles, CheckCircle2, ShieldCheck, Heart, Award, ArrowRight, Truck, User } from 'lucide-react';
import { COMPANY_INFO, FOUNDER_INFO } from '../data/siteData';

export default function AboutUs({ onOpenQuoteModal }) {
  const commitments = [
    {
      title: "Delicious Food & Authentic Taste",
      desc: "Honoring the legendary Central Travancore culinary heritage with hand-ground spices and time-tested recipes."
    },
    {
      title: "Founder-Supervised Quality",
      desc: "Managing Director Johnykutty P.V. personally ensures strict ingredient integrity, fresh meat selections, and taste perfection."
    },
    {
      title: "Professional Hospitality & Service",
      desc: "Courteous uniformed stewards and banquet captains trained in royal etiquette ensuring every guest feels celebrated."
    },
    {
      title: "Private Insulated Vehicle Fleet",
      desc: "Purpose-built thermal logistics vans ensuring piping hot feasts and fresh live counter delivery anywhere in Kerala."
    },
    {
      title: "Bespoke Event & Stage Styling",
      desc: "From royal buffet islands and copper chafers to floral stage backdrops and lighting, creating an atmosphere of true distinction."
    },
    {
      title: "100% Customer Satisfaction",
      desc: "Attentive coordination from menu tasting to post-event winding up, providing total peace of mind for the host family."
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-28 bg-[#090E0C] text-[#CBD5D0] relative overflow-hidden border-b border-[#C5A869]/20">
      {/* Decorative Subtle Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A869]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0E2921]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A869] font-semibold mb-3">
            <Crown className="w-4 h-4 text-[#C5A869]" />
            <span>The Royal Prince Legacy</span>
          </div>
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold text-[#FDFBF7] tracking-tight leading-tight mb-3 sm:mb-4">
            {COMPANY_INFO.aboutHeading}
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C5A869] mx-auto mb-4 sm:mb-6" />
          <p className="text-[#CBD5D0]/90 text-sm sm:text-lg leading-relaxed font-normal">
            Rooted in Pala, Central Travancore—a region celebrated for its regal hospitality and exquisite culinary culture—we craft celebrations that linger warmly in your guests&apos; memories.
          </p>
        </div>

        {/* Editorial Layout: Large Photograph Left, Company Narrative Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          {/* Left Column: Editorial Composition */}
          <div className="lg:col-span-6 relative pb-6 sm:pb-0">
            {/* Primary Large Image */}
            <div className="relative rounded-xl overflow-hidden border-2 border-[#C5A869]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-10 group">
              <img 
                src="https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80" 
                alt="Royal Prince Catering Banquet Presentation" 
                className="w-full h-72 sm:h-96 md:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070A09]/95 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#E8D5A3] font-bold">The Royal Prince Standard</span>
                <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl italic font-medium mt-0.5 sm:mt-1 text-[#FDFBF7]">
                  &ldquo;A feast crafted not just to satisfy hunger, but to honor your guests.&rdquo;
                </p>
                <span className="text-[11px] sm:text-xs text-[#8A9C94] mt-0.5 sm:mt-1 block">— Under the personal direction of Johnykutty P.V.</span>
              </div>
            </div>

            {/* Overlapping Secondary Card (Visible and beautifully scaled on mobile) */}
            <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-8 sm:-right-8 bg-[#0D1412] text-[#FDFBF7] p-4 sm:p-6 rounded-xl border border-[#C5A869]/50 shadow-2xl z-20 sm:max-w-xs flex sm:block items-center gap-4">
              <div className="flex items-center gap-2.5 sm:mb-2 shrink-0">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#C5A869]" />
                <span className="font-['Cinzel'] font-bold text-sm sm:text-base text-[#E8D5A3]">25+ Years</span>
              </div>
              <p className="text-[11px] sm:text-xs text-[#CBD5D0] leading-relaxed">
                Led by Johnykutty P.V. with an elite fleet of temperature-controlled mobile catering vehicles.
              </p>
            </div>

            {/* Decorative Gold Frame Border Underneath */}
            <div className="hidden sm:block absolute -top-4 -left-4 w-full h-full border border-[#C5A869]/25 rounded-xl pointer-events-none -z-0" />
          </div>

          {/* Right Column: Company Story & Guiding Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#C5A869] mb-2">
              Heritage, Leadership &amp; Logistics
            </span>
            <h3 className="font-['Cinzel'] text-xl sm:text-3xl font-bold text-[#FDFBF7] mb-4 sm:mb-6 leading-snug">
              Every Occasion Deserves the Royal Touch
            </h3>
            
            <p className="text-[#CBD5D0] text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 font-normal">
              At <strong className="text-[#FDFBF7] font-semibold">Royal Prince Caters and Event Management</strong>, founded and directed by <strong className="text-[#E8D5A3]">Johnykutty P.V.</strong> in Pala, Kottayam District, Kerala, we believe that sharing food is the purest expression of love and celebration. 
            </p>

            <p className="text-[#CBD5D0] text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 font-normal">
              Whether it is the time-honored sanctity of a 28-delicacy <strong className="text-[#E8D5A3]">Kerala Sadhya</strong> served on fresh plantain leaves, a grand Christian wedding feast featuring our iconic Central Travancore beef roast and slow-dum biriyani, or an opulent evening reception with sizzling live counters—our master cooks and hospitality professionals ensure flawless execution backed by our dedicated logistics fleet.
            </p>

            {/* Commitments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              {commitments.slice(0, 4).map((c, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 bg-[#0D1412] rounded-lg border border-[#C5A869]/20 hover:border-[#C5A869]/40 transition-colors shadow-xs">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A869] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#FDFBF7]">{c.title}</h4>
                    <p className="text-[11px] sm:text-xs text-[#8A9C94] mt-0.5 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#0D1412] hover:bg-[#121C18] text-[#E8D5A3] text-xs font-bold uppercase tracking-widest rounded border border-[#C5A869]/60 hover:border-[#C5A869] hover:shadow-[0_0_20px_rgba(197,168,105,0.2)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Discuss Your Event With Us</span>
                <ArrowRight className="w-4 h-4 text-[#C5A869]" />
              </button>

              <a
                href="#founder"
                className="text-xs font-bold text-[#CBD5D0] hover:text-[#C5A869] flex items-center justify-center gap-1.5 transition-colors uppercase tracking-wider py-2"
              >
                <span>About Johnykutty P.V.</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Six Core Commitments Row */}
        <div className="mt-12 pt-12 border-t border-[#C5A869]/20">
          <div className="text-center mb-8">
            <h4 className="font-['Cinzel'] text-xl font-bold text-[#FDFBF7]">
              Our Unwavering Pillars of Excellence
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {commitments.map((item, index) => (
              <div 
                key={index} 
                className="bg-[#0D1412] p-6 rounded-xl border border-[#C5A869]/20 hover:border-[#C5A869]/60 hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#070A09] border border-[#C5A869]/30 group-hover:border-[#C5A869] text-[#C5A869] flex items-center justify-center transition-colors mb-4">
                  <Crown className="w-5 h-5" />
                </div>
                <h5 className="font-['Cinzel'] text-sm font-bold text-[#FDFBF7] mb-2 uppercase tracking-wide">
                  {item.title}
                </h5>
                <p className="text-xs text-[#8A9C94] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
