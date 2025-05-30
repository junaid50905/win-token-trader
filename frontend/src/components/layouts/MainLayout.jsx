import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

export default function MainLayout() {
    return (
        <>
            <Header />
            <div className="wrapper">
                <main className="main-content">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
}
