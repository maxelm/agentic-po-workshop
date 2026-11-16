export const INTRO =
  "We will follow one idea, a renewal calendar in Industrial Sales Management (ISM) that shows policies about to expire, from a cloned repository to epic and features in Azure DevOps. The prompts are starting points: adjust them as you go.";

export const NEEDS = [
  "Git and the Azure CLI (az), signed in to Azure DevOps",
  "The GitHub Copilot desktop app installed and signed in",
];

export const PHASES = [
  {
    id: "scene",
    title: "Set the scene",
    steps: [
      {
        id: "clone",
        step: "1",
        accent: "#2563eb",
        title: "Clone the repository and add it to the Copilot app",
        say: "The agent is only as good as what it can see. If we give it the code, it can answer from the real system instead of from guesses.",
        commands: ["git clone <ISM-repository-url>"],
        commandNote: "Then add the cloned folder as a project in the GitHub Copilot app and start a new session in it.",
        prompt: `Explain this codebase to a product owner in plain language.
What does it do for users, what are the main parts, and which other systems does it talk to?
Point to the files or folders where you found each answer. Do not change anything.`,
        point: "Does the explanation match what you know about ISM? Anything wrong or surprising is a good reminder to ask for evidence.",
      },
    ],
  },
  {
    id: "idea",
    title: "Find the idea",
    steps: [
      {
        id: "ideate",
        step: "2",
        accent: "#7c3aed",
        title: "Ideate with the agent",
        say: "Not sure what to work on? Let the agent suggest options based on the code, then pick one.",
        prompt: `Suggest 5 ideas for improving renewal management in ISM, based on what you see in the code.
For each idea, give one sentence on who benefits and what problem it solves.
Keep them at product level, not technical.`,
        point: "Pick one together. For this walkthrough: a calendar of upcoming policy expirations.",
      },
      {
        id: "interview",
        step: "3",
        accent: "#db2777",
        title: "Let the agent interview you",
        say: "Instead of writing a long prompt, answer a few good questions. Say \"I don't know yet\" at least once.",
        prompt: `I want to add a renewal calendar to ISM that shows upcoming policy expirations.
Act as an experienced product owner and interview me before writing anything.
Ask one question at a time, up to 5, about the goal, who uses it, and what is out of scope.
Use the codebase to skip questions it already answers, and tell me when you did.
When we are done, summarize it as a short brief with a list of open questions.`,
        point: "Good questions bring assumptions to the surface. Your \"I don't know yet\" should end up in the open questions.",
      },
    ],
  },
  {
    id: "draft",
    title: "Check and draft",
    steps: [
      {
        id: "overlap",
        step: "4",
        accent: "#0f766e",
        title: "Check for overlap in Azure DevOps and the code",
        say: "Before writing anything new, see what already exists. This step only reads.",
        prompt: `Use the Azure CLI (az boards) to search project <project> for epics, features and stories related to this brief.
Also look in the codebase for functionality that already covers part of it.
List item ID, title and state, and why each could overlap or depend on this work.
Read only. Do not create or change anything.`,
        point: "Open one or two of the results to confirm they are real. The agent works against the actual backlog, so verify before you rely on it.",
      },
      {
        id: "epic",
        step: "5",
        accent: "#ea580c",
        title: "Draft the epic and features, and talk about slicing",
        say: "First, what makes a good epic: a clear goal, scope and out of scope, and acceptance criteria. This is the spec that comes before any stories.",
        prompt: `Using the brief, the codebase and the backlog search, draft an epic and 2-3 features.
For the epic, cover the goal, expected outcome, scope, out of scope, and acceptance criteria.
For each feature, cover the goal, scope, rules, key scenarios, open questions, and impacted systems.
Mark assumptions and say where each dependency comes from: the code, the backlog, or an assumption.`,
        followUp: `How would you slice these features so each slice delivers something a user can notice? Which feature could go first, and why?`,
        point: "Check dependencies and out of scope first. Then use the slicing question to show how the agent can help split the work.",
      },
    ],
  },
  {
    id: "publish",
    title: "Publish",
    steps: [
      {
        id: "create",
        step: "6",
        accent: "#16a34a",
        title: "Review, then create in Azure DevOps",
        say: "Read the draft and fix something before anything is created. The agent drafts, you decide.",
        prompt: `Create the epic and the features in project <project>, area <area>, as I reviewed them.
Link the features to the epic as children and set the state to New.
First show me exactly what you will create and wait for my confirmation.`,
        point: "The agent asks before it writes. Afterwards open Azure DevOps and check titles, links and descriptions. You stay responsible for what is published.",
      },
    ],
  },
];
