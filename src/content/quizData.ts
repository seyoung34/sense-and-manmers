import type { Quiz, QuizResult, Situation } from './types';

export const situations: Situation[] = [
  {
    id: 'funeral',
    title: '장례식장',
    summary: '조문 인사, 복장, 현장 태도처럼 조심스러운 순간을 다뤄요.',
    sensitivity: 'high',
  },
  {
    id: 'work',
    title: '회사 생활',
    summary: '메신저, 회의, 보고 상황에서 자연스러운 표현을 익혀요.',
    sensitivity: 'low',
  },
  {
    id: 'dining',
    title: '식사 예절',
    summary: '자리, 식사 시작, 계산 상황처럼 자주 헷갈리는 순간을 확인해요.',
    sensitivity: 'medium',
  },
  {
    id: 'drinking',
    title: '술자리 예절',
    summary: '건배, 권유 거절, 마무리 인사처럼 부담을 줄이는 행동을 살펴요.',
    sensitivity: 'medium',
  },
];

export const quizzes: Quiz[] = [
  {
    id: 'funeral-words-001',
    situationId: 'funeral',
    title: '조문 인사말로 가장 조심스러운 표현은 무엇일까요?',
    prompt:
      '장례식장에서 유가족에게 짧게 위로를 전하려고 해요. 보통 가장 무난하고 조심스러운 말은 무엇일까요?',
    layoutType: 'scenario',
    choices: [
      { id: 'A', label: '왜 갑자기 돌아가셨어요?' },
      { id: 'B', label: '자세히 말씀해 보세요.' },
      { id: 'C', label: '삼가 고인의 명복을 빕니다.' },
      { id: 'D', label: '이제 괜찮아지실 거예요.' },
    ],
    answerId: 'C',
    explanation:
      '장례식장에서는 자세한 사정을 묻기보다 짧고 차분하게 위로를 전하는 편이 조심스러워요. 상황에 따라 말보다 조용한 태도가 더 자연스러울 수 있어요.',
    note: '종교나 가족 분위기에 따라 표현이 달라질 수 있으니 현장 분위기를 따르는 것도 좋아요.',
    locale: 'ko',
  },
  {
    id: 'funeral-clothes-001',
    situationId: 'funeral',
    title: '갑자기 조문을 가야 할 때 복장은 어떻게 할까요?',
    prompt:
      '검은 정장이 없고 바로 장례식장에 가야 하는 상황이에요. 가장 무난한 선택은 무엇일까요?',
    layoutType: 'scenario',
    choices: [
      { id: 'A', label: '화려한 색 옷이라도 깔끔하면 괜찮아요.' },
      { id: 'B', label: '어두운색의 단정한 옷을 고르고 장식을 줄여요.' },
      { id: 'C', label: '평소처럼 편한 옷을 입어요.' },
      { id: 'D', label: '향수를 진하게 뿌려요.' },
    ],
    answerId: 'B',
    explanation:
      '보통은 검정, 남색, 짙은 회색처럼 어두운색을 고르고 장식을 줄이면 무난해요. 완벽한 복장보다 차분하고 조심스러운 태도가 더 중요할 때도 있어요.',
    locale: 'ko',
  },
  {
    id: 'funeral-phone-001',
    situationId: 'funeral',
    title: '장례식장에서 휴대폰은 어떻게 두는 게 좋을까요?',
    prompt:
      '조문을 마치고 식사 공간에 앉아 있어요. 휴대폰 알림이 계속 울린다면 가장 자연스러운 행동은 무엇일까요?',
    layoutType: 'scenario',
    choices: [
      { id: 'A', label: '자리에서 바로 큰 소리로 통화해요.' },
      { id: 'B', label: '무음으로 바꾸고 급한 통화는 밖에서 짧게 해요.' },
      { id: 'C', label: '사진을 찍어 단체방에 공유해요.' },
      { id: 'D', label: '알림음을 그대로 둬요.' },
    ],
    answerId: 'B',
    explanation:
      '장례식장에서는 조용한 분위기를 해치지 않는 것이 좋아요. 급한 연락이 있으면 무음으로 바꾸고 밖에서 짧게 처리하면 자연스러워요.',
    locale: 'ko',
  },
  {
    id: 'work-message-001',
    situationId: 'work',
    title: '처음 연락하는 선배에게 어떤 말로 시작할까요?',
    prompt:
      '처음 연락하는 다른 팀 선배에게 자료를 요청해야 해요. 첫 문장으로 가장 자연스러운 것은 무엇일까요?',
    layoutType: 'scenario',
    choices: [
      { id: 'A', label: '자료 좀 주세요.' },
      {
        id: 'B',
        label: '안녕하세요, OO팀 OO입니다. 혹시 지난 회의 자료를 받을 수 있을까요?',
      },
      { id: 'C', label: '회의 자료 필요합니다.' },
      { id: 'D', label: '바쁘세요?' },
    ],
    answerId: 'B',
    explanation:
      '처음 연락할 때는 내가 누구인지 먼저 밝히고, 필요한 내용을 짧게 말하면 좋아요. 상대가 바로 상황을 이해할 수 있어요.',
    locale: 'ko',
  },
  {
    id: 'work-report-001',
    situationId: 'work',
    title: '회의에서 진행 상황을 어떻게 말하면 좋을까요?',
    prompt:
      '맡은 일이 아직 끝나지 않았는데 팀장님이 현재 상황을 물었어요. 가장 자연스러운 답변은 무엇일까요?',
    layoutType: 'text',
    choices: [
      { id: 'A', label: '아직 못 했습니다.' },
      { id: 'B', label: '곧 됩니다.' },
      {
        id: 'C',
        label: '현재 자료 정리까지 완료했고, 오늘 오후까지 초안을 공유드리겠습니다.',
      },
      { id: 'D', label: '다른 일이 많아서요.' },
    ],
    answerId: 'C',
    explanation:
      '보고할 때는 현재 상태, 다음 행동, 예상 시간을 함께 말하면 상대가 판단하기 쉬워요. 변명보다 계획을 짧게 정리하는 편이 자연스러워요.',
    locale: 'ko',
  },
  {
    id: 'work-request-001',
    situationId: 'work',
    title: '동료에게 급한 부탁을 할 때 가장 자연스러운 말은?',
    prompt:
      '마감이 가까워 동료에게 자료 확인을 부탁해야 해요. 어떤 표현이 부담을 덜 줄까요?',
    layoutType: 'scenario',
    choices: [
      { id: 'A', label: '지금 바로 이것 좀 봐주세요.' },
      { id: 'B', label: '이거 왜 아직 안 봤어요?' },
      {
        id: 'C',
        label: '바쁘신 중에 죄송하지만, 가능하실 때 이 부분만 확인 부탁드려도 될까요?',
      },
      { id: 'D', label: '제가 급하니까 먼저 해주세요.' },
    ],
    answerId: 'C',
    explanation:
      '부탁할 때는 상대 상황을 인정하고 필요한 범위를 구체적으로 말하면 좋아요. 급한 이유가 있다면 짧게 함께 설명하면 더 자연스러워요.',
    locale: 'ko',
  },
  {
    id: 'dining-seat-001',
    situationId: 'dining',
    title: '식사 자리에서 어디가 상석일까요?',
    prompt:
      '회사 선배와 거래처 손님 2명, 나까지 총 4명이 식당에 들어왔어요. 방 안쪽 벽을 등지는 자리가 있고, 출입문은 오른쪽에 있어요. 손님에게 권하기 가장 자연스러운 자리는 어디일까요?',
    layoutType: 'seat-map',
    choices: [
      { id: 'A', label: '출입문과 가장 가까운 자리' },
      { id: 'B', label: '방 안쪽 벽을 등지는 자리' },
      { id: 'C', label: '주문하기 편한 통로 쪽 자리' },
      { id: 'D', label: '내가 앉기 편한 자리' },
    ],
    answerId: 'B',
    explanation:
      '보통은 출입문에서 멀고 방 안쪽에 있어 안정적인 자리를 상석으로 봐요. 손님이나 윗사람에게 먼저 권하면 자연스러워요.',
    note: '상대가 이동하기 불편하거나 식당 구조상 특정 자리가 더 편할 수 있어요. 그럴 땐 먼저 물어보면 좋아요.',
    locale: 'ko',
  },
  {
    id: 'dining-start-001',
    situationId: 'dining',
    title: '식사는 언제 시작하면 자연스러울까요?',
    prompt:
      '윗사람과 함께 식사하는 자리에서 음식이 먼저 내 앞에 놓였어요. 보통 가장 자연스러운 행동은 무엇일까요?',
    layoutType: 'scenario',
    choices: [
      { id: 'A', label: '음식이 식기 전에 바로 먹기 시작해요.' },
      { id: 'B', label: '사진부터 찍고 주변에 공유해요.' },
      { id: 'C', label: '윗사람이나 손님이 시작하는 분위기를 보고 함께 시작해요.' },
      { id: 'D', label: '혼자 먼저 다 먹고 기다려요.' },
    ],
    answerId: 'C',
    explanation:
      '보통은 윗사람이나 손님이 먼저 수저를 들거나 함께 먹자는 분위기가 생긴 뒤 시작하면 자연스러워요.',
    locale: 'ko',
  },
  {
    id: 'dining-pay-001',
    situationId: 'dining',
    title: '식사 후 계산 분위기에서는 어떻게 말하면 좋을까요?',
    prompt:
      '선배가 계산하려는 분위기예요. 무조건 가만히 있기보다 자연스러운 반응은 무엇일까요?',
    layoutType: 'scenario',
    choices: [
      { id: 'A', label: '계산대 근처에도 가지 않아요.' },
      { id: 'B', label: '잘 먹었습니다. 다음에는 제가 대접하겠습니다.' },
      { id: 'C', label: '비싼 걸 더 주문할 걸 그랬어요.' },
      { id: 'D', label: '영수증 좀 보여주세요.' },
    ],
    answerId: 'B',
    explanation:
      '상대가 계산하더라도 감사 인사를 분명히 하고 다음 기회를 언급하면 자연스러워요. 관계에 따라 실제로 다음에 커피나 식사를 챙기는 것도 좋아요.',
    locale: 'ko',
  },
  {
    id: 'drinking-toast-001',
    situationId: 'drinking',
    title: '건배할 때 잔은 어떻게 들면 좋을까요?',
    prompt:
      '회사 술자리에서 선배와 건배하게 되었어요. 보통 가장 무난한 행동은 무엇일까요?',
    layoutType: 'scenario',
    choices: [
      { id: 'A', label: '잔을 한 손으로 높게 들고 세게 부딪혀요.' },
      { id: 'B', label: '상대보다 살짝 낮게 들고 가볍게 맞춰요.' },
      { id: 'C', label: '상대 잔 위에서 눌러요.' },
      { id: 'D', label: '건배를 무시하고 바로 마셔요.' },
    ],
    answerId: 'B',
    explanation:
      '보통은 상대보다 잔을 살짝 낮게 들고 가볍게 맞추면 무난해요. 요즘은 너무 형식에 얽매이지 않는 자리도 많지만, 처음 만나는 자리라면 조심스럽게 시작하는 편이 좋아요.',
    locale: 'ko',
  },
  {
    id: 'drinking-decline-001',
    situationId: 'drinking',
    title: '술을 권유받았지만 마시기 어려울 때는?',
    prompt:
      '몸 상태 때문에 술을 마시기 어려운데 술을 권유받았어요. 가장 자연스러운 말은 무엇일까요?',
    layoutType: 'scenario',
    choices: [
      { id: 'A', label: '왜 자꾸 권하세요?' },
      { id: 'B', label: '오늘 컨디션 때문에 어렵습니다. 대신 음료로 함께하겠습니다.' },
      { id: 'C', label: '그냥 아무 말 없이 자리를 떠나요.' },
      { id: 'D', label: '마시기 싫은데요.' },
    ],
    answerId: 'B',
    explanation:
      '거절할 때는 이유를 짧게 말하고 함께하는 태도를 보여주면 부담이 줄어요. 건강이나 개인 사정은 충분히 존중받아야 해요.',
    locale: 'ko',
  },
  {
    id: 'drinking-leave-001',
    situationId: 'drinking',
    title: '술자리에서 먼저 일어나야 할 때는?',
    prompt:
      '다음 날 일정 때문에 먼저 일어나야 해요. 어떤 말이 가장 자연스러울까요?',
    layoutType: 'scenario',
    choices: [
      { id: 'A', label: '저 갑니다.' },
      { id: 'B', label: '재미없어서 먼저 갈게요.' },
      {
        id: 'C',
        label: '내일 일정이 있어 먼저 일어나보겠습니다. 오늘 자리 감사했습니다.',
      },
      { id: 'D', label: '아무 말 없이 나가요.' },
    ],
    answerId: 'C',
    explanation:
      '먼저 일어날 때는 이유를 짧게 말하고 자리 감사 인사를 함께 전하면 자연스러워요. 분위기를 끊지 않게 조용히 인사하는 것도 좋아요.',
    locale: 'ko',
  },
];

export const quizResults: QuizResult[] = [
  {
    id: 'all-clear',
    minCorrect: 3,
    maxCorrect: 3,
    title: '분위기를 잘 읽는 편이에요',
    message:
      '세 문제 모두 자연스러운 선택을 했어요. 낯선 자리에서도 상대가 편한 방향을 먼저 떠올리는 감각이 있어요.',
    tone: 'praise',
  },
  {
    id: 'almost',
    minCorrect: 2,
    maxCorrect: 2,
    title: '조금만 더 보면 충분해요',
    message:
      '대부분의 흐름은 잘 잡았어요. 헷갈린 문제의 해설을 보면 다음 비슷한 상황에서 더 편하게 판단할 수 있어요.',
    tone: 'encourage',
  },
  {
    id: 'starter',
    minCorrect: 0,
    maxCorrect: 1,
    title: '지금부터 익히면 충분해요',
    message:
      '아직 낯선 상황이 있었어요. 괜찮아요. 예절은 외우는 것보다 상황을 하나씩 겪으며 익히는 쪽에 가까워요.',
    tone: 'guide',
  },
];
