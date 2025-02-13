import React, { useState } from "react";
import arrowLeft from "./icon/arrow-left.png";
import arrowRight from "./icon/arrow-right.png";

export const Carousel = ({ pictures }) => {
  const [indexPicture, setIndexPicture] = useState(0);

  function handlePictures(e) {
    const classArrow = e.target.classList[1];
    const picturesLength = pictures.length - 1;
    if (classArrow == "left") {
      if (indexPicture == 0) {
        setIndexPicture(picturesLength);
      } else {
        setIndexPicture(indexPicture - 1);
      }
    } else if (classArrow == "right") {
      if (indexPicture == picturesLength) {
        setIndexPicture(0);
      } else {
        setIndexPicture(indexPicture + 1);
      }
    }
  }

  return (
    <article>
      <div className="carousel">
        <img
          onClick={handlePictures}
          src={arrowLeft}
          className="arrow left"
          alt="Flèche de gauche"
        />
        <img
          src={pictures[indexPicture]}
          className="img-carousel"
          alt="Flèche de gauche"
        />
        <img
          onClick={handlePictures}
          src={arrowRight}
          className="arrow right"
          alt="Flèche de droite"
        />
      </div>
    </article>
  );
};
