import React from "react";
import "./Techstack.css";

const Techstack = () => {
    const dev = [
        "python",
        "c",
        "java",
        "javascript",
        "html",
        "css",
        "react",
        "node-js",
        "figma",
        "git",
        "github",
        "chartjs",
        "mongodb",
    ];
    return (
        <div className="content">
            <div className="head-wideline">
                <div className="tech-heading hiderx">My Skills</div>
                <div className="wideline right-to-left"></div>
            </div>
            <div className="tech-content hiderx">
                <p>
                    I specialize in computational fluid dynamics and thermal engineering, using advanced simulation tools 
                    and programming languages to solve complex engineering problems. Always eager to explore new 
                    technologies and methodologies!
                </p>
                <div className="info-wrapper">
                    <Techinfo techList={dev} />
                </div>
            </div>
        </div>
    );
};

const Techinfo = ({ techList }) => {
    var animationStyle = "left-to-right";
    return (
        <div className="tech-info">
            <div className="tech-icons hiderx">
                {techList.map((value, index) => {
                    return (
                        <div
                            key={value}
                            style={{ opacity: "0", animationDelay: `${index * 0.1}s` }}
                            className={animationStyle}
                        >
                            <img src={`/assets/tech-stack/${value}.svg`} alt={value} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Techstack;
