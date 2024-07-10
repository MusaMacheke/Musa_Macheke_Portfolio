import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash, BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { CgFeed, CgFileDocument } from "react-icons/cg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../index.css';

const Nav = () => {
    const [navbarBlur, setNavbarBlur] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkTheme, setDarkTheme] = useState(true); // Set dark theme as default
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

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
        if (!darkTheme) {
            document.body.classList.add('light-theme'); // Add light theme class
        } else {
            document.body.classList.remove('light-theme'); // Remove light theme class
        }
    };

    return (
        <nav className={navbarBlur ? 'Navbar blur' : 'Navbar'} data-aos="fade-down">
            <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>MM</h1>

            <div className='Hamburger' onClick={toggleMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>

            <ul className={menuOpen ? 'NavbarLinks showNavbar' : 'NavbarLinks'} ref={navRef}>
                <li onClick={closeMenu}><Link to="/" activeClassName="active" onClick={closeMenu}><AiOutlineHome aria-label="Home" /> Home</Link></li>
                <li onClick={closeMenu}><Link to="/About" activeClassName="active" onClick={closeMenu}><BsPerson aria-label="About" /> About</Link></li>
                <li onClick={closeMenu}><Link to="/Project" activeClassName="active" onClick={closeMenu}><BsCodeSlash aria-label="Project" /> Projects</Link></li>
                <li onClick={closeMenu}><Link to="https://drive.google.com/file/d/1zzJ1jkXuXGoq_bg9BFfi5XfgSlvE_lKG/view?usp=sharing" activeClassName="active" onClick={closeMenu}><CgFileDocument aria-label="Resume" /> Resume</Link></li>
                <li onClick={toggleTheme} className="theme-icon">
                    {darkTheme ? <BsFillSunFill aria-label="Light Mode" /> : <BsFillMoonFill aria-label="Dark Mode" />}
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
