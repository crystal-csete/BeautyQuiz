/** @format */

import React from "react";
import blonde_one from "../images/blonde_one.jpg";

const Home = () => {
  return (
    <div className='container'>
      <div className='jumbotron'>
        <h1>Hair Love</h1>
        <p>
          Hair can be difficult to work with. That is why so much of our money
          goes into making it how we like. So many mistakes were made along the
          way. This site wants to help you learn more about your hair.
        </p>
        <p>
          When bleaching and dying your hair at home, a little bit of knowledge
          can go a long way. Here, at this company, we just want to educate you
          on some of the basics. Take our short quiz, see what you need to know
          more about. Soon, we will add articles here to learn from.
        </p>
      </div>
      <div className='text-center'>
        <img
          className='blondeOne'
          src={blonde_one}
          class='rounded'
          alt='model with blonde hair'
        />
        <figcaption>Beautiful hair!</figcaption>
      </div>
      <div>
        <p>
          Okay, so you wanna bleach your hair? Well, won't that damage your
          hair? What can you do to{" "}
          <a href='/hairbleachingtips'>protect your gorgeous locks</a>?
        </p>
        <p>
          Sometimes, it's just not in the budget to go get your hair colored
          professionaly. That's okay! Once your hair is ready for some dye,
          check out some articles on the process of dying your hair. For some
          basic guides on the do's and don'ts,{" "}
          <a href='/haircolortips'>click here!</a>
        </p>
      </div>
    </div>
  );
};

export default Home;
