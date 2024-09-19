import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router.js";

import "./styles/reset.css";
import "./styles/variable.css";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
