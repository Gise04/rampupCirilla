import { useState } from "react";

const WIKI = "https://commons.wikimedia.org/wiki/Special:FilePath/";

const SIGN_URLS = {
  "stop":                    WIKI + "Spain_road_sign_R-2.svg",
  "give-way":                WIKI + "Spain_road_sign_R-1.svg",
  "priority-road":           WIKI + "Spain_road_sign_P-1.svg",
  "no-entry":                WIKI + "Spain_road_sign_R-101.svg",
  "no-parking":              WIKI + "Spain_road_sign_R-308.svg",
  "no-stop-no-park":         WIKI + "Spain_road_sign_R-307.svg",
  "end-restrictions":        WIKI + "Spain_road_sign_R-500.svg",
  "warning-exclamation":     WIKI + "Spain_road_sign_P-2.svg",
  "warning-intersection":    WIKI + "Spain_road_sign_P-16.svg",
  "obligation-arrow-right":  WIKI + "Spain_road_sign_R-400b.svg",
  "speed-10":                WIKI + "Spain_road_sign_R-301_(10).svg",
  "speed-30":                WIKI + "Spain_road_sign_R-301_(30).svg",
  "speed-50":                WIKI + "Spain_road_sign_R-301_(50).svg",
  "speed-90":                WIKI + "Spain_road_sign_R-301_(90).svg",
  "speed-100":               WIKI + "Spain_road_sign_R-301_(100).svg",
  "speed-120":               WIKI + "Spain_road_sign_R-301_(120).svg",
};

// --- SVG fallbacks (shown if image fails to load) ---

function SpeedLimitSVG({ value }) {
  return (
    <svg viewBox="0 0 200 200" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="92" fill="white" stroke="#CC0000" strokeWidth="16" />
      <text
        x="100" y="118"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize={value >= 100 ? "58" : "68"}
        fill="#1a1a1a"
      >{value}</text>
    </svg>
  );
}

function StopSVG() {
  const r = 80, cx = 100, cy = 100, sides = 8;
  const pts = Array.from({ length: sides }, (_, i) => {
    const a = (i * 2 * Math.PI) / sides - Math.PI / sides;
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 200 200" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
      <polygon points={pts} fill="#CC0000" />
      <text x="100" y="114" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="38" fill="white" letterSpacing="2">STOP</text>
    </svg>
  );
}

function GiveWaySVG() {
  return (
    <svg viewBox="0 0 220 200" width="155" height="140" xmlns="http://www.w3.org/2000/svg">
      <polygon points="110,185 10,15 210,15" fill="white" stroke="#CC0000" strokeWidth="14" strokeLinejoin="round" />
      <polygon points="110,165 30,27 190,27" fill="white" stroke="#CC0000" strokeWidth="3" />
      <text x="110" y="100" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="19" fill="#CC0000">CEDA EL</text>
      <text x="110" y="126" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontWeight="900" fontSize="19" fill="#CC0000">PASO</text>
    </svg>
  );
}

function WarningSVG({ icon }) {
  return (
    <svg viewBox="0 0 220 200" width="155" height="140" xmlns="http://www.w3.org/2000/svg">
      <polygon points="110,15 10,185 210,185" fill="#FFFBE6" stroke="#CC0000" strokeWidth="12" strokeLinejoin="round" />
      {icon === "intersection"
        ? <g><rect x="95" y="60" width="20" height="90" rx="4" fill="#CC0000" /><rect x="55" y="95" width="110" height="20" rx="4" fill="#CC0000" /></g>
        : <g><rect x="95" y="65" width="20" height="65" rx="8" fill="#CC0000" /><circle cx="105" cy="152" r="11" fill="#CC0000" /></g>
      }
    </svg>
  );
}

function ObligationSVG() {
  return (
    <svg viewBox="0 0 200 200" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="88" fill="#1565C0" />
      <g fill="white">
        <rect x="48" y="88" width="80" height="24" rx="6" />
        <polygon points="120,68 158,100 120,132" />
      </g>
    </svg>
  );
}

function PriorityRoadSVG() {
  return (
    <svg viewBox="0 0 200 200" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
      <rect x="100" y="8" width="120" height="120" rx="6" fill="white" transform="rotate(45 100 100)" />
      <rect x="100" y="18" width="104" height="104" rx="4" fill="#FFD700" transform="rotate(45 100 100)" />
    </svg>
  );
}

function ProhibitionSVG({ icon }) {
  return (
    <svg viewBox="0 0 200 200" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="88" fill="white" stroke="#CC0000" strokeWidth="14" />
      {icon === "no-entry"
        ? <rect x="28" y="84" width="144" height="32" rx="6" fill="#CC0000" />
        : <g>
            <line x1="48" y1="48" x2="152" y2="152" stroke="#CC0000" strokeWidth="18" strokeLinecap="round" />
            <rect x="70" y="70" width="60" height="60" rx="6" fill="#555" />
          </g>
      }
    </svg>
  );
}

// --- Scenario illustrations (unchanged) ---

function ScenarioAlcohol() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#F0F4FF" rx="12" />
      <rect x="0" y="130" width="280" height="50" fill="#6c757d" />
      <rect x="0" y="125" width="280" height="10" fill="#495057" />
      <g transform="translate(150,80)">
        <rect x="-55" y="20" width="110" height="35" rx="8" fill="#2196F3" />
        <rect x="-40" y="5" width="80" height="28" rx="6" fill="#64B5F6" />
        <rect x="-30" y="8" width="28" height="20" rx="3" fill="#B3E5FC" />
        <rect x="4" y="8" width="28" height="20" rx="3" fill="#B3E5FC" />
        <circle cx="-35" cy="55" r="12" fill="#212121" /><circle cx="-35" cy="55" r="7" fill="#616161" />
        <circle cx="35" cy="55" r="12" fill="#212121" /><circle cx="35" cy="55" r="7" fill="#616161" />
      </g>
      <g transform="translate(60,30)">
        <ellipse cx="0" cy="0" rx="22" ry="8" fill="#EF9A9A" opacity="0.6" />
        <path d="M-22,0 Q-22,35 0,45 Q22,35 22,0 Z" fill="#EF9A9A" opacity="0.7" stroke="#E53935" strokeWidth="2" />
        <rect x="-3" y="45" width="6" height="28" rx="3" fill="#E53935" />
        <ellipse cx="0" cy="73" rx="14" ry="5" fill="#E53935" />
      </g>
      <g stroke="#CC0000" strokeWidth="5" strokeLinecap="round" transform="translate(60,55)">
        <line x1="-18" y1="-18" x2="18" y2="18" /><line x1="18" y1="-18" x2="-18" y2="18" />
      </g>
      <rect x="195" y="15" width="75" height="42" rx="8" fill="#FF5252" />
      <text x="232" y="32" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="white">TASA</text>
      <text x="232" y="48" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="13" fontWeight="900" fill="white">0.5 g/l</text>
    </svg>
  );
}

function ScenarioDistance() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#E8F5E9" rx="12" />
      <rect x="0" y="120" width="280" height="60" fill="#78909C" />
      <rect x="0" y="115" width="280" height="10" fill="#546E7A" />
      <line x1="20" y1="140" x2="60" y2="140" stroke="white" strokeWidth="4" strokeDasharray="12,10" />
      <line x1="100" y1="140" x2="180" y2="140" stroke="white" strokeWidth="4" strokeDasharray="12,10" />
      <line x1="220" y1="140" x2="260" y2="140" stroke="white" strokeWidth="4" strokeDasharray="12,10" />
      <g transform="translate(195,85)">
        <rect x="-45" y="15" width="90" height="30" rx="7" fill="#F44336" />
        <rect x="-32" y="3" width="64" height="22" rx="5" fill="#EF9A9A" />
        <circle cx="-28" cy="45" r="10" fill="#212121" /><circle cx="-28" cy="45" r="6" fill="#616161" />
        <circle cx="28" cy="45" r="10" fill="#212121" /><circle cx="28" cy="45" r="6" fill="#616161" />
      </g>
      <g transform="translate(65,85)">
        <rect x="-45" y="15" width="90" height="30" rx="7" fill="#1565C0" />
        <rect x="-32" y="3" width="64" height="22" rx="5" fill="#90CAF9" />
        <circle cx="-28" cy="45" r="10" fill="#212121" /><circle cx="-28" cy="45" r="6" fill="#616161" />
        <circle cx="28" cy="45" r="10" fill="#212121" /><circle cx="28" cy="45" r="6" fill="#616161" />
      </g>
      <g stroke="#2E7D32" strokeWidth="3" fill="#2E7D32">
        <line x1="115" y1="95" x2="150" y2="95" />
        <polygon points="115,90 108,95 115,100" /><polygon points="150,90 157,95 150,100" />
      </g>
      <rect x="116" y="78" width="65" height="16" rx="4" fill="#2E7D32" />
      <text x="149" y="90" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="white">SEGURIDAD</text>
    </svg>
  );
}

function ScenarioOvertaking() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#FFF8E1" rx="12" />
      <rect x="0" y="20" width="280" height="140" fill="#90A4AE" />
      <line x1="0" y1="90" x2="90" y2="90" stroke="white" strokeWidth="4" strokeDasharray="18,12" />
      <line x1="130" y1="90" x2="280" y2="90" stroke="#FF5252" strokeWidth="4" />
      <g transform="translate(140,52)">
        <rect x="-45" y="12" width="90" height="28" rx="7" fill="#4CAF50" />
        <rect x="-32" y="2" width="64" height="20" rx="5" fill="#A5D6A7" />
        <circle cx="-27" cy="40" r="9" fill="#212121" /><circle cx="-27" cy="40" r="5" fill="#616161" />
        <circle cx="27" cy="40" r="9" fill="#212121" /><circle cx="27" cy="40" r="5" fill="#616161" />
        <polygon points="55,14 70,20 55,26" fill="#FF9800" />
        <line x1="45" y1="20" x2="55" y2="20" stroke="#FF9800" strokeWidth="4" />
      </g>
      <g transform="translate(110,120)">
        <rect x="-45" y="12" width="90" height="28" rx="7" fill="#F44336" />
        <rect x="-32" y="2" width="64" height="20" rx="5" fill="#EF9A9A" />
        <circle cx="-27" cy="40" r="9" fill="#212121" /><circle cx="-27" cy="40" r="5" fill="#616161" />
        <circle cx="27" cy="40" r="9" fill="#212121" /><circle cx="27" cy="40" r="5" fill="#616161" />
      </g>
    </svg>
  );
}

function ScenarioLights() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#1A237E" rx="12" />
      <rect x="0" y="120" width="280" height="60" fill="#37474F" />
      <g transform="translate(120,90)">
        <rect x="-55" y="15" width="110" height="35" rx="8" fill="#455A64" />
        <rect x="-40" y="3" width="80" height="25" rx="6" fill="#78909C" />
        <rect x="-33" y="6" width="30" height="18" rx="2" fill="#90CAF9" opacity="0.8" />
        <rect x="3" y="6" width="30" height="18" rx="2" fill="#90CAF9" opacity="0.8" />
        <circle cx="-35" cy="50" r="11" fill="#212121" /><circle cx="-35" cy="50" r="6" fill="#616161" />
        <circle cx="35" cy="50" r="11" fill="#212121" /><circle cx="35" cy="50" r="6" fill="#616161" />
      </g>
      <path d="M65,97 L20,80 L15,100 L20,115 L65,105 Z" fill="#FFF176" opacity="0.6" />
      <path d="M65,97 L2,60 L0,90 L0,110 L65,105 Z" fill="#FFEE58" opacity="0.3" />
      <rect x="180" y="20" width="85" height="20" rx="5" fill="#FFC107" opacity="0.9" />
      <text x="222" y="34" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="#1A237E">LUCES CORTAS</text>
      <rect x="180" y="48" width="85" height="20" rx="5" fill="#FF9800" opacity="0.9" />
      <text x="222" y="62" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="white">LUCES LARGAS</text>
    </svg>
  );
}

function ScenarioSeatbelt() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#E8F5E9" rx="12" />
      <rect x="80" y="30" width="120" height="130" rx="16" fill="#B0BEC5" />
      <rect x="90" y="70" width="100" height="85" rx="10" fill="#90A4AE" />
      <circle cx="140" cy="75" r="22" fill="#5D4037" />
      <rect x="115" y="96" width="50" height="60" rx="10" fill="#5D4037" />
      <path d="M120,90 L155,145" stroke="#FFC107" strokeWidth="7" strokeLinecap="round" />
      <path d="M155,145 L115,145" stroke="#FFC107" strokeWidth="7" strokeLinecap="round" />
      <rect x="145" y="138" width="18" height="14" rx="4" fill="#FF8F00" stroke="#E65100" strokeWidth="2" />
      <circle cx="220" cy="50" r="22" fill="#4CAF50" />
      <polyline points="210,50 217,57 232,42" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function ScenarioPhone() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#FFF3E0" rx="12" />
      <circle cx="90" cy="95" r="55" fill="none" stroke="#795548" strokeWidth="10" />
      <circle cx="90" cy="95" r="20" fill="#795548" />
      <line x1="90" y1="40" x2="90" y2="75" stroke="#795548" strokeWidth="10" />
      <line x1="90" y1="115" x2="90" y2="150" stroke="#795548" strokeWidth="10" />
      <line x1="35" y1="95" x2="70" y2="95" stroke="#795548" strokeWidth="10" />
      <line x1="110" y1="95" x2="145" y2="95" stroke="#795548" strokeWidth="10" />
      <rect x="170" y="35" width="60" height="100" rx="10" fill="#212121" stroke="#424242" strokeWidth="3" />
      <rect x="176" y="47" width="48" height="72" rx="4" fill="#1565C0" />
      <circle cx="200" cy="124" r="5" fill="#616161" />
      <rect x="182" y="55" width="36" height="4" rx="2" fill="#90CAF9" />
      <rect x="182" y="64" width="28" height="4" rx="2" fill="#90CAF9" />
      <rect x="182" y="73" width="36" height="4" rx="2" fill="#90CAF9" />
      <circle cx="200" cy="90" r="52" fill="none" stroke="#CC0000" strokeWidth="8" opacity="0.9" />
      <line x1="163" y1="53" x2="237" y2="127" stroke="#CC0000" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

function ScenarioRoundabout() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#E3F2FD" rx="12" />
      <circle cx="140" cy="90" r="75" fill="#78909C" />
      <circle cx="140" cy="90" r="45" fill="#B0BEC5" />
      <circle cx="140" cy="90" r="38" fill="#4CAF50" />
      <circle cx="140" cy="90" r="28" fill="#388E3C" />
      <circle cx="140" cy="90" r="62" fill="none" stroke="white" strokeWidth="2" strokeDasharray="8,8" />
      <rect x="120" y="15" width="40" height="50" fill="#90A4AE" />
      <rect x="120" y="115" width="40" height="50" fill="#90A4AE" />
      <rect x="15" y="70" width="50" height="40" fill="#90A4AE" />
      <rect x="215" y="70" width="50" height="40" fill="#90A4AE" />
      <path d="M140,55 A45,45 0 0,1 185,90" fill="none" stroke="#FFC107" strokeWidth="4" />
      <polygon points="183,82 190,95 177,95" fill="#FFC107" />
      <g transform="translate(175,60) rotate(45)">
        <rect x="-14" y="-8" width="28" height="16" rx="4" fill="#E53935" />
        <circle cx="-8" cy="8" r="4" fill="#212121" /><circle cx="8" cy="8" r="4" fill="#212121" />
      </g>
    </svg>
  );
}

function ScenarioRain() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#B0BEC5" rx="12" />
      {[30,60,90,130,160,200,240,20,80,150,220,50,120,190,250,40,110,170,230].map((x, i) => (
        <line key={i} x1={x} y1={(i*17)%80+5} x2={x-4} y2={(i*17)%80+20} stroke="#64B5F6" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      ))}
      <rect x="0" y="110" width="280" height="70" fill="#546E7A" />
      <ellipse cx="140" cy="120" rx="70" ry="12" fill="#90CAF9" opacity="0.6" />
      <g transform="translate(140,88)">
        <rect x="-55" y="12" width="110" height="32" rx="8" fill="#1565C0" />
        <rect x="-40" y="2" width="80" height="22" rx="6" fill="#64B5F6" />
        <circle cx="-33" cy="44" r="10" fill="#212121" /><circle cx="-33" cy="44" r="6" fill="#616161" />
        <circle cx="33" cy="44" r="10" fill="#212121" /><circle cx="33" cy="44" r="6" fill="#616161" />
      </g>
      <rect x="5" y="140" width="100" height="22" rx="6" fill="#E53935" opacity="0.9" />
      <text x="55" y="155" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="white">AQUAPLANING</text>
    </svg>
  );
}

function ScenarioFirstAid() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#FCE4EC" rx="12" />
      <rect x="90" y="40" width="100" height="100" rx="14" fill="#E53935" />
      <rect x="112" y="60" width="56" height="16" rx="4" fill="white" />
      <rect x="112" y="76" width="16" height="28" rx="4" fill="white" />
      <rect x="144" y="76" width="24" height="28" rx="4" fill="white" />
      <rect x="112" y="104" width="56" height="16" rx="4" fill="white" />
      <circle cx="205" cy="65" r="18" fill="#5D4037" opacity="0.8" />
      <path d="M190,83 Q205,130 220,83" fill="#5D4037" opacity="0.7" />
      <path d="M170,90 L185,90" stroke="#E53935" strokeWidth="4" strokeLinecap="round" />
      <polygon points="183,85 192,90 183,95" fill="#E53935" />
      <rect x="20" y="65" width="55" height="52" rx="8" fill="#1B5E20" />
      <text x="47" y="85" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="white">P</text>
      <text x="47" y="105" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="white">AS</text>
    </svg>
  );
}

function ScenarioDocument() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#E8EAF6" rx="12" />
      <rect x="40" y="35" width="200" height="115" rx="14" fill="#1565C0" />
      <rect x="40" y="35" width="200" height="35" rx="14" fill="#0D47A1" />
      <rect x="40" y="56" width="200" height="14" fill="#0D47A1" />
      <text x="140" y="58" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="13" fontWeight="900" fill="white">PERMISO DE CONDUCCIÓN</text>
      <rect x="58" y="80" width="50" height="56" rx="6" fill="#1976D2" />
      <circle cx="83" cy="98" r="13" fill="#90CAF9" />
      <ellipse cx="83" cy="120" rx="16" ry="10" fill="#90CAF9" />
      <rect x="120" y="82" width="100" height="8" rx="4" fill="white" opacity="0.7" />
      <rect x="120" y="96" width="80" height="8" rx="4" fill="white" opacity="0.7" />
      <rect x="120" y="110" width="90" height="8" rx="4" fill="white" opacity="0.7" />
    </svg>
  );
}

function ScenarioChildSeat() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#F3E5F5" rx="12" />
      <rect x="70" y="20" width="140" height="145" rx="18" fill="#9E9E9E" />
      <rect x="82" y="65" width="116" height="95" rx="12" fill="#757575" />
      <rect x="95" y="45" width="90" height="100" rx="14" fill="#E53935" />
      <rect x="103" y="80" width="74" height="60" rx="10" fill="#C62828" />
      <line x1="140" y1="75" x2="116" y2="130" stroke="#FFC107" strokeWidth="6" strokeLinecap="round" />
      <line x1="140" y1="75" x2="164" y2="130" stroke="#FFC107" strokeWidth="6" strokeLinecap="round" />
      <line x1="116" y1="110" x2="164" y2="110" stroke="#FFC107" strokeWidth="5" strokeLinecap="round" />
      <circle cx="140" cy="72" r="20" fill="#FFCCBC" />
      <circle cx="133" cy="68" r="3" fill="#5D4037" /><circle cx="147" cy="68" r="3" fill="#5D4037" />
      <path d="M133,78 Q140,84 147,78" fill="none" stroke="#5D4037" strokeWidth="2" />
      <rect x="126" y="128" width="28" height="12" rx="5" fill="#FF8F00" stroke="#E65100" strokeWidth="2" />
      <circle cx="230" cy="45" r="22" fill="#4CAF50" />
      <polyline points="220,45 227,52 242,37" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function ScenarioPoints() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#FFF8E1" rx="12" />
      <rect x="30" y="30" width="220" height="125" rx="14" fill="#1565C0" />
      <text x="140" y="60" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="13" fontWeight="900" fill="white">CARNÉ POR PUNTOS</text>
      <text x="140" y="90" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="#90CAF9">Puntos disponibles</text>
      {[55,80,105,130,155,180,205,230].map((x, i) => (
        <text key={i} x={x} y="118" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fill="#FFD700">★</text>
      ))}
    </svg>
  );
}

function ScenarioHighway() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="280" height="90" fill="#90CAF9" rx="12" />
      <rect x="0" y="85" width="280" height="95" fill="#B0BEC5" />
      <polygon points="0,180 280,180 220,90 60,90" fill="#546E7A" />
      <polygon points="130,90 150,90 155,180 125,180" fill="white" opacity="0.5" />
      <rect x="15" y="20" width="85" height="50" rx="6" fill="#1565C0" />
      <text x="57" y="38" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="11" fontWeight="900" fill="white">AUTOPISTA</text>
      <text x="57" y="56" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="white">120</text>
      <text x="57" y="68" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#90CAF9">km/h máx.</text>
      <rect x="118" y="100" width="44" height="20" rx="5" fill="#F44336" />
      <rect x="123" y="94" width="34" height="14" rx="3" fill="#EF9A9A" />
    </svg>
  );
}

function NoStopNoParkSVG() {
  return (
    <svg viewBox="0 0 200 200" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="88" fill="white" stroke="#CC0000" strokeWidth="14" />
      <line x1="38" y1="38" x2="162" y2="162" stroke="#CC0000" strokeWidth="18" strokeLinecap="round" />
      <line x1="162" y1="38" x2="38" y2="162" stroke="#CC0000" strokeWidth="18" strokeLinecap="round" />
    </svg>
  );
}

function EndRestrictionsSVG() {
  return (
    <svg viewBox="0 0 200 200" width="140" height="140" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="88" fill="white" stroke="#888" strokeWidth="10" />
      <line x1="30" y1="30" x2="170" y2="170" stroke="#888" strokeWidth="14" strokeLinecap="round" />
    </svg>
  );
}

function ScenarioSnow() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#E3F2FD" rx="12" />
      <rect x="0" y="110" width="280" height="70" fill="#CFD8DC" />
      <rect x="0" y="105" width="280" height="10" fill="#B0BEC5" />
      {/* Snowflakes */}
      {[30,70,130,180,230,50,110,160,210,255].map((x, i) => (
        <g key={i} transform={`translate(${x},${(i % 4) * 22 + 12})`}>
          <line x1="0" y1="-8" x2="0" y2="8" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="-8" y1="0" x2="8" y2="0" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="-5" y1="-5" x2="5" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <line x1="5" y1="-5" x2="-5" y2="5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </g>
      ))}
      {/* Car */}
      <g transform="translate(140,88)">
        <rect x="-55" y="12" width="110" height="32" rx="8" fill="#1565C0" />
        <rect x="-40" y="1" width="80" height="24" rx="6" fill="#90CAF9" />
        <rect x="-33" y="4" width="28" height="16" rx="2" fill="#E3F2FD" opacity="0.8" />
        <rect x="3" y="4" width="28" height="16" rx="2" fill="#E3F2FD" opacity="0.8" />
        <circle cx="-35" cy="44" r="10" fill="#212121" /><circle cx="-35" cy="44" r="6" fill="#616161" />
        <circle cx="35" cy="44" r="10" fill="#212121" /><circle cx="35" cy="44" r="6" fill="#616161" />
        {/* Chains on wheels */}
        <circle cx="-35" cy="44" r="10" fill="none" stroke="#FFC107" strokeWidth="2" strokeDasharray="4,3" />
        <circle cx="35" cy="44" r="10" fill="none" stroke="#FFC107" strokeWidth="2" strokeDasharray="4,3" />
      </g>
      {/* Distance x10 label */}
      <rect x="5" y="120" width="110" height="24" rx="6" fill="#E53935" opacity="0.9" />
      <text x="60" y="136" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="12" fontWeight="900" fill="white">FRENADO x10</text>
    </svg>
  );
}

function ScenarioFog() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#ECEFF1" rx="12" />
      {/* Fog layers */}
      <ellipse cx="60" cy="60" rx="80" ry="25" fill="white" opacity="0.7" />
      <ellipse cx="200" cy="45" rx="90" ry="22" fill="white" opacity="0.6" />
      <ellipse cx="140" cy="80" rx="120" ry="20" fill="white" opacity="0.65" />
      <ellipse cx="80" cy="100" rx="100" ry="18" fill="white" opacity="0.5" />
      <rect x="0" y="120" width="280" height="60" fill="#90A4AE" opacity="0.5" />
      {/* Faint car barely visible */}
      <g transform="translate(140,92)" opacity="0.45">
        <rect x="-55" y="12" width="110" height="32" rx="8" fill="#455A64" />
        <rect x="-40" y="1" width="80" height="24" rx="6" fill="#78909C" />
        <circle cx="-35" cy="44" r="10" fill="#212121" /><circle cx="-35" cy="44" r="6" fill="#424242" />
        <circle cx="35" cy="44" r="10" fill="#212121" /><circle cx="35" cy="44" r="6" fill="#424242" />
      </g>
      {/* Fog lights glow */}
      <ellipse cx="85" cy="104" rx="22" ry="8" fill="#FF6F00" opacity="0.55" />
      <ellipse cx="195" cy="104" rx="22" ry="8" fill="#FF6F00" opacity="0.55" />
      {/* Label */}
      <rect x="5" y="148" width="130" height="22" rx="6" fill="#37474F" opacity="0.9" />
      <text x="70" y="163" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="white">NIEBLA &lt;50m</text>
    </svg>
  );
}

function ScenarioFatigue() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#1A237E" rx="12" />
      <rect x="0" y="130" width="280" height="50" fill="#263238" />
      {/* Driver silhouette with droopy eyes */}
      <circle cx="90" cy="80" r="28" fill="#5D4037" />
      {/* Droopy/closed eyes */}
      <path d="M78,76 Q84,84 90,76" fill="none" stroke="#3E2723" strokeWidth="3" strokeLinecap="round" />
      <path d="M90,76 Q96,84 102,76" fill="none" stroke="#3E2723" strokeWidth="3" strokeLinecap="round" />
      {/* Eyelids half closed */}
      <rect x="76" y="72" width="16" height="7" rx="3" fill="#5D4037" />
      <rect x="90" y="72" width="16" height="7" rx="3" fill="#5D4037" />
      {/* ZZZ symbols */}
      <text x="130" y="50" fontFamily="Arial Black, sans-serif" fontSize="22" fontWeight="900" fill="#90CAF9" opacity="0.9">Z</text>
      <text x="158" y="38" fontFamily="Arial Black, sans-serif" fontSize="17" fontWeight="900" fill="#90CAF9" opacity="0.7">Z</text>
      <text x="180" y="28" fontFamily="Arial Black, sans-serif" fontSize="13" fontWeight="900" fill="#90CAF9" opacity="0.5">Z</text>
      {/* Steering wheel */}
      <circle cx="90" cy="118" r="18" fill="none" stroke="#8D6E63" strokeWidth="5" />
      <line x1="90" y1="100" x2="90" y2="136" stroke="#8D6E63" strokeWidth="4" />
      <line x1="72" y1="118" x2="108" y2="118" stroke="#8D6E63" strokeWidth="4" />
      {/* Warning box */}
      <rect x="160" y="90" width="110" height="52" rx="8" fill="#E53935" opacity="0.9" />
      <text x="215" y="112" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="11" fontWeight="900" fill="white">¡MICROSUEÑO!</text>
      <text x="215" y="130" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="white">Detente y descansa</text>
    </svg>
  );
}

function ScenarioTunnel() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#212121" rx="12" />
      {/* Tunnel walls perspective */}
      <polygon points="0,0 280,0 220,180 60,180" fill="#37474F" />
      <polygon points="40,0 240,0 200,180 80,180" fill="#455A64" />
      {/* Road surface */}
      <polygon points="80,180 200,180 240,100 40,100" fill="#546E7A" />
      {/* Center line dashes */}
      <polygon points="136,180 144,180 142,150 138,150" fill="white" opacity="0.7" />
      <polygon points="137,140 143,140 141,115 139,115" fill="white" opacity="0.5" />
      {/* Tunnel arch top gradient */}
      <ellipse cx="140" cy="0" rx="100" ry="30" fill="#263238" />
      {/* Car with headlights */}
      <g transform="translate(140,138)">
        <rect x="-40" y="-14" width="80" height="26" rx="7" fill="#37474F" />
        <rect x="-28" y="-24" width="56" height="18" rx="5" fill="#546E7A" />
        <rect x="-24" y="-22" width="22" height="13" rx="2" fill="#B0BEC5" opacity="0.7" />
        <rect x="2" y="-22" width="22" height="13" rx="2" fill="#B0BEC5" opacity="0.7" />
        <circle cx="-28" cy="12" r="9" fill="#212121" /><circle cx="-28" cy="12" r="5" fill="#616161" />
        <circle cx="28" cy="12" r="9" fill="#212121" /><circle cx="28" cy="12" r="5" fill="#616161" />
        {/* Headlight beams */}
        <polygon points="-40,-8 -80,-30 -80,10 -40,8" fill="#FFF9C4" opacity="0.35" />
        <polygon points="40,-8 80,-30 80,10 40,8" fill="#FFF9C4" opacity="0.35" />
      </g>
      {/* Lights along tunnel ceiling */}
      {[60,100,140,180,220].map((x, i) => (
        <ellipse key={i} cx={x} cy="18" rx="8" ry="4" fill="#FFF176" opacity={0.7 - i * 0.1} />
      ))}
      <rect x="5" y="155" width="120" height="20" rx="5" fill="#1565C0" opacity="0.9" />
      <text x="65" y="169" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="white">LUCES CORTAS</text>
    </svg>
  );
}

function ScenarioMechanics() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#ECEFF1" rx="12" />
      {/* Tire cross-section */}
      <circle cx="75" cy="95" r="55" fill="#212121" />
      <circle cx="75" cy="95" r="40" fill="#424242" />
      <circle cx="75" cy="95" r="28" fill="#757575" />
      {/* Tread pattern lines on tire */}
      {[-3,-1,1,3].map((offset, i) => (
        <line key={i} x1={75 + offset * 10 - 20} y1="42" x2={75 + offset * 10 - 20} y2="148" stroke="#212121" strokeWidth="3" opacity="0.7" />
      ))}
      {/* Tread depth indicator */}
      <rect x="20" y="148" width="110" height="16" rx="4" fill="#E53935" opacity="0.85" />
      <text x="75" y="160" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="white">mín. 1,6 mm dibujo</text>
      {/* ABS diagram */}
      <rect x="155" y="25" width="115" height="70" rx="8" fill="#1565C0" />
      <text x="212" y="48" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="14" fontWeight="900" fill="white">ABS</text>
      <text x="212" y="65" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fill="#90CAF9">Evita bloqueo</text>
      <text x="212" y="80" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fill="#90CAF9">Frena a FONDO</text>
      {/* Brake disc */}
      <circle cx="205" cy="130" r="35" fill="none" stroke="#FF5722" strokeWidth="8" />
      <circle cx="205" cy="130" r="14" fill="#FF5722" opacity="0.5" />
      {[0,60,120,180,240,300].map((angle, i) => {
        const rad = angle * Math.PI / 180;
        return <line key={i} x1={205 + 14 * Math.cos(rad)} y1={130 + 14 * Math.sin(rad)} x2={205 + 35 * Math.cos(rad)} y2={130 + 35 * Math.sin(rad)} stroke="#FF5722" strokeWidth="3" />;
      })}
      <text x="205" y="168" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="9" fill="#37474F">DISCO DE FRENO</text>
    </svg>
  );
}

// --- Map sign types to SVG fallbacks ---
function getSignFallback(image) {
  const { type, value, icon, scene } = image;
  if (type === "speed-sign") return <SpeedLimitSVG value={value} />;
  if (type === "stop-sign") return <StopSVG />;
  if (type === "give-way") return <GiveWaySVG />;
  if (type === "warning") return <WarningSVG icon={icon} />;
  if (type === "obligation") return <ObligationSVG />;
  if (type === "priority-road") return <PriorityRoadSVG />;
  if (type === "prohibition") return <ProhibitionSVG icon={icon} />;
  if (type === "no-stop-no-park") return <NoStopNoParkSVG />;
  if (type === "end-restrictions") return <EndRestrictionsSVG />;
  if (type === "scenario") {
    if (scene === "alcohol") return <ScenarioAlcohol />;
    if (scene === "distance") return <ScenarioDistance />;
    if (scene === "overtaking") return <ScenarioOvertaking />;
    if (scene === "lights") return <ScenarioLights />;
    if (scene === "seatbelt") return <ScenarioSeatbelt />;
    if (scene === "phone") return <ScenarioPhone />;
    if (scene === "roundabout") return <ScenarioRoundabout />;
    if (scene === "rain") return <ScenarioRain />;
    if (scene === "firstaid") return <ScenarioFirstAid />;
    if (scene === "document") return <ScenarioDocument />;
    if (scene === "child-seat") return <ScenarioChildSeat />;
    if (scene === "points") return <ScenarioPoints />;
    if (scene === "highway") return <ScenarioHighway />;
    if (scene === "snow") return <ScenarioSnow />;
    if (scene === "fog") return <ScenarioFog />;
    if (scene === "fatigue") return <ScenarioFatigue />;
    if (scene === "tunnel") return <ScenarioTunnel />;
    if (scene === "mechanics") return <ScenarioMechanics />;
  }
  return null;
}

// --- Map sign types to Wikimedia URLs ---
function getWikiUrl(image) {
  const { type, value, icon } = image;
  if (type === "scenario") return null; // scenarios use SVG only
  if (type === "speed-sign") return SIGN_URLS[`speed-${value}`] || null;
  if (type === "stop-sign") return SIGN_URLS["stop"];
  if (type === "give-way") return SIGN_URLS["give-way"];
  if (type === "priority-road") return SIGN_URLS["priority-road"];
  if (type === "warning") return SIGN_URLS[`warning-${icon}`] || SIGN_URLS["warning-exclamation"];
  if (type === "obligation") return SIGN_URLS[`obligation-${icon}`] || SIGN_URLS["obligation-arrow-right"];
  if (type === "prohibition") return SIGN_URLS[icon === "no-entry" ? "no-entry" : "no-parking"];
  if (type === "no-stop-no-park") return SIGN_URLS["no-stop-no-park"];
  if (type === "end-restrictions") return SIGN_URLS["end-restrictions"];
  return null;
}

function WikiSignImage({ url, fallback, alt }) {
  const [failed, setFailed] = useState(false);
  if (failed || !url) return fallback;
  return (
    <img
      src={url}
      alt={alt}
      className="question-sign-img"
      onError={() => setFailed(true)}
    />
  );
}

function QuestionImage({ image }) {
  if (!image) return null;

  const fallback = getSignFallback(image);
  if (!fallback) return null;

  const wikiUrl = getWikiUrl(image);

  return (
    <div className="question-image-container">
      <WikiSignImage url={wikiUrl} fallback={fallback} alt="señal de tráfico" />
    </div>
  );
}

export default QuestionImage;
