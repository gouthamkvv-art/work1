import React, { useState } from 'react';
import { X, Crown, MessageCircle, Send, Calculator, Check, Users, MapPin, Calendar, Phone, User } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function QuotationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Grand Wedding Catering',
    guests: 350,
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

    const message = `Hello Royal Prince Caters and Event Management! 👑\n\nI would like to request a formal quotation:\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Event Type:* ${formData.eventType}\n*Event Date:* ${formData.eventDate}\n*Location:* ${formData.location}\n*Estimated Guests:* ${formData.guests} people\n*Food Style:* ${formData.foodPreference}\n*Stage & Event Decor:* ${formData.needDecor ? 'Yes, required' : 'Catering only'}\n\nPlease share availability, customized menu packages, and pricing details.\n\nThank you!`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-xl w-full bg-[#0D1412] border-2 border-[#C5A869] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.95)] p-6 sm:p-8 text-[#FDFBF7] my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-4 right-4 text-[#CBD5D0] hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#070A09] border border-[#C5A869] mb-3 shadow-md overflow-hidden">
            <img src="/logo.png" alt="Royal Prince Catering Logo" className="w-full h-full object-contain rounded-full" />
          </div>
          <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#FDFBF7]">
            Request An Official Quotation
          </h3>
          <p className="text-xs text-[#E8D5A3] uppercase tracking-widest mt-1">
            Royal Prince Caters &amp; Event Management • Pala
          </p>
        </div>

        <form onSubmit={handleSendToWhatsApp} className="space-y-4 text-xs">
          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase font-bold text-[#C5A869] mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g., Mathew Kurian"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-[#070A09] border border-[#C5A869]/30 text-white focus:outline-none focus:border-[#C5A869]"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase font-bold text-[#C5A869] mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                placeholder="e.g., +91 94475 00000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-[#070A09] border border-[#C5A869]/30 text-white focus:outline-none focus:border-[#C5A869]"
              />
            </div>
          </div>

          {/* Event Type & Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase font-bold text-[#C5A869] mb-1">Event Type</label>
              <select
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-[#070A09] border border-[#C5A869]/30 text-white focus:outline-none focus:border-[#C5A869]"
              >
                <option value="Grand Wedding Catering">Grand Wedding Catering</option>
                <option value="Traditional Kerala Sadhya">Traditional Kerala Sadhya</option>
                <option value="Reception & Evening Feast">Reception &amp; Evening Feast</option>
                <option value="Betrothal / Manasammatham">Betrothal / Manasammatham</option>
                <option value="Birthday / Jubilee Celebration">Birthday / Jubilee Celebration</option>
                <option value="Corporate Event / Conference">Corporate Event / Conference</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] uppercase font-bold text-[#C5A869] mb-1">Event Date *</label>
              <input
                type="date"
                required
                value={formData.eventDate}
                onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-[#070A09] border border-[#C5A869]/30 text-white focus:outline-none focus:border-[#C5A869]"
              />
            </div>
          </div>

          {/* Guest Count Slider */}
          <div className="bg-[#070A09] p-4 rounded-xl border border-[#C5A869]/25 shadow-inner">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-[11px] uppercase font-bold text-[#C5A869] flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5" />
                <span>Estimated Guests</span>
              </label>
              <span className="font-['Cinzel'] font-bold text-sm text-[#E8D5A3]">
                {formData.guests} Guests
              </span>
            </div>
            <input
              type="range"
              min="50"
              max="3000"
              step="25"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
              className="w-full accent-[#C5A869] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#8A9C94] mt-1">
              <span>50 Intimate</span>
              <span>500 Standard</span>
              <span>1500+ Grand</span>
              <span>3000 Royal</span>
            </div>
          </div>

          {/* Location & Food Preference */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] uppercase font-bold text-[#C5A869] mb-1">Event Location / Town</label>
              <input
                type="text"
                placeholder="e.g., Pala, Kidangoor, Kottayam"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-[#070A09] border border-[#C5A869]/30 text-white focus:outline-none focus:border-[#C5A869]"
              />
            </div>
            <div>
              <label className="block text-[11px] uppercase font-bold text-[#C5A869] mb-1">Catering Preference</label>
              <select
                value={formData.foodPreference}
                onChange={(e) => setFormData({ ...formData, foodPreference: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-[#070A09] border border-[#C5A869]/30 text-white focus:outline-none focus:border-[#C5A869]"
              >
                <option value="Both Veg & Non-Veg Multi-Course">Both Veg &amp; Non-Veg Multi-Course</option>
                <option value="Traditional 28-Dish Kerala Sadhya">Traditional 28-Dish Kerala Sadhya</option>
                <option value="Royal Dum Biriyani Feast">Royal Dum Biriyani Feast</option>
                <option value="Live Counters + Sizzlers + Starters">Live Counters + Sizzlers + Starters</option>
                <option value="Custom Syrian Christian Delicacies">Custom Syrian Christian Delicacies</option>
              </select>
            </div>
          </div>

          {/* Stage Decor Checkbox */}
          <div className="flex items-center gap-2 pt-1">
            <input
              type="checkbox"
              id="decorCheck"
              checked={formData.needDecor}
              onChange={(e) => setFormData({ ...formData, needDecor: e.target.checked })}
              className="w-4 h-4 accent-[#C5A869] cursor-pointer"
            />
            <label htmlFor="decorCheck" className="text-xs text-[#CBD5D0] cursor-pointer">
              Include Stage Decor, Floral Entrance &amp; Event Management in quotation
            </label>
          </div>

          {/* Submit Action */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-[#FFF1CD] via-[#DFCA96] to-[#C5A869] text-[#070A09] font-extrabold text-xs uppercase tracking-widest rounded-lg shadow-xl hover:shadow-[0_0_25px_rgba(197,168,105,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#070A09]" />
              <span>Send Quotation to WhatsApp (+91 70122 30764)</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
