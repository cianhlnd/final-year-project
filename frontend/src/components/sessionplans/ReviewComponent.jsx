import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import axios from 'axios';
import PropTypes from 'prop-types';
import { backendUrl } from '../../config';

function ReviewComponent({ imageName }) {
  const [rating, setRating] = useState(0); 
  const [hover, setHover] = useState(null); 

  const submitRating = async () => {
    if (rating < 1 || rating > 5) { 
      alert('Please select a valid rating between 1 and 5.');
      return;
    }
    try {
      await axios.post(`${backendUrl}/api/v1/reviews/submit`, {
        imageName,
        rating,
      }, { withCredentials: true });

      console.log('Review submitted successfully');
      setRating(0); 
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  //Render the ReviewComponent with a flexbox structure
  return (
    <div className='review-submission'>
      <div className = "flexbox-item-1">
        {/*Generate star icons for the rating, using an array to create 5 stars*/}
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;

          return (
            <label key={index} onMouseLeave={() => setHover(null)}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                //Update the rating when a star is clicked
                onClick={() => setRating(ratingValue)} 
                //Hide the radio input visually
                style={{ display: 'none' }}
              />
              <FaStar
              //Change color based on hover or selected rating
                color={ratingValue <= (hover || rating) ? "yellow" : "grey"}
                size={20}
                //Update hover state on mouse enter
                onMouseEnter={() => setHover(ratingValue)}
              />
            </label>
          );
        })}
      </div>
      <button className = "submit-button" onClick={submitRating}>Submit Review</button> 
    </div>
  );
}

//Prop type validation for imageName
ReviewComponent.propTypes = {
  imageName: PropTypes.string.isRequired,
};

export default ReviewComponent;