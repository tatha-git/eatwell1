import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import AllFoods from "../pages/AllFoods";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PetFood from "../pages/PetFood"
import OrderSummary from "../pages/OrderSummary";
import Protected from "../components/Protected.jsx";
import { ToastContainer } from "react-toastify";

const Routers = () => {
  return (
    <>
     <ToastContainer />
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/foods" element={<AllFoods />} />
      <Route path="/foods/:id" element={<FoodDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Protected Components={Checkout} />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/pet-food" element={<PetFood />} />
      <Route path="/order-summary" element={<OrderSummary />} />
      
      
    </Routes>
    </>
  );
};

export default Routers;
