import { Link } from 'react-router-dom';
import './Pages.css';

const projects = [
  {
    id: 1,
    title: 'Aurora Residency Kit',
    category: 'Immersive Art Residency',
    description: 'Identity + promo system for a month-long neon art takeover in Copenhagen.',
    tags: ['Identity', 'Motion', 'Editorial'],
  },
  {
    id: 2,
    title: 'Violet Noise Tour',
    category: 'International Music Tour',
    description: 'Stage visuals + merch line for a synth-pop super trio.',
    tags: ['Stage Design', 'Merch', 'Social'],
  },
  {
    id: 3,
    title: 'Pulse Commerce',
    category: 'Futurist Retail Capsule',
    description: 'Designed a sensory retail pop-up weaving AR garments and holographic signage.',
    tags: ['Retail', '3D', 'AR'],
  },
];

function Projects() {
  return (
    <div className="page-container">
      <header className="page-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Projects</h1>
        <p className="page-subtitle">Showcasing my hands-on coding projects, problem-solving process, and development results.</p>
      </header>

      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-header">
              <p className="project-category">{project.category}</p>
              <h3>{project.title}</h3>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="tag-row">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;







