import React, { useEffect } from 'react';
import ProjectBox from './ProjectBox';
import FX from '../images/FX.jpg';
import HBROS from '../images/HBROS.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { caseStudies, projectsIntro } from '../content/siteCopy';
import '../content/Content.css';

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
        <p className="section-kicker">{projectsIntro.kicker}</p>
        <h1 className='projectHeading'>{projectsIntro.heading[0]} <b>{projectsIntro.heading[1]}</b></h1>
        <p className="projects-lede">{projectsIntro.lede}</p>
      </header>
      <div className='project' data-aos="fade-up">
        <ProjectBox projectPhoto={HBROS} projectName="HBROS_Landlord" />
        <ProjectBox projectPhoto={FX} projectName="FamilyXchange" />
      </div>

      <div className="case-studies">
        {caseStudies.map((study) => (
          <article className="case-study" id={study.id} key={study.id} data-aos="fade-up">
            <header className="case-study-header">
              <span className="case-study-index">{study.index}</span>
              <h2>{study.name}</h2>
            </header>

            <p className="case-overview">{study.overview}</p>

            <ul className="case-stack" aria-label="Technology stack">
              {study.stack.map((tech) => <li key={tech}>{tech}</li>)}
            </ul>

            <section className="case-features">
              <h3>What the product does</h3>
              <div className="case-feature-grid">
                {study.features.map((feature) => (
                  <article className="case-feature" key={feature.name}>
                    <h4>{feature.name}</h4>
                    <p>{feature.detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <div className="case-grid">
              <section className="case-block">
                <h3>The Challenge</h3>
                <p>{study.challenge}</p>
              </section>
              <section className="case-block">
                <h3>The Architecture &amp; Tech Stack</h3>
                <p>{study.architecture}</p>
              </section>
              <section className="case-block">
                <h3>My Key Contributions</h3>
                <ul>
                  {study.contributions.map((contribution) => <li key={contribution.slice(0, 40)}>{contribution}</li>)}
                </ul>
              </section>
            </div>

            <section className="case-impact">
              <h3>The Impact / Results</h3>
              <p>{study.impact}</p>
            </section>

            <section className="case-lesson">
              <h3>What it taught me</h3>
              <p>{study.lesson}</p>
            </section>

            <div className="case-links">
              {study.links.map((link) => (
                <a href={link.href} key={link.label} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Projects;
