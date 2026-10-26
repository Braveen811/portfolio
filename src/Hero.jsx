import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import SocialMedia from './SocialMedia'; // Ensures your new social component is imported

// --- Custom Typing Hook ---
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
        // Finished typing the word, pause before deleting
        setTimeout(() => setIsDeleting(true), delayBeforeDelete);
      } else if (isDeleting && text === '') {
        // Finished deleting, move to the next word
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingDelay(500); // Short pause before typing next word
      }
    };

    timer = setTimeout(handleTyping, typingDelay);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingDelay, words, typingSpeed, deletingSpeed, delayBeforeDelete]);

  return text;
};

// 1. FIXED: Moved the titles outside the component to prevent infinite loop re-renders
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
  // Pass the constant array into the hook
  const typingText = useTypingText(TITLES);

  return (
    <HeroContainer id="home">
      {/* A purely CSS background orb to make the text pop */}
      <div className="bg-glow-orb"></div>

      {/* Left Column: Introduction Text */}
      <div className="text-section">
        <h3>⚡ Hi, I'm Braveen </h3>
        
        {/* Updated H1 with the dynamic typing hook and animated cursor */}
        <h1>
          I'm a <span className="typewriter">{typingText}</span><span className="cursor">|</span>
        </h1>
        
        <p>
        I build fast, interactive web applications and heavily customized system environments. Currently completing my BCA, I combine a keen eye for frontend design with a deep appreciation for cloud automation, system ricing, and writing clean, scalable code</p>
        
        {/* SocialMedia Component includes the Let's Talk button now */}
        <SocialMedia />
      </div>
      
      {/* Right Column: Your Glowing Glass Card */}
      <div className="image-section">
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

  /* The bright pink glowing orb hidden behind your text */
  .bg-glow-orb {
    position: absolute;
    top: 20%;
    left: 10%;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(255,0,127,0.15) 0%, rgba(0,0,0,0) 70%);
    z-index: 0;
    pointer-events: none;
  }
  
  .text-section {
    flex: 1;
    max-width: 650px;
    z-index: 1;
    
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

      /* Reserves space for 2 lines of text so the page never jumps on desktop */
      min-height: 180px; 
      
      .typewriter {
        color: var(--accent-color); /* The neon pink text */
      }

      /* Blinking cursor styles */
      .cursor {
        color: var(--accent-color);
        font-weight: 900;
        animation: blink 1s step-end infinite;
      }
    }

    p {
      color: var(--text-muted);
      font-size: 1.1rem;
      line-height: 1.8;
      margin: 30px 0 40px;
      max-width: 90%;
    }
  }

  /* 2. FIXED: Removed the dead .btn-group CSS from here */

  .image-section {
    flex: 1;
    display: flex;
    justify-content: flex-end; 
    padding-right: 50px;
    z-index: 1;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse; 
    text-align: center;
    justify-content: center;
    gap: 60px;
    padding-top: 60px;

    /* 3. FIXED: Mobile Text Overflow scaling & Bounce Fix */
    .text-section h1 {
      font-size: 2.8rem; /* Scaled down for mobile */
      min-height: 140px; /* UPDATED to stop the jumping! */
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

  /* Keyframes for the blinking cursor */
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;

export default Hero;