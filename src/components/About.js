import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const languages = [
  {
    name: 'JavaScript',
    image: '/javascript.png',
  },
  {
    name: 'React',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  },
  {
    name: 'HTML',
    image: '/html.png',
  },
  {
    name: 'CSS',
    image: '/css.png',
  },
  {
    name: 'Python',
    image: '/python.png',
  },
  {
    name: 'Java',
    image: '/java.png', // Image from public folder
  },
  ];

const AboutMe = () => {
  return (
    <motion.div
      className="about"
      initial={{ x: '0vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <section className="about-section" id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            I'm a passionate web developer who loves to create dynamic and responsive websites. Not only do I create 
            and design webpages, I also develop the back-end of websites. Below are some languages that I know. I know the languages below and a framework of each; 
          </p>

          <div className="languages-container">
            {languages.map((language, index) => (
              <div key={index} className="language-card">
                {/* Display image for the language */}
                <img
                  src={language.image}
                  alt={language.name}
                  className="language-image"
                />
                <h3 className="language-name">{language.name}</h3>
              </div>
            ))}
          </div>
          <p>
            
          </p>
          
        </div>
      </section>
    </motion.div>
  );
};

export default AboutMe;
