import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <div className="section-header">
        <h2>⚡ Skills & <span>Certifications</span></h2>
      </div>

      {/* Main Skills Dashboard Cards */}
      <div className="skills-grid">
        
        {/* Card 1: Frontend Development */}
        <div className="skill-card">
          <div className="skill-icon">💻</div>
          <h3>Frontend Development</h3>
          <p>Building responsive, high-performance interfaces using component-driven architecture and modern web standards.</p>
        </div>

        {/* Card 2: Programming & Logic */}
        <div className="skill-card">
          <div className="skill-icon">⚡</div>
          <h3>Core & Backend Logic</h3>
          <p>Writing clean, efficient code to build REST APIs, automate scripts, and power dynamic application features.</p>
        </div>

        {/* Card 3: Tools & Environment */}
        <div className="skill-card">
          <div className="skill-icon">🛠️</div>
          <h3>DevOps & Workflow</h3>
          <p>Automating CI/CD pipelines, configuring custom Linux environments, and deploying serverless applications with seamless version control.</p>
        </div>

      </div>

      {/* Categorized Skill Pills & Certifications Sections */}
      <div className="skill-groups">
        
        {/* Group 1: Frontend & Web Tech */}
        <div className="skill-group-container">
          <div className="skill-group-label">Frontend & Web Tech</div>
          <div className="skill-tags">
            <span className="skill-tag primary">React</span>
            <span className="skill-tag primary">JavaScript</span>
            <span className="skill-tag">Tailwind CSS</span>
            <span className="skill-tag">Styled Components</span>
            <span className="skill-tag">HTML5 / CSS3</span>
            <span className="skill-tag">Vite</span>
          </div>
        </div>

        {/* Group 2: Backend & Cloud */}
        <div className="skill-group-container">
          <div className="skill-group-label">Backend & Cloud</div>
          <div className="skill-tags">
            <span className="skill-tag primary">Node.js</span>
            <span className="skill-tag primary">GitHub Actions (CI/CD)</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">Vercel</span>
            <span className="skill-tag">Docker</span>
          </div>
        </div>

        {/* Group 3: Programming & Scripting */}
        <div className="skill-group-container">
          <div className="skill-group-label">Programming & Scripting</div>
          <div className="skill-tags">
            <span className="skill-tag primary">Python</span>
            <span className="skill-tag primary">Bash / Shell</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">C</span>
            <span className="skill-tag">Java</span>
          </div>
        </div>

        {/* Group 4: Tools, OS & Environment */}
        <div className="skill-group-container">
          <div className="skill-group-label">Tools, OS & Environment</div>
          <div className="skill-tags">
            <span className="skill-tag primary">Linux (Arch)</span>
            <span className="skill-tag primary">Git & GitHub</span>
            <span className="skill-tag">VS Code</span>
            <span className="skill-tag">Neovim</span>
            <span className="skill-tag">Hyprland / bspwm</span>
          </div>
        </div>

        {/* Group 5: Certifications & Design */}
        <div className="skill-group-container">
          <div className="skill-group-label">Certifications & Design</div>
          <div className="skill-tags">
            <span className="skill-tag primary">Python with ITS (Edumantra)</span>
            <span className="skill-tag primary">Cloud Computing with AWS (Edumantra)</span>
            <span className="skill-tag">UI/Web Design</span>
            <span className="skill-tag">Adobe Photoshop & Illustrator</span>
          </div>
        </div>

      </div>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.section`
  padding: 60px 8%;
  position: relative;
  z-index: 1;

  .section-header h2 {
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 20px;
    font-weight: 800;
    
    span {
      color: var(--accent-color);
    }
  }

  /* 3-Column Top Feature Cards */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 50px;
  }

  .skill-card {
    /* Cleaner background for light mode */
    background: var(--card-bg, rgba(0, 0, 0, 0.03));
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--surface-border, rgba(178, 19, 24, 0.15));
    border-radius: 12px;
    padding: 28px 24px;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .skill-card:hover {
    transform: translateY(-4px);
    border-color: var(--accent-color);
    box-shadow: 0 10px 25px rgba(178, 19, 24, 0.15);
  }

  .skill-icon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(178, 19, 24, 0.12);
    border-radius: 8px;
    margin-bottom: 18px;
    font-size: 18px;
  }

  .skill-card h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--text-color);
    margin-bottom: 8px;
  }

  .skill-card p {
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0;
  }

  /* Skill Categories & Tags Section */
  .skill-groups {
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-top: 20px;
  }

  .skill-group-label {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.85rem;
    font-weight: bold;
    color: var(--text-muted);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    letter-spacing: 1px;
  }

  .skill-group-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(178, 19, 24, 0.2);
  }

  .skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .skill-tag {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-color);
    /* Cleaned up background */
    background: var(--card-bg, rgba(0, 0, 0, 0.03));
    backdrop-filter: blur(8px);
    border: 1px solid var(--surface-border, rgba(178, 19, 24, 0.15));
    padding: 8px 16px;
    border-radius: 50px;
    transition: all 0.25s ease;
    display: inline-flex;
    align-items: center;
    gap: 6px;

    small {
      opacity: 0.7;
      font-size: 0.75rem;
    }
  }

  .skill-tag:hover {
    border-color: var(--accent-color);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(178, 19, 24, 0.15);
  }

  /* Primary Tag Styling */
  .skill-tag.primary {
    border-color: rgba(178, 19, 24, 0.5); 
    background: rgba(178, 19, 24, 0.1); 
    color: var(--text-color); 
  }

  /* Responsive Adjustments */
  @media (max-width: 900px) {
    padding: 40px 5%;

    .skills-grid {
      grid-template-columns: 1fr;
      gap: 15px;
    }
  }
`;

export default Skills;