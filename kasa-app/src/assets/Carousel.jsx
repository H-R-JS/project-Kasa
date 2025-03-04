import React, { useState, useEffect } from "react";
import arrowLeft from "./icon/arrow-left.png";
import arrowRight from "./icon/arrow-right.png";

export const Carousel = ({ pictures }) => {
  const [indexPicture, setIndexPicture] = useState(0);

  const [displayArrows, setDisplayArrows] = useState("show");

  const lengthPictures = pictures.length;

  function handlePictures(e) {
    const classArrow = e.target.classList[1];
    const picturesLength = lengthPictures - 1;

    const resultLeft = indexPicture == 0 ? picturesLength : indexPicture - 1;
    const resultRight = indexPicture == picturesLength ? 0 : indexPicture + 1;

    if (classArrow == "left") {
      setIndexPicture(resultLeft);
    } else if (classArrow == "right") {
      setIndexPicture(resultRight);
    }
  }

  useEffect(() => {
    if (lengthPictures == 1) {
      setDisplayArrows("none");
    } else {
      setDisplayArrows("show");
    }
  }, [lengthPictures]);

  return (
    <article className="carousel-container">
      <div className="carousel">
        <img
          onClick={handlePictures}
          src={arrowLeft}
          className={`arrow left ${displayArrows}`}
          alt="Flèche de gauche"
        />
        <img
          src={pictures[indexPicture]}
          className="img-carousel"
          alt="Image du logement"
        />
        <img
          onClick={handlePictures}
          src={arrowRight}
          className={`arrow right ${displayArrows}`}
          alt="Flèche de droite"
        />
        <span className="carousel-index">{`${
          indexPicture + 1
        }/${lengthPictures}`}</span>
      </div>
    </article>
  );
};
