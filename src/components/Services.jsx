import React from 'react';
import { motion } from "framer-motion";
import { 
    FaHtml5, 
    FaCss3Alt, 
    FaJsSquare, 
    FaReact, 
    FaVuejs, 
    FaGitAlt, 
} from "react-icons/fa";
import { SiTailwindcss, SiGraphql } from "react-icons/si";

const Services = () => {

    const animations = {
        whileInView: {
            x: 0,
            y: 0,
            opacity: 1,
        },
        one: {
            opacity: 0,
            x: "-100%", // Slide in from the left
        },
        twoandthree: {
            opacity: 0,
            y: "-100%", // Slide in from the top
        },
        four: {
            opacity: 0,
            x: "100%", // Slide in from the right
        },
        five: {
            opacity: 0,
            x: "-100%", // Slide in from the left
        },
        six: {
            opacity: 0,
            y: "100%", // Slide in from the bottom
        },
        seven: {
            opacity: 0,
            x: "100%", // Slide in from the right
        },
        eight: {
            opacity: 0,
            y: "100%", // Slide in from the bottom
        },
    };

    return (
        <div id="services">
            <h2>Skills</h2>
            <section>
                {/* Unique Experience Tile */}
                <motion.div
                    id="serviceBox1"
                    className="serviceBox1"
                    whileInView={animations.whileInView}
                    initial={animations.one}
                >
                    <h3>3+</h3>
                    <p>Years of experience</p>
                </motion.div>

                {/* Skill Tiles */}
                <motion.div
                    className="serviceBox2"
                    whileInView={animations.whileInView}
                    initial={animations.twoandthree}
                >
                    <FaHtml5 />
                    <p>HTML</p>
                </motion.div>

                <motion.div
                    className="serviceBox3"
                    whileInView={animations.whileInView}
                    initial={animations.twoandthree}
                    transition={{
                        delay: 0.2,
                    }}
                >
                    <FaCss3Alt />
                    <p>CSS</p>
                </motion.div>

                <motion.div
                    className="serviceBox4"
                    whileInView={animations.whileInView}
                    initial={animations.four}
                >
                    <FaJsSquare />
                    <p>JavaScript, TypeScript</p>
                </motion.div>

                <motion.div
                    className="serviceBox5"
                    whileInView={animations.whileInView}
                    initial={animations.five}
                >
                    <FaReact />
                    <p>React.js, Redux</p>
                </motion.div>

                <motion.div
                    className="serviceBox7"
                    whileInView={animations.whileInView}
                    initial={animations.seven}
                >
                    <SiTailwindcss />
                    <p>MUI, Tailwind CSS</p>
                </motion.div>

                <motion.div
                    className="serviceBox6"
                    whileInView={animations.whileInView}
                    initial={animations.six}
                    transition={{
                        delay: 0.3,
                    }}
                >
                    <FaVuejs />
                    <p>Vue.js, Composition API</p>
                </motion.div>

                <motion.div
                    className="serviceBox8"
                    whileInView={animations.whileInView}
                    initial={animations.eight}
                    transition={{
                        delay: 0.4,
                    }}
                >
                    <FaGitAlt />
                    <p>Git, GitHub</p>
                </motion.div>

                <motion.div
                    className="serviceBox9"
                    whileInView={animations.whileInView}
                    initial={animations.seven}
                >
                    <SiGraphql />
                    <p>GraphQL, CI/CD</p>
                </motion.div>
            </section>
        </div>
    );
};

export default Services;
