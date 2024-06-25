import React from 'react';
import {FaGithub, FaLinkedin, FaLink } from "react-icons/fa";
import {GrMail, GrLink, GrPhone} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Musa Macheke</h4>
      <div className='footerLinks'>
        <a href="https://github.com/Musachio" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/musa-macheke-4a713122b" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:mcmachek@gmail.com' target='_blank'><GrMail /></a>
        <a href='tel:064066870' target='_blank'><GrPhone /></a>
        {/* <a href='https://resume-cv-80598.web.app/' target='_blank'><FaLink /></a> */}
      </div>
    </footer>
  )
}

export default Footer