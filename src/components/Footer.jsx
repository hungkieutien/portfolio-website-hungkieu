import React from "react";
import "../styles/components/_footer.scss";
import {IconBrandGithub, IconBrandLinkedin} from "@tabler/icons-react";

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-wrap">
                        <h3>Copyright © 2023</h3>
                        <div className="footer-links">
                            <span>
                            <a
                                aria-label="github"
                                rel="noreferrer"
                                target="_blank"
                                href="https://github.com/hungkieutien">
                                <IconBrandGithub width={32} height={32}/>
                            </a>
                            <a
                                aria-label="linkedin"
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.linkedin.com/in/hung-kieu-tien/">
                                <IconBrandLinkedin width={32} height={32}/>
                            </a>
                        </span>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;