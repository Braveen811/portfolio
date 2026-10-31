import React from 'react';
import styled from 'styled-components';
import profilePic from './assets/profile-pic.png'; // Your original portrait
import animeCover from './assets/profile-pic-anime.png'; // Your anime image

const Card = () => {
  return (
    <StyledWrapper>
      <div className="fade-card">
        
        {/* BOTTOM LAYER: Your Original Portrait */}
        <div className="inside-content">
          <img src={profilePic} alt="Braveen R" className="profile-image" />
        </div>
 
        {/* TOP LAYER: The Anime Image that fades out */}
        <div className="cover">
          <img 
            src={animeCover} 
            alt="Anime Cover" 
            className="cover-image" 
          />
        </div>
        
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .fade-card {
    position: relative;
    border-radius: 20px;
    width: 320px;
    height: 420px;
    
    background: var(--card-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    
    box-shadow: var(--glow-shadow), inset 0 0 30px rgba(178, 19, 24, 0.2);
    
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; 
    
    /* REMOVED THE BORDER HERE */
    border: none; 

    cursor: pointer;
    transition: all 0.4s ease;
  }

  .fade-card:hover {
    transform: translateY(-5px);
    /* Removed accent border-color change on hover so it stays borderless */
  }

  .inside-content {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    position: relative;
  }

  /* The Anime Cover sitting on top */
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .cover-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .fade-card:hover .cover,
  .fade-card:active .cover {
    opacity: 0;
    transform: scale(1.05); 
  }
`;

export default Card;