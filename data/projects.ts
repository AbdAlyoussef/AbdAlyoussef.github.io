import type { Project } from "./schema";

export const projects: Project[] = [
  {
    title: "RankRefine#",
    description:
      "Post-hoc regression refinement using globally consistent listwise query insertion instead of independent pairwise comparisons. The work combines a base-regressor anchor with ranking evidence and studies robustness under controlled noise, bias, and reference-set conditions.",
    category: "Machine Learning Research",
    tags: ["Listwise ranking", "Regression"],
    visual: "field",
  },
  {
    title: "Narrative Similarity",
    description:
      "An aspect-aware DeBERTa-v3 cross-encoder for pairwise narrative similarity across theme, action, and outcome. The project combines human-labeled and synthetic data and examines the distribution mismatch introduced by synthetic-only training.",
    category: "Representation Learning",
    tags: ["Cross-encoders", "Pairwise ranking"],
    visual: "signal",
  },
  {
    title: "AREA",
    description:
      "A production real-estate platform that converts natural-language intent into structured filters, semantic retrieval, and personalized recommendations. The system combines LLM workflows with multi-source ingestion, normalization, enrichment, deduplication, and scheduled automation.",
    category: "Agentic AI Platform",
    tags: ["Agentic search", "Data pipelines"],
    visual: "graph",
  },
  {
    title: "NeuroScribe",
    description:
      "A lightweight deep-learning framework built from first principles, covering tensors, automatic differentiation, neural modules, optimizers, metrics, data loaders, and training loops. It supports device-aware execution across CPU, CUDA, and MPS.",
    category: "Deep Learning Systems",
    tags: ["Autograd", "CUDA / MPS"],
    visual: "layers",
  },
  {
    title: "SEOScan Agent",
    description:
      "A ReAct-style multi-agent system for automated SEO auditing and competitor analysis. An orchestrator coordinates specialist agents for technical, content, UX, and competitor checks, then assembles structured findings and recommendations.",
    category: "Multi-Agent Systems",
    tags: ["Multi-agent", "Tool use"],
    visual: "graph",
  },
];
