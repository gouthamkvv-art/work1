import React, { useState } from 'react';
import { X, Calendar, MessageCircle, Users, MapPin, Phone, User } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function QuotationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Grand Wedding Catering',
    guests: '350',
    location: 'Pala, Kottayam',
    eventDate: '',
    foodPreference: 'Both Veg & Non-Veg Multi-Course',
    needDecor: true,
  });

  if (!isOpen) return null;

  const handleSendToWhatsApp = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.eventDate) {
      alert("Please fill in Name, Phone, and Event Date.");
      return;
    }

    const message = `Hello Royal Prince Caters and Event Management! 👑\n\nI would like to request an official quotation:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Event Type:* ${formData.eventType}\n*Event Date:* ${formData.eventDate}\n*Location:* ${formData.location}\n*Estimated Guests:* ${formData.guests} people\n*Food Preference:* ${formData.foodPreference}\n*Stage & Decor:* ${formData.needDecor ? 'Yes, required' : 'Catering only'}\n\nPlease share availability and quotation proposals.\n\nThank you!`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-lg w-full bg-white border border-[#EADFC7] rounded-3xl shadow-2xl p-6 sm:p-8 text-[#1E293B] my-auto max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#F7F4EE] hover:bg-[#EADFC7] text-[#0F172A] flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6 pr-6 sm:pr-0">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FCF8EE] border border-[#C59A3F]/30 mb-2.5 overflow-hidden">
            <img src="/logo.png" alt="Royal Prince Logo" className="w-9 h-9 object-contain" />
          </div>
          <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#0F172A]">
            Request An Official Quotation
          </h3>
          <p className="text-[11px] text-[#9E7628] uppercase tracking-widest mt-0.5 font-semibold">
            Royal Prince Caters &amp; Event Management • Pala
          </p>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSendToWhatsApp} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1">
              Your Full Name *
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                required
                placeholder="e.g. Thomas Varghese"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#CBD5E1] focus:border-[#C59A3F] text-[#0F172A] text-sm outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#CBD5E1] focus:border-[#C59A3F] text-[#0F172A] text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1">
                Event Date *
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="date"
                  required
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#CBD5E1] focus:border-[#C59A3F] text-[#0F172A] text-sm outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1">
                Event Type
              </label>
              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#CBD5E1] focus:border-[#C59A3F] text-[#0F172A] text-xs outline-none"
              >
                <option value="Grand Wedding Catering">Grand Wedding Catering</option>
                <option value="Authentic Kerala Sadhya">Authentic Kerala Sadhya</option>
                <option value="Reception / Evening Dinner">Reception / Evening Dinner</option>
                <option value="Betrothal / Manasammatham">Betrothal / Manasammatham</option>
                <option value="Corporate / Family Function">Corporate / Family Function</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1">
                Estimated Guests
              </label>
              <div className="relative">
                <Users className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="number"
                  min="50"
                  step="50"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#CBD5E1] focus:border-[#C59A3F] text-[#0F172A] text-sm outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0F172A] uppercase mb-1">
              Location / Venue Town
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="e.g. Pala, Kottayam"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#FBF9F5] border border-[#CBD5E1] focus:border-[#C59A3F] text-[#0F172A] text-sm outline-none"
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gold-gradient text-[#0F172A] font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-105 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#0F172A] fill-[#0F172A]" />
              <span>Send To WhatsApp Desk</span>
            </button>
            <p className="text-center text-[10px] text-[#64748B] mt-2">
              Direct connection with Founder Johnykutty P.V. &amp; Pala Banquet Team.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
