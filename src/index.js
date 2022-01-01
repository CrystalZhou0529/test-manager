import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Add from "./components/Add";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchPanel from "./components/SearchPanel";
import TestDisplay from "./components/TestDisplay";
import Test from "./components/Test";

ReactDOM.render(
  <BrowserRouter basename={window.location.pathname || ''}>
    <Routes>
      <Route exact path="/" element={<App />}>
        <Route path="add" element={<Add />} />
        <Route path="search" element={<SearchPanel />}>
          <Route path=":testId" element={<TestDisplay />} />
          <Route index element={<TestDisplay />} />
        </Route>
        <Route path="tc/:testId" element={<Test />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
