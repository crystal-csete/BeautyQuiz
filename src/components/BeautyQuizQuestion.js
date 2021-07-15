/** @format */

import React, { useContext } from "react";
import { BeautyQuizContext } from "../context/beautyQuizContext";
import BeautyQuizAnswer from "./BeautyQuizAnswer";

const BeautyQuizQuestion = () => {
  const [beautyState, dispatch] = useContext(BeautyQuizContext);
  const currentQ = beautyState.questions[beautyState.currentQIndex];

  return (
    <div>
      <div className='question'>{currentQ.question}</div>
      <div className='answers'>
        {beautyState.answers.map((answer, index) => (
          <BeautyQuizAnswer
            answerText={answer}
            key={index}
            index={index}
            currentAnswer={beautyState.currentAnswer}
            correctAnswer={currentQ.correctAnswer}
            selectedAnswer={(answerText) =>
              dispatch({ type: "SELECT_ANSWER", payload: answerText })
            }
          />
        ))}
      </div>
    </div>
  );
};

export default BeautyQuizQuestion;
