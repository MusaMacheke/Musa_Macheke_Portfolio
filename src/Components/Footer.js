import React from 'react';
import { FaGithub, FaPhone, FaWhatsapp } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { contact, contactEmail, profile } from '../content/siteCopy';
import '../content/Content.css';

const Footer = () => {
  const inquiryMessage = "Hello Musa, I viewed your portfolio and would like to discuss a software development opportunity or project. Please let me know a suitable time to connect.\n\nName: \nCompany: ";
  const whatsappHref = `https://wa.me/27640668708?text=${encodeURIComponent(inquiryMessage)}`;

  return (
    <footer>
      <div className="footer-copy">
        <h4>Have a project or role in mind?</h4>
        <p>{contact.closing}</p>
        <a className="contact-cta" href={contactEmail}>{contact.cta} <span aria-hidden="true">↗</span></a>
        <p className="footer-contact-detail">
          <a href={contactEmail}>{profile.email}</a> · {profile.phones.map((phone, index) => (
            <React.Fragment key={phone}>
              {index > 0 && ' · '}
              <a href={profile.phoneHrefs[index]}>{phone}</a>
            </React.Fragment>
          ))}
        </p>
      </div>
      <div className='footerLinks'>
        <a href={profile.github} target='_blank' rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href={contactEmail} aria-label="Email Musa with a prewritten software development inquiry"><GrMail /></a>
        <a href={profile.phoneHrefs[0]} aria-label="Phone"><FaPhone /></a>
        <a href={whatsappHref} target='_blank' rel="noopener noreferrer" aria-label="Message Musa on WhatsApp with a prewritten inquiry"><FaWhatsapp /></a>
      </div>
      <small className="footer-signoff">© {new Date().getFullYear()} Musa Macheke</small>
    </footer>
  );
}

export default Footer;
