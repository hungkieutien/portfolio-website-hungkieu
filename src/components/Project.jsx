import React from "react";
import ProjectBox from "./ProjectBox";
import Phosure from "../images/projects/phosure.png";
import "../styles/components/_project.scss";
import Section from "./Section";

export default function Projects() {
    return (
        <>
            <Section id="projects" className="projects" mode="projects" title="Projects">
                <div className="projects-boxes">
                    <ProjectBox
                        title="Phosure"
                        img={Phosure}
                        date="(October 2023)"
                        description="With a focus on simplicity and clean design, making it easy for customers to get informations from a restaurant and book
                                a reservation."
                        techno1="React"
                        techno2="SCSS"
                        code="https://github.com/hungkieutien/phosure"
                        demo="https://phosure.vercel.app/"
                        scrollY="-78%"
                    />
                </div>
            </Section>
        </>
    );
}