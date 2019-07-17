import React from 'react';
import StarRatings from 'react-star-ratings';

export default function CustomerResponse(props){
  const rating = props.rating || 4.2;
  const reviewCount = props.reviewCount || 253;
  const questionCount = props.questionCount || 19;

  return (
    <React.Fragment>
      <StarRatings
        rating={rating}
        starRatedColor="#ed9220"
        starEmptyColor={"#fff"}
        starDimension={'18px'}
        starSpacing={'1px'}
        numberOfStars={5}
        name='titleRating'
      />
      <span><a href="#">{reviewCount} customer reviews</a>  | <a href="#">{questionCount} answered questions</a></span>
    </React.Fragment>
  )
}