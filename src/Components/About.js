import React, { useEffect } from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import Coder from '../LottieFiles/coder.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';
import {
  aboutHeading,
  aboutParagraphs,
  certifications,
  education,
  experience,
  skillIcons,
  softSkills,
  technicalSkills,
  training,
} from '../content/siteCopy';
import '../content/Content.css';

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
        <div className="AboutText" data-aos="fade-up">
          <p className="section-kicker">Professional profile</p>
          <h1 className="AboutTextHeading">
            {aboutHeading[0]} <b>{aboutHeading[1]}</b>
          </h1>
          {aboutParagraphs.map((paragraph) => <p key={paragraph.slice(0, 40)}>{paragraph}</p>)}
        </div>

        <div data-aos="fade-up">
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <section className="detail-section" aria-labelledby="experience-heading">
        <div className="detail-section-head">
          <p className="section-kicker">Where I have worked</p>
          <h2 id="experience-heading" className="certifications-heading">Professional experience</h2>
        </div>
        <div className="experience-detailed">
          {experience.map((job) => (
            <article className="job-card" key={job.company} data-aos="fade-up">
              <header className="job-header">
                <h3>{job.role} — <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">{job.company}</a></h3>
                <p className="job-period">{job.period} · {job.location} · Project: {job.project}</p>
              </header>
              <p className="job-overview">{job.overview}</p>
              <h4 className="detail-subheading">What I did</h4>
              <ul className="job-bullets">
                {job.bullets.map((bullet) => <li key={bullet.slice(0, 45)}>{bullet}</li>)}
              </ul>
              <p className="job-tech"><span>Technologies:</span> {job.tech.join(' · ')}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section" aria-labelledby="education-heading">
        <div className="detail-section-head">
          <p className="section-kicker">How I got here</p>
          <h2 id="education-heading" className="certifications-heading">Education</h2>
        </div>
        <div className="edu-grid">
          {education.map((item) => (
            <article className="edu-card" key={item.qualification} data-aos="fade-up">
              <h3>{item.qualification}</h3>
              <p className="cert-date">{item.institution} · {item.period}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="certifications-section" aria-labelledby="certifications-heading" data-aos="fade-up">
        <div className="detail-section-head">
          <p className="section-kicker">Verified credentials</p>
          <h2 className="certifications-heading" id="certifications-heading">Certifications</h2>
        </div>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <article className="cert-card" key={cert.name}>
              <div className="cert-card-top">
                <span className="cert-tag">{cert.tag}</span>
                <span className="cert-date">{cert.date}</span>
              </div>
              <h3>{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-detail">{cert.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="detail-section" aria-labelledby="training-heading">
        <div className="detail-section-head">
          <p className="section-kicker">Applied learning</p>
          <h2 className="certifications-heading" id="training-heading">Professional training</h2>
        </div>
        <ul className="training-list" data-aos="fade-up">
          {training.map((item) => (
            <li key={item.name}>
              <strong>{item.name}</strong> — {item.provider}, {item.date}. {item.detail}
            </li>
          ))}
        </ul>
      </section>

      <section className="detail-section" aria-labelledby="skills-heading">
        <div className="detail-section-head">
          <p className="section-kicker">What I work with</p>
          <h2 className="certifications-heading" id="skills-heading">Technical and soft skills</h2>
        </div>

        <div className="skill-category-grid" data-aos="fade-up">
          {technicalSkills.map((group) => (
            <article className="skill-category" key={group.category}>
              <h3>{group.category}</h3>
              <div className="chip-list">
                {group.items.map((item) => <span className="chip" key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>

        <h3 className="detail-subheading soft-heading">Soft skills</h3>
        <div className="soft-grid" data-aos="fade-up">
          {softSkills.map((skill) => (
            <article className="soft-card" key={skill.name}>
              <h4>{skill.name}</h4>
              <p>{skill.detail}</p>
            </article>
          ))}
        </div>

        <h2 className="SkillsHeading" data-aos="fade-up">Technology grid</h2>
        <div className="skills" data-aos="fade-up">
          {skillIcons.map((skill) => <Skills skill={skill} key={skill} />)}
        </div>
      </section>
    </>
  );
}

export default About;
