import React from "react";
import "./Contact.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    const openWeb = (link) => {
        window.open(link, "_blank");
    };
    return (
        <div id="#5" className="contact-wrap hiderx">
            <div className="head-wideline">
                <div className="heading hiderx">Say hello!</div>
                <div className="wideline right-to-left"></div>
            </div>
            <div className="contact-body">
                Interested in CFD and thermal engineering?
                <br />
                Whether you're looking to collaborate on engineering projects, discuss fluid dynamics, or explore opportunities in heat transfer and combustion, I'm always open to new connections.
                <br />
                <br />
                Let's connect and engineer innovative solutions together!

            </div>

            <div className="contact-list">
                <div className="right-to-left">
                    <FontAwesomeIcon
                        className="font-awesome"
                        icon={faLinkedin}
                        size="2x"
                        color="#ffad33"
                        onClick={() => openWeb("https://www.linkedin.com/in/yashasvi-kumar-7b2a78280")}
                    />
                </div>

                <div className="right-to-left">
                    <FontAwesomeIcon
                        className="font-awesome"
                        icon={faEnvelope}
                        size="2x"
                        color="#ffad33"
                        onClick={() => openWeb("mailto:yashasvi_23upe020@ug.nita.ac.in")}
                    />
                </div>

                <div className="right-to-left">
                    <FontAwesomeIcon
                        className="font-awesome"
                        icon={faGithub}
                        size="2x"
                        color="#ffad33"
                        onClick={() => openWeb("mailto:yashasvi_23upe020@ug.nita.ac.in")}
                    />
                </div>
            </div>
            <p className="signature">Made with {<FontAwesomeIcon icon={faHeart} color="#ffad33" />} by <i>Yashasvi Kumar</i>.</p>
        </div>
    );
};

export default Contact;
