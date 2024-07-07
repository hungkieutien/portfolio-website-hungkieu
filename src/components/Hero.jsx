import React from "react";
import "../styles/components/_hero.scss";
import {RoughNotation} from "react-rough-notation";
import hero_img from "../images/hung_kieu.png"
import Section from "./Section";

function Hero() {

    function markWord(text, color) {
        return (
            <RoughNotation type="highlight" color={color} show={true} iterations={1} animationDuration={2000}>
                <span className="hero-words-nowrap"> {text}</span>
            </RoughNotation>
        );
    }

    return (
        <>
            <Section id="home" className="hero" mode="hero">
                <div className="content">
                    <div className="hero-main">
                        <div className="hero-text">
                            <h1>Hello! I'm Hung, a {markWord("developer", "#E3F2FD")} based
                                in Würzburg, Germany.</h1>
                            <p>
                                I love building tools that
                                are {markWord("user-friendly,", "#E8F5E9")} {markWord("simple", "#E3F2FD")} and {markWord("minimalistic.", "#FFEBEE")}
                                <br/>
                                During my studies I learned the basics
                                of {markWord("front-end", "#E8F5E9")} and {markWord("back-end web development.", "#FFEBEE")} Currently
                                I'm dedicated to {markWord("learn React", "#E3F2FD")} to take
                                my web development skills to the next level. For this reason, I am currently working
                                very intensively with React privately and building up a portfolio in parallel.
                                <br/><br/>
                                Through my {markWord("work experiences", "#E3F2FD")} in the
                                last {markWord("four years", "#E8F5E9")}, I
                                had the opportunity to work with cross-functional teams and different
                                technologies. Although {markWord("back-end development", "#FFEBEE")} has
                                been my {markWord("main area", "#FFEBEE")} over the past time, I wanted
                                to {markWord("expand my skills", "#E8F5E9")} in the
                                {markWord("front-end development.", "#E8F5E9")} This versatility allows
                                me to work effectively at different stages of a project's development and ensure
                                that the final products are both functional and aesthetically pleasing.
                            </p>
                            <div className="btn-group">
                                <a
                                    className="github-btn"
                                    aria-label="github"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://github.com/hungkieutien">View GitHub</a>
                                <a
                                    className="linkedin-btn"
                                    aria-label="linkedin"
                                    rel="noreferrer"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/hung-kieu-tien/">View LinkedIn</a>
                            </div>
                        </div>
                        <div className="hero-img">
                            <img src={hero_img}
                                 alt="dev-img"/>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

export default Hero;