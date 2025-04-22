import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";

const CrewmateDetails = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);

  // Fetch crewmate details based on the ID
  const fetchCrewmateDetails = async () => {
    const { data, error } = await supabase
      .from("crewmates")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Error fetching crewmate details:", error);
    } else {
      setCrewmate(data);
    }
  };

  useEffect(() => {
    fetchCrewmateDetails();
  }, [id]);

  // If the crewmate is not found, show a loading or error message
  if (!crewmate) {
    return <div>Loading...</div>;
  }

  return (
    <div className="crewmate-details">
      <h2>{crewmate.name}</h2>
      <p><strong>Attribute:</strong> {crewmate.attribute}</p>
      <p><strong>Role:</strong> {crewmate.role}</p>
      <p><strong>Color:</strong> {crewmate.color}</p>
      <p><strong>Description:</strong> {crewmate.description}</p>

      {/* Add an edit button */}
      <Link to={`/edit/${crewmate.id}`} className="edit-button">
        Edit Crewmate
      </Link>
    </div>
  );
};

export default CrewmateDetails;
