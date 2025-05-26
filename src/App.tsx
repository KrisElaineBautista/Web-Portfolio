import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Certifications from './pages/Certifications';

import './styles/index.css'; // Assuming you have a CSS file for global styles
import './styles/contact.css'; // Assuming you have a CSS file for dark mode styles
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
