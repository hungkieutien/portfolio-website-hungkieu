import React from "react";
import "../styles/components/_contact.scss"
import {IconMail, IconLocation} from '@tabler/icons-react';
import Section from "./Section";

function Contact() {
    return (
        <>
            <Section id="contact" className="contact" mode="contact">
                <div className="contact-content">
                    <div className="contact-title">
                        <h2>Contact</h2>
                    </div>
                    <div className="contact-icons">
                        <div className="contact-icon-box">
                            <span><IconLocation></IconLocation></span>
                            <div className="contact-info">
                                <h3>Location</h3>
                                <p>Würzburg, Germany</p>
                            </div>
                        </div>
                        <div className="contact-icon-box">
                            <span><IconMail></IconMail></span>
                            <div className="contact-info">
                                <h3>Mail</h3>
                                <p>hungkieutien@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}

export default Contact;