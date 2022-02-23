import React from "react";
import { Routes, Route } from "react-router-dom";
import Carousal from "./components/Carousal";

import AddToCart from "./components/cart";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="cart" element={<AddToCart />} />
      <Route path="carousal" element={<Carousal />} />
    </Routes>
  );
}

export default App;
