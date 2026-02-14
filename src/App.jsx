import { useState, useEffect, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar/Navbar';
import IntroAnimation from './components/IntroAnimation/IntroAnimation';
import WorkMarquee from './components/WorkMarquee/WorkMarquee';
import ColorBends from './components/ColorBends/ColorBends';
import GraphicsArtMasonry from './components/GraphicsArtMasonry/GraphicsArtMasonry';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

const education = [
  { school: 'Pamantasan ng Lungsod ng Valenzuela', years: '2023 - 2026', status: 'Currently Enrolled' },
  { school: 'Gen T. Deleon National High School', years: '2017 - 2023' },
  { school: 'Bitik Elementary School', years: '2012 - 2017' },
];

// All graphics from AssetOfMine/graphics for About gallery
const aboutGalleryImages = [
  'AssetOfMine/graphics/1.png',
  'AssetOfMine/graphics/hanni1.4.png',
  'AssetOfMine/graphics/2.png',
  'AssetOfMine/graphics/3.png',
  'AssetOfMine/graphics/4.png',
  'AssetOfMine/graphics/5.png',
  'AssetOfMine/graphics/6.png',
  'AssetOfMine/graphics/7.png',
  'AssetOfMine/graphics/8.png',
];

// Featured projects: Red File game + 3 placeholders (all viewable)
const featuredProjects = [
  {
    id: 'red-file',
    title: 'Red File: Untold Secrets',
    category: 'Game',
    description: '— a student journalist uncovers a mysterious red folder and a hidden conspiracy. Built with Unity.',
    skills: ['Unity', 'Interactive Fiction', 'Narrative Design'],
    images: [{ src: 'dist/AssetOfMine/RedFile.jpg', alt: 'Red File: Untold Secrets' }],
    liveDemo: 'https://yuri-yuukari.itch.io/red-file-untold-secret',
    repo: null,
  },
  {
    id: 'Portfolio-Website',
    title: 'Portfolio',
    category: 'Website',
    description: 'My Portfolio Website.',
    skills: ['Design', 'Development','Reactjs','Nodejs','Html','Development', ],
    images: [{ src: 'dist/AssetOfMine/Portfolio.png', alt: 'Project Alpha' }],
    liveDemo: 'https://gelbolingo.vercel.app/',
    repo: null,
  },
  {
    id: 'placeholder-2',
    title: 'Project Beta',
    category: 'Coming Soon',
    description: 'Another exciting project coming your way.',
    skills: ['Creative', 'Visuals'],
    images: [{ src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80', alt: 'Project Beta' }],
    liveDemo: null,
    repo: null,
  },
  {
    id: 'placeholder-3',
    title: 'Project Gamma',
    category: 'Coming Soon',
    description: 'Work in progress. Follow for more.',
    skills: ['Graphic Design', 'Branding'],
    images: [{ src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80', alt: 'Project Gamma' }],
    liveDemo: null,
    repo: null,
  },
];

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#work' },
  { label: 'Graphics', href: '/#graphics-art' },
  { label: 'Contact', href: '/#contact' },
];

const socialLinks = [
  { name: 'Facebook', icon: 'f', url: 'https://web.facebook.com/YuriYuukari' },
  { name: 'Twitter', icon: '𝕏', url: '' },
  { name: 'Instagram', icon: '📷', url: 'https://www.instagram.com/yuri_yukari99' },
  { name: 'LinkedIn', icon: 'in', url: 'https://www.linkedin.com/in/ury-gelbolingo-29269631b' },
  { name: 'Email', icon: '✉', url: 'mailto:urygelbolingo5@gmail.com' },
  { name: 'YouTube', icon: '▶', url: 'https://www.youtube.com/@UnrealGraphics-20s' },
  { name: 'Discord', icon: '💬', url: 'https://discord.com' },
];

function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const mainRef = useRef(null);
  const heroContentRef = useRef(null);
  const panelsRef = useRef([]);

  const projectCount = featuredProjects.length;

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-triggered reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroContentRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.9,
        ease: 'power3.out',
        delay: 0.15,
      });

      panelsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          opacity: 0,
          y: 40,
          duration: 0.65,
          ease: 'power3.out',
          delay: i * 0.03,
        });
      });

      // Gradient text scroll effect (Apple iPhone 14 Pro style)
      const appEl = mainRef.current;
      if (appEl) {
        gsap.fromTo(appEl, { '--scroll-progress': 0 }, {
          '--scroll-progress': 1,
          ease: 'none',
          scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.8,
          },
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="app" ref={mainRef}>
      <ColorBends />
      <header className="hero" id="home">
        <div className="nav-container-wrapper">
          <a href="/#home" className="logo-container" aria-label="Unreal Graphics Home">
            <p className="logo">Unreal Graphics</p>
          </a>
          <Navbar items={navItems} />
        </div>

        <div className="hero-main">
          <div className="hero-content" ref={heroContentRef}>
            <h1 className="hero-greeting gradient-text-scroll">
              Hi, I'm <span className="hero-name">Ury Gelbolingo</span>
            </h1>
            <h2 className="hero-title gradient-text-scroll">
              And i'm a <span className="highlight-yellow">Graphic Designer</span>.
            </h2>
            <p className="hero-description hero-description-bends gradient-text-scroll">
              I'm a graphic designer and i'm passionate about creating stunning visuals and impactful designs. Let's turn your imagination into design!
            </p>
            <div className="hero-cta">
              <a className="download-cv-btn" href="dist/AssetOfMine/CV.pdf" target="_blank" rel="noreferrer">
                Download CV
              </a>
              <div className="social-icons">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-icon"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-image-wrapper">
              <img src="AssetOfMine/1by1pic.jpg" alt="Ury Gelbolingo" className="profile-image" />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="panel about" ref={(el) => { panelsRef.current[0] = el; }}>
          <div className="about-block">
            <p className="eyebrow gradient-text-scroll">About me</p>
            <h2 className="about-title gradient-text-scroll">Crafting meaningful visuals through design, creativity, and storytelling.</h2>
            <p className="panel-copy">
              I'm a creative person with a passion for design, gaming, reading, and cycling.
              I enjoy crafting visuals and exploring new aesthetics, drawing inspiration from the stories I read and the games I play.
              Cycling gives me the freedom to clear my mind and stay active, balancing my creativity with adventure.
            </p>
          </div>
        </section>

        <section id="work" className="panel portfolio" ref={(el) => { panelsRef.current[1] = el; }}>
          <div className="work-header">
            <div className="work-header-top">
              <p className="eyebrow gradient-text-scroll">Projects</p>
              <div className="project-counter">
                <span className="project-counter-label">Project</span>
                <span className="project-counter-value">
                  00 | {String(projectCount).padStart(2, '0')}
                </span>
              </div>
            </div>
            <h2 className="gradient-text-scroll">Featured work</h2>
          </div>
          <WorkMarquee projects={featuredProjects} />
        </section>

        <section id="graphics-art" className="panel graphics-art-snap" ref={(el) => { panelsRef.current[2] = el; }}>
          <p className="eyebrow gradient-text-scroll">Graphics &amp; Art</p>
          <GraphicsArtMasonry images={aboutGalleryImages} />
        </section>

        <section id="resume" className="panel resume" ref={(el) => { panelsRef.current[3] = el; }}>
          <div className="panel-header">
            <p className="eyebrow gradient-text-scroll">Education</p>
            <h2 className="gradient-text-scroll">My academic journey.</h2>
          </div>
          <ul className="education-list-edwinle">
            {education.map((item, index) => (
              <li key={index} className="education-list-item">
                <div className="education-list-link">
                  <span className="education-list-school">
                    {item.school.includes('Pamantasan') ? (
                      <a href="https://www.plv.edu.ph/" target="_blank" rel="noreferrer">{item.school}</a>
                    ) : (
                      item.school
                    )}
                  </span>
                  <span className="education-list-meta">
                    {item.years}
                    {item.status && ` · ${item.status}`}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="panel contact" ref={(el) => { panelsRef.current[4] = el; }}>
          <div className="panel-header">
            <p className="eyebrow gradient-text-scroll">Contact</p>
            <h2 className="gradient-text-scroll">Let's build a visual universe.</h2>
          </div>
          <div className="contact-grid">
            <div>
              <p className="panel-copy">Contact me today and let's create something UNREAL!</p>
              <div className="contact-links">
                <p>
                  Email <a href="mailto:urygelbolingo5@gmail.com">urygelbolingo5@gmail.com</a>
                </p>
                <p>Currently in Philippines · collaborating globally</p>
              </div>
            </div>
            <form
              className="contact-form"
              action="https://formsubmit.co/urygelbolingo5@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="/" />
              <label>
                Name
                <input type="text" name="name" placeholder="Your Name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="your.email@example.com" required />
              </label>
              <label>
                Project
                <input type="text" name="project" placeholder="Logo, Poster, etc." />
              </label>
              <label>
                Message
                <textarea name="message" placeholder="Tell me about the vibe" rows={4} required />
              </label>
              <button type="submit">Send the Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Unreal Graphics · Portfolio of Ury Gelbolingo.</p>
        <div className="footer-links">
          <a href="#home">Back to Top</a>
        </div>
      </footer>

      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
          ↑
        </button>
      )}
    </div>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroEnd = () => setShowIntro(false);

  return (
    <>
      {showIntro ? (
        <IntroAnimation onAnimationEnd={handleIntroEnd} />
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
