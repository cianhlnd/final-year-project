import React from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import ImageDownload from '../ImageDownload';
import ReviewComponent from '../ReviewComponent';
import ReviewsDisplay from '../ReviewsDisplay';
import '../../../styles/Session.css';

function U10sDefendingSession() {
  const sessionPlans = [
    {
      imageUrl: process.env.PUBLIC_URL + '/images/u10s-u11s/defending/0.png',
      imageName: 'u10s-u11s-defending-warm-up.png',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/images/u10s-u11s/defending/1.png',
      imageName: 'u10s-u11s-defending-drill-1.png',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/images/u10s-u11s/defending/2.png',
      imageName: 'u10s-u11s-defending-drill-2.png',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/images/u10s-u11s/match.png',
      imageName: '7-a-side-match.png',
    },
  ];

  const downloadAllSessionPlans = async () => {
    const zip = new JSZip();
    for (const plan of sessionPlans) {
      const response = await fetch(plan.imageUrl);
      const blob = await response.blob();
      zip.file(plan.imageName, blob, { binary: true });
    }
    zip.generateAsync({ type: 'blob' }).then((content) => {
      saveAs(content, 'u10s-u11s-defending-session-plans.zip');
    });
  };

  return (
    <div className="session-container">
      <h1 className="title">U10s-U11s Defending</h1>
      <button className="info-button">i
        <span className="info-text">Each drill should be 15 minutes with a match at the end</span>
      </button>
      {sessionPlans.map((plan, index) => {
        if (plan.imageName === '7-a-side-match.png') {
          return (
            <div key={index} className="match-image-container">
              <ImageDownload
                imageUrl={plan.imageUrl}
                imageName={plan.imageName}
                imageSize="700px"
              />
            </div>
          );
        } else {
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

export default U10sDefendingSession;