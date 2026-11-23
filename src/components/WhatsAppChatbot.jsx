import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Crown, Phone, ArrowRight, RotateCcw, Calendar, MapPin, Users, Check, Truck, User } from 'lucide-react';
import { COMPANY_INFO, CHATBOT_FLOW } from '../data/siteData';

export default function WhatsAppChatbot({ isOpen, setIsOpen }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: CHATBOT_FLOW.welcome,
      timestamp: 'Just now'
    }
  ]);

  const [currentStep, setCurrentStep] = useState('menu'); // 'menu' | 'collecting_info' | 'ready_to_send'
  const [selectedService, setSelectedService] = useState('');
  const [infoForm, setInfoForm] = useState({
    name: '',
    eventDate: '',
    location: '',
    guestCount: ''
  });

  const chatEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, currentStep]);

  const handleSelectOption = (opt) => {
    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: opt.label,
      timestamp: 'Just now'
    };

    if (opt.id === 'founder') {
      const botReply = {
        id: Date.now() + 1,
        sender: 'bot',
        text: `Managing Director Johnykutty P.V. will be delighted to personally discuss your celebration! You can speak directly with him at ${COMPANY_INFO.phonePrimary} or proceed below to leave your event details.`,
        timestamp: 'Just now'
      };
      setMessages([...messages, userMsg, botReply]);
      setSelectedService("Consultation with Johnykutty P.V.");
      setCurrentStep('collecting_info');
      return;
    }

    if (opt.id === 'fleet') {
      const botReply = {
        id: Date.now() + 1,
        sender: 'bot',
        text: `Our specialized fleet of 8+ temperature-insulated thermal vans and mobile live counter trucks ensures zero-delay hot food dispatch anywhere in Kottayam, Pala, and across Kerala! Please share your event date and venue location to check dispatch slot availability.`,
        timestamp: 'Just now'
      };
      setMessages([...messages, userMsg, botReply]);
      setSelectedService("Vehicle Fleet & Logistics Enquiry");
      setCurrentStep('collecting_info');
      return;
    }

    setSelectedService(opt.label);

    const botPrompt = {
      id: Date.now() + 1,
      sender: 'bot',
      text: `Splendid! To assist you with "${opt.label}", please provide a few celebration details so we can calculate exact menu portions and availability.`,
      timestamp: 'Just now'
    };

    setMessages([...messages, userMsg, botPrompt]);
    setCurrentStep('collecting_info');
  };

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    if (!infoForm.name || !infoForm.eventDate || !infoForm.location) {
      alert("Please enter Name, Date, and Location.");
      return;
    }

    const userSummary = {
      id: Date.now(),
      sender: 'user',
      text: `Details: ${infoForm.name} | ${infoForm.eventDate} | ${infoForm.location} | ${infoForm.guestCount || 'Not specified'} guests`,
      timestamp: 'Just now'
    };

    const botSummary = {
      id: Date.now() + 1,
      sender: 'bot',
      text: `Thank you, ${infoForm.name}! 👑 Your customized inquiry is ready. Tap below to launch your chat directly with Royal Prince Caters on WhatsApp (7012230764):`,
      timestamp: 'Just now'
    };

    setMessages([...messages, userSummary, botSummary]);
    setCurrentStep('ready_to_send');
  };

  const getFinalWhatsAppUrl = () => {
    const formattedMsg = `Hello Royal Prince Caters and Event Management! 👑\n\nI would like to enquire about your catering services.\n\n*Name:* ${infoForm.name}\n*Service / Requirement:* ${selectedService || 'General Catering'}\n*Event Date:* ${infoForm.eventDate}\n*Location:* ${infoForm.location}\n*Number of Guests:* ${infoForm.guestCount || 'To be determined'}\n\nPlease share more information regarding your services, menus, and quotation.\n\nThank you!`;
    return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(formattedMsg)}`;
  };

  const handleLaunchWhatsApp = () => {
    window.open(getFinalWhatsAppUrl(), '_blank');
  };

  const handleReset = () => {
    setMessages([
      {
        id: 1,
        sender: 'bot',
        text: CHATBOT_FLOW.welcome,
        timestamp: 'Just now'
      }
    ]);
    setCurrentStep('menu');
    setSelectedService('');
    setInfoForm({
      name: '',
      eventDate: '',
      location: '',
      guestCount: ''
    });
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Open WhatsApp Chatbot Assistant"
            className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#050807] via-[#0D1412] to-[#070A09] text-[#C5A869] border-2 border-[#C5A869] shadow-[0_10px_35px_rgba(0,0,0,0.85)] hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            {/* Green WhatsApp Badge Accent */}
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#25D366] border border-white flex items-center justify-center shadow">
              <MessageCircle className="w-3 h-3 text-white fill-white" />
            </div>

            <img
              src="/logo.png"
              alt="Royal Prince Catering"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-contain filter drop-shadow group-hover:scale-105 transition-transform"
            />

            {/* Subtle Pulse Rings */}
            <span className="absolute inset-0 rounded-full border-2 border-[#C5A869]/50 animate-ping pointer-events-none opacity-40" />
          </button>
        )}
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-2 left-2 sm:left-auto sm:right-6 sm:bottom-6 z-50 sm:w-[410px] max-h-[76vh] sm:max-h-[640px] flex flex-col rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.95)] border-2 border-[#C5A869] bg-[#070A09] text-[#FDFBF7] animate-fadeIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#050807] via-[#0D1412] to-[#080D0B] px-4 py-3.5 border-b border-[#C5A869]/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#070A09] border border-[#C5A869] flex items-center justify-center overflow-hidden shadow-md">
                <img src="/logo.png" alt="Royal Prince Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-['Cinzel'] font-bold text-sm tracking-wider text-[#FDFBF7]">ROYAL PRINCE</span>
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                </div>
                <span className="text-[10px] text-[#C5A869] uppercase tracking-wider">
                  Live WhatsApp • 7012230764
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleReset}
                title="Restart Chat"
                className="p-1.5 text-[#CBD5D0] hover:text-[#C5A869] transition-colors rounded hover:bg-[#0D1412]"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                title="Close Chat"
                className="p-1.5 text-[#CBD5D0] hover:text-white transition-colors rounded hover:bg-[#0D1412]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-gradient-to-b from-[#050807] via-[#070A09] to-[#0D1412] text-xs">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl p-3 whitespace-pre-line leading-relaxed shadow-md ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-[#DFCA96] to-[#C5A869] text-[#070A09] font-bold rounded-tr-none'
                      : 'bg-[#0D1412] text-[#CBD5D0] border border-[#C5A869]/25 rounded-tl-none font-normal'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-[#8A9C94] mt-1 px-1">
                  {m.sender === 'user' ? 'You' : 'Royal Prince Concierge'}
                </span>
              </div>
            ))}

            {/* Menu Options Buttons */}
            {currentStep === 'menu' && (
              <div className="pt-2 space-y-1.5 animate-fadeIn">
                <span className="text-[10px] uppercase tracking-widest text-[#C5A869] font-bold block mb-1">
                  Please select an option:
                </span>
                <div className="grid grid-cols-1 gap-1.5">
                  {CHATBOT_FLOW.options.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => handleSelectOption(opt)}
                      className="text-left px-3 py-2 rounded-lg bg-[#0D1412] hover:bg-[#121C18] border border-[#C5A869]/30 hover:border-[#C5A869] text-[#CBD5D0] hover:text-[#C5A869] text-xs transition-colors flex items-center justify-between cursor-pointer group"
                    >
                      <span>{opt.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#C5A869]" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Questionnaire Form */}
            {currentStep === 'collecting_info' && (
              <form onSubmit={handleInfoSubmit} className="mt-3 p-3.5 rounded-xl bg-[#0D1412] border border-[#C5A869] space-y-2.5 animate-fadeIn">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#C5A869] border-b border-[#C5A869]/20 pb-1.5">
                  Celebration Details ({selectedService})
                </div>

                <div>
                  <label className="text-[10px] uppercase font-semibold text-[#CBD5D0] block mb-0.5">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., George Thomas"
                    value={infoForm.name}
                    onChange={(e) => setInfoForm({ ...infoForm, name: e.target.value })}
                    className="w-full px-2.5 py-1.5 text-base sm:text-xs rounded bg-[#070A09] border border-[#C5A869]/30 text-white focus:outline-none focus:border-[#C5A869]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-[10px] uppercase font-semibold text-[#CBD5D0] block mb-0.5">Event Date *</label>
                    <input
                      type="date"
                      required
                      value={infoForm.eventDate}
                      onChange={(e) => setInfoForm({ ...infoForm, eventDate: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-base sm:text-xs rounded bg-[#070A09] border border-[#C5A869]/30 text-white focus:outline-none focus:border-[#C5A869]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-semibold text-[#CBD5D0] block mb-0.5">Guest Count</label>
                    <input
                      type="number"
                      placeholder="e.g., 400"
                      value={infoForm.guestCount}
                      onChange={(e) => setInfoForm({ ...infoForm, guestCount: e.target.value })}
                      className="w-full px-2.5 py-1.5 text-base sm:text-xs rounded bg-[#070A09] border border-[#C5A869]/30 text-white focus:outline-none focus:border-[#C5A869]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-semibold text-[#CBD5D0] block mb-0.5">Event Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Pala / Kidangoor / Kottayam"
                    value={infoForm.location}
                    onChange={(e) => setInfoForm({ ...infoForm, location: e.target.value })}
                    className="w-full px-2.5 py-1.5 text-base sm:text-xs rounded bg-[#070A09] border border-[#C5A869]/30 text-white focus:outline-none focus:border-[#C5A869]"
                  />
                </div>

                <div className="pt-1 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setCurrentStep('menu')}
                    className="px-2.5 py-1.5 text-[11px] text-[#8A9C94] hover:text-white"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2 bg-gradient-to-r from-[#DFCA96] to-[#C5A869] text-[#070A09] font-bold text-xs uppercase tracking-wider rounded-lg hover:brightness-105 transition-colors"
                  >
                    Generate WhatsApp Message
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Launch WhatsApp Button (7012230764) */}
            {currentStep === 'ready_to_send' && (
              <div className="mt-3 p-3.5 rounded-xl bg-[#0D1412] border border-[#25D366] space-y-2.5 animate-fadeIn">
                <button
                  onClick={handleLaunchWhatsApp}
                  className="w-full py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send to WhatsApp (+91 70122 30764)</span>
                </button>

                <p className="text-[10px] text-center text-[#8A9C94]">
                  Opens your official WhatsApp chat directly with Royal Prince Catering.
                </p>

                <div className="pt-1 flex justify-center">
                  <button
                    onClick={handleReset}
                    className="text-[10px] text-[#C5A869] hover:underline"
                  >
                    Start Another Enquiry
                  </button>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Quick Footer Action: Direct Phone Call */}
          <div className="p-3 bg-[#050807] border-t border-[#C5A869]/20 flex items-center justify-between text-[11px]">
            <a
              href={`tel:${COMPANY_INFO.phonePrimary.replace(/\s+/g, '')}`}
              className="text-[#C5A869] hover:text-[#FDFBF7] font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now: {COMPANY_INFO.phonePrimary}</span>
            </a>

            <span className="text-[#8A9C94] text-[10px]">Pala, Kottayam</span>
          </div>
        </div>
      )}
    </>
  );
}
