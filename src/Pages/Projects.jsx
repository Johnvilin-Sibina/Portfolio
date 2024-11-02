import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Role Based Access Control System",
      description:
        "The Role-Based Access Control (RBAC) Corporate Intranet Portal is a comprehensive system designed to manage user roles, permissions, and access control within an organization. Built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), this portal streamlines internal operations by enabling administrators to control user access based on their roles.",
      language: "Javascript",
      technologies: [
        "HTML",
        "CSS",
        "Bootstrap",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
      ],
      frontend:
        "https://github.com/Johnvilin-Sibina/Role-Based-Accessed-Control-System-Frontend",
      backend:
        "https://github.com/Johnvilin-Sibina/Role-Based-Access-Control-System-Backend",
      deployedLink: "https://beamish-buttercream-3f70ca.netlify.app/",
    },
  ];
  return (
    <div className="projects-container container">
      <h1 className="text-center projects-title">My Projects</h1>
      <div className="projects-cards row">
        {projects.map((project, index) => {
          return (
            <div className="card col project-card" key={index}>
              <h3 className="text-center heading">{project.title}</h3>
              <p>
                <b className="sub-heading">Description: </b>
                {project.description}
              </p>
              <p>
                <b className="sub-heading">Language Used: </b>
                {project.language}
              </p>
              <p>
                <b className="sub-heading">Technologies Used: </b>
                {project.technologies.map((technology, index) => {
                  return (
                    <span key={index} className="me-3">
                      {technology}
                    </span>
                  );
                })}
              </p>
              <div className="d-flex justify-content-end">
                <a
                  href={project.frontend}
                  target="_blank"
                  className="btn btn-outline-info me-3"
                >
                  Frontend Code
                </a>
                <a
                  href={project.backend}
                  target="_blank"
                  className="btn btn-outline-info me-3"
                >
                  Backend Code
                </a>
                <a
                  href={project.deployedLink}
                  target="_blank"
                  className="btn btn-outline-info me-3"
                >
                  Site
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
