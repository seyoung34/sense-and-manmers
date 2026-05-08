import type { Quiz, SituationId } from '../content/types';

type EventProperties = Record<string, string | number | boolean | null>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (
      command: 'js' | 'config' | 'event',
      targetId: string | Date,
      config?: EventProperties,
    ) => void;
  }
}

const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

function toGaProperties(properties?: EventProperties) {
  const normalized = properties
    ? Object.fromEntries(
        Object.entries(properties).map(([key, value]) => [
          key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`),
          value,
        ]),
      )
    : {};

  return isGaDebugEnabled()
    ? { ...normalized, debug_mode: true }
    : normalized;
}

function isGaDebugEnabled() {
  return new URLSearchParams(window.location.search).get('ga_debug') === '1';
}

// 앱 시작 시 GA4 웹 태그를 동적으로 붙입니다. 환경 변수가 없으면 로컬 개발처럼 추적 없이 동작합니다.
export function initGa() {
  if (!gaMeasurementId || window.gtag) {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.gtag = function gtag(...args) {
    window.dataLayer?.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('config', gaMeasurementId, {
    send_page_view: true,
    ...(isGaDebugEnabled() ? { debug_mode: true } : {}),
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`;
  document.head.appendChild(script);
}

// GA4 커스텀 이벤트를 한 곳에서 관리합니다.
function trackEvent(name: string, properties?: EventProperties) {
  if (gaMeasurementId && window.gtag) {
    window.gtag('event', name, toGaProperties(properties));
  }
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
  trackEvent('answer_select', {
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

export function trackQuizNext(topicId: SituationId, nextIndex: number) {
  trackEvent('quiz_next', { topicId, nextIndex });
}

export function trackResultAction(action: 'home' | 'topic') {
  trackEvent('result_action', { action });
}

export function trackQuizExit(topicId: SituationId, answeredCount: number) {
  trackEvent('quiz_exit', { topicId, answeredCount });
}
