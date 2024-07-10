import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaWhatsapp, FaFilePdf } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <h4>Contact Me</h4>
      <div className='footerLinks'>
        <a href="https://github.com/MusaMacheke" target='_blank' rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/musa-macheke-2abba2315/" target='_blank' rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href='mailto:musamacheke.01@gmail.com' aria-label="Email"><GrMail /></a>
        <a href='tel:0640668708' aria-label="Phone"><FaPhone /></a>
        {/* <a href='https://wa.me/0640668708' target='_blank' rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a> */}
        <a href='https://drive.google.com/file/d/1BrnYAw0rPxFco04LrEoC55yCvVFySVNU/view?usp=sharing' target='_blank' rel="noopener noreferrer" aria-label="Resume"><FaFilePdf /></a>
      </div>
    </footer>
  );
}

export default Footer;
