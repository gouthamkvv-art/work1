import React, { useState, useEffect } from 'react';
import { Crown, Sparkles, MapPin, ArrowRight, MessageCircle, Calendar, Utensils, ShieldCheck, ChevronRight, Award, Star } from 'lucide-react';
import { COMPANY_INFO, FOUNDER_INFO, SERVICES, FOOD_COLLECTION } from '../data/siteData';

export default function Hero({ onNavigate, onOpenQuoteModal, onOpenChatbot }) {
  // 4 Curated High-Definition Luxury Scenes
  const luxuryScenes = [
    {
      id: "weddings",
      tag: "Royal Banquets",
      title: "Majestic Black & Gold Receptions",
      subtitle: "Candlelit royal feasts with gold sequin runners, crystal chandeliers & silver service.",
      image: "/reference-banquet-gold.jpg",
      badge: "Signature Royal Feasts"
    },
    {
      id: "ballroom",
      tag: "Grand Ballrooms",
      title: "Palatial Ballroom Banquets",
      subtitle: "Opulent event styling, satin black drapery, bespoke gold charger plates and crystal chandeliers.",
      image: "/reference-grand-ballroom.jpg",
      badge: "Palatial Venues"
    },
    {
      id: "sadhya",
      tag: "Kerala Sadhya",
      title: "Authentic Central Travancore Sadhya",
      subtitle: "Up to 28 traditional delicacies laid out on emerald plantain leaves with pure ghee & payasams.",
      image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?auto=format&fit=crop&w=2200&q=85",
      badge: "Heritage Masterpiece"
    },
    {
      id: "tables",
      tag: "VIP Table Couture",
      title: "Bespoke Table Styling & Haute Service",
      subtitle: "Glass banquets with gold Chiavari chairs, sunburst napkin rings, black tapered candles & fine crystal.",
      image: "/reference-table-styling.jpg",
      badge: "Table Couture"
    }
  ];

  const [activeSceneIndex, setActiveSceneIndex] = useState(0);

  // Auto rotate scenes every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSceneIndex((prev) => (prev + 1) % luxuryScenes.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [luxuryScenes.length]);

  const activeScene = luxuryScenes[activeSceneIndex];

  const handleWhatsAppDirect = () => {
    const msg = encodeURIComponent("Hello Royal Prince Caters and Event Management! I would like to enquire about catering services for our upcoming celebration.");
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-[#101010] text-[#FAF7F0] overflow-hidden">
      {/* =========================================================================
          MAIN HERO BANNER (Matte Black #101010 with Royal Gold #C6A15B Accents)
          ========================================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center bg-[#101010] overflow-hidden pt-12 pb-16 sm:py-24">
        {/* Layered Luxury Photographic Background with Smooth Crossfade */}
        {luxuryScenes.map((scene, index) => (
          <div
            key={scene.id}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === activeSceneIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{
              backgroundImage: `url('${scene.image}')`,
              filter: 'brightness(0.24) contrast(1.15) saturate(1.1)',
              transition: 'opacity 1s ease-in-out, transform 8s ease-out'
            }}
          />
        ))}

        {/* Matte Black & Dark Espresso Deep Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/75 to-[#101010]/85 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C6A15B]/15 via-transparent to-[#101010]/95 pointer-events-none" />
        
        {/* Subtle Luxury Pattern */}
        <div className="absolute inset-0 bg-royal-pattern opacity-15 pointer-events-none" />

        {/* Regal Watermark Crest Backdrop */}
        <div className="absolute -top-12 -right-12 text-[#C6A15B]/5 pointer-events-none hidden lg:block">
          <Crown className="w-[520px] h-[520px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {/* Location & Heritage Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#292521]/90 border border-[#C6A15B]/40 text-[#DFBE6F] text-[11px] font-semibold tracking-[0.25em] uppercase mb-6 backdrop-blur-md shadow-md">
            <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>{COMPANY_INFO.locationDisplay}</span>
            <span className="text-[#C6A15B]/50">•</span>
            <span className="text-[#F3E8D0]/80">SINCE 2000</span>
          </div>

          {/* Crown Accent with Gold Aura */}
          <div className="mb-4 inline-flex items-center justify-center p-3 rounded-full bg-[#292521] border border-[#C6A15B]/60 shadow-[0_0_30px_rgba(198,161,91,0.25)]">
            <Crown className="w-6 h-6 text-[#DFBE6F]" />
          </div>

          {/* Main Brand Title with Royal Typography */}
          <h1 className="flex flex-col items-center justify-center mb-4 w-full">
            <span className="font-['Cinzel'] text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[0.16em] sm:tracking-[0.22em] text-[#FAF7F0] uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
              ROYAL PRINCE
            </span>
            <div className="mt-3 flex items-center justify-center gap-3 w-full max-w-xl px-2">
              <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C6A15B]/80 to-[#C6A15B]" />
              <span className="font-['Cinzel'] text-xs sm:text-base md:text-lg font-semibold tracking-[0.22em] text-[#DFBE6F] uppercase">
                CATERS &amp; EVENT MANAGEMENT
              </span>
              <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-[#C6A15B]/80 to-[#C6A15B]" />
            </div>
          </h1>

          {/* Tagline & Subheading */}
          <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl md:text-3xl italic text-[#F3E8D0] max-w-2xl mx-auto mb-3 leading-relaxed font-normal px-2 drop-shadow-sm">
            &ldquo;{COMPANY_INFO.tagline}&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-[#F3E8D0]/75 max-w-xl mx-auto mb-8 font-light tracking-wide uppercase">
            Haute Hospitality • Authentic Central Travancore Gastronomy • Bespoke Luxury Decor
          </p>

          {/* Scene Selector Tabs (Interactive Preview of 4 Core Disciplines) */}
          <div className="hidden sm:flex items-center justify-center gap-2 mb-8 bg-[#292521]/80 p-1.5 rounded-full border border-[#C6A15B]/30 backdrop-blur-md">
            {luxuryScenes.map((scene, idx) => (
              <button
                key={scene.id}
                onClick={() => setActiveSceneIndex(idx)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  idx === activeSceneIndex
                    ? 'bg-gold-gradient text-[#101010] font-bold shadow-md'
                    : 'text-[#F3E8D0]/70 hover:text-[#DFBE6F] hover:bg-white/5'
                }`}
              >
                {scene.tag}
              </button>
            ))}
          </div>

          {/* Active Scene Highlight Pill */}
          <div className="sm:hidden mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#292521] border border-[#C6A15B]/30 text-xs text-[#DFBE6F]">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span className="font-semibold">{activeScene.title}</span>
          </div>

          {/* Action Buttons with Ultra-Luxury Styling */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full max-w-lg mb-12 px-2">
            {/* Primary: Jump to Services */}
            <button
              onClick={() => onNavigate ? onNavigate('services') : null}
              className="btn-royal-gold w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-gold-button"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-[#101010]" />
            </button>

            {/* Secondary: Instant Quotation Modal */}
            <button
              onClick={() => onNavigate ? onNavigate('contact') : onOpenQuoteModal()}
              className="btn-royal-outline w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#C6A15B]" />
              <span>Instant Quote</span>
            </button>

            {/* Tertiary: WhatsApp VIP Channel */}
            <button
              onClick={handleWhatsAppDirect}
              className="w-full sm:w-auto px-5 py-3.5 bg-[#292521] hover:bg-[#3D3732] text-[#34D399] border border-[#10B981]/50 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-[#10B981]" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Metrics Grid - Dark Espresso (#292521) Cards with Royal Gold Accents */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-6 border-t border-[#C6A15B]/25">
            {COMPANY_INFO.stats.map((stat, i) => (
              <div 
                key={i} 
                className="bg-[#292521]/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-[#C6A15B]/30 hover:border-[#C6A15B] transition-colors text-center shadow-md group"
              >
                <span className="font-['Cinzel'] text-xl sm:text-2xl lg:text-3xl font-bold text-[#DFBE6F] group-hover:text-[#FAF7F0] transition-colors block">
                  {stat.value}
                </span>
                <span className="text-[10px] sm:text-xs text-[#F3E8D0]/70 uppercase tracking-wider font-medium mt-1 block">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CURATED LUXURY OVERVIEW (Seamless continuation on Home Screen)
          Alternating Ivory White #FAF7F0 & Champagne #F3E8D0 Content Flow
          ========================================================================= */}
      
      {/* 1. Heritage & Founder Strip (Ivory Background #FAF7F0 with Dark Espresso Text) */}
      <section className="py-16 sm:py-20 bg-[#FAF7F0] text-[#292521] relative border-b border-[#C6A15B]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Founder Editorial Portrait */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#C6A15B]/40 shadow-royal group">
                <img
                  src={FOUNDER_INFO.image}
                  alt={`${FOUNDER_INFO.name} - Founder of Royal Prince Caters`}
                  className="w-full h-80 sm:h-96 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/90 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#292521]/95 border border-[#C6A15B]/50 text-white backdrop-blur-md">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#DFBE6F] block">
                    Leadership &amp; Distinction
                  </span>
                  <h3 className="font-['Cinzel'] text-lg font-bold text-[#FAF7F0]">
                    {FOUNDER_INFO.name}
                  </h3>
                  <p className="text-xs text-[#F3E8D0]/80">
                    Founder &amp; Managing Director • Pala, Kottayam
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative & Philosophy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3E8D0] border border-[#C6A15B]/40 text-[#9E7628] text-[11px] font-bold tracking-[0.25em] uppercase mb-4 shadow-xs">
                <Crown className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>The Art of Royal Hospitality</span>
              </div>

              <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#101010] mb-4 leading-tight">
                Twenty-Five Years of Culinary Perfection in Central Kerala
              </h2>
              
              <div className="w-20 h-1 bg-[#C6A15B] rounded-full mb-5" />

              <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl italic text-[#292521]/90 mb-5 leading-relaxed font-normal">
                &ldquo;{FOUNDER_INFO.quote}&rdquo;
              </p>

              <p className="text-xs sm:text-sm text-[#292521]/80 leading-relaxed mb-6 font-normal">
                {FOUNDER_INFO.bio}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onNavigate ? onNavigate('about') : null}
                  className="btn-royal-gold px-6 py-3 rounded-xl text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer"
                >
                  <span>Read Full Heritage Story</span>
                  <ChevronRight className="w-4 h-4 text-[#101010]" />
                </button>

                <button
                  onClick={() => {
                    const text = encodeURIComponent(`Hello Royal Prince Caters! I would like to consult with Managing Director Johnykutty P.V. regarding an upcoming event.`);
                    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
                  }}
                  className="px-5 py-3 rounded-xl bg-white border border-[#C6A15B] text-[#101010] hover:bg-[#F3E8D0] font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#10B981]" />
                  <span>Speak with Founder</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Signature Offerings Showcase (Champagne Background #F3E8D0 with Dark Espresso Cards) */}
      <section className="py-16 sm:py-20 bg-[#F3E8D0] text-[#292521] relative border-b border-[#C6A15B]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FAF7F0] border border-[#C6A15B]/40 text-[#9E7628] text-[11px] font-bold tracking-[0.25em] uppercase mb-3 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>Bespoke Offerings</span>
              </div>
              <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#101010]">
                Signature Banquet Offerings
              </h2>
              <p className="font-['Cormorant_Garamond'] text-base sm:text-lg italic text-[#292521]/80 mt-1">
                Executed with royal grandeur, pristine ingredients, and disciplined hospitality.
              </p>
            </div>

            <button
              onClick={() => onNavigate ? onNavigate('services') : null}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#101010] hover:text-[#9E7628] transition-colors uppercase tracking-wider cursor-pointer"
            >
              <span>View All 8 Services</span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
            </button>
          </div>

          {/* 3 Featured Service Cards (Ivory White #FAF7F0 Cards with Subtle Gold Borders) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.slice(0, 3).map((svc) => (
              <div
                key={svc.id}
                className="bg-[#FAF7F0] rounded-2xl overflow-hidden border border-[#C6A15B]/35 hover:border-[#C6A15B] shadow-royal hover:shadow-royal-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101010]/70 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#101010]/85 border border-[#C6A15B]/50 text-[#DFBE6F] font-bold text-[10px] tracking-wider uppercase backdrop-blur-xs">
                      {svc.badge}
                    </span>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h3 className="font-['Cinzel'] text-lg font-bold text-[#101010] group-hover:text-[#9E7628] transition-colors mb-2">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-[#292521]/80 leading-relaxed mb-4">
                      {svc.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 border-t border-[#C6A15B]/20">
                  <div className="flex items-center justify-between pt-3">
                    <button
                      onClick={() => onNavigate ? onNavigate('services') : null}
                      className="text-xs font-bold text-[#101010] hover:text-[#9E7628] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                    </button>

                    <button
                      onClick={() => {
                        const text = encodeURIComponent(`Hello Royal Prince Caters! I would like to enquire about "${svc.title}" for an upcoming celebration.`);
                        window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${text}`, '_blank');
                      }}
                      className="w-8 h-8 rounded-full bg-[#F3E8D0] border border-[#C6A15B]/40 hover:bg-[#C6A15B] hover:text-[#101010] flex items-center justify-center text-[#101010] transition-colors cursor-pointer"
                      title="Enquire on WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4 text-[#10B981]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Royal Standard Banner (Matte Black #101010 with Royal Gold Accents) */}
      <section className="py-16 sm:py-20 bg-[#101010] text-[#FAF7F0] relative overflow-hidden border-b border-[#C6A15B]/30">
        <div className="absolute inset-0 bg-royal-pattern opacity-10 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#292521] border border-[#C6A15B]/40 text-[#DFBE6F] text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
              <Award className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Unmatched Distinction</span>
            </div>
            <h2 className="font-['Cinzel'] text-2xl sm:text-4xl font-bold text-[#FAF7F0] mb-3">
              The Royal Prince Standard
            </h2>
            <div className="w-20 h-1 bg-[#C6A15B] mx-auto mb-4 rounded-full" />
            <p className="font-['Cormorant_Garamond'] text-lg sm:text-xl italic text-[#F3E8D0]/80">
              Four cornerstones that distinguish Royal Prince across Kerala weddings and banquets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Thermal Logistics Fleet",
                desc: "Privately-owned fleet of insulated hot-box vans ensuring banquet-fresh temperature anywhere in Kerala.",
                tag: "100% Insulated"
              },
              {
                title: "Direct Founder Oversight",
                desc: "Founder Johnykutty P.V. personally audits ingredient sourcing, portion calculations and service timing.",
                tag: "Hands-on Care"
              },
              {
                title: "High-Range Kerala Spices",
                desc: "Unadulterated spices, cold-pressed coconut oils, and certified farm meats cooked without shortcuts.",
                tag: "Authentic Flavor"
              },
              {
                title: "White-Glove Stewards",
                desc: "Courteous, uniformed banquet captains and servers trained in classical Central Travancore hospitality.",
                tag: "65+ Stewards"
              }
            ].map((pillar, i) => (
              <div
                key={i}
                className="bg-[#292521] rounded-2xl p-6 border border-[#C6A15B]/30 hover:border-[#C6A15B] transition-all duration-300 shadow-md flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#DFBE6F] bg-[#101010] px-2.5 py-1 rounded-md border border-[#C6A15B]/30 inline-block mb-4">
                    {pillar.tag}
                  </span>
                  <h3 className="font-['Cinzel'] text-base font-bold text-[#FAF7F0] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#F3E8D0]/75 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick CTA strip */}
          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate ? onNavigate('contact') : onOpenQuoteModal()}
              className="btn-royal-gold px-8 py-3.5 rounded-xl text-xs sm:text-sm uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-gold-button"
            >
              <Calendar className="w-4 h-4 text-[#101010]" />
              <span>Reserve Your Event Date &amp; Get Quotation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
