import React from "react";
import Hero from "./components/hero/Hero.jsx";
import ContentDetails from "./components/contentdetails/ContentDetails.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer.jsx";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/product/:id" element={<ContentDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
