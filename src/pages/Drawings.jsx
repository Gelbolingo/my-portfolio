import { Link } from 'react-router-dom';
import Masonry from '../components/Masonry/Masonry';
import './Pages.css';

const drawings = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80',
    height: 720,
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=800&q=80',
    height: 650,
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    height: 800,
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80',
    height: 680,
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1618336753974-aae8e04506aa?auto=format&fit=crop&w=800&q=80',
    height: 750,
  },
];

function Drawings() {
  return (
    <div className="page-container">
      <header className="page-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Drawings</h1>
        <p className="page-subtitle">Personal sketches and digital illustrations</p>
      </header>

      <div className="masonry-container">
        <Masonry
          items={drawings}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.98}
          blurToFocus={true}
        />
      </div>
    </div>
  );
}

export default Drawings;




