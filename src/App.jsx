import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Brand from "./pages/Brand";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Catalogue from "./pages/Catalogue";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import Logout from "./components/Logout";
import TextAdmin from "./pages/TextAdmin";
import CartProvider from "./contexts/CartContext";
import UserProvider from './contexts/UserProvider';
import CartPage from "./pages/CartPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="Brand" element={<Brand />} />
              <Route path="/page_produit/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/admin/presentation" element={<TextAdmin />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

export default App;
