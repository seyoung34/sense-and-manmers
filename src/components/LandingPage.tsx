import { ArrowRight, BookOpenCheck, Sparkles } from 'lucide-react';

type LandingPageProps = {
  onStart: () => void;
};

const appName = Array.from('센스있게, 매너있게');

// 사용자가 앱에 진입했을 때 가장 먼저 보는 화면입니다. 앱 이름을 상단 중앙에 두고 퀴즈 진입을 강조합니다.
export function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center gap-7 py-4 sm:gap-8 sm:py-6">
      <header className="text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-xs font-black text-muted shadow-soft">
          <Sparkles size={15} />
          상황별 매너 퀴즈
        </p>
        <h1
          className="text-balance text-4xl font-black leading-tight tracking-normal text-ink sm:text-6xl lg:text-7xl"
          aria-label="센스있게, 매너있게"
        >
          {appName.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              className={letter === ' ' ? 'inline-block w-3' : 'title-bounce inline-block'}
              style={{ animationDelay: `${index * 0.07}s` }}
              aria-hidden="true"
            >
              {letter}
            </span>
          ))}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
          장례식장, 회사, 식사 자리, 술자리에서 어떤 선택이 가장 자연스러운지
          짧은 문제로 확인해요.
        </p>
      </header>

      <section className="mx-auto w-full max-w-xl">
        <div className="rounded-[8px] bg-white p-5 shadow-soft ring-1 ring-black/5 sm:p-6">
          <div className="flex h-full flex-col justify-center gap-6">
            <div className="text-center">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-cta">
                <BookOpenCheck size={18} />
              </div>
              <h2 className="text-2xl font-black leading-tight tracking-normal sm:text-3xl">
                먼저 궁금한 상황을 고르고 바로 풀어보세요
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted sm:text-base sm:leading-7">
                정답을 외우는 앱이 아니라, 애매한 상황에서 가장 무난한 판단 기준을
                익히는 퀴즈 앱입니다.
              </p>
            </div>

            <button
              type="button"
              onClick={onStart}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-cta px-6 py-3 font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2"
            >
              시작하기
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}
