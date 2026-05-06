import { BookOpenCheck } from 'lucide-react';

type LandingPageProps = {
  onStart: () => void;
};

// 사용자가 앱에 진입했을 때 가장 먼저 보는 화면입니다. 퀴즈 시작으로 바로 이어지도록 단순하게 둡니다.
export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="grid flex-1 content-center gap-4 py-3 sm:gap-5 lg:grid-cols-[0.78fr_1.22fr] lg:py-6">
      <aside className="max-w-xl lg:self-center">
        <h2 className="text-4xl font-black leading-[1.05] tracking-normal sm:text-6xl lg:text-7xl">
          센스있게, 예의있게
        </h2>
      </aside>

      <section className="rounded-[8px] bg-white p-4 shadow-soft ring-1 ring-black/5 sm:p-5 lg:p-6 lg:self-center">
        <div className="mb-3 sm:mb-4">
          <p className="text-sm font-bold text-cta">퀴즈 시작</p>
          <h3 className="mt-1 text-xl font-black tracking-normal sm:text-3xl">
            상황을 고르고 바로 풀어보세요
          </h3>
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
  );
}
