import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './login.scss';
import image from '../../utils/helper';
import gsap from 'gsap';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  // ── Refs ────────────────────────────────────────────────────────
  const leftPanelRef  = useRef(null);
  const rightPanelRef = useRef(null);
  const formRef       = useRef(null);
  const titleRef      = useRef(null);

  // ── Entrance animation ──────────────────────────────────────────
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(leftPanelRef.current, {
      x: -60,
      opacity: 0,
      duration: 0.9,
    })
      .from(
        rightPanelRef.current,
        { x: 60, opacity: 0, duration: 0.9 },
        '-=0.7'
      )
      .from(
        titleRef.current,
        { y: 30, opacity: 0, duration: 0.6 },
        '-=0.5'
      )
      .from(
        formRef.current.querySelectorAll('.login-field, .login-actions, .login-divider, .login-footer-text'),
        { y: 20, opacity: 0, stagger: 0.08, duration: 0.5 },
        '-=0.3'
      );
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate async login
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="login-wrapper">
      {/* ── Left — Login Form ──────────────────────────────────── */}
      <div className="login-left" ref={leftPanelRef}>
        {/* Logo */}
        <Link to="/" className="login-logo">
          <img src={image['logo.jpeg']} alt="ARC Logo" className="login-logo__img" />
        </Link>

        <div className="login-form-container">
          {/* Heading */}
          <div className="login-heading" ref={titleRef}>
            <h1 className="login-title">Login</h1>
            <p className="login-subtitle">Enter your account details</p>
          </div>

          {/* Form */}
          <form className="login-form" onSubmit={handleSubmit} ref={formRef}>
            {/* Email */}
            <div className="login-field">
              <label className="login-label" htmlFor="email">Username</label>
              <div className="login-input-wrap">
                <input
                  id="email"
                  name="email"
                  type="text"
                  className="login-input"
                  placeholder="Enter your username or email"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="username"
                />
              </div>
            </div>

            {/* Password */}
            <div className="login-field">
              <label className="login-label" htmlFor="password">Password</label>
              <div className="login-input-wrap">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  className="login-input"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="login-eye-btn"
                  onClick={() => setShowPassword((p) => !p)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    // Eye-off icon
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    // Eye icon
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="login-actions">
              <Link to="/forgot-password" className="login-forgot">
                Forgot Password?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`login-submit-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="login-spinner" />
              ) : (
                'Login'
              )}
            </button>

            {/* Divider */}
            <div className="login-divider">
              <span>or continue with</span>
            </div>

            {/* Social buttons */}
            <div className="login-social">
              <button type="button" className="login-social-btn">
                <svg width="18" height="18" viewBox="0 0 48 48" fill="none">
                  <path fill="#4285F4" d="M47.5 24.5c0-1.6-.1-3.2-.4-4.7H24v8.9h13.2c-.6 3-2.4 5.6-5 7.3v6h8.1c4.7-4.4 7.2-10.8 7.2-17.5z" />
                  <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-8.1-6c-2.1 1.4-4.8 2.3-7.8 2.3-6 0-11-4-12.8-9.4H2.9v6.2C6.9 42.9 15 48 24 48z" />
                  <path fill="#FBBC05" d="M11.2 29.1A14.6 14.6 0 0 1 11.2 19l-8.3-6.2A24 24 0 0 0 0 24c0 3.9.9 7.5 2.9 10.9l8.3-5.8z" />
                  <path fill="#EA4335" d="M24 9.5c3.4 0 6.4 1.2 8.8 3.4l6.5-6.5C35.9 2.6 30.4 0 24 0 15 0 6.9 5.1 2.9 13.1l8.3 6.4C13 13.5 18 9.5 24 9.5z" />
                </svg>
                Google
              </button>
              <button type="button" className="login-social-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.8-1.3-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4 18 4.3 18 4.3c.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3z" />
                </svg>
                GitHub
              </button>
            </div>
          </form>

          {/* Footer */}
          <p className="login-footer-text">
            Don&apos;t have an account?{' '}
            <Link to="#/" className="login-signup-link">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* ── Right — Brand Panel ────────────────────────────────── */}
      <div className="login-right" ref={rightPanelRef}>
        {/* Decorative blobs */}
        <div className="login-right__blob login-right__blob--1" />
        <div className="login-right__blob login-right__blob--2" />

        {/* Replace src with your image */}
        {/* <div className="login-right__image-wrap">
          <img
            src="/src/assets/images/login-illustration.png"
            alt="ARC Trading Platform"
            className="login-right__image"
          />
        </div> */}

        {/* Brand copy */}
        <div className="login-right__content">
          <h2 className="login-right__title">
            Welcome to <span className="login-right__brand">VANTREX</span>
          </h2>
          <p className="login-right__desc">
            Login to access your account and start your trading journey
          </p>

          {/* Stats strip */}
          <div className="login-right__stats">
            <div className="login-stat">
              <span className="login-stat__value">300K+</span>
              <span className="login-stat__label">Accounts</span>
            </div>
            <div className="login-stat__divider" />
            <div className="login-stat">
              <span className="login-stat__value">90%</span>
              <span className="login-stat__label">Profit Split</span>
            </div>
            <div className="login-stat__divider" />
            <div className="login-stat">
              <span className="login-stat__value">$300K</span>
              <span className="login-stat__label">Max Funded</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;