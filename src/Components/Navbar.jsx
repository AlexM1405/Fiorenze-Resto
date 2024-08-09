import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';

import Hero from "./Hero"
import Cards from './Cards';
import Footer from "./Footer"


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const homeRef = useRef(null);
  const ristoranteRef = useRef(null);
  const contactRef = useRef(null);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
    closeMobileMenu(); // Close menu after navigation
  };

  return (
    <>
      <nav className="Navbar">
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => scrollToSection(homeRef)}>
            Fiorenze-Resto
          </div>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fas-times' : 'fas fas-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <div className="nav-links" onClick={() => scrollToSection(homeRef)}>
                Benvenuto
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-links" onClick={() => scrollToSection(ristoranteRef)}>
                Ristorante
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-links" onClick={() => scrollToSection(contactRef)}>
                Contacto
              </div>
            </li>
          </ul>
        </div>
      </nav>

      {/* Sections are always rendered and visible */}
      <div ref={homeRef}>
        <Hero />
      </div>
      <div ref={ristoranteRef}>
        <Cards />
      </div>
      <div ref={contactRef}>
        <Footer />
      </div>
    </>
  );
}

export default Navbar;
