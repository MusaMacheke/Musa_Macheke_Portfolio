import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    
    ZenGo_WalletGithub: "https://github.com/MusaMacheke/ZenGo_Wallet",
    ZenGo_WalletWebsite: "https://zengo.com/",
    ZenGo_WalletDesc: "React Native, Web3.js, BlockCypher, Coinbase Commerce, Node.js, Express.js, JavaScript, TypeScript, MariaDB, A2 Hosting.",
    
    Tech_Mahindra_ecommerceGithub: "https://github.com/MusaMacheke/Tech_Mahindra_ecommerce",
    Tech_Mahindra_ecommerceWebsite: "https://docs.google.com/uc?export=download&id=1WtuIU4RVDU0ZkiyZc8ja96seV0Zg_Lz3",
    Tech_Mahindra_ecommerceDesc: "Flutter, Express.js, MongoDB, Node.js, Yoco, JavaScript, Dart.",

    FamilyXchangeGithub: "https://github.com/MusaMacheke/FX",
    FamilyXchangeWebsite: "https://familyxchange.com/wp/",
    FamilyXchangeDesc: "Flutter, Php, SQL, SQLite, Codeigniter, FileZilla, WorkBench, MySQL, Dart.",

    HBROS_LandlordGithub: "https://github.com/MusaMacheke/HBROS-landlord-app",
    HBROS_LandlordWebsite: "https://play.google.com/store/apps/details?id=com.musa_hbros09.HBROSmobile&hl=en",
    HBROS_LandlordDesc: "TypeScript, React Native, MySQL, C#, DotNet3 Core, WorkBench, JavaScript.",
  };

  const githubLink = desc[projectName + 'Github'];
  const websiteLink = desc[projectName + 'Website'];
  const description = desc[projectName + 'Desc'];

  return (
    
    
    <div className='projectBox'>
      
      <img className='projectPhoto' src={projectPhoto} alt={`Screenshot of ${projectName} project`} />
      <div>
        <h3>{projectName}</h3>
        <p>{description}</p>
        <div>
          {githubLink && (
            <a href={githubLink} target='_blank' rel='noopener noreferrer'>
              <button className='projectbtn'><FaGithub /> Github</button>
            </a>
          )}
          <a href={websiteLink} target='_blank' rel='noopener noreferrer'>
            <button className='projectbtn'><CgFileDocument /> Live</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
