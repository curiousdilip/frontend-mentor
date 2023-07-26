import React from 'react';
const Card = (props) => {
  const { image, title, tech1, tech2, tech3, liveLink, repoLink } = props;
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt="" />
      </div>
      <div className="card-content">
        <h1 className="card-title">{title}</h1>
        <div className="card-labels">
          <span className="flair">{tech1}</span>
          <span className="flair">{tech2}</span>
          <span className="flair">{tech3}</span>
        </div>
        <div className="card-links">
          <a target="_blank" rel="noreferrer" className="live-url-card" href={liveLink}>
            Live URL
          </a>
          <a target="_blank" rel="noreferrer" className="github-card" href={repoLink}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
