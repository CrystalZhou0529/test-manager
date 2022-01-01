import React, { Component } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <h2 className="title">Test Manager</h2>
      <div className="row">
        <div className="col sidebar">
          <nav>
            <Link className="nav-item" to="add">
              Add
            </Link>
            <Link className="nav-item" to="search">
              Search
            </Link>
          </nav>
        </div>
        <div className="col col-10">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
