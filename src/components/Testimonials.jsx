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
    <section id="testimonials" className="py-16 sm:py-24 bg-[#F3E8D0] text-[#292521] relative overflow-hidden border-b border-[#C6A15B]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F0] border border-[#C6A15B]/40 text-[#9E7628] text-[11px] font-bold tracking-[0.25em] uppercase mb-3 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Words of Appreciation</span>
          </div>
          
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold text-[#101010] mb-3">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-[#C6A15B] mx-auto mb-4 rounded-full" />
          
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl italic text-[#292521]/80 max-w-2xl mx-auto">
            The heartfelt blessings and smiles of host families across Central Travancore are our greatest testament.
          </p>
        </div>

        {/* Carousel Card (Ivory White #FAF7F0 Card with Subtle Gold Border) */}
        <div className="relative bg-[#FAF7F0] text-[#292521] rounded-3xl p-6 sm:p-12 border border-[#C6A15B]/40 shadow-royal max-w-3xl mx-auto">
          {/* Watermark Quote Icon */}
          <div className="absolute top-6 right-8 text-[#C6A15B]/15 pointer-events-none">
            <Quote className="w-20 h-20 sm:w-28 sm:h-28" />
          </div>

          <div className="relative z-10">
            {/* 5 Golden Stars */}
            <div className="flex items-center gap-1.5 mb-5">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4.5 h-4.5 text-[#C6A15B] fill-[#C6A15B]" />
              ))}
              <span className="ml-2 text-xs font-bold text-[#9E7628]">5.0 / 5.0 Star Rating</span>
            </div>

            {/* Testimonial Quote */}
            <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl italic text-[#101010] leading-relaxed mb-8 font-normal">
              &ldquo;{current.review}&rdquo;
            </p>

            {/* Author Information */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#C6A15B]/25 pt-5 gap-4">
              <div>
                <h3 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#101010]">
                  {current.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#292521]/75 mt-0.5">
                  <span className="font-semibold text-[#9E7628]">{current.event}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
                    {current.location}
                  </span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={prev}
                  aria-label="Previous Testimonial"
                  className="w-9 h-9 rounded-full bg-[#292521] hover:bg-[#101010] text-[#FAF7F0] hover:text-[#C6A15B] flex items-center justify-center transition-all cursor-pointer shadow-xs border border-[#C6A15B]/40"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-[#292521] font-bold px-1">
                  {currentIndex + 1} of {TESTIMONIALS.length}
                </span>
                <button
                  onClick={next}
                  aria-label="Next Testimonial"
                  className="w-9 h-9 rounded-full bg-[#292521] hover:bg-[#101010] text-[#FAF7F0] hover:text-[#C6A15B] flex items-center justify-center transition-all cursor-pointer shadow-xs border border-[#C6A15B]/40"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage Badges */}
        <div className="mt-12 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-[#292521]/70 font-bold mb-3">
            Serving Celebrations Across Central Kerala
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            {locations.map((loc) => (
              <span 
                key={loc}
                className="px-3.5 py-1.5 bg-[#FAF7F0] rounded-full border border-[#C6A15B]/30 text-xs font-semibold text-[#101010] shadow-xs"
              >
                {loc}
              </span>
            ))}
          </div>

          <button
            onClick={() => onNavigate ? onNavigate('contact') : null}
            className="btn-royal-gold inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[#101010] font-bold text-xs uppercase tracking-wider shadow-gold-button cursor-pointer"
          >
            <span>Proceed to Quotation &amp; Contact</span>
            <ArrowRight className="w-4 h-4 text-[#101010]" />
          </button>
        </div>
      </div>
    </section>
  );
}
