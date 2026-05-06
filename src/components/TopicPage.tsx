import type { Situation, SituationId } from '../content/types';

type TopicPageProps = {
  onSelectTopic: (topicId: SituationId) => void;
  onStartQuiz: () => void;
  selectedTopicId: SituationId;
  topics: Situation[];
};

// 퀴즈를 풀 주제를 선택하는 화면입니다. 선택 상태는 카드 색상만으로 전달합니다.
export function TopicPage({
  onSelectTopic,
  onStartQuiz,
  selectedTopicId,
  topics,
}: TopicPageProps) {
  return (
    <div className="mx-auto grid w-full max-w-5xl flex-1 content-center py-3 sm:py-4">
      <section className="rounded-[8px] bg-white p-4 shadow-soft ring-1 ring-black/5 sm:p-5 lg:p-6">
        <div className="mb-3 sm:mb-4">
          <p className="text-sm font-bold text-cta">주제 선택</p>
          <h2 className="mt-1 text-xl font-black tracking-normal sm:text-3xl">
            알고 싶은 상황을 고르세요
          </h2>
        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => {
            const active = selectedTopicId === topic.id;

            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => onSelectTopic(topic.id)}
                className={[
                  'min-h-24 rounded-[8px] border px-4 py-3 text-left transition focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 sm:min-h-32',
                  active ? 'border-cta bg-blue-50' : 'border-line bg-white',
                  'hover:border-ink',
                ].join(' ')}
              >
                <span className="flex h-full flex-col justify-between gap-3">
                  <span>
                    <span className="text-lg font-black">{topic.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-muted">
                      {topic.summary}
                    </span>
                  </span>
                  <span className="w-fit rounded-full bg-canvas px-3 py-1 text-xs font-bold text-muted">
                    3문제
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={onStartQuiz}
          className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-cta px-6 py-3 font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 sm:mx-auto sm:max-w-sm"
        >
          문제 풀기
        </button>
      </section>
    </div>
  );
}
