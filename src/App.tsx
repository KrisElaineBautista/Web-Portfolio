
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Certifications from './pages/Certifications';

import './styles/index.css'; // Assuming you have a CSS file for global styles
import AboutMe from './pages/AboutMe';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
     
        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
