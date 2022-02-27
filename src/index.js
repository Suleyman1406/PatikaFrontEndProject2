import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { BMIProvider } from "./Context/BMIContext";
import About from "./Components/About";
import History from "./Components/History";
ReactDOM.render(
  <BMIProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </BMIProvider>,
  document.getElementById("root")
);
