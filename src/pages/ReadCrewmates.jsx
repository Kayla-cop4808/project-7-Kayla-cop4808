import React from "react";
import { Link } from "react-router-dom";

const ReadCrewmates = ({ crewmates }) => {
  return (
    <div className="gallery-container">
      <h2>Crewmate Gallery</h2>
      <div className="crewmate-cards">
        {crewmates.map((crewmate) => (
          <div key={crewmate.id} className="crewmate-card">
            <h3>{crewmate.name}</h3>
            <p><strong>Attribute:</strong> {crewmate.attribute}</p>
            <p><strong>Color:</strong> {crewmate.color}</p>
            <Link to={`/details/${crewmate.id}`} className="view-details-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadCrewmates;
