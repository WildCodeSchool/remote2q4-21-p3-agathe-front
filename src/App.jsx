import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPanel from "./pages/admin/AdminPanel";
import List from './pages/admin/List';
import New from './pages/admin/NewUser';
import Product from "./pages/admin/Product"
import Single from './pages/admin/Single';
import SingleProduct from './pages/admin/SingleProduct';
import Brand from "./pages/Brand";
import CartPage from "./pages/CartPage";
import CartProvider from "./contexts/CartContext";
import Checkout from "./pages/Checkout";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import LoginForm from "./components/form/LoginForm"
import Page from "./middleware/Page";
import ProductsList from "./components/products/ProductsList";
import ProductPage from "./pages/ProductPage";
import RegisterForm from "./components/form/RegisterForm";
import Presentation from "./pages/admin/Presentation";
import ProtectedRoute from "./middleware/ProtectedRoute";
import UserProvider from './contexts/UserProvider';
import { userInputs } from "./formSource";
import "./App.css";
import HistoryOrdersPage from "./components/user/HistoryOrders";

const PATH_ADMIN = process.env.REACT_APP_PATH_ADMIN;

function App() {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <CartProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Brand" element={<Page SubPage={Brand} />} />
              <Route path="/page_produit/:id" element={<Page SubPage={ProductPage} />} />
              <Route path="/cart" element={<Page SubPage={CartPage} />} />
              <Route path="/catalogue" element={<Page SubPage={ProductsList} />} />
              <Route path="/checkout" element={<Page SubPage={Checkout} />} />
              <Route path="/contact" element={<Page SubPage={ContactPage} />} />
              <Route path="/login" element={<Page SubPage={LoginForm} />} />
              <Route path="/register" element={<Page SubPage={RegisterForm} />} />
              <Route path="/user">
                <Route path="edit" element={<Page SubPage={RegisterForm} />} />
                <Route path="edit/:id" element={<Page SubPage={RegisterForm} />} />
                <Route path="history" element={<Page SubPage={HistoryOrdersPage} />} />
              </Route>
              <Route path={PATH_ADMIN} element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
              <Route path={`${PATH_ADMIN}/presentation`} element={<ProtectedRoute><Presentation /></ProtectedRoute>} />
              <Route path={`${PATH_ADMIN}/deliveries`}>
                <Route index element={<ProtectedRoute><List /></ProtectedRoute>} />
                <Route path=":id" element={<ProtectedRoute><Single /></ProtectedRoute>} />
                {/* <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} /> */}
                {/* <Route path="new" element={<New title="Add New Product" />} /> */}
              </Route>
              <Route path={`${PATH_ADMIN}/orders`}>
                <Route index element={<ProtectedRoute><List /></ProtectedRoute>} />
                <Route path=":id" element={<ProtectedRoute><Single /></ProtectedRoute>} />
                {/* <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} /> */}
                {/* <Route path="new" element={<New title="Add New Product" />} /> */}
              </Route>
              <Route path={`${PATH_ADMIN}/products`}>
                <Route index element={<ProtectedRoute><List /></ProtectedRoute>} />
                <Route path=":id" element={<ProtectedRoute><SingleProduct /></ProtectedRoute>} />
                <Route path="new" element={<ProtectedRoute><Product title="Ajouter un produit" /></ProtectedRoute>} />
                <Route path="edit/:id" element={<ProtectedRoute><Product title="Modifier un produit" /></ProtectedRoute>} />
              </Route>
              <Route path={`${PATH_ADMIN}/users`}>
                <Route index element={<ProtectedRoute><List /></ProtectedRoute>} />
                <Route path=":id" element={<ProtectedRoute><Single /></ProtectedRoute>} />
                <Route path="new" element={<ProtectedRoute><New inputs={userInputs} title="Add New User" /></ProtectedRoute>} />
              </Route>
            </Routes>
          </CartProvider>
        </UserProvider>
      </BrowserRouter>
    </>
  );
}

export default App;