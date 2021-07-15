/** @format */

import React, { useContext } from "react";
import BeautyQuizQuestion from "./BeautyQuizQuestion";
import { BeautyQuizContext } from "../context/beautyQuizContext";

const BeautyQuiz = () => {
  const [beautyState, dispatch] = useContext(BeautyQuizContext);

  return (
    <div className='beautyquiz'>
      {beautyState.showResults && (
        <div className='results'>
          <div className='congrats'>Congrats!</div>
          <div className='results-info'>
            <div>You have reached the end of this short quiz.</div>
            <div>
              Your results: {beautyState.correctAnswersCount} out of{" "}
              {beautyState.questions.length} correctly.
            </div>
          </div>

          <div
            className='next-btn'
            onClick={() => dispatch({ type: "RESTART" })}>
            Restart Quiz
          </div>
        </div>
      )}
      {!beautyState.showResults && (
        <div>
          <div className='score'>
            Question {beautyState.currentQIndex + 1} /{" "}
            {beautyState.questions.length}
          </div>
          <BeautyQuizQuestion />
          {beautyState.currentAnswer && (
            <div
              className='next-btn'
              onClick={() => dispatch({ type: "NEXT_QUESTION" })}>
              Next Question
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BeautyQuiz;
