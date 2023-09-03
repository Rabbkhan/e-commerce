import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Store from './pages/Store'
import Herosection from "./components/Herosection";
import FooterSection from "./components/FooterSection";
function App() {
  return (
    <>
     <Router>
      <Herosection/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <FooterSection/>
    </Router>

</>
  );
}

export default App;
