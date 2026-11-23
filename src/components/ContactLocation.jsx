import React from 'react';
import { Crown, MapPin, Phone, Mail, Clock, Navigation, ExternalLink, MessageCircle, Truck } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import { COMPANY_INFO, FOUNDER_INFO } from '../data/siteData';

export default function ContactLocation({ onOpenChatbot }) {
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hello Royal Prince Caters! I would like to enquire about your services and event dates.");
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-28 bg-[#090E0C] text-[#FDFBF7] relative overflow-hidden border-b border-[#C5A869]/20">
      <div className="absolute inset-0 bg-royal-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1412] border border-[#C5A869]/40 text-[#E8D5A3] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-[#C5A869]" />
            <span>Connect with Royal Prince</span>
          </div>
          
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FDFBF7] mb-4">
            Contact &amp; Location
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C5A869] mx-auto mb-6" />
          
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl italic text-[#CBD5D0] max-w-2xl mx-auto font-normal">
            Visit our administrative facility on Pala Road or reach out directly. Managing Director Johnykutty P.V. and our event logistics team are ready to assist with menu consultations, venue recce, and bookings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Primary Address Card */}
            <div className="bg-[#0D1412] rounded-xl p-6 sm:p-8 border border-[#C5A869]/25 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#070A09] border border-[#C5A869]/50 flex items-center justify-center text-[#C5A869] shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-['Cinzel'] text-lg font-bold text-[#FDFBF7] mb-1">
                    ROYAL PRINCE CATERS AND EVENT MANAGEMENT
                  </h3>
                  <p className="text-xs text-[#C5A869] uppercase tracking-wider font-semibold mb-2">
                    {COMPANY_INFO.locationDisplay}
                  </p>
                  <p className="text-xs sm:text-sm text-[#CBD5D0] leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                  <div className="mt-4">
                    <a
                      href={COMPANY_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E8D5A3] hover:text-[#FDFBF7] transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#C5A869]" />
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Calls & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <div className="bg-[#0D1412] rounded-xl p-5 border border-[#C5A869]/25 shadow-md">
                <div className="flex items-center gap-2.5 mb-2">
                  <Phone className="w-5 h-5 text-[#C5A869]" />
                  <span className="text-xs uppercase font-bold text-[#E8D5A3]">Direct Helpline</span>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="block text-sm font-bold text-[#FDFBF7] hover:text-[#C5A869] transition-colors"
                >
                  {COMPANY_INFO.phonePrimary}
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phoneSecondary.replace(/\s+/g, '')}`}
                  className="block text-xs text-[#8A9C94] hover:text-[#C5A869] mt-1 transition-colors"
                >
                  Alt: {COMPANY_INFO.phoneSecondary}
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-[#0D1412] rounded-xl p-5 border border-[#C5A869]/25 shadow-md">
                <div className="flex items-center gap-2.5 mb-2">
                  <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  <span className="text-xs uppercase font-bold text-[#E8D5A3]">WhatsApp Official</span>
                </div>
                <button
                  onClick={handleWhatsAppClick}
                  className="text-left text-sm font-bold text-[#FDFBF7] hover:text-[#25D366] transition-colors cursor-pointer"
                >
                  {COMPANY_INFO.phonePrimary}
                </button>
                <p className="text-[11px] text-[#8A9C94] mt-1">
                  Instant Quotes &amp; Menu PDFs
                </p>
              </div>
            </div>

            {/* Email & Instagram Quick Connect */}
            <div className="bg-[#0D1412] rounded-xl p-6 border border-[#C5A869]/25 shadow-md space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C5A869] shrink-0" />
                <div className="overflow-hidden">
                  <span className="text-[10px] uppercase font-bold text-[#8A9C94] block">Official Email</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-xs sm:text-sm font-medium text-[#FDFBF7] hover:text-[#C5A869] truncate block transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#C5A869]/15">
                <Instagram className="w-5 h-5 text-[#C5A869] shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#8A9C94] block">Official Instagram</span>
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-medium text-[#FDFBF7] hover:text-[#C5A869] transition-colors"
                  >
                    {COMPANY_INFO.instagramHandle}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-[#C5A869]/15">
                <Clock className="w-5 h-5 text-[#C5A869] shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#8A9C94] block">Kitchen &amp; Office Hours</span>
                  <span className="text-xs sm:text-sm text-[#CBD5D0]">
                    {COMPANY_INFO.hours}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed & Directions Guide */}
          <div className="lg:col-span-7 bg-[#0D1412] rounded-xl overflow-hidden border border-[#C5A869]/30 shadow-2xl flex flex-col">
            <div className="p-4 bg-[#070A09] border-b border-[#C5A869]/25 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#C5A869]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#FDFBF7]">
                  Location Map • Kidangoor / Pala Road, Kottayam
                </span>
              </div>

              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded bg-[#0D1412] hover:bg-[#C5A869] text-[#E8D5A3] hover:text-[#070A09] border border-[#C5A869]/40 text-xs font-semibold flex items-center gap-1 transition-colors"
              >
                <span>Get Driving Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="flex-1 min-h-[360px] relative w-full bg-[#070A09]">
              <iframe
                title="Royal Prince Caters and Event Management Location Map"
                src="https://maps.google.com/maps?q=Kidangoor+Pala+Road+Kottayam+Kerala&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-125 contrast-105"
              />
            </div>

            {/* Service Radius & Fleet Note */}
            <div className="p-4 bg-[#070A09] border-t border-[#C5A869]/20 text-xs text-[#8A9C94] flex flex-wrap items-center justify-between gap-2">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#C5A869]" />
                <span>Primary dispatch hub: Pala &amp; Kidangoor. Mobile thermal fleet serving all Kerala.</span>
              </span>
              <span className="text-[#E8D5A3] font-semibold">Founder: Johnykutty P.V.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
