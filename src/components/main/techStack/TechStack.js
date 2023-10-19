import React from "react";

function TechStack() {
  return (
    <nav className="navbar navbar-light bg-light">
      <ul className="nav d-flex justify-content-between  w-100">
        <li className="nav-item">
          <a className="nav-link" href="/uiux">
            UI/UX
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/frontend">
            Frontend
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/backend">
            Backend
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/uiux">
            Database
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/uiux">
            Cloud & Devops
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/uiux">
            Quality Assurance
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default TechStack;
