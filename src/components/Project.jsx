import React from "react";
import ProjectBox from "./ProjectBox";
import Phosure from "../images/projects/phosure.png";
import "../styles/components/_project.scss";

export default function Projects() {
    return (
        <>
            <section id="projects" className="projects">
                <div className="container">
                    <div className="projects-content">
                        <h2>Projects</h2>
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
                                scrollY="-83%"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}