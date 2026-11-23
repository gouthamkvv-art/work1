import React, { useState } from 'react';
import { Crown, Sparkles, UtensilsCrossed, ChevronRight, BookOpen, MessageCircle } from 'lucide-react';
import { FOOD_COLLECTION, COMPANY_INFO } from '../data/siteData';

export default function FoodShowcase({ onSelectImage, onOpenChatbot }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Kerala Sadhya",
    "Biriyani & Grills",
    "Traditional Kerala Cuisine",
    "Non-Veg Specialities",
    "Live Counters",
    "Royal Desserts",
    "Starters & Snacks"
  ];

  const filteredItems = selectedCategory === "All"
    ? FOOD_COLLECTION
    : FOOD_COLLECTION.filter(item => item.category === selectedCategory);

  const handleDishInquiry = (dish) => {
    const text = encodeURIComponent(
      `Hello Royal Prince Caters! I am interested in including *${dish.name}* (${dish.category}) in our event catering menu. Could you share menu package options?`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="food-collection" className="py-28 bg-[#090E0C] text-[#CBD5D0] relative border-b border-[#C5A869]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A869] font-semibold mb-3">
            <UtensilsCrossed className="w-4 h-4 text-[#C5A869]" />
            <span>Signature Gastronomy</span>
          </div>
          <h2 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl font-bold text-[#FDFBF7] mb-4">
            The Signature Food Collection
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C5A869] mx-auto mb-6" />
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl italic text-[#CBD5D0] max-w-2xl mx-auto font-normal">
            An editorial showcase of authentic Central Kerala culinary masterpieces, prepared with cold-pressed oils, freshly roasted whole spices, and generational craft.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#DFCA96] to-[#C5A869] text-[#070A09] font-bold shadow-[0_0_15px_rgba(197,168,105,0.3)] scale-105'
                    : 'bg-[#0D1412] text-[#CBD5D0] hover:text-[#C5A869] hover:bg-[#121C18] border border-[#C5A869]/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((dish) => (
            <article
              key={dish.id}
              className="bg-[#0D1412] rounded-xl overflow-hidden border border-[#C5A869]/20 hover:border-[#C5A869] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all duration-300 flex flex-col group"
            >
              {/* Dish Visual Banner */}
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => onSelectImage({
                  title: dish.name,
                  category: dish.category,
                  description: dish.description,
                  image: dish.image,
                  location: "Royal Prince Kitchen, Pala"
                })}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1412] via-transparent to-transparent" />
                
                {/* Dietary Badge */}
                <div className="absolute top-3.5 left-3.5 px-2.5 py-1 rounded bg-[#070A09]/90 border border-[#C5A869]/40 text-[#E8D5A3] text-[10px] font-semibold uppercase tracking-wider backdrop-blur-xs">
                  {dish.type}
                </div>

                {/* Category Pill */}
                <div className="absolute top-3.5 right-3.5 px-2.5 py-1 rounded bg-black/75 text-[#C5A869] text-[10px] font-medium tracking-wide backdrop-blur-xs border border-[#C5A869]/20">
                  {dish.category}
                </div>

                {/* Click to expand pill */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#C5A869] text-[#070A09] text-[10px] font-bold px-2.5 py-1 rounded shadow">
                  View Large Photo
                </div>
              </div>

              {/* Editorial Description */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Cinzel'] text-lg font-bold text-[#FDFBF7] group-hover:text-[#E8D5A3] transition-colors mb-2 leading-snug">
                    {dish.name}
                  </h3>

                  <p className="text-xs text-[#CBD5D0] leading-relaxed mb-4 font-normal">
                    {dish.description}
                  </p>

                  {/* Chef's Signature Note */}
                  <div className="bg-[#070A09] p-3.5 rounded-lg border-l-2 border-[#C5A869] mb-4 border-y border-r border-[#C5A869]/10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#E8D5A3] block mb-0.5">
                      Johnykutty P.V. Heritage Standard
                    </span>
                    <p className="text-[11px] text-[#8A9C94] italic">
                      &ldquo;{dish.chefNote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Dish Inquire CTA */}
                <div className="pt-2 border-t border-[#C5A869]/20 flex items-center justify-between">
                  <button
                    onClick={() => handleDishInquiry(dish)}
                    className="text-xs font-bold text-[#E8D5A3] hover:text-[#FDFBF7] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Inquire this Dish</span>
                  </button>

                  <span className="text-[10px] uppercase tracking-widest text-[#8A9C94] font-semibold">
                    Thermal Van Dispatched
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Magazine Feature Box */}
        <div className="mt-16 bg-[#0D1412] text-[#FDFBF7] rounded-xl p-8 sm:p-10 border border-[#C5A869]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A869] font-bold block mb-2">
              Bespoke Menu Planning
            </span>
            <h3 className="font-['Cinzel'] text-2xl sm:text-3xl font-bold mb-3 text-[#FDFBF7]">
              Personal Menu Tasting &amp; Consultation Sessions
            </h3>
            <p className="text-xs sm:text-sm text-[#8A9C94] leading-relaxed">
              We understand the gravity of wedding dining in Kerala. Founder Johnykutty P.V. and our executive culinary team in Pala sit down with you to finalize every single starter, curry, dessert, and serving cadence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button
              onClick={onOpenChatbot}
              className="px-6 py-3.5 bg-gradient-to-r from-[#FFF1CD] via-[#DFCA96] to-[#C5A869] text-[#070A09] text-xs font-bold uppercase tracking-wider rounded shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer text-center"
            >
              Request Full Menu PDF on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
