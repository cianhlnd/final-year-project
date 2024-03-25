import React from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import ImageDownload from '../ImageDownload';
import ReviewComponent from '../ReviewComponent';
import ReviewsDisplay from '../ReviewsDisplay';
import '../../../styles/Session.css';

function U8sDefendingSession() {
  //Array for  session plans, contains their URL and image name
  const sessionPlans = [
    {
      imageUrl: process.env.PUBLIC_URL + '/images/u8s-u9s/defending/0.png',
      imageName: 'u8s-u9s-defending-warm-up.png',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/images/u8s-u9s/defending/1.png',
      imageName: 'u8s-u9s-defending-drill-1.png',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/images/u8s-u9s/defending/2.png',
      imageName: 'u8s-u9s-defending-drill-2.png',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/images/u8s-u9s/match.png',
      imageName: '5-a-side-match.png',
    },
  ];
  //Asynchronous function to download all session plans as a ZIP file
  const downloadAllSessionPlans = async () => {
    const zip = new JSZip(); 
    for (const plan of sessionPlans) { 
      const response = await fetch(plan.imageUrl); //Fetches the image from the URL
      const blob = await response.blob(); //Converts the response to a blob
      zip.file(plan.imageName, blob, { binary: true }); //Adds the blob to the ZIP file with the specified file name
    }
    //Generates the ZIP file and triggers the download
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'u8s-u9s-defending-session-plans.zip');
    });
  };
  //Renders sessions plan's UI, uses a flexbox structure
  return (
    <div className="session-container">
      <h1 className="title">U8s-U9s Defending</h1>
      <button className="info-button">i
        <span className="info-text">Refresh the page to see your submitted review, you can only review each drill once</span>
      </button>
      {/*Maps over the array to dynamically generate content for each session plan*/}
      {/*Checks to see if it is a match image, if it is only the image download function is called with it*/}
      {sessionPlans.map((plan, index) => {
        if (plan.imageName === '5-a-side-match.png') {
          return (
            <div key={index} className="match-image-container">
              <ImageDownload
                imageUrl={plan.imageUrl}
                imageName={plan.imageName}
                imageSize="700px"
              />
            </div>
          );
        }
        //Renders drill images including the review functionality and download functionality
        else {
          return (
            <div key={index} className="inner-flex-container">
              <div className="flex-container-1">
                <ImageDownload
                  imageUrl={plan.imageUrl}
                  imageName={plan.imageName}
                  imageSize="500px"
                />
              </div>
              <div className="flex-container-2">
                <div className="review-box">
                  <ReviewsDisplay imageName={plan.imageName}/>
                  <ReviewComponent imageName={plan.imageName}/>
                </div>
              </div>
            </div>
          );
        }
      })}
      <button className="download-all-button" onClick={downloadAllSessionPlans}>
        Download All Plans
      </button>
    </div>
  );
}

export default U8sDefendingSession;