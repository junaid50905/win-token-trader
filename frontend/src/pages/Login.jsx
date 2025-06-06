import { useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "../assets/css/login-signup.css";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <div className="login-main bg-white">
                <div className="login-left">
                    <img src={Image} alt="" />
                </div>
                <div className="login-right">
                    <div className="login-right-container">
                        <div className="login-center">
                            <h2>Welcome back!</h2>
                            <p>Please enter your details</p>
                            <p>
                                Go to home pae <Link to={"/"}>Home</Link>
                            </p>

                            <form>
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

                                <div className="login-center-options">
                                    <div className="remember-div">
                                        <input
                                            type="checkbox"
                                            id="remember-checkbox"
                                        />
                                        <label htmlFor="remember-checkbox">
                                            Remember for 30 days
                                        </label>
                                    </div>
                                    <a href="#" className="forgot-pass-link">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="login-center-buttons">
                                    <button type="button">Log In</button>
                                    <button type="button">
                                        <img src={GoogleSvg} alt="" />
                                        Log In with Google
                                    </button>
                                </div>
                            </form>
                            <p className="login-bottom-p mt-3">
                                Don't have an account?{" "}
                                <Link to={"/signup"}>Login</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
