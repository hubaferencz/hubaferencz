// eslint-disable-next-line
import React, { useState } from "react";

import { Helmet } from "react-helmet";

import "./styles/styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Base from "./components/base/Base";
import About from "./components/pages/about/About";
import Resume from "./components/pages/resume/Resume.jsx";
import Portfolio from "./components/pages/portfolio/Portfolio.jsx";
import Contact from "./components/pages/contact/Contact.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base />}>
            <Route index element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <Helmet>
          <script src="./Animations.js" type="text/javascript" />
          <script
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          ></script>
        </Helmet>
      </BrowserRouter>
    </>
  );
}

export default App;
