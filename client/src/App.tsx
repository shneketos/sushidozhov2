import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import About from "./pages/About/About";
import Delivery from "./pages/Delivery/Delivery";
import Menu from "./pages/Menu/Menu";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Delivery" element={<Delivery />} />
        <Route path="/About-us" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
