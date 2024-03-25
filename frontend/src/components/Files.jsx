import React from 'react';
import '../styles/Files.css';

//Array containing objects for each file
const files = [
  //'name' is the text displayed for the link
  //'url' constructs the path to the file based on the PUBLIC_URL environment variable
  { name: 'FAI Tactics Board', url: process.env.PUBLIC_URL + '/files/FAI_Template_Virtual_Tactics_Board_Session planner_PDP.pptx' },
  { name: 'FAI Player Development Plan', url: process.env.PUBLIC_URL + '/files/FAI_Player_Development_Plan.pdf' },
  { name: 'FAI Pathway Plan', url: process.env.PUBLIC_URL + '/files/FAI_Pathway_Plan.pdf' },
];

function Files() {
  //Renders Files UI
  return (
    <div>
    <div>
      <h1 className = "files-header">FAI Links</h1>
    </div>
    <div className="files-container">
      <ul>
        {/*Maps over the array to render each file as a list item with a download link*/}
        {files.map((file, index) => (
          <li key={index}> {/*Uses index as a key for each list item*/}
            <a href={file.url} download>{file.name}</a>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Files;