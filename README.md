# Sense & Manners

Web MVP for `센스있게, 예의있게`.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS

## Analytics

GA4 이벤트 수집은 `VITE_GA_MEASUREMENT_ID` 환경 변수가 있을 때만 활성화됩니다.

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Vercel 배포에서는 Project Settings > Environment Variables에 같은 값을 등록합니다.

This codebase should stay separate from the Obsidian Vault. The vault keeps planning, product notes, and decisions. This folder keeps implementation files.

## Source of truth

Primary planning docs live in:

- `C:\Users\jupi4\Documents\Obsidian Vault\projects\sense-checklist-miniapp\README.md`
- `C:\Users\jupi4\Documents\Obsidian Vault\projects\sense-checklist-miniapp\design.md`
- `C:\Users\jupi4\Documents\Obsidian Vault\projects\sense-checklist-miniapp\content-data.md`
- `C:\Users\jupi4\Documents\Obsidian Vault\projects\sense-checklist-miniapp\sample-contents.md`

Local reference copies are in `docs/` for fast Codex context.
