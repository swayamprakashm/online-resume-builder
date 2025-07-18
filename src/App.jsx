import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import { generateWordDoc } from "./utils/generateWordDoc";
import { saveAs } from "file-saver";
import "./App.css"; // Optional: add basic CSS

const App = () => {
  const [formData, setFormData] = useState(null);

  const handleDownload = () => {
    const docContent = generateWordDoc(formData);
    const blob = new Blob([docContent], { type: "application/msword" });
    saveAs(blob, "Resume.doc");
  };

  return (
    <div className="app-container">
      <h1>🎓 Resume Builder</h1>
      <ResumeForm setFormData={setFormData} />
      {formData && <ResumePreview data={formData} />}
      <button className="download-btn" onClick={handleDownload}>📥 Download DOC</button>
    </div>
  );
};

export default App;
