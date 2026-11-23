import React, { useState } from 'react';
import { Crown, MessageCircle, ArrowRight, Check, Sparkles } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/siteData';

export default function Services({ onOpenQuoteModal }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Weddings", "Traditional", "Receptions", "Specialities", "Live Stations", "Corporate", "Event Management"];

  const filteredServices = activeCategory === "All"
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  const handleWhatsAppEnquiry = (service) => {
    const text = encodeURIComponent(
      `Hello Royal Prince Caters and Event Management! 👑\n\nI would like to enquire about your *${service.title}* services for an upcoming event in Pala/Kottayam/Kerala.\n\nPlease share menu options, packages, and pricing details.\n\nThank you!`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-28 bg-[#070A09] text-[#FDFBF7] relative overflow-hidden border-b border-[#C5A869]/20">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-royal-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C5A869]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#0E2921]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1412] border border-[#C5A869]/40 text-[#E8D5A3] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A869]" />
            <span>Haute Hospitality Offerings</span>
          </div>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FDFBF7] mb-4">
            Our Catering &amp; Event Services
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C5A869] mx-auto mb-6" />
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl italic text-[#CBD5D0] max-w-2xl mx-auto font-normal">
            Every celebration has its own soul. We tailor our royal menus, culinary stations, and venue decor to match your unique vision, delivered by our temperature-controlled fleet.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#DFCA96] to-[#C5A869] text-[#070A09] font-bold shadow-[0_0_15px_rgba(197,168,105,0.3)] scale-105'
                    : 'bg-[#0D1412] text-[#CBD5D0] hover:text-[#C5A869] hover:bg-[#121C18] border border-[#C5A869]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#0D1412] rounded-xl overflow-hidden border border-[#C5A869]/20 hover:border-[#C5A869] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Service Photograph with Overlay */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1412] via-[#0D1412]/30 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded bg-[#070A09]/90 border border-[#C5A869]/40 text-[#E8D5A3] text-[10px] font-bold tracking-wider uppercase backdrop-blur-xs">
                  {service.badge}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Cinzel'] text-lg font-bold text-[#FDFBF7] group-hover:text-[#E8D5A3] transition-colors mb-2 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs text-[#CBD5D0] leading-relaxed mb-4 font-normal">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-1.5 mb-6 border-t border-[#C5A869]/15 pt-3">
                    {service.highlights.slice(0, 3).map((hl, i) => (
                      <li key={i} className="text-[11px] text-[#8A9C94] flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#C5A869] shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA: Enquire on WhatsApp Button (7012230764) */}
                <div className="pt-2">
                  <button
                    onClick={() => handleWhatsAppEnquiry(service)}
                    className="w-full py-3 px-4 bg-[#070A09] hover:bg-[#25D366] text-[#E8D5A3] hover:text-white border border-[#C5A869]/40 hover:border-transparent rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md group/btn"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366] group-hover/btn:text-white transition-colors" />
                    <span>Enquire on WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Event Advisory Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#0D1412] via-[#121C18] to-[#0D1412] rounded-xl border border-[#C5A869]/40 p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A869] font-bold block mb-1">
              Private Tastings &amp; Custom Curation
            </span>
            <h4 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#FDFBF7] mb-1">
              Planning a Gathering from 50 to 5,000+ Guests?
            </h4>
            <p className="text-xs sm:text-sm text-[#8A9C94]">
              Managing Director Johnykutty P.V. and our senior culinary captains will personalize each dish for your celebration anywhere in Kerala.
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="px-7 py-3.5 bg-gradient-to-r from-[#FFF1CD] via-[#DFCA96] to-[#C5A869] text-[#070A09] text-xs font-extrabold uppercase tracking-widest rounded shadow-xl hover:scale-105 transition-all duration-300 shrink-0 cursor-pointer"
          >
            Request Custom Menu &amp; Quote
          </button>
        </div>
      </div>
    </section>
  );
}
