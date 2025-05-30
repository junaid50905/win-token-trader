import React from "react";
import "../assets/css/account-and-security.css";

const AccountAndSecurity = () => {
    return (
        <>
            <section>
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-12">
                            <div
                                className="nav flex-sm-column nav-pills mb-sm-0 mb-3"
                                id="v-pills-tab"
                                role="tablist"
                            >
                                <button
                                    className="nav-link active"
                                    id="general-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#general"
                                    type="button"
                                    role="tab"
                                >
                                    General
                                </button>
                                <button
                                    className="nav-link"
                                    id="admins-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#administrators"
                                    type="button"
                                    role="tab"
                                >
                                    Administrators
                                </button>
                                <button
                                    className="nav-link"
                                    id="password-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#password"
                                    type="button"
                                    role="tab"
                                >
                                    Password
                                </button>
                                <button
                                    className="nav-link"
                                    id="team-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#team"
                                    type="button"
                                    role="tab"
                                >
                                    Team
                                </button>
                                <button
                                    className="nav-link"
                                    id="plans-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#plans"
                                    type="button"
                                    role="tab"
                                >
                                    Plans
                                </button>
                            </div>
                        </div>

                        <div className="col-md-9 col-sm-8 col-12">
                            <div
                                className="tab-content"
                                id="v-pills-tabContent"
                            >
                                <div
                                    className="tab-pane fade show active section-box"
                                    id="general"
                                    role="tabpanel"
                                >
                                    General .....
                                </div>

                                <div
                                    className="tab-pane fade section-box"
                                    id="administrators"
                                    role="tabpanel"
                                >
                                    Administrators settings...
                                </div>

                                <div
                                    className="tab-pane fade section-box"
                                    id="password"
                                    role="tabpanel"
                                >
                                    Password settings...
                                </div>

                                <div
                                    className="tab-pane fade section-box"
                                    id="team"
                                    role="tabpanel"
                                >
                                    Team settings...
                                </div>

                                <div
                                    className="tab-pane fade section-box"
                                    id="plans"
                                    role="tabpanel"
                                >
                                    Plans...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AccountAndSecurity;
