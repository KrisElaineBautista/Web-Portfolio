import { useEffect, useState } from 'react';
import { Link, NavLink as RouterNavLink } from 'react-router-dom';
import { createPortal } from 'react-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* ==========================================
     DARK MODE
  ========================================== */

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  /* ==========================================
     PREVENT PAGE SCROLL WHEN MOBILE MENU OPEN
  ========================================== */

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  /* ==========================================
     CLOSE MENU WHEN WINDOW GETS BIGGER
  ========================================== */

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  /* ==========================================
     THEME TOGGLE
  ========================================== */

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      {/* ======================================
          NAVBAR
      ====================================== */}

      <nav
        className="navbar"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <style>{`

          /* =================================
             HAMBURGER
          ================================= */

          .navbar-hamburger {
            display: none;
            background: none;
            border: none;
            cursor: pointer;

            width: 36px;
            height: 36px;

            flex-direction: column;
            justify-content: center;
            align-items: center;

            gap: 5px;
            padding: 0;

            position: relative;
            z-index: 10;

            flex-shrink: 0;
          }

          .navbar-hamburger span {
            display: block;

            width: 24px;
            height: 2px;

            background: var(--btn-text);

            border-radius: 2px;

            transition:
              transform 0.25s ease,
              opacity 0.25s ease,
              background-color 0.3s ease;
          }

          .navbar-hamburger.open span:nth-child(1) {
            transform: translateY(7px) rotate(45deg);
          }

          .navbar-hamburger.open span:nth-child(2) {
            opacity: 0;
          }

          .navbar-hamburger.open span:nth-child(3) {
            transform: translateY(-7px) rotate(-45deg);
          }


          /* =================================
             MOBILE NAV
          ================================= */

          .navbar-mobile-overlay {
            position: fixed;
            inset: 0;

            width: 100vw;
            height: 100dvh;

            background: rgba(0, 0, 0, 0.55);

            z-index: 1998;

            opacity: 1;

            -webkit-tap-highlight-color: transparent;
          }


          .navbar-mobile-panel {
            position: fixed;

            top: 0;
            left: 0;

            width: min(75vw, 300px);
            height: 100dvh;

            background: var(--nav-bg);
            color: var(--btn-text);

            display: flex;
            flex-direction: column;
            align-items: flex-start;

            padding: 5.5rem 2rem 2rem;

            gap: 0.5rem;

            overflow-y: auto;
            overflow-x: hidden;

            -webkit-overflow-scrolling: touch;

            transform: translateX(-100%);

            transition:
              transform 0.3s ease,
              background-color 0.3s ease,
              color 0.3s ease;

            box-shadow: 8px 0 24px rgba(0, 0, 0, 0.35);

            z-index: 1999;
          }

          .navbar-mobile-panel.open {
            transform: translateX(0);
          }


          /* =================================
             MOBILE LINKS
          ================================= */

          .mobile-nav-link {
            color: var(--btn-text);

            text-decoration: none;

            font-weight: 700;
            font-size: 1.05rem;

            width: 100%;

            padding: 0.75rem 0;

            transition:
              color 0.2s ease,
              opacity 0.2s ease;
          }

          .mobile-nav-link:hover {
            opacity: 0.8;
          }

          .mobile-nav-link.active {
            color: var(--text);
          }


          /* =================================
             MOBILE THEME
          ================================= */

          .mobile-theme-toggle {
            margin-top: 1rem;
          }

          .mobile-theme-icon {
            width: 18px;
            height: 18px;
            display: block;
          }


          /* =================================
             MOBILE BREAKPOINT
          ================================= */

          @media (max-width: 768px) {

            .navbar-hamburger {
              display: flex !important;
              order: -1;
            }

          }


          @media (min-width: 769px) {

            .navbar-mobile-overlay,
            .navbar-mobile-panel {
              display: none !important;
            }

          }

        `}</style>


        {/* ======================================
            HAMBURGER
        ====================================== */}

        <button
          className={`navbar-hamburger ${
            isMenuOpen ? 'open' : ''
          }`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>


        {/* ======================================
            LOGO
        ====================================== */}

        <div className="navbar-left">
          <Link
            to="/"
            className="navbar-title"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="name-logo">
              KRIS BAUTISTA
            </span>
          </Link>
        </div>


        {/* ======================================
            DESKTOP NAVIGATION
        ====================================== */}

        <div className="navbar-links">

          <NavLink to="/">
            Home
          </NavLink>

          <NavLink to="/about">
            About Me
          </NavLink>

         

          <NavLink to="/projects">
            Projects
          </NavLink>

          <NavLink to="/certifications">
            Certifications
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

          <ThemeToggle
            darkMode={darkMode}
            onToggle={toggleDarkMode}
          />

        </div>

      </nav>


      {/* ======================================
          MOBILE MENU PORTAL

          This is intentionally OUTSIDE <nav>
          so it cannot be clipped by navbar.css.
      ====================================== */}

      {typeof document !== 'undefined' &&
        createPortal(
          <>
            {isMenuOpen && (
              <div
                className="navbar-mobile-overlay"
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
              />
            )}

            <div
              className={`navbar-mobile-panel ${
                isMenuOpen ? 'open' : ''
              }`}
              aria-hidden={!isMenuOpen}
            >

              {/* Home */}
              <MobileNavLink
                to="/"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </MobileNavLink>


              {/* About */}
              <MobileNavLink
                to="/about"
                onClick={() => setIsMenuOpen(false)}
              >
                About Me
              </MobileNavLink>


             


              {/* Projects */}
              <MobileNavLink
                to="/projects"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </MobileNavLink>


              {/* Certifications */}
              <MobileNavLink
                to="/certifications"
                onClick={() => setIsMenuOpen(false)}
              >
                Certifications
              </MobileNavLink>


              {/* Contact */}
              <MobileNavLink
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </MobileNavLink>


              {/* Theme Toggle */}
              <div className="mobile-theme-toggle">
                <ThemeToggle
                  darkMode={darkMode}
                  onToggle={toggleDarkMode}
                />
              </div>

            </div>
          </>,
          document.body
        )}
    </>
  );
};


/* ==========================================
   DESKTOP NAV LINK
========================================== */

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  to,
  children,
  onClick,
}) => (
  <RouterNavLink
    to={to}
    className={({ isActive }) =>
      `nav-link${isActive ? ' active' : ''}`
    }
    onClick={onClick}
  >
    {children}
  </RouterNavLink>
);


/* ==========================================
   MOBILE NAV LINK
========================================== */

const MobileNavLink: React.FC<NavLinkProps> = ({
  to,
  children,
  onClick,
}) => (
  <RouterNavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `mobile-nav-link${isActive ? ' active' : ''}`
    }
  >
    {children}
  </RouterNavLink>
);


/* ==========================================
   THEME TOGGLE
========================================== */

interface ThemeToggleProps {
  darkMode: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  darkMode,
  onToggle,
}) => (
  <div className="theme-toggle">

    <label className="toggle-switch">

      <input
        type="checkbox"
        checked={darkMode}
        onChange={onToggle}
        aria-label="Toggle dark mode"
      />

      <span className="slider">

        {/* =================================
            MOON ICON
        ================================= */}

        <span className="moon">

          <svg
            className="mobile-theme-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >

            <path
              d="
                M21 12.79
                A9 9 0 1 1
                11.21 3
                A7 7 0 0 0
                21 12.79Z
              "
              fill="currentColor"
            />

          </svg>

        </span>


        {/* =================================
            SUN ICON
        ================================= */}

        <span className="sun">

          <svg
            className="mobile-theme-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >

            <circle
              cx="12"
              cy="12"
              r="4"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path
              d="
                M12 2V4
                M12 20V22
                M4.93 4.93L6.34 6.34
                M17.66 17.66L19.07 19.07
                M2 12H4
                M20 12H22
                M4.93 19.07L6.34 17.66
                M17.66 6.34L19.07 4.93
              "
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />

          </svg>

        </span>

      </span>

    </label>

  </div>
);


export default Navbar;
