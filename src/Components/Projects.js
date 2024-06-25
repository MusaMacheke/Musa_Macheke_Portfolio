import React, { useEffect } from 'react';
import ProjectBox from './ProjectBox';
import Ekhaya from '../images/Ekhaya.png';
import Zengo from '../images/Zengo.jpg';
import JobPortal from '../images/jobPortal.png';
import Ecommerce from '../images/amazon sample.jpg';
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
    <div>
      <h1 className='projectHeading' data-aos="fade-up">Professional <b>Projects</b></h1>
      <div className='project' data-aos="fade-up">
      <ProjectBox projectPhoto={Ecommerce} projectName="Tech_Mahindra_ecommerce" />
        <ProjectBox projectPhoto={Zengo} projectName="ZenGo_Wallet" />
        
      </div>
    </div>
  );
}

export default Projects;
