import React, { useState } from 'react';

export default function BrandLogo({ className = "w-12 h-12", showText = true, textClassName = "" }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex items-center gap-3.5 group select-none">
      {/* Royal Crest Emblem */}
      <div className={`relative shrink-0 ${className}`}>
        {!imageError ? (
          <img
            src="/logo.png"
            alt="Royal Prince Caters and Event Management Logo"
            className="w-full h-full object-contain rounded-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full rounded-full bg-gradient-to-br from-[#050807] via-[#0D1412] to-[#080D0B] border-[1.5px] border-[#C5A869] p-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.8)] flex items-center justify-center group-hover:border-[#E8D5A3] transition-all duration-300">
            {/* SVG Royal Crest Icon */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full text-[#C5A869] filter drop-shadow"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Circular Laurel Arc */}
              <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.2" strokeDasharray="3 2" opacity="0.6" />
              <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="1" />
              
              {/* Heraldic Shield */}
              <path
                d="M50 18 L68 26 C68 52 50 68 50 72 C50 68 32 52 32 26 Z"
                fill="rgba(13, 20, 18, 0.9)"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />

              {/* Imperial Crown inside/atop Shield */}
              <path
                d="M38 34 L41 46 H59 L62 34 L54 41 L50 31 L46 41 Z"
                fill="currentColor"
              />
              <circle cx="38" cy="32" r="1.5" fill="currentColor" />
              <circle cx="50" cy="29" r="1.8" fill="currentColor" />
              <circle cx="62" cy="32" r="1.5" fill="currentColor" />
              <circle cx="46" cy="39" r="1.2" fill="currentColor" />
              <circle cx="54" cy="39" r="1.2" fill="currentColor" />

              {/* Royal Prince Monogram 'RPC' */}
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

              {/* Gold Star / Gem at Bottom */}
              <polygon
                points="50,65 51.5,69 55.5,69.5 52.5,72 53.5,76 50,73.5 46.5,76 47.5,72 44.5,69.5 48.5,69"
                fill="currentColor"
                opacity="0.9"
              />
            </svg>
          </div>
        )}
      </div>

      {/* Typography Label */}
      {showText && (
        <div className={`flex flex-col text-left ${textClassName}`}>
          <div className="flex items-center gap-1.5">
            <span className="font-['Cinzel'] text-lg sm:text-xl font-bold tracking-[0.24em] text-[#FDFBF7] group-hover:text-[#C5A869] transition-colors leading-tight drop-shadow-sm">
              ROYAL PRINCE
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-3 bg-[#C5A869]/60" />
            <span className="text-[9px] sm:text-[10px] tracking-[0.32em] text-[#C5A869] uppercase font-semibold">
              CATERS &amp; EVENT MANAGEMENT
            </span>
            <span className="h-[1px] w-3 bg-[#C5A869]/60" />
          </div>
          <span className="text-[8px] tracking-[0.26em] text-[#8A9C94] uppercase font-medium mt-0.5">
            PALA • KERALA
          </span>
        </div>
      )}
    </div>
  );
}
