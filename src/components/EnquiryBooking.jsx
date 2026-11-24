import React, { useState } from 'react';
import { Crown, Send, CheckCircle2, MessageCircle, Calendar, Users, MapPin, Phone, User, Utensils, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, FOUNDER_INFO } from '../data/siteData';

export default function EnquiryBooking() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    eventType: 'Wedding Catering',
    eventDate: '',
    location: 'Pala, Kottayam',
    guestCount: '300',
    cateringReq: 'Both Veg & Non-Veg',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const eventTypes = [
    "Wedding Catering",
    "Kerala Sadhya (Plantain Leaf)",
    "Reception & Evening Dinner",
    "Betrothal / Engagement (Manasammatham)",
    "Birthday & Family Function",
    "Corporate Event / Banquet",
    "Stage Decor & Event Styling"
  ];

  const cateringOptions = [
    "Both Veg & Non-Veg",
    "Traditional Kerala Veg Sadhya",
    "Pure Vegetarian Feast",
    "Royal Dum Biriyani Feast",
    "Live Food Counters & Mocktails"
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+-\s]{8,15}$/.test(formData.phone)) {
      errs.phone = "Please enter a valid phone number";
    }
    if (!formData.eventDate) errs.eventDate = "Please select event date";
    if (!formData.location.trim()) errs.location = "Event location is required";
    if (!formData.guestCount || parseInt(formData.guestCount) <= 0) {
      errs.guestCount = "Please enter estimated guests";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateWhatsAppMessage = () => {
    return `Hello Royal Prince Caters and Event Management! 👑\n\nI would like to request an official quotation for our upcoming celebration:\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Event Type:* ${formData.eventType}\n*Event Date:* ${formData.eventDate}\n*Location:* ${formData.location}\n*Estimated Guests:* ${formData.guestCount}\n*Catering Style:* ${formData.cateringReq}\n*Notes:* ${formData.additionalInfo || 'None'}\n\nPlease share menu package proposals and pricing.\n\nThank you!`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);
    const msg = encodeURIComponent(generateWhatsAppMessage());
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="quotation" className="py-16 sm:py-24 bg-white text-[#1E293B] relative overflow-hidden border-b border-[#EADFC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCF8EE] border border-[#C59A3F]/30 text-[#9E7628] text-[11px] font-bold tracking-[0.25em] uppercase mb-3 shadow-xs">
            <Calendar className="w-3.5 h-3.5 text-[#C59A3F]" />
            <span>Instant Quotation &amp; Booking</span>
          </div>

          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] mb-3">
            Plan Your Grand Celebration
          </h2>
          <div className="w-20 h-1 bg-[#C59A3F] mx-auto mb-4 rounded-full" />
          
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl italic text-[#526071] max-w-2xl mx-auto">
            Tell us about your event. We will prepare customized menu packages and pricing tailored to your guests.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Clean Intuitive Booking Form */}
          <div className="lg:col-span-7 bg-[#FBF9F5] rounded-3xl p-6 sm:p-10 border border-[#EADFC7] shadow-royal">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Name and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Mathew Joseph"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-white border border-[#CBD5E1] focus:border-[#C59A3F] text-[#0F172A] text-sm outline-none transition-colors"
                    />
                  </div>
                  {errors.fullName && <p className="text-[11px] text-red-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-white border border-[#CBD5E1] focus:border-[#C59A3F] text-[#0F172A] text-sm outline-none transition-colors"
                    />
                  </div>
                  {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Row 2: Event Type and Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                    Type of Celebration *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-white border border-[#CBD5E1] focus:border-[#C59A3F] text-[#0F172A] text-sm outline-none transition-colors cursor-pointer"
                  >
                    {eventTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                    Event Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-white border border-[#CBD5E1] focus:border-[#C59A3F] text-[#0F172A] text-sm outline-none transition-colors"
                    />
                  </div>
                  {errors.eventDate && <p className="text-[11px] text-red-600 mt-1">{errors.eventDate}</p>}
                </div>
              </div>

              {/* Row 3: Location and Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                    Venue / Town *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Pala, Kottayam"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-white border border-[#CBD5E1] focus:border-[#C59A3F] text-[#0F172A] text-sm outline-none transition-colors"
                    />
                  </div>
                  {errors.location && <p className="text-[11px] text-red-600 mt-1">{errors.location}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                    Estimated Guests *
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="number"
                      min="50"
                      step="50"
                      placeholder="e.g. 400"
                      value={formData.guestCount}
                      onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl bg-white border border-[#CBD5E1] focus:border-[#C59A3F] text-[#0F172A] text-sm outline-none transition-colors"
                    />
                  </div>
                  {errors.guestCount && <p className="text-[11px] text-red-600 mt-1">{errors.guestCount}</p>}
                </div>
              </div>

              {/* Row 4: Catering Style */}
              <div>
                <label className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                  Catering Style / Food Preference
                </label>
                <select
                  value={formData.cateringReq}
                  onChange={(e) => setFormData({ ...formData, cateringReq: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-xl bg-white border border-[#CBD5E1] focus:border-[#C59A3F] text-[#0F172A] text-sm outline-none transition-colors cursor-pointer"
                >
                  {cateringOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gold-gradient text-[#0F172A] font-bold text-sm uppercase tracking-wider shadow-md hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-[#0F172A] fill-[#0F172A]" />
                  <span>Request Instant Quotation on WhatsApp</span>
                </button>
                <p className="text-center text-[11px] text-[#64748B] mt-2">
                  Opens WhatsApp with pre-filled event details directly to our Pala inquiry desk.
                </p>
              </div>
            </form>
          </div>

          {/* Right Column: Direct Hotlines & Royal Prince Guarantees */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Call Card */}
            <div className="bg-[#FCF8EE] rounded-3xl p-6 sm:p-8 border border-[#EADFC7] shadow-xs">
              <span className="text-[10px] font-bold tracking-widest uppercase text-[#9E7628] block mb-2">
                Direct Inquiry Hotline
              </span>
              <h3 className="font-['Cinzel'] text-xl font-bold text-[#0F172A] mb-2">
                Speak With Our Banquet Desk
              </h3>
              <p className="text-xs text-[#526071] leading-relaxed mb-6">
                Prefer to discuss menu customization or venue logistics over a phone call? Reach out directly to our team.
              </p>

              <div className="space-y-3">
                <a
                  href={`tel:${COMPANY_INFO.phonePrimary}`}
                  className="p-3.5 rounded-xl bg-white border border-[#EADFC7] hover:border-[#C59A3F] flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#10B981]/15 flex items-center justify-center text-[#10B981]">
                      <Phone className="w-4 h-4 text-[#10B981]" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#64748B] uppercase font-bold block">Primary Hotline &amp; WhatsApp</span>
                      <span className="text-sm font-bold text-[#0F172A] group-hover:text-[#9E7628] transition-colors">
                        {COMPANY_INFO.phonePrimary}
                      </span>
                    </div>
                  </div>
                  <MessageCircle className="w-4 h-4 text-[#10B981]" />
                </a>

                <a
                  href={`tel:${COMPANY_INFO.phoneSecondary}`}
                  className="p-3.5 rounded-xl bg-white border border-[#EADFC7] hover:border-[#C59A3F] flex items-center justify-between transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#F7F4EE] flex items-center justify-center text-[#0F172A]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#64748B] uppercase font-bold block">Secondary Support</span>
                      <span className="text-sm font-bold text-[#0F172A] group-hover:text-[#9E7628] transition-colors">
                        {COMPANY_INFO.phoneSecondary}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Guarantees Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EADFC7] space-y-4 shadow-xs">
              <h4 className="font-['Cinzel'] text-sm font-bold text-[#0F172A]">
                The Royal Prince Booking Assurance
              </h4>
              <div className="space-y-2.5 text-xs text-[#526071]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>Complimentary personalized menu curation &amp; tasting discussion.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>Insulated thermal fleet delivery included across Central Kerala.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>Direct supervision by Managing Director Johnykutty P.V.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                  <span>Transparent per-plate quotation with zero hidden charges.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
