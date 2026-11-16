import AgendaWidget from "./agenda/AgendaWidget.jsx";
import LlmAgentHarnessWidget from "./llm-agent-harness/LlmAgentHarnessWidget.jsx";
import AgentMaturityWidget from "./agent-maturity/AgentMaturityWidget.jsx";
import PromptingTechniquesWidget from "./prompting-techniques/PromptingTechniquesWidget.jsx";
import PersonalExercisesWidget from "./personal-exercises/PersonalExercisesWidget.jsx";
import SpecDrivenDevelopmentWidget from "./spec-driven-development/SpecDrivenDevelopmentWidget.jsx";
import GuidedDemoWidget from "./guided-demo/GuidedDemoWidget.jsx";
import AiFoundationsWidget from "./ai-foundations/AiFoundationsWidget.jsx";

const widgets = [
  {
    id: "agenda",
    path: "/agenda",
    title: "Workshop Agenda",
    description:
      "A draft session: a short introduction, prompting, a backlog refinement demo, and a personal exercise of your choice.",
    icon: "🗓️",
    component: AgendaWidget,
  },
  {
    id: "ai-foundations",
    path: "/ai-foundations",
    title: "AI Foundations",
    description:
      "A plain-language glossary of the terms used in the workshop, to skim now and return to later.",
    icon: "📖",
    component: AiFoundationsWidget,
  },
  {
    id: "llm-agent-harness",
    path: "/llm-agent-harness",
    title: "LLM, Agent, and Harness",
    description:
      "A short introduction to the model, the tools around it, and the loop that turns a conversation into action.",
    icon: "🪄",
    component: LlmAgentHarnessWidget,
  },
  {
    id: "agent-maturity",
    path: "/agent-maturity",
    title: "Three Levels of Agentic Coding",
    description:
      "A quick view of the spectrum of agent use. Background knowledge, not a requirement to become a developer.",
    icon: "🪜",
    component: AgentMaturityWidget,
  },
  {
    id: "prompting-techniques",
    path: "/prompting-techniques",
    title: "Prompting Techniques",
    description:
      "Reusable principles for giving clear instructions, useful context, examples, and a well-defined result.",
    icon: "✍️",
    component: PromptingTechniquesWidget,
  },
  {
    id: "spec-driven-development",
    path: "/spec-driven-development",
    title: "Spec-Driven Development",
    description:
      "How clear intent, scenarios, edge cases, and acceptance criteria up front save time later, and how to pilot it on one feature.",
    icon: "🧭",
    component: SpecDrivenDevelopmentWidget,
  },
  {
    id: "guided-demo",
    path: "/guided-demo",
    title: "Guided Demo",
    description:
      "Clone the ISM repository, ideate and interview, check for overlap, draft an epic and features, and create them in Azure DevOps through an agent.",
    icon: "🧪",
    component: GuidedDemoWidget,
  },
  {
    id: "personal-exercises",
    path: "/personal-exercises",
    title: "Choose Your Exercise",
    description:
      "Choose a daily-work use case, open an optional starter prompt, and produce something you can review and improve.",
    icon: "🎯",
    component: PersonalExercisesWidget,
  },
];

export default widgets;
