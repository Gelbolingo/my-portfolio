import React from 'react';
import './GraphicsArtScrollSnap.css';

/**
 * Stacked cards effect – cards stick and stack as you scroll.
 * Inspired by https://prismic.io/blog/css-scroll-effects#13-stacked-cards-effect
 */
export default function GraphicsArtScrollSnap({ images }) {
  return (
    <div
      className="graphics-art-stacked-wrap"
      style={{ '--card-count': images.length }}
    >
      {images.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className="graphics-art-stacked-card"
          style={{ zIndex: i + 1, '--card-index': i }}
        >
          <img src={src} alt={`Art ${i + 1}`} loading="lazy" />
        </div>
      ))}
    </div>
  );
}
