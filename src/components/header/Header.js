import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import useAuth from "../../Hooks/useAuth";
import logo from "../../images/logo.png";

import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <>
      <div className="header">
        <img className="w-25 mt-5" src={logo} alt="" />
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary mt-5">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink
                  activeStyle={{ color: "white" }}
                  className="nav-link active"
                  aria-current="page"
                  to="/Shop"
                >
                  Shop
                </NavLink>
                <NavLink
                  activeStyle={{ color: "white" }}
                  className="nav-link"
                  to="/order"
                >
                  Order review
                </NavLink>
                <NavLink
                  activeStyle={{ color: "white" }}
                  className="nav-link"
                  to="/manage"
                >
                  Manage inventory here
                </NavLink>
                {user?.displayName && (
                  <h5 className="nav-link">{user?.displayName}</h5>
                )}
                {!user?.displayName ? (
                  <NavLink
                    activeStyle={{ color: "white" }}
                    className="nav-link"
                    to="/login"
                  >
                    Login
                  </NavLink>
                ) : (
                  <button onClick={logOut} className="nav-link btn btn-warning">
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </div>
      
    </>
  );
};

export default Header;
