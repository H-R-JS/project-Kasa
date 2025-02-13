import React from "react";
import { useNavigate } from "react-router-dom";

export const Card = ({ title, cover, object }) => {
  console.log(object);

  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/house/${object.id}`, { state: object })}
      to={`/house/${object.id}`}
      className="link-card"
    >
      <img src={cover} alt="" />
      <p>{title}</p>
    </div>
  );
};
