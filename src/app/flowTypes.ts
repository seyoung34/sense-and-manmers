// 앱의 주요 화면 흐름을 한 곳에서 관리해 화면 전환을 추적하기 쉽게 둡니다.
export type AppStep = 'landing' | 'topic' | 'quiz' | 'result';

export type AnswerMap = Record<string, string>;

export type RevealedMap = Record<string, boolean>;
