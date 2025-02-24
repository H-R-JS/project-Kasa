import React from "react";

import starRating from "./icon/star-rating.png";
import starInactive from "./icon/star-inactive.png";

export const Stars = ({ arrayStars, arrayRating }) => {
  return (
    <div className="house-star-container">
      {arrayStars.map((item) => {
        if (arrayRating.includes(item)) {
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
