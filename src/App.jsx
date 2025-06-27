import React from "react";
import Nav from "./component/Navbar/Nav";
import Footer from "./component/Footer/Footer";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop/Shop";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import Sign from "./pages/Join/Sign";
import Register from "./pages/Join/Register";
import Cart from "./pages/Cart/Cart";
import WhishList from "./pages/Whishlist/WhishList";
import Refund from "./pages/Refund/Refund";
import Terms from "./pages/Terms/Terms";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Checkout from "./pages/Checkout/Checkout";
import Stripe from "./pages/Payment/Stipe";
import ScrollToTop from "./ScrollToTop";
import Dashboard from "./pages/DashBoard/Dashboard";
import Forget from "./pages/Join/Forget";

const App = () => {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/sign-in" element={<Sign />} />
        <Route path="/register" element={<Register />} />
        <Route path="/whishlist" element={<WhishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/stripe" element={<Stripe />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/forgot-password" element={<Forget />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
