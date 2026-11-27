import React from 'react';
import { MessageCircle, X, Phone, Calendar, UtensilsCrossed, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData';

export default function WhatsAppChatbot({ isOpen, setIsOpen }) {
  const quickActions = [
    {
      title: "Wedding Catering Enquiry",
      desc: "Discuss grand wedding banquet packages & dates",
      icon: Calendar,
      text: "Hello Royal Prince Caters! 👑 I would like to enquire about Grand Wedding Catering packages for an upcoming wedding in Kerala."
    },
    {
      title: "Kerala Sadhya & Food Menu",
      desc: "Traditional 28-dish sadhya & live counters",
      icon: UtensilsCrossed,
      text: "Hello Royal Prince Caters! 🌿 Please share details regarding your Authentic Kerala Sadhya and food menu packages."
    },
    {
      title: "Instant Price Quotation",
      desc: "Share guest count & get a formal estimate",
      icon: MessageCircle,
      text: "Hello Royal Prince Caters! 💰 I would like to request an estimated quotation for our upcoming celebration."
    }
  ];

  const handleOpenWhatsApp = (customText) => {
    const text = encodeURIComponent(customText || "Hello Royal Prince Caters! I would like to enquire about your catering services.");
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Action Button (bottom right on desktop, offset above mobile bottom bar) */}
      <aside 
        aria-label="WhatsApp quick contact"
        className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40"
      >
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open WhatsApp Chat"
            className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#101010] hover:bg-[#292521] border border-[#C6A15B] text-[#FAF7F0] shadow-[0_8px_25px_rgba(0,0,0,0.8)] hover:shadow-[0_12px_30px_rgba(198,161,91,0.35)] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
            </span>
            <MessageCircle className="w-5 h-5 text-[#34D399] fill-[#10B981]" />
            <span className="font-bold text-xs uppercase tracking-wider hidden sm:inline text-[#DFBE6F]">
              Chat on WhatsApp
            </span>
          </button>
        )}
      </aside>

      {/* Floating Quick Action Drawer / Popup */}
      {isOpen && (
        <aside 
          aria-label="WhatsApp quick chat modal"
          className="fixed bottom-20 sm:bottom-6 right-3 sm:right-6 z-50 w-[calc(100vw-24px)] sm:w-96 bg-[#101010] rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] border border-[#C6A15B]/50 overflow-hidden animate-fadeIn"
        >
          {/* Header */}
          <div className="bg-[#292521] text-white p-4 flex items-center justify-between border-b border-[#C6A15B]/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#101010] border border-[#C6A15B]/50 flex items-center justify-center text-[#DFBE6F] shrink-0">
                <img src="/logo.png" alt="Royal Prince Logo" className="w-7 h-7 object-contain" />
              </div>
              <div>
                <h4 className="font-['Cinzel'] text-sm font-bold text-[#FAF7F0]">
                  Royal Prince WhatsApp Desk
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-[#34D399]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] inline-block animate-pulse" />
                  <span>Online • Pala, Kottayam</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close WhatsApp chat popup"
              className="p-1 rounded-full text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-[#C6A15B]" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 sm:p-5 bg-[#101010] space-y-2.5">
            <p className="text-xs text-[#F3E8D0]/80 mb-2 leading-relaxed">
              How can we assist your celebration today? Select an option to connect instantly on WhatsApp:
            </p>

            {quickActions.map((action, i) => {
              const Icon = action.icon;
              return (
                <button
                  key={i}
                  onClick={() => handleOpenWhatsApp(action.text)}
                  className="w-full p-3 rounded-2xl bg-[#292521] hover:bg-[#38332E] border border-[#C6A15B]/30 hover:border-[#C6A15B] flex items-center justify-between transition-all group text-left cursor-pointer shadow-xs"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-[#101010] border border-[#C6A15B]/30 flex items-center justify-center text-[#DFBE6F] shrink-0">
                      <Icon className="w-4 h-4 text-[#DFBE6F]" />
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-[#FAF7F0] group-hover:text-[#DFBE6F] transition-colors">
                        {action.title}
                      </h5>
                      <p className="text-[10px] text-[#F3E8D0]/70">
                        {action.desc}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#C6A15B]/60 group-hover:text-[#DFBE6F] transition-colors" />
                </button>
              );
            })}

            {/* Direct Phone Call Alternative */}
            <div className="pt-2">
              <a
                href={`tel:${COMPANY_INFO.phonePrimary}`}
                className="w-full py-2.5 px-3 rounded-xl bg-[#292521] border border-[#C6A15B]/40 hover:border-[#C6A15B] flex items-center justify-center gap-2 text-xs font-semibold text-[#F3E8D0] hover:text-[#DFBE6F] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Call Directly: {COMPANY_INFO.phonePrimary}</span>
              </a>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
