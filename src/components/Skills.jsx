import React from "react";
import "../styles/components/_skills.scss";
import react_img from "../images/skills.png";

function Skills() {
    return (
        <>
            <section id="skill" className="skill">
                <div className="container">
                    <div className="skill-content">
                        <h2>Skills</h2>
                        <div className="skill-group">
                            <div className="skill-img">
                                <img
                                    src={react_img} alt="skill-img"/>
                            </div>
                            <div className="skill-set">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Sass</li>
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>PHP</li>
                                    <li>Symfony</li>
                                    <li>Zend</li>
                                    <li>Java</li>
                                    <li>MySQL</li>
                                    <li>Docker</li>
                                    <li>Git</li>
                                    <li>Shell Script</li>
                                    <li>MongoDB</li>
                                    <li>Shopware</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Skills;