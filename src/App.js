/** @format */

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import BeautyQuiz from "./components/BeautyQuiz";
import HairColorTips from "./components/HairColorTips";
import HairBleachingTips from "./components/HairBleachingTips";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

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
        <Route path='/haircolortips'>
          <HairColorTips />
        </Route>
        <Route path='/hairbleachingtips'>
          <HairBleachingTips />
        </Route>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
