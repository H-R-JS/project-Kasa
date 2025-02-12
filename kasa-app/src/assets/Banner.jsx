import React from "react";

export const Banner = ({ text, img }) => {
  return (
    <article className="banner">
      <img src={img} alt="Image d'arrière plan" />
      <h1>{text}</h1>
    </article>
  );
};
