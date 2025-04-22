import React, { useState } from "react";
import { supabase } from "../client";
import { useNavigate } from "react-router-dom";

const CreateCrewmate = ({ onCreated }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    attribute: "sneaky",
    role: "crewmate",
    color: "red",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from("crewmates").insert([formData]);
    if (!error) {
      onCreated(); // refresh data
      navigate("/gallery");
    } else {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Create a Crewmate</h2>
      <form onSubmit={handleSubmit}>
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

        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateCrewmate;
