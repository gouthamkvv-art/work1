import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin, Heart, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export default function Testimonials({ onNavigate }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  const locations = ["Pala", "Kidangoor", "Kottayam", "Ettumanoor", "Changanassery", "Thodupuzha", "Ernakulam"];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#FBF9F5] text-[#1E293B] relative overflow-hidden border-b border-[#EADFC7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCF8EE] border border-[#C59A3F]/30 text-[#9E7628] text-[11px] font-bold tracking-[0.25em] uppercase mb-3 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#C59A3F]" />
            <span>Words of Appreciation</span>
          </div>
          
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold text-[#0F172A] mb-3">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-[#C59A3F] mx-auto mb-4 rounded-full" />
          
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl italic text-[#526071] max-w-2xl mx-auto">
            The heartfelt blessings and smiles of host families across Central Travancore are our greatest testament.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="relative bg-white text-[#1E293B] rounded-3xl p-6 sm:p-12 border border-[#EADFC7] shadow-royal max-w-3xl mx-auto">
          {/* Watermark Quote Icon */}
          <div className="absolute top-6 right-8 text-[#C59A3F]/10 pointer-events-none">
            <Quote className="w-20 h-20 sm:w-28 sm:h-28" />
          </div>

          <div className="relative z-10">
            {/* 5 Golden Stars */}
            <div className="flex items-center gap-1.5 mb-5">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4.5 h-4.5 text-[#C59A3F] fill-[#C59A3F]" />
              ))}
              <span className="ml-2 text-xs font-bold text-[#9E7628]">5.0 / 5.0 Rating</span>
            </div>

            {/* Testimonial Quote */}
            <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl italic text-[#0F172A] leading-relaxed mb-8">
              &ldquo;{current.review}&rdquo;
            </p>

            {/* Author Information */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#EADFC7] pt-5 gap-4">
              <div>
                <h3 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#0F172A]">
                  {current.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#64748B] mt-0.5">
                  <span className="font-medium text-[#9E7628]">{current.event}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C59A3F]" />
                    {current.location}
                  </span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={prev}
                  aria-label="Previous Testimonial"
                  className="w-9 h-9 rounded-full bg-[#F7F4EE] hover:bg-gold-gradient text-[#0F172A] flex items-center justify-center transition-all cursor-pointer shadow-xs border border-[#EADFC7]"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#64748B] font-semibold px-1">
                  {currentIndex + 1} of {TESTIMONIALS.length}
                </span>
                <button
                  onClick={next}
                  aria-label="Next Testimonial"
                  className="w-9 h-9 rounded-full bg-[#F7F4EE] hover:bg-gold-gradient text-[#0F172A] flex items-center justify-center transition-all cursor-pointer shadow-xs border border-[#EADFC7]"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Badges */}
        <div className="mt-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#64748B] font-bold mb-3">
            Serving Celebrations Across Central Kerala
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {locations.map((loc) => (
              <span 
                key={loc}
                className="px-3.5 py-1.5 bg-white rounded-full border border-[#EADFC7] text-xs font-semibold text-[#0F172A] shadow-xs"
              >
                {loc}
              </span>
            ))}
          </div>

          <button
            onClick={() => onNavigate ? onNavigate('contact') : null}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gold-gradient text-[#0F172A] font-bold text-xs uppercase tracking-wider shadow-sm hover:brightness-105 active:scale-98 transition-all cursor-pointer"
          >
            <span>Proceed to Quotation &amp; Contact</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
