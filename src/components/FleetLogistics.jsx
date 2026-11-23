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
    <section id="fleet" className="py-16 sm:py-28 bg-[#090E0C] text-[#FDFBF7] relative overflow-hidden border-b border-[#C5A869]/20">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-royal-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#C5A869]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1412] border border-[#C5A869]/40 text-[#E8D5A3] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4 shadow-sm">
            <Truck className="w-3.5 h-3.5 text-[#C5A869]" />
            <span>State-of-the-Art Logistics</span>
          </div>

          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FDFBF7] mb-3 sm:mb-4">
            {FLEET_INFO.title}
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C5A869] mx-auto mb-4 sm:mb-5" />

          <p className="font-['Cormorant_Garamond'] text-base sm:text-xl italic text-[#CBD5D0] max-w-2xl mx-auto font-normal">
            &ldquo;From our central kitchen in Pala to your reception banquet, our temperature-insulated vehicle fleet guarantees hot, sanitary, and punctual food service.&rdquo;
          </p>
        </div>

        {/* Fleet Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-16 max-w-5xl mx-auto">
          {FLEET_INFO.stats.map((stat, i) => (
            <div key={i} className="bg-[#0D1412] rounded-xl p-4 sm:p-5 border border-[#C5A869]/25 text-center shadow-lg hover:border-[#C5A869]/60 transition-colors">
              <span className="font-['Cinzel'] text-xl sm:text-3xl font-bold text-[#E8D5A3] block mb-0.5 sm:mb-1">
                {stat.value}
              </span>
              <span className="text-[9px] sm:text-xs text-[#8A9C94] uppercase tracking-wider font-semibold">
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
              className="bg-[#0D1412] rounded-xl overflow-hidden border border-[#C5A869]/25 hover:border-[#C5A869] shadow-xl hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)] transition-all duration-300 flex flex-col group"
            >
              {/* Vehicle Photograph */}
              <div className="relative h-52 sm:h-64 overflow-hidden">
                <img
                  src={v.image}
                  alt={v.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1412] via-black/40 to-transparent" />

                {/* Role Pill */}
                <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded bg-[#070A09]/90 border border-[#C5A869]/40 text-[#E8D5A3] text-[10px] font-bold uppercase tracking-wider backdrop-blur-xs">
                  {v.role}
                </div>

                <div className="absolute bottom-3.5 left-3.5 right-3.5">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A869] block">
                    Capacity Specification
                  </span>
                  <span className="font-['Cinzel'] text-sm sm:text-base font-bold text-[#FDFBF7]">
                    {v.capacity}
                  </span>
                </div>
              </div>

              {/* Vehicle Information */}
              <div className="p-5 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Cinzel'] text-xl font-bold text-[#FDFBF7] group-hover:text-[#E8D5A3] transition-colors mb-3">
                    {v.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#CBD5D0] leading-relaxed mb-6 font-normal">
                    {v.description}
                  </p>

                  <ul className="space-y-2 border-t border-[#C5A869]/15 pt-4 mb-6">
                    {v.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-[#8A9C94]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleFleetInquiry(v)}
                  className="w-full py-3 px-4 bg-[#070A09] hover:bg-[#C5A869] text-[#C5A869] hover:text-[#070A09] border border-[#C5A869]/40 hover:border-transparent rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enquire Delivery Coverage</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pan-Kerala Rapid Dispatch Guarantee Banner */}
        <div className="bg-gradient-to-r from-[#0D1412] via-[#121C18] to-[#0D1412] rounded-xl p-8 sm:p-10 border border-[#C5A869]/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C5A869] font-bold block mb-1">
              Zero-Delay Wedding Logistics
            </span>
            <h4 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#FDFBF7]">
              Covering Kottayam, Pala, Ernakulam, Pathanamthitta &amp; All Kerala
            </h4>
            <p className="text-xs sm:text-sm text-[#8A9C94] mt-1">
              Equipped with real-time GPS tracking and dedicated banquet drivers to ensure buffer arrival 2 hours before dining starts.
            </p>
          </div>

          <a
            href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Royal Prince Caters! I would like to check if your vehicle fleet covers our event venue location.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-gradient-to-r from-[#FFF1CD] via-[#DFCA96] to-[#C5A869] text-[#070A09] text-xs font-extrabold uppercase tracking-widest rounded shadow-xl hover:scale-105 transition-all duration-300 shrink-0"
          >
            Check Venue Coverage on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
