import React from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from "../assets/Carousel";

export const HousePage = () => {
  const object = useLocation().state;

  console.log(object);

  return (
    <section className="page house">
      <Carousel pictures={object.pictures} />
    </section>
  );
};
