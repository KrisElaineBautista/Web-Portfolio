import { useEffect, useState } from 'react';
import profilePic from '../assets/profile.png'; // Ensure this file exists
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <nav className="navbar">
      {/* Left: Logo & Name */}
      <div className="navbar-left">
        <img src={profilePic} alt="Profile" className="navbar-profile" />
        <Link to="/Home" className="navbar-title">Kris Bautista</Link>
      </div>

      {/* Right: Navigation Links + Dark Mode Toggle */}
      <div className="navbar-links">
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/Projects">Projects</NavLink>
        <NavLink to="/Certifications">Certifications</NavLink>
        <NavLink to="/Contact">Contact</NavLink>

        {/* Dark mode toggle switch */}
        <label style={switchLabelStyle}>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            style={{ display: 'none' }}
            aria-label="Toggle dark mode"
          />
          <span
            style={{
              ...switchTrackStyle,
              ...(darkMode ? switchTrackCheckedStyle : {}),
            }}
          >
            <span
              style={{
                ...switchThumbStyle,
                ...(darkMode ? switchThumbCheckedStyle : {}),
              }}
            />
          </span>
        </label>
      </div>
    </nav>
  );
};

// Reusable NavLink with active styling
const NavLink = ({ to, children }) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      `nav-link${isActive ? ' active' : ''}`
    }
  >
    {children}
  </RouterNavLink>
);

// Toggle Switch Styles
const switchLabelStyle = {
  display: 'inline-block',
  width: '50px',
  height: '26px',
  position: 'relative',
  cursor: 'pointer',
};

const switchTrackStyle = {
  position: 'relative',
  display: 'block',
  width: '50px',
  height: '26px',
  background: '#ccc',
  borderRadius: '15px',
  transition: 'background 0.3s',
};

const switchTrackCheckedStyle = {
  background: '#4f46e5',
};

const switchThumbStyle = {
  position: 'absolute',
  top: '3px',
  left: '3px',
  width: '20px',
  height: '20px',
  background: '#fff',
  borderRadius: '50%',
  boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
  transition: 'transform 0.3s',
};

const switchThumbCheckedStyle = {
  transform: 'translateX(24px)',
};

export default Navbar;
