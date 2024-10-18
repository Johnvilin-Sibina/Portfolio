import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>
        <span className="about-title">About Me</span>
      </h1>
      <p className="about-description">
        I am a dedicated full-stack developer with a passion for creating
        applications that provide real-world solutions. I thrive on challenges
        and enjoy learning new technologies to stay at the forefront of the
        ever-evolving tech landscape.With a strong foundation in both front-end
        and back-end technologies, I am eager to contribute my skills and
        collaborate with others to build meaningful products.
      </p>
      <h2>
        <span className="sub-title">Work Philosophy</span>
      </h2>
      <p className="about-description">
        I believe in writing clean, maintainable code and value teamwork and
        continuous learning. Collaboration and clear communication are key to
        building products that deliver exceptional user experiences. My approach
        emphasizes efficiency, problem-solving, and adaptability in fast-paced
        environments.
      </p>
      <h2>
        <span className="sub-title">Certifications</span>
      </h2>
      <ul className="certification-description">
        <li>MERN Full Stack Development, 2024</li>
        <li>Junior Grade English Typewriting, 2023</li>
      </ul>
    </div>
  );
};

export default About;
