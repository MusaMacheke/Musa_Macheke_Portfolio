import React, { useEffect } from 'react';
import ProjectBox from './ProjectBox';
import FX from '../images/FX.jpg';
import HBROS from '../images/HBROS.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function for animations
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <main className="projects-page">
      <header className="projects-intro" data-aos="fade-up">
        <p className="section-kicker">Selected work · 02 projects</p>
        <h1 className='projectHeading'>Products built for <b>people.</b></h1>
        <p className="projects-lede">Two mobile product projects focused on property services and helping families organise everyday responsibilities.</p>
      </header>
      <div className='project' data-aos="fade-up">
        <ProjectBox projectPhoto={HBROS} projectName="HBROS_Landlord" />
        <ProjectBox projectPhoto={FX} projectName="FamilyXchange" />

        
      </div>
    </main>
  );
}

export default Projects;
