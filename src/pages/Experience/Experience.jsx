import React from "react";
import "./Experience.css";
import { Educard } from "../Education/Education";


const Experience = () => {
    return (
        <div
            id="#3"
            className="content"
            style={{
                padding: "3rem 0",
            }}
        >
            <div className="head-wideline">
                <div className="heading hiderx">Experience</div>
                <div className="wideline right-to-left"></div>
            </div>
            <div className="exp-data">
                <Educard
                    data={{
                        degree: "CFD Research Projects",
                        branch: "Computational Fluid Dynamics & Heat Transfer Research",
                        duration: "2023 - Present",
                        bullets: [
                            "Conducted advanced CFD simulations using ANSYS Fluent and OpenFOAM for combustion analysis.",
                            "Developed numerical models for turbulent flow and heat transfer in complex geometries.",
                            "Analyzed thermal management systems for electronic cooling applications.",
                        ],
                    }}
                />
                <Educard
                    data={{
                        degree: "Production Engineering Studies",
                        branch: "B.Tech Production Engineering · NIT Agartala",
                        duration: "Aug 2023 - Present",
                        bullets: [
                            "Specialized coursework in Fluid Mechanics, Heat Transfer, and Thermodynamics.",
                            "Hands-on experience with CAD software and manufacturing processes.",
                            "Current CGPA: 7.93/10.00 with focus on thermal engineering applications.",
                        ],
                    }}
                />
            </div>
        </div>
    );
};

const Expcard = ({ data }) => {
    const openWeb = () => {
        window.open(data.companyWeb, "_blank");
    };
    return (
        <div className="exp-wrapper hiderx">
            <div className="company">
                <div className="company-icon left-to-right">
                    <img src={data.logo} alt="company-logo" />
                </div>
                <div onClick={openWeb} className="company-name left-to-right">
                    {data.company}
                </div>
                <div className="duration left-to-right">{data.duration}</div>
            </div>
            <div className="exp-text">
                <div className="exp-headlines">{data.role}</div>
                <div className="description right-to-left">{data.description}</div>
                <div className="techstack">
                    {data.tech.map((value, index) => {
                        return (
                            <div className="tech right-to-left" key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                                {value}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Experience;
