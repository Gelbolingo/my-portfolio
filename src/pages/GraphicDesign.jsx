import { Link } from 'react-router-dom';
import Masonry from '../components/Masonry/Masonry';
import './Pages.css';

const graphicDesignWorks = [
  {
    id: 1,
    img: 'AssetOfMine/graphics/1.png',
    height: 600,
  },
  {
    id: 2,
    img: 'AssetOfMine/graphics/2.png',
    height: 800,
  },
  {
    id: 3,
    img: 'AssetOfMine/graphics/3.png',
    height: 700,
  },
  {
    id: 4,
    img: 'AssetOfMine/graphics/4.png',
    height: 650,
  },
  {
    id: 5,
    img: 'AssetOfMine/graphics/5.png',
    height: 750,
  },
  {
    id: 6,
    img: 'AssetOfMine/graphics/6.png',
    height: 820,
  },
  {
    id: 7,
    img: 'AssetOfMine/graphics/7.png',
    height: 680,
  },
  {
    id: 8,
    img: 'AssetOfMine/graphics/8.png',
    height: 720,
  },
  {
    id: 9,
    img: 'AssetOfMine/graphics/hanni1.4.png',
    height: 780,
  },
];

function GraphicDesign() {
  return (
    <div className="page-container">
      <header className="page-header">
        <Link to="/" className="back-link">← Back to Home</Link>
        <h1>Graphic Design</h1>
        <p className="page-subtitle">Showcasing my best work in posters, logos, social media graphics, and modern visual styles.</p>
      </header>

      <div className="masonry-container">
        <Masonry
          items={graphicDesignWorks}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.98}
          blurToFocus={true}
        />
      </div>
    </div>
  );
}

export default GraphicDesign;
