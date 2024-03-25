import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../../config';

function ReviewsDisplay({ imageName }) {
  const [reviews, setReviews] = useState([]); //State for storing the list of reviews
  const [averageRating, setAverageRating] = useState(0); //State for storing the average rating

  //useEffect hook that fetches reviews once the component mounts or the imageName prop changes
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        //Asynchronously fetches the reviews from the backend using axios
        const response = await axios.get(`${backendUrl}/api/v1/reviews/reviews/${imageName}`, { withCredentials: true });
        //Updates the state with the fetched reviews and average rating
        setReviews(response.data.reviews);
        setAverageRating(response.data.averageRating);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
    fetchReviews();
  }, [imageName]); //Array with imageName ensures fetchReviews runs again if imageName changes

  //Renders ReviewDisplay UI using a flexbox structure
  return (
    <div className="review-list-container">
      <div className="flexbox-item-1"> 
        {/*Displays the average rating, rounding to one decimal place*/}
        <h3>Average Rating: {averageRating.toFixed(1)}</h3>
      </div>
      <div className="review-wrapper"> 
      {/*Maps over the array of reviews to display each review*/}
      {reviews.map((review, index) => (
        <div key={index} className="review-container">
          <p>{review.username}: {review.rating}</p>
        </div>
      ))}
      </div>
    </div>
  );
}

export default ReviewsDisplay;