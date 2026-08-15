/**
 * A hand-drawn line-art portrait, in the same pen-and-ink style as the
 * pillar icons and arrows — the site avoids photography everywhere else,
 * so the one human face on it is drawn, not photographed.
 */
export function Portrait({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 250"
      role="img"
      aria-label="Line-art portrait of Vijaya Dutta: glasses, hair swept over one shoulder, smiling"
      className={className}
    >
      {/* shoulders / denim shirt */}
      <path
        d="M14 250 C18 214 42 196 78 190 L84 206 L116 206 L122 190 C158 196 182 214 186 250"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M78 190 C60 196 46 206 36 222"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <path
        d="M122 190 C140 196 154 206 164 222"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="100" cy="222" r="2.6" fill="none" stroke="var(--color-ink)" strokeWidth="2" />
      <circle cx="96" cy="240" r="2.6" fill="none" stroke="var(--color-ink)" strokeWidth="2" />
      {/* bag strap */}
      <path
        d="M158 196 C120 210 70 226 30 250"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* neck */}
      <path
        d="M90 176 L88 194 M110 176 L112 194"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* hair: long lock over the shoulder, drawn first so the face overlaps it */}
      <path
        d="M146 92 C152 108 154 132 160 158 C166 186 170 214 174 238"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M154 100 C160 120 162 144 167 168"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* face */}
      <path
        d="M58 108 C55 76 74 42 100 42 C126 42 145 76 142 108 C141 138 128 166 100 172 C72 166 59 138 58 108 Z"
        fill="var(--color-paper)"
        stroke="var(--color-ink)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* ear + earring */}
      <path
        d="M58 108 C51 112 50 124 56 130 C59 132 62 130 62 126"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="55" cy="132" r="2.4" fill="var(--color-pink-deep)" />

      {/* hair: crown + short side, drawn over the top of the face */}
      <path
        d="M58 96 C56 58 74 24 100 24 C126 24 146 56 146 92"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M58 96 C50 116 48 136 52 154 C54 162 58 168 64 172"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M84 26 C86 16 94 12 100 15"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M108 22 C114 14 122 14 126 20"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M96 26 C92 38 90 52 92 64"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.4"
      />
      <path
        d="M120 38 C126 54 128 70 126 84"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.4"
      />

      {/* eyebrows */}
      <path d="M66 92 C72 87 80 87 86 91" fill="none" stroke="var(--color-ink)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M114 91 C120 87 128 87 134 92" fill="none" stroke="var(--color-ink)" strokeWidth="2.2" strokeLinecap="round" />

      {/* glasses — pink, to match the real ones */}
      <rect x="61" y="98" width="36" height="28" rx="11" fill="var(--color-pink-wash)" fillOpacity="0.55" stroke="var(--color-pink-deep)" strokeWidth="3.4" />
      <rect x="103" y="98" width="36" height="28" rx="11" fill="var(--color-pink-wash)" fillOpacity="0.55" stroke="var(--color-pink-deep)" strokeWidth="3.4" />
      <path d="M97 110 Q100 105 103 110" fill="none" stroke="var(--color-pink-deep)" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M61 107 L50 102" fill="none" stroke="var(--color-pink-deep)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M139 107 L150 102" fill="none" stroke="var(--color-pink-deep)" strokeWidth="2.4" strokeLinecap="round" />

      {/* eyes */}
      <path d="M72 112 q7 -5 14 0" fill="none" stroke="var(--color-ink)" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="79" cy="113" r="2.6" fill="var(--color-ink)" />
      <path d="M114 112 q7 -5 14 0" fill="none" stroke="var(--color-ink)" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="121" cy="113" r="2.6" fill="var(--color-ink)" />

      {/* nose */}
      <path d="M98 116 C96 124 94 130 99 134" fill="none" stroke="var(--color-ink)" strokeWidth="2.2" strokeLinecap="round" />

      {/* smile */}
      <path d="M76 142 Q100 160 124 142" fill="none" stroke="var(--color-ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M84 148 Q100 154 116 148" fill="none" stroke="var(--color-ink)" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
      <path d="M70 140 q-4 4 -2 9" fill="none" stroke="var(--color-ink)" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
      <path d="M130 140 q4 4 2 9" fill="none" stroke="var(--color-ink)" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}
