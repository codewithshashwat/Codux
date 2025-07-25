import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitProject } from "../utils/api";

const Submit = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    tech_stack: "",
    live_link: "",
    repo_link: ""
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await submitProject(form);
    if (res.id) navigate("/");
    else alert("Submission failed");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col gap-3 p-4">
      <input name="title" placeholder="Title" onChange={handleChange} required />
      <textarea name="description" placeholder="Description" onChange={handleChange} required />
      <input name="tech_stack" placeholder="Tech Stack" onChange={handleChange} required />
      <input name="live_link" placeholder="Live Link" onChange={handleChange} />
      <input name="repo_link" placeholder="Repo Link" onChange={handleChange} />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default Submit;
