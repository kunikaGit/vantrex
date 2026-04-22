import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';
import image from '../../utils/helper';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribe email:', email);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__content">
          {/* Brand Section */}
          <div className="footer__brand">
            <h3 className="footer__brand-title">
              <img src={image['logo.jpeg']} alt='logo' className='w-30'/>
            </h3>
            <p className="footer__brand-description">
              VANTREX Funded is a prop firm backed by the globally recognized broker VANTREX Markets. 
              At VANTREX Funded we aim to take on the prop trading space by providing sustainable 
              trading challenges that empower traders with top tier customer service, industry 
              leading technology, and efficient payouts, all managed by a team of CFD professionals 
              with 20+ years of combined industry experience.
            </p>
            
            <div className="footer__socials">
              <h4 className="footer__socials-title">Join Socials</h4>
              <div className="footer__socials-list">
                <a href="#" className="footer__socials-link">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="footer__socials-link">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Z"/>
                  </svg>
                </a>
                <a href="#" className="footer__socials-link">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                  </svg>
                </a>
                <a href="#" className="footer__socials-link">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="#" className="footer__socials-link">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="footer__socials-link">
                  <svg fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer__newsletter">
            <h4 className="footer__newsletter-title">Newsletter for subscribe</h4>
            <form onSubmit={handleSubscribe} className="footer__newsletter-form">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="footer__newsletter-input"
                required
              />
              <button type="submit" className="footer__newsletter-button">
                Subscribe
              </button>
            </form>
          </div>

          {/* Navigation Links */}
          <div className="footer__links">
            <div className="footer__links-section">
              <h4 className="footer__links-section-title">Main Home</h4>
              <ul className="footer__links-section-list">
                <li className="footer__links-section-item">
                  <Link to="/" className="footer__links-section-link">Home</Link>
                </li>
                <li className="footer__links-section-item">
                  <Link to="/about" className="footer__links-section-link">About</Link>
                </li>
                <li className="footer__links-section-item">
                  <Link to="/faq" className="footer__links-section-link">FAQ</Link>
                </li>
                <li className="footer__links-section-item">
                  <Link to="/affiliate" className="footer__links-section-link">Affiliate</Link>
                </li>
                <li className="footer__links-section-item">
                  <Link to="/blog" className="footer__links-section-link">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="footer__links-section">
              <h4 className="footer__links-section-title">Legal</h4>
              <ul className="footer__links-section-list">
                <li className="footer__links-section-item">
                  <Link to="/privacy-policy" className="footer__links-section-link">Privacy Policy</Link>
                </li>
                <li className="footer__links-section-item">
                  <Link to="/terms-conditions" className="footer__links-section-link">Terms and conditions</Link>
                </li>
                <li className="footer__links-section-item">
                  <Link to="/outline-fees" className="footer__links-section-link">Outline & Fees</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="footer__disclaimer">
          <p className="footer__disclaimer-text">
            VANTREX.Funded is owned and operated by VANTREX Markets (SVG) LLC (2090 LLC 2022), Euro House, Richmond Hill Road, P.O Box 2897, Kingstown, Saint Vincent and the Grenadines VC0100. Treasury services are facilitated by BBF Treasury Pty Ltd. The content of this website is not intended for residents of any country where its distribution would contravene local laws. VANTREX.Funded offers only virtual accounts to all users within its challenges. Funds paid to VANTREX.Funded do not constitute client money and are a subscription paid to VANTREX.Funded to participate in trading challenges. Trading on Margin Carries High Risk.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <p className="footer__bottom-copyright">
            © 2025 VANTREX.Funded. All rights reserved.
          </p>
          <div className="footer__bottom-links">
            <Link to="/privacy-policy" className="footer__bottom-link">Privacy Policy</Link>
            <Link to="/terms-conditions" className="footer__bottom-link">Terms and conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;