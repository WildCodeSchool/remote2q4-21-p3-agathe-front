import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Marque from "./pages/Marque";
import ProductPage from "./pages/ProductPage";
import Catalogue from "./pages/Catalogue";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="marque" element={<Marque/>} />
          <Route path="/page_produit/:id" element={<ProductPage />} />
          <Route path="/catalogue" element={<Catalogue />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
