import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Musa Macheke</b> and I'm from Pretoria, South
            Africa. I'm a <b>software developer</b> who specialize in <b>frontend</b>, <b>backend</b>, <b>mobile</b> and <b>web</b> development with over <b> year</b> of work experience woking remotely at <a href='https://zengo.com/' title='workplace'><b>Zengo Wallet</b></a> and I also work as <b>freelancer</b> software developer during my free time by building, developing web and mobile applications for customer clients who require my work services and skills. <br />
            <br />I'm proficient in <b>multiple programming languages</b> and excellent at understanding <b>client requirements</b>. Demonstrating <b>strong problem-solving</b> skills, adaptability, and a keen interest in continuous learning. Committed to delivering <b>high-quality</b> results and contributing effectively to collaborative team environments I love to create real-life projects with <b>beautiful designs</b>, you can check out some of my work in the projects section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>
      
      <h1 className="SkillsHeading">Technology Stack</h1>

      <h1 className="SkillsHeading"><b>Client-side</b></h1>
      <div className="skills">
        <Skills skill="Laravel" />
        <Skills skill="Gulp" />
        <Skills skill="Sass" />
        <Skills skill="Vue" />
        <Skills skill="Angular" />
        <Skills skill="Jquery" />
        <Skills skill="React" />
        <Skills skill="Javascript" />
        <Skills skill="Bootstrap" />
        <Skills skill="Css" />
        <Skills skill="Html" />
        <Skills skill="Next" />
        <Skills skill="Three" />
        <Skills skill="Tailwind" />
        <Skills skill="Redux" />
        <Skills skill="Typescript" />
      </div>

      <h1 className="SkillsHeading"><b>Server-side</b></h1>
      <div className="skills">
        <Skills skill="MariaDB" />
        <Skills skill="Python" />
        <Skills skill="PHP" />
        <Skills skill="Ruby" />
        <Skills skill="Java" />
        <Skills skill="MySQL" />
        <Skills skill="Cplusplus" />
        <Skills skill="Redis" />
        <Skills skill="Apache" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Vercel" />
        <Skills skill="Firebase" />
      </div>

      <h1 className="SkillsHeading"><b>Development and operations</b></h1>
      <div className="skills">
        {/* <Skills skill="Docker" /> */}
        <Skills skill="Jest" />
        <Skills skill="Cloudflare" />
        <Skills skill="AWS" />
        <Skills skill="GoogleCloud" />
        <Skills skill="Sentry" />
        <Skills skill="Git" />
        <Skills skill="Npm" />
        <Skills skill="Expo" />
      </div>

      <h1 className="SkillsHeading"><b>Tools</b></h1>
      <div className="skills">
        <Skills skill="Postman" />
        <Skills skill="Stackoverflow" />
        <Skills skill="JFrog" />
        <Skills skill="AndroidStudio" />
        <Skills skill="VSCode" />
        <Skills skill="Figma" />
      </div>

    </>
  );
}

export default About