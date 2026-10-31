import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import anime from 'animejs';

const About = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const statusRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 1000
          });

          // 1. Fade up the header
          tl.add({
            targets: headerRef.current,
            translateY: [30, 0],
            opacity: [0, 1],
          })
          // 2. Stagger the data shard cards
          .add({
            targets: cardsContainerRef.current.children,
            translateY: [40, 0],
            opacity: [0, 1],
            delay: anime.stagger(150)
          }, '-=600')
          // 3. Pop in the status line
          .add({
            targets: statusRef.current,
            translateX: [-30, 0],
            opacity: [0, 1],
          }, '-=400');
        }
      },
      { threshold: 0.2 } // Triggers when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <AboutContainer id="about" ref={sectionRef}>
      <div className="section-header anim-item" ref={headerRef}>
        <h2>⚡ About <span>Me</span></h2>
      </div>

      <div className="about-cards" ref={cardsContainerRef}>
        <div className="about-card anim-item">
          <span className="tag">01 // THE_INTRO</span>
          <p>
            I'm Braveen, a frontend developer currently completing my final year of BCA.
          </p>
        </div>
        
        <div className="about-card anim-item">
          <span className="tag">02 // WHAT_I_BUILD</span>
          <p>
            I turn ideas into seamless digital experiences. I focus on clean front-end design that people actually want to use, backed by automated DevOps workflows and robust infrastructure.
          </p>
        </div>
        
        <div className="about-card anim-item">
          <span className="tag">03 // MY_MINDSET</span>
          <p>
            I learn fast and build consistently. Every project, big or small, is an opportunity to get a little sharper.
          </p>
        </div>
      </div>

      <div className="now-line-wrapper anim-item" ref={statusRef}>
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

  /* Initially hide items for anime.js */
  .anim-item {
    opacity: 0;
  }

  .section-header h2 {
    font-size: 2.5rem;
    color: var(--text-color, #ffffff);
    margin-bottom: 40px;
    font-weight: 800;
    
    span {
      color: #B21318;
    }
  }

  .about-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-bottom: 30px;
  }

  .about-card {
    background: var(--card-bg, rgba(20, 20, 20, 0.6)); 
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(178, 19, 24, 0.3); 
    border-radius: 15px;
    padding: 25px 20px;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;

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

  .about-card:hover {
    transform: translateY(-8px);
    border-color: #B21318;
    box-shadow: 0 10px 30px rgba(178, 19, 24, 0.25);
  }

  .about-card .tag {
    font-family: 'Courier New', Courier, monospace; 
    font-size: 0.85rem;
    font-weight: bold;
    color: #B21318;
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

  .now-line-wrapper {
    display: flex;
    justify-content: flex-start;
    width: 100%;
  }

  .now-line {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-color, #ffffff);
    background: var(--card-bg, rgba(20, 20, 20, 0.6));
    backdrop-filter: blur(8px);
    border: 1px solid rgba(178, 19, 24, 0.3);
    border-left: 4px solid #B21318;
    padding: 12px 20px;
    border-radius: 6px;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    max-width: 100%; 
  }

  .now-line span {
    white-space: normal; 
    word-wrap: break-word;
    line-height: 1.4;
  }

  .now-line .dot {
    width: 10px; 
    height: 10px;
    background: #B21318;
    border-radius: 50%;
    flex-shrink: 0; 
    box-shadow: 0 0 10px #B21318;
    animation: pulse 1.5s ease-in-out infinite;
  }

  @media (max-width: 900px) {
    .now-line-wrapper { justify-content: center; }
    .now-line { font-size: 0.8rem; padding: 10px 16px; }
    padding: 60px 5%;
    .about-cards { grid-template-columns: 1fr; gap: 20px; }
  }

  @keyframes pulse {
    0% { transform: scale(0.95); opacity: 1; box-shadow: 0 0 0 0 rgba(178, 19, 24, 0.7); }
    70% { transform: scale(1); opacity: 0.7; box-shadow: 0 0 0 8px rgba(178, 19, 24, 0); }
    100% { transform: scale(0.95); opacity: 1; box-shadow: 0 0 0 0 rgba(178, 19, 24, 0); }
  }

  [data-theme='light'] &,
  body.light-mode & {
    .section-header h2 { color: #111111; }
    .about-card {
      background: rgba(255, 255, 255, 0.7);
      border-color: rgba(0, 0, 0, 0.15);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    }
    .about-card:hover {
      border-color: #B21318;
      box-shadow: 0 10px 30px rgba(178, 19, 24, 0.2);
    }
    .about-card p { color: #4a4a52; }
    .about-card .tag {
      color: #900a0e; 
      background: rgba(178, 19, 24, 0.1);
      border: 1px solid rgba(178, 19, 24, 0.2);
    }
    .now-line {
      background: rgba(255, 255, 255, 0.7);
      color: #111111; 
      border-color: rgba(0, 0, 0, 0.15);
      border-left: 4px solid #B21318;
    }
  }
`;

export default About;