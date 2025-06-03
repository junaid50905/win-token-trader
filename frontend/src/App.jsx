import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MainLayout from "./components/layouts/MainLayout";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Discover from "./pages/Discover";
import TokenDetails from "./pages/TokenDetails";

import "./App.css";
import AccountAndSecurity from "./pages/AccountAndSecurity";
import Wallet from "./pages/Wallet";
import Home from "./pages/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    {/* <Route path="/discover" element={<Discover />} /> */}
                    <Route
                        path="/discover/:id/token"
                        element={<TokenDetails />}
                    />
                    <Route
                        path="/account-and-security"
                        element={<AccountAndSecurity />}
                    />
                    <Route path="/wallet" element={<Wallet />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </Router>
    );
}

export default App;
