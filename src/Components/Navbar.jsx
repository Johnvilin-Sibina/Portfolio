import React from "react";
import { TbHexagonLetterJ } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const location = useLocation();

  const activePath = (path) => {
    return location.pathname === path
      ? {
          backgroundColor: "aqua",
          color: "white",
          borderRadius: "5px",
          padding: "8px 16px",
        }
      : { color: "aqua" };
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <TbHexagonLetterJ size={"2.6rem"} className="jicon" />
          <Link className="navbar-brand" to="/">
            Johnvilin Sibina
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" style={activePath("/")}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={activePath("/about")}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/skills"
                style={activePath("/skills")}
              >
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/projects"
                style={activePath("/projects")}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                style={activePath("/contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
