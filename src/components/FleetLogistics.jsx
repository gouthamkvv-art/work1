import React from 'react';
import { Truck, ShieldCheck, Thermometer, Clock, Navigation, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { FLEET_INFO, COMPANY_INFO } from '../data/siteData';

export default function FleetLogistics({ onOpenChatbot }) {
  const handleFleetInquiry = (vehicle) => {
    const text = encodeURIComponent(
      `Hello Royal Prince Caters! I would like to enquire about your logistics fleet and catering delivery for an event in Kerala.`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="fleet" className="py-16 sm:py-24 bg-[#101010] text-[#FAF7F0] relative overflow-hidden border-b border-[#C6A15B]/30">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-royal-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#292521] border border-[#C6A15B]/40 text-[#DFBE6F] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4 shadow-sm">
            <Truck className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>State-of-the-Art Logistics</span>
          </div>

          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF7F0] mb-3 sm:mb-4">
            {FLEET_INFO.title}
          </h2>
          <div className="w-20 h-1 bg-[#C6A15B] mx-auto mb-4 sm:mb-5 rounded-full" />

          <p className="font-['Cormorant_Garamond'] text-base sm:text-xl italic text-[#F3E8D0]/80 max-w-2xl mx-auto font-normal">
            &ldquo;From our central kitchen in Pala to your reception banquet, our temperature-insulated vehicle fleet guarantees hot, sanitary, and punctual food service.&rdquo;
          </p>
        </div>

        {/* Fleet Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-16 max-w-5xl mx-auto">
          {FLEET_INFO.stats.map((stat, i) => (
            <div key={i} className="bg-[#292521] rounded-2xl p-4 sm:p-5 border border-[#C6A15B]/30 text-center shadow-lg hover:border-[#C6A15B] transition-colors">
              <span className="font-['Cinzel'] text-xl sm:text-3xl font-bold text-[#DFBE6F] block mb-0.5 sm:mb-1">
                {stat.value}
              </span>
              <span className="text-[9px] sm:text-xs text-[#F3E8D0]/70 uppercase tracking-wider font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Vehicle Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {FLEET_INFO.vehicles.map((v) => (
            <div
              key={v.id}
              className="bg-[#292521] rounded-2xl overflow-hidden border border-[#C6A15B]/30 hover:border-[#C6A15B] shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-all duration-300 flex flex-col group"
            >
              {/* Vehicle Photograph */}
              <div className="relative h-52 sm:h-64 overflow-hidden">
                <img
                  src={v.image}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/20 to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#101010]/90 border border-[#C6A15B]/40 text-[#DFBE6F] text-[10px] font-bold uppercase tracking-wider">
                  {v.role}
                </div>
              </div>

              {/* Vehicle Description */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#FAF7F0]">
                      {v.title}
                    </h3>
                    <span className="text-xs text-[#DFBE6F] font-semibold">
                      {v.capacity}
                    </span>
                  </div>
                  <p className="text-xs text-[#F3E8D0]/75 leading-relaxed mb-4">
                    {v.description}
                  </p>
                  <div className="space-y-1.5 pt-3 border-t border-[#C6A15B]/20">
                    {v.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#F3E8D0]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#C6A15B]/20">
                  <button
                    onClick={() => handleFleetInquiry(v)}
                    className="btn-royal-gold w-full py-2.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-gold-button"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#101010]" />
                    <span>Enquire Logistics Capacity</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
