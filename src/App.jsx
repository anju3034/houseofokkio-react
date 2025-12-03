import React from "react"
import { Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact"; 
import Blog from "./pages/Blog";

export default function WebPages() {
  return(
    <>
    <Header />
    <Routes>
      {/* //<Route path="/" element={< Navigate to="/home" />} /> */}
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={< About />} />
      <Route path="/collection" element={< Collection />} />
      <Route path="/contact" element={< Contact />} />
      <Route path="blog" element={< Blog />} />
    </Routes>
    <Footer />
    </>
  );
}