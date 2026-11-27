import React, { useState } from 'react';

export default function BrandLogo({ className = "w-10 h-10 sm:w-12 sm:h-12", showText = true, textClassName = "", lightVariant = false }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex items-center gap-2.5 sm:gap-3.5 group select-none">
      {/* Royal Crest Emblem */}
      <div className={`relative shrink-0 ${className}`}>
        {!imageError ? (
          <img
            src="/logo.png"
            alt="Royal Prince Caters and Event Management Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(198,161,91,0.25)] group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#101010] via-[#292521] to-[#101010] border-[1.5px] border-[#C6A15B] p-1 shadow-md flex items-center justify-center group-hover:border-[#DFBE6F] transition-all duration-300">
            {/* SVG Royal Crest Icon */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-[#C6A15B] filter drop-shadow"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.6" />
              <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1" />
              
              <path
                d="M50 18 L68 26 C68 52 50 68 50 72 C50 68 32 52 32 26 Z"
                fill="rgba(16, 16, 16, 0.95)"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              <path
                d="M38 34 L41 46 H59 L62 34 L54 41 L50 31 L46 41 Z"
                fill="currentColor"
              />
              <circle cx="38" cy="32" r="1.5" fill="currentColor" />
              <circle cx="50" cy="29" r="1.8" fill="currentColor" />
              <circle cx="62" cy="32" r="1.5" fill="currentColor" />

              <text
                x="50"
                y="60"
                textAnchor="middle"
                fill="currentColor"
                fontSize="12"
                fontWeight="800"
                fontFamily="Cinzel, serif"
                letterSpacing="1.5"
              >
                RPC
              </text>
            </svg>
          </div>
        )}
      </div>

      {/* Typography Label */}
      {showText && (
        <div className={`flex flex-col text-left ${textClassName}`}>
          <div className="flex items-center gap-1">
            <span className={`font-['Cinzel'] text-base sm:text-xl font-bold tracking-[0.16em] sm:tracking-[0.22em] transition-colors leading-tight whitespace-nowrap ${
              lightVariant ? 'text-[#FAF7F0] group-hover:text-[#DFBE6F]' : 'text-[#FAF7F0] group-hover:text-[#DFBE6F]'
            }`}>
              ROYAL PRINCE
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 mt-0.5">
            <span className="h-[1px] w-2 sm:w-3 bg-[#C6A15B]/60 shrink-0" />
            <span className="text-[8px] sm:text-[9.5px] tracking-[0.2em] sm:tracking-[0.28em] text-[#C6A15B] uppercase font-semibold whitespace-nowrap">
              CATERS &amp; EVENT MANAGEMENT
            </span>
            <span className="h-[1px] w-2 sm:w-3 bg-[#C6A15B]/60 shrink-0" />
          </div>
          <span className="text-[7px] sm:text-[8px] tracking-[0.22em] uppercase font-medium mt-0.5 text-[#F3E8D0]/70">
            PALA • KERALA
          </span>
        </div>
      )}
    </div>
  );
}
