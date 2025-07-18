import React from 'react';

const ResumePreview = ({ data }) => {
  return (
    <div className="resume-preview" style={{ fontFamily: data.font }}>
      <h2>{data.name}</h2>
      <p>{data.address}</p>
      <p>Contact: {data.contact} | Email: {data.email}</p>
      <hr />
      <h3>Objective</h3>
      <p>{data.objective}</p>

      <h3>Education</h3>
      {data.education.map((edu, i) => <p key={i}>{edu}</p>)}

      <h3>Projects</h3>
      {data.projects.map((proj, i) => <p key={i}>{proj}</p>)}

      <h3>Field of Interest</h3>
      <p>{data.interests}</p>

      <h3>Skills</h3>
      <p>{data.skills}</p>

      <h3>Hobbies & Strengths</h3>
      <p>{data.hobbies}</p>

      <h3>Declaration</h3>
      <p>{data.declaration}</p>

      <br />
      <p><b>Signature:</b> {data.signature}</p>
    </div>
  );
};

export default ResumePreview;
