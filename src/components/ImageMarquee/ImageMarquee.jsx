import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './ImageMarquee.css';

const ImageMarquee = ({ images }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current || !images.length) return;
    const track = trackRef.current;
    const width = track.scrollWidth;
    const duration = width / 60;
    const tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(track, { x: 0 }, { x: -width / 2, duration, ease: 'none' });
    return () => tl.kill();
  }, [images.length]);

  const duplicated = [...images, ...images];

  return (
    <div className="image-marquee">
      <div ref={trackRef} className="image-marquee-track">
        {duplicated.map((src, i) => (
          <div key={`${src}-${i}`} className="image-marquee-item">
            <img src={src} alt={`Art ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageMarquee;
