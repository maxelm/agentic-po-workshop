# Product Owner Agentic AI Workshop

## Start here

- This is the tailored English workshop site, not the original general workshop.
- Read `README.md` for development and publishing.
- Private planning context: `C:\Users\ELMMAX\Dev\!hq\ai-knowledge-sharing\po-agentic-workshop\AGENTS.md` and `plan.md`.
- Original source: `C:\Users\ELMMAX\Dev\AgenticWorkshopMaterial-repo`.

## Scope and content

- Audience: product owners with mixed AI experience. Keep the main session practical and non-technical.
- All presentation text, exercises, prompts, and planning material for this workshop are in English.
- Preserve the original style and, initially, the exact content of `llm-agent-harness`, `agent-maturity`, `prompting-techniques`, and `spec-driven-development`.
- The three agreed introductions are core. Spec-driven development is optional background; do not expand technical setup into the main agenda.
- `src\widgets\registry.js` controls the dashboard and routes.
- `src\widgets\agenda\agendaData.js` holds the provisional 90-minute running order.
- `src\widgets\personal-exercises` holds the new use-case menu and optional starter prompts.
- Non-coding work is the default. Stakeholder prototyping is an optional experiment, not a confirmed learning goal.

## Boundaries

- Keep attendee details, organizer correspondence, real company examples, and installation documents in private HQ planning, not in site content.
- Do not infer MDS or Lighthouse behavior; examples need approved sources and evidence.
- Exercises default to draft/read-only work. Real Azure DevOps writes require explicit approval and an agreed practice area.
- Prepare integrations beforehand rather than teaching CLI, MCP, skills, or agent configuration in the session.
- Other inherited widgets are retained but not imported by this site's registry.
- No remote is configured initially. Do not push or deploy to the original repository. Review inherited source and Git history before any public sharing.

## Implementation

- Reuse existing React widgets and CSS variables; avoid a redesign.
- Use `npm run lint`, `npm test`, and `npm run build`. The tests use Node's built-in runner and Vite server rendering; no test framework installation is needed.
- Keep hash routes and relative assets compatible with GitHub Pages without server rewrites.
- Do not expose credentials through Vite environment variables; this site needs no secrets.
