import React from "react";
import DataTable from "react-data-table-component";
import { Link, useNavigate } from "react-router-dom";
import Bitcoin from "../assets/images/bitcoin.png";

const customStyles = {
    table: {
        style: {
            backgroundColor: "transparent",
            border: "1px solid #2d3436 !important",
            borderRadius: "5px",
            padding: "2px",
            marginBottom: "10px",
        },
    },
    header: {
        style: {
            backgroundColor: "#57606f",
            color: "#fff",
            fontSize: "22px",
            padding: "16px",
        },
    },
    headRow: {
        style: {
            backgroundColor: "#101114",
            color: "#696969",
        },
    },
    rows: {
        style: {
            backgroundColor: "#00000",
            color: "#fff",
            padding: "10px 0",
        },
        highlightOnHoverStyle: {
            backgroundColor: "#001208",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            outline: "none",
        },
    },
    pagination: {
        style: {
            backgroundColor: "#57606f",
            color: "#fff",
            borderTop: "1px solid #fff",
            padding: "12px",
        },
    },
};

const columns = [
    {
        name: "Token",
        selector: (row) => (
            <div
                className="d-flex align-items-center gap-2"
                style={{ minWidth: "220px", flexShrink: 0 }}
            >
                <div
                    style={{
                        width: "40px",
                        height: "40px",
                        flexShrink: 0,
                    }}
                >
                    <img
                        src="https://pbs.twimg.com/media/GrZTIqmXQAA2OpI.jpg"
                        alt="token"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "10%",
                        }}
                    />
                </div>
                <div className="token_title">
                    <h5 className="text-white mb-0">{row.token_name}</h5>
                    <p className="text-success fw-bold mb-0">1y</p>
                </div>
            </div>
        ),
        sortable: true,
        grow: 2, // Allows the column to grow a bit more if needed
        wrap: true, // Allows text to wrap if needed
    },

    {
        name: "Price",
        selector: (row) => row.price,
    },
    {
        name: "Age",
        selector: (row) => row.age,
    },
    {
        name: "Market Cap",
        selector: (row) => row.market_cap,
    },
    {
        name: "Liquidity ",
        selector: (row) => row.liquidity,
    },
    {
        name: "1m",
        cell: (row) => (
            <span
                style={{
                    color: parseFloat(row.one_minute) >= 0 ? "green" : "red",
                }}
            >
                {row.one_minute}
            </span>
        ),
    },
    {
        name: "5m",
        cell: (row) => (
            <span
                style={{
                    color: parseFloat(row.five_minute) >= 0 ? "green" : "red",
                }}
            >
                {row.five_minute}
            </span>
        ),
    },
    {
        name: "1h",
        cell: (row) => (
            <span
                style={{
                    color: parseFloat(row.one_hour) >= 0 ? "green" : "red",
                }}
            >
                {row.one_hour}
            </span>
        ),
    },
    {
        name: "Action",
        cell: (row) => (
            <Link
                to={`/discover/${row.id}/token`}
                className="btn btn-sm btn-success rounded"
            >
                Trade
            </Link>
        ),
    },
];

const data = Array.from({ length: 100 }, (_, i) => {
    const id = i + 1;
    return {
        id,
        token_name: `Bitcoin ${id}`,
        price: `$${(0.03817 + Math.random() * 0.01).toFixed(5)}`,
        market_cap: `$${(30 + Math.random() * 10).toFixed(1)}M`,
        age: `${Math.floor(Math.random() * 48)}h`,
        liquidity: `$${(2 + Math.random() * 1).toFixed(2)}M`,
        one_minute: `${(
            Math.random() *
            10 *
            (Math.random() > 0.5 ? 1 : -1)
        ).toFixed(2)}%`,
        five_minute: `${(
            Math.random() *
            10 *
            (Math.random() > 0.5 ? 1 : -1)
        ).toFixed(2)}%`,
        one_hour: `${(
            Math.random() *
            10 *
            (Math.random() > 0.5 ? 1 : -1)
        ).toFixed(2)}%`,
    };
});

const Discover = () => {
    const navigate = useNavigate(); // ← use hook

    return (
        <div className="mt-4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <div className="tokens-table m-5">
                            <h4 className="text-white">Discover Tokens</h4>
                            <DataTable
                                columns={columns}
                                data={data}
                                pagination
                                highlightOnHover
                                customStyles={customStyles}
                                onRowClicked={(row) =>
                                    navigate(`/discover/${row.id}/token`)
                                }
                                paginationPerPage={15}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
