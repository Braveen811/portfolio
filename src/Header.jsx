import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import anime from 'animejs';
import Switch from './Switch'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    anime({
      targets: headerRef.current,
      translateY: ['-100%', 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1200,
      delay: 200 
    });
  }, []);

  const handleScroll = (e, targetId) => {
    e.preventDefault(); 
    setIsOpen(false);   

    const target = document.querySelector(targetId);
    if (target) {
      const headerOffset = 80; 
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {isOpen && <MenuOverlay onClick={() => setIsOpen(false)} />}
      
      <NavContainer ref={headerRef}>
        <div className="logo">
          Braveen<span>.</span>R
        </div>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={(e) => handleScroll(e, '#home')}>Home</a>
          <a href="#about" onClick={(e) => handleScroll(e, '#about')}>About</a>
          <a href="#skills" onClick={(e) => handleScroll(e, '#skills')}>Skills</a>
          <a href="#projects" onClick={(e) => handleScroll(e, '#projects')}>Projects</a>
          <a href="#contact" onClick={(e) => handleScroll(e, '#contact')}>Contact</a>
          
          {/* Mobile CV Button placed directly under Contact */}
          <a href="src/assets/CV.pdf" className="cv-btn mobile-only-cv" download onClick={() => setIsOpen(false)}>
            Download CV
          </a>
        </div>

        <div className="action-items">
          <div className="switch-wrapper">
            <Switch />
          </div>
          
          {/* Desktop CV Button */}
          <a href="src/assets/CV.pdf" className="cv-btn desktop-only-cv" download>
            Download CV
          </a>
          
          {/* Hamburger Icon */}
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </div>
        </div>
      </NavContainer>
    </>
  );
};

// --- Styled Components ---

const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3); 
  backdrop-filter: blur(2px);
  z-index: 999; 

  @media (min-width: 993px) {
    display: none; 
  }
`;

const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  background: var(--nav-bg);
  backdrop-filter: blur(10px); 
  position: sticky;
  top: 0;
  z-index: 1000;
  opacity: 0; 

  .logo {
    font-size: 1.5rem;
    font-weight: 900;
    letter-spacing: 1px;
    color: var(--text-color);
    
    span {
      color: #B21318; 
    }
  }

  .nav-links {
    display: flex;
    gap: 30px;
    align-items: center;

    a {
      text-decoration: none;
      color: var(--text-color);
      font-weight: 600;
      font-size: 1rem;
      transition: color 0.3s ease;
      cursor: pointer; 

      &:hover {
        color: #B21318;
      }
    }
  }

  .action-items {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .cv-btn {
    text-decoration: none;
    background-color: var(--cv-btn-bg);
    color: var(--cv-btn-text);
    padding: 8px 20px;
    border-radius: 20px;
    font-weight: bold;
    font-size: 0.9rem;
    transition: transform 0.2s ease, opacity 0.2s ease;

    &:hover {
      transform: scale(1.05);
      opacity: 0.9;
    }
  }

  .hamburger {
    display: none;
    font-size: 1.8rem;
    cursor: pointer;
    color: var(--text-main); /* Enforces dark icon in light mode */
    user-select: none;
  }

  .mobile-only-cv {
    display: none;
  }

  /* Increased breakpoint to 992px to catch iPads and large phones */
  @media (max-width: 992px) {
    
    /* Force Hamburger to show */
    .hamburger { 
      display: block !important; 
    }
    
    /* Force top-bar CV button to hide */
    .desktop-only-cv { 
      display: none !important; 
    }
    
    /* Force menu CV button to show */
    .mobile-only-cv { 
      display: inline-block !important; 
      margin-top: 15px; 
    }
    
    .action-items { 
      gap: 15px; 
    }

    .nav-links {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      
      background: var(--card-bg);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid var(--card-border);
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      
      flex-direction: column;
      align-items: center;
      padding: 0;
      max-height: 0;
      opacity: 0;
      overflow: hidden;
      transition: max-height 0.4s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s ease;

      &.open {
        max-height: 400px;
        opacity: 1;
        padding: 25px 0;
        box-shadow: var(--glow-shadow); 
      }
    }
  }
`;

export default Header;