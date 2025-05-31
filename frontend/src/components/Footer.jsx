import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
    return (
        <footer className="bg-dark mt-5 py-2">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-8 col-sm-12 col-12">
                        <div className="d-flex gap-3 align-items-center">
                            <div className="logo">
                                <Link to={"/"}>
                                    <img
                                        src={Logo}
                                        alt="Axiom Logo"
                                        height="70"
                                        width={"70"}
                                    />
                                </Link>
                            </div>
                            <div className="copyright">
                                <h6 className="text-secondary">
                                    © 2025 WinToken Trader. All rights reserved.
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 col-12">
                        <div className="contact d-flex align-items-center justify-content-sm-center justify-content-center gap-3">
                            <h6 className="text-white">Contact Us</h6>
                            <div className="icons d-flex align-items-center">
                                <h3>
                                    <TiSocialFacebook
                                        className="text-info"
                                        style={{ cursor: "pointer" }}
                                    />
                                </h3>
                                <h3>
                                    <SlSocialInstagram
                                        className="text-danger"
                                        style={{ cursor: "pointer" }}
                                    />
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
