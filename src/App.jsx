import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Brand from "./pages/Brand";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import Catalogue from "./pages/Catalogue";
import Checkout from "./pages/Checkout";
import ContactPage from "./pages/ContactPage";
import List from './pages/List';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"
import Logout from "./components/form/Logout";
import New from './pages/New';
import TextAdmin from "./pages/TextAdmin";
import CartProvider from "./contexts/CartContext";
import UserProvider from './contexts/UserProvider';
import AdminPanel from "./pages/AdminPanel";
import Page from "./middleware/Page";
import Single from './pages/Single';
import { userInputs } from './formSource';
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
              <Route path="/contact" element={<ContactPage />} />
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
