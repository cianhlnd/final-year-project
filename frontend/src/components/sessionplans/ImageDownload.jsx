import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/Session.css'; 

function ImageDownload({ imageUrl, imageName, imageSize }) {
  //Function to handle the download action
  const handleDownload = () => {
    const link = document.createElement('a'); //Create a new <a> element
    link.href = imageUrl; //Sets href to image URL
    link.download = imageName; //Sets download to image name
    document.body.appendChild(link); //Temporarily add the link to the document body
    link.click(); //Triggers the download
    document.body.removeChild(link); //Removes the link from the document body
  };

  //Render the ImageDownload UI, utilises a flexbox display for structuring the elements on the page
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

//PropTypes for type-checking the props passed to the ImageDownload function
ImageDownload.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageName: PropTypes.string.isRequired,
  imageSize: PropTypes.string.isRequired,
};

export default ImageDownload;