import React from "react";

import NavBar from "../components/NavBar";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Navigate = () => {
  return (
    <>
      <div className="navBox">
        <NavBar/>  
      </div> 
      <div className="main">
      <Main />
      <Footer />
      </div>
      <div className="footer">
      
      </div> 
    </>
  );
};

export default Navigate;
