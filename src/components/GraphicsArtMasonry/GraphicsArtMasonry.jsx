import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './GraphicsArtMasonry.css';

/**
 * Masonry gallery for Graphics & Art – inspired by reactbits.dev/components/masonry.
 * - CSS columns for masonry layout
 * - Native lazy loading (loading="lazy") for fast initial load
 * - Intersection Observer: only mounts content when section is near viewport
 * - GSAP ScrollTrigger: staggered reveal on scroll
 * - Hover scale effect
 */
export default function GraphicsArtMasonry({ images }) {
  const containerRef = useRef(null);
  const gridRef = useRef(null);
  const itemRefs = useRef([]);
  const [isInView, setIsInView] = useState(false);

  // Defer rendering until section is near viewport – speeds up initial load
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { rootMargin: '200px 0px', threshold: 0.01 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Staggered reveal animation when grid comes into view
  useEffect(() => {
    if (!isInView || !gridRef.current) return;

    const ctx = gsap.context(() => {
      const items = itemRefs.current.filter(Boolean);
      gsap.fromTo(
        items,
        { opacity: 0, y: 24, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, containerRef.current);

    return () => ctx.revert();
  }, [isInView]);

  return (
    <div className="graphics-art-masonry" ref={containerRef}>
      {isInView && (
        <div className="graphics-art-masonry-grid" ref={gridRef}>
          {images.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="graphics-art-masonry-item"
              ref={(el) => { itemRefs.current[i] = el; }}
            >
              <div className="graphics-art-masonry-item-inner">
                <img
                  src={src}
                  alt={`Art ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
