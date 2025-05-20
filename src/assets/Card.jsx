import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ title, cover, object }) => {
  return (
    <Link to={`/house/${object.id}`} className="link-card">
      <img src={cover} alt="" />
      <p>{title}</p>
    </Link>
  );
};
