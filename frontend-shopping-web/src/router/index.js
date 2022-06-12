import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nabar from "../components/Nabar/index";
import Home from "../screens/Home/index";
import About from "../screens/About/index";
import Shop from "../screens/Shop/index";
import Sale from "../screens/Sale/index";
import Contact from "../screens/Contact/index";
import Blog from "../screens/Blog/index";
import data from "../components/Nabar/data";
const routes = () => {
  return (
    <Router>
      <Nabar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default routes;
