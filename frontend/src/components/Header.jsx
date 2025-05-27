import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">

                    {/* Left: Burger menu */}
                    <button
                        className="navbar-toggler me-2"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Center: Logo */}
                    <NavLink className="navbar-brand mx-auto" to="/">
                        <h4 className="m-0">Logo</h4>
                    </NavLink>

                    {/* Right: Login & Signup */}
                    <div className="d-flex d-lg-none gap-2">
                        <Link className="btn btn-dark btn-sm rounded-pill px-3" to="/login">
                            Login
                        </Link>
                        <Link className="btn btn-primary btn-sm rounded-pill px-3" to="/signup">
                            Signup
                        </Link>
                    </div>

                    {/* Collapsible nav links (only visible when toggled) */}
                    <div className="collapse navbar-collapse mt-3 mt-lg-0" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/discover">
                                    Discover
                                </NavLink>
                            </li>
                        </ul>

                        {/* Right nav for large screens */}
                        <ul className="navbar-nav ms-auto d-none d-lg-flex align-items-center gap-2">
                            <li className="nav-item">
                                <Link className="btn btn-dark rounded-pill px-4" to="/login">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="btn btn-primary rounded-pill px-4" to="/signup">
                                    Signup
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Header;
