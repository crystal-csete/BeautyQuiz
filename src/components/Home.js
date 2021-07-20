/** @format */

import React from "react";
import blonde_one from "../images/blonde_one.jpg";

const Home = () => {
  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1>Home Page</h1>
        <p>
          Hair can be difficult to work with. That is why so much of our money
          goes into making it how we like. So many mistakes were made along the
          way. This site wants to help you learn more about your hair.
        </p>
        <p>
          When bleaching and dying your hair at home, a little bit of knowledge
          can go a long way. Here, at this company, we just want to educate you
          on some of the basics. Take our short quiz, see what you need to know
          more about. We got lots of articles here to learn from.
        </p>
      </div>
      <div class='text-center'>
        <img
          className='blondeOne'
          src={blonde_one}
          class='rounded'
          alt='model with blonde hair'
        />
      </div>
    </div>
  );
};

export default Home;
