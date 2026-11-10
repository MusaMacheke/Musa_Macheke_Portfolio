import React from 'react';
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";


const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    FamilyXchangeGithub: "https://github.com/MusaMacheke/FX",
    FamilyXchangeWebsite: "https://familyxchange.com/wp/",
    FamilyXchangeDesc: "Flutter, Dart, SQLite, MySQL, Node.js, MySQL Workbench, FileZilla, TypeScript.",

    HBROS_LandlordGithub: "https://github.com/MusaMacheke/HBROS-landlord-app",
    HBROS_LandlordWebsite: "https://play.google.com/store/apps/details?id=com.musa_hbros09.HBROSmobile&hl=en",
    HBROS_LandlordDesc: "React Native, TypeScript, MySQL Workbench.",
  };

  const projectTitles = {
    HBROS_Landlord: "HBROS Mobile Landlord",
    FamilyXchange: "FamilyXchange",
  };

  const githubLink = desc[projectName + 'Github'];
  const websiteLink = desc[projectName + 'Website'];
  const description = desc[projectName + 'Desc'];

  return (
    
    
    <div className='projectBox'>
      
      <img className='projectPhoto' src={projectPhoto} alt={`Screenshot of ${projectName} project`} />
      <div className="projectDetails">
        <h3>{projectTitles[projectName] || projectName.replaceAll('_', ' ')}</h3>
        <p>{description}</p>
        <div className="projectActions">
          {githubLink && (
            <a className='projectbtn' href={githubLink} target='_blank' rel='noopener noreferrer' aria-label={`View ${projectName} source on GitHub`}><FaGithub /> Source</a>
          )}
          <a className='projectbtn' href={websiteLink} target='_blank' rel='noopener noreferrer'><CgFileDocument /> View project</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectBox;
