import React, { Component } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import SideBar from "./components/SideBar";

function App() {
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="title">
        <img
          id="logo"
          src={logo}
          alt="TM Logo"
          onClick={() => {
            navigate("/");
          }}
        ></img>
      </div>
      <div className="row">
        <div className="col sidebar">
          <nav>
            <Link className="nav-item" to="/search">
              Search
            </Link>
            <SideBar />
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
