import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Form";
import Dashboard from "./components/admin/dashboard";

import AddToCart from "./components/cart";
import Home from "./components/Home";
import Order from "./components/admin/Order";
import Status from "./components/admin/Status";
import Countries from "./components/admin/Countries";
import ContactUs from "./components/admin/ContactUs";
import Product from "./components/admin/Product";
import MissingOrder from "./components/admin/MissingOrder";
import Categories from "./components/admin/Categories";
import ProtectedRoute from "./components/admin/routes/Protected";
import ChangePassword from "./components/admin/ChangePassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<AddToCart />} />
      <Route path="admin" element={<Admin />} />
      <Route path="admin-dashboard" element={<ProtectedRoute Component={Dashboard}/>} />
      <Route path="admin-orders" element={<ProtectedRoute Component={Order}/>} />
      <Route path="admin-missingorder" element={<ProtectedRoute Component={MissingOrder}/>} />
      <Route path="admin-categories" element={<ProtectedRoute Component={Categories}/>} />
      <Route path="admin-product" element={<ProtectedRoute Component={Product}/>} />
      <Route path="admin-contactus" element={<ProtectedRoute Component={ContactUs}/>} />
      <Route path="admin-countries" element={<ProtectedRoute Component={Countries}/>} />
      <Route path="admin-status" element={<ProtectedRoute Component={Status}/>} />
      <Route path="change-password" element={<ProtectedRoute Component={ChangePassword}/>} />
    </Routes>
  );
}

export default App;
