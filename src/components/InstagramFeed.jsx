import React from 'react';
import { Heart, ExternalLink, Sparkles } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import { INSTAGRAM_HIGHLIGHTS, COMPANY_INFO } from '../data/siteData';

export default function InstagramFeed() {
  return (
    <section className="py-16 sm:py-24 bg-[#070A09] text-[#FDFBF7] relative border-b border-[#C5A869]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 sm:mb-12 gap-6 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A869] font-semibold mb-2">
              <Instagram className="w-4 h-4 text-[#C5A869]" />
              <span>Official Instagram Showcase</span>
            </div>
            <h2 className="font-['Cinzel'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#FDFBF7]">
              Live From @royalprincecatering
            </h2>
            <p className="text-xs sm:text-sm text-[#8A9C94] mt-1">
              Real stories from our event kitchens, banquet setups, fleet logistics, and wedding feasts in Pala &amp; Kottayam.
            </p>
          </div>

          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-[#0D1412] hover:bg-[#121C18] text-[#E8D5A3] border border-[#C5A869]/50 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow hover:scale-105 shrink-0"
          >
            <Instagram className="w-4 h-4 text-[#C5A869]" />
            <span>Follow @royalprincecatering</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#C5A869]" />
          </a>
        </div>

        {/* 4 Instagram Post Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {INSTAGRAM_HIGHLIGHTS.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0D1412] rounded-xl overflow-hidden border border-[#C5A869]/20 hover:border-[#C5A869] shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.95)] transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-52 sm:h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt="Instagram post from Royal Prince Catering"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-xs flex items-center justify-center text-white border border-[#C5A869]/30">
                  <Instagram className="w-4 h-4 text-[#C5A869]" />
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/70 text-white text-[11px] backdrop-blur-xs border border-white/10">
                  <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                  <span>{post.likes}</span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#CBD5D0] line-clamp-3 leading-relaxed mb-3">
                  {post.caption}
                </p>

                <div className="pt-2 border-t border-[#C5A869]/15 flex items-center justify-between text-[11px]">
                  <span className="text-[#8A9C94] font-medium">{post.date}</span>
                  <span className="text-[#E8D5A3] font-semibold flex items-center gap-1 group-hover:text-white">
                    <span>View Post</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
