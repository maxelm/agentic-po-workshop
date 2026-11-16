export const EXERCISES = [
  {
    id: "understand-functionality",
    title: "Understand Unfamiliar Functionality",
    input: "A system description, a document excerpt, or a codebase you work with.",
    outcome: "A plain-English explanation and a list of questions to verify with an expert.",
    prompt: `Help me understand the functionality described below from a product-owner perspective.
Explain who uses it, what problem it solves, the main flow, and relevant business rules.
Use only the supplied material. Separate documented facts, assumptions, and open questions. Cite the relevant excerpt for each factual claim. If the material is insufficient, say so.
Do not invent undocumented functionality.

Material:
[Paste an excerpt or point to your repository]`,
    stretch: "If approved repository access is available, ask the agent to find supporting evidence and explain it without code-level detail.",
  },
  {
    id: "dependencies",
    title: "Explore System Dependencies",
    input: "A system or feature description, plus any documentation, repository, or work items that describe how it connects to other systems.",
    outcome: "An overview of the systems and integrations around it, separating evidence from open questions.",
    prompt: `Help me understand which other systems this system or feature depends on, and which depend on it.
Create a table with the connected system, direction (incoming, outgoing, or both), what is exchanged, how it is integrated if known, the owning team if known, supporting evidence, and a question to verify.
Separate confirmed integrations from possible ones. Do not guess ownership or connections.
Finish with the three most useful questions to ask the teams involved. Do not change any systems or work items.

System or feature and available context:
[Paste your context or point to your repository]`,
    stretch: "Ask what would be affected if this system were replaced or decommissioned, and which teams would need to be involved. Treat the result as questions to verify, not facts.",
  },
  {
    id: "break-down-epic",
    title: "Break Down an Epic",
    input: "An idea or an epic description from your own work.",
    outcome: "A draft epic and a small set of features, with assumptions and open questions.",
    prompt: `Help me turn this idea into a draft epic and features.
Interview me first, one question at a time, up to 5 questions, to understand the goal, who benefits, and what is out of scope.
Then draft the epic (goal, expected outcome, scope, acceptance criteria) and 2-3 features.
For each feature cover goal, scope, rules, key scenarios, open questions, and impacted systems.
Mark assumptions. Keep this as a draft: do not create or update Azure DevOps items.

Idea:
[Paste your idea]`,
    stretch: "Challenge the breakdown: identify features that are too broad and propose a smaller first feature. Then review the draft, and ask the agent to create the epic and features in Azure DevOps in your practice area, linked as parent and child.",
  },
  {
    id: "acceptance-criteria",
    title: "Improve Acceptance Criteria",
    input: "A draft story and any agreed business rules.",
    outcome: "Testable criteria, ambiguity to resolve, and missing edge cases.",
    prompt: `Review this story and help me draft clear, testable acceptance criteria.
Identify ambiguous terms and missing decisions before drafting.
Use Given/When/Then where it helps, covering the main flow and relevant edge cases.
Separate criteria supported by agreed rules from proposed criteria that need a business decision.
Do not invent policy, thresholds, permissions, or service levels.

Story and agreed rules:
[Paste a story from your own backlog]`,
    stretch: "Ask which criteria would still allow two different interpretations and refine them. Then ask the agent to add the reviewed criteria to the story in Azure DevOps, in your practice area.",
  },
  {
    id: "test-cases",
    title: "Create Acceptance Test Ideas",
    input: "A story with reviewed acceptance criteria.",
    outcome: "A small test matrix linked to criteria, including coverage gaps.",
    prompt: `Based on the story and acceptance criteria below, propose acceptance test cases.
Use a table: criterion, scenario, preconditions, steps, expected result, and unresolved questions.
Cover the main flow, relevant negative cases, and boundaries only where a rule defines them.
Flag missing expected results rather than guessing. Explain what cannot be tested until a decision is made.
Do not write automation code or modify work items.

Story and criteria:
[Paste your reviewed story and criteria]`,
    stretch: "Prioritize the cases by business risk and identify which require another team or test data. Then ask the agent to create the reviewed test cases in Azure DevOps, linked to the story.",
  },
  {
    id: "backlog-review",
    title: "Review a Work Item or Backlog",
    input: "Azure DevOps work item IDs or links for a small set of items, such as a feature and its stories.",
    outcome: "Gaps and refinement questions for the items, backed by what the items actually say.",
    prompt: `Use the Azure CLI (az boards) to read the work items listed below, and review only those.
Summarize the intended outcome of each item, then point out unclear scope, missing or untestable acceptance criteria, and dependencies that are recorded or missing.
Quote the item ID or title as evidence. Treat missing information as unknown, not as proof that something is wrong.
Suggest the five most useful refinement questions.
Do not create, update, delete, or reassign any Azure DevOps items.

Work item IDs or links:
[Paste the IDs or links]`,
    stretch: "Read a small query of items instead of single IDs, or ask the agent to rewrite one unclear item as a suggestion. Keep it read-only until you have reviewed the suggestion.",
  },
  {
    id: "status-update",
    title: "Check Status and Prepare an Update",
    input: "An Azure DevOps epic ID or link, ideally with its features and stories underneath.",
    outcome: "A short, evidence-based status of where the epic stands, ready to share after your review.",
    prompt: `Use the Azure CLI (az boards) to read the epic below and the features and stories linked under it.
Summarize where things stand: what is done, in progress, and not started, and what is blocked or at risk, with item IDs as evidence.
Treat missing or outdated information as unknown, and list what I should confirm with the team before sharing.
Then write a short stakeholder status update in plain language with progress, risks, and next steps.
Do not create, update, delete, or reassign any Azure DevOps items.

Epic ID or link:
[Paste the ID or link]`,
    stretch: "Ask which items have not changed for a while and what you would ask the team about them. Then ask for two versions of the update, one for the team and one for stakeholders.",
  },
  {
    id: "notes-summary",
    title: "Summarize Notes and Follow-ups",
    input: "Meeting notes, a transcript, or a longer document you are allowed to use.",
    outcome: "A short summary, decisions, suggested follow-ups with owners, and what may have been missed.",
    prompt: `Summarize the notes below in a few sentences.
List the decisions made, and the action items with who you would say is responsible, based only on what the notes say. If an owner or deadline is not stated, mark it as unclear.
Point out what seems to be missing: unanswered questions, unclear decisions, and topics that were raised but not followed up.
Do not invent owners, deadlines, or decisions.

Notes:
[Paste your notes or a document]`,
    stretch: "Ask for a short follow-up message to the participants, and for the three questions you should clarify before sending it.",
  },
  {
    id: "stakeholder-prototype",
    title: "Prototype an Idea",
    input: "A simple user need or idea, and fictional data.",
    outcome: "A disposable prototype to discuss a workflow, not production software.",
    prompt: `Help me create a small, disposable prototype for a stakeholder conversation about the need below.
First propose one screen, the main interaction, and the questions the demo should help us answer. Wait for my approval before building.
Use only fictional data and work in a new local demo folder. No production connections, credentials, deployment, or real customer information.
Label it clearly as a prototype. Keep the implementation simple and explain how to preview it locally.
Describe limitations and which business decisions the demo cannot validate.

User need:
[Describe a small workflow from your own work]`,
    stretch: "Change one aspect based on simulated stakeholder feedback, then identify what still needs validation with actual users.",
  },
];
