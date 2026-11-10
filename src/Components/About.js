import React, { useEffect } from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import Coder from '../LottieFiles/coder.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';

const contactEmail = 'mailto:musamacheke.01@gmail.com?subject=Software%20Development%20Opportunity&body=Hello%20Musa%2C%0A%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20software%20development%20opportunity.%0A%0AHere%20are%20the%20details%3A%0A%0A%5BPlease%20share%20the%20role%2C%20project%2C%20or%20opportunity%20details%5D%0A%0AThank%20you%2C%0A%5BYour%20name%5D';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function for animations
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <>
      <div className="AboutPage">
        <div className="AboutText" data-aos="fade-right">
          <p className="section-kicker">Professional profile</p>
          <h1 className="AboutTextHeading">
            Software development with <b>purpose.</b>
          </h1>
          <p>
            I am <b>Musa Macheke</b>, a software developer based in Pretoria, South Africa, with 3+ years of professional experience. From January 2023 to December 2024, I worked as an <b>Intern Software Engineer</b> at <a href='https://apptechnix.co.za/' aria-label="Apptechnics Mobile and Web Solutions"><b>Apptechnics Mobile and Web Solutions</b></a>, contributing to the FamilyXchange project. From January 2025 to October 2026, I worked as a <b>Junior Front-End Developer</b> at <a href='https://hbros.co.za/' aria-label="HBROS Meter Solutions"><b>HBROS Meter Solutions</b></a>, contributing to the HBROS Mobile Landlord project.
            <br />
            <br />My experience spans web and mobile application development, frontend engineering, APIs, and database systems. I use technologies including <b>JavaScript</b>, <b>TypeScript</b>, <b>C#</b>, <b>PHP</b>, <b>Dart</b>, <b>React Native</b>, <b>.NET</b>, and <b>Flutter</b> to build and maintain software for practical business and user needs.
            <br />
            <br />I am seeking software developer opportunities across Gauteng, including Johannesburg and Pretoria, as well as remote roles in South Africa. I welcome client projects and professional collaborations. Please review my selected projects or <a href={contactEmail}><b>contact me by email</b></a> to discuss an opportunity.
            <br />
          </p>

        </div>

        <div data-aos="fade-left">
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>
      
      <h1 className="SkillsHeading" data-aos="fade-up">Professional Skillset</h1>
      <div className="skills" data-aos="fade-up">
        <Skills skill="Dotnet" />
        <Skills skill="Csharp" />
        <Skills skill="Filezilla" />
        <Skills skill="Zoom" />
        <Skills skill="Zoho" />
        <Skills skill="Bootstrap" />
        <Skills skill="Codeigniter" />
        <Skills skill="PHP" />
        <Skills skill="SQLite" />
        <Skills skill="MySQL" />
        <Skills skill="Dart" />
        <Skills skill="Javascript" />
        <Skills skill="Css" />
        <Skills skill="Html" />
        <Skills skill="Typescript" />
        <Skills skill="Web3" />
        <Skills skill="Flutter" />
        <Skills skill="AndroidSDK" />
        <Skills skill="IOS" />
        <Skills skill="Redux" />
        <Skills skill="Tailwind" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="Expo" />
        <Skills skill="React" />
        <Skills skill="MariaDB" />
        <Skills skill="MongoDb" />
        <Skills skill="Firebase" />
        <Skills skill="Visualstudio" />
        <Skills skill="Jest" />
        <Skills skill="Git" />
        <Skills skill="Npm" />
        <Skills skill="Postman" />
        <Skills skill="Stackoverflow" />
        <Skills skill="AndroidStudio" />
        <Skills skill="VSCode" />
        <Skills skill="GoogleCloud" />
        <Skills skill="Gradle" />
        <Skills skill="Github" />
      </div>
    </>
  );
}

export default About;
