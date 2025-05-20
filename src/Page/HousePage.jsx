import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Carousel } from "../assets/Carousel";
import { Collapse } from "../assets/Collapse";
import { Stars } from "../assets/Stars";
import { Tags } from "../assets/Tags";
import data from "../../JSONFiles/data.json";

export const HousePage = () => {
  let appartements = data.filter((item) => item.id == useParams().id);

  if (appartements.length === 0) {
    return <Navigate to="*" replace />;
  }

  let appartement = appartements[0];

  return (
    <section className="page house">
      <Carousel pictures={appartement.pictures} />
      <article className="house-info-container">
        <div className="house-info left">
          <h2>{appartement.title}</h2>
          <p>{appartement.location}</p>
          <Tags tags={appartement.tags} />
        </div>
        <div className="house-info right">
          <div className="house-profil">
            <p>{appartement.host.name}</p>
            <img src={appartement.host.picture} alt="Photo de profil" />
          </div>
          <Stars rating={appartement.rating} />
        </div>
      </article>
      <article className="house-collapse-container">
        <Collapse classElement="house" title="Description">
          <p className="coll-value-text">{appartement.description}</p>
        </Collapse>
        <Collapse classElement="house" title="Équipements">
          {appartement.equipments.map((item, index) => {
            return (
              <p key={index} className="coll-value-array">
                {item}
              </p>
            );
          })}
        </Collapse>
      </article>
    </section>
  );
};
