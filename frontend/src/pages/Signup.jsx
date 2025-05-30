import { useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../assets/css/login-signup.css";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <section className="login-signup-form bg-white">
            <div className="login-main">
                <div className="login-left">
                    <img src={Image} alt="" />
                </div>
                <div className="login-right">
                    <div className="login-right-container">
                        <div className="login-center">
                            <h2>Sign Up</h2>
                            <p>Please enter your details</p>
                            <p>
                                Go to home pae <Link to={"/"}>Home</Link>
                            </p>
                            <form>
                                <input type="name" placeholder="Name" />

                                <input type="email" placeholder="Email" />

                                <div className="pass-input-div">
                                    <input
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        placeholder="Password"
                                    />
                                    {showPassword ? (
                                        <FaEyeSlash
                                            onClick={() => {
                                                setShowPassword(!showPassword);
                                            }}
                                        />
                                    ) : (
                                        <FaEye
                                            onClick={() => {
                                                setShowPassword(!showPassword);
                                            }}
                                        />
                                    )}
                                </div>

                                <div className="pass-input-div">
                                    <input
                                        type={
                                            showConfirmPassword
                                                ? "text"
                                                : "password"
                                        }
                                        placeholder="Confirm password"
                                    />
                                    {showConfirmPassword ? (
                                        <FaEyeSlash
                                            onClick={() => {
                                                setShowConfirmPassword(
                                                    !showConfirmPassword
                                                );
                                            }}
                                        />
                                    ) : (
                                        <FaEye
                                            onClick={() => {
                                                setShowConfirmPassword(
                                                    !showConfirmPassword
                                                );
                                            }}
                                        />
                                    )}
                                </div>

                                <div className="login-center-buttons mt-0">
                                    <button type="button">Sign up</button>
                                    <button type="button">
                                        <img src={GoogleSvg} alt="" />
                                        Log In with Google
                                    </button>
                                </div>
                            </form>
                            <p className="login-bottom-p mt-3">
                                Already have an account?{" "}
                                <Link to={"/login"}>Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
