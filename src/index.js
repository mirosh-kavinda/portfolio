import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import "./css/responsive.css";
import "./css/theme.css";
import "./css/home.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <App />
  </Router>
);
