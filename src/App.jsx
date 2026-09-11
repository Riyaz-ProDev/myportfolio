import { useEffect, useState } from "react";
import "./App.css";
import profile from "./assets/mypic.jpeg";

/* =========================
   SIMPLE SVG ICON SYSTEM
========================= */

function Icon({ children, size = 20 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function Github({ size = 20 }) {
  return (
    <Icon size={size}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3 0 6.8-1.7 6.8-7.5a5.8 5.8 0 0 0-1.6-4.1A5.4 5.4 0 0 0 19 1.1S17.3.5 15 2.8a13.4 13.4 0 0 0-6 0C6.7.5 5 1.1 5 1.1a5.4 5.4 0 0 0-.2 3.8A5.8 5.8 0 0 0 3.2 9.5C3.2 15.3 6.7 17 10 17a4.8 4.8 0 0 0-1 3.5v1.5" />
      <path d="M8 21c-3 .9-3-1.5-4-2" />
    </Icon>
  );
}

function Linkedin({ size = 20 }) {
  return (
    <Icon size={size}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </Icon>
  );
}

function Mail({ size = 20 }) {
  return (
    <Icon size={size}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Icon>
  );
}

function ArrowRight({ size = 20 }) {
  return (
    <Icon size={size}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </Icon>
  );
}

function ExternalLink({ size = 18 }) {
  return (
    <Icon size={size}>
      <path d="M14 3h7v7" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </Icon>
  );
}

function Download({ size = 20 }) {
  return (
    <Icon size={size}>
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </Icon>
  );
}

function Code2({ size = 20 }) {
  return (
    <Icon size={size}>
      <path d="m8 9-4 3 4 3" />
      <path d="m16 9 4 3-4 3" />
      <path d="m14 5-4 14" />
    </Icon>
  );
}

function Sparkles({ size = 20 }) {
  return (
    <Icon size={size}>
      <path d="m12 3-1.5 4.5L6 9l4.5 1.5L12 15l1.5-4.5L18 9l-4.5-1.5Z" />
      <path d="m19 15-.7 2.3L16 18l2.3.7L19 21l-.7-2.3L16 18l2.3-.7Z" />
    </Icon>
  );
}

function GraduationCap({ size = 20 }) {
  return (
    <Icon size={size}>
      <path d="m3 9 9-5 9 5-9 5-9-5Z" />
      <path d="M7 11.5V16c2.8 2 7.2 2 10 0v-4.5" />
      <path d="M21 9v6" />
    </Icon>
  );
}

function Brain({ size = 20 }) {
  return (
    <Icon size={size}>
      <path d="M9 4.5a3 3 0 0 0-5.5 1.7A3.2 3.2 0 0 0 4 12a3.2 3.2 0 0 0-.5 5.8A3 3 0 0 0 9 19.5" />
      <path d="M15 4.5a3 3 0 0 1 5.5 1.7A3.2 3.2 0 0 1 20 12a3.2 3.2 0 0 1 .5 5.8 3 3 0 0 1-5.5 1.7" />
      <path d="M9 4.5v15M15 4.5v15M9 9h6M9 15h6" />
    </Icon>
  );
}

/* =========================
   APP
========================= */

function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const roles = [
    "Full Stack Developer",
    "Software Engineer",
    "MERN Stack Developer",
    "Problem Solver",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFinished(true);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const roleTimer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(roleTimer);
  }, []);

  useEffect(() => {
    const moveMouse = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveMouse);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
    };
  }, []);

  return (
    <div
      className="portfolio"
      style={{
        "--mouse-x": `${mouse.x}px`,
        "--mouse-y": `${mouse.y}px`,
      }}
    >
      {/* ================= BACKGROUND ================= */}

      <div className="background-system">
        <div className="mouse-glow"></div>

        <div className="gradient-orb orb-one"></div>
        <div className="gradient-orb orb-two"></div>
        <div className="gradient-orb orb-three"></div>

        <div className="grid-background"></div>

        <div className="particles">
          {Array.from({ length: 20 }).map((_, i) => (
            <span key={i}></span>
          ))}
        </div>
      </div>

      {/* ================= LOADING SCREEN ================= */}

      <div className={`intro-screen ${introFinished ? "intro-hide" : ""}`}>
        <div className="intro-content">
          <div className="intro-photo">
            <img src={profile} alt="Abdul Riyaz" />
          </div>

          <div className="intro-name">Abdul Riyaz</div>

          <div className="intro-role">Full Stack Developer</div>

          <div className="loading-text">LOADING PORTFOLIO</div>

          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>

          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            <span>&lt;</span>
            AR
            <span>/&gt;</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Journey</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-contact">
            Let's Talk
          </a>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content">
            <div className="available-badge">
              <span className="status-dot"></span>
              Open to Opportunities
            </div>

            <p className="hero-small-text">Hello, I'm</p>

            <h1>
              Abdul <span>Riyaz</span>
            </h1>

            <div className="hero-title">
              <span key={roles[roleIndex]} className="role-changing">
                {roles[roleIndex]}
              </span>
            </div>

            <p className="hero-description">
              Final-year Information Technology student passionate about
              building modern web applications, solving problems with Java, and
              exploring AI-powered technologies.
            </p>

            <div className="tech-line">
              <span>Java</span>
              <span>React.js</span>
              <span>Node.js</span>
              <span>MongoDB</span>
              <span>Python</span>
            </div>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn magnetic-btn">
                View Projects
                <ArrowRight size={18} />
              </a>

              <a
                href="/Riyaz_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn magnetic-btn"
              >
                Resume
                <Download size={18} />
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/Riyaz-ProDev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={21} />
              </a>

              <a
                href="https://www.linkedin.com/in/abdul-riyaz786"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={21} />
              </a>

              <a href="mailto:riyaz97120@gmail.com">
                <Mail size={21} />
              </a>
            </div>
          </div>

          {/* HERO VISUAL */}

          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="visual-label label-top">
              <span className="label-dot"></span>
              BUILD • LEARN • CREATE
            </div>

            <div className="portrait-container">
              <div className="portrait-border"></div>

              <div className="profile-card">
                <div className="profile-shine"></div>

                <img src={profile} alt="Abdul Riyaz" />
              </div>

              <div className="code-orbit orbit-a">&lt;/&gt;</div>

              <div className="code-orbit orbit-b">Java</div>

              <div className="code-orbit orbit-c">AI</div>
            </div>

            <div className="floating-card card-one">
              <Code2 size={20} />

              <div>
                <strong>Developer</strong>
                <small>Java + MERN</small>
              </div>
            </div>

            <div className="floating-card card-two">
              <Sparkles size={20} />

              <div>
                <strong>Always Learning</strong>
                <small>DSA + AI</small>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span></span>
          Scroll to explore
        </div>
      </section>

      {/* ================= ABOUT ================= */}

      <section className="section" id="about">
        <div className="section-container">
          <div className="section-heading">
            <p>01 — ABOUT ME</p>

            <h2>
              Building today. <span>Learning every day.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm Abdul Riyaz, a final-year Information Technology student
                interested in software development, full-stack applications and
                problem solving.
              </p>

              <p>
                I work with Java, React.js, Node.js, Express.js, MongoDB and
                MySQL while continuously improving my Data Structures and
                Algorithms skills.
              </p>

              <p>
                I enjoy turning ideas into working applications and learning
                new technologies by building real projects.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat-card stat-purple">
                <strong>8.5</strong>
                <span>CGPA</span>
              </div>

              <div className="stat-card stat-cyan">
                <strong>4+</strong>
                <span>Projects</span>
              </div>

              <div className="stat-card stat-blue">
                <strong>Java</strong>
                <span>Primary Language</span>
              </div>

              <div className="stat-card stat-pink">
                <strong>MERN</strong>
                <span>Full Stack</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section className="section" id="skills">
        <div className="section-container">
          <div className="section-heading">
            <p>02 — SKILLS</p>

            <h2>
              My <span>technical toolkit.</span>
            </h2>
          </div>

          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon purple">
                <Code2 />
              </div>

              <h3>Languages</h3>

              <div className="skill-tags">
                <span>Java</span>
                <span>JavaScript</span>
                <span>Python</span>
                <span>C</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon cyan">&lt;/&gt;</div>

              <h3>Frontend</h3>

              <div className="skill-tags">
                <span>React.js</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>Bootstrap</span>
                <span>Vite</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon blue">⚡</div>

              <h3>Backend</h3>

              <div className="skill-tags">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>Django</span>
                <span>REST API</span>
                <span>JWT</span>
              </div>
            </div>

            <div className="skill-card">
              <div className="skill-icon pink">◈</div>

              <h3>Database & Tools</h3>

              <div className="skill-tags">
                <span>MongoDB</span>
                <span>MySQL</span>
                <span>Git</span>
                <span>GitHub</span>
                <span>Postman</span>
                <span>VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section className="section projects-section" id="projects">
        <div className="section-container">
          <div className="section-heading">
            <p>03 — PROJECTS</p>

            <h2>
              Things I've <span>built.</span>
            </h2>

            <p className="heading-description">
              A collection of projects where I applied development,
              problem-solving and AI/ML concepts.
            </p>
          </div>

          <div className="projects-grid">
            {/* INTERVIEWIQ */}

<div className="project-card project-purple">

  <div className="project-top">
    <span className="project-number">01</span>

    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <span className="project-type">
        FULL STACK
      </span>

      <span className="project-type">
        ⭐ FEATURED PROJECT
      </span>
    </div>
  </div>

  <div className="project-icon">
    <Brain size={28} />
  </div>

  <h3>InterviewIQ</h3>

  <p>
    AI-powered interview preparation platform featuring resume analysis,
    personalized mock interviews, automated interview scoring, PDF-based
    performance reports, Google authentication and a Razorpay-based
    credit system.
  </p>

  <div className="project-tech">
    <span>React</span>
    <span>Node.js</span>
    <span>Express</span>
    <span>MongoDB</span>
  </div>

  <div className="project-links">

    <a
      href="https://github.com/Riyaz-ProDev/InterviewIQ"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github size={16} />
      GitHub
    </a>

    <a
      href="https://interviewiq-xk7a.onrender.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ExternalLink size={16} />
      Live Demo
    </a>

  </div>

</div>

            {/* FACILITYOPS */}

            <div className="project-card project-cyan">
              <div className="project-top">
                <span className="project-number">02</span>

                <span className="project-type">AI / FULL STACK</span>
              </div>

              <div className="project-icon">
                <Sparkles size={28} />
              </div>

              <h3>Agentic FacilityOps</h3>

              <p>
                Energy intelligence platform that monitors facility energy
                usage, environmental data and generates AI-powered
                recommendations.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>FastAPI</span>
                <span>Python</span>
                <span>MySQL</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Riyaz-ProDev/agentic-ai-facility-operations-optimization"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  GitHub
                </a>

                <a
                  href="https://agentic-ai-facility-operations-eqrm.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>

            {/* STORE RATING */}

            <div className="project-card project-blue">
              <div className="project-top">
                <span className="project-number">03</span>

                <span className="project-type">FULL STACK</span>
              </div>

              <div className="project-icon">★</div>

              <h3>Store Rating System</h3>

              <p>
                Role-based store rating application with Admin, Normal User and
                Store Owner functionality using secure authentication.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>MySQL</span>
                <span>JWT</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Riyaz-ProDev/store-rating-system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  GitHub
                </a>

                <a
                  href="#projects"
                  onClick={(e) => e.preventDefault()}
                  title="Live demo not available"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>

            {/* FRAUD DETECTION */}

            <div className="project-card project-pink">
              <div className="project-top">
                <span className="project-number">04</span>

                <span className="project-type">MACHINE LEARNING</span>
              </div>

              <div className="project-icon">◉</div>

              <h3>Online Payment Fraud Detection</h3>

              <p>
                Machine learning system for identifying potentially fraudulent
                online payment transactions using classification techniques and
                data balancing.
              </p>

              <div className="project-tech">
                <span>Python</span>
                <span>Scikit-learn</span>
                <span>Random Forest</span>
                <span>SMOTE</span>
              </div>

              <div className="project-links">
                <a
                  href="https://github.com/Riyaz-ProDev/online-payment-fraud-detection-ml"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={16} />
                  GitHub
                </a>

                <a
                  href="#projects"
                  onClick={(e) => e.preventDefault()}
                  title="Live demo not available"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}

      <section className="section" id="experience">
        <div className="section-container">
          <div className="section-heading">
            <p>04 — JOURNEY</p>

            <h2>
              Learning through <span>experience.</span>
            </h2>
          </div>

          <div className="journey">
            <div className="journey-item">
              <div className="journey-icon college">
                <GraduationCap />
              </div>

              <div className="journey-content">
                <span className="journey-date">2023 — 2027</span>

                <h3>Sri Indu College of Engineering & Technology</h3>

                <p className="journey-role">
                  B.Tech — Information Technology
                </p>

                <p>
                  Building a strong foundation in software development,
                  databases, computer science fundamentals and problem solving.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-icon infosys">
                <Sparkles />
              </div>

              <div className="journey-content">
                <span className="journey-date">2026</span>

                <h3>Infosys Springboard</h3>

                <p className="journey-role">Training & Project</p>

                <p>
                  Working on an Agentic AI / FacilityOps project involving
                  energy intelligence, analytics and AI-powered recommendations.
                </p>
              </div>
            </div>

            <div className="journey-item">
              <div className="journey-icon dsa">
                <Brain />
              </div>

              <div className="journey-content">
                <span className="journey-date">Ongoing</span>

                <h3>Apna College — Alpha Batch</h3>

                <p className="journey-role">Data Structures & Algorithms</p>

                <p>
                  Strengthening Java and DSA fundamentals through structured
                  problem solving and coding practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section className="section contact-section" id="contact">
        <div className="contact-container">
          <p className="contact-small">05 — CONTACT</p>

          <h2>
            Let's build something <span>great.</span>
          </h2>

          <p>
            Open to internships, entry-level software development opportunities
            and exciting projects.
          </p>

          <a
            href="mailto:riyaz97120@gmail.com"
            className="primary-btn magnetic-btn"
          >
            Get In Touch
            <Mail size={18} />
          </a>

          <div className="contact-socials">
            <a
              href="https://github.com/Riyaz-ProDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>

            <a
              href="https://www.linkedin.com/in/abdul-riyaz786"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>

            <a href="mailto:riyaz97120@gmail.com">
              <Mail />
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        <p>© 2026 Abdul Riyaz</p>

        <span>Designed & Built with React</span>
      </footer>
    </div>
  );
}

export default App;