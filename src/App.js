import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./components/admin/Form";
import Dashboard from "./components/admin/dashboard";

import AddToCart from "./components/cart";
import Home from "./components/Home";
import Order from "./components/admin/Order";
import Settings from "./components/admin/Settings";
import Status from "./components/admin/Status";
import Countries from "./components/admin/Countries";
import ContactUs from "./components/admin/ContactUs";
import Product from "./components/admin/Product";
import MissingOrder from "./components/admin/MissingOrder";
import Categories from "./components/admin/Categories";
import ChangePassword from "./components/admin/ChangePassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<AddToCart />} />
      <Route path="admin" element={<Admin />} />
      <Route path="admin-dashboard" element={<Dashboard />} />
      <Route path="admin-orders" element={<Order />} />
      <Route path="admin-missingorder" element={<MissingOrder />} />
      <Route path="admin-categories" element={<Categories />} />
      <Route path="admin-product" element={<Product />} />
      <Route path="admin-contactus" element={<ContactUs />} />
      <Route path="admin-countries" element={<Countries />} />
      <Route path="admin-status" element={<Status />} />
      <Route path="admin-settings" element={<Settings />} />
      <Route path="change_password" element={<ChangePassword />} />
    </Routes>
  );
}

export default App;
