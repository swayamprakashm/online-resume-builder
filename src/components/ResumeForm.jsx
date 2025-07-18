import React, { useState } from "react";
import "./Form.css";

const ResumeForm = ({ setFormData }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
    objective: "",
    education: [""],
    projects: [""],
    interests: "",
    skills: "",
    hobbiesStrengths: "",
    declaration: "",
    signature: "",
    font: "Calibri"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setFormData({ ...data, [name]: value });
  };

  const handleArrayChange = (index, value, field) => {
    const updated = [...data[field]];
    updated[index] = value;
    setData({ ...data, [field]: updated });
    setFormData({ ...data, [field]: updated });
  };

  const addField = (field) => {
    const updated = [...data[field], ""];
    setData({ ...data, [field]: updated });
  };

  return (
    <div className="form-section">
      <label>Name:
        <input name="name" onChange={handleChange} />
      </label>

      <label>Email:
        <input name="email" type="email" onChange={handleChange} />
      </label>

      <label>Address:
        <textarea name="address" onChange={handleChange} />
      </label>

      <label>Contact:
        <input name="contact" onChange={handleChange} />
      </label>

      <label>Objective:
        <textarea name="objective" onChange={handleChange} />
      </label>

      <div className="field-group">
        <label>Education:</label>
        {data.education.map((edu, index) => (
          <input
            key={index}
            value={edu}
            onChange={(e) => handleArrayChange(index, e.target.value, "education")}
          />
        ))}
        <button type="button" className="btn-add" onClick={() => addField("education")}>+ Add Education</button>
      </div>

      <div className="field-group">
        <label>Projects:</label>
        {data.projects.map((proj, index) => (
          <input
            key={index}
            value={proj}
            onChange={(e) => handleArrayChange(index, e.target.value, "projects")}
          />
        ))}
        <button type="button" className="btn-add" onClick={() => addField("projects")}>+ Add Project</button>
      </div>

      <label>Fields of Interest:
        <textarea name="interests" onChange={handleChange} />
      </label>

      <label>Skills:
        <textarea name="skills" onChange={handleChange} />
      </label>

      <label>Hobbies & Strengths:
        <textarea name="hobbiesStrengths" onChange={handleChange} />
      </label>

      <label>Declaration:
        <textarea name="declaration" onChange={handleChange} />
      </label>

      <label>Signature:
        <input name="signature" onChange={handleChange} />
      </label>

      <label>
        Font:
        <select name="font" onChange={handleChange}>
          <option value="Calibri">Calibri</option>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
      </label>
    </div>
  );
};

export default ResumeForm;
