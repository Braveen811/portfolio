import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import anime from 'animejs';

const Projects = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const tl = anime.timeline({
            easing: 'easeOutExpo',
            duration: 1000
          });

          // 1. Title drops in
          tl.add({
            targets: headerRef.current,
            translateY: [-30, 0],
            opacity: [0, 1]
          })
          // 2. Project cards cascade in
          .add({
            targets: gridRef.current.children,
            translateY: [50, 0],
            opacity: [0, 1],
            delay: anime.stagger(100) // Fast cascade effect
          }, '-=600');
        }
      },
      { threshold: 0.1 } // Triggers slightly earlier for larger grids
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <ProjectsContainer id="projects" ref={sectionRef}>
      <div className="section-header anim-item" ref={headerRef}>
        <h2>⚡ Featured <span>Projects</span></h2>
      </div>

      <div className="projects-grid" ref={gridRef}>
        
        <a href="#" className="project-card active anim-item" target="_blank" rel="noopener noreferrer">
          <span className="status">COMPLETED</span>
          <h3>React Cyberpunk Portfolio</h3>
          <p>A highly interactive, glassmorphism-based developer portfolio featuring dynamic theming and 3D interactions</p>
          <span className="stack">[ React, Styled Components, Vercel ]</span>
        </a>

        <a href="https://github.com/braveen-r/the_archer_dotfiles" className="project-card active anim-item" target="_blank" rel="noopener noreferrer">
          <span className="status">COMPLETED</span>
          <h3>The Archer Dotfiles</h3>
          <p>A highly customized, blazingly fast Arch Linux setup using bspwm, heavily modified for a seamless, daily-driver experience</p>
          <span className="stack">[ Shell, Python, SCSS ]</span>
        </a>

        <a href="https://github.com/braveen-r/gitops-devsecops-k8s" className="project-card active anim-item" target="_blank" rel="noopener noreferrer">
          <span className="status">COMPLETED</span>
          <h3>Gitops Devsecops K8s</h3>
          <p>This project automates security scanning, container image building, vulnerability assessment, and continuous delivery to a lightweight local Kubernetes cluster using ArgoCD</p>
          <span className="stack">[ JavaScript, Dockerfile, Shell ]</span>
        </a>

        <a href="https://github.com/braveen-r/zero-cost-telemetry-platform" className="project-card active anim-item" target="_blank" rel="noopener noreferrer">
          <span className="status">COMPLETED</span>
          <h3>The Zero-Cost Telemetry Platform</h3>
          <p>A blazingly fast, end-to-end infrastructure observability pipeline capturing real-time Arch Linux kernel events using eBPF, routed through a time-series database, and visualized on a custom React dashboard—all running locally for $0</p>
          <span className="stack">[ JavaScript, CSS, Python, C, HCL, HTML ]</span>
        </a>

        <a href="https://github.com/braveen-r/distro-doctor" className="project-card active anim-item" target="_blank" rel="noopener noreferrer">
          <span className="status">COMPLETED</span>
          <h3>Distro-Doctor</h3>
          <p>Professional-grade DevOps CLI and CI/CD utility for automatically validating project installation instructions across multiple Linux distributions in parallel using sandboxed Docker containers</p>
          <span className="stack">[ Python ]</span>
        </a>

        <a href="https://github.com/braveen-r/archlings" className="project-card active anim-item" target="_blank" rel="noopener noreferrer">
          <span className="status">COMPLETED</span>
          <h3>Archlings</h3>
          <p>A "Rustlings-inspired" Arch Linux troubleshooting trainer that provides sandboxed, Docker-based labs for practicing system repairs, complete with automated verification and telemetry</p>
          <span className="stack">[ Python, Shell ]</span>
        </a>

        <a href="https://github.com/braveen-r/chaos-stack" className="project-card active anim-item" target="_blank" rel="noopener noreferrer">
          <span className="status">COMPLETED</span>
          <h3>Chaos-Stack</h3>
          <p>A local Chaos Engineering CLI and SRE Observability Control Plane built to intentionally break Docker and emulated AWS infrastructure to validate system resilience</p>
          <span className="stack">[ Python ]</span>
        </a>

        <a href="https://github.com/braveen-r/restore-drill" className="project-card active anim-item" target="_blank" rel="noopener noreferrer">
          <span className="status">COMPLETED</span>
          <h3>Restore-Drill</h3>
          <p>An automated Site Reliability Engineering (SRE) disaster recovery engine that extracts backup snapshots, measures RTO/RPO SLAs, executes integrity smoke tests, and dispatches dynamic runbooks via Discord</p>
          <span className="stack">[ JavaScript, Python, Shell, CSS, HTML ]</span>
        </a>

        <a href="https://github.com/braveen-r/build-pulse-analytics" className="project-card active anim-item" target="_blank" rel="noopener noreferrer">
          <span className="status">COMPLETED</span>
          <h3>Build-Pulse Analytics</h3>
          <p>A zero-cost, serverless DevOps observability platform that extracts real-time CI/CD pipeline metrics from GitHub Actions and visualizes them on a high-performance React command center</p>
          <span className="stack">[ JavaScript, CSS, HTML ]</span>
        </a>

        <div className="project-card active anim-item">
          <span className="status">IN_PROGRESS</span>
          <h3>IoT Data Interface</h3>
          <p>A real-time dashboard visualizing hardware sensor metrics, bridging physical data with a responsive web-based interface.</p>
          <span className="stack">[ JavaScript, WebSockets, Node.js ]</span>
        </div>

        <div className="project-card anim-item">
          <span className="status">UPCOMING</span>
          <h3></h3>
          <p></p>
          <span className="stack">[ Soon ]</span>
        </div>

      </div>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.section`
  padding: 60px 8%;
  position: relative;
  z-index: 1;

  .anim-item {
    opacity: 0;
  }

  .section-header h2 {
    font-size: 2.5rem;
    color: var(--text-color);
    margin-bottom: 20px;
    font-weight: 800;
    
    span {
      color: #B21318;
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin-top: 40px;
  }
 
  .project-card {
    border: 1px dashed rgba(178, 19, 24, 0.3);
    border-radius: 10px;
    padding: 32px 22px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;
    color: var(--text-muted);
    transition: all 0.3s ease;
    text-decoration: none; 
  }

  .project-card:hover { 
    border-color: #B21318; 
    transform: translateY(-4px);
  }
 
  .project-card .status {
    font-family: 'Courier New', Courier, monospace;
    font-size: 11px;
    font-weight: bold;
    color: #B21318;
    border: 1px solid rgba(249,115,22,0.35); 
    padding: 4px 10px;
    border-radius: 100px;
    letter-spacing: 1px;
  }
 
  .project-card.active {
    border-style: solid;
    background: var(--card-bg, rgba(0, 0, 0, 0.03));
    backdrop-filter: blur(8px);
  }

  .project-card.active:hover {
    box-shadow: 0 10px 25px rgba(178, 19, 24, 0.15);
  }

  .project-card.active .status {
    color: #B21318;
    border-color: rgba(178, 19, 24, 0.4);
    background: rgba(178, 19, 24, 0.08);
  }

  .project-card.active h3 {
    color: var(--text-color);
    font-size: 1.2rem;
    font-weight: 700;
    margin: 5px 0;
  }

  .project-card.active p {
    color: var(--text-muted);
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
  }

  .project-card.active .stack {
    font-family: 'Courier New', Courier, monospace;
    font-size: 12px;
    color: var(--text-muted);
    margin-top: auto; 
    opacity: 0.8;
  }
 
  .project-card h3 {
    font-family: 'Courier New', Courier, monospace;
    font-size: 1rem;
    color: var(--text-muted);
    margin: 5px 0;
  }

  .project-card p {
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
  }

  @media (max-width: 900px) {
    padding: 40px 5%;
    .projects-grid { grid-template-columns: 1fr; }
  }
`;

export default Projects;