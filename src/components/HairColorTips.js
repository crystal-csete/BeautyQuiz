/** @format */

import React from "react";
import lavendar from "../images/lavendar_hair.jpg";
import pink from "../images/pink_hair.jpg";

const HairColorTips = () => {
  return (
    <div className='container haircolor'>
      <div className='jumbotron colorJumbo'>
        <h1>Hair Color</h1>
      </div>

      <div class='dropdown hairColorDrop'>
        <button
          className='btn btn-secondary dropdown-toggle'
          type='button'
          id='dropdownMenuButton1'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          Types of Hair Color
        </button>
        <ul className='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
          <li>
            <a className='dropdown-item' href='#semi'>
              Semi-Permanent
            </a>
          </li>
          <li>
            <a className='dropdown-item' href='#demi'>
              Demi-Permanent
            </a>
          </li>
          <li>
            <a className='dropdown-item' href='#permanent'>
              Permanent
            </a>
          </li>
          <li>
            <a className='dropdown-item' href='#temp'>
              Temporary
            </a>
          </li>
          <li>
            <a className='dropdown-item' href='#henna'>
              Henna
            </a>
          </li>
        </ul>
      </div>
      <div className='hairColor__text'>
        <h3>Hair coloring tips for DIY hair.</h3>
        <p>
          Finding great coverage for your hair can be tricky. You usually need
          to lighten your hair by bleaching it first. Once that is done, you
          pick your colors. There are tons of options out there! Semi-Permanent,
          Demi-Permanent, Permanent, Temporary, and Henna are the main ones to
          choose from. If you took the quiz, you already know, things can get
          complicated out there. These options are all slightly different, and
          do different things to your hair. Some will leave your pillows and
          towels stained, while others don't just wash out so easily. If you
          don't touch these up right, you could have more of a dingy pink color,
          instead of the bright Hot Pink that it once was.
        </p>
        <img
          className='pinkColor'
          src={pink}
          alt='Women with pink hair color'
        />
        <figcaption>She is feeling that color!</figcaption>
        <p>
          You want that fully covered hair, that looks like salon quality. So
          which kind of hair dye do you need? There are many kinds of color to
          use, and they will last for different lengths of time. They will fade
          differently. Not to mention, not all types of hair color will cover
          grey hair.
        </p>
        <img
          className='lavendarColor'
          src={lavendar}
          alt='Women with lavendar hair color'
        />
        <figcaption>Thinking about her awesome new colored hair!</figcaption>
        <div>
          <h3 id='semi'>Semi-Permanent</h3>
          <p>some info about semi permanent hair color</p>
        </div>
        <div>
          <h3 id='demi'>Demi-Permanent</h3>
          <p>some info about demi permanent hair color</p>
        </div>
        <div>
          <h3 id='permanent'>Permanent</h3>
          <p>some info about permanent hair color</p>
        </div>
        <div>
          <h3 id='temp'>Temporary</h3>
          <p>some info about Temporary hair color</p>
        </div>
        <div>
          <h3 id='henna'>Henna</h3>
          <p>some info about Henna hair color</p>
        </div>
      </div>
    </div>
  );
};

export default HairColorTips;
