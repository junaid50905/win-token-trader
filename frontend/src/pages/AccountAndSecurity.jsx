import React from "react";
import "../assets/css/account-and-security.css";

const AccountAndSecurity = () => {
    return (
        <>
            <section>
                <div className="container-fluid py-5">
                    <div className="row">
                        <div className="col-md-3 col-sm-4 col-4 border-end">
                            <div
                                className="nav flex-column nav-pills"
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
                                <button
                                    className="nav-link"
                                    id="billing-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#billing"
                                    type="button"
                                    role="tab"
                                >
                                    Billing
                                </button>
                                <button
                                    className="nav-link"
                                    id="notifications-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#notifications"
                                    type="button"
                                    role="tab"
                                >
                                    Notifications
                                </button>
                                <button
                                    className="nav-link"
                                    id="integrations-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#integrations"
                                    type="button"
                                    role="tab"
                                >
                                    Integrations
                                </button>
                                <button
                                    className="nav-link"
                                    id="beta-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#beta"
                                    type="button"
                                    role="tab"
                                >
                                    Beta features
                                </button>
                            </div>
                        </div>

                        <div className="col-md-9 col-sm-8 col-8">
                            <div
                                className="tab-content"
                                id="v-pills-tabContent"
                            >
                                <div
                                    className="tab-pane fade show active section-box"
                                    id="general"
                                    role="tabpanel"
                                >
                                    <div className="title-bar d-flex justify-content-between align-items-center">
                                        <div>
                                            <strong>
                                                Your application is currently on
                                                the free plan
                                            </strong>
                                            <br />
                                            <small>
                                                Paid plans offer higher usage
                                                limits, additional branches, and
                                                more.
                                            </small>
                                        </div>
                                        <div>
                                            <button className="btn btn-outline-secondary btn-sm">
                                                Chat to us
                                            </button>
                                            <button className="btn btn-primary btn-sm">
                                                View plans
                                            </button>
                                        </div>
                                    </div>

                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value="Untitled UI"
                                            />
                                            <input
                                                type="text"
                                                className="form-control mt-2"
                                                disabled
                                                value="untitledui-staging.com/untitledui"
                                            />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">
                                                Default branch
                                            </label>
                                            <select className="form-select">
                                                <option selected>
                                                    Main branch 👩🏽‍💻
                                                    @jackieholland
                                                </option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">
                                                Tagline
                                            </label>
                                            <textarea
                                                className="form-control"
                                                rows="2"
                                                maxlength="80"
                                            >
                                                Untitled UI is the ultimate
                                                Figma UI kit and design system
                                                to kickstart any project,
                                                startup, or freelance designer.
                                            </textarea>
                                            <small className="text-muted">
                                                40 characters left
                                            </small>
                                        </div>
                                    </form>
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
                                <div
                                    className="tab-pane fade section-box"
                                    id="billing"
                                    role="tabpanel"
                                >
                                    Billing info...
                                </div>
                                <div
                                    className="tab-pane fade section-box"
                                    id="notifications"
                                    role="tabpanel"
                                >
                                    Notifications...
                                </div>
                                <div
                                    className="tab-pane fade section-box"
                                    id="integrations"
                                    role="tabpanel"
                                >
                                    Integrations...
                                </div>
                                <div
                                    className="tab-pane fade section-box"
                                    id="beta"
                                    role="tabpanel"
                                >
                                    Beta features...
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
