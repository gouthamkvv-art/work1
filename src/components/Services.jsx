import React, { useState } from 'react';
import { Crown, MessageCircle, ArrowRight, Check, Sparkles, Calendar } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/siteData';

export default function Services({ onOpenQuoteModal, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Weddings", "Traditional", "Receptions", "Live Stations", "Event Management"];

  const filteredServices = activeCategory === "All"
    ? SERVICES
    : SERVICES.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory === "All");

  const handleWhatsAppEnquiry = (service) => {
    const text = encodeURIComponent(
      `Hello Royal Prince Caters! 👑\n\nI would like to enquire about your *${service.title}* for an upcoming event in Kerala.\n\nPlease share menu options, packages, and pricing details.\n\nThank you!`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F3E8D0] text-[#292521] relative overflow-hidden border-b border-[#C6A15B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F0] border border-[#C6A15B]/40 text-[#9E7628] text-[11px] font-bold tracking-[0.25em] uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Banquet &amp; Event Offerings</span>
          </div>
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#101010] mb-3">
            Royal Catering &amp; Event Services
          </h2>
          <div className="w-20 h-1 bg-[#C6A15B] mx-auto mb-4 rounded-full" />
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl italic text-[#292521]/80 max-w-2xl mx-auto">
            From intimate betrothals to royal wedding banquets for thousands, every event is executed with majestic flair and culinary distinction.
          </p>

          {/* Luxury Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mt-6 sm:mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gold-gradient text-[#101010] font-bold shadow-md'
                    : 'bg-[#FAF7F0] text-[#292521] hover:text-[#101010] hover:bg-white border border-[#C6A15B]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (Ivory White #FAF7F0 Cards with Subtle Gold Borders) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-[#FAF7F0] rounded-2xl overflow-hidden border border-[#C6A15B]/35 hover:border-[#C6A15B] shadow-royal hover:shadow-royal-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Service Photograph */}
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#101010]/90 backdrop-blur-xs text-[#DFBE6F] font-bold text-[10px] tracking-wider uppercase border border-[#C6A15B]/50 shadow-md">
                    {service.badge}
                  </div>
                </div>

                {/* Service Details */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-['Cinzel'] text-lg sm:text-xl font-bold text-[#101010] group-hover:text-[#9E7628] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292521]/80 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List with Gold Checkmarks */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-[#C6A15B]/25">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#292521]/90">
                        <Check className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Buttons */}
              <div className="p-5 sm:p-6 pt-0 border-t border-[#C6A15B]/20">
                <div className="flex items-center gap-2 pt-3">
                  <button
                    onClick={() => handleWhatsAppEnquiry(service)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#292521] hover:bg-[#101010] text-[#F3E8D0] border border-[#C6A15B]/40 hover:border-[#C6A15B] text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>WhatsApp Enquiry</span>
                  </button>
                  <button
                    onClick={onOpenQuoteModal}
                    className="py-2.5 px-3.5 rounded-xl bg-gold-gradient text-[#101010] font-bold text-xs flex items-center justify-center transition-all cursor-pointer shadow-xs hover:brightness-105"
                    title="Get Formal Quote"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#101010]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner - Dark Espresso #292521 with Royal Gold Accents */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#292521] border border-[#C6A15B]/50 flex flex-col sm:flex-row items-center justify-between gap-5 text-center sm:text-left text-white shadow-xl">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#DFBE6F] block mb-1">
              Custom Celebration Packages
            </span>
            <h3 className="font-['Cinzel'] text-base sm:text-xl font-bold text-[#FAF7F0]">
              Planning a Grand Wedding or Gala in Kerala?
            </h3>
            <p className="text-xs sm:text-sm text-[#F3E8D0]/75 mt-0.5 max-w-xl">
              We personalize dishes, dining formats, live counters, and guest capacities from 100 to 5,000+ guests with complete peace of mind.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate ? onNavigate('menu') : null}
              className="btn-royal-gold px-5 py-2.5 rounded-xl text-[#101010] font-bold text-xs uppercase tracking-wider shadow-md shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <span>Signature Dishes</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#101010]" />
            </button>
            <button
              onClick={() => onNavigate ? onNavigate('contact') : onOpenQuoteModal()}
              className="px-5 py-2.5 rounded-xl bg-[#101010] hover:bg-black border border-[#C6A15B]/50 text-[#F3E8D0] font-bold text-xs uppercase tracking-wider shadow-sm transition-all shrink-0 cursor-pointer"
            >
              Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
