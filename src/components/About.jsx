import React from "react";
import "../styles/components/_about.scss";

function About() {
    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <div className="about-content">
                        <div className="about-img">
                            <img
                                src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
                                alt="about-img"/>
                        </div>
                        <div className="about-text">
                            <h2>About me</h2>
                            <p>
                                Hi again I'm Hung, a passionate software developer with a strong curiosity and
                                enthusiasm for developing great digital solutions. I am currently dedicated to learning
                                React to take my web development skills to the next level.
                                <br/><br/>
                                Although PHP has been my main tool over the last years, I want to expand my skills in
                                the frontend development. This versatility allows me to work effectively at different
                                stages of a project's development and ensure that the final products are both functional
                                and aesthetically pleasing.
                                <br/><br/>
                                My journey into the world of software development began with my bachelor's thesis almost
                                four years ago. Since then, I have made it my mission to constantly learn, grow and
                                master new technologies to create innovative solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;