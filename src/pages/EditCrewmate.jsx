import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";

const EditCrewmate = ({ crewmates, refreshCrewmates }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    attribute: "sneaky",
    role: "crewmate",
    color: "red",
    description: "",
  });

  useEffect(() => {
    const crewmate = crewmates.find((c) => c.id === parseInt(id));
    if (crewmate) {
      setFormData(crewmate);
    }
  }, [crewmates, id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from("crewmates")
      .update(formData)
      .eq("id", id);

    if (!error) {
      refreshCrewmates();
      navigate("/gallery");
    } else {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    const { error } = await supabase.from("crewmates").delete().eq("id", id);
    if (!error) {
      refreshCrewmates();
      navigate("/gallery");
    } else {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Edit Crewmate</h2>
      <form onSubmit={handleUpdate}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <select name="attribute" value={formData.attribute} onChange={handleChange}>
          <option value="sneaky">Sneaky</option>
          <option value="strong">Strong</option>
          <option value="smart">Smart</option>
          <option value="clumsy">Clumsy</option>
          <option value="charismatic">Charismatic</option>
        </select>

        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="crewmate">Crewmate</option>
          <option value="engineer">Engineer</option>
          <option value="imposter">Imposter</option>
        </select>

        <select name="color" value={formData.color} onChange={handleChange}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="pink">Pink</option>
          <option value="orange">Orange</option>
          <option value="green">Green</option>
          <option value="violet">Violet</option>
        </select>

        <textarea
          name="description"
          placeholder="Add a description"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit">Update</button>
        <button type="button" onClick={handleDelete} style={{ marginLeft: "10px", color: "red" }}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default EditCrewmate;
