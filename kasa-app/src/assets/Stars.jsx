import React from "react";
import starRating from "./icon/star-rating.png";
import starInactive from "./icon/star-inactive.png";

export const Stars = ({ rating }) => {
  let arrayRating = [];
  handleRateAndStars();

  function handleRateAndStars() {
    for (let i = 0; i < 5; i++) {
      arrayRating.push(i);
    }
  }

  return (
    <div className="house-star-container">
      {arrayRating.map((item) => {
        if (item <= rating - 1) {
          return (
            <img
              className="house-star-rating"
              key={item}
              src={starRating}
              alt="étoile de notation coloré"
            />
          );
        } else {
          return (
            <img
              className="house-star-rating"
              key={item}
              src={starInactive}
              alt="étoile de notation"
            />
          );
        }
      })}
    </div>
  );
};
