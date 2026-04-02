import { useEffect, useState } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
    localStorage.setItem('darkMode', darkMode.toString()); 
  }, [darkMode]);


 

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-title" onClick={() => setIsMenuOpen(false)}>
          <span className="name-logo">KRIS BAUTISTA</span>
        </Link>
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About Me</NavLink>
        <NavLink to="/resume" onClick={() => setIsMenuOpen(false)}>Resume</NavLink>
        <NavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</NavLink>
        <NavLink to="/certifications" onClick={() => setIsMenuOpen(false)}>Certifications</NavLink>
        <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</NavLink>

        <div className="theme-toggle">
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider">
              <span className="moon">🌙</span>
              <span className="sun">☀️</span>
            </span>
          </label>
        </div>
      </div>
    </nav>
  );
};

// ✅ added TypeScript types for props
interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
    onClick={onClick}
  >
    {children}
  </RouterNavLink>
);

export default Navbar;