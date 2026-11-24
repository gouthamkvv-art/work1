import React, { useState } from 'react';
import { Crown, MessageCircle, ArrowRight, Check, Sparkles } from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/siteData';

export default function Services({ onOpenQuoteModal, onNavigate }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Weddings", "Traditional", "Receptions", "Live Stations", "Event Management"];

  const filteredServices = activeCategory === "All"
    ? SERVICES.slice(0, 6)
    : SERVICES.filter(s => s.category.toLowerCase().includes(activeCategory.toLowerCase()) || activeCategory === "All");

  const handleWhatsAppEnquiry = (service) => {
    const text = encodeURIComponent(
      `Hello Royal Prince Caters! 👑\n\nI would like to enquire about your *${service.title}* for an upcoming event in Kerala.\n\nPlease share menu options, packages, and pricing details.\n\nThank you!`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white text-[#1E293B] relative overflow-hidden border-b border-[#EADFC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCF8EE] border border-[#C59A3F]/30 text-[#9E7628] text-[11px] font-bold tracking-[0.25em] uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A3F]" />
            <span>Our Offerings</span>
          </div>
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] mb-3">
            Catering &amp; Event Services
          </h2>
          <div className="w-20 h-1 bg-[#C59A3F] mx-auto mb-4 rounded-full" />
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl italic text-[#526071] max-w-2xl mx-auto">
            From intimate betrothals to royal wedding banquets for thousands, every event is executed with majestic flair and culinary distinction.
          </p>

          {/* Simple Category Filter */}
          <div className="flex items-center justify-center gap-2 flex-wrap mt-6 sm:mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-gold-gradient text-[#0F172A] font-bold shadow-sm'
                    : 'bg-[#F7F4EE] text-[#526071] hover:text-[#0F172A] hover:bg-[#EADFC7]/50 border border-[#EADFC7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Services Grid (Clean 3-column layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {(filteredServices.length > 0 ? filteredServices : SERVICES.slice(0, 6)).map((service) => (
            <div
              key={service.id}
              className="bg-[#FBF9F5] rounded-2xl overflow-hidden border border-[#EADFC7] hover:border-[#C59A3F] shadow-xs hover:shadow-royal-hover transition-all duration-300 flex flex-col group"
            >
              {/* Service Photograph */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[#9E7628] font-bold text-[10px] tracking-wider uppercase border border-[#EADFC7] shadow-xs">
                  {service.badge}
                </div>
              </div>

              {/* Service Details */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Cinzel'] text-lg sm:text-xl font-bold text-[#0F172A] group-hover:text-[#9E7628] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#526071] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-[#EADFC7]">
                    {service.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#475569]">
                        <Check className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={() => handleWhatsAppEnquiry(service)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-[#10B981]/10 hover:bg-[#10B981]/20 text-[#047857] border border-[#10B981]/30 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-[#047857]" />
                    <span>WhatsApp Enquiry</span>
                  </button>
                  <button
                    onClick={onOpenQuoteModal}
                    className="py-2.5 px-3 rounded-xl bg-white hover:bg-[#FCF8EE] border border-[#EADFC7] hover:border-[#C59A3F] text-[#0F172A] text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer"
                    title="Get Quote"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#9E7628]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#FCF8EE] border border-[#EADFC7] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#0F172A]">
              Planning a Custom Celebration in Kerala?
            </h3>
            <p className="text-xs sm:text-sm text-[#526071] mt-0.5">
              We personalize dishes, dining styles, live counters, and guest capacities from 100 to 5,000+ attendees.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate ? onNavigate('menu') : null}
              className="px-5 py-2.5 rounded-xl bg-gold-gradient text-[#0F172A] font-bold text-xs uppercase tracking-wider shadow-sm hover:brightness-105 active:scale-98 transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
            >
              <span>View Signature Dishes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onNavigate ? onNavigate('contact') : onOpenQuoteModal()}
              className="px-5 py-2.5 rounded-xl bg-white hover:bg-[#FCF8EE] border border-[#EADFC7] text-[#0F172A] font-bold text-xs uppercase tracking-wider shadow-sm transition-all shrink-0 cursor-pointer"
            >
              Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
