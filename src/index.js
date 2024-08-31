import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import Body from "./Pages/Body";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={< HomePage />} />
        <Route path="/Voyage-au-centre-du-corps" element={<Body /> }  />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
