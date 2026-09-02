import type { Project } from "@/data/schema";

export function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  if (kind === "signal") {
    return (
      <div className="project-visual signal-visual" aria-hidden="true">
        <span className="signal-axis" />
        <span className="signal-ring signal-ring-one" />
        <span className="signal-ring signal-ring-two" />
        <span className="signal-core">01</span>
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} className={`signal-ray signal-ray-${index + 1}`} />
        ))}
      </div>
    );
  }

  if (kind === "field") {
    return (
      <div className="project-visual field-visual" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, index) => (
          <span key={index} style={{ inset: `${14 + index * 7}%` }} />
        ))}
        <i />
      </div>
    );
  }

  if (kind === "layers") {
    return (
      <div className="project-visual layers-visual" aria-hidden="true">
        {Array.from({ length: 4 }).map((_, index) => (
          <span key={index} style={{ transform: `translate(${index * 16}px, ${index * -13}px)` }} />
        ))}
        <i>DATA / MODEL / SYSTEM</i>
      </div>
    );
  }

  return (
    <div className="project-visual graph-visual" aria-hidden="true">
      <span className="graph-line line-one" />
      <span className="graph-line line-two" />
      <span className="graph-line line-three" />
      <i className="graph-node node-one" />
      <i className="graph-node node-two" />
      <i className="graph-node node-three" />
      <i className="graph-node node-four" />
    </div>
  );
}
