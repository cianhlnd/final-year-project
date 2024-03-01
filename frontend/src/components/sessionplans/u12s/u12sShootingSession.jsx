import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/Session.css';

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

function U12sShootingSession  () {
  return (
    <div>
      <header className = "u8s-header">Dribbling</header>
      <ImageDownload
        imageUrl={process.env.PUBLIC_URL + '/images/u8s-u9s/dribbling/warm-up.png'}
        imageName="u8s-u9s-dribbling-warm-up.png"
        imageSize="500px"
      />
      <ImageDownload
        imageUrl={process.env.PUBLIC_URL + '/images/u8s-u9s/dribbling/dribbling.png'}
        imageName="king-of-the-ring.png"
        imageSize="500px"
      />
      <ImageDownload
        imageUrl={process.env.PUBLIC_URL + '/images/u8s-u9s/dribbling/u8s-u9s-dribbling-warm-up.png'}
        imageName="shooting-drill.png"
        imageSize="500px"
      />
    </div>
  );
};

export default U12sShootingSession;