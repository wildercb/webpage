import React, { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulating fetch from an API
    const fetchedProjects = [
      { id: 1, title: 'Project 1', description: 'Description of Project 1' },
      { id: 2, title: 'Project 2', description: 'Description of Project 2' },
      { id: 3, title: 'Project 3', description: 'Description of Project 3' },
      { id: 4, title: 'Project 4', description: 'Description of Project 4' },
    ];
    setProjects(fetchedProjects);
  }, []);

  return (
    <div className="project-list">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;

