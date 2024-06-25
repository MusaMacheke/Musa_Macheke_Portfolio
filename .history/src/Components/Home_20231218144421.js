import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceCoder.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>MUSA MACHEKE</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love the process of changing a raw idea into a website or a product 
            that impacts lives. I want to do work that challenges me as a developer & work that I can be proud of.<br /><br /> I am fluent in <b>JavaScript</b>, <b>Python</b>, <b>Java</b>, <b>C++</b>, <b>PHP</b> and <b>TypeScript</b> and I've done several projects using <b>React</b>, <b>JQuery</b>, <b>Angular</b>, <b>Node.js</b>, <b>MongoDB</b>, <b>Firebase</b>, <b>React Native</b>, <b>SQL</b>, <b>Bootstrap</b>, <b>Sass</b> and <b>more.</b><br />
            I plan to learn <b>MERN</b>, <b>PEAN</b> and <b>MEAN</b> stack and other technologies in the near future such as <b>blockchain</b>, <b>artificial intelligence</b> and also <b>machine learning</b>. <br /><br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home