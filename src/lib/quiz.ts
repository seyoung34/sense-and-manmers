import { quizResults } from '../content/quizData';
import type { Quiz, QuizResult, SituationId } from '../content/types';

export type AnswerMap = Record<string, string>;

export function getQuizzesBySituation(
  quizzes: Quiz[],
  situationId: SituationId,
): Quiz[] {
  return quizzes.filter((quiz) => quiz.situationId === situationId);
}

export function getCorrectCount(quizzes: Quiz[], answers: AnswerMap): number {
  return quizzes.reduce((count, quiz) => {
    return answers[quiz.id] === quiz.answerId ? count + 1 : count;
  }, 0);
}

export function getResultForCorrectCount(correctCount: number): QuizResult {
  return (
    quizResults.find(
      (result) =>
        correctCount >= result.minCorrect && correctCount <= result.maxCorrect,
    ) ?? quizResults[quizResults.length - 1]
  );
}
