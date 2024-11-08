import React from 'react';
// import { useSpring, animated } from 'react-spring';
import TeamMemberCard from './TeamMemberCard';
import './MyTeam.css';

const teamMembers = [
  {
    name: 'Azeez Okhamena',
    role: 'Frontend Developer',
    project: 'NebTech E-commerce Platform',
    imageUrl: 'https://tiny-sunburst-ad7469.netlify.app/img/projects/e-commerce.jpg',
    imageUrl2: 'https://tiny-sunburst-ad7469.netlify.app/img/projects/northstar.jpg'
  },
  {
    name: 'Oluwaseun Fashina',
    role: 'Back-end Developer',
    project: 'Raize App, Linkzen',
    imageUrl: 'https://oluwaseun.vercel.app/assets/raize-22ad6559.png',
    imageUrl2 : 'https://oluwaseun.vercel.app/assets/linkzen-6a2b3b5a.jpeg'
  },
  {
    name: 'Edoma Benjamin',
    role: 'Front-end Developer',
    project: 'Gotra, Boogie Bot',
    imageUrl: 'https://benjamin-dev.vercel.app/img/projects/boogie-bot.vercel.app.jpg',
    imageUrl2: '/thing.jpg'
  },
  // Add more team members here
];

const MyTeam = () => {
//   const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 1500 } });

  return (
    <div className="myTeam">
      <h1 className="teamHeading">Meet Our Team</h1>
      <div className="teamContainer">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default MyTeam;
