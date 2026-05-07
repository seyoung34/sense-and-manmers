import { BookOpenCheck } from 'lucide-react';

type LandingPageProps = {
  onStart: () => void;
};

// 사용자가 앱에 진입했을 때 가장 먼저 보는 화면입니다. 앱 이름을 상단 중앙에 두고 퀴즈 진입을 강조합니다.
export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="flex flex-1 flex-col py-5 sm:py-6">
      <header className="text-center">
        <h1 className="text-4xl font-black leading-tight tracking-normal sm:text-6xl lg:text-7xl">
          센스있게, 매너있게
        </h1>
      </header>

      <div className="grid flex-1 content-center">
        <section className="mx-auto w-full max-w-xl rounded-[8px] bg-white p-4 shadow-soft ring-1 ring-black/5 sm:p-6">
          <div className="mb-4">
            <p className="text-sm font-bold text-cta">퀴즈 시작</p>
            <h2 className="mt-1 text-xl font-black tracking-normal sm:text-3xl">
              상황을 고르고 바로 풀어보세요
            </h2>
          </div>

          <div className="rounded-[8px] border border-cta bg-blue-50 p-4 ring-2 ring-cta/20">
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink">
              <BookOpenCheck size={18} />
            </div>
            <p className="font-black">상황별 퀴즈</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              장례식장, 회사 생활, 식사 예절, 술자리 예절을 짧게 풀어요.
            </p>
          </div>

          <button
            type="button"
            onClick={onStart}
            className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-cta px-6 py-3 font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2"
          >
            시작하기
          </button>
        </section>
      </div>
    </div>
  );
}
