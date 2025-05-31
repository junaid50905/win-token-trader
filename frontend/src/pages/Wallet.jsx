import React from "react";
import "../assets/css/Wallet.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiMining } from "react-icons/gi";

const Wallet = () => {
    return (
        <>
            <section>
                <div className="container-fluid">
                    <div className="row total_balance">
                        <div className="col-md-6 offset-md-3 my-2 p-3">
                            <div className="balance text-center text-white d-flex flex-column align-items-center gap-2 p-3">
                                <p className="text-secondary m-0">
                                    Total Balance
                                </p>
                                <h3 className="m-0">৳12,490</h3>
                                <button
                                    className="btn btn-sm invitation_btn rounded-pill d-flex justify-content-between align-items-center"
                                    style={{ width: "250px" }}
                                >
                                    <span>Invite Friends Get ৳50</span>
                                    <span>
                                        <FaArrowRightLong />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="row latest_deposit_history">
                        <div className="col-md-8 my-1">
                            <div className="left">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 col-6">
                                        <div className="d-flex justify-content-between text-white one bg-info rounded p-2 my-1">
                                            <div>
                                                <h4 className="m-0">৳1,200</h4>
                                                <p>Total Mining</p>
                                            </div>
                                            <span>
                                                <GiMining />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-6">
                                        <div className="d-flex justify-content-between text-white two rounded p-2 my-1">
                                            <div>
                                                <h4 className="m-0">৳1.9K</h4>
                                                <p>Total Networth</p>
                                            </div>
                                            <span>
                                                <GiMining />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-6">
                                        <div className="d-flex justify-content-between text-white three rounded p-2 my-1">
                                            <div>
                                                <h4 className="m-0">৳1,2K</h4>
                                                <p>Earnings</p>
                                            </div>
                                            <span>
                                                <GiMining />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-6">
                                        <div className="d-flex justify-content-between text-white four rounded p-2 my-1">
                                            <div>
                                                <h4 className="m-0">৳490</h4>
                                                <p>Harvested Losses</p>
                                            </div>
                                            <span>
                                                <GiMining />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 my-1">
                            <div className="right bg-white rounded">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="text-dark mb-3">
                                            Latest Deposit History
                                        </h5>
                                        <table class="table">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex">
                                                            <img
                                                                src="https://www.logo.wine/a/logo/BKash/BKash-bKash-Logo.wine.svg"
                                                                alt=""
                                                                className="img-fluid merchant_logo"
                                                            />
                                                            <div className="ms-2">
                                                                <h5 className="m-0 p-0 text-muted">
                                                                    Bkash
                                                                </h5>
                                                                <p className="text-secondary m-0 p-0">
                                                                    12-May-2025
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5>৳1,200</h5>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div className="d-flex">
                                                            <img
                                                                src="https://www.logo.wine/a/logo/Nagad/Nagad-Logo.wine.svg"
                                                                alt=""
                                                                className="img-fluid merchant_logo"
                                                            />
                                                            <div className="ms-2">
                                                                <h5 className="m-0 p-0 text-muted">
                                                                    Nagad
                                                                </h5>
                                                                <p className="text-secondary m-0 p-0">
                                                                    12-May-2025
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5>৳2,000</h5>
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        <div className="d-flex">
                                                            <img
                                                                src="https://www.logo.wine/a/logo/BKash/BKash-bKash-Logo.wine.svg"
                                                                alt=""
                                                                className="img-fluid merchant_logo"
                                                            />
                                                            <div className="ms-2">
                                                                <h5 className="m-0 p-0 text-muted">
                                                                    Bkash
                                                                </h5>
                                                                <p className="text-secondary m-0 p-0">
                                                                    12-May-2025
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <h5>৳1,000</h5>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Wallet;
