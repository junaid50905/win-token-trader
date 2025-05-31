import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./../assets/css/Header.css";

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-light position-relative">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler d-sm-none"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarMenu"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <Link
                        className="navbar-brand mx-auto d-sm-inline d-block"
                        to={"/"}
                    >
                        <img src={Logo} alt="logo" height="70" width={"70"} />
                    </Link>

                    <div className="d-flex gap-2 order-sm-1">
                        <Link
                            to={"/login"}
                            className="btn btn-outline-primary rounded-pill d-none"
                        >
                            Login
                        </Link>
                        <Link
                            to={"/signup"}
                            className="btn btn-primary rounded-pill d-none"
                        >
                            Signup
                        </Link>
                        <button className="btn btn-primary rounded-pill">Deposit</button>
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

                    <div
                        className="collapse navbar-collapse justify-content-center navbar-center"
                        id="navbarMenu"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
