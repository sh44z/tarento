import react from "react";
import NavBar from "./components/NavBar/NavBar";

import ValueDiv from "./components/ValueDiv/ValueDiv";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom"
import ApplicationForm from "./components/ApplicationForm/ApplicationForm";
import JobBoard from "./components/JobBoard/JobBoard";



function App() {
  

  return (
    <div>
    
    
    <Routes>
      <Route path="/" ></Route>
      <Route path="/application" element={<ApplicationForm />} />
    </Routes>
    

    <div className="w-[85%] m-auto">
      <NavBar />
      
      <JobBoard />
      <ValueDiv />
      <Footer />
    </div>
    </div>
  )
};

export default App
