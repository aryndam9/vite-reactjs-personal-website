import React from 'react';
import './css/ContactSection.css';
import { HoverAnchor } from './reuseable-comp';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <h1>Contact<HoverAnchor href="#contact" label="⌗" ariaLabel="Contact Section Anchor" /></h1>
      <div className="contact-content">
        <p>Feel free to reach out to me via these platforms:</p>
        <ul className="contact-list">
          <li>
            <a href="https://github.com/aryndam9" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/arindam-ghosh96" target="_blank" rel="noopener noreferrer">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://orcid.org/0000-0003-2426-3115" target="_blank" rel="noopener noreferrer">
              ORCID
            </a>
          </li>
          <li>
            Email: arindamghosh(dot)work(at)gmail(dot)com
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;