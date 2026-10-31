import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import anime from 'animejs';

const Footer = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const footerRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          anime({
            targets: footerRef.current.children,
            translateY: [20, 0],
            opacity: [0, 1],
            easing: 'easeOutQuad',
            duration: 800,
            delay: anime.stagger(100)
          });
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <FooterContainer>
      <div className="footer-content" ref={footerRef}>
        <div className="system-status anim-item">
          <span className="dot"></span>
          SYSTEM.STATUS: [ <span>ONLINE</span> ]
        </div>
        
        <p className="designer anim-item">
          Designed & Engineered by <a href="#home">Braveen</a>
        </p>
        
        <p className="copyright anim-item">
          © {currentYear} All Rights Reserved.
        </p>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 40px 8%;
  margin-top: 80px;
  border-top: 1px solid rgba(178, 19, 24, 0.15);
  background: var(--card-bg, rgba(0, 0, 0, 0.02));
  backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  .anim-item {
    opacity: 0;
  }

  .footer-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }

  .system-status {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.8rem;
    font-weight: bold;
    color: var(--text-muted);
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 5px;
    background: rgba(178, 19, 24, 0.05);
    padding: 6px 14px;
    border-radius: 4px;
    border: 1px solid rgba(178, 19, 24, 0.1);

    span { color: #B21318; }

    .dot {
      width: 8px;
      height: 8px;
      background: #B21318;
      border-radius: 50%;
      box-shadow: 0 0 8px #B21318;
      animation: pulse 2s infinite;
    }
  }

  .designer {
    color: var(--text-color);
    font-size: 1.05rem;
    font-weight: 600;
    margin: 0;

    a {
      color: #B21318;
      text-decoration: none;
      transition: all 0.3s ease;

      &:hover { text-shadow: 0 0 12px rgba(178, 19, 24, 0.8); }
    }
  }

  .copyright {
    color: var(--text-muted);
    font-size: 0.85rem;
    margin: 0;
    font-family: 'Courier New', Courier, monospace;
    opacity: 0.8;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;

export default Footer;