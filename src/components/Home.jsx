import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsChevronDown } from "react-icons/bs";
import me from "../assets/homeImg01.png";

const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I am <br /> Saurabh Galgale
          </motion.h1>

          <ul className="description-list">
            <li>
              Proficient in debugging and resolving complex technical issues
              efficiently.
            </li>
            <li>
              Experienced Vue.js & React.js front-end developer with a strong
              focus on user-centric design.
            </li>
            <li>
              Deep understanding of advanced JavaScript concepts and modern
              development practices.
            </li>
            <li>
              Committed to writing clean, maintainable, and
              performance-optimized code.
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="image-container">
          <img src={me} alt="Saurabh" />
        </div>
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
