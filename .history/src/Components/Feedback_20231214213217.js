import React from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Feed from '../LottieFiles/Feedback.json';

const Feedback = () => {
  return (
    <>
            <div className="FeedbackPage">
        <div className="FeedbackText">
          <h1 className="FeedbackTextHeading">
            <b>M</b>
          </h1>
          <h1 className="FeedbackTextHeading">
            <b>Founder of <a href='https://mern-jobportal-rh5a.onrender.com/'>Job Portal</a></b>
          </h1>
          <p>
            All thanks to Musa, now i can help other jobseekers to gain acess to job vacancies. 
          </p>
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

      <div className="FeedbackPage">
        <div className="FeedbackText">
          <h1 className="FeedbackTextHeading">
            <b>Siphamandla Whati</b>
          </h1>
          <h1 className="FeedbackTextHeading">
            <b>Founder of <a href='https://ekhaya36-tournament.web.app/'>Ekhaya#36 Tournament</a></b>
          </h1>
          <p>
            My organistion is now known by everyone thanks to Musa, he elevated our organization into new heights.
          </p>
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

      <div className="FeedbackPage">
        <div className="FeedbackText">
          <h1 className="FeedbackTextHeading">
            <b>Daniel Mabunda</b>
          </h1>
          <h1 className="FeedbackTextHeading">
            <b>Senior fintech developer at <a href='https://zengo.com/'>Zengo</a></b>
          </h1>
          <p>
            Musa is a skilled junior fintech developer who took our company to great success, always completes his tasks at work, he does what our clients requires and he is also a skilled junior fullstack developer. Our clients are satisfied with our services all thanks to Musa and other group of developers.
          </p>
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

    </>
  );
}

export default Feedback