/** @format */

import React, { createContext, useReducer } from "react";
import questions from "../data";
import { shuffleQuiz } from "../helpers/shuffleQuiz";

const initialState = {
  questions,
  currentQIndex: 0,
  showResults: false,
  correctAnswersCount: 0,
  answers: shuffleQuiz(questions[0]),
  currentAnswer: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT_ANSWER": {
      const correctAnswersCount =
        action.payload === state.questions[state.currentQIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    }
    case "NEXT_QUESTION": {
      const showResults = state.currentQIndex === state.questions.length - 1;
      const currentQIndex = showResults
        ? state.currentQIndex
        : state.currentQIndex + 1;
      const answers = showResults
        ? []
        : shuffleQuiz(state.questions[currentQIndex]);
      return {
        ...state,
        currentAnswer: "",
        answers,
        currentQIndex,
        showResults,
      };
    }
    case "RESTART": {
      return initialState;
    }

    default:
      return state;
  }
};

export const BeautyQuizContext = createContext();

export const BeautyQuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return (
    <BeautyQuizContext.Provider value={value}>
      {children}
    </BeautyQuizContext.Provider>
  );
};
