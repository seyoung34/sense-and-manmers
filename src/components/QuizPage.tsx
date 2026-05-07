import { CheckCircle2, Lightbulb, XCircle } from 'lucide-react';
import type { AnswerMap, RevealedMap } from '../app/flowTypes';
import type { Quiz, Situation } from '../content/types';
import { SeatMap } from './SeatMap';

type QuizPageProps = {
  answers: AnswerMap;
  currentIndex: number;
  draftAnswers: AnswerMap;
  onAnswer: (quiz: Quiz, choiceId: string) => void;
  onNext: () => void;
  onReveal: (quizId: string) => void;
  onSubmitAnswer: (quiz: Quiz) => void;
  quiz: Quiz;
  quizzes: Quiz[];
  revealed: RevealedMap;
  topic: Situation;
};

// 실제 문제 풀이 화면입니다. 판정 전에는 선택지를 바꿀 수 있고, 같은 선택지를 다시 누르면 선택을 취소합니다.
export function QuizPage({
  answers,
  currentIndex,
  draftAnswers,
  onAnswer,
  onNext,
  onReveal,
  onSubmitAnswer,
  quiz,
  quizzes: topicQuizzes,
  revealed,
  topic,
}: QuizPageProps) {
  const draftSelectedId = draftAnswers[quiz.id];
  const submittedId = answers[quiz.id];
  const selectedId = submittedId ?? draftSelectedId;
  const isSubmitted = Boolean(submittedId);
  const hasDraft = Boolean(draftSelectedId);
  const isCorrect = submittedId === quiz.answerId;
  const explanationVisible = Boolean(revealed[quiz.id]);
  const isLastQuestion = currentIndex === topicQuizzes.length - 1;

  return (
    <div className="mx-auto grid w-full max-w-5xl flex-1 content-center py-3 sm:py-4">
      <section className="rounded-[8px] bg-white p-4 shadow-soft ring-1 ring-black/5 sm:p-5 lg:p-6">
        <div className="mb-4 flex items-center justify-between gap-4 sm:mb-5">
          <div>
            <p className="text-sm font-bold text-cta">{topic.title}</p>
            <p className="mt-1 text-sm text-muted">
              {currentIndex + 1} / {topicQuizzes.length}
            </p>
          </div>
          <div className="flex gap-1.5 sm:gap-2" aria-label="퀴즈 진행 상황">
            {topicQuizzes.map((item) => {
              const done = Boolean(answers[item.id]);
              const active = item.id === quiz.id;

              return (
                <span
                  key={item.id}
                  className={[
                    'h-2.5 w-8 rounded-full transition sm:w-12',
                    active ? 'bg-cta' : done ? 'bg-ink' : 'bg-line',
                  ].join(' ')}
                />
              );
            })}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-black leading-tight tracking-normal sm:text-4xl">
              {quiz.title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted sm:mt-4 sm:text-lg sm:leading-8">
              {quiz.prompt}
            </p>

            {quiz.layoutType === 'seat-map' && <SeatMap selectedId={selectedId} />}
          </div>

          <div>
            <div className="grid gap-2">
              {quiz.choices.map((choice) => {
                const selected = selectedId === choice.id;
                const correctChoice = isSubmitted && selected && isCorrect;
                const wrongChoice = isSubmitted && selected && !isCorrect;

                return (
                  <button
                    key={choice.id}
                    type="button"
                    disabled={isSubmitted}
                    onClick={() => onAnswer(quiz, choice.id)}
                    className={[
                      'min-h-14 rounded-[8px] border px-4 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2',
                      correctChoice
                        ? 'border-emerald-500 bg-emerald-50'
                        : wrongChoice
                          ? 'border-rose-400 bg-rose-50'
                          : selected
                            ? 'border-cta bg-blue-50'
                            : isSubmitted
                              ? 'border-line bg-white opacity-60'
                              : 'border-line bg-white hover:border-ink',
                    ].join(' ')}
                  >
                    <span className="flex items-start gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-canvas text-sm font-black">
                        {choice.id}
                      </span>
                      <span className="pt-1 text-sm font-semibold leading-6 sm:text-base">
                        {choice.label}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div className="mt-3 rounded-[8px] border border-line bg-canvas p-3 sm:mt-4 sm:p-4">
              <div className="grid gap-3">
                <StatusMessage
                  hasDraft={hasDraft}
                  isCorrect={isCorrect}
                  isSubmitted={isSubmitted}
                />

                {isSubmitted ? (
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => onReveal(quiz.id)}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-3 py-2 text-sm font-bold text-white transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 focus:ring-offset-canvas"
                    >
                      <Lightbulb size={17} />
                      해설
                    </button>
                    <button
                      type="button"
                      onClick={onNext}
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-cta px-3 py-2 text-sm font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 focus:ring-offset-canvas"
                    >
                      {isLastQuestion ? '결과' : '다음'}
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    disabled={!hasDraft}
                    onClick={() => onSubmitAnswer(quiz)}
                    className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-cta px-3 py-2 text-sm font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-line disabled:text-muted focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 focus:ring-offset-canvas"
                  >
                    답 결정하기
                  </button>
                )}
              </div>

              {explanationVisible && (
                <div className="mt-4 border-t border-line pt-4 text-sm leading-7 text-muted">
                  <p>{quiz.explanation}</p>
                  {quiz.note && <p className="mt-2">참고: {quiz.note}</p>}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatusMessage({
  hasDraft,
  isCorrect,
  isSubmitted,
}: {
  hasDraft: boolean;
  isCorrect: boolean;
  isSubmitted: boolean;
}) {
  if (!hasDraft) {
    return <p className="font-bold">선택지를 고르세요.</p>;
  }

  if (!isSubmitted) {
    return <p className="font-bold text-cta">선택한 답을 결정해 주세요.</p>;
  }

  if (isCorrect) {
    return (
      <p className="inline-flex items-center gap-2 font-bold text-emerald-700">
        <CheckCircle2 size={18} />
        센스있는 선택이에요.
      </p>
    );
  }

  return (
    <p className="inline-flex items-center gap-2 font-bold text-rose-700">
      <XCircle size={18} />
      다른 선택지가 더 자연스러워요.
    </p>
  );
}
