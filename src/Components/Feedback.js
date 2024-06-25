import React, { useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import Feed from '../LottieFiles/Feedback.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Feedback = () => {
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
      <div className="FeedbackContainer">
        <div className="FeedbackPage" data-aos="fade-up">
          <div className="FeedbackText">
            <h2 className="FeedbackTextHeading">Feedback from Mandla Ngwenya</h2>
            <h3 className="FeedbackTextSubheading">Admin of <a href='https://mern-jobportal-rh5a.onrender.com/'>Job Portal</a> website</h3>
            <p>All thanks to Musa, now I can help other jobseekers to gain access to job vacancies.</p>
          </div>
          <div>
            <Tilt>
              <Lottie
                className="illustration"
                animationData={Feed}
                loop={true}
              />
            </Tilt>
          </div>
        </div>

        <div className="FeedbackPage" data-aos="fade-up" data-aos-delay="200">
          <div className="FeedbackText">
            <h2 className="FeedbackTextHeading">Feedback from Siphamandla Whati</h2>
            <h3 className="FeedbackTextSubheading">Founder of <a href='https://ekhaya36-tournament.web.app/'>Ekhaya#36 Tournament</a></h3>
            <p>My organization is now known by everyone thanks to Musa; he elevated our organization to new heights.</p>
          </div>
          <div>
            <Tilt>
              <Lottie
                className="illustration"
                animationData={Feed}
                loop={true}
              />
            </Tilt>
          </div>
        </div>

        <div className="FeedbackPage" data-aos="fade-up" data-aos-delay="400">
          <div className="FeedbackText">
            <h2 className="FeedbackTextHeading">Feedback from Daniel Mabunda</h2>
            <h3 className="FeedbackTextSubheading">Senior fintech developer at <a href='https://zengo.com/'>Zengo Ltd</a></h3>
            <p>Musa is a skilled junior fintech developer who took our company to great success. Our clients are satisfied with our services all thanks to Musa and other group of developers.</p>
          </div>
          <div>
            <Tilt>
              <Lottie
                className="illustration"
                animationData={Feed}
                loop={true}
              />
            </Tilt>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feedback;
