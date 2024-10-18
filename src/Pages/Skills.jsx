import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { SiRedux, SiExpress, SiMongodb, SiPostman } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
import { IoDocument } from "react-icons/io5";
import "./Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML", icon: <FaHtml5 size="50" /> },
    { name: "CSS", icon: <FaCss3Alt size="50" /> },
    { name: "Javascript", icon: <DiJavascript1 size="55" /> },
    { name: "Bootstrap", icon: <FaBootstrap size="50" /> },
    { name: "React.js", icon: <FaReact size="50" /> },
    { name: "Redux", icon: <SiRedux size="50" /> },
    { name: "Node.js", icon: <FaNodeJs size="50" /> },
    { name: "Express.js", icon: <SiExpress size="50" /> },
    { name: "MongoDB", icon: <SiMongodb size="50" /> },
    { name: "MySQL", icon: <TbBrandMysql size="50" /> },
    { name: "Postman", icon: <SiPostman size="50" /> },
    { name: "API Documentation", icon: <IoDocument size="50" /> },
  ];
  return (
    <div className="skills-container text-center">
      <h1 className="skills-title">My Skills</h1>
      <div className="skills-cards">
        {skills.map((skill, index) => {
          return (
            <div key={index} className="card shadow-lg">
              {skill.icon}
              <h3>{skill.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
