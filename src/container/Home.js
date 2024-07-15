import React from "react";
import Header from "../component/Header";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Product from "./Product";
import ECart from './ECart'
import Checkout from "./checkout";
import Success from "./success"
export default function Home() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<ECart />} />
        <Route path="/checkout/" >
             <Route path=" " element={<Checkout />} />
             <Route path=":id" element={<Checkout />} />
             </Route>
        <Route path="/success" element={<Success />} />

      </Routes>
    </div>
  );
}
