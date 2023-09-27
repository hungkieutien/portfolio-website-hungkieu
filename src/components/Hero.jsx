import React from "react";
import "../styles/components/_hero.scss";
import {IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";

function Hero() {

    return (<section id="home" className="hero">
        <div className="container">
            <div className="content">
                <div className="hero-main">
                    <div className="hero-text">
                        <h1>Hi, I'm Hung.</h1>
                        <p>An awesome react developer in the making based in Würzburg, Germany.</p>
                        <span>
                            <a
                                aria-label="linkedin"
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.linkedin.com/in/hung-kieu-tien/">
                                <IconBrandLinkedin width={32} height={32}/>
                            </a>
                            <a
                                aria-label="github"
                                rel="noreferrer"
                                target="_blank"
                                href="https://github.com/hungkieutien">
                                <IconBrandGithub width={32} height={32}/>
                            </a>
                        </span>
                    </div>
                    <div className="hero-img">
                        <img src="https://i.pinimg.com/564x/d5/95/27/d5952760680f702e12580afcb01da710.jpg"
                             alt="dev-img"/>
                    </div>
                </div>
                <div className="skills">
                    <p>Tech Stack</p>
                    <div className="logos">
                        <ul>
                            <li><img src="https://skillicons.dev/icons?i=html,css" alt="skill-icon"/></li>
                            <li><img src="https://skillicons.dev/icons?i=js,ts" alt="skill-icon"/></li>
                            <li><img src="https://skillicons.dev/icons?i=react,nextjs" alt="skill-icon"/></li>
                            <li><img src="https://skillicons.dev/icons?i=sass,tailwind" alt="skill-icon"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>);
}

export default Hero;