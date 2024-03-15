import React from 'react';
import '../styles/Files.css';

const files = [
  { name: 'FAI Tactics Board', url: process.env.PUBLIC_URL + '/files/FAI_Template_Virtual_Tactics_Board_Session planner_PDP.pptx' },
  { name: 'FAI Player Development Plan', url: process.env.PUBLIC_URL + '/files/FAI_Player_Development_Plan.pdf' },
  { name: 'FAI Pathway Plan', url: process.env.PUBLIC_URL + '/files/FAI_Pathway_Plan.pdf' },
];

function Files() {
  return (
    <div className="files-container">
      <h1 className = "files-header">Useful Files</h1>
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            <a href={file.url} download>{file.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Files;