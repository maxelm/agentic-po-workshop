---
type: reference
date: 2026-11-13
updated: 2026-11-13
status: active
summary: Local development and publishing guide for the English product owner workshop site.
---

# Agentic AI for Product Owners

An English-language workshop site tailored to product owners, cloned
from `C:\Users\ELMMAX\Dev\AgenticWorkshopMaterial-repo`. It preserves the original
React/Vite dashboard, visual style, and selected teaching widgets.

## Content

- Draft 90-minute agenda.
- LLM, Agent, and Harness; Three Levels of Agentic Coding; Prompting Techniques.
- A new personal exercise menu with optional starter prompts and a fictional practice case.
- Spec-Driven Development as optional reference, not a main-session technical deep dive.

The four reused topic folders are unchanged. Other original widgets remain in
the clone for possible later reuse, but are not registered, routed, or imported
by the workshop dashboard. The old non-coding exercise was only an agenda entry;
the exercise menu here is new.

## Develop

```powershell
npm ci
npm run dev
npm run lint
npm test
npm run build
npm run preview
```

This is a static site with no AI or Azure DevOps connection. Participants use
their separately prepared Copilot tools. No API keys are needed by the site.

## Publish later

No remote is configured and nothing has been uploaded. This clone retains the
original Git history and unselected source material. Review both before sharing
the repository, especially if choosing public visibility. Do not publish internal
planning, participant information, company examples, or sensitive inherited data.
Private planning lives outside this repository in HQ.

Once an appropriate new GitHub repository and visibility have been chosen:

1. Commit the workshop changes locally.
2. Add the **new** repository URL as `origin` and push your branch.
3. In Settings > Pages, select Deploy from a branch, `gh-pages`, root folder.
4. Run `npm run deploy` locally to build and push the site to `gh-pages`.

The existing `gh-pages` deployment approach avoids requiring GitHub Actions.
Relative asset URLs and hash-based routes work on GitHub Pages at a repository
subpath or a domain root, including bookmarked topic links and refreshes.
Check the target host's Pages visibility separately from repository visibility.

## Planning and agent guidance

Read `AGENTS.md` first. The private planning base is:

`C:\Users\ELMMAX\Dev\!hq\ai-knowledge-sharing\po-agentic-workshop\plan.md`

The workshop time, real-system demo case, and participant access are not yet confirmed.
