import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/u8sSession.css';

function ImageDownload ({ imageUrl, imageName, imageSize }) {
  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = imageName;

    // Append the anchor to the body
    document.body.appendChild(link);

    // Trigger a click on the anchor to initiate the download
    link.click();

    // Remove the anchor from the body
    document.body.removeChild(link);
  };

  return (
    <div className="image-download-container">
      <div className="image-container">
        <img
          src={imageUrl}
          alt={imageName}
          className="image-download"
          style={{ width: imageSize, height: 'auto' }}
        />
        <button className="download-button" onClick={handleDownload}>
          Download {imageName}
        </button>
      </div>
    </div>
  );
};

ImageDownload.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  imageSize: PropTypes.string.isRequired,
};

function U8sSession  () {
  return (
    <div>
      <header className = "u8s-header">Session plan 1</header>
      <ImageDownload
        imageUrl={process.env.PUBLIC_URL + '/images/u8s-u9s/session-plan-1/warm-up.png'}
        imageName="warm-up.png"
        imageSize="600px"
      />
      <ImageDownload
        imageUrl={process.env.PUBLIC_URL + '/images/u8s-u9s/session-plan-1/dribbling-drill.png'}
        imageName="dribbling-drill.png"
        imageSize="600px"
      />
      <ImageDownload
        imageUrl={process.env.PUBLIC_URL + '/images/u8s-u9s/session-plan-1/shooting-drill.png'}
        imageName="shooting-drill.png"
        imageSize="600px"
      />
    </div>
  );
};

export default U8sSession;