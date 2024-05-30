import React from 'react';
import ArindamImage from '../assets/page-content/home-img/Arindam-portrait-small.png';
import './css/AboutSection.css';
import { HoverAnchor } from './reuseable-comp';

const AboutSection = () => {
 return (
    <section className="about-section" id="about">
        <h1>About<HoverAnchor href="#about" label="⌗" ariaLabel="About Section Anchor" />
</h1>
      <div className="about-content">
        <div className='about-img-container'>
          <img className="about-img" src={ArindamImage} alt="Arindam Ghosh" aria-label="Arindam Ghosh" />
        </div>
        <div className="about-text">
            <div>
            <p>
            <strong>Hi there!</strong> I&rsquo;m <code>Arindam Ghosh</code>, a computer vision researcher working at the intersection of computer vision and medical imaging. My passion lies applying AI to solve Heathcare. I&rsquo;ve led an international team to the top 30 in NASA Space Apps 2022, spoke at the NASA TOPS forum in April 2023, and organized the Barcelona high school Scihack event. Currently, I&rsquo;m working on my startup <a href="https://visionlabs.tech/">VisionLabs</a> to build an AI-PACS system for radiologists and serving as a principal scientific researcher at ESTESIA, leveraging geospatial data for improved water management in Chile.
            </p>
            <p> 
            Outside of work, I like to explore new places, getting geeky about gadgets or trying to fit &ldquo;learn to swim&rdquo; 🏊🏼 and &ldquo;learn to play piano&rdquo; 🎹 in my schedule.
            </p>
            <p>
            <a href="https://github.com/aryndam9">Github</a> • <a href="https://www.linkedin.com/in/arindam-ghosh96">Linkedin</a> • <a href="https://orcid.org/0000-0003-2426-3115">ORCID</a> • <a href="https://arindamghosh.bio.link/">bio.link</a>
            </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
