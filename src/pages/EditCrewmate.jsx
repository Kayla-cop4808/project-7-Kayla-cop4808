import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../client";

const EditCrewmate = ({ crewmates, refreshCrewmates }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const crewmate = crewmates.find((m) => m.id.toString() === id);

  const [form, setForm] = useState({
    name: crewmate?.name || "",
    attribute: crewmate?.attribute || "",
    role: crewmate?.role || "",
    color: crewmate?.color || "",
    description: crewmate?.description || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    await supabase.from("crewmates").update(form).eq("id", id);
    refreshCrewmates();
    navigate("/gallery");
  };

  const handleDelete = async () => {
    await supabase.from("crewmates").delete().eq("id", id);
    refreshCrewmates();
    navigate("/gallery");
  };

  return (
    <form onSubmit={handleUpdate}>
      <h2>Edit Crewmate</h2>
      <input name="name" value={form.name} onChange={handleChange} required />
      <input name="attribute" value={form.attribute} onChange={handleChange} />
      <input name="role" value={form.role} onChange={handleChange} />
      <input name="color" value={form.color} onChange={handleChange} />
      <textarea name="description" value={form.description} onChange={handleChange} />
      <button type="submit">Save Changes</button>
      <button type="button" onClick={handleDelete} style={{ color: "red" }}>
        Delete Crewmate
      </button>
    </form>
  );
};

export default EditCrewmate;
