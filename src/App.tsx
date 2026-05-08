import { useMemo, useState } from 'react';
import type { AnswerMap, AppStep, RevealedMap } from './app/flowTypes';
import { AppHeader } from './components/AppHeader';
import { ExitConfirmDialog } from './components/ExitConfirmDialog';
import { LandingPage } from './components/LandingPage';
import { QuizPage } from './components/QuizPage';
import { ResultPage } from './components/ResultPage';
import { TopicPage } from './components/TopicPage';
import { quizzes, situations } from './content/quizData';
import type { Quiz, SituationId } from './content/types';
import {
  trackAnswerDraft,
  trackAnswerSubmit,
  trackExplanationClick,
  trackQuizComplete,
  trackQuizExit,
  trackQuizNext,
  trackQuizStart,
  trackResultAction,
  trackStartClick,
  trackTopicSelect,
} from './lib/analytics';
import {
  getCorrectCount,
  getQuizzesBySituation,
  getResultForCorrectCount,
} from './lib/quiz';

// 앱 전체의 화면 전환과 퀴즈 진행 상태를 조율하는 최상위 컨테이너입니다.
function App() {
  const [step, setStep] = useState<AppStep>('landing');
  const [selectedTopicId, setSelectedTopicId] = useState<SituationId>('funeral');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [draftAnswers, setDraftAnswers] = useState<AnswerMap>({});
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [revealed, setRevealed] = useState<RevealedMap>({});
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const selectedTopic = situations.find(
    (situation) => situation.id === selectedTopicId,
  );
  const activeQuizzes = useMemo(
    () => getQuizzesBySituation(quizzes, selectedTopicId),
    [selectedTopicId],
  );
  const quizCountsByTopic = useMemo(() => {
    return situations.reduce<Record<SituationId, number>>((counts, situation) => {
      counts[situation.id] = getQuizzesBySituation(quizzes, situation.id).length;
      return counts;
    }, {} as Record<SituationId, number>);
  }, []);
  const activeQuiz = activeQuizzes[currentIndex];
  const correctCount = getCorrectCount(activeQuizzes, answers);
  const result = getResultForCorrectCount(correctCount);

  const resetQuizState = () => {
    setCurrentIndex(0);
    setDraftAnswers({});
    setAnswers({});
    setRevealed({});
    setShowExitConfirm(false);
  };

  const startQuiz = () => {
    resetQuizState();
    trackQuizStart(selectedTopicId, activeQuizzes.length);
    setStep('quiz');
  };

  const goHome = () => {
    trackResultAction('home');
    resetQuizState();
    setSelectedTopicId('funeral');
    setStep('landing');
  };

  const goTopic = () => {
    resetQuizState();
    setStep('topic');
  };

  const handleBack = () => {
    if (step === 'quiz') {
      setShowExitConfirm(true);
      return;
    }

    if (step === 'topic') {
      setStep('landing');
      return;
    }

    if (step === 'result') {
      goTopic();
    }
  };

  const selectAnswer = (quiz: Quiz, choiceId: string) => {
    if (answers[quiz.id]) {
      return;
    }

    const currentDraft = draftAnswers[quiz.id];

    if (currentDraft !== choiceId) {
      trackAnswerDraft(quiz, choiceId);
    }

    setDraftAnswers((current) => {
      if (current[quiz.id] === choiceId) {
        const next = { ...current };
        delete next[quiz.id];
        return next;
      }

      return { ...current, [quiz.id]: choiceId };
    });
  };

  const submitAnswer = (quiz: Quiz) => {
    const draftAnswer = draftAnswers[quiz.id];

    if (!draftAnswer || answers[quiz.id]) {
      return;
    }

    trackAnswerSubmit(quiz, draftAnswer);
    setAnswers((current) => ({ ...current, [quiz.id]: draftAnswer }));
    setRevealed((current) => ({ ...current, [quiz.id]: false }));
  };

  const goNext = () => {
    if (currentIndex >= activeQuizzes.length - 1) {
      trackQuizComplete(selectedTopicId, correctCount, activeQuizzes.length);
      setStep('result');
      return;
    }

    trackQuizNext(selectedTopicId, currentIndex + 1);
    setCurrentIndex((index) => index + 1);
  };

  return (
    <main className="min-h-dvh bg-[radial-gradient(circle_at_20%_10%,#dff3ff_0,transparent_32%),linear-gradient(135deg,#f7f7f2_0%,#f5f5f7_48%,#eef7f1_100%)] text-ink">
      <section className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        {step !== 'landing' && (
          <AppHeader onBack={handleBack} />
        )}

        {step === 'landing' && (
          <LandingPage
            onStart={() => {
              trackStartClick();
              setStep('topic');
            }}
          />
        )}

        {step === 'topic' && (
          <TopicPage
            onSelectTopic={(topicId) => {
              trackTopicSelect(topicId);
              setSelectedTopicId(topicId);
            }}
            onStartQuiz={startQuiz}
            quizCounts={quizCountsByTopic}
            selectedTopicId={selectedTopicId}
            topics={situations}
          />
        )}

        {step === 'quiz' && activeQuiz && selectedTopic && (
          <QuizPage
            answers={answers}
            currentIndex={currentIndex}
            draftAnswers={draftAnswers}
            onAnswer={selectAnswer}
            onNext={goNext}
            onReveal={(quizId) =>
              {
                const quizToReveal = activeQuizzes.find(
                  (item) => item.id === quizId,
                );
                const submittedAnswer = quizToReveal
                  ? answers[quizToReveal.id]
                  : undefined;

                if (quizToReveal && !revealed[quizId]) {
                  trackExplanationClick(
                    quizToReveal,
                    submittedAnswer === quizToReveal.answerId,
                  );
                }

                setRevealed((current) => ({ ...current, [quizId]: true }));
              }
            }
            onSubmitAnswer={submitAnswer}
            quiz={activeQuiz}
            quizzes={activeQuizzes}
            revealed={revealed}
            topic={selectedTopic}
          />
        )}

        {step === 'result' && selectedTopic && (
          <ResultPage
            correctCount={correctCount}
            onGoHome={goHome}
            onSelectAnother={() => {
              trackResultAction('topic');
              goTopic();
            }}
            resultMessage={result.message}
            resultTitle={result.title}
            topic={selectedTopic}
            totalCount={activeQuizzes.length}
          />
        )}
      </section>

      {showExitConfirm && (
        <ExitConfirmDialog
          onCancel={() => setShowExitConfirm(false)}
          onConfirm={() => {
            trackQuizExit(selectedTopicId, Object.keys(answers).length);
            goTopic();
          }}
        />
      )}
    </main>
  );
}

export default App;
