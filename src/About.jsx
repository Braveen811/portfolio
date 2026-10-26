import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutContainer id="about">
      <div className="section-header">
        <h2>⚡ About <span>Me</span></h2>
      </div>

      {/* The Data Shards Grid */}
      <div className="about-cards">
        <div className="about-card">
          <span className="tag">01 // THE_INTRO</span>
          <p>
            I'm Braveen, a frontend developer currently completing my final year of BCA.
          </p>
        </div>
        
        <div className="about-card">
          <span className="tag">02 // WHAT_I_BUILD</span>
          <p>
            I turn ideas into seamless digital experiences. I focus on clean front-end design that people actually want to use, backed by automated DevOps workflows and robust infrastructure.
          </p>
        </div>
        
        <div className="about-card">
          <span className="tag">03 // MY_MINDSET</span>
          <p>
            I learn fast and build consistently. Every project, big or small, is an opportunity to get a little sharper.
          </p>
        </div>
      </div>

      {/* Cyberpunk Status Line */}
      <div className="now-line-wrapper">
        <div className="now-line">
          <div className="dot"></div>
          <span>STATUS // Actively seeking internship opportunities</span>
        </div>
      </div>
    </AboutContainer>
  );
};

const AboutContainer = styled.section`
  padding: 40px 8%;
  position: relative;
  z-index: 1;

  .section-header h2 {
    font-size: 2.5rem;
    color: var(--text-color, #ffffff);
    margin-bottom: 40px;
    font-weight: 800;
    
    span {
      color: var(--accent-color);
    }
  }

  /* Grid Layout for the Shards */
  .about-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }

  /* =========================================
     DEFAULT / DARK MODE STYLES
     ========================================= */

  /* Glassmorphism Data Shard Styling */
  .about-card {
    /* Strong dark glass default */
    background: var(--card-bg, rgba(20, 20, 20, 0.6)); 
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    
    /* Subtle glowing border */
    border: 1px solid rgba(178, 19, 24, 0.3); 
    border-radius: 15px;
    padding: 25px 20px;
    
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;

    /* A subtle highlight on the top edge to make it look like 3D glass */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    }
  }

  /* The Hover Interaction */
  .about-card:hover {
    transform: translateY(-8px);
    border-color: var(--accent-color);
    box-shadow: 0 10px 30px var(--crimson-shadow, rgba(178, 19, 24, 0.25));
  }

  /* Cyberpunk Terminal Tags */
  .about-card .tag {
    font-family: 'Courier New', Courier, monospace; 
    font-size: 0.85rem;
    font-weight: bold;
    color: var(--accent-color, #ff4d4d);
    margin-bottom: 15px;
    display: inline-block;
    letter-spacing: 1px;
    background: rgba(178, 19, 24, 0.15);
    padding: 4px 10px;
    border-radius: 4px;
  }

  .about-card p {
    color: var(--text-muted, #a0a0a0);
    font-size: 1.05rem;
    line-height: 1.7;
    margin: 0;
  }

  /* Refined Pulsing Status Line */
  .now-line-wrapper {
    display: flex;
    justify-content: flex-start;
  }

  .now-line {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-color, #ffffff);
    /* Strong dark glass default */
    background: var(--card-bg, rgba(20, 20, 20, 0.6));
    backdrop-filter: blur(8px);
    border: 1px solid rgba(178, 19, 24, 0.3);
    border-left: 4px solid var(--accent-color); /* Strong brand accent line */
    padding: 12px 20px;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  /* Animated Neon Dot */
  .now-line .dot {
    width: 10px; 
    height: 10px;
    background: var(--accent-color);
    border-radius: 50%;
    box-shadow: 0 0 10px var(--accent-color);
    animation: pulse 1.5s ease-in-out infinite;
  }

  @keyframes pulse {
    0% { transform: scale(0.95); opacity: 1; box-shadow: 0 0 0 0 rgba(178, 19, 24, 0.7); }
    70% { transform: scale(1); opacity: 0.7; box-shadow: 0 0 0 8px rgba(178, 19, 24, 0); }
    100% { transform: scale(0.95); opacity: 1; box-shadow: 0 0 0 0 rgba(178, 19, 24, 0); }
  }


  /* =========================================
     LIGHT MODE OVERRIDES
     ========================================= */
  [data-theme='light'] &,
  body.light-mode & {
    
    .section-header h2 { color: #111111; }

    .about-card {
      background: rgba(255, 255, 255, 0.7); /* Light frosted glass */
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    }

    .about-card:hover {
      border-color: var(--accent-color);
      box-shadow: 0 10px 30px rgba(178, 19, 24, 0.2);
    }

    .about-card p {
      color: #4a4a52; /* High-contrast gray */
    }

    .about-card .tag {
      color: #900a0e; /* Darker red for light mode */
      background: rgba(178, 19, 24, 0.1);
      border: 1px solid rgba(178, 19, 24, 0.2);
    }

    .now-line {
      background: rgba(255, 255, 255, 0.7);
      color: #111111; /* Dark text for status */
      border-color: rgba(0, 0, 0, 0.15);
      border-left: 4px solid var(--accent-color);
    }
  }


  /* =========================================
     RESPONSIVE DESIGN
     ========================================= */
  @media (max-width: 900px) {
    padding: 60px 5%;
    
    .about-cards { 
      grid-template-columns: 1fr; /* Stacks the cards vertically on phones */
      gap: 20px;
    }

    .now-line-wrapper {
      justify-content: center; /* Centers the status bar on small screens */
    }
  }
`;

export default About;