export const FLOW = [
  { label: "You", note: "Goal and context" },
  { label: "Prompt", note: "Your instruction" },
  { label: "Model", note: "Predicts a response" },
  { label: "Tools", note: "Read files, search, update systems" },
  { label: "Result", note: "A draft to check, not a final answer" },
  { label: "Your review", note: "You decide" },
];

export const GROUPS = [
  {
    id: "model",
    accent: "#2563eb",
    title: "The model",
    intro: "What is underneath the chat window.",
    terms: [
      {
        term: "LLM (large language model)",
        meaning:
          "A model trained on large amounts of text that predicts a likely response to what you write. It is very good with language, but it does not look facts up on its own.",
        inWork: "Drafting a user story from a rough idea.",
      },
      {
        term: "Prompt",
        meaning:
          "What you ask the model: your instruction plus any context and material you include.",
        inWork: "\"Break this epic into five stories and list your assumptions.\"",
      },
      {
        term: "Token",
        meaning:
          "A small piece of text, roughly a short word or part of a word. Models read and write tokens, and limits and costs are counted in tokens.",
        inWork: "A long specification uses many tokens before you even ask a question.",
      },
      {
        term: "Context window",
        meaning:
          "How much the model can keep in mind at once: your instructions, the conversation so far, and any documents. When it fills up, older details get less attention.",
        inWork: "Why a long conversation drifts, and why a fresh session helps.",
      },
      {
        term: "Hallucination",
        meaning:
          "A confident answer that is wrong or invented. It usually sounds plausible, which is why it needs checking.",
        inWork: "A dependency or requirement that no document actually mentions.",
      },
    ],
  },
  {
    id: "agents",
    accent: "#7c3aed",
    title: "Agents and their surroundings",
    intro: "What turns a chat into something that can do work.",
    terms: [
      {
        term: "Agent",
        meaning:
          "An AI that can plan steps and use tools to get something done, instead of only answering a question.",
        inWork: "Searching the backlog, reading the code, then drafting an epic.",
      },
      {
        term: "Harness",
        meaning:
          "Everything around the model that lets it act: the tools it can use, the rules it follows, and the loop that keeps it working until the task is done. Copilot is a harness.",
        inWork: "The same model behaves differently in different tools.",
      },
      {
        term: "Tool / integration",
        meaning:
          "A connection that lets the agent reach something outside the chat, such as files, a repository, or Azure DevOps.",
        inWork: "Reading existing epics from Azure DevOps.",
      },
      {
        term: "Session",
        meaning:
          "One working conversation with an agent, with its own memory of what has been said and done.",
        inWork: "One session per epic keeps the context clean.",
      },
      {
        term: "Codebase as context",
        meaning:
          "Letting the agent read a project's files so its answers are grounded in what actually exists.",
        inWork: "Asking which systems a feature would touch.",
      },
    ],
  },
  {
    id: "trust",
    accent: "#16a34a",
    title: "Trusting the result",
    intro: "How to stay in control of what comes out.",
    terms: [
      {
        term: "Grounding / evidence",
        meaning:
          "Tying an answer to a source, such as a file, a document, or a backlog item, so it can be checked.",
        inWork: "\"Show me where in the documentation you found this.\"",
      },
      {
        term: "Spec",
        meaning:
          "A short, shared description of intent: goal, scenarios, edge cases, and acceptance criteria, written before the work starts.",
        inWork: "The epic you agree on before stories are written.",
      },
      {
        term: "Human review",
        meaning:
          "You read, correct, and approve before anything is shared or published. The agent drafts; you are accountable.",
        inWork: "Checking titles, links, and criteria before they reach the backlog.",
      },
    ],
  },
];
