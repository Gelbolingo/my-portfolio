import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './IntroAnimation.css';

const IntroAnimation = ({ onAnimationEnd }) => {
  const overlayRef = useRef(null);
  const brandRef = useRef(null);
  const loadingRef = useRef(null);
  const barRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state: brand hidden
      gsap.set(brandRef.current, { opacity: 0, scale: 0.9 });
      gsap.set(loadingRef.current, { opacity: 0 });
      gsap.set(barRef.current, { scaleX: 0, transformOrigin: 'left' });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Reveal UNREAL GRAPHICS with impact
      tl.to(brandRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'back.out(1.2)',
      })
        .to(loadingRef.current, { opacity: 1, duration: 0.4 }, '-=0.3')
        .to(
          barRef.current,
          {
            scaleX: 1,
            duration: 1.4,
            ease: 'power2.inOut',
          },
          '-=0.2'
        );

      // Progress counter (0–100) synced with bar fill
      const startTime = Date.now();
      const duration = 1400;
      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const p = Math.min(100, Math.floor((elapsed / duration) * 100));
        setProgress(p);
        if (p >= 100) {
          setProgress(100);
          clearInterval(interval);
        }
      }, 40);

      // Hold, then fade out and exit
      tl.to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.9,
          ease: 'power2.in',
          onComplete: () => {
            onAnimationEnd();
          },
        },
        '+=0.5'
      );
    });

    return () => ctx.revert();
  }, [onAnimationEnd]);

  return (
    <div ref={overlayRef} className="intro-animation-overlay">
      <div className="intro-content">
        <h1 ref={brandRef} className="intro-brand">
          <span className="intro-brand-word">UNREAL</span>
          <span className="intro-brand-word intro-brand-word--graphics">GRAPHICS</span>
        </h1>
        <div ref={loadingRef} className="intro-loading">
          <p className="intro-loading-text">Loading</p>
          <div className="intro-loading-bar-wrap">
            <div ref={barRef} className="intro-loading-bar" />
          </div>
          <span className="intro-loading-count">{progress}%</span>
        </div>
      </div>
      <div className="intro-noise" aria-hidden="true" />
    </div>
  );
};

export default IntroAnimation;
