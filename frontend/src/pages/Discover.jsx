import React from "react";
import DataTable from "react-data-table-component";

const columns = [
    {
        name: "Token",
        selector: (row) => row.name,
        sortable: true,
    },
    {
        name: "Price",
        selector: (row) => row.email,
    },
    {
        name: "Age",
        selector: (row) => row.role,
    },
];

const data = [
    { id: 1, name: "Junaid", email: "junaid@example.com", role: "Admin" },
    { id: 2, name: "Alex", email: "alex@example.com", role: "Editor" },
];

const Discover = () => {
    return (
        <div className="container mt-4">
            <DataTable
                title="Tokens"
                columns={columns}
                data={data}
                pagination
                highlightOnHover
                selectableRows
            />
        </div>
    );
};

export default Discover;
