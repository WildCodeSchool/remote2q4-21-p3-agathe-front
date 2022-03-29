import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { productInputs, userInputs } from './formSource';
import AdminPanel from "./pages/AdminPanel";
import Brand from "./pages/Brand";
import CartPage from "./pages/CartPage";
import CartProvider from "./contexts/CartContext";
import Checkout from "./pages/Checkout";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import List from './pages/List';
import LoginForm from "./components/form/LoginForm"
import Logout from "./components/form/Logout";
import New from './pages/New';
import Page from "./middleware/Page";
import ProductsList from "./components/products/ProductsList";
import ProductPage from "./pages/ProductPage";
import RegisterForm from "./components/form/RegisterForm";
import Single from './pages/Single';
import TextForm from "./components/admin/TextForm";
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
              <Route path="/page_produit/:id" element={<Page SubPage={ProductPage} />} />
              <Route path="/cart" element={<Page SubPage={CartPage} />} />
              <Route path="/catalogue" element={<Page SubPage={ProductsList} />} />
              <Route path="/checkout" element={<Page SubPage={Checkout} />} />
              <Route path="/contact" element={<Page SubPage={ContactPage} />} />
              <Route path="/login" element={<Page SubPage={LoginForm} />} />
              <Route path="/register" element={<Page SubPage={RegisterForm} />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/admin/presentation" element={<Page SubPage={TextForm} />} />
              <Route path="/admin/users">
                <Route index element={<List />} />
                <Route path=":id" element={<Single />} />
                <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
              </Route>
              <Route path="/admin/orders">
                <Route index element={<List />} />
                <Route path=":Id" element={<Single />} />
                {/* <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} /> */}
                <Route path="new" element={<New title="Add New Product" />} />
              </Route>
              <Route path="/admin/products">
                <Route index element={<List />} />
                <Route path=":id" element={<Single />} />
                <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;