import React from 'react';
import ProjectBox from './ProjectBox';
import Ekhaya from '../images/Ekhaya.png';
import Zengo from '../images/Zengo.png';
import Zengo from '../images/Zengo.png';

const Projects = () => {
  return (
    <div>
      <div className='project'>
        <h1 className='projectHeading'>Projects</h1>
      </div>
      <h2 className='projectHeading'><b>Work Projects</b></h2>
      <div className='project'>
        <ProjectBox projectPhoto={Zengo} projectName="Zengo" />
      </div>
      <h2 className='projectHeading'><b>Side Projects</b></h2>
      <div className='project'>
        <ProjectBox projectPhoto={Ekhaya} projectName="Ekhaya" />
      </div>
      <div className='project'>
        <ProjectBox projectPhoto={Ekhaya} projectName="Ekhaya" />
      </div>
    </div>
  )
}

export default Projects