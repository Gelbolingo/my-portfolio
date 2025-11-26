import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Folder from './components/Folder/Folder';
import GraphicDesign from './pages/GraphicDesign';
import Projects from './pages/Projects';
import Drawings from './pages/Drawings';
import './App.css';





const education = [
  {
    school: 'Pamantasan ng Lungsod ng Valenzuela',
    years: '2023 - 2025',
    status: 'Currently Enrolled',
  },
  {
    school: 'Gen T. Deleon National High School',
    years: '2017 - 2023',
  },
  {
    school: 'Bitik Elementary School',
    years: '2012 - 2017',
  },
];

const folders = [
  {
    title: 'Graphic Design',
    folderType: 'graphic-design',
    color: '#a25aff',
    shots: [
      {
        src: 'AssetOfMine/graphics/7.png',
        alt: 'Graphic design work',
      },
      {
        src: 'AssetOfMine/graphics/5.png',
        alt: 'Design project',
      },
      {
        src: 'AssetOfMine/graphics/8.png',
        alt: 'Creative work',
      },
    ],
  },
  {
    title: 'Projects',
    folderType: 'projects',
    color: '#ff2fde',
    shots: [
      {
        src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
        alt: 'Project showcase',
      },
      {
        src: 'https://images.unsplash.com/photo-1500534316811-85a02b331fb0?auto=format&fit=crop&w=600&q=80',
        alt: 'Project work',
      },
      {
        src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80',
        alt: 'Project detail',
      },
    ],
  },
  {
    title: 'Drawings',
    folderType: 'drawings',
    color: '#00c2ff',
    shots: [
      {
        src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=600&q=80',
        alt: 'Drawing artwork',
      },
      {
        src: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=600&q=80',
        alt: 'Sketch work',
      },
      {
        src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
        alt: 'Art piece',
      },
    ],
  },
];

const navItems = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT ME', href: '/#about' },
  { label: 'PORTFOLIO', href: '/#portfolio' },
  { label: 'CONTACT', href: '/#contact' },
];

const socialLinks = [
  { name: 'Facebook', icon: 'f', url: 'https://web.facebook.com/YuriYuukari' },
  { name: 'Twitter', icon: '𝕏', url: 'https://x.com/Urydope' },
  { name: 'Instagram', icon: '📷', url: 'https://www.instagram.com/yuri_yukari99' },
  { name: 'LinkedIn', icon: 'in', url: 'https://www.linkedin.com/in/ury-gelbolingo-29269631b' },
  { name: 'Email', icon: '✉', url: 'mailto:urygelbolingo5@gmail.com' },
  { name: 'YouTube', icon: '▶', url: 'https://www.youtube.com/@UnrealGraphics-20s' },
  { name: 'Discord', icon: '💬', url: 'https://discord.com' },
];

function HomePage() {
  const navigate = useNavigate();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleFolderNavigate = (folderType) => {
    navigate(`/${folderType}`);
  };

  return (
    <div className="app">
      <header className="hero" id="home">
        <nav className="nav-bar">
          <div className="logo-container">
            <p className="logo">Unreal Graphics</p>
          </div>
          <div className="nav-links">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <div className="hero-main">
          <div className="hero-content">
            <h1 className="hero-greeting">
              Hi, I'm <span className="hero-name">Ury Gelbolingo</span>
            </h1>
            <h2 className="hero-title">
              And i'm a <span className="highlight-yellow">Graphic Designer</span>.
            </h2>
            <p className="hero-description">
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
              <img
                src="AssetOfMine/1by1pic.jpg"
                alt="Ury Gelbolingo"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="panel about">
          <div className="panel-header">
            <p className="eyebrow">About me</p>
            <h2>Crafting meaningful visuals through design, creativity, and storytelling.</h2>
          </div>
          <div className="about-content">
            <p className="panel-copy">
              I'm a creative person with a passion for design, gaming, reading, and cycling.
               I enjoy crafting visuals and exploring new aesthetics, drawing inspiration from the stories I read and the games I play.
               Cycling gives me the freedom to clear my mind and stay active, balancing my creativity with adventure.
            </p>
          </div>
          <ul className="service-list">
            <li>Logo design & visual identity</li>
            <li>Poster design & promotional visuals</li>
            <li>Social media graphics & content layouts</li>
            <li>2D animation & motion visuals</li>
          </ul>
        </section>

        <section id="portfolio" className="panel portfolio">
          <div className="panel-header">
            <p className="eyebrow">Work</p>
            <h2>Selected launches & experiments.</h2>
          </div>

          <div className="portfolio-grid">
            {folders.map((folder) => (
              <article key={folder.title} className="portfolio-card">
                <div className="glow-bar" />
                <Folder
                  className="portfolio-folder"
                  color={folder.color}
                  size={1.2}
                  items={folder.shots.map((shot, index) => (
                    <img key={shot.alt} src={shot.src} alt={shot.alt} className={`folder-shot shot-${index}`} />
                  ))}
                />
                <div className="card-content">
                  <p className="card-category">{folder.title}</p>
                  <h3>{folder.title}</h3>
                  <p>Click the folder to peek at the shots, or jump into the full case study below.</p>
                  <button
                    type="button"
                    className="card-link"
                    onClick={() => handleFolderNavigate(folder.folderType)}
                  >
                    Explore {folder.title}
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="resume" className="panel resume">
          <div className="panel-header">
            <p className="eyebrow">Education</p>
            <h2>My academic journey.</h2>
          </div>

          <div className="education-list">
            {education.map((item, index) => (
              <article key={index} className="education-card">
                <div className="education-years">{item.years}</div>
                <h4 className="education-school">{item.school}</h4>
                {item.status && <p className="education-status">{item.status}</p>}
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="panel contact">
          <div className="panel-header">
            <p className="eyebrow">Contact</p>
            <h2>Let's build a visual universe.</h2>
          </div>

          <div className="contact-grid">
            <div>
              <p className="panel-copy">
                Contact me today and let's create something UNREAL!
              </p>
              <div className="contact-links">
                <p>
                  Email{' '}
                  <a href="mailto:urygelbolingo5@gmail.com">urygelbolingo5@gmail.com</a>
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
        <p>© {new Date().getFullYear()} UnrealGraphics · Portfolio of Ury Gelbolingo.</p>
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
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/graphic-design" element={<GraphicDesign />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/drawings" element={<Drawings />} />
    </Routes>
  );
}

export default App;
