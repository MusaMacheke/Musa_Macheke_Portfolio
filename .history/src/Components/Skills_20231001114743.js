import React from 'react'; 
import {FaReact, FaGitAlt, FaGithub, FaNpm, FaFigma, FaBootstrap } from "react-icons/fa";
import {DiNodejs, DiJavascript1, DiCss3, DiHtml5} from "react-icons/di";
import {SiExpress, SiMongodb, SiVercel, SiNextdotjs, SiThreedotjs, SiTailwindcss, SiExpo, SiRedux, SiTypescript, SiFirebase} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Figma : <FaFigma/>,
        Bootstrap: <FaBootstrap/>,
        Vercel : <SiVercel/>,
        Firebase: <SiFirebase />,
        Css : <DiCss3/>,
        Html : <DiHtml5/>,
        Next : <SiNextdotjs/>,
        Three : <SiThreedotjs/>,
        Tailwind : <SiTailwindcss/>,
        Expo: <SiExpo />,
        Redux: <SiRedux />,
        Typescript : <SiTypescript/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
