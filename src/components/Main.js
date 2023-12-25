import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Careers from "../pages/Careers";
import CareersView from "../pages/CareersView";
import ContactUs from "../pages/ContactUs";
import Crypto from "../pages/Crypto";
import Stocks from "../pages/Stocks";
import Recruitment from "../pages/Recruitment";
import About from "../pages/About";

const Main = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="aboutus" element={<About />} />
        <Route path="services">
          <Route path="crypto" element={<Crypto />} />
          <Route path="stocks" element={<Stocks />} />
          <Route path="recruitment" element={<Recruitment />} />
        </Route>
        <Route path="careers">
          <Route path="" element={<Careers />} />
          <Route path="100010" element={<CareersView />} />
        </Route>
        <Route path="contact" element={<ContactUs />} />
      </Routes>
    </div>
  )
}

export default Main
