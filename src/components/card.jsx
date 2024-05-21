// import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      <img src={image} className="card-img" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-center">{description}</p>
      </div>
    </div>
  );
};

export default Card;
