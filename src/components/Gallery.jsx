import React, { useState } from 'react';
import { Eye, ExternalLink, Sparkles, MapPin } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import { GALLERY_ITEMS, COMPANY_INFO } from '../data/siteData';

export default function Gallery({ onSelectImage, onNavigate }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Wedding Catering", "Kerala Sadhya", "Signature Food", "Event Management", "Live Counters"];

  // Filter out any fleet-only items if present, keeping rich event celebration photos
  const displayItems = GALLERY_ITEMS.filter(item => item.id !== 'gal-fleet-1');

  const filteredItems = activeFilter === "All"
    ? displayItems
    : displayItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white text-[#1E293B] relative overflow-hidden border-b border-[#EADFC7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCF8EE] border border-[#C59A3F]/30 text-[#9E7628] text-[11px] font-bold tracking-[0.25em] uppercase mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A3F]" />
            <span>Visual Splendour</span>
          </div>
          <h2 className="font-['Cinzel'] text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] mb-3">
            Celebration Moments
          </h2>
          <div className="w-20 h-1 bg-[#C59A3F] mx-auto mb-4 rounded-full" />
          <p className="font-['Cormorant_Garamond'] text-lg sm:text-2xl italic text-[#526071] max-w-2xl mx-auto">
            A glimpse into real banquets, authentic sadhya lines, and royal stage arrangements crafted across Kerala.
          </p>

          {/* Filter Bar */}
          <div className="flex items-center justify-center gap-2 flex-wrap mt-6 sm:mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-gold-gradient text-[#0F172A] font-bold shadow-sm'
                    : 'bg-[#F7F4EE] text-[#526071] hover:text-[#0F172A] hover:bg-[#EADFC7]/50 border border-[#EADFC7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid (Balanced 3 or 4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectImage(item)}
              className="bg-[#FBF9F5] rounded-2xl overflow-hidden border border-[#EADFC7] hover:border-[#C59A3F] shadow-xs hover:shadow-royal-hover transition-all duration-300 group cursor-pointer flex flex-col"
            >
              <div className="relative h-60 sm:h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-colors" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-xs text-[#9E7628] font-bold text-[10px] tracking-wider uppercase border border-[#EADFC7]">
                  {item.category}
                </div>

                {/* Center Hover Eye Preview */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-11 h-11 rounded-full bg-white/90 text-[#0F172A] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5 text-[#9E7628]" />
                  </div>
                </div>

                {/* Bottom Overlay Title & Location */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h3 className="font-['Cinzel'] text-sm sm:text-base font-bold text-white drop-shadow-sm mb-0.5">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-[11px] text-[#E2E8F0]">
                    <MapPin className="w-3 h-3 text-[#DFBE6F]" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Instagram Link Pill */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FCF8EE] hover:bg-[#F7F4EE] border border-[#EADFC7] hover:border-[#C59A3F] text-[#0F172A] text-xs font-semibold tracking-wider uppercase transition-all shadow-xs hover:shadow-sm"
          >
            <Instagram className="w-4 h-4 text-[#C59A3F]" />
            <span>More Banquets on Instagram @royalprincecatering</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#94A3B8]" />
          </a>

          <button
            onClick={() => onNavigate ? onNavigate('why-us') : null}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gold-gradient text-[#0F172A] text-xs font-bold tracking-wider uppercase transition-all shadow-xs hover:brightness-105 cursor-pointer"
          >
            <span>Why Choose Royal Prince</span>
            <Sparkles className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
