import React from "react";
import TableHeader from "./TableHead";
import TableBody from "./TableBody";

const Table = () => {
    return (
        <table className="table table-bordered table-striped table-dark table-hover">
            <TableHeader/>
            <TableBody/>
        </table>
    );
};

export default Table;