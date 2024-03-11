import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ReviewsDisplay({ imageName }) {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/v1/reviews/reviews/${imageName}`, { withCredentials: true });
        setReviews(response.data.reviews);
        setAverageRating(response.data.averageRating);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [imageName]);

  return (
    <div className="review-list-container">
  <div className="flexbox-item-1"> 
    <h3>Average Rating: {averageRating.toFixed(1)}</h3>
  </div>
  <div className="review-wrapper"> 
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