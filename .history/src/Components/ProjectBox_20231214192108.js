import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    ZengoDesc: "Zengo-X",
    ZengoGithub: "https://github.com/ZenGo-X",
    ZengoWebsite: "https://zengo.com/",

    EkhayaDesc: "Ekhaya#36 Tournament website.",
    EkhayaGithub: "https://github.com/ZenGo-X",
    EkhayaWebsite: "https://ekhaya36-tournament.web.app/",

    EkhayaDesc: "Job-portal.",
    EkhayaGithub: "https://github.com/Musachio/Job-Seeker",
    EkhayaWebsite: "https://ekhaya36-tournament.web.app/",

  };

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Live</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox