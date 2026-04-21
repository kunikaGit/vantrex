import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.scss';
import image from '../../utils/helper';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`home3-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="home3-header__container container">

        {/* Logo */}
        <Link to="/" className="home3-header__logo">
          <img src={image['logo.jpeg']} alt="ARC Logo" className="logo-img" />
        </Link>

        {/* Desktop Nav */}
        <nav className={`home3-header__nav ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/faq" className="nav-link">FAQ</Link>
          <Link to="/how-it-works" className="nav-link">How it Works</Link>
          <Link to="/about" className="nav-link">About us</Link>
        </nav>

        {/* Actions */}
        <div className="home3-header__actions">

          <div className="language-selector">
            <span>EN</span>
          </div>

          <button
            className="login-btn"
            onClick={() => navigate('/login')}
          >
            Log In
          </button>

          <button className="get-started-btn">
            Enter App
          </button>

          {/* Hamburger */}
          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>
    </header>
  );
};

export default Header;