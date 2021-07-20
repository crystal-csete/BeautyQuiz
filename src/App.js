/** @format */

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import BeautyQuiz from "./components/BeautyQuiz";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router>
      <div className='app-container'>
        <Navigation />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/beautyquiz'>
          <BeautyQuiz />
        </Route>
      </div>
    </Router>
  );
}

export default App;
