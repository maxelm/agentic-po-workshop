export const HERO_POINTS = [
  {
    label: "Core shift",
    value: "Specs become the durable source of truth, not disposable scaffolding.",
  },
  {
    label: "What AI gets",
    value: "Requirements, constraints, edge cases, and acceptance criteria in one shared artifact.",
  },
  {
    label: "Why it helps",
    value: "Less translation loss, less rework, and more predictable delivery as complexity grows.",
  },
];

export const PRINCIPLES = [
  {
    title: "Align first, prompt second",
    body: "Instead of relying on scattered prompts, the team agrees on intent before implementation starts.",
  },
  {
    title: "Keep intent durable",
    body: "The spec links business goals, architecture, implementation, tests, and validation across the lifecycle.",
  },
  {
    title: "Make ambiguity explicit",
    body: "Unknowns, constraints, dependencies, and edge cases are clarified up front instead of surfacing as churn later.",
  },
  {
    title: "Validate against the spec",
    body: "The final question is not just 'does it run?' but 'does it satisfy the agreed intent?'",
  },
];

export const LIFECYCLE_STEPS = [
  {
    step: "1",
    title: "Constitution",
    body: "Define principles, standards, and guardrails for how the project should be built.",
    accent: "#2563eb",
  },
  {
    step: "2",
    title: "Specify",
    body: "Capture scenarios, requirements, and acceptance criteria in language the team can review together.",
    accent: "#7c3aed",
  },
  {
    step: "3",
    title: "Clarify",
    body: "Resolve ambiguity, hidden assumptions, dependencies, and edge cases before code generation runs ahead.",
    accent: "#0f766e",
  },
  {
    step: "4",
    title: "Plan",
    body: "Translate intent into architecture, constraints, flows, and implementation boundaries.",
    accent: "#ea580c",
  },
  {
    step: "5",
    title: "Tasks",
    body: "Break the plan into implementation-ready units so humans and agents can execute against the same map.",
    accent: "#db2777",
  },
  {
    step: "6",
    title: "Implement",
    body: "Use AI to generate and refine code, tests, and support artifacts while staying grounded in the spec.",
    accent: "#0891b2",
  },
  {
    step: "7",
    title: "Validate",
    body: "Check whether the output converges with the spec instead of treating compilation success as the finish line.",
    accent: "#16a34a",
  },
];

export const BENEFITS = [
  "Less ambiguity and rework because requirements are clarified earlier.",
  "Better alignment across product, engineering, and test through one shared source of truth.",
  "Faster implementation because AI can generate from structured context instead of fragmented prompts.",
  "More predictable delivery because acceptance criteria stay attached to the original intent.",
];

export const GETTING_STARTED = [
  {
    title: "Pick a feature with visible alignment risk",
    body: "Start where requirements tend to drift, not with the smallest toy problem.",
  },
  {
    title: "Write a lightweight but explicit spec",
    body: "Capture scenarios, constraints, and acceptance criteria without over-specifying every implementation detail.",
  },
  {
    title: "Generate from the spec, not from memory",
    body: "Use the spec as the shared context for code, tests, and review conversations.",
  },
  {
    title: "Treat the spec as a living artifact",
    body: "Refine the process where it reduces churn and keep it right-sized for the change at hand.",
  },
];

export const RESOURCE_LINKS = [
  {
    title: "Microsoft overview: Spec-Driven Development",
    url: "https://developer.microsoft.com/blog/spec-driven-development-ai-native-engineering/",
    description:
      "The post that frames SDD as a spec-first workflow for reducing translation loss across requirements, design, implementation, and validation.",
  },

];
