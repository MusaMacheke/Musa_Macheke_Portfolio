import React, { useEffect } from "react";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import HBROS from "../images/HBROS.png";
import FX from "../images/FX.jpg";
import ProjectBox from "./ProjectBox";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const contactEmail = "mailto:musamacheke.01@gmail.com?subject=Software%20Development%20Opportunity&body=Hello%20Musa%2C%0A%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20software%20development%20opportunity.%0A%0AHere%20are%20the%20details%3A%0A%0A%5BPlease%20share%20the%20role%2C%20project%2C%20or%20opportunity%20details%5D%0A%0AThank%20you%2C%0A%5BYour%20name%5D";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function for animations
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);

  return (
    <div>
      <main className="HomePage">
        <div className="HomeText" data-aos="fade-up">
          <p className="hero-kicker"><span className="availability-dot" /> Pretoria-based · Targeting roles across Gauteng and remotely</p>
          <h1>Code with purpose.<br /><b>Products with impact.</b></h1>
          <p className="hero-intro">I’m Musa Macheke, a software developer building reliable web and mobile products. I bring practical experience across frontend, backend, and mobile development, and I’m ready to help ambitious teams move ideas into the hands of users.</p>
          <Typed />
          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="/Project">View selected projects <span aria-hidden="true">↗</span></a>
            <a className="hero-button hero-button-secondary" href={contactEmail}>Contact me</a>
          </div>
          <p className="hero-note">Available for software developer roles and client projects</p>
        </div>

        <div className="hero-visual" data-aos="fade-left" aria-label="Selected software product screens">
          <div className="hero-visual-glow" />
          <div className="hero-screen hero-screen-main"><img src={HBROS} alt="HBROS landlord mobile application interface" /></div>
          <div className="hero-screen hero-screen-side"><img src={FX} alt="FamilyXchange mobile application screens" /></div>
          <div className="hero-stamp"><span>MM</span><small>SOFTWARE<br />ENGINEER</small></div>
          <div className="hero-float-label"><span className="availability-dot" /> Building what’s next</div>
        </div>
      </main>

      <section className="featured-work" aria-labelledby="featured-heading">
        <div className="section-header" data-aos="fade-up">
          <div><p className="section-kicker">Selected work</p><h2 id="featured-heading">Ideas, made <b>real.</b></h2></div>
          <Link className="text-link" to="/Project">View project details <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="project featured-projects" data-aos="fade-up">
          <ProjectBox projectPhoto={HBROS} projectName="HBROS_Landlord" />
          <ProjectBox projectPhoto={FX} projectName="FamilyXchange" />
        </div>
      </section>

      <div className="AboutPage">
        <div className="AboutText" data-aos="fade-right">
          <p className="section-kicker">Professional profile</p>
          <h2 className="AboutTextHeading">Thoughtful engineering. <b>Practical results.</b></h2>
          <p>
            I am a software developer based in Pretoria, South Africa. I focus on creating dependable digital products that address real user and business needs. My experience includes web and mobile application development, API integration, and database-backed systems.
            <br />
            <br />My technical experience includes <b>C#</b>, <b>JavaScript</b>, <b>TypeScript</b>, <b>PHP</b>, and <b>Dart</b>, with frameworks and platforms such as <b>.NET</b>, <b>React Native</b>, <b>Flutter</b>, and <b>Node.js</b>. I work well with cross-functional teams and value clear communication, maintainable code, and continuous improvement.
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" data-aos="fade-up" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
