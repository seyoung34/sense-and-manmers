import { track } from '@vercel/analytics';
import type { Quiz, SituationId } from '../content/types';

type EventProperties = Record<string, string | number | boolean | null>;

// Vercel Analytics 이벤트 이름과 속성을 한 곳에서 관리합니다.
function trackEvent(name: string, properties?: EventProperties) {
  track(name, properties);
}

export function trackStartClick() {
  trackEvent('start_click');
}

export function trackTopicSelect(topicId: SituationId) {
  trackEvent('topic_select', { topicId });
}

export function trackQuizStart(topicId: SituationId, totalQuestions: number) {
  trackEvent('quiz_start', { topicId, totalQuestions });
}

export function trackAnswerDraft(quiz: Quiz, choiceId: string) {
  trackEvent('answer_draft', {
    quizId: quiz.id,
    topicId: quiz.situationId,
    choiceId,
  });
}

export function trackAnswerSubmit(quiz: Quiz, choiceId: string) {
  trackEvent('answer_submit', {
    quizId: quiz.id,
    topicId: quiz.situationId,
    choiceId,
    isCorrect: choiceId === quiz.answerId,
  });
}

export function trackExplanationClick(quiz: Quiz, isCorrect: boolean) {
  trackEvent('explanation_click', {
    quizId: quiz.id,
    topicId: quiz.situationId,
    isCorrect,
  });
}

export function trackQuizComplete(
  topicId: SituationId,
  correctCount: number,
  totalQuestions: number,
) {
  trackEvent('quiz_complete', {
    topicId,
    correctCount,
    totalQuestions,
  });
}

export function trackResultAction(action: 'home' | 'topic') {
  trackEvent('result_action', { action });
}

export function trackQuizExit(topicId: SituationId, answeredCount: number) {
  trackEvent('quiz_exit', { topicId, answeredCount });
}
