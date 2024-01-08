import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Careers from "../pages/Careers";
import CareersView from "../pages/CareersView";
import ContactUs from "../pages/ContactUs";
import Crypto from "../pages/Crypto";
import Stocks from "../pages/Stocks";
import Recruitment from "../pages/Recruitment";
import About from "../pages/About";
import { DataProvider } from "../context/DataContext";

const Main = () => {
  const code = localStorage.getItem("jobId");

  return (
    <div>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<About />} />
          <Route path="services">
            <Route path="crypto" element={<Crypto />} />
            <Route path="stocks" element={<Stocks />} />
            <Route path="recruitment" element={<Recruitment />} />
          </Route>
          <Route path="careers">
            <Route path="jobs" element={<Careers />} />
            {/* <Route path={`${code}`} element={<CareersView />} /> */}
            <Route path=":code" element={<CareersView />} />
          </Route>
          <Route path="contact" element={<ContactUs />} />
        </Routes>
      </DataProvider>
    </div>
  );
};

export default Main;
