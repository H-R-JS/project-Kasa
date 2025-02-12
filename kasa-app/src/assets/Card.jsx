import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ title, cover }) => {
  return (
    <Link to="" className="link-card">
      <img src={cover} alt="" />
      <p>{title}</p>
    </Link>
  );
};
