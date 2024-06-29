import React from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Firstborn from "../src/Firstborn/Firstborn";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Firstborn />}></Route>
        {/* <Route path="/home" element={<Firstborn />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
