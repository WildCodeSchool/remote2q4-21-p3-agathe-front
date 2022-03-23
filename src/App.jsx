import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { userInputs } from './formSource';
import AdminPanel from "./pages/AdminPanel";
import Brand from "./pages/Brand";
import CartPage from "./pages/CartPage";
import CartProvider from "./contexts/CartContext";
import Catalogue from "./pages/Catalogue";
import Checkout from "./pages/Checkout";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import List from './pages/List';
import LoginPage from "./pages/LoginPage";
import Logout from "./components/form/Logout";
import New from './pages/New';
import Page from "./middleware/Page";
import ProductPage from "./pages/ProductPage";
import RegisterPage from "./pages/RegisterPage";
import Single from './pages/Single';
import TextAdmin from "./pages/TextAdmin";
import UserProvider from './contexts/UserProvider';
import "./App.css";

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Brand" element={<Brand />} />
              <Route path="/page_produit/:id" element={<ProductPage />} />
              <Route path="/cart" element={<Page SubPage={CartPage} />} />
              <Route path="/catalogue" element={<Catalogue />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<Page SubPage={ContactPage} />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/admin/presentation" element={<TextAdmin />} />
              <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
            </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;