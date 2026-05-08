export type SituationId = 'funeral' | 'work' | 'dining' | 'drinking';

export type Situation = {
  id: SituationId;
  title: string;
  summary: string;
  sensitivity: 'low' | 'medium' | 'high';
  intent: string;
};

export type Quiz = {
  id: string;
  situationId: SituationId;
  title: string;
  prompt: string;
  layoutType: 'text' | 'seat-map' | 'scenario';
  choices: Array<{ id: string; label: string }>;
  answerId: string;
  explanation: string;
  note?: string;
  sourceNote?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  locale: 'ko';
};

export type QuizResult = {
  id: string;
  minCorrect: number;
  maxCorrect: number;
  title: string;
  message: string;
  tone: 'praise' | 'encourage' | 'guide';
};
