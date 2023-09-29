import React from "react";
import "../styles/components/_about.scss";

function About() {
    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <div className="about-content">

                        <div className="about-text">
                            <h2>About me</h2>
                            <p>
                                Hi I'm Hung, a passionate software developer with a strong curiosity and enthusiasm for
                                developing great digital solutions. I am currently dedicated to learning React to take
                                my web development skills to the next level.
                                <br/><br/>
                                Although PHP was my main tool,
                                I have also done some exciting projects using HTML, CSS and JavaScript, which has
                                my front-end development skills have grown. This versatility
                                allows me to work effectively in different stages of a project's development
                                und sicherzustellen, dass die Endprodukte sowohl funktional als auch ästhetisch
                                aesthetically pleasing.
                                <br/><br/>
                                My journey into the world of software development began with my bachelor's thesis, where
                                I discovered my true passion for development.
                                where I discovered my true passion for developing. Since then, I have made it my
                                made it my mission to constantly learn, grow and master new technologies,
                                to create innovative solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;