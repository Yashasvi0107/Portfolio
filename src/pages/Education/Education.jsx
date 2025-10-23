import { React, useRef, useEffect } from "react";
import "./Education.css";

const School = {
    degree: "Higher Secondary Education / Grade 10",
    institution: "St. Michael's School, Ranchi",
    branch: "CBSE",
    duration: "July 2020",
    bullets: [
        "Achieved 96.4% in CBSE Grade 10 examinations.",
        "Strong foundation in Mathematics, Physics, and Chemistry.",
        "Active participation in school activities and competitions.",
    ],
};

const SeniorSecondary = {
    degree: "Senior Secondary Education",
    institution: "Jawahar Vidya Mandir, Shyamali, Ranchi",
    branch: "CBSE (Mathematics/Physics/Chemistry)",
    duration: "Mar 2022",
    bullets: [
        "Achieved 80.6% in CBSE Senior Secondary examinations.",
        "Specialized in Science stream with focus on core subjects.",
        "Developed strong analytical and problem-solving skills.",
    ],
};
const College = {
    degree: "B.Tech - Production Engineering",
    institution: "National Institute of Technology, Agartala",
    branch: "Production Engineering",
    duration: "Aug 2023 - Present",
    bullets: [
        "Current CGPA: 7.93/10.00",
        "Specializing in Computational Fluid Dynamics (CFD) and Heat Transfer",
        "Focus on combustion dynamics and thermal management systems",
        "Active in engineering projects and research activities",
    ],
};

const Education = () => {
    return (
        <div id="#1" className="edu-content">
            <div className="head-wideline">
                <div className="heading hiderx">Education</div>
                <div className="wideline right-to-left"></div>
            </div>
            <div className="all-cards">
                <Educard data={School} />
                <Educard data={SeniorSecondary} />
                <Educard data={College} />
            </div>
        </div>
    );
};

export const Educard = ({ data }) => {
    return (
        <div className="card-wrapper">
            <div className="card-header right-to-left">
                <div className="headlines right-to-left">
                    <div className="degree right-to-left">{data.degree}</div>
                    <div className="institution right-to-left">{data.institution}</div>
                    {data.projects ? (
                        data.projects.map((p) => {
                            return (
                                <div className="byline-info right-to-left">
                                    <div>{p.project}</div>
                                    <div>{p.duration}</div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="byline-info right-to-left">
                            <div>{data.branch}</div>
                            <div>{data.duration}</div>
                        </div>
                    )}
                </div>
            </div>
            <div className="bullets right-to-left">
                <menu>
                    {data.bullets?.map((value, index) => {
                        return (
                            <li style={{ animationDelay: `${index * 0.1}s` }} key={index} className="right-to-left">
                                {value}
                            </li>
                        );
                    })}
                </menu>
                
            </div>
        </div>
    );
};

export default Education;
