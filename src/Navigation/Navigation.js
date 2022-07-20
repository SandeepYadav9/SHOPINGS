import React from "react";
import { Route, Routes } from "react-router-dom";
import Favorites from "../pages/Favorites";
import Products from "../pages/Products";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/favrate" element={<Favorites />} />
    </Routes>
  );
};

export default Navigation;
