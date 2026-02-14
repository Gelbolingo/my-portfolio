import React from 'react';
import './ColorBends.css';

/**
 * Color Bends style background with rotation and auto-rotate.
 * Inspired by https://reactbits.dev/backgrounds/color-bends?rotation=-18&autoRotate=-3
 */
export default function ColorBends() {
  return (
    <div className="color-bends-wrap" aria-hidden="true">
      <div className="color-bends">
        <div className="color-bends-blob color-bends-blob-1" />
        <div className="color-bends-blob color-bends-blob-2" />
        <div className="color-bends-blob color-bends-blob-3" />
        <div className="color-bends-blob color-bends-blob-4" />
        <div className="color-bends-blob color-bends-blob-5" />
      </div>
    </div>
  );
}
