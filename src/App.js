import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Users from "./components/Users";
import Signin from "./Login/Signin";
import Signup from "./Login/Signup";
import Herosection from './components/Herosection';
import FooterSection from "./components/FooterSection";

function App() {
  return (
    <>

    <Router>
      <Herosection />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="store" element={<Store />} />
        <Route path="contact" element={<Contact />} />
        <Route path="users/:userid" element={<Users />} />
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <FooterSection />
    </Router>
    </>
  );
}

export default App;
