import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
import Signin from "./Login/Signin";
import Signup from "./Login/Signup";
import Herosection from "./components/Herosection";
import FooterSection from "./components/FooterSection";
import Detailspage from "./pages/Detailspage";
import AuthContext from './store/auth-context';
import Context from "./cartitem/Context";

function App() {
  // Wrap your entire component tree with AuthContextProvider and CartProvider
  const authCtx= useContext(AuthContext)
  return (
       <Context>

        <Router>
          <Herosection />
          <Routes>
            <Route index element={<Home />} />
            {/* <Route path="/store" element={<Store />} /> */}
            {/* Conditionally render Store or Signin based on auth state */}
            {authCtx.isLoggedIn ? (
              <Route path="/store" element={<Store />} />
            ) : (
              <Route path="/store" element={<Signin />} />
            )}
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="detailspage/:productid" element={<Detailspage />} />
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <FooterSection />
        </Router>
      
       </Context>
  );
}

export default App;
