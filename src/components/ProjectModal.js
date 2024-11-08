import React from 'react';
import { motion } from 'framer-motion';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  return (
    <motion.div className="modal-backdrop" onClick={onClose}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
        exit={{ y: '100vh' }}
        onClick={(e) => e.stopPropagation()} // Prevents modal close on click inside content
      >
        <h2>{project.title}</h2>
        {project.image && <img src={project.image} alt={`${project.title} large`} />}
        <p>{project.description}</p>
        <h3>Tech Stack:</h3>
        <ul>
          {project.techStack.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;
