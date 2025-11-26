import React from "react"
import { Routes, Route, Navigate} from "react-router-dom";
import About from "./pages/About";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function WebPages() {
  return(
    <>
    <Header />
    <Routes>
      <Route path="/" element={< Navigate to="/about" />} />
      <Route path="/about" element={< About />} />
    </Routes>
    <Footer />
    </>
  );
}