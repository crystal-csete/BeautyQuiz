/** @format */

import React from "react";

const BeautyQuizAnswer = ({
  answerText,
  index,
  selectedAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const multiChoice = ["A", "B", "C", "D"];

  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;

  const isWrongAnswer =
    currentAnswer === answerText && currentAnswer !== correctAnswer;

  const correctAnswerClass = isCorrectAnswer ? "correct-answer" : "";
  const wrongAnswerClass = isWrongAnswer ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";

  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => selectedAnswer(answerText)}>
      <div className='answer-multiChoice'>{multiChoice[index]}</div>
      <div className='answer-text'>{answerText}</div>
    </div>
  );
};

export default BeautyQuizAnswer;
