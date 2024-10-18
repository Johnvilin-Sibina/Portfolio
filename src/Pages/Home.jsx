import React from "react";
import { FaGithub } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container container-lg">
      <div className="row">
        <div className="col-lg-8 col-md-6 col-sm-12">
          <h1>Hello!🙋‍♀️</h1>
          <h2>
            I'm <span className="name">Johnvilin Sibina</span>
          </h2>
          <p className="position">Full Stack Developer(MERN)</p>
          <div className="d-flex justify-content-evenly">
            <a
              href="https://github.com/Johnvilin-Sibina"
              target="_blank"
              className="github"
            >
              <FaGithub size={45} title="GitHub" className="github-logo" />
            </a>
            <a
              href=""
              target="_blank"
              className="btn btn-outline-success resume-button"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div>
            <img src="../developer.png" className="developer-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
