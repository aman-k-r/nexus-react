// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
