import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const titles = useMemo(() => [
    "Software Engineer",
    "Web Developer",
    "Tech Enthusiast",
    "Lifelong Learner",
    "Project Manager"
  ], []);

  const [currentTitle, setCurrentTitle] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typeTimeout = setTimeout(() => {
      setCurrentTitle((value) => value + titles[titleIndex].charAt(charIndex));
      setCharIndex(charIndex + 1);
    }, 100);

    if (charIndex === titles[titleIndex].length) {
      clearTimeout(typeTimeout);
      setTimeout(() => {
        setCharIndex(0);
        setTitleIndex((index) => (index + 1) % titles.length);
        setCurrentTitle('');
      }, 2000);
    }

    return () => clearTimeout(typeTimeout);
  }, [charIndex, titleIndex, titles]);

  return (
    <div className="home">
      <div className="hero">
        <h1 className="fade-in">Hello, I'm John Mamuda</h1>
        
        {/* Custom Typing Animation */}
        <h2 className="dynamic-title">{currentTitle}</h2>
        
        <p className="slide-in">I'm a passionate software engineer specializing in building exceptional digital experiences.
          I have been working in webpages and website development from utilising java to python and Node.js. I am full stack web developer.  
        </p>
        <div className="buttons bounce-in">
          <Link to="/projects" className="btn">Projects</Link>
          <a href='https://docs.google.com/document/d/1PIPFbSO2sVyfmKZ7zb1eUYot6VgWWa4aYeEgJYyMzok/edit?usp=sharing' className='btn btn-secondary'>View Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
