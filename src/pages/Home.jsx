import React from 'react';
import { 
  AboutSection, 
  SkillsSection,
  ContactSection,
} from '../components';
import './Home.css';

const Home = () => {
  return (
    <div className='home-container'>
        <AboutSection />
        <hr className='section-divider' />
        <SkillsSection />
        <hr className='section-divider' />
        <ContactSection />
    </div>
  );
};

export default Home;
