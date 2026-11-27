import React, { useState } from 'react';
import { Eye, ExternalLink, Sparkles, MapPin } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import { GALLERY_ITEMS, COMPANY_INFO } from '../data/siteData';

export default function Gallery({ onSelectImage, onNavigate }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Wedding Catering", "Kerala Sadhya", "Signature Food", "Event Management", "Live Counters"];

  // Filter out fleet-only items to emphasize opulent celebrations
  const displayItems = GALLERY_ITEMS.filter(item => item.id !== 'gal-fleet-1');

  const filteredItems = activeFilter === "All"
    ? displayItems
    : displayItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#F3E8D0] text-[#292521] relative overflow-hidden border-b border-[#C6A15B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F0] border border-[#C6A15B]/40 text-[#9E7628] text-[11px] font-bold tracking-[0.25em] uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Visual Splendour</span>
          </div>
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#101010] mb-3">
            Royal Celebration Moments
          </h2>
          <div className="w-20 h-1 bg-[#C6A15B] mx-auto mb-4 rounded-full" />
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl italic text-[#292521]/80 max-w-2xl mx-auto">
            A glimpse into real banquets, authentic sadhya lines, and royal stage arrangements crafted across Kerala.
          </p>

          {/* Filter Bar */}
          <div className="flex items-center justify-center gap-2 flex-wrap mt-6 sm:mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-gold-gradient text-[#101010] font-bold shadow-md'
                    : 'bg-[#FAF7F0] text-[#292521] hover:text-[#101010] hover:bg-white border border-[#C6A15B]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (Balanced 3 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className="bg-[#FAF7F0] rounded-2xl overflow-hidden border border-[#C6A15B]/35 hover:border-[#C6A15B] shadow-royal hover:shadow-royal-hover transition-all duration-300 group cursor-pointer flex flex-col"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/85 via-black/20 to-transparent group-hover:from-[#101010]/95 transition-colors" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#101010]/90 backdrop-blur-xs text-[#DFBE6F] font-bold text-[10px] tracking-wider uppercase border border-[#C6A15B]/40 shadow-sm">
                  {item.category}
                </div>

                {/* Center Hover Eye Preview */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-[#101010]/90 border border-[#C6A15B] text-[#C6A15B] flex items-center justify-center shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5 text-[#DFBE6F]" />
                  </div>
                </div>

                {/* Bottom Overlay Title & Location */}
                <div className="absolute bottom-3.5 left-4 right-4 text-white">
                  <h3 className="font-['Cinzel'] text-sm sm:text-base font-bold text-[#FAF7F0] drop-shadow-sm mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#F3E8D0]/80">
                    <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Instagram Link Pill */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#292521] hover:bg-[#101010] border border-[#C6A15B]/40 hover:border-[#C6A15B] text-[#F3E8D0] text-xs font-semibold tracking-wider uppercase transition-all shadow-md"
          >
            <Instagram className="w-4 h-4 text-[#C6A15B]" />
            <span>More Banquets on Instagram @royalprincecatering</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#DFBE6F]" />
          </a>

          <button
            onClick={() => onNavigate ? onNavigate('why-us') : null}
            className="btn-royal-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-[#101010] text-xs font-bold tracking-wider uppercase transition-all shadow-gold-button cursor-pointer"
          >
            <span>Why Choose Royal Prince</span>
            <Sparkles className="w-3.5 h-3.5 text-[#101010]" />
          </button>
        </div>
      </div>
    </section>
  );
}
