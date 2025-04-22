import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";

const CreateCrewmate = ({ onCreated }) => {
  const [form, setForm] = useState({
    name: "",
    attribute: "",
    role: "",
    color: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await supabase.from("crewmates").insert([form]);
    onCreated();
    navigate("/gallery");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a Crewmate</h2>
      <input name="name" placeholder="Name" onChange={handleChange} required />
      <input name="attribute" placeholder="Attribute" onChange={handleChange} />
      <input name="role" placeholder="Role" onChange={handleChange} />
      <input name="color" placeholder="Color" onChange={handleChange} />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
      />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateCrewmate;
