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

      <div className='dropdown hairColorDrop'>
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
        <iframe
          src='https://www.youtube.com/embed/LZ-S-tmHBlc'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
        <div className='hairColor__text'>
          <h3 id='semi'>Semi-Permanent</h3>
          <p>
            Semi-Permanent hair color is a short term solution to change your
            hair color. This type of hair dye COATS the surface of your hair
            strands, living <strong>on</strong> the surface of your hair. It
            doesn't permanently change your hair color or the texture. This type
            contains no ammonia. You do <strong>not</strong> have to mix with
            developer to use it. For better gray coverage, use Demi-Permanent or
            Permanent hair color. It will last about 4-12 shampoos.
          </p>
        </div>

        <div className='hairColor__text'>
          <h3 id='demi'>Demi-Permanent</h3>
          <p>
            Demi-Permanent hair color is also a short term solution to change
            your hair color. This type of hair dye will last from 12-24
            shampoos. It has a low-ammonia formula, and is mixed with a
            low-volume developer, to lightly open the cuticle of the hair. It
            will not fully cover gray hairs, and is used for changing the{" "}
            <strong>tone</strong> of your hair color.
          </p>
        </div>
        <div className='hairColor__text'>
          <h3 id='permanent'>Permanent</h3>
          <p>
            Permanent hair color actually open the hair cuticle, and penetrate
            the hair strands to deposit color. It will cover your gray hairs,
            and will permanently change the texture and color of your hair
            because it chemically alters the hair structure. If you have never
            dyed your hair, it can lighten the hair 1-5 levels.
          </p>
        </div>
        <iframe
          src='https://www.youtube.com/embed/SQyCXqrpU88'
          title='YouTube video player'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
        <div className='hairColor__text'>
          <h3 id='temp'>Temporary</h3>
          <p>
            Temporary hair color can come in many forms. They can range from
            gels to conditioning masks. These types fade after a couple of
            shampoos. This would be a good option for a seasonal option, like
            halloween, or a game, like when you want to support your football
            team with there team colors. This would also work if you are not
            sure what color to go with. You can try it out a color for a couple
            of days, to see if you like it or not.
          </p>
        </div>
        <div className='hairColor__text'>
          <h3 id='henna'>Henna</h3>
          <p>
            Henna hair color is promoted as a more healthy alternative for your
            hair. It doesn't have the synthetic chemicals like traditional hair
            dye, like ammonia, PPD, and metallic salt. It may be good for your
            scalp and protects against everyday pollution. Grays will be
            naturally highlighted, but not entirely covered. The more you use
            Henna, the color will settle and deepen in shade.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HairColorTips;
