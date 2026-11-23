import React from 'react';
import { Phone, MessageCircle, Calculator, Crown } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function MobileBottomBar({ onOpenQuoteModal, onOpenChatbot }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#070A09]/95 backdrop-blur-xl border-t border-[#C5A869]/30 px-3 py-2.5 shadow-[0_-10px_25px_rgba(0,0,0,0.85)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#0D1412] border border-[#C5A869]/25 text-[#CBD5D0] active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 text-[#C5A869] mb-1" />
          <span className="text-[10px] font-bold tracking-wider uppercase">Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Royal Prince Caters! I would like to enquire about catering for an upcoming celebration.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-[#25D366] text-white font-extrabold shadow-md active:scale-95 transition-all text-center"
        >
          <MessageCircle className="w-4 h-4 fill-white mb-1" />
          <span className="text-[10px] tracking-wider uppercase font-bold">WhatsApp</span>
        </a>

        {/* Instant Quote Button */}
        <button
          onClick={onOpenQuoteModal}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-lg bg-gradient-to-r from-[#DFCA96] to-[#C5A869] text-[#070A09] font-extrabold active:scale-95 transition-all text-center cursor-pointer shadow"
        >
          <Calculator className="w-4 h-4 text-[#070A09] mb-1" />
          <span className="text-[10px] tracking-wider uppercase font-extrabold">Get Quote</span>
        </button>
      </div>
    </div>
  );
}
