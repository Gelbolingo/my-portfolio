import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './GraphicsArtScroll.css';

/**
 * Full-image gallery with horizontal scroll and scroll-triggered animations.
 * Inspired by https://roshan-sahu.com/ project scroll.
 */
export default function GraphicsArtScroll({ images }) {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const itemRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current || !trackRef.current || !images?.length) return;

    const ctx = gsap.context(() => {
      itemRefs.current.forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            once: true,
          },
          opacity: 0,
          x: 60,
          duration: 0.7,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [images?.length]);

  return (
    <section ref={sectionRef} className="graphics-art-scroll">
      <div ref={trackRef} className="graphics-art-scroll-track">
        {images.map((src, i) => (
          <div
            key={`${src}-${i}`}
            ref={(el) => { itemRefs.current[i] = el; }}
            className="graphics-art-scroll-item"
          >
            <img src={src} alt={`Art ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
