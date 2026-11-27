import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function MobileBottomBar({ onOpenQuoteModal, onOpenChatbot, onNavigate }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#101010]/95 backdrop-blur-md border-t border-[#C6A15B]/35 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2.5 max-w-md mx-auto">
        {/* Direct Call Button */}
        <a
          href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#292521] border border-[#C6A15B]/40 text-[#F3E8D0] active:scale-95 transition-all text-center shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#C6A15B] mb-0.5" />
          <span className="text-[10px] font-bold tracking-wider uppercase">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Royal Prince Caters! I would like to enquire about catering for an upcoming celebration.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#292521] border border-[#10B981]/50 text-[#34D399] active:scale-95 transition-all text-center shadow-xs"
        >
          <MessageCircle className="w-4 h-4 fill-[#10B981] mb-0.5" />
          <span className="text-[10px] tracking-wider uppercase font-bold text-[#F3E8D0]">WhatsApp</span>
        </a>

        {/* Instant Quote Screen Button */}
        <button
          onClick={() => onNavigate ? onNavigate('contact') : onOpenQuoteModal()}
          className="btn-royal-gold flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-[#101010] font-bold active:scale-95 transition-all text-center cursor-pointer shadow-gold-button"
        >
          <Calendar className="w-4 h-4 text-[#101010] mb-0.5" />
          <span className="text-[10px] tracking-wider uppercase font-bold">Quote</span>
        </button>
      </div>
    </div>
  );
}
