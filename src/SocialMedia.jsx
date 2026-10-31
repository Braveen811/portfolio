import React from 'react';
import styled from 'styled-components';

const SocialMedia = () => {
  return (
    <StyledWrapper id="contact">
      {/* Call to Action Button */}
      <div className="btn-group">
        <a href="#contact" className="primary-btn">💬 Let's Talk</a>
      </div>

      <div className="social-wrapper">
        {/* Instagram */}
        <a className="socialContainer containerOne" href="https://www.instagram.com/braveen_r" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 16 16" className="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" /> </svg>
        </a>
        
        {/* Twitter */}
        <a className="socialContainer containerTwo" href="https://x.com/braveenruban" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 16 16" className="socialSvg twitterSvg"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" /> </svg>
        </a>
        
        {/* LinkedIn */}
        <a className="socialContainer containerThree" href="https://www.linkedin.com/in/braveen-r-86a890301/" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 448 512" className="socialSvg linkdinSvg"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" /></svg>
        </a>

        {/* GitHub */}
        <a className="socialContainer containerFour" href="https://github.com/braveen-r" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 496 512" className="socialSvg githubSvg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
        </a> 

        {/* Email */}   
        <a className="socialContainer containerFive" href="mailto:braveenrprogrammer811@gmail.com">
          <svg viewBox="0 0 512 512" className="socialSvg emailSvg"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
        </a>

        {/* Discord */}
        <a className="socialContainer containerSix" href="https://discord.com/users/1368852275992334377" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 640 512" className="socialSvg discordSvg"><path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.276c3.27-3.728,6.13-7.7,8.69-11.832a1.821,1.821,0,0,0-1.026-2.614,321.432,321.432,0,0,1-45.2-21.733,1.884,1.884,0,0,1-.18-3.146c3.155-2.348,6.26-4.784,9.26-7.253a1.8,1.8,0,0,1,1.884-.256,319.462,319.462,0,0,0,137.6,37.378,320.124,320.124,0,0,0,137.6-37.378,1.8,1.8,0,0,1,1.884.256c3.02,2.469,6.125,4.9,9.26,7.253a1.882,1.882,0,0,1-.18,3.146,313.141,313.141,0,0,1-45.2,21.733,1.822,1.822,0,0,0-1.026,2.614c2.56,4.132,5.42,8.1,8.69,11.832a1.9,1.9,0,0,0,2.063.276,488.243,488.243,0,0,0,146.825-74.189,2.016,2.016,0,0,0,.765-1.375C624.77,294.69,603.888,183.651,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"/></svg>
        </a>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center; /* Centers everything */
  gap: 25px;
  margin-top: 30px;
  
  /* Stops the header from covering the button when scrolled to */
  scroll-margin-top: 120px; 

  /* Cyberpunk Button Styling */
  .primary-btn {
    display: inline-block;
    padding: 14px 30px;
    background: var(--card-bg, rgba(20, 20, 20, 0.4));
    backdrop-filter: blur(8px);
    color: var(--accent-color);
    border: 1px solid var(--accent-color);
    border-radius: 6px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 1px;
    transition: all 0.3s ease;
    box-shadow: 0 0 15px rgba(178, 19, 24, 0.15);
  }

  .primary-btn:hover {
    background: var(--accent-color);
    color: #fff;
    box-shadow: 0 0 25px rgba(178, 19, 24, 0.4);
    transform: translateY(-3px);
  }

  /* Social Icons Grid/Row */
  .social-wrapper {
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }

  .socialContainer {
    width: 45px; 
    height: 45px;
    border-radius: 50%;
    /* Subtle glass background for the icons matching your theme */
    background-color: var(--nav-bg, rgba(44, 44, 44, 0.8)); 
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: .3s;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.2);
  }

  /* Hover Colors for each brand */
  .containerOne:hover { background-color: #d62976; transition-duration: .3s; }
  .containerTwo:hover { background-color: #00acee; transition-duration: .3s; }
  .containerThree:hover { background-color: #0072b1; transition-duration: .3s; }
  .containerFour:hover { background-color: #333333; transition-duration: .3s; } 
  .containerFive:hover { background-color: #ea4335; transition-duration: .3s; } 
  .containerSix:hover { background-color: #5865F2; transition-duration: .3s; } 

  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: .3s;
  }

  .socialSvg {
    width: 17px;
  }

  /* Adapts to both light and dark mode automatically */
  .socialSvg path {
    fill: var(--text-color, #ffffff);
    transition: fill 0.3s ease;
  }

  /* Forces the icon back to stark white when hovered so it pops against the brand colors */
  .socialContainer:hover .socialSvg path {
    fill: #ffffff;
  }

  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }

  @keyframes slide-in-top {
    0% { transform: translateY(-50px); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }
`;

export default SocialMedia;