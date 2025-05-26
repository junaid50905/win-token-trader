import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="">
                <nav className="navbar navbar-expand-sm bg-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to={"/"}>
                            <h3>Logo</h3>
                        </NavLink>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            {/* left nav */}
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link active"
                                        aria-current="page"
                                        to={"/discover"}
                                    >
                                        Discover
                                    </NavLink>
                                </li>
                            </ul>

                            {/* right nav */}
                            <ul className="navbar-nav ms-auto d-flex align-items-center gap-2">
                                <li className="nav-item">
                                    <Link class="btn btn-primary rounded-pill px-4">
                                        Deposit
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        class="btn btn-dark rounded-pill px-4"
                                        to={"/login"}
                                    >
                                        Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        class="btn btn-primary rounded-pill px-4"
                                        to={"/signup"}
                                    >
                                        Signup
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;
