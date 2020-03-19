import React from "react";
import Table from "./Table";
import UserForm from "./UserForm";

const App = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="text-light mb-3">React Tutorial User List</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="text-light mb-3 mt-3">List of users</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Table/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h3 className="text-light mb-3 mt-3">Add a new user</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <UserForm/>
                </div>
            </div>
        </div>
    )
};

export default App