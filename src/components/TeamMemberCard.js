import React from 'react';
import './TeamMemberCard.css';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="teamMemberCard">
      <h2>{member.name}</h2>
      <img src={member.imageUrl} alt={member.name} className='memberImage'/>
      <img src={member.imageUrl2} alt={member.name} className="memberImage" />
      <p>{member.role}</p>
      <p className="project">Project: {member.project}</p>
    </div>
  );
};

export default TeamMemberCard;
