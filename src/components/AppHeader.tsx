import { ArrowLeft } from 'lucide-react';

type AppHeaderProps = {
  onBack: () => void;
};

// 첫 화면 이후에만 노출되는 간단한 상단 영역입니다.
export function AppHeader({ onBack }: AppHeaderProps) {
  return (
    <header className="flex min-h-11 shrink-0 items-center gap-3 py-2 sm:min-h-12">
      <button
        type="button"
        onClick={onBack}
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-ink focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 focus:ring-offset-canvas sm:h-10 sm:w-10"
        aria-label="이전 화면으로 돌아가기"
        title="이전"
      >
        <ArrowLeft size={18} />
      </button>
      <h1 className="text-base font-black tracking-normal sm:text-xl">
        퀴즈
      </h1>
    </header>
  );
}
