// Renders a labeled measurement diagram matching the calculator's field
// shape, so someone unsure what "perimeter" or "depth" means can see it
// instead of just reading a label. Type comes from calc.diagramType.

function AreaDepthDiagram() {
  return (
    <svg viewBox="0 0 400 190" role="img" aria-label="Diagram showing length, width, and depth of a material bed">
      {/* top-down rectangle */}
      <rect x="30" y="30" width="180" height="120" fill="none" stroke="var(--ink)" strokeWidth="2" strokeDasharray="5 4" />
      {/* length arrow (bottom) */}
      <line x1="30" y1="168" x2="210" y2="168" stroke="var(--blue)" strokeWidth="2" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
      <text x="120" y="184" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--ink-muted)">LENGTH</text>
      {/* width arrow (left) */}
      <line x1="12" y1="30" x2="12" y2="150" stroke="var(--blue)" strokeWidth="2" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
      <text x="12" y="20" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--ink-muted)">WIDTH</text>

      {/* side profile showing depth */}
      <line x1="250" y1="150" x2="380" y2="150" stroke="var(--ink)" strokeWidth="2" />
      <rect x="250" y="136" width="130" height="14" fill="var(--blue-tint)" stroke="var(--blue)" strokeWidth="1.5" />
      <line x1="240" y1="136" x2="240" y2="150" stroke="var(--blue)" strokeWidth="2" markerEnd="url(#arrow)" markerStart="url(#arrow)" />
      <text x="315" y="178" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--ink-muted)">DEPTH</text>
      <text x="315" y="40" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--ink-muted)">SIDE VIEW</text>

      <defs>
        <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--blue)" />
        </marker>
      </defs>
    </svg>
  );
}

function AreaOnlyDiagram() {
  return (
    <svg viewBox="0 0 400 190" role="img" aria-label="Diagram showing length and width of an area">
      <rect x="80" y="30" width="240" height="130" fill="none" stroke="var(--ink)" strokeWidth="2" strokeDasharray="5 4" />
      <line x1="80" y1="178" x2="320" y2="178" stroke="var(--blue)" strokeWidth="2" markerEnd="url(#arrow2)" markerStart="url(#arrow2)" />
      <text x="200" y="176" y2="0" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--ink-muted)" dy="18">LENGTH</text>
      <line x1="60" y1="30" x2="60" y2="160" stroke="var(--blue)" strokeWidth="2" markerEnd="url(#arrow2)" markerStart="url(#arrow2)" />
      <text x="30" y="98" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--ink-muted)" transform="rotate(-90 30 98)">WIDTH</text>
      <defs>
        <marker id="arrow2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--blue)" />
        </marker>
      </defs>
    </svg>
  );
}

function WallAreaDiagram() {
  return (
    <svg viewBox="0 0 400 190" role="img" aria-label="Diagram showing wall perimeter and ceiling height, with door and window openings">
      {/* wall face */}
      <rect x="60" y="25" width="260" height="135" fill="none" stroke="var(--ink)" strokeWidth="2" />
      {/* door */}
      <rect x="90" y="95" width="45" height="65" fill="var(--surface-muted)" stroke="var(--ink-muted)" strokeWidth="1.5" />
      {/* window */}
      <rect x="220" y="60" width="60" height="45" fill="var(--blue-tint)" stroke="var(--blue)" strokeWidth="1.5" />
      {/* height arrow */}
      <line x1="42" y1="25" x2="42" y2="160" stroke="var(--blue)" strokeWidth="2" markerEnd="url(#arrow3)" markerStart="url(#arrow3)" />
      <text x="20" y="95" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--ink-muted)" transform="rotate(-90 20 95)">HEIGHT</text>
      {/* perimeter bracket along top */}
      <line x1="60" y1="12" x2="320" y2="12" stroke="var(--blue)" strokeWidth="2" markerEnd="url(#arrow3)" markerStart="url(#arrow3)" />
      <text x="190" y="8" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--ink-muted)">PERIMETER (ALL WALLS)</text>
      <defs>
        <marker id="arrow3" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--blue)" />
        </marker>
      </defs>
    </svg>
  );
}

function FenceDiagram() {
  const postXs = [40, 110, 180, 250, 320, 370];
  return (
    <svg viewBox="0 0 400 150" role="img" aria-label="Diagram showing fence posts, spacing, and a gate opening">
      <line x1="20" y1="120" x2="390" y2="120" stroke="var(--ink)" strokeWidth="2" />
      {postXs.map((x, i) => {
        const isGate = i === 4;
        return (
          <g key={x}>
            <rect x={x - 4} y="70" width="8" height="50" fill={isGate ? "var(--blue-tint)" : "var(--ink)"} stroke={isGate ? "var(--blue)" : "none"} strokeWidth="1.5" />
          </g>
        );
      })}
      {/* spacing arrow between post 1 and 2 */}
      <line x1="40" y1="55" x2="110" y2="55" stroke="var(--blue)" strokeWidth="2" markerEnd="url(#arrow4)" markerStart="url(#arrow4)" />
      <text x="75" y="45" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--ink-muted)">SPACING</text>
      {/* gate label */}
      <text x="345" y="45" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="12" fill="var(--blue-dark)">GATE</text>
      <defs>
        <marker id="arrow4" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill="var(--blue)" />
        </marker>
      </defs>
    </svg>
  );
}

const DIAGRAMS = {
  "area-depth": AreaDepthDiagram,
  "area-only": AreaOnlyDiagram,
  "wall-area": WallAreaDiagram,
  fence: FenceDiagram,
};

export default function MeasureDiagram({ type }) {
  const Diagram = DIAGRAMS[type];
  if (!Diagram) return null;

  return (
    <div className="diagram-wrap">
      <Diagram />
    </div>
  );
}
