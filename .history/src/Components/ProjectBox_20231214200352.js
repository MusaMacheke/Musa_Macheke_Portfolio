import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    ZengoDesc: "Zengo is the self-custodial wallet with no seed phrase vulnerability. Protect and manage all of your cryptocurrencies and NFTs with the crypto wallet that's secure by default. Buy, sell, trade, and send over 120+ crypto and Web3 assets, all with the power of MPC security, a secure recovery model and unparalleled 24/7 customer support.",
    ZengoGithub: "https://github.com/ZenGo-X",
    ZengoWebsite: "https://zengo.com/",

    EkhayaDesc: "Ekhaya#36 Tournament website.",
    EkhayaGithub: "https://github.com/ZenGo-X",
    EkhayaWebsite: "https://ekhaya36-tournament.web.app/",

    JobPortalDesc: "MERN stack",
    JobPortalGithub: "https://github.com/Musachio/Job-Seeker",
    JobPortalWebsite: "https://mern-jobportal-rh5a.onrender.com/",

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