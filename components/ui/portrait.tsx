/**
 * A hand-drawn sketch portrait, in the same pen-and-ink style as the
 * pillar icons and arrows — the site avoids photography everywhere else,
 * so the one human face on it is drawn, not photographed. Cross-hatched
 * shading and a single colour-pencil accent (the glasses, in the brand's
 * own pink) keep it reading as a sketch rather than a flat vector icon.
 */
export function Portrait({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 250"
      role="img"
      aria-label="Sketch portrait of Vijaya Dutta: glasses, hair swept over one shoulder, smiling"
      className={className}
    >
      {/* shoulders / denim shirt */}
      <path
        d="M14 250 C18 214 42 196 78 190 L84 206 L116 206 L122 190 C158 196 182 214 186 250"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 248 C20 213 43 195 79 189" fill="none" stroke="var(--color-ink)" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M78 190 C60 196 46 206 36 222" fill="none" stroke="var(--color-ink)" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
      <path d="M122 190 C140 196 154 206 164 222" fill="none" stroke="var(--color-ink)" strokeWidth="1.3" strokeLinecap="round" opacity="0.5" />
      <circle cx="100" cy="222" r="2.6" fill="none" stroke="var(--color-ink)" strokeWidth="1.6" />
      <circle cx="96" cy="240" r="2.6" fill="none" stroke="var(--color-ink)" strokeWidth="1.6" />
      {/* collar / strap fold shading */}
      <g stroke="var(--color-ink)" strokeWidth="0.9" strokeLinecap="round" opacity="0.45">
        <path d="M68.8 194.9 L81.7 205.8" /><path d="M62.3 196 L79.3 210.3" /><path d="M57.5 198.5 L75.5 213.7" /><path d="M54.6 202.7 L69.5 215.2" />
        <path d="M114.1 206 L127.1 195" /><path d="M116.2 210.4 L133.6 195.7" /><path d="M120.7 213.6 L138.7 198.5" /><path d="M126.7 215 L141.3 202.2" />
      </g>
      {/* bag strap */}
      <path d="M158 196 C120 210 70 226 30 250" fill="none" stroke="var(--color-ink)" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M158 199 C121 213 72 228 32 251" fill="none" stroke="var(--color-ink)" strokeWidth="1" strokeLinecap="round" opacity="0.35" />

      {/* neck */}
      <path d="M90 176 L88 194 M110 176 L112 194" fill="none" stroke="var(--color-ink)" strokeWidth="1.8" strokeLinecap="round" />

      {/* hair: long lock over the shoulder, back layer */}
      <path
        d="M146 92 C152 108 154 132 160 158 C166 186 170 214 174 238"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M143 93 C149 110 151 134 157 160 C163 188 167 216 171 239" fill="none" stroke="var(--color-ink)" strokeWidth="0.9" strokeLinecap="round" opacity="0.4" />
      <g stroke="var(--color-ink)" strokeWidth="0.9" strokeLinecap="round" opacity="0.4">
        <path d="M154 100 C160 120 162 144 167 168" />
        <path d="M150 96 C155 118 157 142 162 168" />
        <path d="M158 110 C163 130 166 154 170 180" />
        <path d="M162 130 C167 152 170 176 173 200" />
      </g>

      {/* face — no fill, the paper is the sketch surface */}
      <path
        d="M58 108 C55 76 74 42 100 42 C126 42 145 76 142 108 C141 138 128 166 100 172 C72 166 59 138 58 108 Z"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M60 107 C57 77 75 44 100 44 C125 44 143 77 140 107" fill="none" stroke="var(--color-ink)" strokeWidth="0.9" strokeLinecap="round" opacity="0.4" />

      {/* jaw / cheek cross-hatch shading, kept clear of the lens */}
      <g stroke="var(--color-ink)" strokeWidth="0.8" strokeLinecap="round" opacity="0.5">
        <path d="M131 105 L142.8 128.8" /><path d="M126.4 107.8 L143.1 141.9" /><path d="M123.2 113.6 L141.5 151.6" />
        <path d="M120.6 121.1 L139.7 160" /><path d="M119.4 131 L136.4 165.9" /><path d="M119.5 143.7 L131.8 169.1" />
      </g>
      <g stroke="var(--color-ink)" strokeWidth="0.8" strokeLinecap="round" opacity="0.4">
        <path d="M121.9 129.6 L135.2 130.8" /><path d="M119.5 134.8 L137 136.2" /><path d="M118.1 139.9 L137.9 141.8" />
        <path d="M118.2 145.9 L137.7 147.1" /><path d="M118.6 151.3 L137.2 152.8" /><path d="M120.1 157 L135.5 158.2" />
      </g>
      {/* chin/neck shadow */}
      <g stroke="var(--color-ink)" strokeWidth="0.8" strokeLinecap="round" opacity="0.4">
        <path d="M85.4 163.2 L119.2 166" /><path d="M80.1 167.3 L118.3 170.3" /><path d="M83.7 172 L108.7 174.2" />
      </g>
      {/* soft cheek shading, near side */}
      <g stroke="var(--color-ink)" strokeWidth="0.7" strokeLinecap="round" opacity="0.25">
        <path d="M64 128 C68 132 70 138 68 146" /><path d="M68 126 C72 131 74 137 72 145" /><path d="M72 128 C75 133 76 138 75 144" />
      </g>

      {/* ear + shading + earring */}
      <path
        d="M58 108 C51 112 50 124 56 130 C59 132 62 130 62 126"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <g stroke="var(--color-ink)" strokeWidth="0.7" strokeLinecap="round" opacity="0.45">
        <path d="M53.4 111.5 L60.6 115.5" /><path d="M51.5 113.7 L61 119.3" /><path d="M50.9 116.8 L60.4 122.5" /><path d="M51 120.3 L58.5 124.7" />
      </g>
      <circle cx="55" cy="132" r="2.2" fill="var(--color-pink-deep)" />

      {/* hair: crown + near side, drawn over the face edges */}
      <path
        d="M58 96 C56 58 74 24 100 24 C126 24 146 56 146 92"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M61 97 C59 61 76 27 100 27 C124 27 143 59 143 91" fill="none" stroke="var(--color-ink)" strokeWidth="0.9" strokeLinecap="round" opacity="0.4" />
      <path d="M58 96 C50 116 48 136 52 154 C54 162 58 168 64 172" fill="none" stroke="var(--color-ink)" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M61 98 C53 117 51 137 55 154" fill="none" stroke="var(--color-ink)" strokeWidth="0.9" strokeLinecap="round" opacity="0.4" />

      {/* hair texture strands, scattered across the mass */}
      <g stroke="var(--color-ink)" strokeWidth="0.9" strokeLinecap="round" opacity="0.45" fill="none">
        <path d="M68 40 C64 56 63 74 66 90" />
        <path d="M78 30 C73 48 71 68 73 86" />
        <path d="M90 25 C87 42 86 60 88 76" />
        <path d="M112 26 C116 42 118 58 116 74" />
        <path d="M126 32 C131 48 134 64 132 80" />
        <path d="M136 46 C141 60 143 74 140 88" />
        <path d="M64 104 C58 118 56 132 59 146" />
        <path d="M70 100 C65 114 63 128 66 142" />
      </g>
      {/* flyaway strands */}
      <path d="M84 26 C86 16 94 12 100 15" fill="none" stroke="var(--color-ink)" strokeWidth="1.3" strokeLinecap="round" opacity="0.65" />
      <path d="M108 22 C114 14 122 14 126 20" fill="none" stroke="var(--color-ink)" strokeWidth="1.3" strokeLinecap="round" opacity="0.65" />
      <path d="M96 20 C99 13 105 12 109 16" fill="none" stroke="var(--color-ink)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />

      {/* eyebrows */}
      <path d="M66 92 C72 87 80 87 86 91" fill="none" stroke="var(--color-ink)" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M114 91 C120 87 128 87 134 92" fill="none" stroke="var(--color-ink)" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M67 93 C73 89 79 89 85 92" fill="none" stroke="var(--color-ink)" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />
      <path d="M115 92 C121 89 127 89 133 93" fill="none" stroke="var(--color-ink)" strokeWidth="0.7" strokeLinecap="round" opacity="0.4" />

      {/* glasses — pink, the one colour-pencil accent on the sketch */}
      <rect x="61" y="98" width="36" height="28" rx="11" fill="var(--color-pink-deep)" fillOpacity="0.14" stroke="var(--color-pink-deep)" strokeWidth="2.6" />
      <rect x="103" y="98" width="36" height="28" rx="11" fill="var(--color-pink-deep)" fillOpacity="0.14" stroke="var(--color-pink-deep)" strokeWidth="2.6" />
      <path d="M97 110 Q100 105 103 110" fill="none" stroke="var(--color-pink-deep)" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M61 107 L50 102" fill="none" stroke="var(--color-pink-deep)" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M139 107 L150 102" fill="none" stroke="var(--color-pink-deep)" strokeWidth="1.8" strokeLinecap="round" />
      {/* lens glare, a sketch shorthand */}
      <path d="M68 104 L78 100" stroke="var(--color-paper)" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />
      <path d="M110 104 L120 100" stroke="var(--color-paper)" strokeWidth="1.6" strokeLinecap="round" opacity="0.7" />

      {/* eyes */}
      <path d="M72 112 q7 -5 14 0" fill="none" stroke="var(--color-ink)" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="79" cy="113" r="2.3" fill="var(--color-ink)" />
      <path d="M114 112 q7 -5 14 0" fill="none" stroke="var(--color-ink)" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="121" cy="113" r="2.3" fill="var(--color-ink)" />

      {/* nose + shading */}
      <path d="M98 116 C96 124 94 130 99 134" fill="none" stroke="var(--color-ink)" strokeWidth="1.7" strokeLinecap="round" />
      <g stroke="var(--color-ink)" strokeWidth="0.7" strokeLinecap="round" opacity="0.4">
        <path d="M103.1 125.7 L105.2 132" /><path d="M99.3 125.3 L102.6 134.6" /><path d="M95.8 126.4 L98.9 134.9" />
      </g>

      {/* smile */}
      <path
        d="M76 142 Q100 160 124 142"
        fill="none"
        stroke="var(--color-ink)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M77 143 Q100 158 123 143" fill="none" stroke="var(--color-ink)" strokeWidth="0.8" strokeLinecap="round" opacity="0.4" />
      <path d="M84 148 Q100 154 116 148" fill="none" stroke="var(--color-ink)" strokeWidth="1.3" strokeLinecap="round" opacity="0.6" />
      <path d="M70 140 q-4 4 -2 9" fill="none" stroke="var(--color-ink)" strokeWidth="1.1" strokeLinecap="round" opacity="0.45" />
      <path d="M130 140 q4 4 2 9" fill="none" stroke="var(--color-ink)" strokeWidth="1.1" strokeLinecap="round" opacity="0.45" />
    </svg>
  );
}
