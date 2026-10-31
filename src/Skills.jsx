import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import anime from 'animejs';

const Skills = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const groupsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const tl = anime.timeline({ easing: 'easeOutExpo', duration: 1000 });

          tl.add({
            targets: headerRef.current,
            translateY: [30, 0],
            opacity: [0, 1]
          })
          .add({
            targets: cardsRef.current.children,
            translateY: [40, 0],
            opacity: [0, 1],
            delay: anime.stagger(150)
          }, '-=600')
          .add({
            targets: groupsRef.current.children,
            translateX: [-30, 0],
            opacity: [0, 1],
            delay: anime.stagger(100)
          }, '-=400');
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <SkillsContainer id="skills" ref={sectionRef}>
      <div className="section-header anim-item" ref={headerRef}>
        <h2>⚡ Skills & <span>Certifications</span></h2>
      </div>

      <div className="skills-grid" ref={cardsRef}>
        <div className="skill-card anim-item">
          <div className="skill-icon">💻</div>
          <h3>Frontend Development</h3>
          <p>Building responsive, high-performance interfaces using component-driven architecture and modern web standards.</p>
        </div>

        <div className="skill-card anim-item">
          <div className="skill-icon">⚡</div>
          <h3>Core & Backend Logic</h3>
          <p>Writing clean, efficient code to build REST APIs, automate scripts, and power dynamic application features.</p>
        </div>

        <div className="skill-card anim-item">
          <div className="skill-icon">🛠️</div>
          <h3>DevOps & Workflow</h3>
          <p>Automating CI/CD pipelines, configuring custom Linux environments, and deploying serverless applications with seamless version control.</p>
        </div>
      </div>

      <div className="skill-groups" ref={groupsRef}>
        <div className="skill-group-container anim-item">
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

        <div className="skill-group-container anim-item">
          <div className="skill-group-label">Backend & Cloud</div>
          <div className="skill-tags">
            <span className="skill-tag primary">Node.js</span>
            <span className="skill-tag primary">GitHub Actions (CI/CD)</span>
            <span className="skill-tag">REST APIs</span>
            <span className="skill-tag">Vercel</span>
            <span className="skill-tag">Docker</span>
          </div>
        </div>

        <div className="skill-group-container anim-item">
          <div className="skill-group-label">Programming & Scripting</div>
          <div className="skill-tags">
            <span className="skill-tag primary">Python</span>
            <span className="skill-tag primary">Bash / Shell</span>
            <span className="skill-tag">JavaScript</span>
            <span className="skill-tag">C</span>
            <span className="skill-tag">Java</span>
          </div>
        </div>

        <div className="skill-group-container anim-item">
          <div className="skill-group-label">Tools, OS & Environment</div>
          <div className="skill-tags">
            <span className="skill-tag primary">Linux (Arch)</span>
            <span className="skill-tag primary">Git & GitHub</span>
            <span className="skill-tag">VS Code</span>
            <span className="skill-tag">Neovim</span>
            <span className="skill-tag">Hyprland / bspwm</span>
          </div>
        </div>

        <div className="skill-group-container anim-item">
          <div className="skill-group-label">Certifications & Design</div>
          <div className="skill-tags">
            <span className="skill-tag primary">Python with ITS</span>
            <span className="skill-tag primary">Cloud Computing with AWS</span>
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

  .anim-item { opacity: 0; }

  .section-header h2 {
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 20px;
    font-weight: 800;
    span { color: #B21318; }
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 30px;
    margin-bottom: 50px;
  }

  .skill-card {
    background: var(--card-bg, rgba(0, 0, 0, 0.03));
    backdrop-filter: blur(12px);
    border: 1px solid rgba(178, 19, 24, 0.15);
    border-radius: 12px;
    padding: 28px 24px;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .skill-card:hover {
    transform: translateY(-4px);
    border-color: #B21318;
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

  .skill-card h3 { font-size: 1.1rem; font-weight: 700; color: var(--text-color); margin-bottom: 8px; }
  .skill-card p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; margin: 0; }

  .skill-groups { display: flex; flex-direction: column; gap: 28px; margin-top: 20px; }

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

  .skill-tags { display: flex; flex-wrap: wrap; gap: 12px; }

  .skill-tag {
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-color);
    background: var(--card-bg, rgba(0, 0, 0, 0.03));
    backdrop-filter: blur(8px);
    border: 1px solid rgba(178, 19, 24, 0.15);
    padding: 8px 16px;
    border-radius: 50px;
    transition: all 0.25s ease;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .skill-tag:hover {
    border-color: #B21318;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(178, 19, 24, 0.15);
  }

  .skill-tag.primary {
    border-color: rgba(178, 19, 24, 0.5); 
    background: rgba(178, 19, 24, 0.1); 
  }

  @media (max-width: 900px) {
    padding: 40px 5%;
    .skills-grid { grid-template-columns: 1fr; gap: 15px; }
  }
`;

export default Skills;