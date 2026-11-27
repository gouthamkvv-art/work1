import React from 'react';
import { Heart, ExternalLink, Sparkles } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import { INSTAGRAM_HIGHLIGHTS, COMPANY_INFO } from '../data/siteData';

export default function InstagramFeed() {
  return (
    <section className="py-16 sm:py-24 bg-[#101010] text-[#FAF7F0] relative border-b border-[#C6A15B]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 sm:mb-12 gap-6 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#DFBE6F] font-semibold mb-2">
              <Instagram className="w-4 h-4 text-[#C6A15B]" />
              <span>Official Instagram Showcase</span>
            </div>
            <h2 className="font-['Cinzel'] text-2xl sm:text-3xl md:text-4xl font-bold text-[#FAF7F0]">
              Live From @royalprincecatering
            </h2>
            <p className="text-xs sm:text-sm text-[#F3E8D0]/70 mt-1">
              Real stories from our event kitchens, banquet setups, fleet logistics, and wedding feasts in Pala &amp; Kottayam.
            </p>
          </div>

          <a
            href={COMPANY_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-[#292521] hover:bg-[#3D3732] text-[#DFBE6F] border border-[#C6A15B]/50 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:scale-105 shrink-0"
          >
            <Instagram className="w-4 h-4 text-[#C6A15B]" />
            <span>Follow @royalprincecatering</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#DFBE6F]" />
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
              className="bg-[#292521] rounded-2xl overflow-hidden border border-[#C6A15B]/30 hover:border-[#C6A15B] shadow-xl hover:shadow-[0_15px_35px_rgba(0,0,0,0.9)] transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-52 sm:h-60 overflow-hidden">
                <img
                  src={post.image}
                  alt="Instagram post from Royal Prince Catering"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#101010]/80 backdrop-blur-xs flex items-center justify-center text-white border border-[#C6A15B]/40">
                  <Instagram className="w-4 h-4 text-[#DFBE6F]" />
                </div>

                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#101010]/80 text-[#FAF7F0] text-[11px] backdrop-blur-xs border border-white/10">
                  <Heart className="w-3.5 h-3.5 text-[#C6A15B] fill-[#C6A15B]" />
                  <span>{post.likes}</span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs text-[#F3E8D0]/80 line-clamp-3 leading-relaxed mb-3">
                  {post.caption}
                </p>
                <div className="flex items-center justify-between text-[11px] text-[#DFBE6F] font-semibold border-t border-[#C6A15B]/20 pt-2.5">
                  <span>{post.date}</span>
                  <span className="flex items-center gap-1 text-[10px] text-[#F3E8D0]/60 group-hover:text-[#DFBE6F] transition-colors">
                    View Post <ExternalLink className="w-3 h-3" />
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
