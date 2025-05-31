import React from "react";
import "../assets/css/Wallet.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { GiMining } from "react-icons/gi";

const cryptoData = [
    {
        name: "Bitcoin",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSEEUJQPS_ARZeaL2PTiA5K0qDjwFzMoVQA&s",
    },
    {
        name: "Ethereum",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJDn0ojTITvcdAzMsfBMJaZC4STaDHzduleQ&s",
    },
    {
        name: "Cardano",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLdd9WfS3QIH6smKyelNNojxodAJk9w03ZmA&s",
    },
    {
        name: "Binance",
        image: "https://www.logo.wine/a/logo/Binance/Binance-Icon-Logo.wine.svg",
    },
    {
        name: "Solana",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjIvM673VAt0gkNsT-fxwMLsNeoepMWuxhLw&s",
    },
];

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

                    <div className="row">
                        <div className="col-md-12 my-1">
                            <div className="left">
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 col-6">
                                        <div className="d-flex justify-content-between text-white one rounded p-2 my-1">
                                            <div>
                                                <h4 className="m-0">৳1.9K</h4>
                                                <p className="text-secondary">
                                                    Total Networth
                                                </p>
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
                                                <p className="text-secondary">
                                                    Total Networth
                                                </p>
                                            </div>
                                            <span>
                                                <GiMining />
                                            </span>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-6">
                                        <div className="d-flex justify-content-between text-white three rounded p-2 my-1">
                                            <div>
                                                <h4 className="m-0">৳1.2K</h4>
                                                <p className="text-secondary">
                                                    Earnings
                                                </p>
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
                                                <p className="text-secondary">
                                                    Harvested Losses
                                                </p>
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
                                        <table className="table">
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
                        <div className="col-md-8 my-1">
                            <div className="right bg-white rounded">
                                <div className="card">
                                    <div className="card-body">
                                        <ul
                                            className="nav nav-pills mb-3 border-bottom border-2"
                                            id="pills-tab"
                                            role="tablist"
                                        >
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className="nav-link text-primary fw-semibold active position-relative"
                                                    id="pills-home-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-home"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-home"
                                                    aria-selected="true"
                                                >
                                                    Buy
                                                </button>
                                            </li>
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className="nav-link text-primary fw-semibold position-relative"
                                                    id="pills-profile-tab"
                                                    data-bs-toggle="pill"
                                                    data-bs-target="#pills-profile"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="pills-profile"
                                                    aria-selected="false"
                                                >
                                                    Sell
                                                </button>
                                            </li>
                                        </ul>
                                        <div
                                            className="tab-content p-3 text-danger"
                                            id="pills-tabContent"
                                        >
                                            <div
                                                className="tab-pane fade show active"
                                                id="pills-home"
                                                role="tabpanel"
                                                aria-labelledby="pills-home-tab"
                                            >
                                                <div className="table-responsive">
                                                    <table
                                                        className="table table-hover align-middle shadow-sm rounded"
                                                        style={{
                                                            borderRadius:
                                                                "10px",
                                                            overflow: "hidden",
                                                        }}
                                                    >
                                                        <thead className="bg-light">
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Price</th>
                                                                <th>1M</th>
                                                                <th>5M</th>
                                                                <th>1H</th>
                                                                <th>Volume</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {cryptoData.map(
                                                                (
                                                                    coin,
                                                                    index
                                                                ) => (
                                                                    <tr
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        <td>
                                                                            <div className="d-flex align-items-center">
                                                                                <img
                                                                                    src={
                                                                                        coin.image
                                                                                    }
                                                                                    alt={
                                                                                        coin.name
                                                                                    }
                                                                                    width="24"
                                                                                    height="24"
                                                                                    className="me-2"
                                                                                />
                                                                                {
                                                                                    coin.name
                                                                                }
                                                                            </div>
                                                                        </td>
                                                                        <td>
                                                                            $17,044.22
                                                                        </td>
                                                                        <td className="text-success">
                                                                            +7.4%
                                                                        </td>
                                                                        <td className="text-success">
                                                                            +7.4%
                                                                        </td>
                                                                        <td className="text-danger">
                                                                            -2.3%
                                                                        </td>
                                                                        <td>
                                                                            $4.97M
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div
                                                className="tab-pane fade"
                                                id="pills-profile"
                                                role="tabpanel"
                                                aria-labelledby="pills-profile-tab"
                                            >
                                                <h2>Sell</h2>
                                            </div>
                                        </div>
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
