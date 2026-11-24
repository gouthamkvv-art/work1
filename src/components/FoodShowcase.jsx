import React, { useState } from 'react';
import { UtensilsCrossed, Sparkles, MessageCircle, Eye } from 'lucide-react';
import { FOOD_COLLECTION, COMPANY_INFO } from '../data/siteData';

export default function FoodShowcase({ onSelectImage, onOpenChatbot, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Kerala Sadhya", "Biriyani & Grills", "Non-Veg Specialities", "Royal Desserts"];

  const filteredItems = selectedCategory === "All"
    ? FOOD_COLLECTION
    : FOOD_COLLECTION.filter(item => item.category === selectedCategory || (selectedCategory === "Non-Veg Specialities" && (item.category.includes("Non-Veg") || item.category.includes("Traditional"))));

  const handleDishInquiry = (dish) => {
    const text = encodeURIComponent(
      `Hello Royal Prince Caters! I am interested in including *${dish.name}* (${dish.category}) in our event catering menu. Could you share menu package options?`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#FBF9F5] text-[#1E293B] relative border-b border-[#EADFC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCF8EE] border border-[#C59A3F]/30 text-[#9E7628] text-[11px] font-bold tracking-[0.25em] uppercase mb-3 shadow-xs">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#C59A3F]" />
            <span>Signature Gastronomy</span>
          </div>
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-3">
            The Royal Food Collection
          </h2>
          <div className="w-20 h-1 bg-[#C59A3F] mx-auto mb-4 rounded-full" />
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl italic text-[#526071] max-w-2xl mx-auto">
            Traditional Central Travancore recipes crafted with cold-pressed oils, slow-fire dum pots, and hand-selected high-range spices.
          </p>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap mt-6 sm:mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gold-gradient text-[#0F172A] font-bold shadow-sm'
                    : 'bg-white text-[#526071] hover:text-[#0F172A] hover:bg-[#F7F4EE] border border-[#EADFC7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Food Items Grid (4 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#EADFC7] hover:border-[#C59A3F] shadow-xs hover:shadow-royal-hover transition-all duration-300 flex flex-col group"
            >
              {/* Dish Visual */}
              <div 
                className="relative h-48 overflow-hidden cursor-pointer"
                onClick={() => onSelectImage && onSelectImage({
                  title: dish.name,
                  image: dish.image,
                  category: dish.category,
                  description: dish.description
                })}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                
                {/* Type Badge */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 text-[#0F172A] font-bold text-[9px] tracking-wider uppercase border border-[#EADFC7] shadow-xs">
                  {dish.type}
                </div>

                {/* Quick Preview Icon */}
                <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                  <Eye className="w-3.5 h-3.5 text-[#0F172A]" />
                </div>
              </div>

              {/* Dish Details */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] text-[#9E7628] font-bold uppercase tracking-wider block mb-1">
                    {dish.category}
                  </span>
                  <h3 className="font-['Cinzel'] text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#9E7628] transition-colors mb-2 leading-snug">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-[#526071] leading-relaxed line-clamp-3 mb-3">
                    {dish.description}
                  </p>
                </div>

                {/* Chef's Note + Action */}
                <div>
                  <div className="p-2 rounded-lg bg-[#FCF8EE] border border-[#EADFC7]/60 text-[11px] text-[#785918] mb-3 leading-snug">
                    <span className="font-bold">Chef&apos;s Touch:</span> {dish.chefNote}
                  </div>

                  <button
                    onClick={() => handleDishInquiry(dish)}
                    className="w-full py-2 px-3 rounded-xl bg-[#F7F4EE] hover:bg-[#10B981]/15 text-[#0F172A] hover:text-[#047857] border border-[#EADFC7] hover:border-[#10B981]/30 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Enquire Menu</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-[#EADFC7] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div>
            <h3 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#0F172A]">
              Eager to See Our Celebration Presentations?
            </h3>
            <p className="text-xs sm:text-sm text-[#526071] mt-0.5">
              Explore actual wedding receptions, live plantain leaf sadhyas, and grand setups across Kerala.
            </p>
          </div>
          <button
            onClick={() => onNavigate ? onNavigate('gallery') : null}
            className="px-6 py-2.5 rounded-xl bg-gold-gradient text-[#0F172A] font-bold text-xs uppercase tracking-wider shadow-sm hover:brightness-105 active:scale-98 transition-all shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <span>View Event Gallery</span>
            <Sparkles className="w-3.5 h-3.5 text-[#0F172A]" />
          </button>
        </div>
      </div>
    </section>
  );
}
