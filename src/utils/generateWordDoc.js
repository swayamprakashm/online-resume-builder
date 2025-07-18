export const generateWordDoc = (data) => {
  const { font } = data;
  return `
    <html>
      <head><style>body { font-family: ${font}; }</style></head>
      <body>
        <h1>${data.name}</h1>
        <p><strong>Address:</strong> ${data.address}</p>
        <p><strong>Contact:</strong> ${data.contact}</p>
        <p><strong>Objective:</strong> ${data.objective}</p>
        <p><strong>Education:</strong><ul>${data.education.map(e => `<li>${e}</li>`).join("")}</ul></p>
        <p><strong>Projects:</strong><ul>${data.projects.map(p => `<li>${p}</li>`).join("")}</ul></p>
        <p><strong>Fields of Interest:</strong> ${data.interests}</p>
        <p><strong>Skills:</strong> ${data.skills}</p>
        <p><strong>Hobbies & Strengths:</strong> ${data.hobbiesStrengths}</p>
        <p><strong>Declaration:</strong> ${data.declaration}</p>
        <p><strong>Signature:</strong> ${data.signature}</p>
      </body>
    </html>
  `;
};
