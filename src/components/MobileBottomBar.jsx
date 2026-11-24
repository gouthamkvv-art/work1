import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function MobileBottomBar({ onOpenQuoteModal, onOpenChatbot, onNavigate }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-[#EADFC7] px-3 py-2 shadow-lg">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#F7F4EE] border border-[#EADFC7] text-[#0F172A] active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 text-[#C59A3F] mb-0.5" />
          <span className="text-[10px] font-bold tracking-wider uppercase">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Royal Prince Caters! I would like to enquire about catering for an upcoming celebration.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#10B981] text-white active:scale-95 transition-all text-center shadow-xs"
        >
          <MessageCircle className="w-4 h-4 fill-white mb-0.5" />
          <span className="text-[10px] tracking-wider uppercase font-bold">WhatsApp</span>
        </a>

        {/* Instant Quote Screen Button */}
        <button
          onClick={() => onNavigate ? onNavigate('contact') : onOpenQuoteModal()}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-gold-gradient text-[#0F172A] font-bold active:scale-95 transition-all text-center cursor-pointer shadow-xs"
        >
          <Calendar className="w-4 h-4 text-[#0F172A] mb-0.5" />
          <span className="text-[10px] tracking-wider uppercase font-bold">Quote</span>
        </button>
      </div>
    </div>
  );
}
