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
    {
      title: "LootMart",
      description:
        "LootMart is a fully functional e-commerce website that provides a seamless online shopping experience. It features user authentication, product listings, shopping cart functionality, and a secure payment gateway powered by Stripe. The platform is designed with a modern UI and responsive layout, ensuring smooth navigation across devices. The backend efficiently handles product management, user orders, and payment processing.",
      language: "Javascript",
      technologies: [
        "HTML",
        "Tailwind CSS",
        "ReactJS",
        "Stripe",
        "NodeJS",
        "ExpressJS",
        "MongoDB",
      ],
      frontend: "https://github.com/Johnvilin-Sibina/E-Commerce-Frontend",
      backend: "https://github.com/Johnvilin-Sibina/E-Commerce-Backend",
      deployedLink: "https://loot-mart.netlify.app/",
    },
    {
      title: "TaskBuddy",
      description:
        "TaskBuddy is a to-do app where users can register, log in, and manage their tasks effectively. Users can add, edit, and delete tasks seamlessly.",
      language: "JavaScript",
      technologies: [
        "HTML",
        "Tailwind CSS",
        "ReactJS",
        "NodeJS",
        "ExpressJs",
        "MongoDB",
      ],
      frontend: "https://github.com/Johnvilin-Sibina/Task-Manager-Frontend",
      backend: "https://github.com/Johnvilin-Sibina/Task-Manager-Backend",
      deployedLink: "https://my-task-buddy.netlify.app/",
    },
    {
      title: "TastyTrove",
      description:
        "TastyTrove is a recipe management app where users can explore and add their favorite recipes. The application provides secure authentication, an intuitive UI, and seamless recipe management. The application uses Cloudinary for image upload.",
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
      frontend: "https://github.com/Johnvilin-Sibina/Recipe-App-Frontend",
      backend: "https://github.com/Johnvilin-Sibina/Recipe-App-Backend",
      deployedLink: "https://tasty-trove-recipes.netlify.app/",
    },
  ];
  return (
    <div className="projects-container container">
      <h1 className="text-center projects-title">My Projects</h1>
      <div className="projects-cards">
        {projects.map((project, index) => (
          <div className="card project-card" key={index}>
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
              {project.technologies.map((technology, idx) => (
                <span key={idx} className="me-3">
                  {technology}
                </span>
              ))}
            </p>
            <div className="button-group">
              <a
                href={project.frontend}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-info me-3"
              >
                Frontend Code
              </a>
              <a
                href={project.backend}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-info me-3"
              >
                Backend Code
              </a>
              <a
                href={project.deployedLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-info me-3"
              >
                Live Site
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
