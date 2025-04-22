import React from "react";

const PhonesCard = ({ phone }) => {
  const { name, image, description } = phone || {};

  return (
    <div className="card bg-base-100 shadow-sm border-2 border-gray-200">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View More</button>
        </div>
      </div>
    </div>
  );
};

export default PhonesCard;
