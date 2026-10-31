import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import anime from 'animejs';

const Loader = () => {
  const lettersRef = useRef(null);

  useEffect(() => {
    // Creates a smooth, continuous wave effect
    anime({
      targets: lettersRef.current.children,
      translateY: [-15, 15],
      opacity: [0.2, 1],
      color: ['#333333', '#B21318'], // Fades from dark grey to your bright red
      easing: 'easeInOutSine',
      duration: 600,
      delay: anime.stagger(100),
      direction: 'alternate',
      loop: true
    });
  }, []);

  return (
    <StyledWrapper>
      <div id="load" ref={lettersRef}>
        <div>L</div>
        <div>O</div>
        <div>A</div>
        <div>D</div>
        <div>I</div>
        <div>N</div>
        <div>G</div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;

  #load {
    display: flex;
    gap: 8px;
    user-select: none;
  }

  #load div {
    font-family: 'Courier New', Courier, monospace;
    font-size: 2rem;
    font-weight: 900;
  }
`;

export default Loader;