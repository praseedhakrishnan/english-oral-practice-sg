// Self-contained SVG illustrations for each SBC topic — no external URLs

const illustrations = {
  // 1. Healthy Living / Exercise
  healthy_living: (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-label="Healthy living illustration">
      {/* Sky background */}
      <rect width="400" height="220" fill="#e8f5e9" rx="12" />
      {/* Sun */}
      <circle cx="340" cy="45" r="28" fill="#ffe082" />
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        return (
          <line
            key={i}
            x1={340 + 32 * Math.cos(rad)}
            y1={45 + 32 * Math.sin(rad)}
            x2={340 + 42 * Math.cos(rad)}
            y2={45 + 42 * Math.sin(rad)}
            stroke="#ffca28"
            strokeWidth="3"
            strokeLinecap="round"
          />
        )
      })}
      {/* Green grass */}
      <ellipse cx="200" cy="210" rx="210" ry="30" fill="#a5d6a7" />
      <rect x="0" y="185" width="400" height="35" fill="#a5d6a7" />
      {/* Path */}
      <ellipse cx="200" cy="195" rx="90" ry="12" fill="#c8e6c9" />
      {/* Trees */}
      <rect x="55" y="130" width="10" height="55" fill="#8d6e63" />
      <circle cx="60" cy="120" r="30" fill="#66bb6a" />
      <circle cx="45" cy="130" r="22" fill="#81c784" />
      <circle cx="75" cy="128" r="20" fill="#4caf50" />

      <rect x="315" y="135" width="10" height="50" fill="#8d6e63" />
      <circle cx="320" cy="125" r="28" fill="#66bb6a" />
      <circle cx="305" cy="135" r="20" fill="#81c784" />
      <circle cx="335" cy="133" r="18" fill="#4caf50" />

      {/* Running stick figure 1 */}
      <circle cx="150" cy="100" r="14" fill="#ffccbc" stroke="#ef9a9a" strokeWidth="2" />
      {/* body */}
      <line x1="150" y1="114" x2="150" y2="148" stroke="#42a5f5" strokeWidth="4" strokeLinecap="round" />
      {/* arms */}
      <line x1="150" y1="122" x2="132" y2="136" stroke="#42a5f5" strokeWidth="3" strokeLinecap="round" />
      <line x1="150" y1="122" x2="168" y2="134" stroke="#42a5f5" strokeWidth="3" strokeLinecap="round" />
      {/* legs */}
      <line x1="150" y1="148" x2="134" y2="170" stroke="#1565c0" strokeWidth="3" strokeLinecap="round" />
      <line x1="150" y1="148" x2="164" y2="166" stroke="#1565c0" strokeWidth="3" strokeLinecap="round" />
      {/* Shoe 1 */}
      <ellipse cx="134" cy="172" rx="8" ry="5" fill="#ef5350" />
      <ellipse cx="164" cy="168" rx="8" ry="5" fill="#ef5350" />

      {/* Running stick figure 2 */}
      <circle cx="240" cy="95" r="14" fill="#ffccbc" stroke="#ef9a9a" strokeWidth="2" />
      <line x1="240" y1="109" x2="240" y2="143" stroke="#ce93d8" strokeWidth="4" strokeLinecap="round" />
      <line x1="240" y1="117" x2="222" y2="128" stroke="#ce93d8" strokeWidth="3" strokeLinecap="round" />
      <line x1="240" y1="117" x2="258" y2="126" stroke="#ce93d8" strokeWidth="3" strokeLinecap="round" />
      <line x1="240" y1="143" x2="224" y2="165" stroke="#7b1fa2" strokeWidth="3" strokeLinecap="round" />
      <line x1="240" y1="143" x2="254" y2="161" stroke="#7b1fa2" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="224" cy="167" rx="8" ry="5" fill="#ef5350" />
      <ellipse cx="254" cy="163" rx="8" ry="5" fill="#ef5350" />

      {/* Heart */}
      <path d="M195 68 C195 64 190 60 185 63 C180 66 180 72 185 77 L195 86 L205 77 C210 72 210 66 205 63 C200 60 195 64 195 68 Z" fill="#ef5350" />

      {/* Label */}
      <rect x="110" y="195" width="180" height="22" rx="11" fill="#fff" fillOpacity="0.85" />
      <text x="200" y="210" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#388e3c">Healthy Living &amp; Exercise</text>
    </svg>
  ),

  // 2. Environment / Nature
  environment: (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-label="Environment illustration">
      <rect width="400" height="220" fill="#e3f2fd" rx="12" />
      {/* Earth */}
      <circle cx="200" cy="110" r="75" fill="#4db6ac" />
      <ellipse cx="185" cy="90" rx="30" ry="40" fill="#66bb6a" />
      <ellipse cx="220" cy="125" rx="25" ry="32" fill="#66bb6a" />
      <ellipse cx="165" cy="130" rx="18" ry="25" fill="#81c784" />
      <ellipse cx="230" cy="90" rx="15" ry="20" fill="#a5d6a7" />
      {/* Recycle arrows */}
      {/* Arrow 1 */}
      <path d="M200 30 L185 50 L195 50 L195 65 L205 65 L205 50 L215 50 Z" fill="#43a047" />
      {/* Recycle symbol - three arrows */}
      <g transform="translate(200,110)">
        <path d="M0 -40 L-8 -28 L-4 -28 L-4 -12 L4 -12 L4 -28 L8 -28 Z" fill="#ffffff" fillOpacity="0.9" />
        <path d="M0 -40 L-8 -28 L-4 -28 L-4 -12 L4 -12 L4 -28 L8 -28 Z" fill="#ffffff" fillOpacity="0.9" transform="rotate(120)" />
        <path d="M0 -40 L-8 -28 L-4 -28 L-4 -12 L4 -12 L4 -28 L8 -28 Z" fill="#ffffff" fillOpacity="0.9" transform="rotate(240)" />
        <circle cx="0" cy="0" r="18" fill="none" stroke="#ffffff" strokeWidth="3" strokeOpacity="0.9" />
      </g>
      {/* Trees on sides */}
      <rect x="45" y="140" width="10" height="60" fill="#8d6e63" />
      <circle cx="50" cy="128" r="30" fill="#388e3c" />
      <circle cx="36" cy="140" r="20" fill="#43a047" />
      <circle cx="64" cy="138" r="18" fill="#2e7d32" />

      <rect x="345" y="142" width="10" height="58" fill="#8d6e63" />
      <circle cx="350" cy="130" r="28" fill="#388e3c" />
      <circle cx="336" cy="142" r="18" fill="#43a047" />
      <circle cx="364" cy="140" r="16" fill="#2e7d32" />

      {/* Birds */}
      <path d="M80 55 Q85 50 90 55" stroke="#546e7a" strokeWidth="2" fill="none" />
      <path d="M100 45 Q105 40 110 45" stroke="#546e7a" strokeWidth="2" fill="none" />
      <path d="M290 40 Q295 35 300 40" stroke="#546e7a" strokeWidth="2" fill="none" />

      {/* Label */}
      <rect x="110" y="195" width="180" height="22" rx="11" fill="#fff" fillOpacity="0.85" />
      <text x="200" y="210" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#2e7d32">Environment &amp; Nature</text>
    </svg>
  ),

  // 3. Technology / Devices
  technology: (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-label="Technology illustration">
      <rect width="400" height="220" fill="#e8eaf6" rx="12" />
      {/* Laptop */}
      <rect x="60" y="85" width="130" height="85" rx="6" fill="#5c6bc0" />
      <rect x="65" y="90" width="120" height="75" rx="4" fill="#9fa8da" />
      {/* Laptop screen content */}
      <rect x="72" y="97" width="50" height="8" rx="4" fill="#fff" fillOpacity="0.7" />
      <rect x="72" y="110" width="75" height="5" rx="3" fill="#fff" fillOpacity="0.5" />
      <rect x="72" y="120" width="60" height="5" rx="3" fill="#fff" fillOpacity="0.5" />
      <rect x="72" y="130" width="70" height="5" rx="3" fill="#fff" fillOpacity="0.5" />
      <rect x="72" y="140" width="40" height="5" rx="3" fill="#fff" fillOpacity="0.5" />
      <rect x="72" y="152" width="20" height="8" rx="4" fill="#42a5f5" />
      {/* Laptop base */}
      <rect x="50" y="170" width="150" height="10" rx="5" fill="#3949ab" />
      <rect x="108" y="168" width="34" height="6" rx="3" fill="#1a237e" />

      {/* Tablet */}
      <rect x="215" y="70" width="80" height="105" rx="8" fill="#26a69a" />
      <rect x="220" y="80" width="70" height="85" rx="4" fill="#b2dfdb" />
      <circle cx="255" cy="175" r="5" fill="#00897b" />
      {/* Tablet screen icons */}
      <rect x="227" y="87" width="25" height="25" rx="6" fill="#ef5350" />
      <rect x="258" y="87" width="25" height="25" rx="6" fill="#42a5f5" />
      <rect x="227" y="118" width="25" height="25" rx="6" fill="#66bb6a" />
      <rect x="258" y="118" width="25" height="25" rx="6" fill="#ffa726" />
      <text x="239" y="104" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#fff">▶</text>
      <text x="270" y="104" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#fff">♪</text>
      <text x="239" y="135" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#fff">✉</text>
      <text x="270" y="135" textAnchor="middle" fontFamily="sans-serif" fontSize="14" fill="#fff">★</text>

      {/* Phone */}
      <rect x="318" y="90" width="52" height="90" rx="8" fill="#7e57c2" />
      <rect x="323" y="100" width="42" height="65" rx="4" fill="#ede7f6" />
      <circle cx="344" cy="183" r="4" fill="#5e35b1" />
      {/* Phone screen */}
      <rect x="329" y="107" width="30" height="5" rx="2" fill="#7e57c2" fillOpacity="0.4" />
      <rect x="329" y="117" width="20" height="4" rx="2" fill="#7e57c2" fillOpacity="0.3" />
      <rect x="329" y="126" width="25" height="4" rx="2" fill="#7e57c2" fillOpacity="0.3" />
      <rect x="329" y="140" width="30" height="18" rx="4" fill="#7e57c2" />
      <text x="344" y="153" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill="#fff">📶</text>

      {/* Wifi signal */}
      <path d="M200 40 Q200 25 200 25" stroke="none" />
      <path d="M175 50 Q200 28 225 50" stroke="#5c6bc0" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M183 42 Q200 30 217 42" stroke="#7986cb" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M191 34 Q200 27 209 34" stroke="#9fa8da" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="200" cy="56" r="4" fill="#3949ab" />

      {/* Label */}
      <rect x="110" y="195" width="180" height="22" rx="11" fill="#fff" fillOpacity="0.85" />
      <text x="200" y="210" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#3949ab">Technology &amp; Devices</text>
    </svg>
  ),

  // 4. Community Helping
  community: (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-label="Community helping illustration">
      <rect width="400" height="220" fill="#fce4ec" rx="12" />
      {/* Big heart background */}
      <path d="M200 165 C160 140 100 120 100 80 C100 55 120 40 150 45 C170 48 185 60 200 75 C215 60 230 48 250 45 C280 40 300 55 300 80 C300 120 240 140 200 165 Z" fill="#f48fb1" fillOpacity="0.4" />

      {/* Person 1 (left, child) */}
      <circle cx="110" cy="90" r="16" fill="#ffccbc" stroke="#ffab91" strokeWidth="2" />
      <line x1="110" y1="106" x2="110" y2="148" stroke="#ef5350" strokeWidth="5" strokeLinecap="round" />
      <line x1="110" y1="118" x2="88" y2="130" stroke="#ef5350" strokeWidth="4" strokeLinecap="round" />
      <line x1="110" y1="118" x2="132" y2="130" stroke="#ef5350" strokeWidth="4" strokeLinecap="round" />
      <line x1="110" y1="148" x2="96" y2="172" stroke="#c62828" strokeWidth="4" strokeLinecap="round" />
      <line x1="110" y1="148" x2="124" y2="172" stroke="#c62828" strokeWidth="4" strokeLinecap="round" />

      {/* Person 2 (middle) */}
      <circle cx="200" cy="82" r="18" fill="#ffccbc" stroke="#ffab91" strokeWidth="2" />
      <line x1="200" y1="100" x2="200" y2="148" stroke="#42a5f5" strokeWidth="5" strokeLinecap="round" />
      <line x1="200" y1="112" x2="175" y2="126" stroke="#42a5f5" strokeWidth="4" strokeLinecap="round" />
      <line x1="200" y1="112" x2="225" y2="126" stroke="#42a5f5" strokeWidth="4" strokeLinecap="round" />
      <line x1="200" y1="148" x2="188" y2="172" stroke="#1565c0" strokeWidth="4" strokeLinecap="round" />
      <line x1="200" y1="148" x2="212" y2="172" stroke="#1565c0" strokeWidth="4" strokeLinecap="round" />

      {/* Person 3 (right) */}
      <circle cx="290" cy="90" r="16" fill="#ffccbc" stroke="#ffab91" strokeWidth="2" />
      <line x1="290" y1="106" x2="290" y2="148" stroke="#66bb6a" strokeWidth="5" strokeLinecap="round" />
      <line x1="290" y1="118" x2="268" y2="130" stroke="#66bb6a" strokeWidth="4" strokeLinecap="round" />
      <line x1="290" y1="118" x2="312" y2="130" stroke="#66bb6a" strokeWidth="4" strokeLinecap="round" />
      <line x1="290" y1="148" x2="276" y2="172" stroke="#2e7d32" strokeWidth="4" strokeLinecap="round" />
      <line x1="290" y1="148" x2="304" y2="172" stroke="#2e7d32" strokeWidth="4" strokeLinecap="round" />

      {/* Hands holding */}
      <line x1="132" y1="130" x2="175" y2="126" stroke="#ffa726" strokeWidth="4" strokeLinecap="round" />
      <line x1="225" y1="126" x2="268" y2="130" stroke="#ffa726" strokeWidth="4" strokeLinecap="round" />
      <circle cx="154" cy="128" r="7" fill="#ffcc02" stroke="#ffa000" strokeWidth="2" />
      <circle cx="247" cy="128" r="7" fill="#ffcc02" stroke="#ffa000" strokeWidth="2" />

      {/* Heart above */}
      <path d="M200 40 C200 36 196 32 192 34 C188 36 188 42 192 46 L200 54 L208 46 C212 42 212 36 208 34 C204 32 200 36 200 40 Z" fill="#e91e63" />

      {/* Stars */}
      <text x="50" y="60" fontFamily="sans-serif" fontSize="20" fill="#ffd740">★</text>
      <text x="330" y="55" fontFamily="sans-serif" fontSize="18" fill="#ffd740">★</text>
      <text x="170" y="30" fontFamily="sans-serif" fontSize="14" fill="#ffd740">★</text>

      {/* Label */}
      <rect x="100" y="195" width="200" height="22" rx="11" fill="#fff" fillOpacity="0.85" />
      <text x="200" y="210" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#c2185b">Community Helping</text>
    </svg>
  ),

  // 5. School / Education
  school: (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-label="School education illustration">
      <rect width="400" height="220" fill="#fff8e1" rx="12" />
      {/* School building */}
      <rect x="130" y="85" width="140" height="100" rx="6" fill="#ffcc02" />
      <rect x="130" y="60" width="140" height="30" rx="4" fill="#ffa000" />
      {/* Roof triangle */}
      <polygon points="120,85 200,40 280,85" fill="#ff7043" />
      {/* Door */}
      <rect x="178" y="140" width="44" height="45" rx="4" fill="#795548" />
      <circle cx="216" cy="163" r="3" fill="#ffd740" />
      {/* Windows */}
      <rect x="145" y="100" width="35" height="30" rx="4" fill="#b3e5fc" stroke="#0288d1" strokeWidth="2" />
      <line x1="162" y1="100" x2="162" y2="130" stroke="#0288d1" strokeWidth="1.5" />
      <line x1="145" y1="115" x2="180" y2="115" stroke="#0288d1" strokeWidth="1.5" />
      <rect x="220" y="100" width="35" height="30" rx="4" fill="#b3e5fc" stroke="#0288d1" strokeWidth="2" />
      <line x1="237" y1="100" x2="237" y2="130" stroke="#0288d1" strokeWidth="1.5" />
      <line x1="220" y1="115" x2="255" y2="115" stroke="#0288d1" strokeWidth="1.5" />

      {/* Flag */}
      <line x1="200" y1="10" x2="200" y2="42" stroke="#9e9e9e" strokeWidth="2.5" />
      <rect x="200" y="10" width="25" height="16" fill="#ef5350" />

      {/* Open book */}
      <g transform="translate(45,120)">
        <path d="M0 0 C15-8 40-10 55 0 L55 55 C40 45 15 43 0 55 Z" fill="#fff9c4" stroke="#f9a825" strokeWidth="2" />
        <path d="M55 0 C70-8 95-10 110 0 L110 55 C95 45 70 43 55 55 Z" fill="#fff9c4" stroke="#f9a825" strokeWidth="2" />
        <line x1="8" y1="15" x2="48" y2="10" stroke="#f9a825" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="8" y1="22" x2="48" y2="17" stroke="#f9a825" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="8" y1="29" x2="48" y2="24" stroke="#f9a825" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="62" y1="15" x2="102" y2="10" stroke="#f9a825" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="62" y1="22" x2="102" y2="17" stroke="#f9a825" strokeWidth="1.5" strokeOpacity="0.6" />
        <line x1="62" y1="29" x2="102" y2="24" stroke="#f9a825" strokeWidth="1.5" strokeOpacity="0.6" />
      </g>

      {/* Pencil */}
      <g transform="translate(305,80) rotate(-30)">
        <rect x="0" y="0" width="14" height="60" rx="3" fill="#ffd740" />
        <polygon points="0,60 14,60 7,80" fill="#ffccbc" />
        <rect x="0" y="0" width="14" height="12" rx="3" fill="#bdbdbd" />
        <rect x="2" y="2" width="10" height="8" rx="2" fill="#ef9a9a" />
        <line x1="7" y1="70" x2="7" y2="80" stroke="#333" strokeWidth="2" />
      </g>

      {/* Graduation cap */}
      <g transform="translate(310,145)">
        <rect x="-10" y="10" width="40" height="8" rx="3" fill="#1a237e" />
        <polygon points="10,-2 -10,10 30,10" fill="#283593" />
        <circle cx="10" cy="-2" r="5" fill="#283593" />
        <line x1="30" y1="10" x2="36" y2="25" stroke="#ffd740" strokeWidth="2.5" />
        <circle cx="36" cy="27" r="4" fill="#ffd740" />
      </g>

      {/* Label */}
      <rect x="105" y="195" width="190" height="22" rx="11" fill="#fff" fillOpacity="0.85" />
      <text x="200" y="210" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#f57f17">School &amp; Education</text>
    </svg>
  ),

  // 6. Food Waste
  food_waste: (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-label="Food waste illustration">
      <rect width="400" height="220" fill="#f3e5f5" rx="12" />

      {/* LEFT SIDE: Food plate with X (waste) */}
      {/* Plate */}
      <circle cx="105" cy="115" r="55" fill="#e8eaf6" stroke="#9fa8da" strokeWidth="3" />
      <circle cx="105" cy="115" r="42" fill="#fff" stroke="#c5cae9" strokeWidth="2" />
      {/* Food on plate */}
      <ellipse cx="100" cy="110" rx="22" ry="14" fill="#a5d6a7" />
      <ellipse cx="118" cy="118" rx="16" ry="10" fill="#ffcc80" />
      <circle cx="95" cy="125" r="10" fill="#ef9a9a" />
      {/* Big red X */}
      <line x1="65" y1="75" x2="145" y2="155" stroke="#ef5350" strokeWidth="8" strokeLinecap="round" />
      <line x1="145" y1="75" x2="65" y2="155" stroke="#ef5350" strokeWidth="8" strokeLinecap="round" />
      {/* Waste label */}
      <text x="105" y="185" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#b71c1c">Food Wasted!</text>

      {/* MIDDLE: Arrow */}
      <text x="200" y="118" textAnchor="middle" fontFamily="sans-serif" fontSize="36" fill="#7b1fa2">→</text>

      {/* RIGHT SIDE: Sharing / compost */}
      {/* Compost bin */}
      <rect x="270" y="115" width="48" height="55" rx="5" fill="#8d6e63" />
      <rect x="263" y="108" width="62" height="12" rx="4" fill="#6d4c41" />
      <rect x="283" y="97" width="22" height="15" rx="4" fill="#5d4037" />
      {/* Recycling symbol on bin */}
      <circle cx="294" cy="140" r="16" fill="#a5d6a7" />
      <path d="M294 128 L290 134 L292 134 L292 140 L296 140 L296 134 L298 134 Z" fill="#2e7d32" />
      <path d="M294 128 L290 134 L292 134 L292 140 L296 140 L296 134 L298 134 Z" fill="#2e7d32" transform="rotate(120,294,140)" />
      <path d="M294 128 L290 134 L292 134 L292 140 L296 140 L296 134 L298 134 Z" fill="#2e7d32" transform="rotate(240,294,140)" />

      {/* Heart (sharing food) */}
      <path d="M340 80 C340 76 336 72 332 74 C328 76 328 82 332 86 L340 94 L348 86 C352 82 352 76 348 74 C344 72 340 76 340 80 Z" fill="#e91e63" />

      {/* Food sharing — small people figures */}
      <circle cx="335" cy="115" r="11" fill="#ffccbc" stroke="#ffab91" strokeWidth="2" />
      <line x1="335" y1="126" x2="335" y2="155" stroke="#42a5f5" strokeWidth="4" strokeLinecap="round" />
      <line x1="335" y1="135" x2="320" y2="145" stroke="#42a5f5" strokeWidth="3" strokeLinecap="round" />
      <line x1="335" y1="135" x2="350" y2="145" stroke="#42a5f5" strokeWidth="3" strokeLinecap="round" />
      {/* Offering bowl */}
      <ellipse cx="320" cy="148" rx="10" ry="6" fill="#ffe082" stroke="#ffa000" strokeWidth="2" />

      {/* Label */}
      <rect x="95" y="195" width="210" height="22" rx="11" fill="#fff" fillOpacity="0.85" />
      <text x="200" y="210" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#6a1b9a">Food Waste in Singapore</text>
    </svg>
  ),

  // 7. Transport / MRT
  transport: (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-label="Transport illustration">
      <rect width="400" height="220" fill="#e3f2fd" rx="12" />
      {/* Sky and ground */}
      <rect x="0" y="155" width="400" height="65" fill="#c8e6c9" rx="0" />
      {/* Road */}
      <rect x="0" y="162" width="400" height="30" fill="#546e7a" />
      {/* Road markings */}
      {[20,60,100,140,180,220,260,300,340].map((x, i) => (
        <rect key={i} x={x} y="174" width="25" height="5" rx="2" fill="#ffffff" fillOpacity="0.5" />
      ))}

      {/* MRT Track */}
      <rect x="0" y="80" width="400" height="6" fill="#78909c" />
      <rect x="0" y="75" width="400" height="6" fill="#78909c" />
      {/* Track supports */}
      {[30,90,150,210,270,330].map((x, i) => (
        <rect key={i} x={x} y="81" width="8" height="30" fill="#90a4ae" />
      ))}

      {/* MRT Train */}
      <rect x="40" y="48" width="160" height="42" rx="8" fill="#e53935" />
      <rect x="40" y="48" width="160" height="20" rx="8" fill="#ef5350" />
      {/* Train windows */}
      <rect x="55" y="55" width="25" height="18" rx="4" fill="#e3f2fd" stroke="#90caf9" strokeWidth="1.5" />
      <rect x="90" y="55" width="25" height="18" rx="4" fill="#e3f2fd" stroke="#90caf9" strokeWidth="1.5" />
      <rect x="125" y="55" width="25" height="18" rx="4" fill="#e3f2fd" stroke="#90caf9" strokeWidth="1.5" />
      <rect x="160" y="55" width="25" height="18" rx="4" fill="#e3f2fd" stroke="#90caf9" strokeWidth="1.5" />
      {/* Train front detail */}
      <rect x="195" y="58" width="5" height="12" rx="2" fill="#b71c1c" />
      {/* Wheels */}
      <circle cx="75" cy="90" r="8" fill="#455a64" />
      <circle cx="75" cy="90" r="4" fill="#90a4ae" />
      <circle cx="165" cy="90" r="8" fill="#455a64" />
      <circle cx="165" cy="90" r="4" fill="#90a4ae" />

      {/* Bus */}
      <rect x="230" y="135" width="120" height="60" rx="8" fill="#1565c0" />
      <rect x="230" y="135" width="120" height="30" rx="8" fill="#1976d2" />
      {/* Bus windows */}
      <rect x="244" y="142" width="22" height="16" rx="3" fill="#bbdefb" stroke="#64b5f6" strokeWidth="1.5" />
      <rect x="274" y="142" width="22" height="16" rx="3" fill="#bbdefb" stroke="#64b5f6" strokeWidth="1.5" />
      <rect x="304" y="142" width="22" height="16" rx="3" fill="#bbdefb" stroke="#64b5f6" strokeWidth="1.5" />
      {/* Bus door */}
      <rect x="244" y="165" width="22" height="28" rx="3" fill="#0d47a1" />
      {/* Bus wheels */}
      <circle cx="265" cy="196" r="12" fill="#263238" />
      <circle cx="265" cy="196" r="6" fill="#546e7a" />
      <circle cx="320" cy="196" r="12" fill="#263238" />
      <circle cx="320" cy="196" r="6" fill="#546e7a" />
      {/* Bus headlight */}
      <rect x="344" y="158" width="6" height="10" rx="3" fill="#fff9c4" />

      {/* Bus sign */}
      <rect x="270" y="130" width="60" height="12" rx="4" fill="#fff" fillOpacity="0.9" />
      <text x="300" y="140" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#1565c0">SBS 65</text>

      {/* Road sign post */}
      <rect x="18" y="100" width="5" height="62" fill="#9e9e9e" />
      <rect x="5" y="100" width="30" height="20" rx="4" fill="#e53935" />
      <text x="20" y="114" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fontWeight="bold" fill="#fff">MRT</text>

      {/* Label */}
      <rect x="110" y="195" width="180" height="22" rx="11" fill="#fff" fillOpacity="0.85" />
      <text x="200" y="210" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#0d47a1">Transport &amp; MRT</text>
    </svg>
  ),

  // 8. Sports / Team Activities
  sports: (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-label="Sports illustration">
      <rect width="400" height="220" fill="#e8f5e9" rx="12" />
      {/* Sports field */}
      <ellipse cx="200" cy="200" rx="200" ry="30" fill="#a5d6a7" />
      <rect x="0" y="180" width="400" height="40" fill="#a5d6a7" />
      {/* Field lines */}
      <ellipse cx="200" cy="185" rx="80" ry="10" fill="none" stroke="#fff" strokeWidth="2" strokeOpacity="0.6" />
      <line x1="200" y1="175" x2="200" y2="195" stroke="#fff" strokeWidth="2" strokeOpacity="0.6" />

      {/* Trophy */}
      <g transform="translate(170,30)">
        <rect x="20" y="55" width="20" height="15" fill="#ffd740" />
        <rect x="10" y="70" width="40" height="8" rx="3" fill="#ffa000" />
        <path d="M10 10 Q0 0 0 20 Q0 45 30 55 Q60 45 60 20 Q60 0 50 10 L10 10 Z" fill="#ffd740" />
        <path d="M10 10 L0 5 Q-5 15 0 25 L10 30 Z" fill="#ffa000" />
        <path d="M50 10 L60 5 Q65 15 60 25 L50 30 Z" fill="#ffa000" />
        <path d="M20 10 Q30-5 40 10 Q30 20 20 10" fill="#ffca28" />
        {/* Star */}
        <text x="30" y="40" textAnchor="middle" fontFamily="sans-serif" fontSize="20" fill="#ff8f00">★</text>
      </g>

      {/* Football */}
      <circle cx="90" cy="130" r="26" fill="#ffffff" stroke="#333" strokeWidth="2" />
      <path d="M90 104 L83 118 L97 118 Z" fill="#333" />
      <path d="M104 118 L90 104 L76 118" fill="none" stroke="#333" strokeWidth="1" />
      <polygon points="90,118 78,126 82,140 98,140 102,126" fill="#333" />
      <path d="M78,126 L66,130 L68,140 L82,140" fill="none" stroke="#333" strokeWidth="1" />
      <path d="M102,126 L114,130 L112,140 L98,140" fill="none" stroke="#333" strokeWidth="1" />

      {/* Basketball */}
      <circle cx="310" cy="120" r="28" fill="#ef6c00" />
      <path d="M310 92 Q298 106 298 120 Q298 134 310 148" stroke="#5d4037" strokeWidth="2" fill="none" />
      <path d="M310 92 Q322 106 322 120 Q322 134 310 148" stroke="#5d4037" strokeWidth="2" fill="none" />
      <line x1="282" y1="120" x2="338" y2="120" stroke="#5d4037" strokeWidth="2" />
      <line x1="285" y1="108" x2="335" y2="108" stroke="#5d4037" strokeWidth="1" strokeOpacity="0.5" />
      <line x1="285" y1="132" x2="335" y2="132" stroke="#5d4037" strokeWidth="1" strokeOpacity="0.5" />

      {/* Goal post */}
      <line x1="55" y1="80" x2="55" y2="180" stroke="#9e9e9e" strokeWidth="4" />
      <line x1="30" y1="80" x2="80" y2="80" stroke="#9e9e9e" strokeWidth="4" />
      <line x1="30" y1="80" x2="30" y2="180" stroke="#9e9e9e" strokeWidth="4" />

      {/* Player figure */}
      <circle cx="200" cy="105" r="14" fill="#ffccbc" stroke="#ffab91" strokeWidth="2" />
      <line x1="200" y1="119" x2="200" y2="155" stroke="#ef5350" strokeWidth="4" strokeLinecap="round" />
      <line x1="200" y1="128" x2="180" y2="138" stroke="#ef5350" strokeWidth="3" strokeLinecap="round" />
      <line x1="200" y1="128" x2="220" y2="138" stroke="#ef5350" strokeWidth="3" strokeLinecap="round" />
      <line x1="200" y1="155" x2="186" y2="175" stroke="#1565c0" strokeWidth="3" strokeLinecap="round" />
      <line x1="200" y1="155" x2="214" y2="175" stroke="#1565c0" strokeWidth="3" strokeLinecap="round" />

      {/* Label */}
      <rect x="95" y="195" width="210" height="22" rx="11" fill="#fff" fillOpacity="0.85" />
      <text x="200" y="210" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#2e7d32">Sports &amp; Team Activities</text>
    </svg>
  ),

  // 9. Social Media / Phones
  social_media: (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-label="Social media illustration">
      <rect width="400" height="220" fill="#e8eaf6" rx="12" />

      {/* Central phone */}
      <rect x="155" y="40" width="90" height="150" rx="12" fill="#5c6bc0" />
      <rect x="161" y="52" width="78" height="120" rx="8" fill="#e8eaf6" />
      <circle cx="200" cy="182" r="6" fill="#3949ab" />
      <rect x="185" y="46" width="30" height="5" rx="2.5" fill="#3949ab" />

      {/* Phone screen content */}
      {/* Post 1 */}
      <rect x="166" y="58" width="68" height="40" rx="4" fill="#fff" />
      <circle cx="175" cy="67" r="6" fill="#ef5350" />
      <rect x="184" y="63" width="40" height="5" rx="2" fill="#e0e0e0" />
      <rect x="184" y="70" width="30" height="4" rx="2" fill="#e0e0e0" />
      <rect x="166" y="79" width="68" height="14" rx="3" fill="#e8f5e9" />
      <text x="200" y="90" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#388e3c">👍 ❤️ 😊 💬</text>

      {/* Post 2 */}
      <rect x="166" y="102" width="68" height="38" rx="4" fill="#fff" />
      <circle cx="175" cy="111" r="6" fill="#42a5f5" />
      <rect x="184" y="107" width="35" height="5" rx="2" fill="#e0e0e0" />
      <rect x="184" y="114" width="45" height="4" rx="2" fill="#e0e0e0" />
      <rect x="166" y="122" width="68" height="13" rx="3" fill="#e3f2fd" />
      <text x="200" y="133" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#1565c0">🌟 Share Comment</text>

      {/* Post 3 */}
      <rect x="166" y="144" width="68" height="22" rx="4" fill="#fff3e0" />
      <text x="200" y="158" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#e65100">📸 New photo post</text>

      {/* Speech bubbles on sides */}
      {/* Left bubble 1 */}
      <rect x="25" y="65" width="100" height="40" rx="10" fill="#fff9c4" stroke="#ffd740" strokeWidth="2" />
      <polygon points="120,85 135,90 125,95" fill="#fff9c4" stroke="#ffd740" strokeWidth="2" />
      <text x="75" y="82" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#f57f17">❤️ 128 Likes</text>
      <text x="75" y="96" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#f57f17">👍 Great post!</text>

      {/* Left bubble 2 */}
      <rect x="15" y="130" width="110" height="35" rx="10" fill="#e8f5e9" stroke="#a5d6a7" strokeWidth="2" />
      <polygon points="120,145 135,148 125,155" fill="#e8f5e9" stroke="#a5d6a7" strokeWidth="2" />
      <text x="70" y="148" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#2e7d32">💬 50 Comments</text>
      <text x="70" y="158" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#388e3c">Looks amazing!</text>

      {/* Right bubble 1 */}
      <rect x="275" y="60" width="105" height="40" rx="10" fill="#fce4ec" stroke="#f48fb1" strokeWidth="2" />
      <polygon points="280,80 265,85 275,90" fill="#fce4ec" stroke="#f48fb1" strokeWidth="2" />
      <text x="327" y="77" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#c2185b">🔔 Notification</text>
      <text x="327" y="92" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#c2185b">You have 5 new</text>

      {/* Right bubble 2 */}
      <rect x="270" y="130" width="110" height="35" rx="10" fill="#e3f2fd" stroke="#90caf9" strokeWidth="2" />
      <polygon points="275,148 260,150 272,158" fill="#e3f2fd" stroke="#90caf9" strokeWidth="2" />
      <text x="325" y="148" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#1565c0">👥 Friend request</text>
      <text x="325" y="158" textAnchor="middle" fontFamily="sans-serif" fontSize="9" fill="#1976d2">from 3 people</text>

      {/* Thumbs up */}
      <text x="55" y="195" fontFamily="sans-serif" fontSize="28" fill="#ffd740">👍</text>
      <text x="310" y="195" fontFamily="sans-serif" fontSize="28" fill="#ef5350">❤️</text>

      {/* Label */}
      <rect x="95" y="198" width="210" height="20" rx="10" fill="#fff" fillOpacity="0.85" />
      <text x="200" y="212" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#3949ab">Social Media &amp; Phones</text>
    </svg>
  ),

  // 10. Family / Togetherness
  family: (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-label="Family togetherness illustration">
      <rect width="400" height="220" fill="#fff3e0" rx="12" />

      {/* House */}
      <rect x="110" y="90" width="180" height="110" rx="6" fill="#ffe082" />
      {/* Roof */}
      <polygon points="95,90 200,30 305,90" fill="#ef5350" />
      {/* Door */}
      <rect x="176" y="140" width="48" height="60" rx="5" fill="#8d6e63" />
      <circle cx="218" cy="170" r="4" fill="#ffd740" />
      {/* Windows */}
      <rect x="125" y="105" width="40" height="35" rx="5" fill="#b3e5fc" stroke="#0288d1" strokeWidth="2" />
      <line x1="145" y1="105" x2="145" y2="140" stroke="#0288d1" strokeWidth="1.5" />
      <line x1="125" y1="122" x2="165" y2="122" stroke="#0288d1" strokeWidth="1.5" />
      <rect x="235" y="105" width="40" height="35" rx="5" fill="#b3e5fc" stroke="#0288d1" strokeWidth="2" />
      <line x1="255" y1="105" x2="255" y2="140" stroke="#0288d1" strokeWidth="1.5" />
      <line x1="235" y1="122" x2="275" y2="122" stroke="#0288d1" strokeWidth="1.5" />
      {/* Chimney */}
      <rect x="255" y="42" width="18" height="30" rx="3" fill="#e57373" />
      {/* Smoke */}
      <path d="M264 42 Q260 35 265 28 Q270 22 264 15" stroke="#b0bec5" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M270 40 Q266 32 271 24" stroke="#cfd8dc" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Family figures */}
      {/* Dad (tallest) */}
      <circle cx="58" cy="118" r="14" fill="#ffccbc" stroke="#ffab91" strokeWidth="2" />
      <line x1="58" y1="132" x2="58" y2="170" stroke="#1565c0" strokeWidth="5" strokeLinecap="round" />
      <line x1="58" y1="142" x2="40" y2="154" stroke="#1565c0" strokeWidth="4" strokeLinecap="round" />
      <line x1="58" y1="142" x2="76" y2="154" stroke="#1565c0" strokeWidth="4" strokeLinecap="round" />
      <line x1="58" y1="170" x2="44" y2="192" stroke="#0d47a1" strokeWidth="4" strokeLinecap="round" />
      <line x1="58" y1="170" x2="72" y2="192" stroke="#0d47a1" strokeWidth="4" strokeLinecap="round" />

      {/* Mum */}
      <circle cx="342" cy="120" r="14" fill="#ffccbc" stroke="#ffab91" strokeWidth="2" />
      {/* Hair */}
      <path d="M328 118 Q335 108 342 110 Q349 108 356 118" fill="#6d4c41" />
      <line x1="342" y1="134" x2="342" y2="172" stroke="#e91e63" strokeWidth="5" strokeLinecap="round" />
      <line x1="342" y1="144" x2="324" y2="156" stroke="#e91e63" strokeWidth="4" strokeLinecap="round" />
      <line x1="342" y1="144" x2="360" y2="156" stroke="#e91e63" strokeWidth="4" strokeLinecap="round" />
      {/* Dress */}
      <polygon points="332,172 352,172 358,195 326,195" fill="#f48fb1" />
      <line x1="342" y1="172" x2="328" y2="195" stroke="#f48fb1" strokeWidth="2" />
      <line x1="342" y1="172" x2="356" y2="195" stroke="#f48fb1" strokeWidth="2" />

      {/* Child 1 (boy) */}
      <circle cx="20" cy="145" r="11" fill="#ffccbc" stroke="#ffab91" strokeWidth="2" />
      <line x1="20" y1="156" x2="20" y2="185" stroke="#66bb6a" strokeWidth="4" strokeLinecap="round" />
      <line x1="20" y1="164" x2="8" y2="172" stroke="#66bb6a" strokeWidth="3" strokeLinecap="round" />
      <line x1="20" y1="164" x2="32" y2="172" stroke="#66bb6a" strokeWidth="3" strokeLinecap="round" />
      <line x1="20" y1="185" x2="10" y2="200" stroke="#2e7d32" strokeWidth="3" strokeLinecap="round" />
      <line x1="20" y1="185" x2="30" y2="200" stroke="#2e7d32" strokeWidth="3" strokeLinecap="round" />

      {/* Child 2 (girl) */}
      <circle cx="380" cy="148" r="11" fill="#ffccbc" stroke="#ffab91" strokeWidth="2" />
      <path d="M370 146 Q375 138 380 140 Q385 138 390 146" fill="#795548" />
      <line x1="380" y1="159" x2="380" y2="188" stroke="#ba68c8" strokeWidth="4" strokeLinecap="round" />
      <line x1="380" y1="167" x2="368" y2="175" stroke="#ba68c8" strokeWidth="3" strokeLinecap="round" />
      <line x1="380" y1="167" x2="392" y2="175" stroke="#ba68c8" strokeWidth="3" strokeLinecap="round" />
      <polygon points="372,188 388,188 392,205 368,205" fill="#f48fb1" />

      {/* Holding hands connections */}
      <line x1="32" y1="172" x2="40" y2="154" stroke="#ffa726" strokeWidth="4" strokeLinecap="round" />
      <line x1="76" y1="154" x2="95" y2="158" stroke="#ffa726" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5" />
      <line x1="305" y1="158" x2="324" y2="156" stroke="#ffa726" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5" />
      <line x1="368" y1="175" x2="360" y2="156" stroke="#ffa726" strokeWidth="4" strokeLinecap="round" />

      {/* Heart above house */}
      <path d="M200 20 C200 16 196 12 192 14 C188 16 188 22 192 26 L200 34 L208 26 C212 22 212 16 208 14 C204 12 200 16 200 20 Z" fill="#e91e63" />

      {/* Label */}
      <rect x="95" y="197" width="210" height="20" rx="10" fill="#fff" fillOpacity="0.85" />
      <text x="200" y="211" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#e65100">Family &amp; Togetherness</text>
    </svg>
  ),

  // Mental health / well-being (fallback for id 9)
  mental_health: (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-label="Mental health and well-being">
      <rect width="400" height="220" fill="#f3e5f5" rx="12" />
      {/* Two people sitting */}
      {/* Person 1 (listening) */}
      <circle cx="120" cy="95" r="18" fill="#ffccbc" stroke="#ffab91" strokeWidth="2" />
      <line x1="120" y1="113" x2="120" y2="155" stroke="#5c6bc0" strokeWidth="5" strokeLinecap="round" />
      <line x1="120" y1="125" x2="100" y2="140" stroke="#5c6bc0" strokeWidth="4" strokeLinecap="round" />
      <line x1="120" y1="125" x2="142" y2="136" stroke="#5c6bc0" strokeWidth="4" strokeLinecap="round" />
      <line x1="120" y1="155" x2="105" y2="180" stroke="#3949ab" strokeWidth="4" strokeLinecap="round" />
      <line x1="120" y1="155" x2="135" y2="180" stroke="#3949ab" strokeWidth="4" strokeLinecap="round" />
      {/* Concerned expression */}
      <path d="M112 90 Q120 87 128 90" stroke="#795548" strokeWidth="2" fill="none" />
      <circle cx="115" cy="93" r="2" fill="#795548" />
      <circle cx="125" cy="93" r="2" fill="#795548" />

      {/* Person 2 (stressed) */}
      <circle cx="260" cy="95" r="18" fill="#ffccbc" stroke="#ffab91" strokeWidth="2" />
      <line x1="260" y1="113" x2="260" y2="155" stroke="#ef5350" strokeWidth="5" strokeLinecap="round" />
      <line x1="260" y1="125" x2="238" y2="136" stroke="#ef5350" strokeWidth="4" strokeLinecap="round" />
      <line x1="260" y1="125" x2="282" y2="140" stroke="#ef5350" strokeWidth="4" strokeLinecap="round" />
      <line x1="260" y1="155" x2="245" y2="180" stroke="#c62828" strokeWidth="4" strokeLinecap="round" />
      <line x1="260" y1="155" x2="275" y2="180" stroke="#c62828" strokeWidth="4" strokeLinecap="round" />
      {/* Worried expression */}
      <path d="M252 90 Q260 93 268 90" stroke="#795548" strokeWidth="2" fill="none" />
      <circle cx="255" cy="93" r="2" fill="#795548" />
      <circle cx="265" cy="93" r="2" fill="#795548" />

      {/* Connecting arm - hand on shoulder */}
      <line x1="142" y1="136" x2="238" y2="136" stroke="#ffa726" strokeWidth="4" strokeLinecap="round" strokeOpacity="0.7" />

      {/* Thought bubble from stressed person */}
      <circle cx="310" cy="65" r="22" fill="#fff" stroke="#ce93d8" strokeWidth="2" />
      <circle cx="292" cy="82" r="6" fill="#fff" stroke="#ce93d8" strokeWidth="1.5" />
      <circle cx="282" cy="92" r="4" fill="#fff" stroke="#ce93d8" strokeWidth="1.5" />
      <text x="310" y="60" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#7b1fa2">😰 Exams</text>
      <text x="310" y="76" textAnchor="middle" fontFamily="sans-serif" fontSize="10" fill="#7b1fa2">Pressure</text>

      {/* Heart */}
      <path d="M190 70 C190 66 186 62 182 64 C178 66 178 72 182 76 L190 84 L198 76 C202 72 202 66 198 64 C194 62 190 66 190 70 Z" fill="#e91e63" />

      {/* Counsellor door in background */}
      <rect x="30" y="110" width="50" height="70" rx="5" fill="#fff9c4" stroke="#ffd740" strokeWidth="2" />
      <rect x="40" y="130" width="20" height="30" rx="3" fill="#a5d6a7" />
      <circle cx="57" cy="145" r="3" fill="#ffd740" />
      <text x="55" y="118" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#f57f17">Counsellor</text>
      <text x="55" y="127" textAnchor="middle" fontFamily="sans-serif" fontSize="7" fill="#f57f17">Room</text>

      {/* Label */}
      <rect x="90" y="195" width="220" height="22" rx="11" fill="#fff" fillOpacity="0.85" />
      <text x="200" y="210" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fontWeight="bold" fill="#6a1b9a">Mental Health &amp; Well-being</text>
    </svg>
  ),

  // Singapore multicultural society (fallback for id 10)
  multicultural: (
    <svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-label="Singapore multicultural society">
      <rect width="400" height="220" fill="#fff8e1" rx="12" />

      {/* Singapore skyline silhouette */}
      <rect x="0" y="140" width="400" height="80" fill="#e3f2fd" />
      {/* Buildings */}
      <rect x="10" y="120" width="30" height="80" fill="#90caf9" />
      <rect x="45" y="100" width="35" height="100" fill="#64b5f6" />
      <rect x="85" y="115" width="25" height="85" fill="#90caf9" />
      <rect x="115" y="90" width="40" height="110" fill="#42a5f5" />
      {/* MBS style */}
      <rect x="160" y="110" width="20" height="90" fill="#90caf9" />
      <rect x="183" y="110" width="20" height="90" fill="#90caf9" />
      <rect x="206" y="110" width="20" height="90" fill="#90caf9" />
      <rect x="158" y="104" width="70" height="10" rx="3" fill="#42a5f5" />
      <ellipse cx="193" cy="100" rx="38" ry="8" fill="#1976d2" />
      {/* More buildings */}
      <rect x="240" y="95" width="40" height="105" fill="#42a5f5" />
      <rect x="285" y="118" width="28" height="82" fill="#64b5f6" />
      <rect x="318" y="105" width="35" height="95" fill="#90caf9" />
      <rect x="358" y="125" width="25" height="75" fill="#64b5f6" />

      {/* People of different cultures */}
      {/* Person 1 - Chinese traditional */}
      <circle cx="80" cy="78" r="13" fill="#ffccbc" stroke="#ffab91" strokeWidth="1.5" />
      <line x1="80" y1="91" x2="80" y2="120" stroke="#ef5350" strokeWidth="4" strokeLinecap="round" />
      <line x1="80" y1="100" x2="65" y2="112" stroke="#ef5350" strokeWidth="3" strokeLinecap="round" />
      <line x1="80" y1="100" x2="95" y2="112" stroke="#ef5350" strokeWidth="3" strokeLinecap="round" />
      {/* Lantern */}
      <ellipse cx="65" cy="115" rx="7" ry="9" fill="#ffd740" stroke="#ffa000" strokeWidth="1.5" />
      <line x1="65" y1="106" x2="65" y2="112" stroke="#ffa000" strokeWidth="1.5" />

      {/* Person 2 - Malay */}
      <circle cx="160" cy="75" r="13" fill="#f5cba7" stroke="#ffab91" strokeWidth="1.5" />
      {/* Tudung/headscarf */}
      <ellipse cx="160" cy="70" rx="16" ry="10" fill="#4db6ac" />
      <line x1="160" y1="88" x2="160" y2="118" stroke="#4db6ac" strokeWidth="4" strokeLinecap="round" />
      <line x1="160" y1="98" x2="145" y2="110" stroke="#4db6ac" strokeWidth="3" strokeLinecap="round" />
      <line x1="160" y1="98" x2="175" y2="110" stroke="#4db6ac" strokeWidth="3" strokeLinecap="round" />
      {/* Food */}
      <ellipse cx="145" cy="113" rx="8" ry="5" fill="#ffe082" stroke="#ffa000" strokeWidth="1.5" />

      {/* Person 3 - Indian */}
      <circle cx="240" cy="75" r="13" fill="#d4a574" stroke="#c8a060" strokeWidth="1.5" />
      {/* Sari dot */}
      <circle cx="240" cy="72" r="3" fill="#ef5350" />
      <line x1="240" y1="88" x2="240" y2="118" stroke="#ce93d8" strokeWidth="4" strokeLinecap="round" />
      <line x1="240" y1="98" x2="225" y2="110" stroke="#ce93d8" strokeWidth="3" strokeLinecap="round" />
      <line x1="240" y1="98" x2="255" y2="110" stroke="#ce93d8" strokeWidth="3" strokeLinecap="round" />
      {/* Diya lamp */}
      <ellipse cx="255" cy="113" rx="7" ry="5" fill="#ffe082" stroke="#ffa000" strokeWidth="1.5" />
      <path d="M255 108 Q252 104 255 101 Q258 104 255 108" fill="#ff6f00" />

      {/* Person 4 - Others */}
      <circle cx="320" cy="78" r="13" fill="#ffccbc" stroke="#ffab91" strokeWidth="1.5" />
      <line x1="320" y1="91" x2="320" y2="120" stroke="#66bb6a" strokeWidth="4" strokeLinecap="round" />
      <line x1="320" y1="100" x2="305" y2="112" stroke="#66bb6a" strokeWidth="3" strokeLinecap="round" />
      <line x1="320" y1="100" x2="335" y2="112" stroke="#66bb6a" strokeWidth="3" strokeLinecap="round" />

      {/* Holding hands */}
      <line x1="95" y1="112" x2="145" y2="110" stroke="#ffa726" strokeWidth="3" strokeLinecap="round" />
      <line x1="175" y1="110" x2="225" y2="110" stroke="#ffa726" strokeWidth="3" strokeLinecap="round" />
      <line x1="255" y1="110" x2="305" y2="112" stroke="#ffa726" strokeWidth="3" strokeLinecap="round" />

      {/* SG flag colours and star */}
      <rect x="175" y="20" width="50" height="30" rx="4" fill="#ef5350" />
      <rect x="175" y="35" width="50" height="15" rx="0" fill="#fff" />
      <circle cx="188" cy="30" r="5" fill="#fff" />
      <circle cx="191" cy="30" r="5" fill="#ef5350" />
      {/* Five stars */}
      <text x="200" y="32" textAnchor="middle" fontFamily="sans-serif" fontSize="8" fill="#fff">★ ★ ★ ★ ★</text>

      {/* Label */}
      <rect x="80" y="197" width="240" height="20" rx="10" fill="#fff" fillOpacity="0.85" />
      <text x="200" y="211" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#e65100">Singapore Multicultural Society</text>
    </svg>
  ),
}

export default function StimulusIllustration({ type }) {
  const illustration = illustrations[type] || illustrations['healthy_living']
  return (
    <div className="w-full rounded-xl overflow-hidden shadow-md" style={{ maxHeight: '350px' }}>
      {illustration}
    </div>
  )
}
