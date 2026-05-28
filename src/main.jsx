import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter } from "react-router-dom";

import "./menu.css";
import "./style.css";
import "./grid.css";
import "./privacy.css";
import "./blog.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
);
