import React from 'react';
import { MapPin, Phone, Mail, Clock, Navigation, ExternalLink, MessageCircle } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import { COMPANY_INFO } from '../data/siteData';

export default function ContactLocation() {
  const handleWhatsAppClick = () => {
    const text = encodeURIComponent("Hello Royal Prince Caters! I would like to enquire about your services and event dates.");
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FBF9F5] text-[#1E293B] relative overflow-hidden border-b border-[#EADFC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCF8EE] border border-[#C59A3F]/30 text-[#9E7628] text-[11px] font-bold tracking-[0.25em] uppercase mb-3 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#C59A3F]" />
            <span>Connect with Us</span>
          </div>
          
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] mb-3">
            Contact &amp; Location
          </h2>
          <div className="w-20 h-1 bg-[#C59A3F] mx-auto mb-4 rounded-full" />
          
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl italic text-[#526071] max-w-2xl mx-auto">
            Visit our central operations facility on Pala Road or get in touch directly for tasting sessions and venue discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Primary Address Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EADFC7] shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#FCF8EE] border border-[#EADFC7] flex items-center justify-center text-[#9E7628] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-['Cinzel'] text-base font-bold text-[#0F172A] mb-1">
                    ROYAL PRINCE CATERS &amp; EVENT MANAGEMENT
                  </h3>
                  <p className="text-xs text-[#9E7628] uppercase tracking-wider font-bold mb-2">
                    {COMPANY_INFO.locationDisplay}
                  </p>
                  <p className="text-xs sm:text-sm text-[#526071] leading-relaxed">
                    {COMPANY_INFO.address}
                  </p>
                  <div className="mt-3">
                    <a
                      href={COMPANY_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F172A] hover:text-[#9E7628] transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#C59A3F]" />
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3 text-[#94A3B8]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Calls & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Phone Card */}
              <div className="bg-white rounded-2xl p-5 border border-[#EADFC7] shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-[#C59A3F]" />
                  <span className="text-[10px] uppercase font-bold text-[#64748B]">Direct Helpline</span>
                </div>
                <a
                  href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
                  className="block text-sm font-bold text-[#0F172A] hover:text-[#9E7628] transition-colors"
                >
                  {COMPANY_INFO.phonePrimary}
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phoneSecondary.replace(/\s+/g, '')}`}
                  className="block text-xs text-[#64748B] hover:text-[#0F172A] mt-1 transition-colors"
                >
                  Alt: {COMPANY_INFO.phoneSecondary}
                </a>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-white rounded-2xl p-5 border border-[#EADFC7] shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-4 h-4 text-[#10B981]" />
                  <span className="text-[10px] uppercase font-bold text-[#64748B]">WhatsApp Official</span>
                </div>
                <button
                  onClick={handleWhatsAppClick}
                  className="text-left text-sm font-bold text-[#0F172A] hover:text-[#10B981] transition-colors cursor-pointer"
                >
                  {COMPANY_INFO.phonePrimary}
                </button>
                <p className="text-[10px] text-[#64748B] mt-1">
                  Instant Quotes &amp; Menu PDFs
                </p>
              </div>
            </div>

            {/* Email, Instagram & Hours Card */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EADFC7] shadow-xs space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C59A3F] shrink-0" />
                <div className="overflow-hidden">
                  <span className="text-[10px] uppercase font-bold text-[#64748B] block">Email</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-xs sm:text-sm font-medium text-[#0F172A] hover:text-[#9E7628] truncate block transition-colors"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2.5 border-t border-[#F0E9DA]">
                <Instagram className="w-4 h-4 text-[#C59A3F] shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#64748B] block">Instagram</span>
                  <a
                    href={COMPANY_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-medium text-[#0F172A] hover:text-[#9E7628] transition-colors"
                  >
                    {COMPANY_INFO.instagramHandle}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2.5 border-t border-[#F0E9DA]">
                <Clock className="w-4 h-4 text-[#C59A3F] shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#64748B] block">Working Hours</span>
                  <span className="text-xs text-[#526071]">
                    {COMPANY_INFO.hours}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Interactive Embed & Directions Guide */}
          <div className="lg:col-span-7 bg-white rounded-2xl overflow-hidden border border-[#EADFC7] shadow-xs flex flex-col">
            <div className="p-4 bg-[#FCF8EE] border-b border-[#EADFC7] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#C59A3F]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#0F172A]">
                  Pala Road • Kidangoor, Kottayam
                </span>
              </div>
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#9E7628] hover:text-[#0F172A] flex items-center gap-1 transition-colors"
              >
                <span>Navigate via GPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Map iframe */}
            <div className="flex-1 w-full min-h-[300px] sm:min-h-[380px] bg-[#F7F4EE] relative">
              <iframe
                title="Royal Prince Caters and Event Management Location"
                src="https://maps.google.com/maps?q=Puthoore+Building+Opposite+Rasam+Restaurant+Pala+Road+Kidangoor+Kottayam&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
