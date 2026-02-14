import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './WorkMarquee.css';

const WorkMarquee = ({ projects }) => {
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current || !projects.length) return;
    const track = trackRef.current;
    const width = track.scrollWidth;
    const duration = width / 80;
    const tl = gsap.timeline({ repeat: -1 });
    tl.fromTo(
      track,
      { x: 0 },
      { x: -width / 2, duration, ease: 'none' }
    );
    return () => tl.kill();
  }, [projects.length]);

  const duplicated = [...projects, ...projects];

  return (
    <div className="work-marquee">
      <div ref={trackRef} className="work-marquee-track">
        {duplicated.map((project, i) => (
          <div
            key={`${project.id}-${i}`}
            className="work-marquee-card"
          >
            <div className="work-marquee-img-wrap">
              <img src={project.images?.[0]?.src} alt={project.title} />
            </div>
            <div className="work-marquee-info">
              <span className="work-marquee-cat">{project.category}</span>
              <span className="work-marquee-title">{project.title}</span>
              {(project.liveDemo || project.repo) && (
                <a
                  href={project.liveDemo || project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="work-marquee-link"
                >
                  View project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkMarquee;
