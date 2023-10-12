import React from "react";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store";
// import Users from "./components/Users";
import Signin from "./Login/Signin";
import Signup from "./Login/Signup";
import Herosection from './components/Herosection';
import FooterSection from "./components/FooterSection";
import Detailspage from "./pages/Detailspage";
import { useContext } from 'react';
import AuthContext from './store/auth-context';

function App() {
  const authCtx= useContext(AuthContext)
  return (
    <>

    <Router>
      <Herosection />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="store" element={<Store />} />
        {authCtx.isLoggedIn &&(<Route path="contact" element={<Contact />} />)}
        {/* <Route path="users/:userid" element={<Users />} /> */}
        {authCtx.isLoggedIn &&( <Route path="detailspage/:productid" element={<Detailspage/>}/>)}
        {!authCtx.isLoggedIn &&(<Route path="signin" element={<Signin />} />)}
        {!authCtx.isLoggedIn &&(<Route path="signup" element={<Signup />} />)}
      </Routes>
      <FooterSection />
    </Router>
    </>
  );
}

export default App;
