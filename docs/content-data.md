# Content Data Model

Keep content portable between web and Apps in Toss.

## Situation

```ts
type Situation = {
  id: 'work' | 'dining' | 'funeral';
  title: string;
  summary: string;
  primaryMode: 'quiz' | 'guide' | 'checklist';
  sensitivity: 'low' | 'medium' | 'high';
};
```

## Quiz

```ts
type Quiz = {
  id: string;
  situationId: Situation['id'];
  title: string;
  prompt: string;
  layoutType: 'text' | 'seat-map' | 'scenario';
  choices: Array<{ id: string; label: string }>;
  answerId: string;
  explanation: string;
  note?: string;
  points: number;
  locale: 'ko';
};
```

## Quiz Result

```ts
type QuizResult = {
  id: string;
  minScore: number;
  maxScore: number;
  title: string;
  message: string;
  tone: 'praise' | 'encourage' | 'guide';
  recommendedContentIds: string[];
};
```

## MVP Content

Start with 5 quiz questions across:

- dining: 상석 고르기
- work: 메신저 첫 문장 고르기
- funeral: 조문 인사말 고르기
- dining: 수저/식사 시작 상황
- work: 회의나 보고 상황
