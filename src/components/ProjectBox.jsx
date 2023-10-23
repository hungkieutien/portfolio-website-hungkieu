import {IconBrandGithub, IconExternalLink} from "@tabler/icons-react";
import {useState} from "react";

export default function ProjectBox({
                                       title,
                                       img,
                                       description,
                                       techno1,
                                       techno2,
                                       code,
                                       demo,
                                       scrollY,
                                       date,
                                   }) {

    const [scroll, setScroll] = useState(false);

    return (
        <>
            <div className="project-box">
                <div className="project-img">
                    <a target="_blank" href={demo} rel="noreferrer">
                        <img
                            src={img}
                            alt="website"
                            style={{
                                transform: scroll ? `translateY(${scrollY})` : "translateY(0%)",
                                transition: "transform 10s ease-in-out",
                            }}
                            onMouseEnter={() => setScroll(true)}
                            onMouseLeave={() => setScroll(false)}
                        />
                    </a>
                </div>
                <div className="project-text">
                    <h3>
                        {title} <span className="date-class">{date}</span>
                    </h3>
                    <p>{description}</p>
                    <div className="stack">
                        <p>{techno1}</p>
                        <p>{techno2}</p>
                    </div>
                    <div className="links">
                        <a target="_blank" href={code} rel="noreferrer">
                            Code <IconBrandGithub/>
                        </a>
                        <a target="_blank" href={demo} rel="noreferrer">
                            Live Demo
                            <IconExternalLink/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

