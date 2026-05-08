import {
  BriefcaseBusiness,
  Flower2,
  Utensils,
  Wine,
  type LucideIcon,
} from 'lucide-react';
import type { Situation, SituationId } from '../content/types';

type TopicPageProps = {
  onSelectTopic: (topicId: SituationId) => void;
  onStartQuiz: () => void;
  quizCounts: Record<SituationId, number>;
  selectedTopicId: SituationId;
  topics: Situation[];
};

const topicIcons: Record<SituationId, LucideIcon> = {
  funeral: Flower2,
  work: BriefcaseBusiness,
  dining: Utensils,
  drinking: Wine,
};

// 퀴즈를 풀 주제를 선택하는 화면입니다. 선택 상태는 카드 색상만으로 전달합니다.
export function TopicPage({
  onSelectTopic,
  onStartQuiz,
  quizCounts,
  selectedTopicId,
  topics,
}: TopicPageProps) {
  return (
    <div className="mx-auto grid w-full max-w-6xl flex-1 content-center py-3 sm:py-4">
      <section className="rounded-[8px] bg-white p-4 shadow-soft ring-1 ring-black/5 sm:p-5 lg:p-6">
        <div className="mb-4 flex flex-col gap-2 sm:mb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold text-cta">주제 선택</p>
            <h2 className="mt-1 text-xl font-black tracking-normal sm:text-3xl">
              알고 싶은 상황을 고르세요
            </h2>
          </div>

        </div>

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {topics.map((topic) => {
            const active = selectedTopicId === topic.id;
            const Icon = topicIcons[topic.id];

            return (
              <button
                key={topic.id}
                type="button"
                onClick={() => onSelectTopic(topic.id)}
                className={[
                  'min-h-36 rounded-[8px] border px-4 py-4 text-left transition focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2',
                  active
                    ? 'border-cta bg-blue-50 shadow-soft ring-2 ring-cta/15'
                    : 'border-line bg-white hover:border-ink',
                ].join(' ')}
              >
                <span className="flex h-full flex-col justify-between gap-3">
                  <span>
                    <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-canvas text-ink">
                      <Icon size={19} />
                    </span>
                    <span className="block text-lg font-black">{topic.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-muted">
                      {topic.summary}
                    </span>
                  </span>
                  <span className="flex items-center justify-between gap-2">
                    <span className="text-xs font-bold text-muted">{topic.intent}</span>
                    <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-black text-cta ring-1 ring-line">
                      {quizCounts[topic.id]}문제
                    </span>
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 flex justify-center">
          <button
            type="button"
            onClick={onStartQuiz}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-cta px-6 py-3 font-bold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-cta focus:ring-offset-2 sm:max-w-sm"
          >
            문제 풀기
          </button>
        </div>
      </section>
    </div>
  );
}
