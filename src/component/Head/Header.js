import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Header = ({ toggleMode, darkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const location = useLocation();

  // Sticky header effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (header) {
        header.classList.toggle("active", window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu on outside click, scroll, or ESC key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target) &&
        !menuRef.current?.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setMobileMenuOpen(false);
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const handleToggleMenu = (e) => {
    e.stopPropagation();
    setMobileMenuOpen((prev) => !prev);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/resume", label: "Resume" },
    { path: "/skills", label: "Skills" },
    { path: "/blog", label: "Achievements" },
    { path: "/contact", label: "Contact" },
  ];

  const isActiveRoute = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`header ${mobileMenuOpen ? "menu-open" : ""}`}
      ref={headerRef}
    >
      <div className="container d_flex">
        {/* Logo/Name */}
        <div className="name-container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1 className="sub-title">
              <span>NADIM</span> SHAHRIAR
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="link f_flex uppercase">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path}
                  className={isActiveRoute(item.path) ? "active" : ""}
                  style={{ 
                    color: isActiveRoute(item.path) ? "#32cd32" : "inherit",
                    textDecoration: "none"
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section: Theme toggle & Mobile Menu toggle */}
        <div className="right-section">
          <div className="button-group">
            <button
              onClick={toggleMode}
              className="home-btn mode-btn"
              aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            >
              <i className={`fas fa-${darkMode ? "sun" : "moon"}`}></i>
            </button>

            <button
              className="toggle"
              onClick={handleToggleMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`nav-links-mobile ${mobileMenuOpen ? "active" : ""}`}
          ref={menuRef}
        >
          <div className="mobile-menu-header">
            <button
              className="esc-button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          <ul className="mobile-nav-list">
            {navItems.map((item, index) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ 
                    color: isActiveRoute(item.path) ? "#32cd32" : "inherit",
                    textDecoration: "none"
                  }}
                >
                  <span className="nav-item-number">
                    {String(index + 1).padStart(2, "0")}.
                  </span>
                  <span className="nav-item-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;