import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Doctors from "./components/Doctors";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Appointment from "./components/Appointment";
import ViewToken from "./components/ViewToken";


function App() {
  return (
    <Router>
     
      <Header />

      <Routes>
      <Route path="/viewtokens" element={<ViewToken />} />
      <Route path="/appointments" element={<Appointment />} />
       <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;