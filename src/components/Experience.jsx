import React from "react";
import Section from "./Section";
import "../styles/components/_experience.scss";

const experiences = [
    {
        id: 'ex1',
        company: 'snapADDY GmbH',
        time: '2024/2 - Present',
        role: 'Web Developer',
        description: 'My tasks included the maintenance of snapADDY\'s website. I used HTML, CSS and JavaScript to implement the desired features on the website. I also worked on the further development of an existing website for a company event based on the front-end framework AstroJS. Another project involved the evaluation of a headless CMS as a potential replacement for Contao.',
    },
    {
        id: 'ex2',
        company: 'netgrade GmbH',
        time: '2022/3 - 2023/12',
        role: 'Full-Stack Developer',
        description: 'I specialize in the implementation of screen designs for online stores, using HTML, CSS and JavaScript as my tools. ' +
            'In addition to my front-end skills, I also have experience in plugin development, especially with PHP and Symfony. These plugins have helped to extend the functionality of online stores and create customized solutions for clients. ' +
            'During my work I have worked closely with the Shopware Content Management System. This CMS provides a robust platform for e-commerce. ' +
            'To ensure that all requirements were implemented accurately and efficiently, I created tickets in Jira and organized them in a Jira board. This allowed us to plan and track tasks effectively and ensure that each project was completed successfully.',
    },
    {
        id: 'ex3',
        company: 'Vogel Communications Group GmbH & Co. KG',
        time: '2019/4 - 2022/3',
        role: 'Full-Stack Developer',
        description: 'I mainly handled the backend development of the content platforms, receiving data to ensure it ' +
            'was seamlessly played out on the frontend. PHP was my tool of choice to efficiently process this data and ' +
            'create engaging user experiences. I also gained experience in developing microservices. I have used PHP ' +
            'and Elasticsearch to create microservices that are used to search and retrieve data from the database. ' +
            'These microservices have not only increased performance, but also improved data availability and optimized ' +
            'the efficiency of our applications.'
    },
];

function Experience() {
    return (
        <>
            <Section id="experience" className="experiences-container" mode="experience" title="Experience">
                <div className="experience-main">
                    <ul className="experiences">
                        {experiences.map(experience => (
                            <li className="experience" key={experience.id}>
                                <div className="experience-content">
                                    <div className="experience-company-time">
                                        <p className="experience-company">{experience.company}</p>
                                        <p className="experience-time">{experience.time}</p>
                                    </div>
                                    <p className="experience-role">{experience.role}</p>
                                    <p className="experience-description">{experience.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>
        </>
    );
}

export default Experience;