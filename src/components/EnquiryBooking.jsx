import React, { useState } from 'react';
import { Crown, Send, CheckCircle2, MessageCircle, Calendar, Users, MapPin, Phone, User, Utensils, AlertCircle, Copy, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function EnquiryBooking() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    eventType: 'Wedding Catering',
    eventDate: '',
    location: '',
    guestCount: '',
    cateringReq: 'Both Veg & Non-Veg',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const eventTypes = [
    "Wedding Catering",
    "Kerala Sadhya (Plantain Leaf)",
    "Reception & Evening Dinner",
    "Betrothal / Engagement (Manasammatham)",
    "Birthday & Family Function",
    "Corporate Convention / Lunch",
    "Baptism / Jubilee Celebration",
    "Stage Decor & Event Management"
  ];

  const cateringOptions = [
    "Both Veg & Non-Veg",
    "Traditional Kerala Veg Sadhya",
    "Pure Vegetarian Feast",
    "Non-Veg Dum Biriyani Feast",
    "Live Counters & Multi-Cuisine",
    "Custom Menu Discussion"
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[0-9+-\s]{8,15}$/.test(formData.phone)) {
      errs.phone = "Please enter a valid contact number";
    }
    if (!formData.eventDate) errs.eventDate = "Please select your event date";
    if (!formData.location.trim()) errs.location = "Event location / town is required (e.g. Pala, Kottayam)";
    if (!formData.guestCount || parseInt(formData.guestCount) <= 0) {
      errs.guestCount = "Please enter an estimated number of guests";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const generateWhatsAppMessage = () => {
    return `Hello Royal Prince Caters and Event Management! 👑\n\nI would like to request an official quotation for our upcoming celebration:\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phone}\n*Event Type:* ${formData.eventType}\n*Event Date:* ${formData.eventDate}\n*Location:* ${formData.location}\n*Estimated Guests:* ${formData.guestCount}\n*Catering Requirements:* ${formData.cateringReq}\n*Additional Notes:* ${formData.additionalInfo || 'None'}\n\nPlease share availability, customized menu proposals, and formal quotation.\n\nThank you!`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitted(true);

    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encoded}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const handleCopySummary = () => {
    const message = generateWhatsAppMessage();
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="enquiry" className="py-16 sm:py-28 bg-[#090E0C] text-[#FDFBF7] relative overflow-hidden border-b border-[#C5A869]/20">
      {/* Decorative Ornaments */}
      <div className="absolute inset-0 bg-royal-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#C5A869]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0E2921]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1412] border border-[#C5A869]/40 text-[#E8D5A3] text-[11px] font-semibold tracking-[0.3em] uppercase mb-4 shadow-sm">
            <Crown className="w-3.5 h-3.5 text-[#C5A869]" />
            <span>Plan Your Celebration</span>
          </div>
          
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FDFBF7] mb-3 sm:mb-4">
            Customer Enquiry &amp; Quotation
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C5A869] mx-auto mb-4 sm:mb-6" />
          
          <p className="font-['Cormorant_Garamond'] text-base sm:text-xl italic text-[#CBD5D0] max-w-2xl mx-auto font-normal">
            Fill in your celebration details below. Our management team will prepare a tailored quotation and menu package directly on WhatsApp (7012230764).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Hospitality Guarantee & Contact Quick Points */}
          <div className="lg:col-span-5 bg-[#0D1412] rounded-xl p-5 sm:p-8 border border-[#C5A869]/25 shadow-2xl">
            <h3 className="font-['Cinzel'] text-lg sm:text-xl font-bold text-[#E8D5A3] mb-3 sm:mb-4">
              Royal Prince Booking Promise
            </h3>
            
            <p className="text-xs sm:text-sm text-[#CBD5D0] leading-relaxed mb-6">
              Serving Pala, Kottayam, Kidangoor, Changanassery, and throughout Central Kerala with our dedicated insulated fleet.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#070A09] border border-[#C5A869]/40 flex items-center justify-center text-[#C5A869] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#FDFBF7]">Free Menu Customization</h4>
                  <p className="text-xs text-[#8A9C94] mt-0.5">Customized courses matched to your family&apos;s tradition.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#070A09] border border-[#C5A869]/40 flex items-center justify-center text-[#C5A869] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#FDFBF7]">Insulated Fleet Dispatch</h4>
                  <p className="text-xs text-[#8A9C94] mt-0.5">Hot fresh food dispatched directly to your banquet hall.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#070A09] border border-[#C5A869]/40 flex items-center justify-center text-[#C5A869] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase text-[#FDFBF7]">Founder-Led Supervision</h4>
                  <p className="text-xs text-[#8A9C94] mt-0.5">Johnykutty P.V. personally guarantees timely execution.</p>
                </div>
              </div>
            </div>

            {/* Direct Phone Assistance */}
            <div className="p-4 rounded-xl bg-[#070A09] border border-[#C5A869]/30 text-center">
              <span className="text-[11px] text-[#8A9C94] uppercase tracking-wider block mb-1">
                Prefer to speak directly with our team?
              </span>
              <a
                href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
                className="text-sm font-bold text-[#E8D5A3] hover:text-[#FDFBF7] flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C5A869]" />
                <span>Call {COMPANY_INFO.phonePrimary}</span>
              </a>
              <span className="text-[10px] text-[#8A9C94] mt-1 block">
                Direct WhatsApp: +91 70122 30764
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#0D1412] rounded-xl p-5 sm:p-8 md:p-10 border border-[#C5A869]/30 shadow-2xl relative">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* 1. Full Name */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-[#C5A869] mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Antony Joseph"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#070A09] border text-base sm:text-xs text-white placeholder-white/40 focus:outline-none transition-colors ${
                      errors.fullName ? 'border-red-400' : 'border-[#C5A869]/30 focus:border-[#C5A869]'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-red-400 mt-1">{errors.fullName}</p>}
                </div>

                {/* 2. Phone Number */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-[#C5A869] mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Phone Number *</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="e.g., +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#070A09] border text-base sm:text-xs text-white placeholder-white/40 focus:outline-none transition-colors ${
                      errors.phone ? 'border-red-400' : 'border-[#C5A869]/30 focus:border-[#C5A869]'
                    }`}
                  />
                  {errors.phone && <p className="text-[11px] text-red-400 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* 3. Event Type */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-[#C5A869] mb-1.5">
                    Event Type *
                  </label>
                  <select
                    value={formData.eventType}
                    onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#070A09] border border-[#C5A869]/30 text-base sm:text-xs text-white focus:outline-none focus:border-[#C5A869]"
                  >
                    {eventTypes.map((et) => (
                      <option key={et} value={et} className="bg-[#070A09]">{et}</option>
                    ))}
                  </select>
                </div>

                {/* 4. Event Date */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-[#C5A869] mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Event Date *</span>
                  </label>
                  <input
                    type="date"
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#070A09] border text-base sm:text-xs text-white focus:outline-none transition-colors ${
                      errors.eventDate ? 'border-red-400' : 'border-[#C5A869]/30 focus:border-[#C5A869]'
                    }`}
                  />
                  {errors.eventDate && <p className="text-[11px] text-red-400 mt-1">{errors.eventDate}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* 5. Event Location */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-[#C5A869] mb-1.5 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Event Location *</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Pala Parish Hall, Kottayam"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#070A09] border text-base sm:text-xs text-white placeholder-white/40 focus:outline-none transition-colors ${
                      errors.location ? 'border-red-400' : 'border-[#C5A869]/30 focus:border-[#C5A869]'
                    }`}
                  />
                  {errors.location && <p className="text-[11px] text-red-400 mt-1">{errors.location}</p>}
                </div>

                {/* 6. Number of Guests */}
                <div>
                  <label className="block text-xs uppercase font-bold tracking-wider text-[#C5A869] mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" />
                    <span>Number of Guests *</span>
                  </label>
                  <input
                    type="number"
                    placeholder="e.g., 500"
                    min="20"
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-lg bg-[#070A09] border text-base sm:text-xs text-white placeholder-white/40 focus:outline-none transition-colors ${
                      errors.guestCount ? 'border-red-400' : 'border-[#C5A869]/30 focus:border-[#C5A869]'
                    }`}
                  />
                  {errors.guestCount && <p className="text-[11px] text-red-400 mt-1">{errors.guestCount}</p>}
                </div>
              </div>

              {/* 7. Catering Requirements */}
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-[#C5A869] mb-1.5 flex items-center gap-1.5">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Catering Requirements</span>
                </label>
                <select
                  value={formData.cateringReq}
                  onChange={(e) => setFormData({ ...formData, cateringReq: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#070A09] border border-[#C5A869]/30 text-base sm:text-xs text-white focus:outline-none focus:border-[#C5A869]"
                >
                  {cateringOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#070A09]">{opt}</option>
                  ))}
                </select>
              </div>

              {/* 8. Additional Information */}
              <div>
                <label className="block text-xs uppercase font-bold tracking-wider text-[#C5A869] mb-1.5">
                  Additional Information / Special Dishes / Decor Requirements
                </label>
                <textarea
                  rows="3"
                  placeholder="Specify preferences (e.g., special duck roast, live dosa station, floral stage decor, welcome drink bar)..."
                  value={formData.additionalInfo}
                  onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-[#070A09] border border-[#C5A869]/30 text-base sm:text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#C5A869]"
                />
              </div>

              {/* Prominent Action Button: REQUEST A QUOTATION */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-gradient-to-r from-[#FFF1CD] via-[#DFCA96] to-[#C5A869] text-[#070A09] font-extrabold text-sm uppercase tracking-widest rounded-lg shadow-xl hover:shadow-[0_0_25px_rgba(197,168,105,0.35)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#070A09]" />
                  <span>REQUEST A QUOTATION</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-[#8A9C94] mt-2">
                Clicking will open WhatsApp with your customized inquiry directly to +91 70122 30764.
              </p>
            </form>

            {/* Submission / Confirmation Summary Box */}
            {submitted && (
              <div className="mt-6 p-4 rounded-lg bg-[#070A09] border border-[#25D366] animate-fadeIn text-xs text-[#CBD5D0]">
                <div className="flex items-center gap-2 text-[#25D366] font-bold uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Enquiry Prepared Successfully!</span>
                </div>
                <p className="text-white/80 mb-3">
                  If WhatsApp did not automatically open on your device, you can copy your enquiry summary or open WhatsApp directly:
                </p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => {
                      const msg = encodeURIComponent(generateWhatsAppMessage());
                      window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
                    }}
                    className="px-3.5 py-2 bg-[#25D366] text-white rounded font-bold text-[11px] flex items-center gap-1.5 shadow"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    Open WhatsApp Chat
                  </button>

                  <button
                    onClick={handleCopySummary}
                    className="px-3.5 py-2 bg-[#0D1412] border border-[#C5A869]/50 text-[#E8D5A3] rounded font-semibold text-[11px] flex items-center gap-1.5"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? "Copied to Clipboard!" : "Copy Enquiry Summary"}</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
