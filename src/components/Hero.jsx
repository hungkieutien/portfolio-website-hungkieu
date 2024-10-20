import React from "react";
import "../styles/components/_hero.scss";
import hero_img from "../images/hung_kieu.png"
import Section from "./Section";

function Hero() {

    return (
        <>
            <Section id="home" className="hero" mode="hero">
                <div className="content">
                    <div className="hero-main">
                        <div className="hero-text">
                            <h1>Hello! I'm Hung, a developer based
                                in Würzburg, Germany.</h1>
                            <p>
                                I am passionate about building user-friendly, simple, and minimalistic tools.
                                Throughout my studies, I developed a strong foundation in both front-end and back-end
                                web development. Currently, I am focused on expanding my expertise by working on a
                                personal project to build an e-commerce shop, utilizing a modern tech stack:
                                Nuxt 3 (with TypeScript), NestJS, Prisma, PostgreSQL, GraphQL, and JWT for authentication.
                                While the project is still in its early stages, it plays a crucial role in helping me
                                build a new skill set and further develop my portfolio.
                                <br/><br/>
                                Over the past five years, I’ve worked with cross-functional teams and diverse
                                technologies. While I initially specialized in back-end development, I’ve expanded my
                                skill set to include front-end development as well. This versatility enables me to
                                contribute effectively across different phases of a project, ensuring that the final
                                product is both functional and aesthetically pleasing.
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