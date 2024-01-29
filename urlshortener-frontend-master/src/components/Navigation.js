import React from "react";
import { useNavigate } from "react-router";

import { Link, NavLink } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const publicNavigationLinks = [
  { linkName: "Signin", linkTo: "/signin" },
  { linkName: "Signup", linkTo: "/signup" },
  { linkName: "ForgotPassword", linkTo: "/ForgotPassword" },
];

const protectedNavLinks = [
  { linkName: "Dashboard", linkTo: "/dashboard" },
  { linkName: "CreateShortUrl", linkTo: "/createUrlShorts" },
  { linkName: "Summary", linkTo: "/summary" },
];

const Navigation = () => {
  const [, updateToken, authCheck] = useAuth();

  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
        <div className="container-fluid">
          <Link className="navbar-brand text-success p-3" to="/">
            UrlShortsApp
          </Link>
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
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              {authCheck()
                ? protectedNavLinks.map(({ linkName, linkTo }) => {
                    return (
                      <NavLink
                        key={linkName}
                        className={(nav) =>
                          nav.isActive
                            ? "active nav-link text-primary"
                            : "nav-link"
                        }
                        to={linkTo}
                      >
                        {linkName}
                      </NavLink>
                    );
                  })
                : publicNavigationLinks.map(({ linkName, linkTo }) => {
                    return (
                      <NavLink
                        key={linkName}
                        className={(nav) =>
                          nav.isActive
                            ? "active nav-link text-primary"
                            : "nav-link"
                        }
                        to={linkTo}
                      >
                        {linkName}
                      </NavLink>
                    );
                  })}
              {authCheck() && (
                <button
                  className="rounded btn btn-outline-danger mx-3"
                  onClick={() => {
                    updateToken(null);
                    navigate("/signin");
                  }}
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
