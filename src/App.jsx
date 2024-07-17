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
import IDownload from "./idownloaddetails/idownload";
import Fotos from "./fotos/fotos";
import Todos from "./todos/todos";
import Shorten from "./shorten/shorten";
import Twofactor from "./twofactor/twofactor";

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
        <Route path="/idownload" element={<IDownload />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/fotos" element={<Fotos />}></Route>
        <Route path="/twofactor" element={<Twofactor />}></Route>

        <Route path="/todos" element={<Todos />}></Route>
        <Route path="/shorten" element={<Shorten />}></Route>

      </Routes>
    </>
  );
}

export default App;
