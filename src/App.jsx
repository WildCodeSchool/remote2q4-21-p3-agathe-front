import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Marque from "./pages/Marque";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="marque" element={<Marque/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
