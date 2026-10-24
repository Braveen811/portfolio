# ⚡ Cyberpunk React Portfolio

> A fully immersive, interactive, and responsive developer portfolio featuring a glassmorphism design system, dynamic Dark/Light theme switching, a 3D glass portrait reveal, and an interactive Vanta.NET particle network background.

![Portfolio Status](https://img.shields.io/badge/Status-Active%20%26%20Production%20Ready-success?style=for-the-badge&color=B21318)
![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Styled Components](https://img.shields.io/badge/Styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## 🚀 Key Features

- **Dynamic Theme Engine:** Instantly toggle between a premium *Black & Crimson Dark Mode* and a clean *Frosted Glass Light Mode* with smooth global transitions.
- **Interactive 3D Background:** Powered by **Vanta.NET** and **Three.js**, rendering a dynamic particle network that reacts to mouse/touch interactions across desktop and mobile devices.
- **3D Glass Reveal Card:** A custom-coded portrait component featuring a hover-and-tap peel effect that transitions from a cyberpunk anime overlay to your professional developer portrait.
- **Fluid Responsive Layouts:** Optimized CSS grid architecture spanning from mobile smartphones up to ultrawide desktop displays.
- **Cyberpunk Terminal Aesthetics:** Integrated terminal status indicators (`SYSTEM.STATUS: [ ONLINE ]`), custom selection highlights, and neon-glow hover states.

---

## 🛠️ Tech Stack

- **Frontend Library:** React (Vite)
- **Styling Architecture:** Styled Components & Global CSS Custom Variables
- **3D Animations:** Vanta.js & Three.js
- **Deployment Platform:** Vercel

---

## 📂 Complete Project Directory Structure

```text
portfolio/
├── 📁 node_modules/             # Installed dependencies
├── 📁 public/                   # Static root assets
│   └── favicon.ico              # Browser tab icon
├── 📁 src/                      # Source code directory
│   ├── 📁 assets/               # Images, graphics, and documents
│   │   ├── profile-pic.png      # Real developer portrait (base layer)
│   │   ├── profile-pic-anime.png# Cyberpunk anime overlay cover
│   │   └── resume/CV.pdf        # 📄 <--- YOUR CV / RESUME FILE GOES HERE!
│   │
│   ├── About.jsx                # "About Me" biography section
│   ├── App.jsx                  # Main wrapper (Loader state, Vanta background, sections)
│   ├── Card.jsx                 # 3D Glass Reveal Portrait component
│   ├── Footer.jsx               # Footer with terminal status and copyright
│   ├── Header.jsx               # Navigation bar with Light/Dark theme toggle
│   ├── Hero.jsx                 # Hero landing banner section
│   ├── Loader.jsx               # Cyberpunk terminal entrance loading screen
│   ├── Projects.jsx             # Featured projects grid (Completed & Coming Soon cards)
│   ├── Quote.jsx                # Inspirational terminal quote section
│   ├── Skills.jsx               # Technology stack showcase grid
│   ├── SocialMedia.jsx          # Social media links / action buttons
│   ├── index.css                # Global CSS resets, base styles, and theme variables
│   └── main.jsx                 # React DOM injection point
│
├── .gitignore                   # Git exclusion rules
├── index.html                   # HTML entry point (contains Three.js & Vanta CDN scripts)
├── package.json                 # Project dependencies configuration
└── README.md                    # Project documentation

```


## 📄 Where to Put Your CV File

Your download buttons in the navigation header reference your CV asset via:

JavaScript
```bash
<a href="src/assets/CV.pdf" className="cv-btn" download>
  Download CV
</a>
```
Best Practice Tip for Production: To ensure your CV downloads properly without 404 errors when deployed on Vercel, either import it directly or place CV.pdf inside your public/ folder so it serves globally at /CV.pdf




## ⚙️ Getting Started Locally

To run this repository on your machine, execute the following commands in your terminal:

1. **Clone the repository:**
```bash
git clone https://github.com/Braveen811/portfolio.git

```


2. **Navigate to the project directory:**
```bash
cd portfolio

```


3. **Install dependencies:**
```bash
npm install

```


4. **Start the development server:**
```bash
npm run dev

```


5. Open your browser and view it locally at `http://localhost:5173`!

---

## 👨‍💻 Author & Credits

**Braveen R** *Final Year BCA Student | Frontend Developer* - GitHub: [@Braveen811](https://www.google.com/search?q=https://github.com/Braveen811)

---

© 2026 All Rights Reserved.

