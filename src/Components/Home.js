import React, { useEffect } from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceCoder.json";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";

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
      <div className="HomePage">
        <div className="HomeText" data-aos="fade-up">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>MUSA MACHEKE</b>
          </h1>
          <Typed />
        </div>

        <Lottie
          className="illustration"
          animationData={SpaceBoy}
          loop={true}
          data-aos="fade-left"
        />
      </div>

      <div className="AboutPage">
        <div className="AboutText" data-aos="fade-right">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            I love the process of changing a raw idea into a website/mobile or a
            product that impacts lives. I want to do work that challenges me as
            a developer & work that I can be proud of.
            <br />
            <br />I am good in <b>C#</b>, <b>JavaScript</b>, <b>Php</b>, <b>SQL</b>, <b>Dart</b>, and <b>TypeScript</b> and I've
            done 3 projects using <b>React Native</b>, <b>DotNet Core</b>, <b>PHP with CodeIgniter</b> with <b>MVC framework</b>, <b>Flutter</b>,{" "}
            <b>Node.js</b>, <b>Expo</b>, <b>Express.js</b>, <b>Web3.js</b>,{" "}
            <b>CRUD API</b> with <b>SQLite</b>, <b>RESTful API</b> with <b>MySQL</b>, <b>MongoDB</b>,{" "} 
            <b>Coinbase</b>, <b>BlockCypher</b>, <b>FileZilla</b>, <b>WorkBench</b>, <b>MySQL</b> and <b>MariaDB</b>.
            <br />
            <br />I plan to learn <b>latest technologies</b>, <b>more programming languages</b> and <b>other
            frameworks</b> in the near future. <br />
            <br />
            Also, I love <b>coffee</b>{" "}
            <CiCoffeeCup
              className="shaking-cup"
              style={{ scale: "1.5", rotate: "20deg" }}
            />
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
