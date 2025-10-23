import React from "react";
import "./About.css";
import AboutStamp from "../../assets/about-stamp.svg"


const About = () => {
    return (
        <div id="#0" className="about-content">
            <div className="head-wideline">
                <div className="heading hiderx">About Me</div>
                <div className="wideline right-to-left"></div>
            </div>
            <div className="typography hiderx">
                <div>
                    <p>Welcome to my engineering portfolio!</p>
                    <br />
                    I'm Yashasvi Kumar, a CFD Engineer with domain expertise in Heat Transfer and Combustion. 
                    Currently pursuing B.Tech in Production Engineering at National Institute of Technology, Agartala (2023-Present).
                    My work focuses on understanding and simulating complex fluid–thermal phenomena to develop 
                    efficient and innovative engineering solutions.
                    <br />
                    <br />
                    I specialize in applying numerical methods, high-fidelity simulations, and physical insight 
                    to analyze problems involving turbulent flows, multiphase interactions, and reactive systems. 
                    Driven by curiosity and a passion for fluid physics, I combine computational analysis, 
                    theoretical modeling, and experimental validation to bridge the gap between simulation and real-world performance.
                    <br />
                    <br />
                    My current interests include combustion dynamics, thermal management, propulsion systems, 
                    and energy-efficient designs. I'm passionate about using computational fluid dynamics to 
                    solve real-world engineering challenges and contribute to sustainable technology development.
                    <br />
                    <br />
                    Scroll down to explore my work and achievements!
                </div>
                <img src={AboutStamp} style= {{
                    padding: "1rem",
                    width: "100%",
                    height: "100%",

                }} />
            </div>
        </div>
    );
};

export default About;
