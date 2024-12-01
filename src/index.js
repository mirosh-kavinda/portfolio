import React from "react";
import ReactDOM from "react-dom/client";
//change the css class based on the current mode
import "./css/darkIndex.css";
import "./css/responsive.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
  
      <App />
   
  </Router>
);
