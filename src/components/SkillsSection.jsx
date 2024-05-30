import React from 'react';
import SkillsImage from '../assets/page-content/home-img/arindam_poster_talk.jpg';
import './css/SkillsSection.css';
import { HoverAnchor } from './reuseable-comp';

const SkillsSection = () => {
  return (
    <section className="skills-section" id="skills">
      <h1>Skills<HoverAnchor href="#skills" label="⌗" ariaLabel="Skills Section Anchor" /></h1>
      <div className="skills-content">
        <div className="skills-text">
          <ul>
            <li>Image Processing and Computer Vision using OpenCV, TensorFlow, PyTorch</li>
            <li>Medical Image Analysis and for biomedical image applications</li>
            <li>Training and deploying Deep Learning models</li>
            <li>Geospatial Data Analysis with QGIS, GDAL, GeoPandas</li>
            <li>Created large dataset of geospatial satellite imagery using INSAT-3D/3DR data</li>
            <li>Cloud Computing with AWS, experience with PySpark, SQL</li>
            <li>Web Development with React</li>
            <li>Python Programming for computer vision, data analysis, machine learning</li>
            <li>C/C++ Programming for performance-critical vision applications</li>
            <li>Parallel Programming with CUDA for GPU optimization</li>
          </ul>
          <p>View all my projects and experiences by tag to find something more specific.</p>
        </div>
        <div className="skills-img-container">
            <img className="skills-img" src={SkillsImage} alt="Arindam Ghosh giving presentation" aria-label="Arindam Ghosh giving presentation" />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;