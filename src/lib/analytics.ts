import ReactGA from 'react-ga4';
import type { Quiz, SituationId } from '../content/types';

type EventProperties = Record<string, string | number | boolean | null>;

const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
let initialized = false;

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

// react-ga4로 GA4를 초기화합니다. 환경 변수가 없으면 로컬 개발처럼 추적 없이 동작합니다.
export function initGa() {
  if (!gaMeasurementId || initialized) {
    return;
  }

  ReactGA.initialize(gaMeasurementId, {
    gtagOptions: {
      send_page_view: true,
      transport_type: 'beacon',
      ...(isGaDebugEnabled() ? { debug_mode: true } : {}),
    },
  });
  initialized = true;
}

// GA4 커스텀 이벤트를 한 곳에서 관리합니다.
function trackEvent(name: string, properties?: EventProperties) {
  if (gaMeasurementId && initialized) {
    ReactGA.event(name, toGaProperties(properties));
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
