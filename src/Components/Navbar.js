import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash, BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';
import resumePdf from '../Resume_Current.pdf';

const Nav = ({ toggleTheme, theme = 'dark' }) => {
    const [navbarBlur, setNavbarBlur] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing function for animations
            once: true, // Whether animation should happen only once
            mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);

    useEffect(() => {
        const scrollHandler = () => {
            setNavbarBlur(window.scrollY >= 20);
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleClickOutside = useCallback((event) => {
        if (navRef.current && !navRef.current.contains(event.target)) {
            closeMenu();
        }
    }, []);

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen, handleClickOutside]);

    return (
        <nav className={navbarBlur ? 'Navbar blur' : 'Navbar'} data-aos="fade-down">
            <Link title='Musa Macheke home' to="/" className='Logo' onClick={closeMenu}>MM</Link>

            <button className='Hamburger' onClick={toggleMenu} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </button>

            <ul className={menuOpen ? 'NavbarLinks showNavbar' : 'NavbarLinks'} ref={navRef}>
                <li><NavLink to="/" end onClick={closeMenu}><AiOutlineHome /> Home</NavLink></li>
                <li><NavLink to="/About" onClick={closeMenu}><BsPerson /> About</NavLink></li>
                <li><NavLink to="/Project" onClick={closeMenu}><BsCodeSlash /> Projects</NavLink></li>
                <li><a href={resumePdf} target="_blank" rel="noopener noreferrer" onClick={closeMenu}><CgFileDocument /> Resume</a></li>
                <li>
                    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
                    {theme === 'dark' ? <BsFillSunFill aria-hidden="true" /> : <BsFillMoonFill aria-hidden="true" />}
                    <span className="theme-toggle-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
