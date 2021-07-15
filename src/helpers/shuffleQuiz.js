/** @format */

export const shuffleQuiz = (question) => {
  if (!question) {
    return [];
  }

  const unshuffledQuiz = [question.correctAnswer, ...question.incorrectAnswers];

  return unshuffledQuiz
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};
