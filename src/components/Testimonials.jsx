import React, { useState } from 'react';
import { Crown, Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-16 sm:py-28 bg-[#070A09] text-[#CBD5D0] relative overflow-hidden border-b border-[#C5A869]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A869] font-semibold mb-3">
            <Quote className="w-4 h-4 text-[#C5A869]" />
            <span>Words of Appreciation</span>
          </div>
          
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold text-[#FDFBF7] mb-3 sm:mb-4">
            Guest &amp; Client Testimonials
          </h2>
          <div className="w-20 h-[1.5px] bg-[#C5A869] mx-auto mb-4 sm:mb-6" />
          
          <p className="font-['Cormorant_Garamond'] text-base sm:text-xl italic text-[#CBD5D0] max-w-2xl mx-auto font-normal">
            The joy of our client families in Pala, Kidangoor, Kottayam, and across Kerala is our crowning achievement.
          </p>
        </div>

        {/* Carousel Showcase */}
        <div className="relative bg-[#0D1412] text-[#FDFBF7] rounded-2xl p-6 sm:p-14 border border-[#C5A869]/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] max-w-4xl mx-auto">
          {/* Watermark Quote Icon */}
          <div className="absolute top-6 right-8 text-[#C5A869]/8 pointer-events-none">
            <Quote className="w-24 h-24 sm:w-32 sm:h-32" />
          </div>

          <div className="relative z-10">
            {/* Stars */}
            <div className="flex items-center gap-1.5 mb-4 sm:mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5A869] fill-[#C5A869]" />
              ))}
            </div>

            {/* Testimonial Quote */}
            <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl md:text-3xl italic text-[#FDFBF7] leading-relaxed mb-6 sm:mb-8">
              &ldquo;{current.review}&rdquo;
            </p>

            {/* Author Information */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-t border-[#C5A869]/20 pt-5 sm:pt-6 gap-4">
              <div>
                <h3 className="font-['Cinzel'] text-base sm:text-lg font-bold text-[#E8D5A3]">
                  {current.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#8A9C94] mt-0.5">
                  <span>{current.event}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-[#CBD5D0]">
                    <MapPin className="w-3 h-3 text-[#C5A869]" />
                    {current.location}
                  </span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  aria-label="Previous Testimonial"
                  className="w-10 h-10 rounded-full bg-[#070A09] border border-[#C5A869]/40 hover:border-[#C5A869] hover:bg-[#C5A869] hover:text-[#070A09] text-[#C5A869] flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-[#8A9C94] font-medium">
                  {currentIndex + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={next}
                  aria-label="Next Testimonial"
                  className="w-10 h-10 rounded-full bg-[#070A09] border border-[#C5A869]/40 hover:border-[#C5A869] hover:bg-[#C5A869] hover:text-[#070A09] text-[#C5A869] flex items-center justify-center transition-all cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos / Region Coverage Tag */}
        <div className="mt-14 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-[#8A9C94] font-semibold mb-3">
            Proudly Catering Across Kerala
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs text-[#CBD5D0] font-medium">
            <span className="px-3.5 py-1.5 bg-[#0D1412] rounded-lg border border-[#C5A869]/25">Pala</span>
            <span className="px-3.5 py-1.5 bg-[#0D1412] rounded-lg border border-[#C5A869]/25">Kidangoor</span>
            <span className="px-3.5 py-1.5 bg-[#0D1412] rounded-lg border border-[#C5A869]/25">Kottayam</span>
            <span className="px-3.5 py-1.5 bg-[#0D1412] rounded-lg border border-[#C5A869]/25">Ettumanoor</span>
            <span className="px-3.5 py-1.5 bg-[#0D1412] rounded-lg border border-[#C5A869]/25">Changanassery</span>
            <span className="px-3.5 py-1.5 bg-[#0D1412] rounded-lg border border-[#C5A869]/25">Thodupuzha</span>
            <span className="px-3.5 py-1.5 bg-[#0D1412] rounded-lg border border-[#C5A869]/25">Ernakulam</span>
          </div>
        </div>
      </div>
    </section>
  );
}
