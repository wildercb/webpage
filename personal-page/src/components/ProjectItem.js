import React from 'react';

function ProjectItem({ project }) {
  return (
    <div className="project-item">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
}

export default ProjectItem;

