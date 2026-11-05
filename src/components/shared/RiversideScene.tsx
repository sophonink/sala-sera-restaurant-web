import { useId } from "react";
import { cn } from "cn";

export default function RiversideScene({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const riverId = `river-${uid}`;
  const mistId = `mist-${uid}`;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden",
        className,
      )}
    >
      <svg
        viewBox="0 0 1440 280"
        preserveAspectRatio="none"
        className="h-[150px] w-full sm:h-[210px] lg:h-[250px]"
      >
        <defs>
          <linearGradient id={riverId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e8c987" stopOpacity="0.14" />
            <stop offset="55%" stopColor="#e8c987" stopOpacity="0.03" />
            <stop offset="100%" stopColor="#e8c987" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={mistId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#04060a" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#04060a" stopOpacity="0.85" />
          </linearGradient>
        </defs>

        <g fill="#05070c" opacity="0.92">
          <rect x="0" y="176" width="1440" height="30" />
          <rect x="24" y="150" width="30" height="26" />
          <rect x="66" y="162" width="52" height="14" />
          <rect x="132" y="140" width="24" height="36" />
          <rect x="160" y="154" width="40" height="22" />
          <rect x="214" y="166" width="70" height="10" />
          <rect x="300" y="148" width="28" height="28" />
          <rect x="334" y="158" width="46" height="18" />
          <rect x="396" y="136" width="22" height="40" />
          <rect x="424" y="150" width="58" height="26" />
          <rect x="498" y="164" width="64" height="12" />
          <rect x="578" y="146" width="26" height="30" />
          <rect x="610" y="156" width="44" height="20" />
          <rect x="674" y="170" width="90" height="6" />
          <rect x="788" y="152" width="30" height="24" />
          <rect x="824" y="162" width="52" height="14" />
          <rect x="892" y="142" width="24" height="34" />
          <rect x="922" y="156" width="38" height="20" />
          <rect x="976" y="168" width="72" height="8" />
          <rect x="1264" y="150" width="28" height="26" />
          <rect x="1298" y="160" width="48" height="16" />
          <rect x="1360" y="142" width="24" height="34" />
          <rect x="1390" y="156" width="50" height="20" />
        </g>

        <g fill="#05070c" opacity="0.95">
          <path d="M1060 176 L1072 138 L1080 138 L1086 108 L1092 138 L1100 138 L1112 176 Z" />
          <path d="M1124 176 L1134 146 L1142 146 L1146 126 L1150 146 L1158 146 L1168 176 Z" />
          <path d="M1036 176 L1044 156 L1052 156 L1056 146 L1060 156 L1068 156 L1076 176 Z" />
          <rect x="1084" y="176" width="58" height="8" />
        </g>

        <g fill="#e8c987" opacity="0.5">
          <rect x="34" y="158" width="4" height="5" />
          <rect x="46" y="158" width="4" height="5" />
          <rect x="138" y="150" width="3" height="4" />
          <rect x="146" y="150" width="3" height="4" />
          <rect x="308" y="156" width="4" height="5" />
          <rect x="318" y="156" width="4" height="5" />
          <rect x="402" y="146" width="3" height="4" />
          <rect x="410" y="146" width="3" height="4" />
          <rect x="432" y="160" width="5" height="4" />
          <rect x="446" y="160" width="5" height="4" />
          <rect x="586" y="154" width="4" height="5" />
          <rect x="596" y="154" width="4" height="5" />
          <rect x="796" y="160" width="4" height="4" />
          <rect x="806" y="160" width="4" height="4" />
          <rect x="898" y="150" width="3" height="4" />
          <rect x="906" y="150" width="3" height="4" />
          <rect x="1272" y="158" width="4" height="4" />
          <rect x="1282" y="158" width="4" height="4" />
          <rect x="1368" y="150" width="3" height="4" />
          <rect x="1376" y="150" width="3" height="4" />
        </g>

        <rect x="0" y="198" width="1440" height="82" fill={`url(#${riverId})`} />
        <path
          d="M0 202 C 240 190 420 210 720 202 C 1020 194 1200 210 1440 200 L1440 214 L0 214 Z"
          fill="#04060a"
          opacity="0.65"
        />
        <path
          d="M676 206 L764 206 L900 280 L540 280 Z"
          fill="#e8c987"
          opacity="0.055"
        />
        <g
          stroke="#e8c987"
          strokeLinecap="round"
          className="animate-shimmer"
          opacity="0.32"
        >
          <line x1="580" y1="218" x2="850" y2="218" strokeWidth="1.2" />
          <line x1="620" y1="230" x2="810" y2="230" strokeWidth="1" />
          <line x1="560" y1="244" x2="880" y2="244" strokeWidth="0.8" />
          <line x1="640" y1="258" x2="790" y2="258" strokeWidth="0.7" />
          <line x1="90" y1="226" x2="330" y2="226" strokeWidth="0.6" />
          <line x1="1080" y1="232" x2="1320" y2="232" strokeWidth="0.6" />
          <line x1="380" y1="250" x2="520" y2="250" strokeWidth="0.5" />
          <line x1="960" y1="256" x2="1120" y2="256" strokeWidth="0.5" />
        </g>
        <rect x="0" y="198" width="1440" height="82" fill={`url(#${mistId})`} opacity="0.5" />
      </svg>
    </div>
  );
}
