import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Portfolio from "./components/Portfolio/portfolio";
import About from "./components/About/about";
import ContactMenu from './components/ContactMenu/contactMenu';


import { Helmet } from "react-helmet";
function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ulviyya Niftiyeva</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Helmet>
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/intro" replace />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <ContactMenu />
      </Router>

    </>

  );
}

export default App;
