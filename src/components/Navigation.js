/** @format */

import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import BeautyQuiz from "./BeautyQuiz";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <Link to='/beautyquiz'>Beauty Quiz</Link>

        <Link to='/'>Home</Link>
      </ul>
    </nav>
  );
};

export default Navigation;
