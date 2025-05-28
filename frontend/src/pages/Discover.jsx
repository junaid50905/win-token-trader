import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

const columns = [
    {
        name: "Token",
        selector: (row) => row.token_name,
        sortable: true,
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
            <Link to={`/discover/${row.id}/token`} className="btn btn-sm btn-primary rounded">
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
    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-body">
                    <DataTable
                        title="Discover Tokens"
                        columns={columns}
                        data={data}
                        pagination
                        highlightOnHover
                    />
                </div>
            </div>
        </div>
    );
};

export default Discover;
