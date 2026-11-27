import React, { useState } from 'react';
import { UtensilsCrossed, Sparkles, MessageCircle, Eye, ArrowRight } from 'lucide-react';
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
    <section id="menu" className="py-16 sm:py-24 bg-[#FAF7F0] text-[#292521] relative border-b border-[#C6A15B]/30">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-royal-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8D0] border border-[#C6A15B]/40 text-[#9E7628] text-[11px] font-bold tracking-[0.25em] uppercase mb-3 shadow-xs">
            <UtensilsCrossed className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Signature Gastronomy</span>
          </div>
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold text-[#101010] mb-3">
            The Royal Food Collection
          </h2>
          <div className="w-20 h-1 bg-[#C6A15B] mx-auto mb-4 rounded-full" />
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl italic text-[#292521]/80 max-w-2xl mx-auto">
            Traditional Central Travancore recipes crafted with cold-pressed oils, slow-fire dum pots, and hand-selected high-range spices.
          </p>

          {/* Category Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap mt-6 sm:mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gold-gradient text-[#101010] font-bold shadow-md'
                    : 'bg-[#F3E8D0] text-[#292521] hover:text-[#101010] hover:bg-white border border-[#C6A15B]/30'
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
              className="bg-[#FAF7F0] rounded-2xl overflow-hidden border border-[#C6A15B]/35 hover:border-[#C6A15B] shadow-royal hover:shadow-royal-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
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
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-black/20 to-transparent" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#101010]/90 text-[#DFBE6F] font-bold text-[9px] tracking-wider uppercase border border-[#C6A15B]/40 shadow-xs">
                    {dish.type}
                  </div>

                  {/* Quick Preview Icon */}
                  <div className="absolute bottom-2.5 right-2.5 w-7 h-7 rounded-full bg-[#101010]/80 border border-[#C6A15B]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    <Eye className="w-3.5 h-3.5 text-[#DFBE6F]" />
                  </div>
                </div>

                {/* Dish Details */}
                <div className="p-4 sm:p-5">
                  <span className="text-[10px] text-[#9E7628] font-bold uppercase tracking-wider block mb-1">
                    {dish.category}
                  </span>
                  <h3 className="font-['Cinzel'] text-sm sm:text-base font-bold text-[#101010] group-hover:text-[#9E7628] transition-colors mb-2 leading-snug">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-[#292521]/80 leading-relaxed line-clamp-3 mb-3">
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Chef's Note + Action */}
              <div className="p-4 sm:p-5 pt-0">
                <div className="p-2 rounded-lg bg-[#F3E8D0] border border-[#C6A15B]/30 text-[11px] text-[#292521] mb-3 leading-snug">
                  <span className="font-bold text-[#9E7628]">Chef&apos;s Touch:</span> {dish.chefNote}
                </div>

                <button
                  onClick={() => handleDishInquiry(dish)}
                  className="w-full py-2 px-3 rounded-xl bg-[#292521] hover:bg-[#101010] text-[#F3E8D0] hover:text-[#C6A15B] border border-[#C6A15B]/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Enquire Dish Menu</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation Banner - Dark Espresso #292521 */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#292521] border border-[#C6A15B]/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-white shadow-xl">
          <div>
            <h3 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#FAF7F0]">
              Eager to See Our Celebration Presentations?
            </h3>
            <p className="text-xs sm:text-sm text-[#F3E8D0]/75 mt-0.5">
              Explore actual wedding receptions, live plantain leaf sadhyas, and grand setups across Kerala.
            </p>
          </div>
          <button
            onClick={() => onNavigate ? onNavigate('gallery') : null}
            className="btn-royal-gold px-6 py-2.5 rounded-xl text-[#101010] font-bold text-xs uppercase tracking-wider shadow-md shrink-0 cursor-pointer flex items-center gap-1.5"
          >
            <span>View Event Gallery</span>
            <Sparkles className="w-3.5 h-3.5 text-[#101010]" />
          </button>
        </div>
      </div>
    </section>
  );
}
