import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Session.css'; 

function ImageDownload({ imageUrl, imageName, imageSize }) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = imageName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className = "flex-container-1">
      <div>
        <img className = "session-image"
          src={imageUrl}
          alt={imageName}
          style={{ width: imageSize, height: 'auto' }}
        />
      </div>
      <div>
        <button className = "download-button" onClick={handleDownload}>
          Download {imageName}
        </button>
      </div>
    </div>
  );
}

ImageDownload.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  imageSize: PropTypes.string.isRequired,
};

export default ImageDownload;