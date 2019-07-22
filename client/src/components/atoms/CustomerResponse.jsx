import React from 'react';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';

export default function CustomerResponse(props){
  const rating = props.rating || 4.2;
  const reviewCount = props.reviewCount || 253;
  const questionCount = props.questionCount || 19;

  const ReviewsSummary = styled.span`
    margin-left: 8px;
    position: relative;
    top: 4px;
  `

  return (
    <React.Fragment>
      <StarRatings
        rating={rating}
        starRatedColor="#ed9220"
        starEmptyColor={"#ccc"}
        starDimension={'18px'}
        starSpacing={'1px'}
        numberOfStars={5}
        name='titleRating'
      />
      <ReviewsSummary><a href="#">{reviewCount} customer reviews</a>  | <a href="#">{questionCount} answered questions</a></ReviewsSummary>
    </React.Fragment>
  )
}