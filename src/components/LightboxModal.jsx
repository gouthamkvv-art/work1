import React, { useEffect } from 'react';
import { X, MapPin, ExternalLink, Crown } from 'lucide-react';
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
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-[#0D1412] border-2 border-[#C5A869] rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full bg-black/80 hover:bg-[#C5A869] text-white hover:text-[#070A09] flex items-center justify-center transition-colors shadow-lg cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Left */}
        <div className="md:w-3/5 bg-black flex items-center justify-center relative overflow-hidden min-h-[300px] md:min-h-[480px]">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover max-h-[78vh]"
          />
        </div>

        {/* Details Right */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-[#FDFBF7] bg-[#0D1412] overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Crown className="w-4 h-4 text-[#C5A869]" />
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#E8D5A3] bg-[#070A09] px-2.5 py-1 rounded border border-[#C5A869]/30">
                {item.category || "Catering Showcase"}
              </span>
            </div>

            <h3 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-[#FDFBF7] mb-2 leading-tight">
              {item.title}
            </h3>

            {item.location && (
              <div className="flex items-center gap-1.5 text-xs text-[#8A9C94] mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#C5A869]" />
                <span>{item.location}</span>
              </div>
            )}

            <div className="w-12 h-[1px] bg-[#C5A869]/60 mb-4" />

            <p className="text-xs sm:text-sm text-[#CBD5D0] leading-relaxed mb-6 font-normal">
              {item.description || "Authentic Royal Prince catering and event styling, bringing royal Central Travancore flavors and immaculate service to your celebration."}
            </p>
          </div>

          <div className="pt-4 border-t border-[#C5A869]/20 space-y-3">
            <a
              href={item.instagramPostUrl || COMPANY_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 bg-[#070A09] hover:bg-black text-[#E8D5A3] border border-[#C5A869]/50 rounded-lg text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>View On Instagram</span>
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>

            <button
              onClick={() => {
                const msg = encodeURIComponent(`Hello Royal Prince Caters! I saw "${item.title}" in your website gallery and would love to enquire about it for my event.`);
                window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
              }}
              className="w-full py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow flex items-center justify-center gap-2"
            >
              Enquire This Setup on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
