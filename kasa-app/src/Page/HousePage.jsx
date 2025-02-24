import React from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "../assets/Carousel";
import { Collapse } from "../assets/Collapse";
import { Stars } from "../assets/Stars";

export const HousePage = () => {
  const object = useLocation().state;

  console.log(object);
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
          <Stars arrayStars={arrayStars} arrayRating={arrayRating} />
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
