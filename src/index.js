/** @format */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BeautyQuizProvider } from "./context/beautyQuizContext";

ReactDOM.render(
  <React.StrictMode>
    <BeautyQuizProvider>
      <App />
    </BeautyQuizProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
