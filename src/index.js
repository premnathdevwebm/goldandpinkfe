import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/roboto";

import "./index.css";
import App from "./App";
import Lashes from "./lashes";
import ManiPedi from "./manipedi";
import Nail from "./nail";
import Gallery from "./gallery";
import ContactUs from "./contactus";
import Header from "./components/Header/Header";
import Chatbot from "./components/Chatbot/Chatbot";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route index path="/" element={<App />} />
        <Route path="/lashes" element={<Lashes />} />
        <Route path="/manipedi" element={<ManiPedi />} />
        <Route path="/nail" element={<Nail />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Chatbot />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
