import React from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "../assets/Carousel";
import { Collapse } from "../assets/Collapse";
import starRating from "../assets/icon/star-rating.png";
import starInactive from "../assets/icon/star-inactive.png";

export const HousePage = () => {
  const object = useLocation().state;

  let arrayRating = [];
  let arrayStars = [];
  handleRateAndStars();

  function handleRateAndStars() {
    for (let i = 0; i < 5; i++) {
      arrayStars.push(i);
    }

    for (let i = 0; i < object.rating; i++) {
      arrayRating.push(i);
    }
  }

  return (
    <section className="page house">
      <Carousel pictures={object.pictures} />
      <article className="house-info-container">
        <div className="house-info left">
          <h2>{object.title}</h2>
          <p>{object.location}</p>
          <div className="house-tag-container">
            {object.tags.map((item, index) => {
              return (
                <span key={index} className="house-tag">
                  {item}
                </span>
              );
            })}
          </div>
        </div>
        <div className="house-info right">
          <div className="house-profil">
            <p>{object.host.name}</p>
            <img src={object.host.picture} alt="Photo de profil" />
          </div>
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
        </div>
      </article>
      <article className="house-collapse-container">
        <Collapse
          classElement="house"
          title="Description"
          text={object.description}
        />
        <Collapse
          classElement="house"
          title="Équipements"
          array={object.equipments}
        />
      </article>
    </section>
  );
};
