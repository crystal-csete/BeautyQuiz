/** @format */

import React from "react";
import bleachtwo from "../images/bleach_two.jpg";
import bleachthree from "../images/bleach_three.jpg";
import sink from "../images/sink.jpg";
import gloves from "../images/gloves.jpg";
import parting from "../images/parting.jpg";

const HairTips = () => {
  return (
    <div className='container hairbleach'>
      <div className='jumbotron bleachJumbo'>
        <h1>Bleaching Your Hair</h1>
      </div>

      <div className='hairBleach__text'>
        <h3>The most basic steps for DIY hair bleaching.</h3>
        <ol>
          <li>Mix the lightener and the developer.</li>
          <li>Apply this mixture to your hair.</li>
          <li>Loosly secure your hair and let the bleach work it's magic.</li>
          <li>Wash out the bleach mixture, and condition it.</li>
          <li>Style as usual.</li>
          <li>
            Give your hair a break! Wait at least 24 hours before dying your
            hair.
          </li>
        </ol>
        <p>
          Like I said, these are the <strong>basic</strong> steps for bleaching
          your hair at home. Always be <strong>careful</strong>, and always be{" "}
          <strong>safe</strong>!
        </p>
        <img
          className='bleachTwo'
          src={bleachtwo}
          alt='Man with bleached hair'
        />
        <figcaption>Just bleach the tips!</figcaption>
        <h3>Things to know before you Bleach your hair</h3>
        <p>
          Before you begin, you want to do a strand test, and an allergy test 24
          hours before you bleach your hair. Always follow the manufacturer
          instructions on the product, because they will be the most accurate.
        </p>
        <img className='sink' src={sink} alt='Bathroom sink area' />
        <figcaption>Nice clean surface to work on</figcaption>
        <h3>Make room!</h3>
        <p>
          Make sure you have a clean surface to work with, with room to set down
          the materials you need. Cover your surface, so it does not get
          stained. Wear clothes that you are okay with getting possibly ruined
          if some bleach spills. Use a non-metallic bowl to mix the bleach in.
          Know the ratio of bleach to developer before you begin. That should be
          easy, since you are doing a strand test before you actually start this
          process.
        </p>
        <img
          className='gloves'
          src={gloves}
          alt='Hands with gloves making heart symbol'
        />
        <figcaption>Keeping the hair love alive!</figcaption>
        <h3>
          <strong>Don't</strong> feel the burn!
        </h3>
        <p>
          Wear gloves before you begin, so you don't burn your hands. I like
          having a damp towel ready to go, in case I get bleach somewhere on my
          skin. This way, it is fast to wipe it off, so you wont burn your face
          if some bleach gets on there.
        </p>
        <img
          className='parting'
          src={parting}
          alt='Person with foil and bleach in hair'
        />
        <figcaption>Going back to their roots!</figcaption>
        <h3>Now picture this...</h3>
        <p>
          Plan how you will part your hair before you begin. You want to bleach
          your roots last, because the will usually bleach the fastest. You need
          to section off your hair, and secure these sections as you go. I would
          start off by bleaching the bottom portion of your hair first, working
          your way around your head, bottom to top. Then, go back and get your
          roots bleached. Do Not bleach your scalp, this will burn you! Don't
          rub it in either. This is bad, and can cause irritation.
        </p>

        <img
          className='bleachThree'
          src={bleachthree}
          alt='Women with bleached hair in the wind'
        />
        <figcaption>I am blown away by her blonde hair!</figcaption>
        <p>
          When I say "secure your hair", I mean many things. You can try many
          things, that can give slightly different results. You could use clips
          to make a loose bun on top of your head. You can use a shower cap to
          completely cover your hair. You could also use foil, to help heat up
          your hair, which can help lift the color from your hair. Remember to
          cover your shirt with a towel or salon smock, or just be SUPER careful
          not to get any on your clothes.
        </p>
        <p>
          Check out the video below. It is a good idea to see what you are
          getting yourself into!
        </p>

        <iframe
          width='913'
          height='514'
          src='https://www.youtube.com/embed/2MlC-ztCHjs'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>
      </div>
    </div>
  );
};

export default HairTips;
