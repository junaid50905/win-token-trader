import React from "react";

import "./BuySellTab.css";

const BuySellTab = () => {
    return (
        <>
            <nav>
                <div
                    className="nav nav-tabs custom-tabs mb-3 px-3"
                    id="nav-tab"
                    role="tablist"
                >
                    <button
                        className="nav-link rounded me-1 active"
                        id="nav-buy-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-buy"
                        type="button"
                        role="tab"
                        aria-controls="nav-buy"
                        aria-selected="true"
                    >
                        Buy
                    </button>
                    <button
                        className="nav-link rounded ms-1"
                        id="nav-sell-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-sell"
                        type="button"
                        role="tab"
                        aria-controls="nav-sell"
                        aria-selected="false"
                    >
                        Sell
                    </button>
                </div>
            </nav>

            {/* Tab Content */}
            <div className="tab-content p-3 trade-content" id="nav-tabContent">
                <div
                    className="tab-pane fade show active"
                    id="nav-buy"
                    role="tabpanel"
                    aria-labelledby="nav-buy-tab"
                >
                    <div className="text-center">
                        <form action="">
                            {/* amount */}
                            <div className="input-group">
                                <span
                                    className="input-group-text amount_label"
                                    id="inputGroup-sizing-default"
                                >
                                    Amount
                                </span>

                                <input
                                    type="number"
                                    className="form-control amount"
                                    aria-label="Sizing example input"
                                    aria-describedby="inputGroup-sizing-default"
                                />
                            </div>

                            {/* time frame */}
                            <div className="d-flex align-items-center gap-4 mt-3 rounded timeframe">
                                <div className="pt-3 ps-3">
                                    <p>Timeframe: </p>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="time_frame"
                                        id="time_frame1"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="time_frame1"
                                    >
                                        1m
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="time_frame"
                                        id="time_frame2"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="time_frame2"
                                    >
                                        5m
                                    </label>
                                </div>

                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="time_frame"
                                        id="time_frame3"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="time_frame3"
                                    >
                                        1h
                                    </label>
                                </div>
                            </div>

                            <button className="btn buy-btn w-100 mt-3 buy_btn">
                                Buy Now
                            </button>
                        </form>
                    </div>
                </div>
                <div
                    className="tab-pane fade"
                    id="nav-sell"
                    role="tabpanel"
                    aria-labelledby="nav-sell-tab"
                >
                    <div className="text-center">
                        <h5>Sell Fartcoin</h5>
                        <p>Enter your amount and execute the trade.</p>
                        <button className="btn sell-btn w-100 sell_btn">
                            Sell Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BuySellTab;
