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
import { hero, aboutHeading, aboutParagraphs } from "../content/siteCopy";
import "../content/Content.css";

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
          <p className="hero-kicker"><span className="availability-dot" /> {hero.kicker}</p>
          <h1>{hero.headline[0]}{' '}<br /><b>{hero.headline[1]}</b></h1>
          <h2 className="hero-intro">{hero.subheadline}</h2>
          <Typed />
          <div className="hero-actions">
            <Link className="hero-button hero-button-primary" to={hero.primaryCta.href}>{hero.primaryCta.label} <span aria-hidden="true">↗</span></Link>
            <Link className="hero-button hero-button-secondary" to={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
          </div>
          <p className="hero-note">{hero.note}</p>
        </div>

        <div className="hero-visual" data-aos="fade-up" aria-label="Selected software product screens">
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
          <Link className="text-link" to="/Project">View case studies <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="project featured-projects" data-aos="fade-up">
          <ProjectBox projectPhoto={HBROS} projectName="HBROS_Landlord" />
          <ProjectBox projectPhoto={FX} projectName="FamilyXchange" />
        </div>
      </section>

      <div className="AboutPage">
        <div className="AboutText" data-aos="fade-up">
          <p className="section-kicker">Professional profile</p>
          <h2 className="AboutTextHeading">{aboutHeading[0]} <b>{aboutHeading[1]}</b></h2>
          {aboutParagraphs.map((paragraph) => <p key={paragraph.slice(0, 40)}>{paragraph}</p>)}
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" data-aos="fade-up" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
