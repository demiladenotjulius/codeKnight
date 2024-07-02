import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Firstborn from "../src/Firstborn/Firstborn";
import About from "./About/About";
import Services from "./Services/Services";
import Contact from "./Contact/Contact";
import Portfolio from "./Portfolio/Portfolio";
import DetailedProject from "./DetailedProject/DetailedProject";
import Skills from "./Skills/Skills";

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
        <Route path="/skills" element={<Skills />}></Route>
      </Routes>
    </>
  );
}

export default App;
