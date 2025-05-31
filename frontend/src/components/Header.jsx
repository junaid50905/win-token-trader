import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./../assets/css/Header.css";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
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
                        <img
                            src={Logo}
                            alt="Axiom Logo"
                            height="70"
                            width={"70"}
                        />
                    </NavLink>

                    {/* Right: Login & Signup */}
                    <div className="d-flex d-lg-none gap-2">
                        <Link
                            className="btn btn-dark btn-sm rounded-pill px-3 d-none"
                            to="/login"
                        >
                            Login
                        </Link>
                        <Link
                            className="btn btn-primary btn-sm rounded-pill px-3 d-none"
                            to="/signup"
                        >
                            Signup
                        </Link>
                    </div>

                    {/* Collapsible nav links (only visible when toggled) */}
                    <div
                        className="collapse navbar-collapse mt-3 mt-lg-0"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 ms-sm-5 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Discover
                                </NavLink>
                            </li>
                        </ul>

                        {/* Right nav for large screens */}
                        <ul className="navbar-nav ms-auto d-none d-lg-flex align-items-center gap-2">
                            <li className="nav-item d-none">
                                <Link
                                    className="btn btn-dark rounded-pill px-4"
                                    to="/login"
                                >
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item d-none">
                                <Link
                                    className="btn btn-primary rounded-pill px-4"
                                    to="/signup"
                                >
                                    Signup
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* user profile */}
                    <div className="ms-2">
                        <div className="dropdown">
                            <button
                                className="btn p-0 border-0 bg-transparent dropdown-toggle"
                                type="button"
                                id="profileDropdown"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                                    alt="Profile"
                                    className="rounded-circle"
                                    height="40"
                                    width="40"
                                />
                            </button>

                            <ul
                                className="dropdown-menu dropdown-menu-end"
                                aria-labelledby="profileDropdown"
                            >
                                <li>
                                    <Link
                                        to={"/account-and-security"}
                                        className="dropdown-item"
                                    >
                                        Account and Security
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={"/wallet"}
                                        className="dropdown-item"
                                    >
                                        Wallet
                                    </Link>
                                </li>
                                <li className="border-top">
                                    <a
                                        className="dropdown-item text-danger fw-bold"
                                        href="#"
                                    >
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
