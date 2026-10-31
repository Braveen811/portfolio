import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import anime from 'animejs';

const Quote = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const quoteRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          anime({
            targets: quoteRef.current,
            scale: [0.9, 1],
            translateY: [30, 0],
            opacity: [0, 1],
            easing: 'easeOutElastic(1, .8)',
            duration: 1200
          });
        }
      },
      { threshold: 0.3 }
    );

    if (quoteRef.current) observer.observe(quoteRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <QuoteContainer>
      <div className="quote-box" ref={quoteRef} style={{ opacity: 0 }}>
        <div className="quote-icon">❝</div>
        <blockquote>
          "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
        </blockquote>
        <div className="author">
          <span className="line"></span>
          Martin Fowler
        </div>
      </div>
    </QuoteContainer>
  );
};

const QuoteContainer = styled.section`
  padding: 40px 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;

  .quote-box {
    max-width: 800px;
    width: 100%;
    text-align: center;
    background: var(--card-bg, rgba(0, 0, 0, 0.03));
    backdrop-filter: blur(12px);
    border: 1px solid rgba(178, 19, 24, 0.15);
    border-radius: 15px;
    padding: 50px 40px;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      border-color: rgba(178, 19, 24, 0.4);
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(178, 19, 24, 0.1);
    }
  }

  .quote-icon {
    font-size: 3rem;
    color: #B21318;
    opacity: 0.6;
    margin-bottom: 15px;
    line-height: 1;
    text-shadow: 0 0 15px rgba(178, 19, 24, 0.4);
  }

  blockquote {
    font-size: 1.35rem;
    color: var(--text-color);
    font-style: italic;
    line-height: 1.6;
    margin: 0 0 25px 0;
    font-weight: 500;
  }

  .author {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    font-family: 'Courier New', Courier, monospace;
    color: #B21318;
    font-weight: bold;
    font-size: 1rem;
    text-transform: uppercase;

    .line {
      width: 40px;
      height: 2px;
      background: #B21318;
      opacity: 0.7;
    }
  }

  @media (max-width: 768px) {
    padding: 30px 5%;
    .quote-box { padding: 40px 25px; }
    blockquote { font-size: 1.1rem; }
  }
`;

export default Quote;