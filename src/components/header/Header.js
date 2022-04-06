import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="w-25 mt-5" src={logo} alt="" />
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary mt-5">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a
                class="nav-link active"
                aria-current="page"
                href="/Shop"
              >
                Shop
              </a>
              <a class="nav-link" href="/order">
                Order review
              </a>
              <a class="nav-link" href="/manage">
                Manage inventory here
              </a>
            </div>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-light bg-dark">
        <div class="container-fluid">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            ></input>
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
