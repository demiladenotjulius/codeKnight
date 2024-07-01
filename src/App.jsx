import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Firstborn from "../src/Firstborn/Firstborn";
import About from "./About/About";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Portfolio from "./Portfolio/Portfolio";
import DetailedProject from "./DetailedProject/DetailedProject";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Firstborn />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/detailed" element={<DetailedProject />}></Route>
      </Routes>
    </>
  );
}

export default App;
