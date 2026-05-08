import { Sparkles } from 'lucide-react';
import type { Situation } from '../content/types';

type ResultPageProps = {
  correctCount: number;
  onGoHome: () => void;
  onSelectAnother: () => void;
  resultMessage: string;
  resultTitle: string;
  topic: Situation;
  totalCount: number;
};

// 퀴즈 완료 후 결과와 다음 행동을 보여주는 화면입니다.
export function ResultPage({
  correctCount,
  onGoHome,
  onSelectAnother,
  resultMessage,
  resultTitle,
  topic,
  totalCount,
}: ResultPageProps) {
  return (
    <div className="mx-auto grid w-full max-w-3xl flex-1 content-center py-3 sm:py-4">
      <section className="rounded-[8px] bg-white p-5 shadow-soft ring-1 ring-black/5 sm:p-8">
        <div className="text-center">
          <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-cta sm:mb-5">
            <Sparkles size={26} />
          </div>
          <p className="text-sm font-bold text-muted">{topic.title} 결과</p>
          <h2 className="mt-3 text-3xl font-black leading-tight tracking-normal sm:text-5xl">
            {resultTitle}
          </h2>
          <p className="mt-4 text-5xl font-black text-cta">
            {correctCount}/{totalCount}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {resultMessage}
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={onSelectAnother}
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-cta px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 sm:text-base"
          >
            다른 주제 고르기
          </button>
          <button
            type="button"
            onClick={onGoHome}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-line bg-white px-4 py-3 text-sm font-bold text-ink transition hover:border-ink focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 sm:text-base"
          >
            홈으로
          </button>
        </div>
      </section>
    </div>
  );
}
