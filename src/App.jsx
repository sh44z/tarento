import React from "react";
import {Route, Routes, } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import Footer from "./components/Footer/Footer";
import JobBoard from "./components/JobBoard/JobBoard";

function App() {
  return (
    <div className="w-[85%] m-auto">

      

      <Routes>
        

        <Route path="/" element={<JobBoard />} />
      
      </Routes>
      

     

      <Footer />
    </div>
  );
}


export default App;
