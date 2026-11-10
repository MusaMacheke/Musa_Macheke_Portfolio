import React from 'react';
import { FaGithub, FaPhone, FaWhatsapp } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const inquiryMessage = "Hello Musa, I viewed your portfolio and would like to discuss a software development opportunity or project. Please let me know a suitable time to connect.\n\nName: \nCompany: ";
  const emailHref = `mailto:musamacheke.01@gmail.com?subject=${encodeURIComponent("Software Development Inquiry")}&body=${encodeURIComponent(inquiryMessage)}`;
  const whatsappHref = `https://wa.me/27640668708?text=${encodeURIComponent(inquiryMessage)}`;

  return (
    <footer>
      <div className="footer-copy"><h4>Have a good project in mind?</h4><p>Let’s build something useful.</p></div>
      <div className='footerLinks'>
        <a href="https://github.com/MusaMacheke" target='_blank' rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        {/* <a href="https://www.linkedin.com/in/musa-macheke-2abba2315/" target='_blank' rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a> */}
        <a href={emailHref} aria-label="Email Musa with a prewritten software development inquiry"><GrMail /></a>
        <a href='tel:0640668708' aria-label="Phone"><FaPhone /></a>
        <a href={whatsappHref} target='_blank' rel="noopener noreferrer" aria-label="Message Musa on WhatsApp with a prewritten inquiry"><FaWhatsapp /></a>
        {/* <a href='https://drive.google.com/file/d/1SNk-SUwDyVeUDRWTOdxP6GiZeEOQeCkK/view?usp=sharing' target='_blank' rel="noopener noreferrer" aria-label="Resume"><FaFilePdf /></a> */}
      </div>
      <small className="footer-signoff">© {new Date().getFullYear()} Musa Macheke</small>
    </footer>
  );
}

export default Footer;
