import React from "react";
import { useParams, Link } from "react-router-dom";

const CrewmateDetails = ({ crewmates }) => {
  const { id } = useParams();
  const crewmate = crewmates.find((m) => m.id.toString() === id);

  if (!crewmate) return <p>Crewmate not found.</p>;

  return (
    <div>
      <h2>{crewmate.name}</h2>
      <p>Attribute: {crewmate.attribute}</p>
      <p>Created: {new Date(crewmate.created_at).toLocaleString()}</p>
      <Link to={`/edit/${crewmate.id}`}><button>Edit Crewmate</button></Link>
    </div>
  );
};

export default CrewmateDetails;
