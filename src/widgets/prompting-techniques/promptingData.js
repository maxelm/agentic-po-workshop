// Adapted for product owners from Anthropic's "Prompting best practices" guide,
// "General principles" section, generalized to LLM agents and illustrated with
// everyday product owner work:
// https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices#general-principles

export const PRINCIPLES = [
  {
    id: "clear-direct",
    accent: "#6366f1",
    icon: "🎯",
    title: "Be clear and direct",
    summary:
      "Agents respond well to explicit instructions. Spell out the result you want instead of hoping the agent infers it.",
    points: [
      "Think of an agent as a brilliant new team member who knows nothing about your product, your teams, or your ways of working. Explain precisely what you need.",
      "Name the output you want: a list of user stories, a table of risks, a one-page summary.",
      "State the constraints that matter: audience, length, scope, what is out of scope.",
      "Use numbered steps when order or completeness matters, for example \"first list the assumptions, then the open questions, then the stories\".",
    ],
    goldenRule:
      "Golden rule: hand your prompt to a colleague who has not been in your meetings and ask them to follow it. If they would be confused, the agent will be too.",
    example: {
      label: "Breaking down an epic",
      less: "Write user stories for the new claims notification feature",
      more:
        "Break this epic into 5-8 user stories in the form \"As a <role>, I want <goal> so that <benefit>\". Keep each story small enough for one sprint. List anything you had to assume as a separate section called Open questions.",
    },
  },
  {
    id: "add-context",
    accent: "#0ea5e9",
    icon: "🧩",
    title: "Add context to improve results",
    summary:
      "Explain the \"why\" behind the request. An agent that understands the goal can make sensible choices in situations you did not anticipate.",
    points: [
      "Share the goal, who the users are, and what a good outcome looks like.",
      "Mention the stage and the audience: an early idea for discussion needs different detail than a story ready for refinement.",
      "Include what is already decided, so the agent does not reopen settled questions.",
    ],
    example: {
      label: "Writing acceptance criteria",
      less: "Write acceptance criteria for this story",
      more:
        "Write acceptance criteria for this story. The testers are not familiar with the domain and will turn each criterion directly into a test case, so make every criterion specific and verifiable and avoid words like \"quickly\" or \"user-friendly\".",
    },
  },
  {
    id: "use-examples",
    accent: "#22c55e",
    icon: "📎",
    title: "Use examples effectively",
    summary:
      "A few well-chosen examples are one of the most reliable ways to steer format, tone, and level of detail.",
    points: [
      "Relevant: use a real story, feature, or acceptance criterion from your own backlog that you consider good.",
      "Diverse: show different kinds of cases, such as a happy path, an exception, and a rule-based case, so the agent doesn't copy one pattern.",
      "Clearly marked: say \"Here is an example of the style I want\" so the agent can tell examples from instructions.",
    ],
    tip: "Two or three examples are usually enough. You can also ask the agent to point out what your examples have in common, then use that as your template.",
  },
  {
    id: "separate-parts",
    accent: "#f59e0b",
    icon: "🏷️",
    title: "Separate instructions from material",
    summary:
      "When a prompt mixes your request, background information, and pasted text, clear labels help the agent tell them apart.",
    points: [
      "Use simple headings or labels such as Goal, Context, Source material, and Output format.",
      "Mark pasted content clearly, for example with a heading or tags like <meeting-notes> ... </meeting-notes>.",
      "Reuse the same labels across prompts so you can turn a good prompt into a reusable template.",
    ],
    example: {
      label: "Summarizing refinement notes",
      less: "Here are my notes from the session, what should we do next? [pasted notes]",
      more:
        "Goal: turn these refinement notes into decisions, open questions, and follow-up actions with owners. Context: <what the feature is about>. Source material: <meeting-notes> [pasted notes] </meeting-notes>. Output format: three short lists.",
    },
  },
  {
    id: "give-role",
    accent: "#ec4899",
    icon: "🎭",
    title: "Give the agent a role",
    summary:
      "A role focuses the agent's perspective, tone, and depth. Even a single sentence makes a difference, and you can use different roles to test your work from different sides.",
    points: [
      "Ask the agent to act as an experienced product owner when you want help structuring epics, features, and stories.",
      "Switch roles to challenge your work: a tester finding gaps in acceptance criteria, a developer asking what is unclear, or a skeptical stakeholder asking why this matters.",
      "A role does not replace context. Combine it with your goal and source material.",
    ],
    example: {
      label: "Reviewing a user story",
      less: "Review this user story",
      more:
        "You are an experienced tester reviewing a user story before refinement. Find ambiguous wording, missing edge cases, and acceptance criteria that cannot be verified, and list the questions you would ask the product owner.",
    },
  },
  {
    id: "long-context",
    accent: "#8b5cf6",
    icon: "📚",
    title: "Working with long documents",
    summary:
      "Specifications, policies, and long meeting transcripts are valuable input, but how you present them changes how well the agent uses them.",
    points: [
      "Put the long material first and your question or request last. This can improve results on complex inputs.",
      "Label each document and its source, so the agent can say where information came from.",
      "Ask the agent to quote the relevant passages first and then answer. This keeps the answer tied to the evidence and makes it easy to check.",
    ],
    tip: "When a requirement or dependency comes from a document, always ask for the source so you can verify it before it goes into the backlog.",
  },
  {
    id: "keep-context-small",
    accent: "#f43f5e",
    icon: "🧹",
    title: "Keep your context small",
    summary:
      "Prefer several short, focused conversations over one long one. A smaller context keeps the agent sharper and its answers more reliable.",
    points: [
      "In a long conversation, early instructions and details get crowded out, so answers become less reliable.",
      "A good rule of thumb: use one conversation per task, such as one epic or one refinement session, then start fresh.",
      "When you start fresh, carry over only what matters: the agreed goal, decisions, and the latest version of the result.",
    ],
    tip: "Bonus: a smaller context window also costs fewer credits per prompt.",
  },
];
