import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';
import './Project.css';
import MyTeam from './MyTeam';

const ProjectPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Grant Univerity',
      description: 'This is the official website of the grant university.',
      image: '/education.jpg', // Leave empty for user to input their own image
      techStack: ['JSF & Facelets', 'xHTML', 'Java', 'Hibernate','Spring']
    },
    {
      id: 2,
      title: 'Foodhub Restaurant',
      description: 'An online restaurant Menu and delivery service',
      image: '/foodhub_white.png', // Leave empty for user to input their own image
      techStack: ['React', 'CSS', 'MySQL', 'Python']
    },
    {
      id: 3,
      title: 'ConectProperties',
      description: 'An online real estate website. It shows properties around you that are for sale or for rentage and connects buyers to use.',
      image: '/WhatsApp Image 2024-09-29 at 16.27.45_c150205f.jpg', // Leave empty for user to input their own image
      techStack: ['React with axios', 'Tailwind css', 'Java', 'Vanilla javascript' ]
    },{
      id: 4,
      title: 'Lisah Luxury Empire ',
      description: 'An online luxury brand website.',
      image: '/327736374_1647800925676989_6883070318949716767_n.jpg', // Leave empty for user to input their own image
      techStack: ['React', 'Tailwind css', 'HTML', 'Vanilla javascript' ]
    },
    // Add more project entries as needed
  ]);

  // Function to handle image upload for a project
  const handleImageUpload = (e, id) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const updatedProjects = projects.map(project => 
        project.id === id ? { ...project, image: reader.result } : project
      );
      setProjects(updatedProjects);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="project-page">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projects.map(project => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ y: '0vh' }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelectedProject(project)}
          >
            <input
              type="file"
              onChange={(e) => handleImageUpload(e, project.id)}
              className="image-input"
            />
            {project.image ? (
              <img src={project.image} alt={`${project.title} thumbnail`} />
            ) : (
              <div className="image-placeholder">Upload Image</div>
            )}
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      
      <MyTeam/>
    </div>
  );
};

export default ProjectPage;
