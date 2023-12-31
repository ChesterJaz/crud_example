import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary shadow p-3">
      <div class="container">
        <Link class="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/contact-us">
                Contact
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about-us">
                About
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/student">
                Student
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
