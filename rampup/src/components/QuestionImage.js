function SpeedLimitSign({ value }) {
  return (
    <svg viewBox="0 0 200 200" width="160" height="160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="90" fill="white" stroke="#CC0000" strokeWidth="16" />
      <circle cx="100" cy="100" r="74" fill="white" />
      <text
        x="100"
        y="118"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize={value >= 100 ? "58" : "68"}
        fill="#1a1a1a"
      >
        {value}
      </text>
    </svg>
  );
}

function StopSign() {
  const r = 80;
  const cx = 100;
  const cy = 100;
  const sides = 8;
  const points = Array.from({ length: sides }, (_, i) => {
    const angle = ((i * 2 * Math.PI) / sides) - Math.PI / sides;
    return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
  }).join(" ");
  return (
    <svg viewBox="0 0 200 200" width="160" height="160" xmlns="http://www.w3.org/2000/svg">
      <polygon points={points} fill="#CC0000" stroke="#AA0000" strokeWidth="3" />
      <polygon
        points={Array.from({ length: sides }, (_, i) => {
          const angle = ((i * 2 * Math.PI) / sides) - Math.PI / sides;
          return `${cx + (r - 10) * Math.cos(angle)},${cy + (r - 10) * Math.sin(angle)}`;
        }).join(" ")}
        fill="none"
        stroke="white"
        strokeWidth="2"
      />
      <text
        x="100"
        y="114"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="40"
        fill="white"
        letterSpacing="2"
      >
        STOP
      </text>
    </svg>
  );
}

function GiveWaySign() {
  return (
    <svg viewBox="0 0 220 200" width="180" height="160" xmlns="http://www.w3.org/2000/svg">
      <polygon points="110,185 10,15 210,15" fill="white" stroke="#CC0000" strokeWidth="14" strokeLinejoin="round" />
      <polygon points="110,165 30,27 190,27" fill="white" stroke="#CC0000" strokeWidth="4" />
      <text
        x="110"
        y="100"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="20"
        fill="#CC0000"
      >
        CEDA EL
      </text>
      <text
        x="110"
        y="128"
        textAnchor="middle"
        fontFamily="Arial Black, Arial, sans-serif"
        fontWeight="900"
        fontSize="20"
        fill="#CC0000"
      >
        PASO
      </text>
    </svg>
  );
}

function WarningSign({ icon }) {
  return (
    <svg viewBox="0 0 220 200" width="180" height="160" xmlns="http://www.w3.org/2000/svg">
      <polygon points="110,15 10,185 210,185" fill="#FFFBE6" stroke="#CC0000" strokeWidth="12" strokeLinejoin="round" />
      {icon === "intersection" ? (
        <g>
          <rect x="95" y="60" width="20" height="90" rx="4" fill="#CC0000" />
          <rect x="55" y="95" width="110" height="20" rx="4" fill="#CC0000" />
        </g>
      ) : (
        <g>
          <rect x="95" y="65" width="20" height="65" rx="8" fill="#CC0000" />
          <circle cx="105" cy="152" r="11" fill="#CC0000" />
        </g>
      )}
    </svg>
  );
}

function ObligationSign({ icon }) {
  return (
    <svg viewBox="0 0 200 200" width="160" height="160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="88" fill="#1565C0" />
      <circle cx="100" cy="100" r="88" fill="none" stroke="#0D47A1" strokeWidth="4" />
      {icon === "arrow-right" ? (
        <g fill="white">
          <rect x="50" y="88" width="80" height="24" rx="6" />
          <polygon points="120,70 155,100 120,130" />
        </g>
      ) : (
        <g fill="white">
          <rect x="88" y="50" width="24" height="80" rx="6" />
          <polygon points="70,120 100,155 130,120" />
        </g>
      )}
    </svg>
  );
}

function PriorityRoadSign() {
  return (
    <svg viewBox="0 0 200 200" width="160" height="160" xmlns="http://www.w3.org/2000/svg">
      <rect x="100" y="10" width="120" height="120" rx="6" fill="white" transform="rotate(45 100 100)" />
      <rect x="100" y="20" width="104" height="104" rx="4" fill="#FFD700" transform="rotate(45 100 100)" />
      <rect x="100" y="32" width="90" height="90" rx="3" fill="none" stroke="white" strokeWidth="5" transform="rotate(45 100 100)" />
    </svg>
  );
}

function ProhibitionSign({ icon }) {
  return (
    <svg viewBox="0 0 200 200" width="160" height="160" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="88" fill="white" stroke="#CC0000" strokeWidth="14" />
      {icon === "no-entry" ? (
        <rect x="30" y="85" width="140" height="30" rx="6" fill="#CC0000" />
      ) : (
        <g>
          <line x1="50" y1="50" x2="150" y2="150" stroke="#CC0000" strokeWidth="18" strokeLinecap="round" />
          <rect x="72" y="72" width="56" height="56" rx="6" fill="#555" />
        </g>
      )}
    </svg>
  );
}

function ScenarioAlcohol() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#F0F4FF" rx="12" />
      <rect x="0" y="130" width="280" height="50" fill="#6c757d" rx="0" />
      <rect x="0" y="125" width="280" height="10" fill="#495057" />
      {/* Car */}
      <g transform="translate(150,80)">
        <rect x="-55" y="20" width="110" height="35" rx="8" fill="#2196F3" />
        <rect x="-40" y="5" width="80" height="28" rx="6" fill="#64B5F6" />
        <rect x="-30" y="8" width="28" height="20" rx="3" fill="#B3E5FC" />
        <rect x="4" y="8" width="28" height="20" rx="3" fill="#B3E5FC" />
        <circle cx="-35" cy="55" r="12" fill="#212121" />
        <circle cx="-35" cy="55" r="7" fill="#616161" />
        <circle cx="35" cy="55" r="12" fill="#212121" />
        <circle cx="35" cy="55" r="7" fill="#616161" />
      </g>
      {/* Wine glass */}
      <g transform="translate(60,30)">
        <ellipse cx="0" cy="0" rx="22" ry="8" fill="#EF9A9A" opacity="0.6" />
        <path d="M-22,0 Q-22,35 0,45 Q22,35 22,0 Z" fill="#EF9A9A" opacity="0.7" stroke="#E53935" strokeWidth="2" />
        <rect x="-3" y="45" width="6" height="28" rx="3" fill="#E53935" />
        <ellipse cx="0" cy="73" rx="14" ry="5" fill="#E53935" />
      </g>
      {/* X mark over glass */}
      <g stroke="#CC0000" strokeWidth="5" strokeLinecap="round" transform="translate(60,55)">
        <line x1="-18" y1="-18" x2="18" y2="18" />
        <line x1="18" y1="-18" x2="-18" y2="18" />
      </g>
      {/* Tasa label */}
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
      {/* Front car */}
      <g transform="translate(195,85)">
        <rect x="-45" y="15" width="90" height="30" rx="7" fill="#F44336" />
        <rect x="-32" y="3" width="64" height="22" rx="5" fill="#EF9A9A" />
        <rect x="-26" y="6" width="24" height="14" rx="2" fill="#FFCDD2" />
        <rect x="4" y="6" width="24" height="14" rx="2" fill="#FFCDD2" />
        <circle cx="-28" cy="45" r="10" fill="#212121" />
        <circle cx="-28" cy="45" r="6" fill="#616161" />
        <circle cx="28" cy="45" r="10" fill="#212121" />
        <circle cx="28" cy="45" r="6" fill="#616161" />
      </g>
      {/* Back car */}
      <g transform="translate(65,85)">
        <rect x="-45" y="15" width="90" height="30" rx="7" fill="#1565C0" />
        <rect x="-32" y="3" width="64" height="22" rx="5" fill="#90CAF9" />
        <rect x="-26" y="6" width="24" height="14" rx="2" fill="#BBDEFB" />
        <rect x="4" y="6" width="24" height="14" rx="2" fill="#BBDEFB" />
        <circle cx="-28" cy="45" r="10" fill="#212121" />
        <circle cx="-28" cy="45" r="6" fill="#616161" />
        <circle cx="28" cy="45" r="10" fill="#212121" />
        <circle cx="28" cy="45" r="6" fill="#616161" />
      </g>
      {/* Distance arrow */}
      <g stroke="#2E7D32" strokeWidth="3" fill="#2E7D32">
        <line x1="115" y1="95" x2="150" y2="95" />
        <polygon points="115,90 108,95 115,100" />
        <polygon points="150,90 157,95 150,100" />
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
      {/* Road markings */}
      <line x1="0" y1="90" x2="280" y2="90" stroke="white" strokeWidth="4" />
      <line x1="0" y1="90" x2="90" y2="90" stroke="white" strokeWidth="4" strokeDasharray="18,12" />
      <line x1="130" y1="90" x2="280" y2="90" stroke="#FF5252" strokeWidth="4" />
      {/* Overtaking car */}
      <g transform="translate(140,52)">
        <rect x="-45" y="12" width="90" height="28" rx="7" fill="#4CAF50" />
        <rect x="-32" y="2" width="64" height="20" rx="5" fill="#A5D6A7" />
        <rect x="-25" y="4" width="22" height="13" rx="2" fill="#C8E6C9" />
        <rect x="4" y="4" width="22" height="13" rx="2" fill="#C8E6C9" />
        <circle cx="-27" cy="40" r="9" fill="#212121" />
        <circle cx="-27" cy="40" r="5" fill="#616161" />
        <circle cx="27" cy="40" r="9" fill="#212121" />
        <circle cx="27" cy="40" r="5" fill="#616161" />
        {/* Arrow */}
        <polygon points="55,14 70,20 55,26" fill="#FF9800" />
        <line x1="45" y1="20" x2="55" y2="20" stroke="#FF9800" strokeWidth="4" />
      </g>
      {/* Slow car */}
      <g transform="translate(110,120)">
        <rect x="-45" y="12" width="90" height="28" rx="7" fill="#F44336" />
        <rect x="-32" y="2" width="64" height="20" rx="5" fill="#EF9A9A" />
        <rect x="-25" y="4" width="22" height="13" rx="2" fill="#FFCDD2" />
        <rect x="4" y="4" width="22" height="13" rx="2" fill="#FFCDD2" />
        <circle cx="-27" cy="40" r="9" fill="#212121" />
        <circle cx="-27" cy="40" r="5" fill="#616161" />
        <circle cx="27" cy="40" r="9" fill="#212121" />
        <circle cx="27" cy="40" r="5" fill="#616161" />
      </g>
    </svg>
  );
}

function ScenarioLights() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#1A237E" rx="12" />
      <rect x="0" y="120" width="280" height="60" fill="#37474F" />
      {/* Car */}
      <g transform="translate(120,90)">
        <rect x="-55" y="15" width="110" height="35" rx="8" fill="#455A64" />
        <rect x="-40" y="3" width="80" height="25" rx="6" fill="#78909C" />
        <rect x="-33" y="6" width="30" height="18" rx="2" fill="#90CAF9" opacity="0.8" />
        <rect x="3" y="6" width="30" height="18" rx="2" fill="#90CAF9" opacity="0.8" />
        <circle cx="-35" cy="50" r="11" fill="#212121" />
        <circle cx="-35" cy="50" r="6" fill="#616161" />
        <circle cx="35" cy="50" r="11" fill="#212121" />
        <circle cx="35" cy="50" r="6" fill="#616161" />
      </g>
      {/* Short beam */}
      <path d="M65,97 L20,80 L15,100 L20,115 L65,105 Z" fill="#FFF176" opacity="0.6" />
      {/* Long beam */}
      <path d="M65,97 L2,60 L0,90 L0,110 L65,105 Z" fill="#FFEE58" opacity="0.3" />
      {/* Labels */}
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
      {/* Seat outline */}
      <rect x="80" y="30" width="120" height="130" rx="16" fill="#B0BEC5" />
      <rect x="90" y="70" width="100" height="85" rx="10" fill="#90A4AE" />
      {/* Person silhouette */}
      <circle cx="140" cy="75" r="22" fill="#5D4037" />
      <rect x="115" y="96" width="50" height="60" rx="10" fill="#5D4037" />
      {/* Seatbelt */}
      <path d="M120,90 L155,145" stroke="#FFC107" strokeWidth="7" strokeLinecap="round" />
      <path d="M155,145 L115,145" stroke="#FFC107" strokeWidth="7" strokeLinecap="round" />
      {/* Buckle */}
      <rect x="145" y="138" width="18" height="14" rx="4" fill="#FF8F00" stroke="#E65100" strokeWidth="2" />
      {/* Check */}
      <circle cx="220" cy="50" r="22" fill="#4CAF50" />
      <polyline points="210,50 217,57 232,42" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function ScenarioPhone() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#FFF3E0" rx="12" />
      {/* Car steering wheel */}
      <circle cx="90" cy="95" r="55" fill="none" stroke="#795548" strokeWidth="10" />
      <circle cx="90" cy="95" r="20" fill="#795548" />
      <line x1="90" y1="40" x2="90" y2="75" stroke="#795548" strokeWidth="10" />
      <line x1="90" y1="115" x2="90" y2="150" stroke="#795548" strokeWidth="10" />
      <line x1="35" y1="95" x2="70" y2="95" stroke="#795548" strokeWidth="10" />
      <line x1="110" y1="95" x2="145" y2="95" stroke="#795548" strokeWidth="10" />
      {/* Phone */}
      <rect x="170" y="35" width="60" height="100" rx="10" fill="#212121" stroke="#424242" strokeWidth="3" />
      <rect x="176" y="47" width="48" height="72" rx="4" fill="#1565C0" />
      <circle cx="200" cy="124" r="5" fill="#616161" />
      {/* Lines on phone screen */}
      <rect x="182" y="55" width="36" height="4" rx="2" fill="#90CAF9" />
      <rect x="182" y="64" width="28" height="4" rx="2" fill="#90CAF9" />
      <rect x="182" y="73" width="36" height="4" rx="2" fill="#90CAF9" />
      {/* Red X ban circle */}
      <circle cx="200" cy="90" r="52" fill="none" stroke="#CC0000" strokeWidth="8" opacity="0.9" />
      <line x1="163" y1="53" x2="237" y2="127" stroke="#CC0000" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

function ScenarioRoundabout() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#E3F2FD" rx="12" />
      {/* Road */}
      <circle cx="140" cy="90" r="75" fill="#78909C" />
      <circle cx="140" cy="90" r="45" fill="#B0BEC5" />
      <circle cx="140" cy="90" r="38" fill="#4CAF50" />
      {/* Center island */}
      <circle cx="140" cy="90" r="28" fill="#388E3C" />
      {/* Lane markings */}
      <circle cx="140" cy="90" r="62" fill="none" stroke="white" strokeWidth="2" strokeDasharray="8,8" />
      {/* Entry roads */}
      <rect x="120" y="15" width="40" height="50" fill="#90A4AE" />
      <rect x="120" y="115" width="40" height="50" fill="#90A4AE" />
      <rect x="15" y="70" width="50" height="40" fill="#90A4AE" />
      <rect x="215" y="70" width="50" height="40" fill="#90A4AE" />
      {/* Arrows */}
      <path d="M140,55 A45,45 0 0,1 185,90" fill="none" stroke="#FFC107" strokeWidth="4" strokeDasharray="0" />
      <polygon points="183,82 190,95 177,95" fill="#FFC107" />
      {/* Car in roundabout */}
      <g transform="translate(175,60) rotate(45)">
        <rect x="-14" y="-8" width="28" height="16" rx="4" fill="#E53935" />
        <circle cx="-8" cy="8" r="4" fill="#212121" />
        <circle cx="8" cy="8" r="4" fill="#212121" />
      </g>
    </svg>
  );
}

function ScenarioRain() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#B0BEC5" rx="12" />
      {/* Rain drops */}
      {[30,60,90,130,160,200,240,20,80,150,220,50,120,190,250,40,110,170,230].map((x, i) => (
        <line
          key={i}
          x1={x}
          y1={(i * 17) % 80 + 5}
          x2={x - 4}
          y2={(i * 17) % 80 + 20}
          stroke="#64B5F6"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.8"
        />
      ))}
      {/* Road */}
      <rect x="0" y="110" width="280" height="70" fill="#546E7A" />
      {/* Water splash / aquaplaning */}
      <ellipse cx="140" cy="120" rx="70" ry="12" fill="#90CAF9" opacity="0.6" />
      {/* Car */}
      <g transform="translate(140,88)">
        <rect x="-55" y="12" width="110" height="32" rx="8" fill="#1565C0" />
        <rect x="-40" y="2" width="80" height="22" rx="6" fill="#64B5F6" />
        <rect x="-33" y="4" width="28" height="15" rx="2" fill="#BBDEFB" />
        <rect x="5" y="4" width="28" height="15" rx="2" fill="#BBDEFB" />
        <circle cx="-33" cy="44" r="10" fill="#212121" />
        <circle cx="-33" cy="44" r="6" fill="#616161" />
        <circle cx="33" cy="44" r="10" fill="#212121" />
        <circle cx="33" cy="44" r="6" fill="#616161" />
      </g>
      {/* Aquaplaning label */}
      <rect x="5" y="140" width="100" height="22" rx="6" fill="#E53935" opacity="0.9" />
      <text x="55" y="155" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="bold" fill="white">AQUAPLANING</text>
    </svg>
  );
}

function ScenarioFirstAid() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#FCE4EC" rx="12" />
      {/* Medical cross */}
      <rect x="90" y="40" width="100" height="100" rx="14" fill="#E53935" />
      <rect x="112" y="60" width="56" height="16" rx="4" fill="white" />
      <rect x="112" y="76" width="16" height="28" rx="4" fill="white" />
      <rect x="144" y="76" width="24" height="28" rx="4" fill="white" />
      <rect x="112" y="104" width="56" height="16" rx="4" fill="white" />
      {/* Person silhouette */}
      <circle cx="205" cy="65" r="18" fill="#5D4037" opacity="0.8" />
      <path d="M190,83 Q205,130 220,83" fill="#5D4037" opacity="0.7" />
      {/* Help arrow */}
      <path d="M170,90 L185,90" stroke="#E53935" strokeWidth="4" strokeLinecap="round" />
      <polygon points="183,85 192,90 183,95" fill="#E53935" />
      {/* PAS text */}
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
      {/* License card */}
      <rect x="40" y="35" width="200" height="115" rx="14" fill="#1565C0" />
      <rect x="40" y="35" width="200" height="115" rx="14" fill="none" stroke="#0D47A1" strokeWidth="3" />
      {/* Card header */}
      <rect x="40" y="35" width="200" height="35" rx="14" fill="#0D47A1" />
      <rect x="40" y="56" width="200" height="14" fill="#0D47A1" />
      <text x="140" y="58" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="13" fontWeight="900" fill="white">PERMISO DE CONDUCCIÓN</text>
      {/* Photo placeholder */}
      <rect x="58" y="80" width="50" height="56" rx="6" fill="#1976D2" />
      <circle cx="83" cy="98" r="13" fill="#90CAF9" />
      <ellipse cx="83" cy="120" rx="16" ry="10" fill="#90CAF9" />
      {/* Text lines */}
      <rect x="120" y="82" width="100" height="8" rx="4" fill="white" opacity="0.7" />
      <rect x="120" y="96" width="80" height="8" rx="4" fill="white" opacity="0.7" />
      <rect x="120" y="110" width="90" height="8" rx="4" fill="white" opacity="0.7" />
      <rect x="120" y="124" width="70" height="8" rx="4" fill="white" opacity="0.5" />
      {/* DGT logo area */}
      <circle cx="220" cy="125" r="12" fill="white" opacity="0.3" />
      <text x="220" y="129" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="9" fontWeight="900" fill="white">DGT</text>
    </svg>
  );
}

function ScenarioChildSeat() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#F3E5F5" rx="12" />
      {/* Car seat background */}
      <rect x="70" y="20" width="140" height="145" rx="18" fill="#9E9E9E" />
      <rect x="82" y="65" width="116" height="95" rx="12" fill="#757575" />
      {/* Child seat */}
      <rect x="95" y="45" width="90" height="100" rx="14" fill="#E53935" />
      <rect x="103" y="80" width="74" height="60" rx="10" fill="#C62828" />
      {/* Harness straps */}
      <line x1="140" y1="75" x2="116" y2="130" stroke="#FFC107" strokeWidth="6" strokeLinecap="round" />
      <line x1="140" y1="75" x2="164" y2="130" stroke="#FFC107" strokeWidth="6" strokeLinecap="round" />
      <line x1="116" y1="110" x2="164" y2="110" stroke="#FFC107" strokeWidth="5" strokeLinecap="round" />
      {/* Baby head */}
      <circle cx="140" cy="72" r="20" fill="#FFCCBC" />
      <circle cx="133" cy="68" r="3" fill="#5D4037" />
      <circle cx="147" cy="68" r="3" fill="#5D4037" />
      <path d="M133,78 Q140,84 147,78" fill="none" stroke="#5D4037" strokeWidth="2" />
      {/* Buckle */}
      <rect x="126" y="128" width="28" height="12" rx="5" fill="#FF8F00" stroke="#E65100" strokeWidth="2" />
      {/* Check mark */}
      <circle cx="230" cy="45" r="22" fill="#4CAF50" />
      <polyline points="220,45 227,52 242,37" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  );
}

function ScenarioPoints() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#FFF8E1" rx="12" />
      {/* License card */}
      <rect x="30" y="30" width="220" height="125" rx="14" fill="#1565C0" />
      <text x="140" y="60" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="13" fontWeight="900" fill="white">CARNÉ POR PUNTOS</text>
      {/* Points row */}
      <text x="140" y="90" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="#90CAF9">Puntos disponibles</text>
      {/* Star points */}
      {[55,80,105,130,155,180,205,230].map((x, i) => (
        <text key={i} x={x} y="118" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="20" fill={i < 8 ? "#FFD700" : "#546E7A"}>★</text>
      ))}
      <text x="55" y="140" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="white">1</text>
      <text x="80" y="140" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="white">2</text>
      <text x="105" y="140" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="white">3</text>
      <text x="130" y="140" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="white">4</text>
      <text x="155" y="140" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="white">5</text>
      <text x="180" y="140" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="white">6</text>
      <text x="205" y="140" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="white">7</text>
      <text x="230" y="140" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="11" fill="white">8</text>
    </svg>
  );
}

function ScenarioHighway() {
  return (
    <svg viewBox="0 0 280 180" width="280" height="180" xmlns="http://www.w3.org/2000/svg">
      <rect width="280" height="180" fill="#B0BEC5" rx="12" />
      {/* Sky */}
      <rect x="0" y="0" width="280" height="90" fill="#90CAF9" rx="12" />
      {/* Road perspective */}
      <polygon points="0,180 280,180 220,90 60,90" fill="#546E7A" />
      {/* Lane lines center */}
      <polygon points="130,90 150,90 155,180 125,180" fill="white" opacity="0.5" />
      {/* Lane dashes left */}
      <polygon points="95,90 105,90 90,130 80,130" fill="white" opacity="0.6" />
      <polygon points="78,135 88,135 70,165 60,165" fill="white" opacity="0.6" />
      {/* Lane dashes right */}
      <polygon points="175,90 185,90 190,130 180,130" fill="white" opacity="0.6" />
      <polygon points="192,135 202,135 210,165 200,165" fill="white" opacity="0.6" />
      {/* Highway sign */}
      <rect x="15" y="20" width="85" height="50" rx="6" fill="#1565C0" />
      <text x="57" y="38" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="11" fontWeight="900" fill="white">AUTOPISTA</text>
      <text x="57" y="56" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="18" fontWeight="900" fill="white">120</text>
      <text x="57" y="68" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fill="#90CAF9">km/h máx.</text>
      {/* Car far */}
      <rect x="118" y="100" width="44" height="20" rx="5" fill="#F44336" />
      <rect x="123" y="94" width="34" height="14" rx="3" fill="#EF9A9A" />
    </svg>
  );
}

function QuestionImage({ image }) {
  if (!image) return null;

  const { type, value, icon, scene } = image;

  let svg = null;

  if (type === "speed-sign") {
    svg = <SpeedLimitSign value={value} />;
  } else if (type === "stop-sign") {
    svg = <StopSign />;
  } else if (type === "give-way") {
    svg = <GiveWaySign />;
  } else if (type === "warning") {
    svg = <WarningSign icon={icon} />;
  } else if (type === "obligation") {
    svg = <ObligationSign icon={icon} />;
  } else if (type === "priority-road") {
    svg = <PriorityRoadSign />;
  } else if (type === "prohibition") {
    svg = <ProhibitionSign icon={icon} />;
  } else if (type === "scenario") {
    if (scene === "alcohol") svg = <ScenarioAlcohol />;
    else if (scene === "distance") svg = <ScenarioDistance />;
    else if (scene === "overtaking") svg = <ScenarioOvertaking />;
    else if (scene === "lights") svg = <ScenarioLights />;
    else if (scene === "seatbelt") svg = <ScenarioSeatbelt />;
    else if (scene === "phone") svg = <ScenarioPhone />;
    else if (scene === "roundabout") svg = <ScenarioRoundabout />;
    else if (scene === "rain") svg = <ScenarioRain />;
    else if (scene === "firstaid") svg = <ScenarioFirstAid />;
    else if (scene === "document") svg = <ScenarioDocument />;
    else if (scene === "child-seat") svg = <ScenarioChildSeat />;
    else if (scene === "points") svg = <ScenarioPoints />;
    else if (scene === "highway") svg = <ScenarioHighway />;
  }

  if (!svg) return null;

  return (
    <div className="question-image-container">
      {svg}
    </div>
  );
}

export default QuestionImage;
