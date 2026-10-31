import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import anime from 'animejs';
import Card from './Card';
import SocialMedia from './SocialMedia'; 

const useTypingText = (words, typingSpeed = 150, deletingSpeed = 100, delayBeforeDelete = 1500) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingDelay(isDeleting ? deletingSpeed : typingSpeed);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingDelay(500); 
      }
    };

    timer = setTimeout(handleTyping, typingDelay);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingDelay, words, typingSpeed, deletingSpeed, delayBeforeDelete]);

  return text;
};

const TITLES = [
  "Developer", 
  "Frontend Developer", 
  "Web Enthusiast", 
  "BCA Student",
  "DevOps Enthusiast",
  "Cloud Explorer",
  "Linux Enthusiast",
  "System Ricer",
  "Open Source Contributor"
];

const Hero = () => {
  const typingText = useTypingText(TITLES);
  
  // Refs for Anime.js targeting
  const textSectionRef = useRef(null);
  const imageSectionRef = useRef(null);
  const orbRef = useRef(null);

  useEffect(() => {
    // Create an Anime.js timeline for sequential loading
    const tl = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000
    });

    // 1. Fade up the text elements one by one
    tl.add({
      targets: textSectionRef.current.children,
      translateY: [30, 0],
      opacity: [0, 1],
      delay: anime.stagger(150, { start: 400 }) // Wait 400ms for header to start coming down
    })
    // 2. Slide the 3D card in from the right
    .add({
      targets: imageSectionRef.current,
      translateX: [50, 0],
      opacity: [0, 1],
    }, '-=600') // Start this 600ms before the previous animation ends
    // 3. Pulse the background orb in
    .add({
      targets: orbRef.current,
      scale: [0.8, 1],
      opacity: [0, 1],
      duration: 2000,
      easing: 'easeInOutQuad'
    }, '-=800');

  }, []);

  return (
    <HeroContainer id="home">
      <div className="bg-glow-orb" ref={orbRef}></div>

      <div className="text-section" ref={textSectionRef}>
        <h3 className="anim-item">⚡ Hi, I'm Braveen </h3>
        
        <h1 className="anim-item">
          I'm a <br className="mobile-break" /><span className="typewriter">{typingText}</span><span className="cursor">|</span>
        </h1>
        
        <p className="anim-item">
        I build fast, interactive web applications and heavily customized system environments. Currently completing my BCA, I combine a keen eye for frontend design with a deep appreciation for cloud automation, system ricing, and writing clean, scalable code.
        </p>
        
        <div className="anim-item">
          <SocialMedia />
        </div>
      </div>
      
      <div className="image-section" ref={imageSectionRef}>
        <Card />
      </div>
    </HeroContainer>
  );
}

const HeroContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 85vh; 
  padding: 0 8%;
  overflow: hidden;

  .bg-glow-orb {
    position: absolute;
    top: 20%;
    left: 10%;
    width: 400px;
    height: 400px;
    /* Replaced pink with exact RGB of #B21318 (178, 19, 24) */
    background: radial-gradient(circle, rgba(178,19,24,0.15) 0%, rgba(0,0,0,0) 70%);
    z-index: 0;
    pointer-events: none;
    opacity: 0; /* Hidden for Anime.js */
  }
  
  .text-section {
    flex: 1;
    max-width: 650px;
    z-index: 1;
    
    /* Pre-hide elements for anime.js */
    .anim-item {
      opacity: 0;
    }

    h3 {
      font-size: 1.8rem;
      color: var(--text-color);
      font-weight: 800;
      letter-spacing: 2px;
      margin-bottom: 10px;
    }

    h1 {
      font-size: 4.5rem;
      color: var(--text-color);
      margin: 0;
      font-weight: 900;
      min-height: 180px; 
      
      .typewriter {
        color: #B21318; /* Forced Bright Red */
      }

      .cursor {
        color: #B21318; /* Forced Bright Red */
        font-weight: 900;
        animation: blink 1s step-end infinite;
      }
    }

    .mobile-break {
      display: none;
    }

    p {
      color: var(--text-muted);
      font-size: 1.1rem;
      line-height: 1.8;
      margin: 30px 0 40px;
      max-width: 90%;
    }
  }

  .image-section {
    flex: 1;
    display: flex;
    justify-content: flex-end; 
    padding-right: 50px;
    z-index: 1;
    opacity: 0; /* Hidden for anime.js */
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse; 
    text-align: center;
    justify-content: center;
    gap: 60px;
    padding-top: 60px;

    .mobile-break {
      display: block; /* Forces typewriter to new line on mobile so it doesn't break alignment */
    }

    .text-section h1 {
      font-size: 2.5rem; 
      min-height: 120px; 
    }

    .image-section {
      justify-content: center;
      padding-right: 0;
    }

    .bg-glow-orb {
      left: 50%;
      transform: translateX(-50%);
    }

    .text-section p {
      margin: 20px auto 40px;
    }
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

export default Hero;