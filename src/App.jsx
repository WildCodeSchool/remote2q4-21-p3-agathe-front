import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Brand from "./pages/Brand";
import ProductPage from "./pages/ProductPage";
import Catalogue from "./pages/Catalogue";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import TextAdmin from "./pages/TextAdmin";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="Brand" element={<Brand/>} />
          <Route path="/page_produit/:id" element={<ProductPage />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/presentation" element={<TextAdmin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
