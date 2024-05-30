import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
    <hr className='footer-section-divider' />
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Arindam Ghosh. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/aryndam9" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/arindam-ghosh96" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          {/* <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;