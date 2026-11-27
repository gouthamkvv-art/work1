import React, { useEffect } from 'react';
import { X, MapPin, ExternalLink, Crown, MessageCircle } from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import { COMPANY_INFO } from '../data/siteData';

export default function LightboxModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-[#101010] border border-[#C6A15B]/50 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col md:flex-row max-h-[92vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-[#292521] hover:bg-[#C6A15B] text-[#FAF7F0] hover:text-[#101010] flex items-center justify-center transition-colors shadow-md cursor-pointer border border-[#C6A15B]/30"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image Left */}
        <div className="md:w-3/5 bg-black flex items-center justify-center relative overflow-hidden h-60 sm:h-72 md:h-auto min-h-[240px] md:min-h-[460px] shrink-0">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details Right */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-[#FAF7F0] bg-[#292521] overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <Crown className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#DFBE6F] bg-[#101010] px-2.5 py-0.5 rounded border border-[#C6A15B]/40">
                {item.category || "Catering Showcase"}
              </span>
            </div>

            <h3 className="font-['Cinzel'] text-lg sm:text-2xl font-bold text-[#FAF7F0] mb-2 leading-tight">
              {item.title}
            </h3>

            {item.location && (
              <div className="flex items-center gap-1.5 text-xs text-[#F3E8D0]/70 mb-3">
                <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>{item.location}</span>
              </div>
            )}

            <div className="w-12 h-1 bg-[#C6A15B] rounded-full mb-4" />

            <p className="text-xs sm:text-sm text-[#F3E8D0]/80 leading-relaxed mb-6 font-normal">
              {item.description || "Authentic Royal Prince catering and event styling, bringing royal Central Travancore flavors and immaculate service to your celebration."}
            </p>
          </div>

          <div className="pt-4 border-t border-[#C6A15B]/25 space-y-2.5">
            <button
              onClick={() => {
                const msg = encodeURIComponent(`Hello Royal Prince Caters! I saw "${item.title}" in your website gallery and would love to enquire about it for my event.`);
                window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
              }}
              className="btn-royal-gold w-full py-2.5 px-4 text-[#101010] rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-gold-button flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#101010] fill-[#101010]" />
              <span>Enquire This on WhatsApp</span>
            </button>

            <a
              href={item.instagramPostUrl || COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-[#101010] hover:bg-[#1a1816] text-[#FAF7F0] hover:text-[#DFBE6F] border border-[#C6A15B]/40 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>View On Instagram</span>
              <ExternalLink className="w-3 h-3 text-[#DFBE6F]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
