import React, { useEffect } from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import Coder from '../LottieFiles/coder.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';

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
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Musa Macheke</b> and I'm from Pretoria, South
            Africa. I'm a <b>junior full-stack developer</b> with over <b>2+</b> years of
            work experience. <br />
            <br />I worked as a <b>Junior full-stack developer</b>, <b>Junior developer</b>, and <b>Intern developer</b> at companies such as <a href='https://apptechnix.co.za/' aria-label="Apptechnics Mobile App Solutions"><b>Apptechnics Mobile App Solutions</b></a>, <a href='https://www.techmahindra.com/' aria-label="Tech Mahindra"><b>Tech Mahindra</b></a> and <a href='https://zengo.com/' aria-label="ZenGo"><b>ZenGo</b></a>. I love to create
            original projects with beautiful designs, you can check out some of
            my work in the projects section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
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
