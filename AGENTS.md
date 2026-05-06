# AGENTS.md

## Project

This is the implementation workspace for `센스있게, 예의있게` / `Sense & Manners`.

The product is a Korean social etiquette quiz and guide service. First web MVP comes before Apps in Toss. Apps in Toss later uses the same content dataset.

## Implementation Priorities

1. Build the web MVP first.
2. Keep content data portable so the same dataset can be reused in Apps in Toss.
3. Make the first screen quiz-centered.
4. Do not expose numeric scores directly. Calculate score internally and show a result title plus friendly feedback.
5. Start with 5 quiz questions.
6. When a user chooses a wrong answer, enable a lightbulb explanation button. The explanation appears only after the user presses it.
7. Treat the lightbulb explanation pattern as a future monetization surface, but do not add ads in the MVP.

## Tech Stack

- Vite
- React
- TypeScript
- Tailwind CSS

Use Vite as the first implementation shell because the MVP is a client-side quiz experience and should later be easy to run inside Apps in Toss WebView.

Keep content, scoring, and result logic framework-independent enough that they can later move to Next.js if SEO-heavy content pages become important.

## Product Decisions

- Korean name: `센스있게, 예의있게`
- English name: `Sense & Manners`
- Apps in Toss appName: `sense-and-manners`
- Hook phrase: `나는 예의 있는 사람일까?`
- First categories: `회사 생활`, `식사 예절`, `장례식장`
- First demo: 식사 자리 상석 퀴즈
- Tone: friendly senior, not judgmental

## Design Direction

Web uses the Apple-style reference from the vault:

- Bright canvas: `#f5f5f7`
- White surfaces: `#ffffff`
- Ink text: `#1d1d1f`
- Blue CTA used sparingly: `#0071e3`
- Large question-led typography
- No heavy shadows
- Quiz experience is the first-screen focus

Apps in Toss later should follow TDS/App Builder instead of this web visual style.

## Content Rules

- Use Korean by default.
- Avoid saying one behavior is absolutely correct in every context.
- Prefer wording like `보통은`, `이렇게 하면 자연스러워요`, `상황에 따라 달라질 수 있어요`.
- Avoid shaming users for wrong answers.
- Sensitive situations such as funerals need conservative wording.

## File Boundaries

- Keep implementation files in this folder.
- Keep planning changes in the Obsidian project folder when they affect product direction.
- Do not copy large vault folders into this project.
- If product decisions change, update both local docs and the vault project log when appropriate.
