import React from "react";
import { Link } from "react-router-dom";

const ReadCrewmates = ({ crewmates }) => {
  return (
    <div>
      <h2>Crewmate Gallery</h2>
      {crewmates.map((mate) => (
        <div key={mate.id}>
          <Link to={`/details/${mate.id}`}>
            <h3>{mate.name}</h3>
            <p>Attribute: {mate.attribute}</p>
          </Link>
          <Link to={`/edit/${mate.id}`}><button>Edit</button></Link>
        </div>
      ))}
    </div>
  );
};

export default ReadCrewmates;
