import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Booking from "./pages/Booking";
import Product from "./pages/Product";
import Notfound from "./pages/404";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {  Route, Routes } from "react-router-dom";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import store from "../src/store/createStore";
import SingleProduct from "./components/SingleProduct";
import Admin from "./Admin/admin";
import Create from "./Admin/Create";
import Update from "./Admin/Update";
import Login from "./components/Approuter/Login";
import Signup from "./components/Approuter/Signup";

const App = () => {
  return (
    <Provider store={store}>
     
        <section className="">
          <Navbar />

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin/create" element={<Create />} />
              <Route path="/admin/update/:id" element={<Update />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/cart" element={<Cart component={SingleProduct} />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              {/* <Route path="*" element={<Notfound />} /> */}
            </Routes>
          </main>

          <Footer />
        </section>
    </Provider>
  );
};

export default App;
