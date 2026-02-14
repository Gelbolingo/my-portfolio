import React from 'react';
import TiltedCard from '../TiltedCard/TiltedCard'; // Assuming TiltedCard is here
import './ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card-wrapper" onClick={() => onClick(project)}>
      <TiltedCard
        imageSrc={project.images[0]?.src || 'placeholder.jpg'} // Use first image or a placeholder
        altText={project.images[0]?.alt || project.title}
        captionText={project.title}
        containerHeight="250px"
        imageHeight="250px"
        scaleOnHover={1.05}
        rotateAmplitude={8}
        showMobileWarning={false} // Adjust as needed
        showTooltip={true}
      />
      <div className="project-card-info">
        <h3>{project.title}</h3>
        <p>{project.description.substring(0, 100)}...</p> {/* Short description */}
      </div>
    </div>
  );
};

export default ProjectCard;
